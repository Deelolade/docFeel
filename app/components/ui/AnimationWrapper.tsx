import { useInView } from 'framer-motion'
import React, { ReactNode, useRef } from 'react'
import { motion } from "framer-motion"


type AnimateProps = {
  children: ReactNode
  className: string
}

const AnimatedSection = ({ children, className = "" }: AnimateProps) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={className}
      >
        {children}
      </motion.div>
    )
  }

export default AnimatedSection
