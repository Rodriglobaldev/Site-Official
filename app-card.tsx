"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"

type AppStatus = "alpha" | "beta" | "development" | "concept"

interface AppProps {
  app: {
    name: string
    icon: string
    description: string
    status: AppStatus
  }
  index: number
  isLightMode?: boolean
}

export default function AppCard({ app, index, isLightMode = false }: AppProps) {
  const [isOpen, setIsOpen] = useState(false)

  const getStatusColor = (status: AppStatus) => {
    switch (status) {
   
   
    
     
      
    }
  }

  const getStatusText = (status: AppStatus) => {
    switch (status) {
    
     
     
     
    
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.3 }}
    >
      <Card className={isLightMode ? "bg-gray-100 border-gray-200" : "bg-gray-800 border-gray-700"}>
        <CardContent className="p-3 flex flex-col items-center">
          <div className="relative w-full mb-2">
            <div className="flex justify-between items-start">
              <img
                src={app.icon || "/placeholder.svg?height=48&width=48"}
                alt={app.name}
                className="w-12 h-12 rounded-lg"
              />
              <Badge variant="outline" className={`text-[10px] ${getStatusColor(app.status)} text-white px-2 py-0.5`}>
                {getStatusText(app.status)}
              </Badge>
            </div>
          </div>

          <h3 className={`font-medium text-sm mb-1 ${isLightMode ? "text-gray-800" : "text-white"}`}>{app.name}</h3>
          <p className={`text-xs mb-3 line-clamp-2 text-center ${isLightMode ? "text-gray-600" : "text-gray-400"}`}>
            {app.description}
          </p>

          <Button
            variant="outline"
            size="sm"
            className={`w-full text-xs ${
              isLightMode ? "border-gray-300 bg-white text-gray-800" : "border-gray-700 bg-gray-900 text-white"
            }`}
            disabled
          >
            Coming Soon
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  )
}
