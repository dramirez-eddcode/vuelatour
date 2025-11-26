# VUELA TOUR - ESPECIFICACIONES DEL PROYECTO
## Rebuild de Sitio Web Post-Malware

---

## 1. INFORMACIÓN DEL PROYECTO

### Cliente
- **Empresa**: Vuela Tour
- **Ubicación**: Cancún, Quintana Roo, México
- **Contacto**: 
  - Calle 1 Aeropuerto Cancún
  - 77569 Cancún, Q.R.
  - Tel: (998) 740 7149
  - Email: info@vuelatour.com

### Tipo de Proyecto
Reconstrucción completa del sitio web después de compromiso por malware

### Presupuesto Aprobado
- **Monto**: $20,000 MXN + IVA
- **Total con IVA**: $23,200 MXN
- **Método de Pago**: Transferencia bancaria / Stripe

---

## 2. STACK TECNOLÓGICO

### Frontend
- **Framework**: Next.js 16 (App Router)
- **Estilos**: Tailwind CSS 4
- **Componentes**: Shadcn/ui
- **Iconos**: Lucide Icons
- **Imágenes**: Next/Image con optimización automática

### Backend
- **Base de Datos**: Supabase (PostgreSQL)
- **Autenticación**: Supabase Auth
- **Storage**: Supabase Storage para imágenes
- **API**: Next.js API Routes

### Deploy
- **Hosting**: Vercel
- **Dominio**: vuelatour.com
- **SSL**: Automático vía Vercel

### Internacionalización
- **Sistema**: next-intl
- **Idiomas**: Español (es) e Inglés (en)
- **Idioma por defecto**: Español
- **Detección automática**: Basado en navegador
- **Selector visible**: En header/navbar

---

## 3. ESTRUCTURA DEL SITIO Y PÁGINAS

### 3.1 PÁGINA PRINCIPAL (HOME)

#### Header Global
- **Logo**: "vuelatour" con punto rojo en la "o"
- **Navegación principal**:
  - Home
  - Charter Flights (con dropdown)
  - Air Tours (con dropdown)
  - More... (con dropdown)
  - **Selector de idioma**: Bandera de México/USA con dropdown (ES/EN)

- **Barra superior roja**:
  - Iconos sociales: Facebook, Instagram, TikTok
  - Contacto rápido: WhatsApp, Teléfono, Email

#### Hero Section
**Contenido**:
- **Título principal**: "Get a Quote for Your Private Charter Flight or Air Tour"
- **Subtítulo**: "The easiest, most relaxing, and beautiful way of exploring and traveling in the Riviera Maya, Mexico and Central America"
- **Botones de acción social**: Facebook, Instagram, Google
- **Imagen hero**: Composición circular con edificio/playa

#### Sección "Fly and Dive"
**Layout**: Two columns
- **Columna izquierda**:
  - Título: "Fly and Dive"
  - Descripción del paquete
  - Call to action: "Discover our brand-new fly and dive package!"
  - Link: "MORE ABOUT THE PACKAGE"

- **Columna derecha**:
  - Imagen: Buceadores bajo el agua

#### Sección "Vuelatour Air Tours"
**Layout**: Two columns invertidas
- **Columna izquierda**:
  - Imagen circular: Vista aérea del océano con barco
  - Icono de edición en amarillo

- **Columna derecha**:
  - Título: "Vuelatour Air Tours"
  - Subtítulo: "A completely personalized experience"
  - Descripción de tours personalizados
  - Subtítulo 2: "An unforgettable panoramic air trip"
  - Descripción de vistas desde Cessna y Kodiak
  - Call to action: "Carry out your custom tour with us"

#### Sección "Private charter flights"
**Layout**: Grid de 3 columnas
- **Columna izquierda - Información**:
  - Título: "Private charter flights"
  - Descripción de servicios
  - Características:
    - Seguro, rápido y sin complicaciones
    - Vuelos privados nacionales e internacionales
    - 4 aviones: Cessna, Seneca, Embla, Kodiak
    - Capacidad hasta 8 pasajeros
  - Detalles de precios por grupo

- **Columna central - Mapa**:
  - Mapa interactivo de destinos
  - Área de cobertura marcada en rojo: Península Maya + destinos USA
  - Label: "Our Maya World Flight Area"

- **Columna derecha - CTA**:
  - Fondo oscuro
  - Título: "Ask us for our destinations!"
  - Descripción de cobertura de vuelos
  - Botón: "GET A QUOTE FOR YOUR PRIVATE CHARTER FLIGHT"

