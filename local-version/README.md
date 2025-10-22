# CleanOps Landing Page - Versión HTML Estática

Landing page minimalista y profesional para CleanOps, creada en HTML/CSS/JavaScript vanilla para uso local y fácil migración a Vercel.

## 🚀 Características

- **100% HTML/CSS/JavaScript vanilla** - No requiere instalación de dependencias
- Funciona **directamente en el navegador** abriendo el archivo HTML
- Diseño **responsive** y **mobile-first**
- Animaciones sutiles con CSS y JavaScript
- Formulario funcional con validación
- Almacenamiento temporal en localStorage
- Optimizado para **SEO** y **accesibilidad**
- Preparado para migración a **Vercel**

## 📁 Estructura del Proyecto

```
local-version/
├── CleanOps-Landing-Page.html  # Página principal
├── css/
│   └── styles.css              # Todos los estilos
├── js/
│   └── script.js               # Funcionalidad y animaciones
├── images/                     # Carpeta para imágenes adicionales
└── README.md                   # Esta documentación
```

## 🏃‍♂️ Cómo Usar en Local

### Opción 1: Abrir directamente en el navegador

1. Navega a la carpeta `local-version/`
2. Haz doble clic en `CleanOps-Landing-Page.html`
3. El sitio se abrirá en tu navegador predeterminado

### Opción 2: Usar un servidor local (recomendado)

Para una mejor experiencia (especialmente con rutas de imágenes), usa un servidor local:

#### Con Python (si lo tienes instalado):

```bash
# Python 3
cd local-version
python -m http.server 8000

# Python 2
cd local-version
python -m SimpleHTTPServer 8000
```

Luego abre: http://localhost:8000

#### Con Node.js (si lo tienes instalado):

```bash
# Instalar http-server globalmente (solo una vez)
npm install -g http-server

# Ejecutar
cd local-version
http-server -p 8000
```

Luego abre: http://localhost:8000

#### Con Visual Studio Code:

1. Instala la extensión "Live Server"
2. Haz clic derecho en `index.html`
3. Selecciona "Open with Live Server"

## 🎨 Personalización

### Logos

Los logos están referenciados desde la carpeta padre:
```html
<img src="../Public/Logos/Logo CleanOps Full Color.png" ...>
<img src="../Public/Logos/Logo CleanOps Blanco.png" ...>
```

Si deseas copiar los logos a la carpeta `local-version/images/`, actualiza las rutas en:
- `CleanOps-Landing-Page.html` línea 48 (logo en Hero)
- `CleanOps-Landing-Page.html` línea 702 (logo en Footer)

### Colores

Los colores están definidos como variables CSS en `styles.css`:

```css
:root {
    --primary: #0A7BC1;
    --primary-light: #4BA3D1;
    --dark: #2C3E50;
    --dark-medium: #7F8C8D;
    --dark-light: #ECF0F1;
    --background: #F8F9FA;
}
```

### Contenido

Edita directamente el archivo `CleanOps-Landing-Page.html` para modificar:
- Textos y títulos
- Características y beneficios
- Enlaces de redes sociales (líneas 708-751)
- Email de contacto (línea 756)

### Formulario

El formulario actualmente guarda los datos en `localStorage`. Para ver las solicitudes enviadas:

1. Abre la consola del navegador (F12)
2. Escribe: `getCleanOpsSubmissions()`
3. Para limpiar: `clearCleanOpsSubmissions()`

## 📱 Responsive Design

La página está optimizada para todos los dispositivos:

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🔍 Funcionalidades Implementadas

### Animaciones

- ✅ Fade in/slide up en scroll
- ✅ Hover effects en botones y cards
- ✅ Elementos flotantes en Hero
- ✅ Transiciones suaves

### Formulario de Demo

- ✅ Validación en tiempo real
- ✅ Mensajes de error personalizados
- ✅ Estado de carga al enviar
- ✅ Mensaje de éxito
- ✅ Almacenamiento en localStorage

### Navegación

- ✅ Scroll suave a secciones
- ✅ Tab switcher en Features
- ✅ Enlaces a redes sociales

## 🌐 Migración a Vercel

Cuando estés listo para desplegar en Vercel, tienes dos opciones:

### Opción 1: Desplegar como sitio estático

1. **Crear cuenta en Vercel** (si no la tienes)
   - Ve a https://vercel.com
   - Regístrate con GitHub, GitLab o email

2. **Preparar el proyecto**
   ```bash
   # Crear un repositorio Git
   cd local-version
   git init
   git add .
   git commit -m "Initial commit"
   ```

3. **Subir a GitHub**
   - Crea un nuevo repositorio en GitHub
   - Sigue las instrucciones para subir tu código

4. **Desplegar en Vercel**
   - En Vercel, haz clic en "New Project"
   - Importa tu repositorio de GitHub
   - Vercel detectará automáticamente que es un sitio estático
   - Haz clic en "Deploy"

5. **Configuración (si es necesario)**
   - No se requiere configuración especial
   - Puedes renombrar `CleanOps-Landing-Page.html` a `index.html` para que sea el archivo principal
   - O configurar en Vercel para usar `CleanOps-Landing-Page.html` como homepage

