'use client'

import { Button } from "./ui/button"
import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function ImageTabs() {
  
   const [ activeTap, setActiveTap ] = useState("organize")

    return (
    <section className="border-t bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-6xl">
              {/* tables*/}
                <div 
                  className="flex gap-2 justify-center mb-8 "
                >
                  <Button 
                    className={`rounded-lg px-6 text-sm font-medium transition colors 
                    ${activeTap === 'organize' ? 
                      'bg-primary text-white' : 
                      'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                    onClick={() => setActiveTap('organize')}
                  >
                  
                    Organize Applications
                  </Button>
                  <Button 
                    className={`rounded-lg px-6 text-sm font-medium transition colors 
                    ${activeTap === 'hired' ? 
                      'bg-primary text-white' : 
                      'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                    onClick={() => setActiveTap('hired')}
                  >
                    Get Hired
                  </Button>
                  <Button 
                    className={`rounded-lg px-6 text-sm font-medium transition colors 
                    ${activeTap === 'board' ? 
                      'bg-primary text-white' : 
                      'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                    onClick={() => setActiveTap('board')}
                  >
                    Manage Boards
                  </Button>
                </div>
              
              <AnimatePresence mode="wait" initial={false}>
                <motion.div 
                  className="relative mx-auto max-w-5xl overflow-hidden rounded-lg border border-gray-200 shadow-xl"
                  key={activeTap}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                >
                  { activeTap === "organize" && <Image 
                    src='/hero-images/hero1.png' 
                    alt="Organize Applications"
                    width={1200}
                    height={800}
                  />}
                  { activeTap === "hired" && <Image 
                    src='/hero-images/hero2.png' 
                    alt="Get Hired"
                    width={1200}
                    height={800}
                  />}
                  { activeTap === "board" && <Image 
                    src='/hero-images/hero3.png' 
                    alt="Manage Boards"
                    width={1200}
                    height={800}
                  />}
                </motion.div>
              </AnimatePresence>
            </div>           
          </div>

        </section>
  )
}
