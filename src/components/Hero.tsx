import React from 'react';
import { motion } from 'framer-motion';
import { usePharmacy } from '../context/PharmacyContext';

const Hero: React.FC = () => {
  const { sucursalActual } = usePharmacy();

  const sucursalInfo = {
    BONIFACIO: {
      titulo: 'Bonifacio - Laguna Alsina',
      descripcion: 'Tu farmacia de confianza en el corazón de Laguna Alsina. Ofrecemos atención personalizada y productos de calidad para cuidar tu salud y la de tu familia.',
      imagen: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1200&h=600&fit=crop',
      caracteristicas: ['Atención 24/7', 'Delivery gratuito', 'Asesoramiento profesional']
    },
    GUAMINI: {
      titulo: 'Guaminí - Centro',
      descripcion: 'Farmacia Lazarini en el centro de Guaminí. Comprometidos con tu bienestar, ofrecemos una amplia gama de productos farmacéuticos y cuidado personal.',
      imagen: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=1200&h=600&fit=crop',
      caracteristicas: ['Horario extendido', 'Servicio personalizado', 'Productos premium']
    }
  };

  const info = sucursalInfo[sucursalActual];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-lazarini-green via-lazarini-teal to-lazarini-blue">
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[600px] py-20">
          {/* Contenido de texto */}
          <motion.div
            className="text-white space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-5xl lg:text-6xl font-bold leading-tight">
                {info.titulo}
              </h2>
            </motion.div>
            
            <motion.p
              className="text-xl text-gray-100 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {info.descripcion}
            </motion.p>

            <motion.div
              className="space-y-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {info.caracteristicas.map((caracteristica, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-lazarini-mint rounded-full"></div>
                  <span className="text-gray-100 font-medium">{caracteristica}</span>
                </div>
              ))}
            </motion.div>

            <motion.button
              className="btn-primary bg-white text-lazarini-green hover:bg-gray-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Ver Productos
            </motion.button>
          </motion.div>

          {/* Imagen */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={info.imagen}
                alt={`Farmacia Lazarini ${info.titulo}`}
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              
              {/* Badge de sucursal */}
              <div className="absolute top-6 right-6">
                <div className="bg-lazarini-green text-white px-4 py-2 rounded-full font-semibold shadow-lg">
                  {sucursalActual === 'BONIFACIO' ? 'Laguna Alsina' : 'Centro'}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Elementos decorativos */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-lazarini-mint/20 rounded-full blur-xl"></div>
    </section>
  );
};

export default Hero;