#### Sección "Why choose Vuelatour?"
**Layout**: Grid de 3 tarjetas con overlay en imagen de fondo (playa)
- **Card 1**: 
  - Icono: Casa/edificio rojo
  - Título: "Local Pilots with more than 15 years of experience"
  - Descripción: Conocimiento local y profesionalismo

- **Card 2**:
  - Icono: Avión rojo
  - Título: "15 years of experience"
  - Descripción: Experiencia en negocio de charters

- **Card 3**:
  - Icono: Estrella roja
  - Título: Excelencia
  - Descripción: Mejores pilotos de área

#### Banner Promocional - Jetset
**Layout**: Full width banner
- **Fondo**: Imagen de playa con hamaca
- **Lado izquierdo**:
  - Logo Jetset
  - "From $30 USD"
  - Servicios:
    - Airport ↔ Hotel / Terminals
    - Resort & Beach Transfers
    - Shopping & Tours
  - Badge: "Safe • On-Time • 24/7 Service"

- **Lado derecho**:
  - Ícono: Maleta
  - Texto: "Your Private Ride to Cancún"
  - Botón rojo: "Book Now"

#### Footer
**Layout**: Grid de 3 columnas sobre fondo oscuro
- **Columna izquierda**:
  - Carrusel de reseñas de Google
  - Rating con estrellas
  - Testimoniales de clientes

- **Columna central**:
  - Logo "vuelatour" grande
  - Links: Terms & Conditions, Privacy Policies

- **Columna derecha**:
  - Dirección física
  - Teléfono
  - Email
  - Mapa pin icon

---

### 3.2 PÁGINA AIR TOURS

#### Hero Section con Mapa Interactivo
**Contenido**:
- **Título**: "Private Air Tours in Cancún"
- **Descripción**: 
  - "Enjoy the most famous tourist destinations of the Riviera Maya from the heights! Prepare for spectacular views that you will never forget."
  - "The price for each of our tours are fixed prices per plane and are independent from the number of passengers."

**Mapa Interactivo**:
- Mapa de la península de Yucatán en gris
- 4 puntos marcados con imágenes en frames amarillos:
  - Ubicación 1: Zona arqueológica (Chichen Itzá)
  - Ubicación 2: Costa/playa (Tulum)
  - Ubicación 3: Área costera (Cancún)
  - Ubicación 4: Laguna/manglares (Río Lagartos)

#### Sección "Have you ever done Sightseeing by Airplane?"
**Layout**: Texto centrado con 3 párrafos
- Descripción del proceso de reserva
- Información sobre terminal privada en Aeropuerto de Cancún
- Experiencia de vuelo y vistas
- Detalles sobre Cessna 206 y Kodiak
- Retorno al aeropuerto con vistas de Cancún

#### Sección "Our airplane tours for you..."
**Layout**: Grid 2x2 con imagen lateral

**Tours ofrecidos**:

1. **Chichen Itzá**
   - Descripción: "Spend a day exploring one of the greatest wonders of the world in the heart of the Mayan jungle!"
   - Botón: "GO TO CHICHEN ITZÁ AIRTOUR"

2. **Tulum**
   - Descripción: "The best way to experience this paradise Caribbean city with its turquoise twinkling beaches."
   - Botón: "GO TO TULUM AIRTOUR"

3. **Cancún**
   - Descripción: "One of the best ways to experience this paradise Caribbean city with its breathtaking white beaches."
   - Botón: "GO TO CANCÚN AIRTOUR"

4. **Río Lagartos**
   - Descripción: "Get a view of the pink waters of Rio Lagartos from an airborn perspective."
   - Botón: "GO TO RIO LAGARTOS AIRTOUR"

**Imagen lateral derecha**:
- Foto grande: Vista desde ventana de avión mostrando ala y océano turquesa
- Pasajero viendo por la ventana

#### Sección "Be prepared for..."
**Layout**: Grid de 3 íconos circulares con descripción

1. **Complete Privacy**
   - Ícono: Persona con brazos abiertos
   - Texto: "Don't worry about sharing time to get on a crowded bus packed with tourists. This tour is only for you."

2. **Great Pictures**
   - Ícono: Cámara
   - Texto: "Take amazing pictures, which you, your friends and your family will admire."

3. **Only Window Seats**
   - Ícono: Asiento
   - Texto: "Everybody will have a window seat from where realize can enjoy the spectacular views."

#### Sección "Your safety is our priority"
**Layout**: Grid de 2 columnas

