
import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  const customCss = `
    .animated-gradient {
      background-size: 200% 200%;
      animation: move-gradient 8s ease infinite;
    }

    @keyframes move-gradient {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
  `;

  return (
    <div 
      className="min-h-screen flex items-center justify-center overflow-x-hidden"
      style={{
        backgroundImage: `url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/a982db62a_background.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <style>{customCss}</style>
      {/* Main content */}
      <div className="relative z-10 max-w-4xl w-full mx-auto px-4 sm:px-6 text-center py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm border border-slate-200/50 rounded-full mb-8 shadow-sm">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-slate-700">Made by TTP studios</span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight text-slate-900 mb-6 leading-[0.9]">
            Introducing{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent font-medium">
              Light AI
            </span>
          </h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg sm:text-xl md:text-2xl font-light text-slate-600 mb-12 sm:mb-20 max-w-2xl mx-auto leading-relaxed"
          >
            Your new companion
          </motion.p>
        </motion.div>

        {/* Try Light Button Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex justify-center gap-4"
        >
          <Button
            asChild
            size="lg"
            className="bg-black hover:bg-white hover:text-black text-white border-2 border-black px-6 py-3 text-base sm:px-8 sm:py-4 sm:text-lg font-medium rounded-xl transition-all duration-500 ease-in-out min-w-[140px] sm:min-w-[160px] transform hover:scale-105"
          >
            <a href="https://app--light-2eee8195.base44.app/" target="_blank" rel="noopener noreferrer">
              Try Light
            </a>
          </Button>
        </motion.div>

        {/* New Blurred Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="mt-[50vh] p-8 md:p-12 rounded-2xl shadow-xl bg-teal-500"
        >
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-4">
              Introducing Light 1
            </h2>
            <p className="text-lg md:text-xl font-light text-white">
              Smarter, Stronger and Free!
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
