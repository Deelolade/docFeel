import React from 'react'
import { motion } from 'framer-motion'
const Marquee = () => {
  return (
    <div className="py-12 border-y-2 border-black overflow-hidden bg-black text-white">
        <motion.div 
          className="flex whitespace-nowrap"
          animate={{ x: [0, -1000] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          {[...Array(8)].map((_, i) => (
            <div key={i}>
              <span className="text-2xl font-bold mx-8">ANALYZE</span>
              <span className="text-2xl mx-8">•</span>
              <span className="text-2xl font-bold mx-8">SUMMARIZE</span>
              <span className="text-2xl mx-8">•</span>
              <span className="text-2xl font-bold mx-8">INTERACT</span>
              <span className="text-2xl mx-8">•</span>
            </div>
          ))}
        </motion.div>
      </div>
  )
}

export default Marquee
