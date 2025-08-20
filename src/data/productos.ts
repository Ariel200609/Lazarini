import { Producto } from '../config/api';

export const PRODUCTOS_DATA: Record<'BONIFACIO' | 'GUAMINI', Producto[]> = {
  BONIFACIO: [
    // MEDICAMENTOS
    {
      id: 1,
      name: 'Paracetamol 500mg',
      description: 'Analgésico y antipirético para el alivio del dolor y la fiebre. Ideal para dolores de cabeza, musculares y fiebre.',
      price: 2000,
      image: '',
      category: 'Medicamentos',
      isPromotional: true,
      discount: 0.2
    },
    {
      id: 2,
      name: 'Ibuprofeno 400mg',
      description: 'Antiinflamatorio no esteroideo para dolor e inflamación. Efectivo para dolores articulares y menstruales.',
      price: 1800,
      image: '/images/productos/ibuprofeno400.png',
      category: 'Medicamentos',
      isPromotional: false
    },
    {
      id: 3,
      name: 'Vitamina C 1000mg',
      description: 'Suplemento vitamínico para fortalecer el sistema inmune. Antioxidante natural para prevenir resfriados.',
      price: 2500,
      image: 'https://via.placeholder.com/300x200/18A1DE/FFFFFF?text=Vitamina%20C',
      category: 'Vitaminas',
      isPromotional: true,
      discount: 0.15
    },
    {
      id: 4,
      name: 'Omeprazol 20mg',
      description: 'Protector gástrico para problemas digestivos. Alivia la acidez y protege el estómago.',
      price: 3200,
      image: 'https://via.placeholder.com/300x200/19DE99/FFFFFF?text=Omeprazol',
      category: 'Medicamentos',
      isPromotional: false
    },
    
    // PERFUMERÍA
    {
      id: 5,
      name: 'Perfume Mujer - Floral',
      description: 'Fragancia elegante con notas de rosa y vainilla. Duración prolongada, ideal para uso diario.',
      price: 8500,
      image: 'https://via.placeholder.com/300x200/18DE56/FFFFFF?text=Perfume%20Mujer',
      category: 'Perfumería',
      isPromotional: true,
      discount: 0.25
    },
    {
      id: 6,
      name: 'Colonia Hombre - Cítrica',
      description: 'Colonia fresca con notas de limón y bergamota. Perfecta para el día a día.',
      price: 6500,
      image: 'https://via.placeholder.com/300x200/18A1DE/FFFFFF?text=Colonia%20Hombre',
      category: 'Perfumería',
      isPromotional: false
    },
    {
      id: 7,
      name: 'Desodorante Roll-on',
      description: 'Desodorante de 48h de duración. Sin alcohol, ideal para piel sensible.',
      price: 1200,
      image: 'https://via.placeholder.com/300x200/19DE99/FFFFFF?text=Desodorante',
      category: 'Perfumería',
      isPromotional: true,
      discount: 0.3
    },
    
    // MAQUILLAJE
    {
      id: 8,
      name: 'Base de Maquillaje',
      description: 'Base de cobertura media, resistente al agua. Incluye protección solar FPS 15.',
      price: 4200,
      image: 'https://via.placeholder.com/300x200/62DEB3/FFFFFF?text=Base%20Maquillaje',
      category: 'Maquillaje',
      isPromotional: false
    },
    {
      id: 9,
      name: 'Labial Mate',
      description: 'Labial de larga duración en tonos rojos y rosados. No se transfiere.',
      price: 2800,
      image: 'https://via.placeholder.com/300x200/18DEDC/FFFFFF?text=Labial%20Mate',
      category: 'Maquillaje',
      isPromotional: true,
      discount: 0.2
    },
    {
      id: 10,
      name: 'Máscara de Pestañas',
      description: 'Máscara volumizadora y alargadora. Resistente al agua y al sudor.',
      price: 3200,
      image: 'https://via.placeholder.com/300x200/19DE99/FFFFFF?text=Mascara%20Pestanas',
      category: 'Maquillaje',
      isPromotional: false
    },
    
    // CUIDADO DE LA PIEL
    {
      id: 11,
      name: 'Protector Solar FPS 50',
      description: 'Protección solar de amplio espectro para piel sensible. Resistente al agua.',
      price: 3500,
      image: 'https://via.placeholder.com/300x200/18DE56/FFFFFF?text=Protector%20Solar',
      category: 'Cuidado de la Piel',
      isPromotional: true,
      discount: 0.2
    },
    {
      id: 12,
      name: 'Crema Hidratante',
      description: 'Hidratación intensiva para piel seca. Con vitamina E y aloe vera.',
      price: 1800,
      image: 'https://via.placeholder.com/300x200/62DEB3/FFFFFF?text=Crema%20Hidratante',
      category: 'Cuidado de la Piel',
      isPromotional: false
    },
    {
      id: 13,
      name: 'Serum Antiedad',
      description: 'Serum con retinol y vitamina C. Reduce líneas de expresión y manchas.',
      price: 7500,
      image: 'https://via.placeholder.com/300x200/18A1DE/FFFFFF?text=Serum%20Antiedad',
      category: 'Cuidado de la Piel',
      isPromotional: true,
      discount: 0.15
    },
    
    // HIGIENE PERSONAL
    {
      id: 14,
      name: 'Jabón Neutro',
      description: 'Jabón dermatológico para piel sensible. Sin perfumes ni colorantes artificiales.',
      price: 800,
      image: 'https://via.placeholder.com/300x200/19DE99/FFFFFF?text=Jabon%20Neutro',
      category: 'Higiene Personal',
      isPromotional: true,
      discount: 0.3
    },
    {
      id: 15,
      name: 'Shampoo Anticaspa',
      description: 'Tratamiento efectivo contra la caspa y picazón del cuero cabelludo.',
      price: 1200,
      image: 'https://via.placeholder.com/300x200/18A1DE/FFFFFF?text=Shampoo%20Anticaspa',
      category: 'Higiene Personal',
      isPromotional: false
    },
    {
      id: 16,
      name: 'Cepillo de Dientes',
      description: 'Cepillo dental suave con cerdas de alta calidad. Incluye protector.',
      price: 600,
      image: 'https://via.placeholder.com/300x200/18DEDC/FFFFFF?text=Cepillo%20Dental',
      category: 'Higiene Bucal',
      isPromotional: true,
      discount: 0.4
    },
    
    // CUIDADO INFANTIL
    {
      id: 17,
      name: 'Pañales Talla 4',
      description: 'Pañales ultra absorbentes para bebés de 9-14kg. 30 unidades por paquete.',
      price: 4500,
      image: 'https://via.placeholder.com/300x200/19DE99/FFFFFF?text=Panales%20T4',
      category: 'Cuidado Infantil',
      isPromotional: true,
      discount: 0.25
    },
    {
      id: 18,
      name: 'Leche de Fórmula',
      description: 'Fórmula infantil para bebés de 6-12 meses. Con prebióticos y DHA.',
      price: 12000,
      image: 'https://via.placeholder.com/300x200/18DE56/FFFFFF?text=Leche%20Formula',
      category: 'Cuidado Infantil',
      isPromotional: false
    },
    
    // SUPLEMENTOS
    {
      id: 19,
      name: 'Omega 3',
      description: 'Suplemento de ácidos grasos esenciales. Beneficioso para corazón y cerebro.',
      price: 3800,
      image: 'https://via.placeholder.com/300x200/18A1DE/FFFFFF?text=Omega%203',
      category: 'Suplementos',
      isPromotional: false
    },
    {
      id: 20,
      name: 'Proteína en Polvo',
      description: 'Proteína whey de alta calidad. Ideal para deportistas y recuperación muscular.',
      price: 8500,
      image: 'https://via.placeholder.com/300x200/62DEB3/FFFFFF?text=Proteina%20Polvo',
      category: 'Suplementos',
      isPromotional: true,
      discount: 0.2
    }
  ],
  
  GUAMINI: [
    // MEDICAMENTOS
    {
      id: 1,
      name: 'Ibuprofeno 600mg',
      description: 'Analgésico y antipirético de alta concentración. Ideal para dolores intensos y fiebre alta.',
      price: 2200,
      image: '',
      category: 'Medicamentos',
      isPromotional: false
    },
    {
      id: 2,
      name: 'Aspirina 100mg',
      description: 'Analgésico y antiagregante plaquetario. Prevención de problemas cardiovasculares.',
      price: 1500,
      image: 'https://via.placeholder.com/300x200/18A1DE/FFFFFF?text=Aspirina',
      category: 'Medicamentos',
      isPromotional: true,
      discount: 0.15
    },
    {
      id: 3,
      name: 'Paracetamol 1g',
      description: 'Analgésico de alta potencia para dolores severos. Formato familiar de 20 comprimidos.',
      price: 3500,
      image: 'https://via.placeholder.com/300x200/18DE56/FFFFFF?text=Paracetamol%201g',
      category: 'Medicamentos',
      isPromotional: true,
      discount: 0.3
    },
    
    // PERFUMERÍA
    {
      id: 4,
      name: 'Perfume Unisex',
      description: 'Fragancia moderna y versátil. Notas de madera y cítricos para cualquier ocasión.',
      price: 7200,
      image: 'https://via.placeholder.com/300x200/19DE99/FFFFFF?text=Perfume%20Unisex',
      category: 'Perfumería',
      isPromotional: false
    },
    {
      id: 5,
      name: 'Aftershave',
      description: 'Loción post-afeitado con aloe vera. Calma la irritación y hidrata la piel.',
      price: 2800,
      image: 'https://via.placeholder.com/300x200/18DEDC/FFFFFF?text=Aftershave',
      category: 'Perfumería',
      isPromotional: true,
      discount: 0.2
    },
    
    // MAQUILLAJE
    {
      id: 6,
      name: 'Paleta de Sombras',
      description: 'Paleta de 12 sombras mate y brillantes. Colores neutros y vibrantes.',
      price: 5500,
      image: 'https://via.placeholder.com/300x200/62DEB3/FFFFFF?text=Paleta%20Sombras',
      category: 'Maquillaje',
      isPromotional: true,
      discount: 0.3
    },
    {
      id: 7,
      name: 'Delineador de Ojos',
      description: 'Delineador líquido de larga duración. Pincel fino para trazos precisos.',
      price: 1800,
      image: 'https://via.placeholder.com/300x200/18A1DE/FFFFFF?text=Delineador',
      category: 'Maquillaje',
      isPromotional: false
    },
    
    // CUIDADO DE LA PIEL
    {
      id: 8,
      name: 'Vitamina D3 1000UI',
      description: 'Suplemento esencial para la salud ósea y sistema inmune. Especialmente importante en invierno.',
      price: 2800,
      image: 'https://via.placeholder.com/300x200/19DE99/FFFFFF?text=Vitamina%20D3',
      category: 'Vitaminas',
      isPromotional: false
    },
    {
      id: 9,
      name: 'Loratadina 10mg',
      description: 'Antihistamínico para alergias estacionales. Alivia estornudos, picazón y congestión nasal.',
      price: 1900,
      image: 'https://via.placeholder.com/300x200/62DEB3/FFFFFF?text=Loratadina',
      category: 'Medicamentos',
      isPromotional: false
    },
    
    // EQUIPAMIENTO MÉDICO
    {
      id: 10,
      name: 'Termómetro Digital',
      description: 'Termómetro de alta precisión para toda la familia. Lectura rápida y confiable.',
      price: 2500,
      image: 'https://via.placeholder.com/300x200/18DE56/FFFFFF?text=Termometro',
      category: 'Equipamiento Médico',
      isPromotional: true,
      discount: 0.25
    },
    {
      id: 11,
      name: 'Tensiómetro Digital',
      description: 'Monitor de presión arterial automático. Incluye brazalete y estuche.',
      price: 8500,
      image: 'https://via.placeholder.com/300x200/18A1DE/FFFFFF?text=Tensiometro',
      category: 'Equipamiento Médico',
      isPromotional: false
    },
    
    // PRIMEROS AUXILIOS
    {
      id: 12,
      name: 'Vendas Elásticas',
      description: 'Vendas de compresión para esguinces y lesiones deportivas. Varios tamaños disponibles.',
      price: 1200,
      image: 'https://via.placeholder.com/300x200/19DE99/FFFFFF?text=Vendas%20Elasticas',
      category: 'Primeros Auxilios',
      isPromotional: false
    },
    {
      id: 13,
      name: 'Alcohol en Gel',
      description: 'Desinfectante de manos con alcohol al 70%. Efectivo contra bacterias y virus.',
      price: 800,
      image: 'https://via.placeholder.com/300x200/62DEB3/FFFFFF?text=Alcohol%20Gel',
      category: 'Higiene',
      isPromotional: true,
      discount: 0.3
    },
    
    // SUPLEMENTOS
    {
      id: 14,
      name: 'Metformina 500mg',
      description: 'Medicamento para el control de la diabetes tipo 2. Ayuda a regular los niveles de glucosa.',
      price: 4200,
      image: 'https://via.placeholder.com/300x200/18DEDC/FFFFFF?text=Metformina',
      category: 'Medicamentos',
      isPromotional: true,
      discount: 0.2
    },
    {
      id: 15,
      name: 'Calcio + Vitamina D',
      description: 'Suplemento para fortalecer huesos y dientes. Ideal para todas las edades.',
      price: 3200,
      image: 'https://via.placeholder.com/300x200/19DE99/FFFFFF?text=Calcio%20VitD',
      category: 'Suplementos',
      isPromotional: false
    },
    
    // CUIDADO INFANTIL
    {
      id: 16,
      name: 'Toallitas Húmedas',
      description: 'Toallitas hipoalergénicas para bebés. Sin alcohol ni perfumes.',
      price: 1800,
      image: 'https://via.placeholder.com/300x200/18DE56/FFFFFF?text=Toallitas%20Humedas',
      category: 'Cuidado Infantil',
      isPromotional: true,
      discount: 0.2
    },
    
    // INSUMOS MÉDICOS
    {
      id: 17,
      name: 'Guantes de Látex',
      description: 'Guantes desechables de látex natural. Talla M, 100 unidades por caja.',
      price: 1500,
      image: 'https://via.placeholder.com/300x200/18DEDC/FFFFFF?text=Guantes%20Latex',
      category: 'Insumos Médicos',
      isPromotional: false
    },
    {
      id: 18,
      name: 'Jeringas 3ml',
      description: 'Jeringas estériles de 3ml con agujas. Ideal para administración de medicamentos.',
      price: 300,
      image: 'https://via.placeholder.com/300x200/19DE99/FFFFFF?text=Jeringas%203ml',
      category: 'Insumos Médicos',
      isPromotional: true,
      discount: 0.4
    }
  ]
};

// Categorías disponibles para filtros
export const CATEGORIAS = [
  'Todos',
  'Medicamentos',
  'Perfumería',
  'Maquillaje',
  'Cuidado de la Piel',
  'Higiene Personal',
  'Higiene Bucal',
  'Cuidado Infantil',
  'Suplementos',
  'Vitaminas',
  'Equipamiento Médico',
  'Primeros Auxilios',
  'Insumos Médicos',
  'Higiene'
];
