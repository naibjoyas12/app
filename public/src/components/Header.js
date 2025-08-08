import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Diamond, Sparkles, Menu, ShoppingCart, X, Phone, Mail, MapPin } from 'lucide-react';
import { Instagram } from 'lucide-react'; // Asegúrate de que Instagram esté importado

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    {
      name: 'Inicio',
      content: (
        <>
          <h3 className="text-3xl font-bold text-gray-800 mb-4">Bienvenido a NAIB Joyas</h3>
          <p className="text-lg text-gray-700 mb-4">
            Descubre la elegancia y la perfección en cada una de nuestras piezas. En NAIB Joyas, transformamos metales preciosos y gemas en obras de arte que realzan tu belleza y celebran tus momentos más especiales.
          </p>
          <p className="text-lg text-gray-700">
            Sumérgete en un mundo de brillo, sofisticación y diseño exclusivo. ¡Tu joya perfecta te espera!
          </p>
        </>
      )
    },
    {
      name: 'Colecciones',
      content: (
        <>
          <h3 className="text-3xl font-bold text-gray-800 mb-4">Nuestras Exclusivas Colecciones</h3>
          <p className="text-lg text-gray-700 mb-4">
            Cada colección de NAIB Joyas es una historia, una inspiración y una promesa de calidad. Explora nuestras líneas diseñadas para cada estilo y ocasión:
          </p>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
            <li><span className="font-semibold text-[#D4AF37]">Anillos:</span> Símbolos de amor eterno y elegancia atemporal.</li>
            <li><span className="font-semibold text-[#D4AF37]">Collares:</span> Piezas que adornan tu cuello con gracia y distinción.</li>
            <li><span className="font-semibold text-[#D4AF37]">Pendientes:</span> El toque final perfecto para iluminar tu rostro.</li>
            <li><span className="font-semibold text-[#D4AF37]">Pulseras:</span> Delicadas y sofisticadas, para llevar la belleza en tu muñeca.</li>
          </ul>
          <p className="text-lg text-gray-700 mt-4">
            Encuentra la joya que resuena contigo y expresa tu personalidad única.
          </p>
        </>
      )
    },
    {
      name: 'Acerca de',
      content: (
        <>
          <h3 className="text-3xl font-bold text-gray-800 mb-4">Nuestra Historia y Pasión</h3>
          <p className="text-lg text-gray-700 mb-4">
            En NAIB, nuestra pasión por la joyería va más allá de lo estético. Como emprendimiento ecuatoriano, nos enorgullece crear piezas únicas que no solo complementan tu estilo, sino que también realzan tu esencia.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Creemos firmemente en el poder de la fe y el empoderamiento femenino. Cada una de nuestras joyas está diseñada con un propósito: ser un recordatorio de tu valía y tu capacidad para brillar con luz propia. Queremos ser parte de tu historia, de tus momentos especiales y de tu día a día, dándote ese toque de elegancia y modernidad que te define.
          </p>
          <p className="text-lg text-gray-700">
            Nuestro lema, <span className="font-semibold italic">"Cuatro nombres, un solo objetivo: la perfección en joyería"</span>, es el reflejo de nuestra dedicación y compromiso. Trabajamos con amor y esmero para que cada joya sea tan especial y única como tú.
          </p>
          <p className="text-lg text-gray-700 mt-4">
            Te invitamos a explorar nuestra colección y a encontrar esa pieza que te hará sentir auténtica y segura de ti misma.
          </p>
        </>
      )
    },
    {
      name: 'Contacto',
      content: (
        <>
          <h3 className="text-3xl font-bold text-gray-800 mb-4">Contáctanos</h3>
          <p className="text-lg text-gray-700 mb-4">
            ¿Tienes alguna pregunta, necesitas asesoramiento o quieres realizar un pedido especial? No dudes en contactarnos, estaremos encantados de ayudarte.
          </p>
          <div className="space-y-3 text-lg text-gray-700">
            <p className="flex items-center gap-3"><Phone className="w-6 h-6 text-[#D4AF37]" /> Teléfono: <span className="font-semibold">0985075243</span></p>
            <p className="flex items-center gap-3"><Mail className="w-6 h-6 text-[#D4AF37]" /> Email: <span className="font-semibold">info@naibjoyas.com</span></p>
            <p className="flex items-center gap-3"><MapPin className="w-6 h-6 text-[#D4AF37]" /> Dirección: <span className="font-semibold">Ecuador (Entregas a nivel nacional)</span></p>
            <p className="flex items-center gap-3"><Instagram className="w-6 h-6 text-[#D4AF37]" /> Instagram: <a href="https://www.instagram.com/NAIB_JOYAS.ec" target="_blank" rel="noopener noreferrer" className="font-semibold hover:underline">@NAIB_JOYAS.ec</a></p>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            Nuestro equipo está disponible para atenderte y brindarte la mejor experiencia.
          </p>
        </>
      )
    }
  ];

  const [currentSectionContent, setCurrentSectionContent] = useState(null);

  const handleNavItemClick = (content) => {
    setCurrentSectionContent(content);
  };

  return (
    <motion.header
      className="relative z-10 bg-white/80 backdrop-blur-lg shadow-lg py-4 px-8 rounded-b-3xl"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <motion.div
          className="flex items-center gap-3"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <img src="https://4tsix0yujj.ufs.sh/f/2vMRHqOYUHc08DGyvYFn7xHOTFQ3jrBEd0VGzfS9yKokWuAe" alt="NAIB Joyas Logo" className="h-10 w-auto" />
          <h1 className="text-3xl font-extrabold text-gray-900 bg-gradient-to-r from-[#D4AF37] to-[#E0BBE4] bg-clip-text text-transparent">
            NAIB Joyas
          </h1>
        </motion.div>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item, index) => (
            <motion.a
              key={item.name}
              href="#"
              onClick={() => handleNavItemClick(item.content)}
              className="text-gray-700 hover:text-[#D4AF37] font-semibold text-lg transition-colors duration-300 relative group"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#D4AF37] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </motion.a>
          ))}
          <motion.button
            className="flex items-center gap-2 text-gray-700 hover:text-[#D4AF37] font-semibold text-lg transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ShoppingCart className="w-6 h-6" />
            Carrito
          </motion.button>
        </nav>

        <div className="flex items-center md:hidden gap-4">
          <motion.button
            className="text-gray-700 hover:text-[#D4AF37]"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ShoppingCart className="w-7 h-7" />
          </motion.button>
          <motion.button
            className="text-gray-700 hover:text-[#D4AF37]"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="md:hidden mt-4 bg-white rounded-lg shadow-lg overflow-hidden"
          >
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href="#"
                onClick={() => {
                  handleNavItemClick(item.content);
                  setIsMobileMenuOpen(false);
                }}
                className="block px-6 py-3 text-gray-700 hover:bg-gray-100 hover:text-[#D4AF37] font-semibold transition-colors duration-300"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
              >
                {item.name}
              </motion.a>
            ))}
            <motion.button
              className="w-full px-6 py-3 flex items-center justify-center gap-2 text-gray-700 hover:bg-gray-100 hover:text-[#D4AF37] font-semibold transition-colors duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <ShoppingCart className="w-6 h-6" />
              Carrito
            </motion.button>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Section Content Display */}
      <AnimatePresence>
        {currentSectionContent && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="mt-8 p-6 bg-gradient-to-r from-[#F8F0FF] to-[#FFFBEB] rounded-xl shadow-inner border border-gray-200"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-bold text-gray-800">Información de la Sección</h3>
              <motion.button
                onClick={() => setCurrentSectionContent(null)}
                className="text-gray-500 hover:text-gray-700"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <X className="w-6 h-6" />
              </motion.button>
            </div>
            <div className="text-gray-700 text-lg">{currentSectionContent}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;