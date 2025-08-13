import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePharmacy } from '../context/PharmacyContext';

const PharmacyInfo: React.FC = () => {
  const { sucursalActual } = usePharmacy();

  const sucursalData = {
    BONIFACIO: {
      nombre: 'Bonifacio - Laguna Alsina',
      direccion: 'Av. Principal 123, Laguna Alsina, Bonifacio',
      telefono: '+54 9 11 1234-5678',
      whatsapp: '+54 9 11 1234-5678',
      email: 'bonifacio@farmacialazarini.com',
      horarios: {
        lunes: '08:00 - 20:00',
        martes: '08:00 - 20:00',
        miercoles: '08:00 - 20:00',
        jueves: '08:00 - 20:00',
        viernes: '08:00 - 20:00',
        sabado: '08:00 - 18:00',
        domingo: '09:00 - 14:00'
      },
      servicios: ['Atención 24/7', 'Delivery gratuito', 'Asesoramiento profesional', 'Venta de medicamentos', 'Productos de cuidado personal'],
      coordenadas: { lat: -35.5, lng: -58.8 }, // Coordenadas de ejemplo
      mapaUrl: 'https://maps.google.com/?q=-35.5,-58.8'
    },
    GUAMINI: {
      nombre: 'Guaminí - Centro',
      direccion: 'San Martín 456, Centro, Guaminí',
      telefono: '+54 9 11 9876-5432',
      whatsapp: '+54 9 11 9876-5432',
      email: 'guamini@farmacialazarini.com',
      horarios: {
        lunes: '08:00 - 21:00',
        martes: '08:00 - 21:00',
        miercoles: '08:00 - 21:00',
        jueves: '08:00 - 21:00',
        viernes: '08:00 - 21:00',
        sabado: '08:00 - 20:00',
        domingo: '09:00 - 16:00'
      },
      servicios: ['Horario extendido', 'Servicio personalizado', 'Productos premium', 'Consultorio farmacéutico', 'Venta mayorista'],
      coordenadas: { lat: -37.2, lng: -62.4 }, // Coordenadas de ejemplo
      mapaUrl: 'https://maps.google.com/?q=-37.2,-62.4'
    }
  };

  const data = sucursalData[sucursalActual];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <AnimatePresence mode="wait">
          <motion.div
            key={sucursalActual}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {/* Título de la sección */}
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Información de la Sucursal
              </h2>
              <p className="text-xl text-gray-600">
                Conoce más sobre {data.nombre}
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Información de contacto */}
              <motion.div
                className="space-y-8"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {/* Datos básicos */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900">Datos de Contacto</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-lazarini-green/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-lazarini-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Dirección</p>
                        <p className="text-gray-600">{data.direccion}</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-lazarini-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-lazarini-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Teléfono</p>
                        <a href={`tel:${data.telefono}`} className="text-lazarini-blue hover:text-lazarini-cyan transition-colors">
                          {data.telefono}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-lazarini-teal/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-lazarini-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">WhatsApp</p>
                        <a href={`https://wa.me/${data.whatsapp.replace(/\D/g, '')}`} className="text-lazarini-teal hover:text-lazarini-green transition-colors">
                          {data.whatsapp}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-lazarini-mint/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-lazarini-mint" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Email</p>
                        <a href={`mailto:${data.email}`} className="text-lazarini-mint hover:text-lazarini-teal transition-colors">
                          {data.email}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Horarios */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900">Horarios de Atención</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {Object.entries(data.horarios).map(([dia, horario]) => (
                      <div key={dia} className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="font-medium text-gray-700 capitalize">{dia}</span>
                        <span className="text-gray-600">{horario}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Servicios */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900">Servicios</h3>
                  <div className="grid grid-cols-1 gap-3">
                    {data.servicios.map((servicio, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-lazarini-green rounded-full"></div>
                        <span className="text-gray-700">{servicio}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Mapa */}
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h3 className="text-2xl font-bold text-gray-900">Ubicación</h3>
                
                {/* Mapa de Google */}
                <div className="relative h-96 rounded-xl overflow-hidden shadow-lg">
                  <iframe
                    src={`https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=${data.coordenadas.lat},${data.coordenadas.lng}&zoom=15`}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Mapa de ${data.nombre}`}
                  />
                  
                  {/* Overlay con información */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                    <div className="text-white">
                      <h4 className="font-bold text-lg mb-2">{data.nombre}</h4>
                      <p className="text-sm opacity-90">{data.direccion}</p>
                    </div>
                  </div>
                </div>

                {/* Botón para abrir en Google Maps */}
                <div className="text-center">
                  <a
                    href={data.mapaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary inline-flex items-center space-x-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    <span>Abrir en Google Maps</span>
                  </a>
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
