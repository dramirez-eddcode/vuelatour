# 📸 Guía para Agregar Imágenes al Proyecto

## 📁 Estructura de Carpetas

Las carpetas ya están creadas en:

```
public/
└── images/
    ├── hero/           # Imagen principal (avión, vista aérea)
    ├── sections/       # Imágenes para cada sección
    ├── logos/          # Logo de Vuelatour
    └── destinations/   # Fotos de destinos
```

---

## 🖼️ Imágenes Recomendadas por Sección

### 1. **Hero Section** (Sección Principal)
**Ubicación:** `public/images/hero/`

**Imágenes necesarias:**
- `hero-main.jpg` - Avión Cessna o vista aérea circular (recomendado: 800x800px)

**Descripción:**
Imagen circular que aparece en la parte derecha del Hero. Debe ser impactante y mostrar:
- Avión en vuelo
- Vista aérea de la Riviera Maya
- Costa de Cancún desde el aire

---

### 2. **Fly and Dive Section**
**Ubicación:** `public/images/sections/`

**Imágenes necesarias:**
- `diving-underwater.jpg` - Vista submarina (recomendado: 1200x675px formato 16:9)

**Descripción:**
Imagen de buceo mostrando:
- Arrecifes de coral
- Vida marina
- Cenotes
- Agua cristalina azul turquesa

---

### 3. **Air Tours Section**
**Ubicación:** `public/images/sections/`

**Imágenes necesarias:**
- `aerial-ocean.jpg` - Vista aérea del océano (recomendado: 600x600px cuadrada)

**Descripción:**
Vista desde el avión mostrando:
- Costa de la Riviera Maya
- Agua cristalina
- Playas
- Formaciones coralinas

---

### 4. **Charter Flights Section**
**Ubicación:** `public/images/sections/`

**Imágenes necesarias:**
- `cessna-fleet.jpg` - Foto de los aviones (opcional)
- `map-maya-region.png` - Mapa de la región Maya (opcional)

**Descripción:**
- Flota de aviones Cessna
- Mapa interactivo de destinos
- Interior de cabina

---

### 5. **Why Choose Section**
**Ubicación:** `public/images/sections/`

**Imágenes necesarias:**
- `beach-background.jpg` - Fondo de playa con palmeras (recomendado: 1920x800px)

**Descripción:**
Imagen de fondo mostrando:
- Playa de Cancún/Riviera Maya
- Palmeras
- Atardecer
- Vista panorámica

---

### 6. **Jetset Banner**
**Ubicación:** `public/images/sections/`

**Imágenes necesarias:**
- `beach-hammock.jpg` - Playa con hamaca (recomendado: 1920x600px)
- `jetset-logo.png` - Logo de Jetset Transportes (si lo tienes)

**Descripción:**
Imagen relajante de playa para el banner de transporte terrestre

---

### 7. **Logo**
**Ubicación:** `public/images/logos/`

**Imágenes necesarias:**
- `vuelatour-logo.png` - Logo principal (transparente, PNG)
- `vuelatour-logo-white.png` - Logo blanco para fondos oscuros

---

## 💻 Cómo Actualizar el Código

### Método 1: Usando Next.js Image (Recomendado)

```tsx
import Image from 'next/image';

// En tu componente:
<Image
  src="/images/hero/hero-main.jpg"
  alt="Vista aérea de Cancún"
  width={800}
  height={800}
  className="w-full h-full object-cover"
  priority // Solo para la imagen principal del hero
/>
```

### Método 2: Usando tag HTML img

```tsx
<img
  src="/images/sections/diving-underwater.jpg"
  alt="Buceo en cenotes"
  className="w-full h-full object-cover"
/>
```

---

## 🔧 Ejemplos de Actualización por Componente

### Ejemplo 1: Hero Section

**Archivo:** `components/home/HeroSection.tsx`

**Reemplazar esto:**
```tsx
<div className="w-full h-full bg-gradient-to-br from-blue-400 to-cyan-300">
  <div className="w-full h-full flex items-center justify-center text-white text-4xl font-bold">
    HERO<br />IMAGE
  </div>
</div>
```

**Por esto:**
```tsx
<Image
  src="/images/hero/hero-main.jpg"
  alt="Vuelatour - Tours aéreos en Cancún"
  fill
  className="object-cover"
  priority
/>
```

---

### Ejemplo 2: Fly and Dive Section

**Archivo:** `components/home/FlyAndDiveSection.tsx`

