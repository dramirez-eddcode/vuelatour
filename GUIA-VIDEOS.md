# 🎬 Guía para Agregar Videos al Proyecto

## ✅ Video Agregado: Fly and Dive Section

### 📁 Ubicación del Video
```
public/videos/diving-underwater.mp4
```

### 📝 Implementación

El video ya está configurado en `components/home/FlyAndDiveSection.tsx`:

```tsx
<video
  className="w-full h-full object-cover"
  autoPlay      // Se reproduce automáticamente
  loop          // Se repite infinitamente
  muted         // Sin sonido (requerido para autoPlay)
  playsInline   // Se reproduce en móviles sin pantalla completa
>
  <source src="/videos/diving-underwater.mp4" type="video/mp4" />
  Tu navegador no soporta videos HTML5.
</video>
```

---

## 🎯 Características del Video

### ✅ Configuración Aplicada:

1. **autoPlay** - El video se reproduce automáticamente al cargar
2. **loop** - Se repite continuamente (perfecto para backgrounds)
3. **muted** - Sin audio (necesario para autoplay en navegadores modernos)
4. **playsInline** - En móviles, se reproduce inline sin abrir fullscreen
5. **object-cover** - El video cubre todo el espacio sin deformarse
6. **rounded-2xl** - Bordes redondeados elegantes
7. **shadow-2xl** - Sombra profesional

---

## 📦 Pasos para Agregar Tu Video

### 1. Coloca tu video en la carpeta correcta

```bash
# La carpeta ya está creada
public/videos/
```

### 2. Guarda tu archivo de video

```
Copia tu video: diving-underwater.mp4
A la carpeta: C:\Users\Alex\Documents\GitHub\vuelatour\public\videos\
```

### 3. ¡Listo! El código ya está configurado

El video se mostrará automáticamente al recargar la página.

---

## 🎨 Formatos y Tamaños Recomendados

### Formato del Video:
- **MP4** (H.264 codec) - Mayor compatibilidad
- **WebM** (opcional) - Mejor compresión

### Resolución Recomendada:
- **1280x720px (720p)** - Buena calidad, peso moderado
- **1920x1080px (1080p)** - Alta calidad (más pesado)
- **Ratio 16:9** - Estándar para videos

### Tamaño del Archivo:
- **Ideal:** 2-5 MB (comprimido)
- **Máximo:** 10 MB
- Usa herramientas como HandBrake o FFmpeg para comprimir

---

## 🔧 Opciones Avanzadas

### Si quieres que el video tenga controles:

```tsx
<video
  className="w-full h-full object-cover"
  controls     // ← Agrega controles de play/pause
  loop
  muted
>
  <source src="/videos/diving-underwater.mp4" type="video/mp4" />
</video>
```

### Si quieres un poster (imagen antes de reproducir):

```tsx
<video
  className="w-full h-full object-cover"
  autoPlay
  loop
  muted
  playsInline
  poster="/images/sections/diving-poster.jpg"  // ← Imagen de preview
>
  <source src="/videos/diving-underwater.mp4" type="video/mp4" />
</video>
```

### Para múltiples formatos (mejor compatibilidad):

```tsx
<video className="w-full h-full object-cover" autoPlay loop muted playsInline>
  <source src="/videos/diving-underwater.webm" type="video/webm" />
  <source src="/videos/diving-underwater.mp4" type="video/mp4" />
  Tu navegador no soporta videos HTML5.
</video>
```

---

## 📱 Comportamiento en Móviles

### Con `playsInline`:
- ✅ El video se reproduce dentro de la página
- ✅ No abre fullscreen automáticamente
- ✅ Mejor experiencia de usuario

### Sin `playsInline`:
- ❌ Puede abrir fullscreen en iOS
- ❌ Interrumpe la navegación

---

## ⚡ Optimización de Performance

### 1. Comprime tu video antes de subirlo

