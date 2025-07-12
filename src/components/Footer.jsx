import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Code, Coffee } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white py-12">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="flex items-center justify-center space-x-2 mb-4">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Code className="text-primary-400" size={20} />
            </motion.div>
            <span className="text-neutral-400">Crafted with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Heart className="text-red-400 fill-current" size={16} />
            </motion.div>
            <span className="text-neutral-400">and</span>
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Coffee className="text-amber-400" size={16} />
            </motion.div>
            <span className="text-neutral-400">by</span>
            <motion.span
              whileHover={{ color: '#0ea5e9' }}
              className="text-white font-semibold cursor-pointer transition-colors duration-300"
            >
              Hamzah Ahmed
            </motion.span>
          </div>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="text-neutral-500 text-sm"
          >
            © {new Date().getFullYear()} All rights reserved. Built with React, Tailwind CSS & Framer Motion.
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;