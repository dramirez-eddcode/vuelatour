# Vuelatour - Air Tours & Charter Flights Website

Sitio web moderno para Vuelatour, empresa de tours aéreos y vuelos charter en Cancún y la Riviera Maya.

## 🚀 Tecnologías

- **Next.js 16** - Framework React con App Router
- **TypeScript** - Tipado estático
- **Tailwind CSS 4** - Estilos utility-first
- **next-intl** - Internacionalización (ES/EN)
- **Heroicons** - Iconos
- **React Icons** - Iconos adicionales (social media)
- **date-fns** - Manipulación de fechas

## 📁 Estructura del Proyecto

```
vuelatour/
├── app/
│   ├── [locale]/           # Rutas internacionalizadas
│   │   ├── layout.tsx      # Layout principal con i18n
│   │   └── page.tsx        # Página principal (Home)
│   └── globals.css         # Estilos globales
├── components/
│   ├── home/               # Componentes de la página principal
│   │   ├── HeroSection.tsx
│   │   ├── FlyAndDiveSection.tsx
│   │   ├── AirToursSection.tsx
│   │   ├── CharterFlightsSection.tsx
│   │   ├── WhyChooseSection.tsx
│   │   └── JetsetBanner.tsx
│   └── layout/             # Componentes de layout
│       ├── Header.tsx
│       └── Footer.tsx
├── locales/                # Traducciones
│   ├── es/
│   │   ├── common.json
│   │   └── home.json
│   └── en/
│       ├── common.json
│       └── home.json
├── public/                 # Archivos estáticos
├── i18n.ts                 # Configuración de internacionalización
├── proxy.ts                # Middleware de Next.js 16 (para i18n)
└── tailwind.config.ts      # Configuración de Tailwind
```

## 🎨 Paleta de Colores

- **Primary Red**: `#E63946` - Color principal de la marca
- **Primary Dark**: `#1D1D1D` - Texto y fondos oscuros
- **Primary Gray**: `#333333` - Texto secundario
- **Accent Yellow**: `#FFD60A` - Acentos y highlights
- **Accent Blue**: `#457B9D` - Elementos secundarios

## 🌐 Internacionalización

El sitio soporta dos idiomas:
- **Español (ES)** - Idioma por defecto
- **English (EN)**

Las rutas son:
- `/es` - Versión en español
- `/en` - Versión en inglés

## 🛠️ Instalación y Desarrollo

### Prerequisitos

- Node.js 18+
- npm o yarn

### Instalación

```bash
# Clonar el repositorio
git clone <repository-url>
cd vuelatour

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

El sitio estará disponible en `http://localhost:3000`

### Comandos Disponibles

```bash
npm run dev      # Servidor de desarrollo
npm run build    # Build de producción
npm run start    # Servidor de producción
npm run lint     # Linter
```

## 📄 Páginas Implementadas

### ✅ Home (Página Principal)
- Hero Section con CTA
- Fly and Dive Package
- Air Tours Information
- Private Charter Flights
- Why Choose Vuelatour
- Jetset Transportation Banner

### 🔜 Próximas Páginas
- Charter Flights (Detalle)
- Air Tours (Detalle)
- Contacto
- Sobre Nosotros

## 🔧 Configuración Importante

### Next.js 16 Cambios

Este proyecto usa Next.js 16, que tiene algunos cambios importantes:

1. **Params como Promise**: Los params de las rutas dinámicas ahora son Promises y deben ser "awaited"
   ```tsx
   // ✅ Correcto
   const { locale } = await params;

   // ❌ Incorrecto (Next.js 15)
   const { locale } = params;
   ```

2. **Middleware → Proxy**: El archivo `middleware.ts` ahora se llama `proxy.ts`

3. **Tailwind CSS 4**: Requiere `@tailwindcss/postcss` en lugar de `tailwindcss` como plugin de PostCSS

## 📝 Notas de Desarrollo

- Los componentes de home están marcados como `'use client'` para usar hooks de React
- El Header incluye navegación responsive con menú mobile
- El Footer incluye testimoniales de Google Reviews
- Todos los textos están en archivos JSON para fácil traducción

## 🚧 Tareas Pendientes

- [ ] Agregar imágenes reales de aviones y destinos
- [ ] Implementar formulario de cotización funcional
- [ ] Crear página de Charter Flights
- [ ] Crear página de Air Tours
- [ ] Integrar Google Maps para mapas interactivos
- [ ] Agregar animaciones y transiciones
- [ ] Optimizar imágenes con next/image
- [ ] Configurar SEO y meta tags
- [ ] Agregar Google Analytics

## 📞 Contacto

- **Teléfono**: (998) 740 7149
- **Email**: info@vuelatour.com
- **Dirección**: Calle 1 Aeropuerto Cancún, 77569 Cancún, Q.R.

---

Desarrollado con ❤️ para Vuelatour
