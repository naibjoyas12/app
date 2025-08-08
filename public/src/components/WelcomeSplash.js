import React from 'react';
import { motion } from 'framer-motion';

const WelcomeSplash = () => {
  return (
    <motion.div
      className="fixed inset-0 bg-gradient-to-br from-[#F8F0FF] to-[#FFFBEB] flex items-center justify-center z-50"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1.5, ease: "easeOut" } }}
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="flex flex-col items-center"
      >
        <motion.img
          src="https://4tsix0yujj.ufs.sh/f/2vMRHqOYUHc08DGyvYFn7xHOTFQ3jrBEd0VGzfS9yKokWuAe"
          alt="NAIB Joyas Logo"
          className="h-40 w-auto mb-6"
          initial={{ rotate: -180 }}
          animate={{ rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
        />
        <motion.h1
          className="text-5xl font-extrabold text-gray-900 bg-gradient-to-r from-[#D4AF37] to-[#E0BBE4] bg-clip-text text-transparent"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 1 }}
        >
          NAIB Joyas
        </motion.h1>
        <motion.p
          className="text-xl text-gray-700 mt-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 1.5 }}
        >
          La perfección en joyería
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default WelcomeSplash;