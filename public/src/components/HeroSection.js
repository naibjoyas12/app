import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <motion.section
      className="relative h-[70vh] flex items-center justify-center text-center overflow-hidden bg-gradient-to-br from-[#F8F0FF] to-[#FFFBEB]"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="absolute inset-0 bg-cover bg-center opacity-70" style={{ backgroundImage: "url('https://images.unsplash.com/photo-158804982832-812212112112?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}></div>
      <div className="absolute inset-0 bg-gradient-to-t from-white/50 to-transparent"></div>

      <motion.div
        className="relative z-10 p-8 max-w-3xl mx-auto"
        variants={containerVariants}
      >
        <motion.h2
          className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight"
          variants={itemVariants}
        >
          Descubre la <span className="bg-gradient-to-r from-[#D4AF37] to-[#E0BBE4] bg-clip-text text-transparent">Elegancia</span> que te Define
        </motion.h2>
        <motion.p
          className="text-xl md:text-2xl text-gray-700 mb-10 font-medium"
          variants={itemVariants}
        >
          "Cuatro nombres, un solo objetivo: la perfección en joyería."
        </motion.p>
        <motion.button
          className="px-10 py-4 bg-gradient-to-r from-[#D4AF37] to-[#E0BBE4] text-white font-bold text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center mx-auto"
          whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.2)" }}
          whileTap={{ scale: 0.95 }}
          variants={itemVariants}
        >
          Explorar Colección <Sparkles className="ml-3 w-5 h-5" />
        </motion.button>
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;