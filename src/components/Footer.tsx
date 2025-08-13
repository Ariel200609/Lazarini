import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom">
        {/* Contenido principal del footer */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Información de la empresa */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                  <span className="text-white text-lg font-bold">L</span>
                </div>
                <h3 className="text-xl font-bold">Farmacia Lazarini</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Más de 20 años cuidando la salud de las familias de Bonifacio y Guaminí. 
                Comprometidos con la calidad y el servicio personalizado.
              </p>
            </motion.div>

            {/* Enlaces rápidos */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-white">Enlaces Rápidos</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#productos" className="text-gray-300 hover:text-lazarini-green transition-colors">
                    Productos
                  </a>
                </li>
                <li>
                  <a href="#sucursales" className="text-gray-300 hover:text-lazarini-green transition-colors">
                    Sucursales
                  </a>
                </li>
                <li>
                  <a href="#contacto" className="text-gray-300 hover:text-lazarini-green transition-colors">
                    Contacto
                  </a>
                </li>
                <li>
                  <a href="#servicios" className="text-gray-300 hover:text-lazarini-green transition-colors">
                    Servicios
                  </a>
                </li>
              </ul>
            </motion.div>

            {/* Sucursales */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-white">Nuestras Sucursales</h4>
              <div className="space-y-3">
                <div>
                  <h5 className="font-medium text-lazarini-green">Bonifacio</h5>
                  <p className="text-sm text-gray-300">Laguna Alsina</p>
                </div>
                <div>
                  <h5 className="font-medium text-lazarini-green">Guaminí</h5>
                  <p className="text-sm text-gray-300">Centro</p>
                </div>
              </div>
            </motion.div>

            {/* Contacto y redes sociales */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-white">Síguenos</h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-lazarini-green hover:bg-lazarini-teal rounded-full flex items-center justify-center transition-colors duration-300"
                  aria-label="Facebook"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                
                <a
                  href="#"
                  className="w-10 h-10 bg-lazarini-blue hover:bg-lazarini-cyan rounded-full flex items-center justify-center transition-colors duration-300"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.418-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.244c-.875.807-2.026 1.297-3.323 1.297zm7.718-1.297c-.875.807-2.026 1.297-3.323 1.297s-2.448-.49-3.323-1.297c-.928-.875-1.418-2.026-1.418-3.244s.49-2.448 1.418-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.244z"/>
                  </svg>
                </a>
                
                <a
                  href="#"
                  className="w-10 h-10 bg-lazarini-teal hover:bg-lazarini-green rounded-full flex items-center justify-center transition-colors duration-300"
                  aria-label="WhatsApp"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                </a>
              </div>
              
              <div className="pt-4">
                <p className="text-sm text-gray-300">Contacto directo:</p>
                <a href="tel:+5491112345678" className="text-lazarini-green hover:text-lazarini-teal transition-colors">
                  +54 9 11 1234-5678
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-gray-800"></div>

        {/* Información legal y copyright */}
        <div className="py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.div
              className="text-center md:text-left"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-400 text-sm">
                © {currentYear} Farmacia Lazarini. Todos los derechos reservados.
              </p>
            </motion.div>

            <motion.div
              className="flex flex-wrap justify-center space-x-6 text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <a href="#" className="text-gray-400 hover:text-lazarini-green transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="text-gray-400 hover:text-lazarini-green transition-colors">
                Términos de Servicio
              </a>
              <a href="#" className="text-gray-400 hover:text-lazarini-green transition-colors">
                Política de Cookies
              </a>
            </motion.div>
          </div>
        </div>

        {/* Información adicional */}
        <motion.div
          className="pb-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-xs text-gray-500">
            Farmacia Lazarini - Registro Nacional de Establecimientos Farmacéuticos N° 12345<br/>
            Dispensación de medicamentos bajo supervisión farmacéutica profesional
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