**Columna izquierda - Imagen**:
- Foto del interior de avión pequeño con puerta abierta
- Vista de asientos y panel de instrumentos
- Logo "vuelatour" en el fuselaje

**Columna derecha - Grid de 4 características**:

1. **Certifications** (ícono: documento amarillo)
   - "We have the official permissions from FAA and international charter flights."

2. **Experience** (ícono: avión amarillo)
   - "18 years of experience in the air transportation business, being one of the first air tour agencies in Cancún."

3. **Expert pilots** (ícono: estrella amarilla)
   - "All of our pilots have more than 15 years of experience in national and international flights."

4. **Salubrity** (ícono: check verde)
   - "We disinfect our planes before and after every flight with chemicals classified for hospitals usage."

---

### 3.3 PÁGINA CHARTER FLIGHTS

#### Hero Section con Mapa de Destinos
**Contenido**:
- **Mapa grande**: América del Norte y Central
- **Puntos rojos marcando destinos principales**:
  - México: múltiples ciudades
  - USA: principales ciudades
  - Centroamérica: ciudades selectas

**Texto superpuesto**:
- **Título**: "National and international private charter flights"
- **Descripción**: 
  - "Private charter flights are a safe, fast and independent way to travel. Our airplanes have a capacity of up to 8 passengers."
  - "The price for each of our destinations are fixed prices per plane and are independent from the number of passengers."
- **Botón CTA**: "Get a quote for your charter" (rojo)

#### Sección "Discover our Destinations"
**Layout**: Sidebar izquierdo + contenido central

**Sidebar - Lista de destinos por región**:

**Mexico**:
- Cancún
- Ciudad del Carmen
- Cozumel
- Mérida
- Oaxaca
- Palenque
- San Cristobal de las Casas
- Tolosa

**United States of America**:
- Fort Lauderdale
- Miami
- Port Myres
- Key West
- New Orleans
- Houston
- Naples

**Latin America**:
- La Habana
- Santa City
- Guatemala City
- Tegucigalpa
- Roatán
- Punta Gorda
- Tolosa

**Contenido Central - 3 Cards con imágenes verticales**:

1. **MEXICO**
   - Imagen: Ciudad/arquitectura mexicana
   - Diseño vertical con texto "MEXICO"

2. **USA**
   - Imagen: Costa/playa en Estados Unidos
   - Diseño vertical con texto "USA"

3. **LATAM**
   - Imagen: Costa/paisaje centroamericano
   - Diseño vertical con texto "LATAM"

#### Formulario de Cotización (Sidebar derecho)
**Título**: "Get a quote for your Charter flight"

**Campos del formulario**:

1. **Travel Date** (Ida)
   - Label: "We can book a date a few hours with a non landing office."
   - Label secundario: "Travel Date (YYYY-MM-DD)"
   - Input: date picker + text field
   - Placeholder: "mm/dd/yyyy"

2. **Type of departure**
   - Dropdown: "one for, trunk, Multi-destination"

3. **If required, Date of return** (YYYY-MM-DD)
   - Input: date picker + text field
   - Placeholder: "mm/dd/yyyy"

4. **If the departure is one for**
   - Label: "If a departure is "One for trip/option""
   - Dropdown: "Ens favor: origin orque opción"

5. **Departing from**
   - Dropdown: "En Tu Favor: Write or escolom"

6. **If round trip/return selected "Other Destination"**
   - Dropdown similar

7. **I want to go to**
   - Dropdown: "En Tu Favor: Write or escolom"

8. **Number of Passengers**
   - Input numérico
   - Valor por defecto: 2

9. **Your Name**
   - Input texto

10. **Email Address**
    - Input email

11. **Phone Number**
    - Input teléfono

**Botón de envío**: "SEND" (rojo, full width)

#### Sección "Our current promotion in charter flights"
**Layout**: Banner horizontal full-width

**Promoción Destacada: Cozumel - Cancún**
- **Imagen de fondo**: Atardecer/amanecer dramático
- **Título grande**: "Cozumel - Cancún"
- **Descripción**: 
  - "Explore Cozumel, just known as one of the best places for snorkeling and scuba diving while you can have the best tacos in the whole Country. We'll take you there in only 20 minutes flying! It's cheaper than the ferry and faster of course in the Cancún International Airport. Ready to take off? We can also pick you and drop you in Cozumel airport!"
- **Precio destacado**: "From USD 650 for a plane Cessna 206 for 4P"
- **Botón CTA**: "Book right now!" (rojo)

