# 🚀 Inicio Rápido - Vuelatour

## ✅ Estado del Proyecto

El proyecto está **completamente configurado y listo** para usar.

---

## 📦 Instalación (Solo primera vez)

Si aún no has instalado las dependencias:

```bash
npm install
```

---

## 🏃 Iniciar el Servidor de Desarrollo

```bash
npm run dev
```

El sitio estará disponible en:
- **http://localhost:3000/es** (Español - Por defecto)
- **http://localhost:3000/en** (English)

---

## 🌐 Cambio de Idioma

El sitio ahora tiene **botones visibles** para cambiar de idioma:

### Desktop:
- En el header (esquina superior derecha) verás dos botones grandes:
  - **🇲🇽 ES** - Español
  - **🇺🇸 EN** - English
- El botón activo aparece en **rojo** (#E63946)
- El botón inactivo aparece en **gris**

### Mobile:
- Abre el menú hamburguesa (☰)
- Al final del menú verás dos botones grandes:
  - **🇲🇽 Español**
  - **🇺🇸 English**

### Cómo Funciona:
1. Click en el botón del idioma deseado
2. La página recarga automáticamente en el nuevo idioma
3. Todas las URLs se actualizan (ej: `/es/...` → `/en/...`)

---

## 📁 Estructura de Traducciones

Para editar los textos del sitio:

```
locales/
├── es/
│   ├── common.json    # Textos comunes (header, footer, contacto)
│   └── home.json      # Textos de la página principal
└── en/
    ├── common.json
    └── home.json
```

**Ejemplo de edición:**

```json
// locales/es/home.json
{
  "hero": {
    "title": "Tu nuevo título aquí",
    "subtitle": "Tu nuevo subtítulo"
  }
}
```

---

## 🎨 Personalización de Colores

Edita `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    red: '#E63946',    // Color principal (rojo)
    dark: '#1D1D1D',   // Texto oscuro
    gray: '#333333',   // Texto gris
  },
  accent: {
    yellow: '#FFD60A', // Amarillo para acentos
    blue: '#457B9D',   // Azul secundario
  },
}
```

---

## 📄 Páginas Disponibles

### ✅ Implementadas:
- **Home** (`/[locale]`) - Página principal con 6 secciones:
  1. Hero Section
  2. Fly and Dive
  3. Air Tours
  4. Private Charter Flights
  5. Why Choose Vuelatour
  6. Jetset Banner

### 🔜 Por Implementar:
- Charter Flights (detalle)
- Air Tours (detalle)
- Contacto
- Sobre Nosotros

---

## 🛠️ Comandos Útiles

```bash
# Limpiar caché (si hay problemas)
rm -rf .next

# Desarrollo
npm run dev

# Build de producción
npm run build

# Servidor de producción
npm start

# Linter
npm run lint
```

---

## ⚠️ Solución de Problemas Comunes

### Puerto 3000 en uso:
```bash
# Windows - Encontrar proceso en puerto 3000
netstat -ano | findstr :3000

# Windows - Matar proceso (reemplaza PID)
taskkill /PID [número] /F
```

### Errores de compilación:
```bash
# Limpiar todo y reiniciar
rm -rf .next
rm -rf node_modules/.cache
npm run dev
```

### Error de Tailwind CSS:
Si ves errores de PostCSS, verifica que `@tailwindcss/postcss` esté instalado:
```bash
npm install @tailwindcss/postcss
```

---

## 🎯 Próximos Pasos Recomendados

1. **Agregar imágenes reales:**
   - Coloca imágenes en `public/images/`
   - Usa `<Image>` de Next.js para optimización

2. **Implementar páginas faltantes:**
   - Crea `app/[locale]/charter-flights/page.tsx`
   - Crea `app/[locale]/air-tours/page.tsx`

3. **Formulario de cotización:**
   - Implementar formulario funcional
   - Conectar con backend o servicio de email

4. **SEO:**
   - Agregar metadata en cada página
   - Configurar sitemap.xml
   - Agregar robots.txt

5. **Analytics:**
   - Google Analytics
   - Facebook Pixel (si aplica)

---

## 📞 Contacto del Proyecto

- **Email:** info@vuelatour.com
- **Teléfono:** (998) 740 7149
- **WhatsApp:** +52 1 998 740 7149

---

## ✨ Características Principales

- ✅ Next.js 16 con App Router
- ✅ TypeScript para seguridad de tipos
- ✅ Tailwind CSS 4 para estilos modernos
- ✅ Internacionalización completa (ES/EN)
- ✅ Diseño responsive (mobile-first)
- ✅ Componentes reutilizables
- ✅ Optimizado para SEO
- ✅ Botones de idioma visibles y claros

---

**¡Listo para desarrollar! 🎉**

Cualquier duda, revisa:
- [README.md](README.md) - Documentación completa
- [FIXES.md](FIXES.md) - Problemas resueltos
