import React from 'react';
import { motion } from 'framer-motion';
import { usePharmacy } from '../context/PharmacyContext';

const Hero: React.FC = () => {
  const { sucursalActual } = usePharmacy();

  const heroData = {
    BONIFACIO: {
      title: 'Farmacia Montoya',
      subtitle: 'Bonifacio - Laguna Alsina',
      description: 'Tu salud es nuestra prioridad. Ofrecemos productos farmacéuticos de calidad y atención profesional en el corazón de Laguna Alsina.',
      features: [
        { 
          title: 'Medicamentos Recetados',
          description: 'Venta bajo supervisión farmacéutica',
          icon: '💊'
        },
        { 
          title: 'Productos de Cuidado',
          description: 'Higiene personal y cosméticos',
          icon: '🧴'
        },
        { 
          title: 'Atención Profesional',
          description: 'Asesoramiento farmacéutico especializado',
          icon: '👨‍⚕️'
        },
        { 
          title: 'Entrega a Domicilio',
          description: 'Servicio rápido y confiable',
          icon: '🚚'
        }
      ],
      bgImage: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1200&h=600&fit=crop'
    },
    GUAMINI: {
      title: 'Farmacia Montoya',
      subtitle: 'Guaminí',
      description: 'Cuidamos de tu bienestar con productos farmacéuticos de primera calidad y un equipo de profesionales comprometidos con tu salud.',
      features: [
        { 
          title: 'Medicamentos Recetados',
          description: 'Venta bajo supervisión farmacéutica',
          icon: '💊'
        },
        { 
          title: 'Productos de Cuidado',
          description: 'Higiene personal y cosméticos',
          icon: '🧴'
        },
        { 
          title: 'Atención Profesional',
          description: 'Asesoramiento farmacéutico especializado',
          icon: '👨‍⚕️'
        },
        { 
          title: 'Servicio 24/7',
          description: 'Atención de urgencias',
          icon: '🆘'
        }
      ],
      bgImage: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=1200&h=600&fit=crop'
    }
  };

  const currentData = heroData[sucursalActual];

  return (
    <section className="relative pt-24 pb-16 overflow-hidden">
      {/* Imagen de fondo con overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={currentData.bgImage}
          alt="Farmacia"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-lazarini-green/90 via-lazarini-blue/80 to-lazarini-cyan/70"></div>
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-6xl mx-auto text-center">
          {/* Título principal */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-block mb-6"
            >
              <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-white/30">
                <span className="text-4xl">🏥</span>
              </div>
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-2xl">
              {currentData.title}
            </h1>
            <h2 className="text-2xl md:text-4xl font-semibold text-lazarini-mint mb-8 drop-shadow-lg">
              {currentData.subtitle}
            </h2>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed drop-shadow-lg">
              {currentData.description}
            </p>
          </motion.div>

          {/* Características mejoradas */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          >
            {currentData.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -8,
                  rotateY: 5
                }}
                className="group"
              >
                <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-white/30 transform transition-all duration-300 hover:shadow-3xl">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-bold text-lazarini-green mb-2 group-hover:text-lazarini-blue transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                  
                  {/* Efecto de brillo en hover */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Button mejorado */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(24, 222, 86, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              className="relative overflow-hidden bg-gradient-to-r from-lazarini-green to-lazarini-teal text-white text-xl font-bold px-12 py-5 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 group"
            >
              <span className="relative z-10">Ver Productos Destacados</span>
              
              {/* Efecto de brillo */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              
              {/* Icono */}
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute right-6 top-1/2 transform -translate-y-1/2"
              >
                →
              </motion.div>
            </motion.button>
          </motion.div>

          {/* Elementos decorativos flotantes */}
          <motion.div
            animate={{ 
              y: [0, -10, 0],
              rotate: [0, 5, 0]
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-20 left-10 text-6xl opacity-20"
          >
            💊
          </motion.div>
          
          <motion.div
            animate={{ 
              y: [0, 10, 0],
              rotate: [0, -5, 0]
            }}
            transition={{ 
              duration: 5, 
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            className="absolute top-32 right-20 text-5xl opacity-20"
          >
            🧬
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
