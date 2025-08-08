import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProductGallery from './components/ProductGallery';
import Footer from './components/Footer';
import AdminPanel from './components/AdminPanel';
import BibleVerses from './components/BibleVerses';
import MensJewelrySection from './components/MensJewelrySection';
import WelcomeSplash from './components/WelcomeSplash';
import AdminRoute from './components/AdminRoute'; // Importa el componente AdminRoute
import { products as initialProducts } from './mock/products';

const App = () => {
  const [products, setProducts] = useState(initialProducts);
  const [isAdminMode, setIsAdminMode] = useState(false);
  const [showSplash, setShowSplash] = useState(true);

  // Simulación de autenticación de dueña
  // En un caso real, esta variable 'isOwner' se establecería después de un proceso de login exitoso
  const [isOwner, setIsOwner] = useState(true); // true para simular que la dueña está logueada

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleUpdateProduct = (updatedProduct) => {
    setProducts(prevProducts =>
      prevProducts.map(p => (p.id === updatedProduct.id ? updatedProduct : p))
    );
  };

  const handleDeleteProduct = (productId) => {
    setProducts(prevProducts => prevProducts.filter(p => p.id !== productId));
  };

  const handleAddProduct = (newProduct) => {
    setProducts(prevProducts => [...prevProducts, { ...newProduct, id: Date.now().toString() }]);
  };

  return (
    <>
      <AnimatePresence>
        {showSplash && <WelcomeSplash />}
      </AnimatePresence>

      {!showSplash && (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
          <Header />
          <main>
            <HeroSection />
            <motion.section
              className="container mx-auto px-8 py-16 text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <h3 className="text-4xl font-bold text-gray-800 mb-6">Nuestra Promesa</h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                En NAIB Joyas, cada pieza es una obra de arte, meticulosamente diseñada y elaborada para capturar la esencia de la belleza y la elegancia. Creemos que cada joya cuenta una historia, y estamos aquí para ayudarte a encontrar la tuya.
              </p>
            </motion.section>

            {/* Botón para alternar el modo administrador, solo visible para la dueña */}
            {isOwner && (
              <div className="text-center mb-8">
                <motion.button
                  onClick={() => setIsAdminMode(!isAdminMode)}
                  className="px-6 py-3 bg-gray-800 text-white rounded-full shadow-md hover:bg-gray-700 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isAdminMode ? 'Salir del Modo Administrador' : 'Entrar al Modo Administrador'}
                </motion.button>
              </div>
            )}

            {/* La sección del AdminPanel ahora está protegida por AdminRoute */}
            <AdminRoute isOwner={isOwner}>
              {isAdminMode && (
                <AdminPanel
                  products={products}
                  onUpdateProduct={handleUpdateProduct}
                  onDeleteProduct={handleDeleteProduct}
                  onAddProduct={handleAddProduct}
                />
              )}
            </AdminRoute>

            {!isAdminMode && ( // Solo muestra las galerías si no estamos en modo administrador
              <>
                <ProductGallery products={products.filter(p => p.category !== 'Hombre')} />
                <MensJewelrySection products={products.filter(p => p.category === 'Hombre')} />
                <BibleVerses />
              </>
            )}
          </main>
          <Footer />
        </div>
      )}
    </>
  );
};

export default App;