### Opción 2: Usar la versión Next.js

Si prefieres usar la versión Next.js que también fue creada:

1. **Usar el proyecto principal** (fuera de local-version/)
   ```bash
   cd ..  # Volver al directorio raíz
   npm install
   npm run build
   ```

2. **Desplegar en Vercel**
   - Importa el repositorio en Vercel
   - Vercel detectará Next.js automáticamente
   - Configura las variables de entorno si las hay
   - Deploy

### Configuración del Formulario en Producción

Para que el formulario funcione en producción, deberás:

1. **Crear un endpoint API** (recomendado: Vercel Serverless Functions)

   Crea `api/submit-demo.js`:
   ```javascript
   export default async function handler(req, res) {
       if (req.method === 'POST') {
           const data = req.body;

           // Aquí puedes:
           // - Enviar email
           // - Guardar en base de datos
           // - Enviar a CRM (HubSpot, Salesforce, etc.)

           // Por ahora, solo retornamos éxito
           res.status(200).json({ success: true });
       } else {
           res.status(405).json({ error: 'Method not allowed' });
       }
   }
   ```

2. **Actualizar script.js** (línea 116)

   Reemplaza el código que guarda en localStorage con:
   ```javascript
   const response = await fetch('/api/submit-demo', {
       method: 'POST',
       headers: {
           'Content-Type': 'application/json',
       },
       body: JSON.stringify(data)
   });

   if (!response.ok) throw new Error('Error al enviar');
   ```

3. **Integrar con servicios** (opcional)

   - **Email**: SendGrid, Mailgun, Resend
   - **CRM**: HubSpot, Salesforce
   - **Sheets**: Google Sheets API
   - **Database**: Vercel Postgres, MongoDB, Supabase

### Variables de Entorno en Vercel

Si necesitas API keys:

1. Ve a tu proyecto en Vercel
2. Settings > Environment Variables
3. Agrega tus variables:
   ```
   SENDGRID_API_KEY=tu_api_key
   EMAIL_TO=info@cleanops.co
   ```

4. Úsalas en tu código:
   ```javascript
   const apiKey = process.env.SENDGRID_API_KEY;
   ```

## 📊 SEO y Performance

### Meta Tags Incluidos

- ✅ Title y Description
- ✅ Open Graph (Facebook)
- ✅ Twitter Cards
- ✅ Viewport
- ✅ Keywords

### Mejoras Adicionales para Producción

1. **Agregar Google Analytics**
   ```html
   <!-- En index.html, antes de </head> -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'G-XXXXXXXXXX');
   </script>
   ```

2. **Agregar Favicon**
   ```html
   <link rel="icon" href="/favicon.ico">
   <link rel="apple-touch-icon" href="/apple-touch-icon.png">
   ```

3. **Optimizar Imágenes**
   - Usa WebP para mejor compresión
   - Agrega lazy loading: `<img loading="lazy" ...>`

4. **Minificar CSS/JS**
   - Herramientas: https://www.minifier.org/
   - Vercel lo hace automáticamente con Next.js

## 🔧 Troubleshooting

### Las imágenes no se ven

- Verifica las rutas de los logos
- Si usas `file://`, algunas funciones pueden no funcionar
- Usa un servidor local (ver "Opción 2" arriba)

### El formulario no funciona

- Abre la consola (F12) para ver errores
- Verifica que JavaScript esté habilitado
- Comprueba que `script.js` esté cargado correctamente

### Los estilos no se aplican

- Verifica que `styles.css` existe en `css/styles.css`
- Revisa la ruta en `index.html` línea 26
- Limpia la caché del navegador (Ctrl + Shift + R)

## 📝 Notas Importantes

### Para Desarrollo Local

- ✅ Los logos están en `../Public/Logos/`
- ✅ El formulario guarda en localStorage
- ✅ No requiere instalación
- ✅ Funciona offline

### Para Producción (Vercel)

- 📌 Actualizar rutas de imágenes si es necesario
- 📌 Configurar endpoint API para formulario
- 📌 Agregar analytics
- 📌 Configurar dominio personalizado
- 📌 Agregar SSL (automático en Vercel)

## 🚀 Próximos Pasos

1. **Personaliza el contenido**
   - Actualiza textos en `index.html`
   - Ajusta colores en `css/styles.css`

2. **Agrega tus imágenes**
   - Reemplaza el placeholder del dashboard
   - Optimiza los logos si es necesario

3. **Prueba en diferentes dispositivos**
   - Mobile, tablet, desktop
   - Diferentes navegadores

4. **Prepara para producción**
   - Configura el formulario con un servicio real
   - Agrega analytics
   - Optimiza imágenes

5. **Despliega en Vercel**
   - Sigue las instrucciones de migración arriba
   - Configura dominio personalizado

## 📞 Soporte

Para preguntas sobre la implementación:
- Revisa la documentación de [Vercel](https://vercel.com/docs)
- Consulta MDN Web Docs para HTML/CSS/JS

## 📄 Licencia

© 2025 CleanOps. Todos los derechos reservados.

---

**¿Listo para transformar tu Facility Management?** 🚀

Visita [cleanops.co](https://cleanops.co) para más información.
