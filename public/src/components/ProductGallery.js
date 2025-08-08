import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ShoppingCart } from 'lucide-react';

const ProductCard = ({ product, index }) => {
  return (
    <motion.div
      className="group bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <motion.button
            className="w-full py-3 bg-gradient-to-r from-[#D4AF37] to-[#E0BBE4] text-white font-semibold rounded-lg flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <ShoppingCart className="w-5 h-5" /> Añadir al Carrito
          </motion.button>
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-extrabold text-[#D4AF37]">${product.price}</span>
          <span className="text-sm text-gray-500 px-3 py-1 bg-gray-100 rounded-full">{product.category}</span>
        </div>
      </div>
    </motion.div>
  );
};

const ProductGallery = ({ products }) => {
  const [selectedCategory, setSelectedCategory] = useState('Todas');

  const categories = ['Todas', ...new Set(products.map(p => p.category))];

  const filteredProducts = selectedCategory === 'Todas'
    ? products
    : products.filter(p => p.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section className="container mx-auto px-8 py-16">
      <motion.h2
        className="text-5xl font-extrabold text-center text-gray-900 mb-12 bg-gradient-to-r from-[#D4AF37] to-[#E0BBE4] bg-clip-text text-transparent"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        Nuestras Colecciones
        <Sparkles className="inline-block ml-4 w-10 h-10 text-[#D4AF37]" />
      </motion.h2>

      {/* Filtros de Categoría */}
      <motion.div
        className="flex flex-wrap justify-center gap-4 mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        {categories.map(category => (
          <motion.button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
              selectedCategory === category
                ? 'bg-gradient-to-r from-[#D4AF37] to-[#E0BBE4] text-white shadow-md'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category}
          </motion.button>
        ))}
      </motion.div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {filteredProducts.map((product, index) => (
          <ProductCard key={product.id} product={product} index={index} />
        ))}
      </motion.div>

      {filteredProducts.length === 0 && (
        <motion.p
          className="text-center text-gray-600 text-xl mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          No hay productos en esta categoría. ¡Vuelve pronto!
        </motion.p>
      )}

      <motion.div
        className="text-center mt-16"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: products.length * 0.1 + 0.5, duration: 0.7 }}
      >
        <button className="px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-[#E0BBE4] text-white font-bold text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
          Ver Todas las Joyas
        </button>
      </motion.div>
    </section>
  );
};

export default ProductGallery;