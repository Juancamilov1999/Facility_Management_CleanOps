# CleanOps Landing Page

Landing page minimalista y profesional para CleanOps, la plataforma integral de Facility Management que conecta empresas contratistas y propietarios de edificios.

## 🚀 Características

- **Next.js 14+** con App Router
- **TypeScript** para type safety
- **Tailwind CSS** para estilos modernos y responsivos
- **Framer Motion** para animaciones sutiles y profesionales
- **React Hook Form** para formularios con validación
- Diseño **mobile-first** y completamente responsive
- Optimizado para **SEO** y **accesibilidad**
- Animaciones al scroll con Intersection Observer
- Formulario funcional con almacenamiento en localStorage

## 📋 Prerrequisitos

Antes de comenzar, asegúrate de tener instalado:

- Node.js 18.17 o superior
- npm, yarn o pnpm

## 🛠️ Instalación

1. Clona el repositorio o descarga los archivos del proyecto

2. Instala las dependencias:

```bash
npm install
# o
yarn install
# o
pnpm install
```

## 🏃‍♂️ Ejecutar en Local

Para ejecutar el servidor de desarrollo:

```bash
npm run dev
# o
yarn dev
# o
pnpm dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver el resultado.

La página se recargará automáticamente cuando edites los archivos.

## 📦 Build para Producción

Para crear una versión optimizada para producción:

```bash
npm run build
npm run start
# o
yarn build
yarn start
# o
pnpm build
pnpm start
```

## 🌐 Deploy en Vercel

La forma más fácil de desplegar esta aplicación Next.js es usando Vercel:

1. Instala Vercel CLI (opcional):
```bash
npm install -g vercel
```

2. Ejecuta el comando de deploy:
```bash
vercel
```

O simplemente:

1. Ve a [vercel.com](https://vercel.com)
2. Importa tu repositorio de Git
3. Vercel detectará automáticamente que es un proyecto Next.js
4. Click en "Deploy"

**Configuración automática**: Vercel configurará automáticamente el proyecto sin necesidad de archivos de configuración adicionales.

### Variables de Entorno (Opcional)

Si en el futuro necesitas configurar variables de entorno:

1. Crea un archivo `.env.local` en la raíz del proyecto
2. En Vercel, ve a Settings > Environment Variables
3. Agrega las mismas variables que tienes en `.env.local`

## 🎨 Personalización

### Imágenes y Assets a Reemplazar

Los siguientes placeholders deben ser reemplazados con assets reales:

1. **Logos** - Ya están en la carpeta `/Public/Logos/`:
   - `Logo CleanOps Full Color.png` (usado en Hero)
   - `Logo CleanOps Blanco.png` (usado en Footer)

2. **Dashboard Preview** en Hero Section (`components/Hero.tsx:95-125`):
   - Reemplazar el placeholder visual con un screenshot real del dashboard
   - Ubicación: Sección comentada como "Placeholder for dashboard image"

3. **Favicon** (opcional):
   - Agregar `favicon.ico` en la carpeta `/public/`

### Contenido Personalizable

Puedes personalizar el contenido en los siguientes archivos:

- **`components/Hero.tsx`**: Headline principal y descripción
- **`components/ProblemSolution.tsx`**: Descripción del problema y solución
- **`components/Features.tsx`**: Características para contratistas y building owners
- **`components/Benefits.tsx`**: Beneficios y estadísticas
- **`components/DemoForm.tsx`**: Campos del formulario y mensaje de confirmación
- **`components/Footer.tsx`**: Links, redes sociales y email de contacto

### Colores Corporativos

Los colores están definidos en `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    DEFAULT: '#0A7BC1',  // Azul principal CleanOps
    light: '#4BA3D1',    // Azul claro
  },
  dark: {
    DEFAULT: '#2C3E50',  // Gris oscuro
    medium: '#7F8C8D',   // Gris medio
    light: '#ECF0F1',    // Gris claro
  },
  background: '#F8F9FA', // Fondo general
}
```

Puedes modificar estos valores según la paleta oficial de CleanOps.

### Enlaces de Redes Sociales

Actualiza los enlaces en `components/Footer.tsx:63-136`:

```typescript
// Reemplaza los "#" con los URLs reales
<a href="https://linkedin.com/company/cleanops" ...>
<a href="https://twitter.com/cleanops" ...>
<a href="https://facebook.com/cleanops" ...>
<a href="https://instagram.com/cleanops" ...>
```

## 📁 Estructura del Proyecto

```
Facility_Management_Web/
├── app/
│   ├── layout.tsx          # Layout principal con SEO
│   ├── page.tsx            # Página principal
│   └── globals.css         # Estilos globales
├── components/
│   ├── Hero.tsx            # Sección hero con CTA
│   ├── ProblemSolution.tsx # Problema y solución
│   ├── Features.tsx        # Características principales
│   ├── Benefits.tsx        # Beneficios clave
│   ├── DemoForm.tsx        # Formulario de demo
│   └── Footer.tsx          # Footer con links
├── Public/
│   └── Logos/              # Logos de CleanOps
├── package.json
├── tailwind.config.ts      # Configuración de Tailwind
├── tsconfig.json
└── README.md
```

## 🎯 Funcionalidades Implementadas

### Formulario de Demo

El formulario en `components/DemoForm.tsx` incluye:

- ✅ Validación completa con React Hook Form
- ✅ Campos: Nombre, Email, Empresa, Teléfono (opcional), Tipo de usuario, Mensaje (opcional)
- ✅ Almacenamiento en localStorage (temporal, para demo)
- ✅ Animación de envío y mensaje de confirmación
- ✅ Responsive y accesible

**Para conectar con un backend real:**

1. Crea un endpoint API en `/app/api/demo/route.ts`
2. Reemplaza la lógica de localStorage en el `onSubmit` handler (línea 31-51)
3. Ejemplo:

```typescript
const onSubmit = async (data: DemoFormData) => {
  setIsSubmitting(true)

  try {
    const response = await fetch('/api/demo', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })

    if (response.ok) {
      setIsSubmitted(true)
      reset()
    }
  } catch (error) {
    console.error('Error:', error)
  } finally {
    setIsSubmitting(false)
  }
}
```

### Animaciones

Todas las secciones incluyen animaciones sutiles:

- Fade in + slide up al entrar en viewport
- Hover effects en botones y cards
- Transiciones suaves (0.3s ease)
- Elementos flotantes en Hero section

## 🔍 SEO

Meta tags configurados en `app/layout.tsx`:

- Title y description optimizados
- Open Graph para redes sociales
- Twitter Cards
- Keywords relevantes
- Viewport y theme color

## ♿ Accesibilidad

- Semantic HTML
- ARIA labels en elementos interactivos
- Contraste de colores WCAG AA
- Navegación por teclado
- Focus states visibles

## 📱 Responsive Design

El diseño es mobile-first y se adapta a todos los tamaños:

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

Todos los componentes usan las utilidades responsive de Tailwind (`sm:`, `md:`, `lg:`).

## 🛟 Soporte

Para reportar problemas o solicitar funcionalidades:

1. Revisa la documentación de [Next.js](https://nextjs.org/docs)
2. Consulta la documentación de [Tailwind CSS](https://tailwindcss.com/docs)
3. Consulta la documentación de [Framer Motion](https://www.framer.com/motion/)

## 📄 Licencia

© 2025 CleanOps. Todos los derechos reservados.

---

**¿Listo para transformar tu Facility Management?** 🚀

Visita [cleanops.co](https://cleanops.co) para más información.
