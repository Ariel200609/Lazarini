import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePharmacy } from '../context/PharmacyContext';
import { API_CONFIG } from '../config/api';

const PharmacyInfo: React.FC = () => {
  const { sucursalActual } = usePharmacy();
  const config = API_CONFIG[sucursalActual];

  return (
    <section id="informacion" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={sucursalActual}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="max-w-6xl mx-auto"
          >
            {/* Título de la sección */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-lazarini-green mb-4">
                Información de {config.name}
              </h2>
              <p className="text-gray-600 text-lg">
                Encuéntranos y contáctanos para cualquier consulta
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Información de contacto */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-6"
              >
                {/* Dirección */}
                <div className="bg-white rounded-xl p-6 shadow-lg border border-lazarini-green/20">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-lazarini-green rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-lazarini-green mb-2">Dirección</h3>
                      <p className="text-gray-700 leading-relaxed">{config.direccion}</p>
                    </div>
                  </div>
                </div>

                {/* Teléfono y WhatsApp */}
                <div className="bg-white rounded-xl p-6 shadow-lg border border-lazarini-green/20">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-lazarini-blue rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Teléfono</p>
                        <a href={`tel:${config.telefono}`} className="text-lazarini-blue font-medium hover:underline">
                          {config.telefono}
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.464 3.488"/>
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">WhatsApp</p>
                        <a href={`https://wa.me/${config.whatsapp.replace('+', '').replace(/\s/g, '')}`} 
                           target="_blank" 
                           rel="noopener noreferrer"
                           className="text-green-500 font-medium hover:underline">
                          {config.whatsapp}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="bg-white rounded-xl p-6 shadow-lg border border-lazarini-green/20">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-lazarini-cyan rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-lazarini-green mb-2">Email</h3>
                      <a href={`mailto:${config.email}`} className="text-lazarini-cyan font-medium hover:underline">
                        {config.email}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Horarios */}
                <div className="bg-white rounded-xl p-6 shadow-lg border border-lazarini-green/20">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-lazarini-teal rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-lazarini-green mb-2">Horarios de Atención</h3>
                      <p className="text-gray-700 leading-relaxed">{config.horarios}</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Columna derecha - Mapa y Servicios */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="space-y-6"
              >
                {/* Mapa */}
                <div className="bg-white rounded-xl p-6 shadow-lg border border-lazarini-green/20">
                  <h3 className="text-lg font-semibold text-lazarini-green mb-4">Ubicación</h3>
                  <div className="aspect-video rounded-lg overflow-hidden bg-gray-200 relative">
                    {/* Placeholder del mapa */}
                    <div className="absolute inset-0 bg-gradient-to-br from-lazarini-green/20 to-lazarini-blue/20 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-4xl mb-2">📍</div>
                        <p className="text-lazarini-green font-medium">Ver en Google Maps</p>
                      </div>
                    </div>
                    
                    {/* Botón para abrir en Google Maps */}
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(config.direccion)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300"
                    >
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-lazarini-green text-white px-6 py-3 rounded-full font-medium shadow-lg hover:bg-lazarini-teal transition-colors"
                      >
                        Abrir en Google Maps
                      </motion.button>
                    </a>
                  </div>
                  <p className="text-sm text-gray-600 mt-3 text-center">
                    📍 {config.direccion}
                  </p>
                </div>

                {/* Servicios adicionales */}
                <div className="bg-white rounded-xl p-6 shadow-lg border border-lazarini-green/20">
                  <h3 className="text-lg font-semibold text-lazarini-green mb-4">Servicios</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {['Medicamentos recetados', 'Productos de cuidado personal', 'Atención farmacéutica', 'Entrega a domicilio'].map((servicio, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-lazarini-green rounded-full"></div>
                        <span className="text-sm text-gray-700">{servicio}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default PharmacyInfo;
