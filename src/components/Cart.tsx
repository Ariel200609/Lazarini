import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../context/CartContext';

const Cart: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { 
    items, 
    removeFromCart, 
    updateQuantity, 
    clearCart, 
    getTotalItems, 
    getTotalPrice, 
    getWhatsAppUrl 
  } = useCart();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS',
      minimumFractionDigits: 0
    }).format(price);
  };

  const calculateItemPrice = (item: any) => {
    return item.producto.isPromotional && item.producto.discount
      ? item.producto.price * (1 - item.producto.discount)
      : item.producto.price;
  };

  const handleWhatsAppOrder = () => {
    const url = getWhatsAppUrl();
    window.open(url, '_blank');
    // Opcionalmente, limpiar el carrito después de enviar
    // clearCart();
  };

  return (
    <>
      {/* Botón flotante del carrito mejorado */}
      <motion.button
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-br from-lazarini-green via-lazarini-teal to-blue-500 text-white p-5 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 border-2 border-white/20 backdrop-blur-sm"
        style={{
          background: 'linear-gradient(135deg, #18DE56 0%, #18A1DE 50%, #1E40AF 100%)',
          boxShadow: '0 20px 40px rgba(24, 222, 86, 0.3), 0 0 0 1px rgba(255,255,255,0.1) inset'
        }}
      >
        <div className="relative">
          <motion.svg 
            className="w-7 h-7" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            animate={{ rotate: isOpen ? 360 : 0 }}
            transition={{ duration: 0.5 }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 7h-3V6a4 4 0 0 0-8 0v1H5a1 1 0 0 0-1 1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8a1 1 0 0 0-1-1zM10 6a2 2 0 0 1 4 0v1h-4V6zm8 13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V9h2v1a1 1 0 0 0 2 0V9h4v1a1 1 0 0 0 2 0V9h2v10z"/>
          </motion.svg>
          {getTotalItems() > 0 && (
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 180 }}
              className="absolute -top-3 -right-3 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs rounded-full h-7 w-7 flex items-center justify-center font-bold shadow-lg border-2 border-white"
              style={{
                background: 'linear-gradient(135deg, #EF4444 0%, #EC4899 100%)',
                boxShadow: '0 4px 12px rgba(239, 68, 68, 0.4)'
              }}
            >
              <motion.span
                key={getTotalItems()}
                initial={{ scale: 1.5 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.2 }}
              >
                {getTotalItems()}
              </motion.span>
            </motion.div>
          )}
          
          {/* Pulso animado cuando hay items */}
          {getTotalItems() > 0 && (
            <motion.div
              className="absolute inset-0 rounded-2xl border-2 border-lazarini-green"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          )}
        </div>
      </motion.button>

      {/* Modal del carrito */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black bg-opacity-50 z-50"
            />

            {/* Panel del carrito */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl z-50 overflow-hidden flex flex-col"
            >
              {/* Header mejorado */}
              <div 
                className="relative p-6 text-white overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, #18DE56 0%, #18A1DE 50%, #1E40AF 100%)',
                }}
              >
                {/* Patrón de fondo */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 20% 20%, white 1px, transparent 1px),
                                     radial-gradient(circle at 80% 80%, white 1px, transparent 1px)`,
                    backgroundSize: '30px 30px'
                  }}></div>
                </div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-3">
                      <motion.div
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm"
                      >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7h-3V6a4 4 0 0 0-8 0v1H5a1 1 0 0 0-1 1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8a1 1 0 0 0-1-1zM10 6a2 2 0 0 1 4 0v1h-4V6zm8 13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V9h2v1a1 1 0 0 0 2 0V9h4v1a1 1 0 0 0 2 0V9h2v10z"/>
                        </svg>
                      </motion.div>
                      <div>
                        <h2 className="text-2xl font-bold tracking-wide">Mi Carrito</h2>
                        <p className="text-sm opacity-90">
                          {getTotalItems()} {getTotalItems() === 1 ? 'producto' : 'productos'}
                        </p>
                      </div>
                    </div>
                    
                    <motion.button
                      whileHover={{ scale: 1.1, rotate: 90 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setIsOpen(false)}
                      className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-300"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </motion.button>
                  </div>
                  
                  {/* Barra de progreso decorativa */}
                  <motion.div 
                    className="h-1 bg-white/30 rounded-full overflow-hidden"
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    <motion.div
                      className="h-full bg-white rounded-full"
                      initial={{ width: '0%' }}
                      animate={{ width: getTotalItems() > 0 ? '100%' : '0%' }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                    />
                  </motion.div>
                </div>
              </div>

              {/* Contenido del carrito */}
              <div className="flex-1 overflow-y-auto p-6 bg-gradient-to-b from-gray-50 to-white">
                {items.length === 0 ? (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center py-12"
                  >
                    <motion.div
                      animate={{ 
                        y: [0, -10, 0],
                        rotate: [0, 5, -5, 0]
                      }}
                      transition={{ 
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center shadow-lg"
                    >
                      <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 7h-3V6a4 4 0 0 0-8 0v1H5a1 1 0 0 0-1 1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8a1 1 0 0 0-1-1zM10 6a2 2 0 0 1 4 0v1h-4V6zm8 13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V9h2v1a1 1 0 0 0 2 0V9h4v1a1 1 0 0 0 2 0V9h2v10z"/>
                      </svg>
                    </motion.div>
                    <h3 className="text-xl font-semibold text-gray-700 mb-3">¡Tu carrito está vacío!</h3>
                    <p className="text-gray-500 mb-4 leading-relaxed">
                      Explora nuestros productos farmacéuticos y encuentra lo que necesitas
                    </p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setIsOpen(false)}
                      className="px-6 py-3 bg-gradient-to-r from-lazarini-green to-lazarini-teal text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      Ver Productos
                    </motion.button>
                  </motion.div>
                ) : (
                  <div className="space-y-5">
                    {items.map((item, index) => (
                      <motion.div
                        key={item.producto.id}
                        layout
                        initial={{ opacity: 0, x: 50, scale: 0.9 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, x: -50, scale: 0.9 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-white rounded-2xl p-5 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden"
                      >
                        {/* Indicador de descuento */}
                        {item.producto.isPromotional && item.producto.discount && (
                          <motion.div
                            initial={{ scale: 0, rotate: -45 }}
                            animate={{ scale: 1, rotate: 0 }}
                            className="absolute top-3 right-3 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs px-2 py-1 rounded-full font-bold shadow-md"
                          >
                            -{Math.round(item.producto.discount * 100)}%
                          </motion.div>
                        )}
                        
                        <div className="flex items-start space-x-4">
                          {/* Imagen del producto mejorada */}
                          <motion.div 
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            className="w-20 h-20 bg-gradient-to-br from-lazarini-green/10 to-lazarini-teal/10 rounded-2xl flex items-center justify-center flex-shrink-0 border border-lazarini-green/20 shadow-md"
                          >
                            <svg className="w-10 h-10 text-lazarini-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7h-3V6a4 4 0 0 0-8 0v1H5a1 1 0 0 0-1 1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8a1 1 0 0 0-1-1zM10 6a2 2 0 0 1 4 0v1h-4V6zm8 13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V9h2v1a1 1 0 0 0 2 0V9h4v1a1 1 0 0 0 2 0V9h2v10z"/>
                            </svg>
                          </motion.div>
                          
                          <div className="flex-1 min-w-0">
                            <h3 className="font-bold text-gray-900 text-base leading-tight mb-1">
                              {item.producto.name}
                            </h3>
                            <div className="flex items-center space-x-2 mb-3">
                              <span className="text-xs text-white bg-lazarini-green/80 px-2 py-1 rounded-full font-medium">
                                {item.producto.category}
                              </span>
                              {item.producto.isPromotional && (
                                <span className="text-xs text-white bg-red-500 px-2 py-1 rounded-full font-medium">
                                  OFERTA
                                </span>
                              )}
                            </div>
                            
                            {/* Controles de cantidad mejorados */}
                            <div className="flex items-center justify-between">
                              <div className="flex items-center bg-gray-100 rounded-xl p-1 space-x-1">
                                <motion.button
                                  whileHover={{ scale: 1.1 }}
                                  whileTap={{ scale: 0.9 }}
                                  onClick={() => updateQuantity(item.producto.id, item.cantidad - 1)}
                                  className="w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center hover:bg-red-50 hover:text-red-600 transition-all duration-200"
                                >
                                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M20 12H4" />
                                  </svg>
                                </motion.button>
                                
                                <motion.div
                                  key={item.cantidad}
                                  initial={{ scale: 1.2 }}
                                  animate={{ scale: 1 }}
                                  className="min-w-[3rem] text-center font-bold text-gray-800 px-2"
                                >
                                  {item.cantidad}
                                </motion.div>
                                
                                <motion.button
                                  whileHover={{ scale: 1.1 }}
                                  whileTap={{ scale: 0.9 }}
                                  onClick={() => updateQuantity(item.producto.id, item.cantidad + 1)}
                                  className="w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center hover:bg-green-50 hover:text-green-600 transition-all duration-200"
                                >
                                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                                  </svg>
                                </motion.button>
                              </div>
                              
                              <motion.button
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => removeFromCart(item.producto.id)}
                                className="w-10 h-10 rounded-xl bg-red-50 text-red-500 hover:bg-red-100 hover:text-red-600 flex items-center justify-center transition-all duration-200 shadow-sm"
                              >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>
                              </motion.button>
                            </div>
                            
                            {/* Precios mejorados */}
                            <div className="mt-4 pt-3 border-t border-gray-100">
                              <div className="flex items-center justify-between">
                                <div className="text-sm text-gray-600">
                                  <span className="font-medium">{formatPrice(calculateItemPrice(item))}</span>
                                  <span className="text-gray-400"> × {item.cantidad}</span>
                                </div>
                                <div className="text-right">
                                  <div className="font-bold text-lg text-lazarini-green">
                                    {formatPrice(calculateItemPrice(item) * item.cantidad)}
                                  </div>
                                  {item.producto.isPromotional && item.producto.discount && (
                                    <div className="text-xs text-gray-400 line-through">
                                      {formatPrice(item.producto.price * item.cantidad)}
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>

              {/* Footer con total y acciones mejorado */}
              {items.length > 0 && (
                <motion.div 
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  className="border-t border-gray-200 bg-gradient-to-r from-gray-50 to-white p-6 space-y-6"
                >
                  {/* Resumen del total */}
                  <div className="bg-white rounded-2xl p-4 shadow-lg border border-gray-100">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-600 font-medium">Subtotal:</span>
                      <span className="font-semibold">{formatPrice(getTotalPrice())}</span>
                    </div>
                    <div className="flex items-center justify-between mb-3 pb-3 border-b border-gray-100">
                      <span className="text-gray-600 font-medium">Productos:</span>
                      <span className="font-semibold">{getTotalItems()}</span>
                    </div>
                    <motion.div 
                      className="flex items-center justify-between text-xl font-bold"
                      animate={{ scale: [1, 1.02, 1] }}
                      transition={{ duration: 0.5 }}
                    >
                      <span className="text-gray-800">Total:</span>
                      <span 
                        className="text-transparent bg-clip-text bg-gradient-to-r from-lazarini-green to-lazarini-teal"
                        style={{
                          background: 'linear-gradient(135deg, #18DE56 0%, #18A1DE 100%)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent'
                        }}
                      >
                        {formatPrice(getTotalPrice())}
                      </span>
                    </motion.div>
                  </div>

                  {/* Botones de acción mejorados */}
                  <div className="space-y-3">
                    <motion.button
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={handleWhatsAppOrder}
                      className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-4 px-6 rounded-2xl font-bold transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center justify-center space-x-3 relative overflow-hidden"
                    >
                      {/* Efecto de brillo */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                        animate={{ x: [-100, 400] }}
                        transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                      />
                      
                      <motion.svg 
                        className="w-6 h-6" 
                        fill="currentColor" 
                        viewBox="0 0 24 24"
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.382z"/>
                      </motion.svg>
                      <span className="relative z-10 text-lg">Pedir por WhatsApp</span>
                    </motion.button>
                    
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={clearCart}
                      className="w-full bg-gradient-to-r from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 text-gray-700 py-3 px-4 rounded-xl font-semibold transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center space-x-2"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                      <span>Vaciar carrito</span>
                    </motion.button>
                  </div>
                  
                  {/* Mensaje informativo */}
                  <div className="text-center">
                    <p className="text-xs text-gray-500 leading-relaxed">
                      💊 Tu pedido será enviado por WhatsApp<br/>
                      📍 Confirmaremos disponibilidad y entrega
                    </p>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Cart;
