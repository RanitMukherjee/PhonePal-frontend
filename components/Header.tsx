'use client'

import { Phone } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { TextGenerateEffect } from "./ui/text-generate-effect"

export default function Header() {
  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100 }}
      className="bg-gray-900/50 text-white shadow-md backdrop-blur-md"
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <motion.div 
          className="flex items-center space-x-2"
          whileHover={{ scale: 1.05 }}
        >
          <Phone size={24} className="text-teal-400" />
          <TextGenerateEffect words="PhonePal" className="text-2xl font-bold" />
        </motion.div>
        <nav>
          <ul className="flex space-x-4">
            {['Home', 'About', 'Contact'].map((item, index) => (
              <motion.li key={item} 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href="#" className="text-gray-300 hover:text-teal-400 transition-colors">
                  {item}
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>
      </div>
    </motion.header>
  )
}