#### Sección "Your safety is our priority"
**Layout**: Mismo que en Air Tours page
- Imagen del avión
- 4 características con íconos
- Misma información de certificaciones, experiencia, pilotos y salubridad

---

## 4. COMPONENTES GLOBALES

### 4.1 Header/Navbar
**Elementos**:
- Logo clickeable (vuelve a home)
- Navegación con dropdowns
- Barra superior con redes sociales
- Iconos de contacto rápido (WhatsApp, teléfono, email)
- **Selector de idioma**: 
  - Icono de bandera (México/USA)
  - Dropdown con opciones: Español / English
  - Cambia todo el contenido del sitio
  - Guarda preferencia en localStorage

**Comportamiento**:
- Sticky al hacer scroll
- Responsive: hamburger menu en mobile
- Dropdown navigation hover effects
- Active state en página actual

### 4.2 Footer
**Secciones**:
1. **Testimoniales y Reviews** (Carrusel):
   - **Google Reviews**:
     - Integración con Google My Business
     - Rating visual con estrellas
     - Navegación entre testimoniales
     - Autor y fecha
   - **TripAdvisor Widget**:
     - Badge de "Certificate of Excellence" (si aplica)
     - Rating agregado visible
     - Link a perfil completo de TripAdvisor
     - Últimas reseñas destacadas

2. **Branding y Legal**:
   - Logo grande
   - Links a términos y privacidad

3. **Información de Contacto**:
   - Dirección completa
   - Teléfono clickeable
   - Email clickeable
   - Ícono de ubicación
   - Certificaciones (FAA, permisos)

**Comportamiento**:
- Responsive en columnas
- Links con hover effects
- Carrusel automático de testimoniales
- Lazy loading de widgets externos

### 4.3 Selector de Idioma
**Ubicación**: Header (esquina superior derecha)

**Funcionalidad**:
- **Idiomas disponibles**: 
  - Español (es) - idioma por defecto
  - English (en)
- **Indicador visual**: Bandera del país + código (ES/EN)
- **Dropdown**: Al hacer clic muestra ambas opciones
- **Persistencia**: Guarda selección en localStorage
- **Detección automática**: Primera visita detecta idioma del navegador
- **Cambio instantáneo**: Todo el contenido se traduce sin reload

**Elementos traducidos**:
- Navegación completa
- Títulos y subtítulos
- Descripciones de servicios
- Formularios (labels y placeholders)
- Botones y CTAs
- Footer
- Meta tags (SEO)

---

## 5. FUNCIONALIDAD MULTIIDIOMA

### 5.1 Estructura de Traducciones

**Archivos de idioma** (JSON):
```
/locales
  /es
    - common.json (elementos globales)
    - home.json (página principal)
    - air-tours.json (tours aéreos)
    - charter-flights.json (vuelos charter)
  /en
    - common.json
    - home.json
    - air-tours.json
    - charter-flights.json
```

### 5.2 Contenido a Traducir

#### Navegación
- Home / Inicio
- Charter Flights / Vuelos Charter
- Air Tours / Tours Aéreos
- More / Más
- Todas las opciones de dropdown

#### Formularios
- Labels de campos
- Placeholders
- Mensajes de validación
- Botones de envío
- Mensajes de éxito/error

#### Páginas
- Todos los títulos H1, H2, H3
- Párrafos descriptivos
- Bullets points
- CTAs (Call to Actions)
- Características de servicios

#### SEO
- Meta titles
- Meta descriptions
- Alt text de imágenes
- URLs amigables (opcional: /es/tours vs /en/tours)

### 5.3 Implementación Técnica

**Middleware**:
- Detectar idioma del navegador en primera visita
- Redirigir a ruta correcta (/es/ o /en/)
- Mantener idioma en navegación

**Componente LanguageSwitcher**:
- Mostrar idioma actual
- Toggle entre idiomas
- Icono de bandera
- Smooth transition

**Hooks personalizados**:
- useTranslation() para acceder a traducciones
- useLocale() para obtener idioma actual
- Integración con next-intl

---

## 6. SISTEMA DE COTIZACIÓN

### 6.1 Formulario de Contacto
**Campos requeridos**:
- Nombre completo
- Email
- Teléfono
- Tipo de servicio (Charter / Air Tour)
- Fecha de viaje
- Número de pasajeros
- Origen/Destino (para charters)
- Tour seleccionado (para air tours)
- Comentarios adicionales

**Validaciones**:
- Email válido
- Teléfono válido (formato internacional)
- Fecha futura
- Número de pasajeros entre 1-8
- Campos requeridos marcados

