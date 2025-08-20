import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Producto } from '../config/api';
import { useCart, getProductWhatsAppUrl } from '../context/CartContext';
import { usePharmacy } from '../context/PharmacyContext';

interface ProductCardProps {
  producto: Producto;
}

const ProductCard: React.FC<ProductCardProps> = ({ producto }) => {
  const [imageError, setImageError] = useState(false);
  const { addToCart } = useCart();
  const { sucursalActual } = usePharmacy();

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

        {/* Botones de acción */}
        <div className="flex space-x-2">
          {/* Botón agregar al carrito */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => addToCart(producto)}
            className="flex-1 bg-gradient-to-r from-lazarini-green to-lazarini-teal text-white py-3 px-4 rounded-xl font-semibold hover:from-lazarini-teal hover:to-lazarini-green transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7h-3V6a4 4 0 0 0-8 0v1H5a1 1 0 0 0-1 1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8a1 1 0 0 0-1-1zM10 6a2 2 0 0 1 4 0v1h-4V6zm8 13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V9h2v1a1 1 0 0 0 2 0V9h4v1a1 1 0 0 0 2 0V9h2v10z"/>
            </svg>
            <span>Agregar</span>
          </motion.button>

          {/* Botón WhatsApp directo */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => window.open(getProductWhatsAppUrl(producto, sucursalActual === 'BONIFACIO' ? 'Bonifacio' : 'Guaminí'), '_blank')}
            className="bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center"
            title="Consultar por WhatsApp"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.382z"/>
            </svg>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
