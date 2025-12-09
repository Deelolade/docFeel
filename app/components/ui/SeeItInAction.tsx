import React from 'react'
import AnimatedSection from './AnimationWrapper'
import { motion } from 'framer-motion'

const SeeItInAction = () => {
  return (
    <section className="py-40 px-6 lg:px-12 bg-neutral-50">
        <div className="max-w-[1400px] mx-auto">
          <AnimatedSection className="text-center mb-20">
            <h2 className="text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
              See it in
              <br />
              <span className="italic font-light">action</span>
            </h2>
            <p className="text-xl text-neutral-600">Upload a document and watch the magic happen</p>
          </AnimatedSection>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="bg-white border-2 border-black/10 rounded-3xl p-12 shadow-2xl"
              whileHover={{ boxShadow: "0 30px 60px rgba(0,0,0,0.15)" }}
            >
              <motion.div
                className="border-2 border-dashed border-neutral-300 rounded-2xl p-32 text-center group cursor-pointer"
                whileHover={{
                  borderColor: "#000",
                  backgroundColor: "#fafafa"
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="text-8xl mb-6"
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >

                </motion.div>
                <div className="text-2xl font-bold mb-2">Drop your document here</div>
                <div className="text-neutral-600 mb-6">or click to browse</div>
                <div className="text-sm text-neutral-500">Supports PDF, DOC, DOCX, TXT and more</div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
  )
}

export default SeeItInAction
