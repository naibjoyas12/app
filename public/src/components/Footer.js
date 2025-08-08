import React from 'react';
import { motion } from 'framer-motion';
import { Diamond, Instagram, Facebook, Twitter, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <motion.footer
      className="bg-gray-900 text-gray-300 py-12 px-8 mt-16 rounded-t-3xl"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="text-center md:text-left">
          <motion.div
            className="flex items-center justify-center md:justify-start gap-3 mb-4"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <img src="https://4tsix0yujj.ufs.sh/f/2vMRHqOYUHc08DGyvYFn7xHOTFQ3jrBEd0VGzfS9yKokWuAe" alt="NAIB Joyas Logo" className="h-10 w-auto" />
            <h3 className="text-2xl font-bold text-white">NAIB Joyas</h3>
          </motion.div>
          <motion.p
            className="text-gray-400 leading-relaxed"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            "Cuatro nombres, un solo objetivo: la perfección en joyería."
          </motion.p>
          <motion.div
            className="flex items-center justify-center md:justify-start gap-2 mt-4 text-gray-400"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <Phone className="w-5 h-5 text-[#D4AF37]" />
            <span>0985075243</span>
          </motion.div>
          <motion.p
            className="text-gray-400 text-sm mt-2"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            Entregas solo en Ecuador.
          </motion.p>
        </div>

        <div className="text-center md:text-left">
          <motion.h4
            className="text-xl font-semibold text-white mb-5"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            Enlaces Rápidos
          </motion.h4>
          <ul className="space-y-3">
            {['Colecciones', 'Nuevos Diseños', 'Ofertas', 'Preguntas Frecuentes'].map((item, index) => (
              <motion.li
                key={item}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
              >
                <a href="#" className="hover:text-[#D4AF37] transition-colors duration-300">
                  {item}
                </a>
              </motion.li>
            ))}
          </ul>
        </div>

        <div className="text-center md:text-left">
          <motion.h4
            className="text-xl font-semibold text-white mb-5"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            Síguenos
          </motion.h4>
          <div className="flex justify-center md:justify-start gap-6">
            <motion.a
              href="https://www.instagram.com/NAIB_JOYAS.ec"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#D4AF37] transition-colors duration-300"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.5 }}
            >
              <Instagram className="w-7 h-7" />
            </motion.a>
            <motion.a
              href="#"
              className="text-gray-400 hover:text-[#D4AF37] transition-colors duration-300"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <Facebook className="w-7 h-7" />
            </motion.a>
            <motion.a
              href="#"
              className="text-gray-400 hover:text-[#D4AF37] transition-colors duration-300"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.5 }}
            >
              <Twitter className="w-7 h-7" />
            </motion.a>
          </div>
        </div>
      </div>
      <motion.div
        className="border-t border-gray-700 mt-10 pt-8 text-center text-gray-500 text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        © {new Date().getFullYear()} NAIB Joyas. Todos los derechos reservados.
      </motion.div>
    </motion.footer>
  );
};

export default Footer;