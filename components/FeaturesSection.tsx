'use client'

import { Mic, Brain, Clock, Shield } from 'lucide-react'
import { motion } from 'framer-motion'
import { CardHoverEffect, CardHoverEffectItem } from "./ui/card-hover-effect"

const features: CardHoverEffectItem[] = [
  {
    title: 'Advanced Voice Recognition',
    description: 'Our AI accurately understands and responds to your voice commands and queries.',
    icon: <Mic className="h-6 w-6 text-teal-400" />,
  },
  {
    title: 'Intelligent Conversation',
    description: 'Engage in natural, context-aware conversations with our advanced AI.',
    icon: <Brain className="h-6 w-6 text-teal-400" />,
  },
  {
    title: '24/7 Availability',
    description: 'PhonePal is always ready to assist you, any time of day or night.',
    icon: <Clock className="h-6 w-6 text-teal-400" />,
  },
  {
    title: 'Secure and Private',
    description: 'Your conversations are encrypted and your data is kept private and secure.',
    icon: <Shield className="h-6 w-6 text-teal-400" />,
  },
]

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-gray-900 rounded-lg shadow-xl mt-12 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center text-white mb-12"
        >
          Why Choose PhonePal?
        </motion.h2>
        <CardHoverEffect items={features} hoverBg="bg-gray-800" iconContainer="flex items-center justify-center w-12 h-12 bg-gray-800"/>
      </div>
    </section>
  )
}

