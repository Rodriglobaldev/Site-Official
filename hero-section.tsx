"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function HeroSection() {
  return (
    <div className="flex flex-col items-center text-center space-y-8 py-12">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <img
          src="/placeholder.svg?height=200&width=200"
          alt="Global Ecosystem"
          className="mx-auto w-40 h-40 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 p-1"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="space-y-4"
      >
        <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 animate-gradient">
          Global Ecosystem
        </h1>

        <p className="text-lg max-w-2xl mx-auto text-gray-300 leading-relaxed">
          The Global project aims to create an integrated ecosystem of apps and decentralized applications (DApps) on
          the Telegram platform, offering an enriched and interconnected user experience. Our goal is to transform
          Telegram into a hub of innovation and opportunities in the blockchain space.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-3xl mt-8"
      >
        {[
          { title: "Apps", count: "8+", description: "Innovative applications" },
          { title: "Users", count: "10K+", description: "Growing community" },
          { title: "Platform", count: "1", description: "Unified ecosystem" },
        ].map((stat, index) => (
          <div key={index} className="bg-gray-900/40 backdrop-blur-sm rounded-lg p-6 border border-gray-800/30">
            <h3 className="text-lg font-medium text-gray-300">{stat.title}</h3>
            <p className="text-3xl font-bold">{stat.count}</p>
            <p className="text-sm text-gray-400">{stat.description}</p>
          </div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="flex flex-col sm:flex-row gap-4 mt-8"
      >
        <Button
          size="lg"
          className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600"
        >
          Explore Apps
        </Button>
        <Button size="lg" variant="outline">
          Learn More
        </Button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="mt-16 w-full"
      >
        <h2 className="text-2xl font-bold mb-6">Our Vision</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Integration",
              description: "Creating a seamless ecosystem of interconnected applications",
              icon: "🔄",
            },
            {
              title: "Innovation",
              description: "Pushing the boundaries of what's possible on the Telegram platform",
              icon: "💡",
            },
            {
              title: "Community",
              description: "Building a strong, engaged community of users and developers",
              icon: "👥",
            },
          ].map((pillar, index) => (
            <div
              key={index}
              className="bg-gray-900/30 backdrop-blur-sm border border-gray-800/30 rounded-lg p-6 hover:border-gray-700 transition-all"
            >
              <div className="text-3xl mb-4">{pillar.icon}</div>
              <h3 className="text-xl font-medium mb-2">{pillar.title}</h3>
              <p className="text-gray-400">{pillar.description}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