**Comportamiento**:
- Envío por email a info@vuelatour.com
- Copia al cliente
- Mensaje de confirmación
- Integración con sistema de notificaciones

### 6.2 Cotizaciones Automáticas
**Para Air Tours**:
- Precios fijos por tour
- Independiente del número de pasajeros
- Incluye TUA (si aplica)
- Mostrar precio total con IVA

**Para Charter Flights**:
- Precios por ruta fija
- Sistema de tarifario simple
- Rutas recíprocas mismo precio
- Mostrar estimado inicial
- Cotización final por email

---

## 7. CONTENIDO Y ASSETS

### 7.1 Imágenes Requeridas
**Categorías**:
1. **Aviones y flota**:
   - Cessna 206
   - Kodiak
   - Seneca V
   - Interior de cabina
   - Pilotos

2. **Destinos**:
   - Chichen Itzá desde el aire
   - Tulum costa
   - Cancún zona hotelera
   - Río Lagartos
   - Cozumel
   - Vistas aéreas panorámicas

3. **Experiencias**:
   - Pasajeros en ventana
   - Vistas desde el aire
   - Embarque/desembarque
   - Terminal privada

4. **Marketing**:
   - Hero images
   - Backgrounds
   - Íconos personalizados
   - Logo en diferentes formatos

**Especificaciones técnicas**:
- Formato: WebP con fallback a JPG
- Optimización: Next/Image automática
- Responsive: múltiples tamaños
- Alt text en ambos idiomas
- Lazy loading

### 7.2 Textos y Copy
**Ton de voz**:
- Profesional pero cercano
- Enfoque en seguridad y experiencia
- Aspiracional (experiencias únicas)
- Claro en precios y servicios

**Elementos clave**:
- USPs (Unique Selling Propositions)
- Testimoniales reales
- Certificaciones y licencias
- Experiencia de 18 años
- Seguridad y salubridad

---

## 8. PANEL ADMINISTRATIVO

### 8.1 Gestión de Contenido
**Secciones editables**:
1. **Tours aéreos**:
   - Nombre del tour
   - Descripción (ES/EN)
   - Precio
   - Duración
   - Imágenes
   - Estado (activo/inactivo)

2. **Destinos charter**:
   - Ciudad/destino
   - País/región
   - Precio base
   - Tiempo de vuelo
   - Descripción
   - Disponibilidad

3. **Promociones**:
   - Título (ES/EN)
   - Descripción (ES/EN)
   - Imagen
   - Precio promocional
   - Fechas de validez
   - CTA personalizado

4. **Contenido general**:
   - Textos de homepage
   - Sección "Why choose us"
   - Footer information
   - Datos de contacto

### 8.2 Gestión de Cotizaciones
**Funcionalidades**:
- Ver todas las cotizaciones recibidas
- Filtrar por fecha, estado, tipo
- Marcar como atendida/pendiente/cerrada
- Notas internas
- Exportar a Excel
- Estadísticas básicas

### 8.3 Acceso y Seguridad
**Usuarios**:
- Pablo Canales (admin)
- Alejandro Villalobos (admin)
- Posibilidad de agregar más usuarios

**Permisos**:
- Admin: acceso total
- Editor: solo contenido, no cotizaciones
- Viewer: solo lectura

**Seguridad**:
- Autenticación con Supabase
- Sesiones seguras
- Logs de cambios
- Backup automático

---

## 9. SEO Y PERFORMANCE

### 9.1 Optimización SEO Avanzada

#### Meta Tags y Estructura
**Meta Tags**:
- Títulos únicos por página (ES/EN) optimizados para CTR
- Meta descriptions con palabras clave (ES/EN)
- Open Graph completo para redes sociales
- Twitter Cards para mejor compartición
- Canonical URLs para evitar contenido duplicado
- Hreflang tags para contenido multiidioma

**Schema Markup (JSON-LD)**:
- LocalBusiness schema
- Service schema para cada tipo de servicio
- AggregateRating para reseñas
- FAQPage schema
- BreadcrumbList para navegación
- Organization schema completo

#### Contenido y Estructura
**Headers y Contenido**:
- Headers jerárquicos correctos (H1-H6)
- H1 único por página con keyword principal
- Alt text descriptivo en todas las imágenes
- Internal linking estratégico entre páginas relacionadas
- Breadcrumbs visibles y en schema

