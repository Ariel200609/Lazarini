import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePharmacy } from '../context/PharmacyContext';
import ProductCard from './ProductCard';
import ProductSearch from './ProductSearch';
import { Producto } from '../config/api';

const ProductList: React.FC = () => {
  const { sucursalActual, productos, loading, error } = usePharmacy();
  const [filteredProducts, setFilteredProducts] = useState<Producto[]>([]);
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    setFilteredProducts(productos);
  }, [productos]);

  const handleFilteredProducts = (productos: Producto[]) => {
    setFilteredProducts(productos);
  };

  if (loading) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-lazarini-green mb-4"></div>
            <h2 className="text-2xl font-bold text-gray-700 mb-2">Cargando productos...</h2>
            <p className="text-gray-500">🔄 Obteniendo el catálogo más actualizado</p>
          </div>
          
          {/* Skeleton loading */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-12">
            {[...Array(8)].map((_, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg animate-pulse">
                <div className="h-48 bg-gray-200 rounded-lg mb-4"></div>
                <div className="h-4 bg-gray-200 rounded mb-2"></div>
                <div className="h-3 bg-gray-200 rounded mb-2"></div>
                <div className="h-3 bg-gray-200 rounded mb-4"></div>
                <div className="h-8 bg-gray-200 rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="text-6xl mb-4">⚠️</div>
            <h2 className="text-2xl font-bold text-red-600 mb-2">Error al cargar productos</h2>
            <p className="text-gray-600 mb-6">No pudimos cargar el catálogo de productos</p>
            <button 
              onClick={() => window.location.reload()}
              className="bg-lazarini-green text-white px-6 py-3 rounded-lg hover:bg-lazarini-teal transition-colors"
            >
              🔄 Reintentar
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header de la sección */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-lazarini-green mb-4"
          >
            Productos de {sucursalActual === 'BONIFACIO' ? 'Bonifacio' : 'Guaminí'}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-600 text-lg max-w-2xl mx-auto"
          >
            Descubre nuestra amplia gama de productos farmacéuticos, perfumería, maquillaje y cuidado personal
          </motion.p>
        </div>

        {/* Botón para mostrar/ocultar búsqueda */}
        <div className="text-center mb-8">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowSearch(!showSearch)}
            className="bg-gradient-to-r from-lazarini-green to-lazarini-teal text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2 mx-auto"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <span>{showSearch ? 'Ocultar Búsqueda' : 'Buscar y Filtrar Productos'}</span>
          </motion.button>
        </div>

        {/* Sistema de búsqueda y filtros */}
        <AnimatePresence>
          {showSearch && (
            <ProductSearch 
              productos={productos} 
              onFilteredProducts={handleFilteredProducts} 
            />
          )}
        </AnimatePresence>

        {/* Contador de productos */}
        <div className="text-center mb-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block bg-white px-6 py-3 rounded-full shadow-md border border-lazarini-green/20"
          >
            <span className="text-lazarini-green font-semibold">
              {filteredProducts.length} producto{filteredProducts.length !== 1 ? 's' : ''}
            </span>
            {filteredProducts.length !== productos.length && (
              <span className="text-gray-500 ml-2">
                de {productos.length} total
              </span>
            )}
          </motion.div>
        </div>

        {/* Lista de productos */}
        {filteredProducts.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center py-16"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-700 mb-2">No se encontraron productos</h3>
            <p className="text-gray-500 mb-6">
              Intenta ajustar tus filtros de búsqueda o categoría
            </p>
            <button
              onClick={() => {
                setShowSearch(true);
                // Resetear filtros
                setFilteredProducts(productos);
              }}
              className="bg-lazarini-green text-white px-6 py-3 rounded-lg hover:bg-lazarini-teal transition-colors"
            >
              🔄 Limpiar Filtros
            </button>
          </motion.div>
        ) : (
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            <AnimatePresence>
              {filteredProducts.map((producto, index) => (
                <motion.div
                  key={producto.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ 
                    duration: 0.3, 
                    delay: index * 0.1,
                    layout: { duration: 0.3 }
                  }}
                >
                  <ProductCard producto={producto} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}

        {/* Información adicional */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center bg-white rounded-2xl p-8 shadow-lg border border-lazarini-green/20"
        >
          <h3 className="text-2xl font-bold text-lazarini-green mb-4">
            💡 ¿No encuentras lo que buscas?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Nuestro personal está disponible para ayudarte a encontrar el producto perfecto. 
            También podemos hacer pedidos especiales si no tenemos algo en stock.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-lazarini-green text-white px-6 py-3 rounded-lg hover:bg-lazarini-teal transition-colors">
              📞 Llamar para Consultar
            </button>
            <button className="bg-lazarini-blue text-white px-6 py-3 rounded-lg hover:bg-lazarini-cyan transition-colors">
              💬 WhatsApp
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductList;
