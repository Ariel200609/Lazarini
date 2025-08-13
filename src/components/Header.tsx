import React from 'react';
import { motion } from 'framer-motion';
import { usePharmacy } from '../context/PharmacyContext';

const Header: React.FC = () => {
  const { sucursalActual, cambiarSucursal } = usePharmacy();

  const tabs = [
    { id: 'BONIFACIO', label: 'Bonifacio', description: 'Laguna Alsina' },
    { id: 'GUAMINI', label: 'Guaminí', description: 'Sucursal Centro' }
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center justify-between py-6">
          {/* Logo y título */}
          <motion.div 
            className="flex items-center space-x-4 mb-4 lg:mb-0"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center">
              <span className="text-white text-2xl font-bold">L</span>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gradient">FARMACIA LAZARINI</h1>
              <p className="text-gray-600 text-sm">Salud y bienestar para tu familia</p>
            </div>
          </motion.div>

          {/* Tabs de navegación */}
          <motion.nav 
            className="flex space-x-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => cambiarSucursal(tab.id as 'BONIFACIO' | 'GUAMINI')}
                className={`relative px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  sucursalActual === tab.id
                    ? 'bg-lazarini-green text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-lazarini-teal hover:text-white'
                }`}
              >
                <div className="text-center">
                  <div className="font-semibold">{tab.label}</div>
                  <div className="text-xs opacity-90">{tab.description}</div>
                </div>
                {sucursalActual === tab.id && (
                  <motion.div
                    className="absolute inset-0 rounded-lg bg-lazarini-green"
                    layoutId="activeTab"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </motion.nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
