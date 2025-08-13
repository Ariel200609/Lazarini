import { API_CONFIG, Producto, SheetyResponse } from '../config/api';

export class ApiService {
  static async getProductos(sucursal: 'BONIFACIO' | 'GUAMINI'): Promise<Producto[]> {
    try {
      const config = API_CONFIG[sucursal];
      const response = await fetch(config.apiUrl);
      
      if (!response.ok) {
        throw new Error(`Error al obtener productos: ${response.status}`);
      }
      
      const data: SheetyResponse = await response.json();
      return data.productos || [];
    } catch (error) {
      console.error(`Error al obtener productos de ${API_CONFIG[sucursal].name}:`, error);
      // Retornar productos de ejemplo en caso de error
      return this.getProductosEjemplo(sucursal);
    }
  }

  // Productos de ejemplo para desarrollo y casos de error
  private static getProductosEjemplo(sucursal: 'BONIFACIO' | 'GUAMINI'): Producto[] {
    const productosBase = [
      {
        id: '1',
        nombre: 'Paracetamol 500mg',
        descripcion: 'Analgésico y antipirético para aliviar el dolor y la fiebre',
        precio: '$450',
        imagen: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=300&fit=crop',
        categoria: 'Analgésicos',
        destacado: true,
        stock: 'Disponible'
      },
      {
        id: '2',
        nombre: 'Ibuprofeno 400mg',
        descripcion: 'Antiinflamatorio no esteroideo para dolor e inflamación',
        precio: '$380',
        imagen: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400&h=300&fit=crop',
        categoria: 'Antiinflamatorios',
        destacado: false,
        stock: 'Disponible'
      },
      {
        id: '3',
        nombre: 'Vitamina C 1000mg',
        descripcion: 'Suplemento vitamínico para fortalecer el sistema inmune',
        precio: '$650',
        imagen: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
        categoria: 'Vitaminas',
        destacado: true,
        stock: 'Disponible'
      },
      {
        id: '4',
        nombre: 'Omeprazol 20mg',
        descripcion: 'Protector gástrico para problemas digestivos',
        precio: '$890',
        imagen: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400&h=300&fit=crop',
        categoria: 'Digestivos',
        destacado: false,
        stock: 'Disponible'
      }
    ];

    // Agregar sufijo de sucursal para diferenciar
    return productosBase.map(producto => ({
      ...producto,
      nombre: `${producto.nombre} - ${sucursal === 'BONIFACIO' ? 'Bonifacio' : 'Guaminí'}`
    }));
  }
}
