import React, { Dispatch, SetStateAction } from 'react'

import { motion } from 'framer-motion'
import AnimatedSection from './AnimationWrapper'

type FeaturesGridType = {
    hoveredCard: number | null,
    setHoveredCard : Dispatch<SetStateAction< number | null >>
}
const FeaturesGrid = ({hoveredCard,setHoveredCard,}: FeaturesGridType) => {

    const features = [
        {
            title: "Smart Summarization",
            description: "Upload any document and get instant, intelligent summaries. Our AI understands context and extracts key insights automatically.",
            color: "from-blue-500 to-cyan-500"
        },
        {
            title: "Interactive Chat",
            description: "Ask questions about your documents in natural language. Get precise answers with references to source material.",
            color: "from-purple-500 to-pink-500"
        },
        {
            title: "Multi-Format Support",
            description: "Works with PDFs, Word docs, text files, and more. DocFeel handles all your document formats seamlessly.",
            color: "from-orange-500 to-red-500"
        },
        {
            title: "Instant Analysis",
            description: "Lightning-fast processing powered by advanced AI. Get comprehensive insights in seconds, not hours.",
            color: "from-yellow-500 to-orange-500"
        },
        {
            title: "Regenerate & Refine",
            description: "Not satisfied with the summary? Regenerate with different focus points or ask for more specific details.",
            color: "from-green-500 to-emerald-500"
        },
        {
            title: "Secure & Private",
            description: "Your documents are encrypted and private. We never share or train models on your confidential data.",
            color: "from-indigo-500 to-purple-500"
        }
    ]

    return (
        <section id="features" className="py-40 px-6 lg:px-12">
            <div className="max-w-[1400px] mx-auto">
                <AnimatedSection className="mb-24">
                    <h2 className="text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
                        Powerful features for
                        <br />
                        <span className="italic font-light bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            smart analysis
                        </span>
                    </h2>
                    <p className="text-xl text-neutral-600 max-w-2xl">
                        Everything you need to understand and interact with your documents
                    </p>
                </AnimatedSection>

                <div className="grid lg:grid-cols-3 gap-8">
                    {features.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            onHoverStart={() => setHoveredCard(idx)}
                            onHoverEnd={() => setHoveredCard(null)}
                            whileHover={{
                                scale: 1.03,
                                y: -10,
                                boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                            }}
                            className="relative overflow-hidden bg-white border-2 border-black/10 p-10 rounded-3xl cursor-pointer group"
                        >
                            {/* Gradient Background on Hover */}
                            <motion.div
                                className={`absolute inset-0 bg-linear-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                            />

                            <motion.div
                                className="text-6xl mb-6"
                                animate={hoveredCard === idx ? {
                                    rotate: [0, -10, 10, -10, 0],
                                    scale: [1, 1.2, 1]
                                } : {}}
                                transition={{ duration: 0.5 }}
                            >
                            </motion.div>
                            <h3 className="text-2xl font-bold mb-4 relative z-10">{feature.title}</h3>
                            <p className="text-neutral-600 leading-relaxed relative z-10">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default FeaturesGrid
