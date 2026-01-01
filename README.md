# Logos Tarot App

![Logos Tarot App](screen.png)

## Descripción

Logos Tarot es una aplicación interactiva diseñada para ofrecer una experiencia espiritual profunda y accesible. Combina la sabiduría ancestral del Tarot con la tecnología moderna de inteligencia artificial.
Con cartas de tarot con un diseño único y moderno al estilo del arte de Fantasia Espacial tendrás una experiencia visual impactante.

## Funcionalidades Principales

### 🔮 Lecturas de Tarot con IA

Utiliza **Gemini AI** para interpretar tus tiradas de cartas, ofreciendo lecturas personalizadas y profundas que te ayudarán a entender mejor tu camino.

### 🃏 Mazo Interactivo

Explora un mazo de tarot visualmente impresionante con animaciones fluidas y efectos visuales de alta calidad.

### ✨ Experiencia Inmersiva

Diseñada con un enfoque estético premium, utilizando:

- **Framer Motion** para animaciones suaves.
- **Tailwind CSS** para un diseño moderno y responsivo.
- Efectos de sonido y visuales para una atmósfera mística.

## Documentación Técnica 🛠️

### Arquitectura Frontend

Este proyecto utiliza **Vite** para un entorno de desarrollo ultra-rápido y una arquitectura basada en componentes reutilizables. La lógica de negocio y UI están separadas para mejorar la mantenibilidad.

### Sistema de Rutas (React Router)

La navegación se gestiona mediante `react-router-dom`, implementando un sistema de rutas anidadas dentro de un `Layout` principal. Se utiliza `<AnimatePresence>` de Framer Motion para permitir transiciones suaves al cambiar de ruta (`mode="wait"`), creando una experiencia de navegación fluida tipo SPA (Single Page Application).

- **/**: Página de inicio (Home)
- **/about**: Sobre Nosotros
- **/guide**: Guía de Aprendizaje
- **/cards**: Galería de Arcanos
- **/contact**: Contacto

### Animaciones Avanzadas 🎭

#### Framer Motion

Se utiliza para transiciones de página y micro-interacciones. El componente `PageWrapper` envuelve cada página para orquestar las animaciones de entrada y salida.

#### GSAP (GreenSock)

Implementado para animaciones de alto rendimiento basadas en scroll (`ScrollTrigger`).

- **Efecto de Abanico**: En la sección de cartas, las barajas se despliegan y rotan dinámicamente al entrar en el viewport, calculado matemáticamente para un efecto orgánico.
- **Parallax**: Fondos animados que responden al scroll para dar profundidad.

## Instalación y Ejecución

Para correr este proyecto localmente:

1. Clonar el repositorio.
2. Instalar dependencias:
   ```bash
   npm install
   ```
3. Iniciar el servidor de desarrollo:
   ```bash
   npm run dev
   ```
4. Construir para producción:
   ```bash
   npm run build
   ```

## Tecnologías

- Vite
- React
- TypeScript
- Tailwind CSS
- Framer Motion

## Live Demo

https://logostarot.netlify.app/

## Sobre el Desarrollador 👨‍💻

**Yoshua Soto** (Dann Falcon Dev)  
_Fullstack Developer | Especialista en TypeScript_

Creador apasionado por construir aplicaciones que no solo funcionan, sino que asombran. Utilizando la potencia de la IA (Gemini) y tecnologías web modernas, me enfoco en entregar experiencias de usuario (UX) memorables e inmersivas.

📫 **Contacto**

- **Email**: yoshuasoto54@gmail.com
- **WhatsApp**: +58 0422 033 1995

##

![Falcon Studio Dev](banner.png)
