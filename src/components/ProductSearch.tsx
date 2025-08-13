import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Producto } from '../config/api';
import { CATEGORIAS } from '../data/productos';

interface ProductSearchProps {
  productos: Producto[];
  onFilteredProducts: (productos: Producto[]) => void;
}

const ProductSearch: React.FC<ProductSearchProps> = ({ productos, onFilteredProducts }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'category'>('name');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  // Filtrar y ordenar productos
  const filteredAndSortedProducts = useMemo(() => {
    let filtered = productos;

    // Filtro por búsqueda
    if (searchTerm.trim()) {
      filtered = filtered.filter(producto =>
        producto.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        producto.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        producto.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filtro por categoría
    if (selectedCategory !== 'Todos') {
      filtered = filtered.filter(producto => producto.category === selectedCategory);
    }

    // Ordenamiento
    filtered.sort((a, b) => {
      let aValue: string | number;
      let bValue: string | number;

      switch (sortBy) {
        case 'name':
          aValue = a.name.toLowerCase();
          bValue = b.name.toLowerCase();
          break;
        case 'price':
          aValue = a.price;
          bValue = b.price;
          break;
        case 'category':
          aValue = a.category.toLowerCase();
          bValue = b.category.toLowerCase();
          break;
        default:
          aValue = a.name.toLowerCase();
          bValue = b.name.toLowerCase();
      }

      if (sortOrder === 'asc') {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });

    return filtered;
  }, [productos, searchTerm, selectedCategory, sortBy, sortOrder]);

  // Actualizar productos filtrados en el componente padre
  React.useEffect(() => {
    onFilteredProducts(filteredAndSortedProducts);
  }, [filteredAndSortedProducts, onFilteredProducts]);

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('Todos');
    setSortBy('name');
    setSortOrder('asc');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-2xl shadow-lg p-6 mb-8 border border-lazarini-green/20"
    >
      {/* Barra de búsqueda */}
      <div className="mb-6">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Buscar productos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-lazarini-green focus:border-lazarini-green transition-all duration-200"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="absolute inset-y-0 right-0 pr-3 flex items-center"
            >
              <svg className="h-5 w-5 text-gray-400 hover:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>
      </div>

      {/* Filtros y ordenamiento */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {/* Filtro por categoría */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Categoría
          </label>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="block w-full px-3 py-2 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-lazarini-green focus:border-lazarini-green transition-all duration-200"
          >
            {CATEGORIAS.map((categoria) => (
              <option key={categoria} value={categoria}>
                {categoria}
              </option>
            ))}
          </select>
        </div>

        {/* Ordenar por */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Ordenar por
          </label>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as 'name' | 'price' | 'category')}
            className="block w-full px-3 py-2 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-lazarini-green focus:border-lazarini-green transition-all duration-200"
          >
            <option value="name">Nombre</option>
            <option value="price">Precio</option>
            <option value="category">Categoría</option>
          </select>
        </div>

        {/* Orden ascendente/descendente */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Orden
          </label>
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value as 'asc' | 'desc')}
            className="block w-full px-3 py-2 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-lazarini-green focus:border-lazarini-green transition-all duration-200"
          >
            <option value="asc">A-Z / Menor a Mayor</option>
            <option value="desc">Z-A / Mayor a Menor</option>
          </select>
        </div>
      </div>

      {/* Botón limpiar filtros y contador de resultados */}
      <div className="flex flex-col sm:flex-row justify-between items-center">
        <button
          onClick={clearFilters}
          className="mb-4 sm:mb-0 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-200 flex items-center space-x-2"
        >
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
          <span>Limpiar Filtros</span>
        </button>

        <div className="text-sm text-gray-600">
          <span className="font-medium">{filteredAndSortedProducts.length}</span> de {productos.length} productos
          {searchTerm && (
            <span className="ml-2">
              para "<span className="font-medium">{searchTerm}</span>"
            </span>
          )}
          {selectedCategory !== 'Todos' && (
            <span className="ml-2">
              en <span className="font-medium">{selectedCategory}</span>
            </span>
          )}
        </div>
      </div>

      {/* Categorías rápidas */}
      <div className="mt-6 pt-6 border-t border-gray-200">
        <h3 className="text-sm font-medium text-gray-700 mb-3">Categorías rápidas:</h3>
        <div className="flex flex-wrap gap-2">
          {CATEGORIAS.filter(cat => cat !== 'Todos').map((categoria) => (
            <motion.button
              key={categoria}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(categoria)}
              className={`px-3 py-1 text-xs rounded-full transition-all duration-200 ${
                selectedCategory === categoria
                  ? 'bg-lazarini-green text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {categoria}
            </motion.button>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProductSearch;