**Keywords Principales**:
- **Español**:
  - "vuelos charter Cancún"
  - "tours aéreos Riviera Maya"
  - "vuelos privados México"
  - "renta de aviones Cancún"
  - "paseos aéreos Cancún"
  - "chichen itza desde el aire"
  
- **Inglés**:
  - "private charter flights Cancun"
  - "air tours Riviera Maya"
  - "private flights Mexico"
  - "airplane tours Cancun"
  - "aerial tours Yucatan"
  - "Cancun sightseeing flights"

#### URLs y Sitemap
**URLs amigables**:
- /es/tours-aereos
- /en/air-tours
- /es/vuelos-charter
- /en/charter-flights
- /es/tours-aereos/chichen-itza
- /en/air-tours/chichen-itza

**Sitemap XML**:
- Generación automática con Next.js
- Inclusión de todas las páginas
- Prioridades definidas
- Frecuencia de actualización
- Hreflang alternates
- Submission automático a Google Search Console

#### Rich Snippets y Featured Snippets
- Review stars en SERPs (vía TripAdvisor + Google Reviews)
- FAQ snippets para preguntas comunes
- Price snippets para tours
- Local pack optimization
- Knowledge panel optimization

### 9.2 Google Analytics 4 - Event Tracking

**Eventos Principales**:
1. **Conversiones**:
   - form_submit (cotizaciones)
   - quote_request (solicitud de precio)
   - phone_click (click en teléfono)
   - whatsapp_click (click en WhatsApp)
   - email_click (click en email)

2. **Engagement**:
   - tour_view (visualización de tour específico)
   - destination_click (click en destino)
   - language_switch (cambio de idioma)
   - video_play (si hay videos)
   - map_interaction (interacción con mapas)

3. **Navegación**:
   - scroll_depth (profundidad de scroll)
   - time_on_page (tiempo en página)
   - social_click (clicks en redes sociales)
   - external_link_click (links externos)

**Objetivos de Conversión**:
- Cotizaciones completadas
- Llamadas telefónicas
- Mensajes de WhatsApp
- Tiempo promedio > 2 minutos
- Visitas a 3+ páginas

### 9.3 Google Search Console - Monitoreo

**Configuración**:
- Verificación de propiedad (DNS)
- Sitemap submission
- Mobile usability monitoring
- Core Web Vitals tracking
- Manual actions monitoring
- International targeting settings

**KPIs a Monitorear**:
- Impresiones y clicks
- CTR promedio por página
- Posición promedio por keyword
- Coverage issues
- Core Web Vitals: LCP, FID, CLS
- Mobile usability errors

### 9.4 Performance Optimization

**Objetivos Core Web Vitals**:
- **LCP (Largest Contentful Paint)**: < 2.5s
- **FID (First Input Delay)**: < 100ms
- **CLS (Cumulative Layout Shift)**: < 0.1
- **Lighthouse Score**: > 90 en todas las categorías

**Optimizaciones Next.js 16**:
- Server Components por defecto
- Streaming SSR para carga progresiva
- Image optimization automática con next/image
- Code splitting automático
- Route prefetching inteligente
- Edge Runtime cuando sea posible

**Optimizaciones Tailwind 4**:
- CSS optimizado y minimal
- Purge automático de clases no usadas
- PostCSS optimization
- Critical CSS inline

**Optimizaciones Adicionales**:
- Lazy loading de imágenes below the fold
- Preload de recursos críticos
- Prefetch de rutas importantes
- Compresión Gzip/Brotli en Vercel
- CDN de Vercel para assets estáticos
- Caché strategies optimizadas
- Font optimization con next/font

### 9.5 Monitoreo y Reporting

**Dashboard de Analytics**:
- Tráfico en tiempo real
- Fuentes de tráfico (orgánico, directo, referral, social)
- Páginas más visitadas
- Conversiones por canal
- Bounce rate por página
- User flow analysis

**Reportes Automáticos**:
- Reporte semanal de tráfico
- Reporte mensual de conversiones
- Alertas de caídas en tráfico
- Alertas de errores críticos
- Performance reports

**Integración con TripAdvisor**:
- Badge de reseñas en homepage
- Widgets de testimoniales
- Link directo "Write a Review"
- Schema markup de ratings
- Monitoring de nuevas reseñas

---

## 10. RESPONSIVE DESIGN

### 10.1 Breakpoints
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px
- **Large Desktop**: > 1440px

### 10.2 Adaptaciones por Dispositivo

**Mobile**:
- Hamburger menu
- Formularios full-width
- Imágenes apiladas
- Cards en columna única
- Footer simplificado
- Click-to-call en teléfonos
- WhatsApp floating button

