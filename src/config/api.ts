// Configuración de las sucursales (sin APIs externas)
export const API_CONFIG = {
  BONIFACIO: {
    name: 'Bonifacio (Laguna Alsina)',
    direccion: 'Gral. Roca 48, B6439 Laguna Alsina, Provincia de Buenos Aires',
    coordenadas: { lat: -36.809260, lng: -62.248893 },
    telefono: '+54 9 11 1234-5678',
    whatsapp: '+54 9 11 1234-5678',
    email: 'bonifacio@farmacialazarini.com',
    horarios: 'Lunes a Viernes: 8:00 - 20:00 | Sábados: 8:00 - 18:00 | Domingos: 9:00 - 13:00'
  },
  GUAMINI: {
    name: 'Guaminí',
    direccion: 'Cnel. Marcelino E. Freyre 199, B6435 Guaminí, Provincia de Buenos Aires',
    coordenadas: { lat: -37.123456, lng: -62.654321 }, // Coordenadas aproximadas de Guaminí
    telefono: '+54 9 11 8765-4321',
    whatsapp: '+54 9 11 8765-4321',
    email: 'guamini@farmacialazarini.com',
    horarios: 'Lunes a Viernes: 8:00 - 20:00 | Sábados: 8:00 - 18:00 | Domingos: 9:00 - 13:00'
  }
};

// Estructura de los productos
export interface Producto {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  isPromotional: boolean;
  discount?: number;
}
