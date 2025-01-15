'use client'

import { useState } from 'react'
import { Phone, PhoneOff } from 'lucide-react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { SparklesCore } from "./ui/sparkles"

export default function LandingSection() {
  const [isCallActive, setIsCallActive] = useState(false)

  const handleCallToggle = async () => {
    if (!isCallActive) {
      try {
        await navigator.mediaDevices.getUserMedia({ audio: true })
        setIsCallActive(true)
      } catch (err) {
        console.error('Error accessing microphone:', err)
        alert('Unable to access microphone. Please check your permissions.')
      }
    } else {
      setIsCallActive(false)
    }
  }

  return (
    <section className="text-center py-20 relative">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={50}
          count={300}
          className="w-full h-full"
          particleColor="#4FD1C5"
        />
      </div>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-5xl font-bold text-white mb-6 relative z-10"
      >
        Welcome to PhonePal
      </motion.h2>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-2xl text-gray-300 mb-12 relative z-10"
      >
        Your AI-powered phone companion for seamless communication.
      </motion.p>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative z-10"
      >
        <Button
          onClick={handleCallToggle}
          size="lg"
          className={`text-white font-bold py-6 px-12 rounded-full transition-all ${
            isCallActive ? 'bg-red-500 hover:bg-red-600' : 'bg-teal-500 hover:bg-teal-600'
          }`}
        >
          {isCallActive ? (
            <>
              <PhoneOff className="mr-2 h-6 w-6" />
              End Call
            </>
          ) : (
            <>
              <Phone className="mr-2 h-6 w-6" />
              Start Call
            </>
          )}
        </Button>
      </motion.div>
    </section>
  )
}

