// Configuración de las APIs de Sheety para cada sucursal
export const API_CONFIG = {
  BONIFACIO: {
    name: 'Bonifacio (Laguna Alsina)',
    apiUrl: 'https://api.sheety.co/YOUR_USER_ID/farmacia-lazarini-bonifacio/productos',
    // Reemplaza YOUR_USER_ID con tu ID real de Sheety
    // Esta URL debe apuntar a la hoja de Google Sheets de Bonifacio
  },
  GUAMINI: {
    name: 'Guaminí',
    apiUrl: 'https://api.sheety.co/YOUR_USER_ID/farmacia-lazarini-guamini/productos',
    // Reemplaza YOUR_USER_ID con tu ID real de Sheety
    // Esta URL debe apuntar a la hoja de Google Sheets de Guaminí
  }
};

// Estructura esperada de los productos desde Sheety
export interface Producto {
  id: string;
  nombre: string;
  descripcion: string;
  precio?: string;
  imagen?: string;
  categoria?: string;
  destacado?: boolean;
  stock?: string;
}

// Estructura de respuesta de Sheety
export interface SheetyResponse {
  productos: Producto[];
}
