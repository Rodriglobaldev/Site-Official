"use client"

import { motion } from "framer-motion"

export default function HomeContent() {
  return (
    <div className="flex flex-col items-center text-center space-y-8 py-4">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <img src="/images/global-logo.png" alt="Global Ecosystem Logo" className="w-full h-auto" />
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="px-4"
      >
        <p className="text-sm text-gray-300 leading-relaxed max-w-md mx-auto">
          The Global project aims to create an integrated ecosystem of apps and decentralized applications (DApps) on
          the Telegram platform, offering an enriched and interconnected user experience. Our goal is to transform
          Telegram into a hub of innovation and opportunities in the blockchain space, integrating solutions that cover
          various community needs, from finance and utility tools to social networks and decentralized services.
        </p>
      </motion.div>
    </div>
  )
}