**Tablet**:
- Grid de 2 columnas
- Menú expandido
- Imágenes side-by-side parcial

**Desktop**:
- Full navigation visible
- Hover effects
- Multi-column layouts
- Mapas interactivos ampliados

---

## 11. INTEGRACIONES

### 11.1 Google Services
- **Google Maps**: Mapas de destinos interactivos
- **Google Analytics 4 (GA4)**: 
  - Tracking completo de conversiones
  - Event tracking personalizado (cotizaciones, clics en CTAs)
  - Análisis de comportamiento de usuarios
  - Embudos de conversión
  - Demographics y intereses
- **Google Search Console**: 
  - Monitoreo de indexación
  - Análisis de queries y posicionamiento
  - Core Web Vitals tracking
  - Sitemap submission automático
  - Rich results monitoring
- **Google Reviews**: Testimoniales automáticos integrados
- **Google Tag Manager**: Gestión de tags y eventos

### 11.2 TripAdvisor
- **TripAdvisor Widget**: 
  - Reseñas embebidas en homepage
  - Rating badge visible
  - Link directo a perfil de TripAdvisor
  - Certificado de Excelencia (si aplica)
- **Schema Markup**: 
  - Markup de reseñas para rich snippets
  - Rating agregado en resultados de búsqueda

### 11.3 Comunicación
- **WhatsApp Business**: Botón de contacto directo
- **Email**: Formularios de cotización
- **Teléfono**: Click-to-call en mobile

### 11.4 Redes Sociales
- **Facebook**: Compartir y seguir
- **Instagram**: Feed embebido (opcional)
- **TikTok**: Link directo
- **YouTube**: Videos promocionales (futuro)

---

## 12. CONTENIDO LEGAL

### 12.1 Páginas Requeridas
1. **Términos y Condiciones** (ES/EN):
   - Uso del sitio
   - Servicios ofrecidos
   - Políticas de cancelación
   - Limitaciones de responsabilidad

2. **Política de Privacidad** (ES/EN):
   - Datos recolectados
   - Uso de cookies
   - Compartir información
   - Derechos del usuario (GDPR/LFPDPPP)

3. **Preguntas Frecuentes** (ES/EN):
   - Sobre los servicios
   - Reservaciones
   - Pagos y cancelaciones
   - Requisitos de vuelo

### 12.2 Avisos Legales
- Licencias y permisos de operación
- Seguros y certificaciones
- Términos de uso del sitio
- Copyright notice

---

## 13. CRONOGRAMA Y FASES

### Fase 1: Setup y Estructura (Semana 1)
- Configuración del proyecto Next.js 16
- Setup de Supabase
- Implementación de next-intl
- Configuración inicial de Tailwind 4
- Estructura de carpetas y routing
- Componentes base
- Setup de Google Analytics 4
- Setup de Google Tag Manager

### Fase 2: Desarrollo Frontend (Semana 2-3)
- Header y Footer globales
- Página Home completa
- Página Air Tours
- Página Charter Flights
- Formularios de cotización
- Sistema multiidioma completo
- Integración de widgets (Google Reviews, TripAdvisor)
- Event tracking de Analytics

### Fase 3: Backend y Admin (Semana 3-4)
- Base de datos Supabase
- Panel administrativo
- Sistema de cotizaciones
- Autenticación
- APIs necesarias
- Integración de formularios con tracking

### Fase 4: Contenido y Testing (Semana 4)
- Carga de imágenes optimizadas
- Textos en ES/EN
- Testing cross-browser
- Testing mobile
- Correcciones de UX
- Validación de eventos de Analytics
- Testing de widgets externos

### Fase 5: SEO y Deploy (Semana 5)
- Optimización SEO avanzada
- Meta tags y schema markup completo
- Performance tuning (Core Web Vitals)
- Configuración de Google Search Console
- Verificación de propiedad y sitemap
- Deploy a Vercel
- Configuración de dominio
- SSL y seguridad
- Hreflang tags para multiidioma

### Fase 6: Monitoreo y Entrega
- Verificación de Google Analytics tracking
- Configuración de objetivos en GA4
- Configuración de alertas en Search Console
- Verificación de TripAdvisor widget
- Documentación del panel admin
- Capacitación a Pablo y Alejandro
- Entrega de credenciales (incluyendo Analytics y Search Console)
- Soporte post-lanzamiento

---

## 14. CRITERIOS DE ACEPTACIÓN

