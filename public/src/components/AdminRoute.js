import React from 'react';
import { motion } from 'framer-motion';

// Este componente simula una ruta protegida.
// En una aplicación real, aquí se verificaría el estado de autenticación del usuario
// y si tiene los permisos de administrador.

const AdminRoute = ({ children, isOwner }) => {
  if (!isOwner) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="container mx-auto px-8 py-16 text-center"
      >
        <h2 className="text-4xl font-bold text-red-600 mb-4">Acceso Denegado</h2>
        <p className="text-lg text-gray-700">
          Lo sentimos, no tienes permisos para acceder a esta sección.
          Por favor, inicia sesión con una cuenta de administrador.
        </p>
      </motion.div>
    );
  }

  return children;
};

export default AdminRoute;