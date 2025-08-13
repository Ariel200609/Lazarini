import React from 'react';
import { motion } from 'framer-motion';
import { Producto } from '../config/api';

interface ProductCardProps {
  producto: Producto;
}

const ProductCard: React.FC<ProductCardProps> = ({ producto }) => {
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
        <img
          src={producto.image}
          alt={producto.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = 'https://via.placeholder.com/300x200/18DE56/FFFFFF?text=Producto';
          }}
        />
        
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
