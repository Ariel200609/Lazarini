import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Producto } from '../config/api';

interface ProductCardProps {
  producto: Producto;
}

const ProductCard: React.FC<ProductCardProps> = ({ producto }) => {
  const [imageError, setImageError] = useState(false);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS',
      minimumFractionDigits: 0
    }).format(price);
  };

  const calculateDiscountedPrice = (price: number, discount: number) => {
    return price * (1 - discount);
  };

  // Función para obtener el icono según la categoría
  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'medicamentos':
        return (
          <svg className="w-12 h-12 text-lazarini-green" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 8h-2V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H5c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm6 10h-2v2h-2v-2H9v-2h2v-2h2v2h2v2z"/>
          </svg>
        );
      case 'perfumería':
        return (
          <svg className="w-12 h-12 text-lazarini-green" fill="currentColor" viewBox="0 0 24 24">
            <path d="M7 2v11c0 2.76 2.24 5 5 5s5-2.24 5-5V9h1v4c0 3.87-3.13 7-7 7s-7-3.13-7-7V2h3zm1 7V7h8v2H8zm8-4V3H8v2h8z"/>
          </svg>
        );
      case 'maquillaje':
        return (
          <svg className="w-12 h-12 text-lazarini-green" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 7V4H5v3H2v13h20V7h-3zM7 6h10v1H7V6zm10 12H7v-7h10v7z"/>
          </svg>
        );
      case 'cuidado de la piel':
        return (
          <svg className="w-12 h-12 text-lazarini-green" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
          </svg>
        );
      case 'vitaminas':
      case 'suplementos':
        return (
          <svg className="w-12 h-12 text-lazarini-green" fill="currentColor" viewBox="0 0 24 24">
            <path d="M21 7L9 19l-5.5-5.5 1.41-1.41L9 16.17 19.59 5.59 21 7z"/>
          </svg>
        );
      case 'higiene personal':
      case 'higiene bucal':
      case 'higiene':
        return (
          <svg className="w-12 h-12 text-lazarini-green" fill="currentColor" viewBox="0 0 24 24">
            <path d="M9.5 4C7.01 4 5 6.01 5 8.5S7.01 13 9.5 13 14 10.99 14 8.5 11.99 4 9.5 4zm6.5 9H8v7h8v-7z"/>
          </svg>
        );
      case 'cuidado infantil':
        return (
          <svg className="w-12 h-12 text-lazarini-green" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
          </svg>
        );
      default:
        return (
          <svg className="w-12 h-12 text-lazarini-green" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z"/>
          </svg>
        );
    }
  };

  // Componente placeholder mejorado
  const ImagePlaceholder = () => (
    <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex flex-col items-center justify-center">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="flex flex-col items-center"
      >
        {getCategoryIcon(producto.category)}
        <span className="text-gray-500 text-sm font-medium mt-2 text-center px-2">
          {producto.category}
        </span>
      </motion.div>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ 
        scale: 1.03, 
        y: -5,
        boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
      }}
      transition={{ duration: 0.3 }}
      className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
    >
      {/* Imagen del producto */}
      <div className="relative overflow-hidden h-48 bg-gray-100">
        {!imageError ? (
          <img
            src={producto.image}
            alt={producto.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            onError={() => setImageError(true)}
            onLoad={() => setImageError(false)}
          />
        ) : (
          <ImagePlaceholder />
        )}
        
        {/* Badge de promoción */}
        {producto.isPromotional && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute top-3 right-3 bg-gradient-to-r from-lazarini-green to-lazarini-teal text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg"
          >
            {producto.discount ? `-${Math.round(producto.discount * 100)}%` : 'Oferta'}
          </motion.div>
        )}
        
        {/* Badge de categoría */}
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-lazarini-green px-3 py-1 rounded-full text-xs font-medium">
          {producto.category}
        </div>
      </div>

      {/* Contenido del producto */}
      <div className="p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-lazarini-green transition-colors">
          {producto.name}
        </h3>
        
        <p className="text-gray-600 text-sm mb-4 leading-relaxed">
          {producto.description}
        </p>

        {/* Precio */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            {producto.isPromotional && producto.discount ? (
              <>
                <span className="text-2xl font-bold text-lazarini-green">
                  {formatPrice(calculateDiscountedPrice(producto.price, producto.discount))}
                </span>
                <span className="text-gray-400 line-through text-sm">
                  {formatPrice(producto.price)}
                </span>
              </>
            ) : (
              <span className="text-2xl font-bold text-lazarini-green">
                {formatPrice(producto.price)}
              </span>
            )}
          </div>
        </div>

        {/* Botón de acción */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-gradient-to-r from-lazarini-green to-lazarini-teal text-white py-3 px-4 rounded-xl font-semibold hover:from-lazarini-teal hover:to-lazarini-green transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          Ver Detalles
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ProductCard;
