import React from 'react';
import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';

const InstagramFeed = () => {
  // En un entorno real, aquí integrarías una API de Instagram
  // o una biblioteca para mostrar el feed dinámicamente.
  // Por ahora, usaremos imágenes de ejemplo para simular el feed.
  const instagramPosts = [
    { id: '1', imageUrl: 'https://images.unsplash.com/photo-1599643478518-a784f548c6f8?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', link: 'https://www.instagram.com/NAIB_JOYAS.ec' },
    { id: '2', imageUrl: 'https://images.unsplash.com/photo-1599643478518-a784f548c6f8?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', link: 'https://www.instagram.com/NAIB_JOYAS.ec' },
    { id: '3', imageUrl: 'https://images.unsplash.com/photo-1599643478518-a784f548c6f8?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', link: 'https://www.instagram.com/NAIB_JOYAS.ec' },
    { id: '4', imageUrl: 'https://images.unsplash.com/photo-1599643478518-a784f548c6f8?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', link: 'https://www.instagram.com/NAIB_JOYAS.ec' },
    { id: '5', imageUrl: 'https://images.unsplash.com/photo-1599643478518-a784f548c6f8?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', link: 'https://www.instagram.com/NAIB_JOYAS.ec' },
    { id: '6', imageUrl: 'https://images.unsplash.com/photo-1599643478518-a784f548c6f8?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', link: 'https://www.instagram.com/NAIB_JOYAS.ec' },
  ];

  return (
    <section className="container mx-auto px-8 py-16">
      <motion.h2
        className="text-5xl font-extrabold text-center text-gray-900 mb-12 bg-gradient-to-r from-[#D4AF37] to-[#E0BBE4] bg-clip-text text-transparent"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        Síguenos en Instagram
        <Instagram className="inline-block ml-4 w-10 h-10 text-[#D4AF37]" />
      </motion.h2>

      <motion.p
        className="text-center text-gray-600 text-xl mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        Descubre nuestras últimas creaciones y momentos especiales. ¡No te pierdas nada!
      </motion.p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {instagramPosts.map((post, index) => (
          <motion.a
            key={post.id}
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block relative overflow-hidden rounded-lg shadow-md group"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05, zIndex: 1 }}
          >
            <img
              src={post.imageUrl}
              alt={`Instagram Post ${post.id}`}
              className="w-full h-full object-cover aspect-square transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Instagram className="w-10 h-10 text-white" />
            </div>
          </motion.a>
        ))}
      </div>

      <motion.div
        className="text-center mt-12"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: instagramPosts.length * 0.1 + 0.5, duration: 0.7 }}
      >
        <a
          href="https://www.instagram.com/NAIB_JOYAS.ec"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-[#E0BBE4] text-white font-bold text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
        >
          <Instagram className="mr-3 w-6 h-6" /> Visita nuestro Instagram
        </a>
      </motion.div>
    </section>
  );
};

export default InstagramFeed;