**Reemplazar esto:**
```tsx
<div className="w-full h-full bg-gradient-to-br from-blue-600 to-cyan-400">
  <div className="w-full h-full flex items-center justify-center text-white text-3xl font-bold">
    DIVING<br />IMAGE
  </div>
</div>
```

**Por esto:**
```tsx
<Image
  src="/images/sections/diving-underwater.jpg"
  alt="Buceo en la Riviera Maya"
  fill
  className="object-cover"
/>
```

---

### Ejemplo 3: Air Tours Section

**Archivo:** `components/home/AirToursSection.tsx`

**Reemplazar esto:**
```tsx
<div className="w-full h-full bg-gradient-to-br from-cyan-400 to-blue-600">
  <div className="w-full h-full flex items-center justify-center text-white text-3xl font-bold">
    AERIAL<br />VIEW
  </div>
</div>
```

**Por esto:**
```tsx
<Image
  src="/images/sections/aerial-ocean.jpg"
  alt="Vista aérea del océano"
  fill
  className="object-cover"
/>
```

---

## 📝 Paso a Paso Completo

### 1. Guarda tus imágenes
```bash
# Copia tus imágenes a la carpeta correspondiente
# Ejemplo en Windows:
# Copiar hero-main.jpg a: C:\Users\Alex\Documents\GitHub\vuelatour\public\images\hero\
```

### 2. Importa Image en el componente
```tsx
import Image from 'next/image';
```

### 3. Reemplaza el placeholder
```tsx
// Antes:
<div className="w-full h-full bg-gradient-to-br from-blue-400 to-cyan-300">
  PLACEHOLDER
</div>

// Después:
<Image
  src="/images/hero/tu-imagen.jpg"
  alt="Descripción de la imagen"
  fill
  className="object-cover"
/>
```

### 4. Guarda y recarga
El hot reload de Next.js actualizará automáticamente

---

## 🎨 Formatos y Tamaños Recomendados

| Sección | Formato | Tamaño Recomendado | Ratio |
|---------|---------|-------------------|-------|
| Hero (circular) | JPG/WebP | 800x800px | 1:1 |
| Fly & Dive | JPG/WebP | 1200x675px | 16:9 |
| Air Tours (circular) | JPG/WebP | 600x600px | 1:1 |
| Why Choose (fondo) | JPG/WebP | 1920x800px | Libre |
| Jetset Banner | JPG/WebP | 1920x600px | Libre |
| Logos | PNG | Flexible | Transparente |

---

## 🚀 Optimización Automática

Next.js optimiza automáticamente las imágenes cuando usas el componente `<Image>`:
- ✅ Lazy loading
- ✅ Responsive automático
- ✅ WebP automático (si el navegador lo soporta)
- ✅ Blur placeholder
- ✅ Tamaños adaptativos

---

## 💡 Tips

1. **Usa nombres descriptivos:** `aerial-cancun-coast.jpg` en lugar de `IMG_1234.jpg`
2. **Optimiza antes de subir:** Usa herramientas como TinyPNG o Squoosh
3. **Formato WebP:** Mejor compresión que JPG
4. **PNG solo para logos:** Que requieran transparencia
5. **Tamaño máximo:** 1-2 MB por imagen (optimizadas)

---

## 📋 Checklist de Imágenes

- [ ] Hero principal (circular)
- [ ] Diving/underwater scene
- [ ] Aerial ocean view
- [ ] Beach background (Why Choose)
- [ ] Jetset beach/hammock
- [ ] Logo Vuelatour
- [ ] Aviones (opcional)
- [ ] Mapa región Maya (opcional)

---

## ❓ FAQ

**P: ¿Dónde consigo las imágenes?**
R: Puedes usar:
- Fotos propias de Vuelatour
- Stock gratuito: Unsplash, Pexels, Pixabay
- Compradas: Shutterstock, Adobe Stock

**P: ¿Puedo usar URLs externas?**
R: Sí, pero es mejor tenerlas en `public/` para mejor rendimiento

**P: ¿El formato importa?**
R: JPG para fotos, PNG para logos con transparencia, WebP para mejor compresión

---

## 🔗 Recursos Útiles

- [Next.js Image Component](https://nextjs.org/docs/app/building-your-application/optimizing/images)
- [Unsplash](https://unsplash.com/) - Fotos gratis
- [TinyPNG](https://tinypng.com/) - Optimizador de imágenes
- [Squoosh](https://squoosh.app/) - Compresión de imágenes

---

**¿Necesitas ayuda para actualizar un componente específico? Solo dime cuál y te genero el código exacto.**
