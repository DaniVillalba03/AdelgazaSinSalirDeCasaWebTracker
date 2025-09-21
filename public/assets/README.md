# 📁 Estructura de Assets

Esta carpeta contiene todos los recursos multimedia (imágenes y videos) para la página web "Adelgaza Sin Salir De Casa".

## 📂 Estructura de Carpetas

### 🖼️ **Imágenes** (`/assets/images/`)

- **`/hero/`** - Imágenes principales de la página de inicio
  - Fotos de portada
  - Banners principales
  - Imágenes de llamada a la acción

- **`/testimonials/`** - Fotos de testimonios
  - Fotos de clientes satisfechos
  - Retratos para testimonios

- **`/before-after/`** - Fotos de antes y después
  - Transformaciones de clientes
  - Resultados del programa

- **`/program/`** - Imágenes del programa
  - Screenshots de rutinas
  - Imágenes explicativas del método
  - Infografías

### 🎥 **Videos** (`/assets/videos/`)

- **`/demo/`** - Videos demostrativos
  - Videos promocionales
  - Presentación del programa

- **`/testimonials/`** - Videos de testimonios
  - Testimonios en video de clientes
  - Experiencias de usuarios

- **`/workouts/`** - Videos de ejercicios
  - Rutinas de muestra
  - Demos de ejercicios
  - Videos instructivos

## 📝 **Cómo usar los assets**

### Para imágenes:
```tsx
// Ejemplo en React
<img src="/assets/images/hero/main-banner.jpg" alt="Banner principal" />
```

### Para videos:
```tsx
// Ejemplo en React
<video src="/assets/videos/demo/intro-video.mp4" controls />
```

## 📋 **Recomendaciones**

### Formato de archivos:
- **Imágenes**: `.jpg`, `.png`, `.webp` (preferir WebP para mejor rendimiento)
- **Videos**: `.mp4`, `.webm` (preferir MP4 para compatibilidad)

### Nomenclatura:
- Usar nombres descriptivos en inglés
- Separar palabras con guiones: `before-after-maria.jpg`
- Incluir versiones optimizadas cuando sea posible

### Optimización:
- Comprimir imágenes antes de subirlas
- Mantener videos bajo 10MB cuando sea posible
- Crear thumbnails para videos pesados

## 🚀 **Despliegue**

Todos los archivos en `/public/assets/` se servirán automáticamente desde la raíz del sitio web cuando se despliegue en Vercel.

**Ruta en producción**: `https://tu-dominio.vercel.app/assets/[carpeta]/[archivo]`