import React from 'react';
import { motion } from 'framer-motion';
import { Producto } from '../config/api';

interface ProductCardProps {
  producto: Producto;
  index: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ producto, index }) => {
  return (
    <motion.div
      className="card overflow-hidden group"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        type: "spring",
        stiffness: 100
      }}
      whileHover={{ 
        y: -10,
        transition: { duration: 0.3 }
      }}
    >
      {/* Imagen del producto */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={producto.imagen || 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400&h=300&fit=crop'}
          alt={producto.nombre}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* Badge de destacado */}
        {producto.destacado && (
          <motion.div
            className="absolute top-3 left-3 bg-lazarini-green text-white px-3 py-1 rounded-full text-xs font-semibold"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5 + index * 0.1 }}
          >
            Destacado
          </motion.div>
        )}

        {/* Badge de stock */}
        <div className="absolute top-3 right-3">
          <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
            producto.stock === 'Disponible' 
              ? 'bg-lazarini-green text-white' 
              : 'bg-red-500 text-white'
          }`}>
            {producto.stock || 'Disponible'}
          </div>
        </div>

        {/* Overlay de hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Contenido del producto */}
      <div className="p-6 space-y-4">
        {/* Categoría */}
        {producto.categoria && (
          <motion.div
            className="inline-block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 + index * 0.1 }}
          >
            <span className="text-lazarini-blue text-sm font-medium bg-lazarini-blue/10 px-3 py-1 rounded-full">
              {producto.categoria}
            </span>
          </motion.div>
        )}

        {/* Nombre del producto */}
        <motion.h3
          className="text-xl font-bold text-gray-900 group-hover:text-lazarini-green transition-colors duration-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 + index * 0.1 }}
        >
          {producto.nombre}
        </motion.h3>

        {/* Descripción */}
        <motion.p
          className="text-gray-600 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 + index * 0.1 }}
        >
          {producto.descripcion}
        </motion.p>

        {/* Precio y botón */}
        <motion.div
          className="flex items-center justify-between pt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 + index * 0.1 }}
        >
          {producto.precio && (
            <div className="text-2xl font-bold text-lazarini-green">
              {producto.precio}
            </div>
          )}
          
          <motion.button
            className="btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Consultar
          </motion.button>
        </motion.div>
      </div>

      {/* Indicador de hover */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-lazarini-green to-lazarini-blue transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
    </motion.div>
  );
};

export default ProductCard;
