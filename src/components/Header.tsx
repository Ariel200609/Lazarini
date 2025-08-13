import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePharmacy } from '../context/PharmacyContext';

const Header: React.FC = () => {
  const { sucursalActual, cambiarSucursal } = usePharmacy();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Controlar visibilidad del header al hacer scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down - ocultar header
        setIsVisible(false);
      } else {
        // Scrolling up - mostrar header
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const sucursales = [
    { key: 'BONIFACIO', label: 'Bonifacio' },
    { key: 'GUAMINI', label: 'Guaminí' }
  ];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.header
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-lg border-b border-lazarini-green/20"
        >
          <div className="container mx-auto px-4 py-3">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-3"
              >
                <img
                  src="/Lazarini/FarmaciaLogo.jpg"
                  alt="Farmacia Lazarini"
                  className="h-12 w-12 rounded-full object-cover shadow-md"
                />
                <div className="hidden sm:block">
                  <h1 className="text-xl font-bold text-lazarini-green">
                    FARMACIA LAZARINI
                  </h1>
                  <p className="text-xs text-gray-600">Salud y bienestar</p>
                </div>
              </motion.div>

              {/* Tabs de sucursales */}
              <div className="flex space-x-1 bg-gray-100 rounded-lg p-1">
                {sucursales.map((sucursal) => (
                  <motion.button
                    key={sucursal.key}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => cambiarSucursal(sucursal.key as 'BONIFACIO' | 'GUAMINI')}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                      sucursalActual === sucursal.key
                        ? 'bg-lazarini-green text-white shadow-md'
                        : 'text-gray-600 hover:text-lazarini-green hover:bg-white'
                    }`}
                  >
                    {sucursal.label}
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        </motion.header>
      )}
    </AnimatePresence>
  );
};

export default Header;
