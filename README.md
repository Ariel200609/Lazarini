# 🏥 Farmacia Lazarini - Landing Page

Landing page profesional y moderna para Farmacia Lazarini, con dos sucursales: Bonifacio (Laguna Alsina) y Guaminí. Desarrollada con React, TypeScript, Tailwind CSS y Framer Motion.

## ✨ Características

- **Diseño Responsive**: Optimizado para escritorio y dispositivos móviles
- **Animaciones Suaves**: Transiciones fluidas con Framer Motion
- **Integración con Google Sheets**: Consumo de datos a través de Sheety API
- **Gestión de Estado**: Context API para manejo global del estado
- **Componentes Reutilizables**: Arquitectura limpia y mantenible
- **Paleta de Colores Corporativa**: Identidad visual personalizada
- **SEO Optimizado**: Meta tags y estructura semántica

## 🚀 Tecnologías Utilizadas

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Estilos**: Tailwind CSS
- **Animaciones**: Framer Motion
- **API**: Sheety (Google Sheets)
- **Deployment**: GitHub Pages

## 📋 Requisitos Previos

- Node.js 16+ 
- npm o yarn
- Cuenta en [Sheety](https://sheety.co/) para conectar Google Sheets
- Cuenta en GitHub para el despliegue

## 🛠️ Instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/tu-usuario/Lazarini.git
   cd Lazarini
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Configurar las APIs de Sheety**
   
   Edita el archivo `src/config/api.ts` y reemplaza las URLs de ejemplo:
   
   ```typescript
   export const API_CONFIG = {
     BONIFACIO: {
       name: 'Bonifacio (Laguna Alsina)',
       apiUrl: 'https://api.sheety.co/TU_USER_ID/farmacia-lazarini-bonifacio/productos',
     },
     GUAMINI: {
       name: 'Guaminí',
       apiUrl: 'https://api.sheety.co/TU_USER_ID/farmacia-lazarini-guamini/productos',
     }
   };
   ```

4. **Configurar Google Maps API** (opcional)
   
   Si quieres usar mapas interactivos, edita `src/components/PharmacyInfo.tsx` y reemplaza `YOUR_GOOGLE_MAPS_API_KEY` con tu clave real.

## 🎯 Configuración de Google Sheets

### Estructura de la Hoja de Cálculo

Crea dos hojas en Google Sheets (una para cada sucursal) con las siguientes columnas:

| Columna | Descripción | Ejemplo |
|---------|-------------|---------|
| id | Identificador único | 1, 2, 3... |
| nombre | Nombre del producto | Paracetamol 500mg |
| descripcion | Descripción breve | Analgésico para dolor y fiebre |
| precio | Precio del producto | $450 |
| imagen | URL de la imagen | https://ejemplo.com/imagen.jpg |
| categoria | Categoría del producto | Analgésicos |
| destacado | Producto destacado | true/false |
| stock | Estado del stock | Disponible/Agotado |

### Configuración de Sheety

1. Ve a [Sheety](https://sheety.co/) y crea una cuenta
2. Conecta tu Google Sheets
3. Crea dos proyectos: uno para cada sucursal
4. Copia las URLs de la API que te proporciona Sheety
5. Actualiza el archivo `src/config/api.ts` con esas URLs

## 🏃‍♂️ Desarrollo

### Ejecutar en modo desarrollo
```bash
npm run dev
```

La aplicación se abrirá en `http://localhost:3000`

### Compilar para producción
```bash
npm run build
```

### Vista previa de producción
```bash
npm run preview
```

## 🚀 Despliegue en GitHub Pages

### 1. Configurar el repositorio

Asegúrate de que el nombre del repositorio coincida con la configuración en `vite.config.ts`:

```typescript
export default defineConfig({
  // ... otras configuraciones
  base: '/Lazarini/', // Ajusta esto al nombre de tu repositorio
})
```

### 2. Desplegar automáticamente

```bash
npm run deploy
```

Este comando:
- Compila la aplicación
- Crea la rama `gh-pages`
- Sube los archivos compilados
- Configura GitHub Pages automáticamente

### 3. Configurar GitHub Pages

1. Ve a tu repositorio en GitHub
2. Settings → Pages
3. Source: Deploy from a branch
4. Branch: gh-pages
5. Save

## 📱 Personalización

### Colores Corporativos

Los colores están definidos en `tailwind.config.js`:

```javascript
colors: {
  'lazarini': {
    'green': '#18DE56',
    'cyan': '#18DEDC',
    'teal': '#19DE99',
    'blue': '#18A1DE',
    'mint': '#62DEB3',
  }
}
```

### Imágenes

- Reemplaza las URLs de imágenes en `src/components/Hero.tsx`
- Actualiza las coordenadas de los mapas en `src/components/PharmacyInfo.tsx`
- Modifica la información de contacto según tus necesidades

### Contenido

- Edita los textos en cada componente
- Actualiza la información de las sucursales
- Modifica los servicios ofrecidos

## 🔧 Estructura del Proyecto

```
src/
├── components/          # Componentes reutilizables
│   ├── Header.tsx      # Navegación principal
│   ├── Hero.tsx        # Sección hero
│   ├── ProductList.tsx # Lista de productos
│   ├── ProductCard.tsx # Tarjeta individual de producto
│   ├── PharmacyInfo.tsx # Información de sucursal
│   └── Footer.tsx      # Pie de página
├── context/            # Context API
│   └── PharmacyContext.tsx
├── services/           # Servicios de API
│   └── apiService.ts
├── config/             # Configuraciones
│   └── api.ts
├── App.tsx             # Componente principal
└── main.tsx            # Punto de entrada
```

## 📊 Funcionalidades

### Gestión de Sucursales
- Cambio dinámico entre Bonifacio y Guaminí
- Contenido específico para cada ubicación
- Transiciones animadas entre sucursales

### Productos
- Carga dinámica desde Google Sheets
- Filtrado por sucursal
- Estados de carga y error
- Productos destacados
- Información de stock

### Información de Contacto
- Datos específicos por sucursal
- Horarios de atención
- Servicios ofrecidos
- Mapas interactivos
- Enlaces de contacto directo

## 🐛 Solución de Problemas

### Error de CORS
Si tienes problemas de CORS con Sheety, verifica que:
- Las URLs de la API sean correctas
- Tu plan de Sheety permita el acceso desde tu dominio

### Productos no se cargan
- Verifica la estructura de tu Google Sheets
- Confirma que las URLs de Sheety sean correctas
- Revisa la consola del navegador para errores

### Problemas de despliegue
- Asegúrate de que el nombre del repositorio coincida con `base` en `vite.config.ts`
- Verifica que tengas permisos para crear ramas en tu repositorio

## 📞 Soporte

Para soporte técnico o consultas sobre la implementación:
- Revisa la documentación de [Sheety](https://sheety.co/docs)
- Consulta la documentación de [Framer Motion](https://www.framer.com/motion/)
- Revisa la documentación de [Tailwind CSS](https://tailwindcss.com/docs)

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

---

**Desarrollado con ❤️ para Farmacia Lazarini**
