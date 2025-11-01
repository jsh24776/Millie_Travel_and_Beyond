import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sophia Reyes",
    quote: "Camille Travel made our honeymoon unforgettable! Everything was seamless.",
  },
  {
    name: "Liam Cruz",
    quote: "Their Bali package was beyond amazing — professional and caring staff!",
  },
  {
    name: "Mia Santos",
    quote: "Super easy booking process. They really know how to make travel stress-free!",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-gray-50 dark:bg-gray-900 text-center px-6">
      <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-10">What Our Clients Say</h3>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.03 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg dark:shadow-soft-2xl p-6"
          >
            <p className="text-gray-600 dark:text-gray-300 italic mb-4">“{t.quote}”</p>
            <h4 className="font-semibold text-primary-600 dark:text-primary-400">{t.name}</h4>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