### 14.1 Funcionales
✅ Todas las páginas completamente funcionales
✅ Formularios validados y operativos
✅ Sistema multiidioma funcionando perfectamente
✅ Panel admin accesible y usable
✅ Responsive en todos los dispositivos
✅ Integración con Supabase operativa

### 14.2 No Funcionales
✅ Performance: Lighthouse > 90
✅ SEO: Posicionamiento básico funcionando
✅ Seguridad: HTTPS, auth, protección básica
✅ Accesibilidad: WCAG 2.1 nivel AA básico
✅ Browser support: Chrome, Firefox, Safari, Edge (últimas 2 versiones)

### 14.3 Contenido
✅ Todas las traducciones completas (ES/EN)
✅ Imágenes optimizadas y con alt text
✅ Textos revisados y aprobados
✅ Enlaces funcionales
✅ Información de contacto correcta

---

## 15. SOPORTE Y MANTENIMIENTO

### 15.1 Garantía Post-Lanzamiento
- **Duración**: 30 días
- **Cobertura**: 
  - Bugs y errores
  - Ajustes menores de contenido
  - Problemas de compatibilidad
  - Soporte técnico básico

### 15.2 Actualizaciones Futuras (Fuera de alcance)
- Sistema de reservaciones online
- Integración con sistema de gestión de flota
- Gestión de pilotos y horarios
- Sistema de pagos integrado
- App móvil

---

## 16. NOTAS TÉCNICAS IMPORTANTES

### 16.1 Seguridad
- No almacenar información sensible de tarjetas
- Encriptación de datos personales
- Validación server-side de formularios
- Protección contra XSS y SQL injection
- Rate limiting en APIs

### 16.2 Backups
- Backup automático de Supabase (incluido)
- Código en GitHub privado
- Backup manual mensual recomendado
- Documentación de restore process

### 16.3 Monitoreo
- Vercel Analytics incluido
- Google Analytics 4 (configurado)
- Google Search Console (configurado)
- Error tracking con Sentry (opcional)
- Uptime monitoring (opcional)
- Performance monitoring continuo

### 16.4 Requisitos del Cliente
**Cuentas necesarias antes del inicio**:
- Cuenta de Google Business (para Google My Business y Reviews)
- Cuenta de Google Analytics 4 (se configurará durante el proyecto)
- Cuenta de Google Search Console (se configurará durante el proyecto)
- Perfil de TripAdvisor verificado (si no existe, crear uno)
- Acceso al dominio vuelatour.com (DNS)
- Acceso a redes sociales (Facebook, Instagram, TikTok)

**Contenido requerido del cliente**:
- Fotografías de alta calidad de aviones y destinos
- Permisos y certificaciones (FAA, etc.)
- Precios actualizados de tours y charters
- Textos corporativos específicos (opcional)
- Logo en diferentes formatos (SVG, PNG)

**Información legal**:
- Términos y condiciones actuales
- Política de privacidad
- Avisos legales requeridos

---

## 17. CONTACTO DEL PROYECTO

### Desarrollador
- **Nombre**: Diego Ramírez
- **Empresa**: EDDCODE
- **Ubicación**: León, Guanajuato, México

### Cliente
- **Contacto Principal**: Pablo Canales
- **Contacto Secundario**: Alejandro Villalobos
- **Empresa**: Vuela Tour

---

## ANEXOS

### A. Referencias Visuales
- Screenshots del sitio anterior (este documento)
- Wireframes y mockups (por crear)
- Guía de estilo visual (por definir)

### B. Credenciales (Entrega Final)
- Acceso a Supabase (admin)
- Acceso a Vercel (admin)
- Acceso panel admin del sitio
- Acceso a Google Analytics 4 (admin)
- Acceso a Google Search Console (admin)
- Acceso a Google Tag Manager
- Información de integración TripAdvisor
- Credenciales DNS
- Documentación API
- Claves de API (si aplica)

### C. Diccionario de Traducciones
Ver archivos JSON en /locales/es y /locales/en

---

**Última actualización**: 25 de noviembre de 2025
**Versión del documento**: 2.1
**Estado**: Aprobado para desarrollo

### Changelog v2.1:
- Actualizado a Next.js 16 y Tailwind CSS 4
- Agregada integración completa de Google Analytics 4 con event tracking
- Agregada configuración de Google Search Console
- Agregada integración de TripAdvisor widgets y reviews
- Expandida sección de SEO con estrategias avanzadas
- Agregados requisitos del cliente para inicio del proyecto
- Actualizado cronograma con nuevas integraciones