import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Heart, ChevronLeft, ChevronRight } from 'lucide-react';

const verses = [
  {
    id: 1,
    text: "Todo lo hizo hermoso en su tiempo; y ha puesto eternidad en el corazón del hombre, sin que este alcance a comprender la obra hecha por Dios desde el principio hasta el fin.",
    reference: "Eclesiastés 3:11"
  },
  {
    id: 2,
    text: "Porque somos hechura suya, creados en Cristo Jesús para buenas obras, las cuales Dios preparó de antemano para que anduviésemos en ellas.",
    reference: "Efesios 2:10"
  },
  {
    id: 3,
    text: "No es la hermosura exterior, la del peinado ostentoso, la de las joyas de oro o la de los vestidos lujosos, sino la del ser interior, la de un espíritu suave y apacible, que es de grande estima delante de Dios.",
    reference: "1 Pedro 3:3-4"
  },
  {
    id: 4,
    text: "Levántate, resplandece; porque ha venido tu luz, y la gloria de Jehová ha nacido sobre ti.",
    reference: "Isaías 60:1"
  },
  {
    id: 5,
    text: "Jehová es mi fortaleza y mi escudo; en él confió mi corazón, y fui ayudado; por tanto, mi corazón se regocija, y con mi cántico le alabaré.",
    reference: "Salmos 28:7"
  }
];

const BibleVerses = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % verses.length);
    }, 8000); // Cambia cada 8 segundos
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + verses.length) % verses.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % verses.length);
  };

  const currentVerse = verses[currentIndex];

  const variants = {
    enter: (direction) => ({
      opacity: 0,
      x: direction > 0 ? 100 : -100,
    }),
    center: {
      opacity: 1,
      x: 0,
    },
    exit: (direction) => ({
      opacity: 0,
      x: direction < 0 ? 100 : -100,
    }),
  };

  const [direction, setDirection] = useState(0); // 0 for initial, 1 for next, -1 for prev

  const handleManualPrev = () => {
    setDirection(-1);
    handlePrev();
  };

  const handleManualNext = () => {
    setDirection(1);
    handleNext();
  };

  return (
    <section className="container mx-auto px-8 py-16">
      <motion.h2
        className="text-5xl font-extrabold text-center text-gray-900 mb-12 bg-gradient-to-r from-[#D4AF37] to-[#E0BBE4] bg-clip-text text-transparent"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        Inspiración Divina
        <BookOpen className="inline-block ml-4 w-10 h-10 text-[#D4AF37]" />
      </motion.h2>

      <motion.p
        className="text-center text-gray-600 text-xl mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        Creemos que la verdadera belleza reside en el espíritu. Aquí te compartimos algunos versículos que nos inspiran.
      </motion.p>

      <div className="relative flex items-center justify-center">
        <motion.button
          onClick={handleManualPrev}
          className="absolute left-0 z-10 p-3 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors duration-300 shadow-md"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronLeft className="w-6 h-6" />
        </motion.button>

        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentVerse.id}
            className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 flex flex-col items-center text-center max-w-3xl mx-auto"
            variants={variants}
            custom={direction}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
          >
            <Heart className="w-16 h-16 text-[#E0BBE4] mb-6" />
            <p className="text-gray-800 text-2xl font-medium mb-6 italic leading-relaxed">"{currentVerse.text}"</p>
            <p className="text-gray-500 font-semibold text-lg">- {currentVerse.reference}</p>
          </motion.div>
        </AnimatePresence>

        <motion.button
          onClick={handleManualNext}
          className="absolute right-0 z-10 p-3 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors duration-300 shadow-md"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronRight className="w-6 h-6" />
        </motion.button>
      </div>
    </section>
  );
};

export default BibleVerses;