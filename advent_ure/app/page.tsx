'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function HomeScreen() {
  const [isExpanded, setIsExpanded] = useState(false)

  const handleExpand = () => {
    setIsExpanded(true)
  }

  return (
    <div className="flex flex-col items-center justify-between h-screen bg-white p-8">
      <div className="w-full max-w-md">
        <Image
          src="/images/logo.png"
          alt="ADVENTure Logo"
          width={200}
          height={100}
          className="mx-auto mb-8"
        />
        
        <div className="relative w-32 h-32 mx-auto mb-8" onClick={handleExpand}>
          <motion.div
            className="absolute top-0 left-0 w-32 h-32 rounded-full overflow-hidden"
            initial={{ x: 0 }}
            animate={{ x: isExpanded ? 60 : 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Image
              src="/images/alice.png"
              alt="Profile 3"
              width={128}
              height={128}
            />
          </motion.div>
          <motion.div
            className="absolute top-0 left-0 w-32 h-32 rounded-full overflow-hidden"
            initial={{ x: 0 }}
            animate={{ x: isExpanded ? 0 : 0 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/images/alice.png"
              alt="Profile 1"
              width={128}
              height={128}
            />
          </motion.div>
          <motion.div
            className="absolute top-0 left-0 w-32 h-32 rounded-full overflow-hidden"
            initial={{ x: 0, opacity: 0 }}
            animate={{ x: isExpanded ? -60 : 0, opacity: isExpanded ? 1 : 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Image
              src="/images/alice.png"
              alt="Profile 2"
              width={128}
              height={128}
            />
          </motion.div>
        </div>

        <motion.p
          className="text-center text-xl font-semibold mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: isExpanded ? 1 : 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Spend your Advent with someone
        </motion.p>

        <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-full text-xl font-semibold hover:bg-blue-700 transition-colors">
          <a href='/preferences'>
            Login
          </a>
        </button>
      </div>
    </div>
  )
}

