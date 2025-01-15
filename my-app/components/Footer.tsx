'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-900/50 text-white py-8 backdrop-blur-md"
    >
      <div className="container mx-auto px-4 text-center">
        <p className="text-teal-400">&copy; {new Date().getFullYear()} PhonePal. All rights reserved.</p>
        <div className="mt-4">
          {['Privacy Policy', 'Terms of Service', 'Contact Us'].map((item, index) => (
            <motion.a 
              key={item}
              href="#" 
              className="text-gray-300 hover:text-teal-400 mx-2"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {item}
            </motion.a>
          ))}
        </div>
      </div>
    </motion.footer>
  )
}

