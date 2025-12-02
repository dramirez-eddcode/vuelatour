import { NextResponse, type NextRequest } from 'next/server';
import createIntlMiddleware from 'next-intl/middleware';
import { updateSession } from '@/lib/supabase/middleware';

const intlMiddleware = createIntlMiddleware({
  locales: ['es', 'en'],
  defaultLocale: 'en',
  localePrefix: 'always',
  localeDetection: false // Siempre inglés por defecto
});

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Handle admin routes with Supabase auth
  if (pathname.startsWith('/admin')) {
    return updateSession(request);
  }

  // Handle internationalized routes
  return intlMiddleware(request);
}

export const config = {
  matcher: ['/', '/(es|en)/:path*', '/admin/:path*']
};
