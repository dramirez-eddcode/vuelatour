import { redirect } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';
import ImagesContent from './ImagesContent';

export default async function ImagesPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect('/admin/login');
  }

  // Fetch site images
  const { data: images } = await supabase
    .from('site_images')
    .select('*')
    .order('category', { ascending: true });

  // Fetch destinations and tours to check which images are used
  const [{ data: destinations }, { data: tours }] = await Promise.all([
    supabase.from('destinations').select('image_url, gallery_images'),
    supabase.from('air_tours').select('image_url, gallery_images'),
  ]);

  // Collect all used image URLs (main image + gallery images)
  const usedImageUrls = new Set<string>();
  destinations?.forEach(d => {
    if (d.image_url) usedImageUrls.add(d.image_url);
    if (d.gallery_images && Array.isArray(d.gallery_images)) {
      d.gallery_images.forEach((url: string) => url && usedImageUrls.add(url));
    }
  });
  tours?.forEach(t => {
    if (t.image_url) usedImageUrls.add(t.image_url);
    if (t.gallery_images && Array.isArray(t.gallery_images)) {
      t.gallery_images.forEach((url: string) => url && usedImageUrls.add(url));
    }
  });

  // Get file sizes for each image from Supabase Storage
  const imagesWithSize = await Promise.all(
    (images || []).map(async (image) => {
      try {
        // Extract path from Supabase Storage URL
        const urlObj = new URL(image.url);
        const pathMatch = urlObj.pathname.match(/\/storage\/v1\/object\/public\/images\/(.+)/);

        if (pathMatch && pathMatch[1]) {
          const filePath = decodeURIComponent(pathMatch[1]);

          // Get file metadata from storage
          const { data: fileData, error } = await supabase.storage
            .from('images')
            .list(filePath.split('/').slice(0, -1).join('/'), {
              search: filePath.split('/').pop(),
            });

          if (!error && fileData && fileData.length > 0) {
            return {
              ...image,
              file_size: fileData[0].metadata?.size || null,
            };
          }
        }
      } catch (err) {
        console.error('Error getting file size for', image.key, err);
      }

      return { ...image, file_size: null };
    })
  );

  return <ImagesContent user={user} images={imagesWithSize} usedImageUrls={Array.from(usedImageUrls)} />;
}
