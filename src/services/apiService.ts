import { Producto } from '../config/api';
import { PRODUCTOS_DATA } from '../data/productos';

export class ApiService {
  static async getProductos(sucursal: 'BONIFACIO' | 'GUAMINI'): Promise<Producto[]> {
    try {
      console.log(`🔄 Obteniendo productos de ${sucursal} desde datos locales`);
      
      // Simular delay de red para mantener la experiencia realista
      await new Promise(resolve => setTimeout(resolve, 500));
      
      const productos = PRODUCTOS_DATA[sucursal];
      console.log(`✅ Productos de ${sucursal} cargados:`, productos);
      
      return productos;
      
    } catch (error) {
      console.error(`❌ Error al obtener productos de ${sucursal}:`, error);
      return [];
    }
  }

  // Método para obtener productos de ejemplo (mantenido por compatibilidad)
  static getProductosEjemplo(sucursal: 'BONIFACIO' | 'GUAMINI'): Producto[] {
    return PRODUCTOS_DATA[sucursal];
  }
}
