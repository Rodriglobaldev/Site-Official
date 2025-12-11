"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion, AnimatePresence } from "framer-motion"
import { FaDiscord, FaXTwitter } from "react-icons/fa6"
import { FaTelegram } from "react-icons/fa6"
import AppCard from "@/components/app-card"
import HomeContent from "@/components/home-content"

// Fix the Telegram WebApp import and usage
declare global {
  interface Window {
    Telegram: {
      WebApp: any
    }
  }
}

export default function GlobalEcosystemApp() {
  const [tab, setTab] = useState("home")
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Initialize Telegram WebApp
    try {
      // Check if we're running inside Telegram
      if (window.Telegram && window.Telegram.WebApp) {
        const tg = window.Telegram.WebApp
        tg.ready()
        tg.expand()

        // Set theme based on Telegram color scheme
        if (tg.colorScheme === "dark") {
          document.documentElement.classList.add("dark")
        }
      }

      setIsLoaded(true)
    } catch (error) {
      console.error("Telegram WebApp not available:", error)
      // Still mark as loaded for development outside of Telegram
      setIsLoaded(true)
    }
  }, [])

  const apps = [
    {
      name: "Global Maps",
      icon: "/icons/maps.webp",
      description: "Navigate and explore with our advanced mapping solution",
      status: "beta",
    },
    {
      name: "Calculator",
      icon: "/icons/calculator.webp",
      description: "Powerful calculator for all your mathematical needs",
      status: "alpha",
    },
    {
      name: "Call+",
      icon: "/icons/call.webp",
      description: "Voice group communication with privacy and security",
      status: "development",
    },
    {
      name: "Dating",
      icon: "/icons/dating.webp",
      description: "Connect with people based on shared interests",
      status: "concept",
    },
    {
      name: "English Learn",
      icon: "/icons/english.webp",
      description: "Improve your English skills with interactive lessons",
      status: "beta",
    },
    {
      name: "Global Browser",
      icon: "/icons/browser.webp",
      description: "Fast and secure browsing experience",
      status: "development",
    },
    {
      name: "Private Browser",
      icon: "/icons/private.webp",
      description: "Decentralized browser with maximum privacy",
      status: "alpha",
    },
    {
      name: "Van Gogh AI",
      icon: "/icons/vangogh.webp",
      description: "Transform ideas into stunning images using AI",
      status: "beta",
    },
    {
      name: "Global Ticket",
      icon: "/icons/ticket.webp",
      description: "Find the best deals for flights and events",
      status: "concept",
    },
    { name: "Global Swap",
      icon: "/icons/Globalswap.webp",
      Description: "Decentralized exchange (DEX) for swapping $GLOB and other supported tokens", 
      status: "concept",
  ]

  const socialLinks = [
    {
      name: "Discord",
      url: "https://discord.com/invite/HfBfvGu7Pj",
      icon: <FaDiscord className="text-xl" />,
      color: "bg-[#5865F2] hover:bg-[#4752c4]",
      description: "Join our Discord community for discussions and updates",
    },
    {
      name: "Telegram",
      url: "https://t.me/GlobalEcosystemOfficial",
      icon: <FaTelegram className="text-xl" />,
      color: "bg-[#0088cc] hover:bg-[#0077b3]",
      description: "Follow our official Telegram channel",
    },
    {
      name: "Twitter",
      url: "https://x.com/Official_Global",
      icon: <FaXTwitter className="text-xl" />,
      color: "bg-black hover:bg-gray-900 border border-gray-700",
      description: "Stay updated with our latest announcements on X",
    },
  ]

  // Function to handle external links in Telegram WebApp
  const handleExternalLink = (url: string) => {
    try {
      if (window.Telegram && window.Telegram.WebApp) {
        window.Telegram.WebApp.openLink(url)
      } else {
        // Fallback for development outside of Telegram
        window.open(url, "_blank")
      }
    } catch (error) {
      window.open(url, "_blank")
    }
  }

  // Get background color based on active tab
  const getBackgroundColor = () => {
    if (tab === "hub") {
      return "bg-white"
    }
    return "bg-black"
  }

  // Get text color based on active tab
  const getTextColor = () => {
    if (tab === "hub") {
      return "text-black"
    }
    return "text-white"
  }

  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black">
        <div className="animate-pulse text-white text-center">
          <div className="w-16 h-16 border-4 border-t-blue-500 border-r-transparent border-b-blue-500 border-l-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p>Loading Global Ecosystem...</p>
        </div>
      </div>
    )
  }

  return (
    <div
      className={`min-h-screen font-sans p-4 pb-16 transition-colors duration-300 ${getBackgroundColor()} ${getTextColor()}`}
    >
      <Tabs value={tab} onValueChange={setTab} className="w-full">
        <TabsList
          className={`grid grid-cols-3 gap-2 ${tab === "hub" ? "bg-gray-200" : "bg-gray-800"} p-1.5 rounded-xl mb-6`}
        >
          <TabsTrigger
            value="home"
            className={`data-[state=active]:bg-blue-600 data-[state=active]:text-white rounded-lg py-2 ${tab === "hub" ? "text-gray-700" : "text-gray-300"}`}
          >
            Home
          </TabsTrigger>
          <TabsTrigger
            value="hub"
            className={`data-[state=active]:bg-blue-600 data-[state=active]:text-white rounded-lg py-2 ${tab === "hub" ? "text-gray-700" : "text-gray-300"}`}
          >
            Hub
          </TabsTrigger>
          <TabsTrigger
            value="social"
            className={`data-[state=active]:bg-blue-600 data-[state=active]:text-white rounded-lg py-2 ${tab === "hub" ? "text-gray-700" : "text-gray-300"}`}
          >
            Social
          </TabsTrigger>
        </TabsList>

        <AnimatePresence mode="wait">
          {/* Home Tab */}
          {tab === "home" && (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <HomeContent />
            </motion.div>
          )}

          {/* Hub Tab */}
          {tab === "hub" && (
            <motion.div
              key="hub"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid grid-cols-2 gap-3">
                {apps.map((app, index) => (
                  <AppCard key={app.name} app={app} index={index} isLightMode={true} />
                ))}
              </div>
            </motion.div>
          )}

          {/* Social Tab */}
          {tab === "social" && (
            <motion.div
              key="social"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <div className="text-center mb-6">
                <h2 className="text-xl font-bold mb-2">Join Our Community</h2>
                <p className="text-gray-400 text-sm">
                  Connect with us on social media to stay updated on the latest developments
                </p>
              </div>

              <div className="space-y-4">
                {socialLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                  >
                    <Button
                      className={`w-full flex items-center justify-start gap-3 py-6 ${link.color}`}
                      onClick={() => handleExternalLink(link.url)}
                    >
                      {link.icon}
                      <div className="text-left">
                        <div className="font-medium">{link.name}</div>
                        <div className="text-xs opacity-80">{link.description}</div>
                      </div>
                    </Button>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-gray-800">
                <h3 className="text-center text-lg font-medium mb-4">Subscribe to Updates</h3>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <Button className="bg-blue-600 hover:bg-blue-500">Subscribe</Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Tabs>

      {/* Main Menu Button - Simulates Telegram's main button */}
      {tab === "hub" && (
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="fixed bottom-4 left-0 right-0 flex justify-center"
        >
          <Button
            className="bg-blue-600 hover:bg-blue-500 px-8 py-3 rounded-full shadow-lg text-white"
            onClick={() => setTab("home")}
          >
            Explore Global Ecosystem
          </Button>
        </motion.div>
      )}
    </div>
  )
}