**Con FFmpeg (línea de comandos):**
```bash
ffmpeg -i input.mp4 -c:v libx264 -crf 28 -preset slow -c:a aac -b:a 128k output.mp4
```

**Con HandBrake (GUI):**
1. Abre HandBrake
2. Carga tu video
3. Preset: "Web" > "Gmail Medium"
4. Save

### 2. Lazy Loading (carga diferida)

Si tienes múltiples videos en una página:

```tsx
<video
  className="w-full h-full object-cover"
  autoPlay
  loop
  muted
  playsInline
  preload="metadata"  // ← Solo carga metadata, no todo el video
>
  <source src="/videos/diving-underwater.mp4" type="video/mp4" />
</video>
```

Opciones de `preload`:
- `none` - No precarga nada
- `metadata` - Solo metadata (duración, dimensiones)
- `auto` - Precarga todo el video

---

## 🎬 Agregar Videos a Otras Secciones

### Ejemplo: Air Tours Section

```tsx
<video
  className="w-full h-full object-cover rounded-full"
  autoPlay
  loop
  muted
  playsInline
>
  <source src="/videos/aerial-tour.mp4" type="video/mp4" />
</video>
```

### Ejemplo: Background de Hero

```tsx
<div className="absolute inset-0 -z-10">
  <video
    className="w-full h-full object-cover opacity-30"
    autoPlay
    loop
    muted
    playsInline
  >
    <source src="/videos/hero-background.mp4" type="video/mp4" />
  </video>
</div>
```

---

## 🛠️ Troubleshooting

### El video no se reproduce:

1. **Verifica la ruta:**
   ```
   ✅ Correcto: /videos/diving-underwater.mp4
   ❌ Incorrecto: videos/diving-underwater.mp4
   ❌ Incorrecto: /public/videos/diving-underwater.mp4
   ```

2. **Verifica el formato:**
   - MP4 con codec H.264 es el más compatible
   - Usa HandBrake para convertir si es necesario

3. **Verifica el tamaño:**
   - Si es muy grande (>20MB), comprime el video

4. **Limpia el caché:**
   ```bash
   Ctrl+Shift+R (en el navegador)
   ```

### El video se reproduce lento:

- **Comprímelo:** Reduce la resolución o el bitrate
- **Usa poster:** Muestra imagen mientras carga
- **Considera lazy loading:** No cargues videos fuera del viewport

---

## 📋 Checklist

- [x] Carpeta `public/videos/` creada
- [ ] Video `diving-underwater.mp4` copiado a la carpeta
- [x] Código en `FlyAndDiveSection.tsx` actualizado
- [x] Configuración de autoplay, loop, muted
- [x] Clase `object-cover` para adaptación correcta

---

## 💡 Tips Profesionales

1. **Comprime siempre** - Videos grandes ralentizan el sitio
2. **Usa muted** - Requerido para autoplay en Chrome/Safari
3. **Agrega poster** - Mejor experiencia mientras carga
4. **Prueba en móvil** - Comportamiento diferente en iOS/Android
5. **Considera GIFs animados** - Para animaciones cortas (<5 seg)

---

## 🌐 Recursos Útiles

- **Comprimir videos:** [HandBrake](https://handbrake.fr/) (gratis)
- **Videos de stock:** [Pexels Videos](https://www.pexels.com/videos/) (gratis)
- **Convertir formato:** [CloudConvert](https://cloudconvert.com/)
- **FFmpeg:** [ffmpeg.org](https://ffmpeg.org/) (línea de comandos)

---

## 🎯 Resultado Esperado

Al abrir la página:
1. ✅ La sección "Fly and Dive" muestra el video
2. ✅ El video se reproduce automáticamente
3. ✅ Se repite en loop
4. ✅ Sin audio
5. ✅ Adaptado perfectamente al contenedor
6. ✅ Bordes redondeados y sombra

---

**🎬 ¡Tu video está listo! Coloca `diving-underwater.mp4` en `public/videos/` y recarga la página.**
