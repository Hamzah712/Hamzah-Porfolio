import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Code } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-dark-light py-8 border-t border-gray-800">
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
              <Code className="text-primary" size={24} />
            </motion.div>
            <span className="text-gray-400">Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Heart className="text-red-500 fill-current" size={20} />
            </motion.div>
            <span className="text-gray-400">by</span>
            <motion.span
              whileHover={{ color: '#ffc107' }}
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
            className="text-gray-500 text-sm"
          >
            © {new Date().getFullYear()} All rights reserved. Built with React & Framer Motion.
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;