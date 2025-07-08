"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Check } from "lucide-react"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="relative pt-20 pb-16 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid min-h-[80vh] items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* ─────────────────────────── Left column  */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="mb-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl xl:text-7xl"
            >
              Build Your Own AI Email Assistant
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-gray-600 sm:text-xl lg:mx-0 lg:text-2xl"
            >
              Train an assistant on your inbox. Let it draft, reply, and organize emails for you — 24/7.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="mb-8 flex flex-col items-center gap-6 sm:flex-row lg:items-start"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Button
                  asChild
                  size="lg"
                  className="rounded-xl bg-black px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-gray-800 hover:shadow-xl"
                >
                  <Link href="/signup">
                    Build Your Assistant
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </motion.div>

              <div className="flex items-center text-sm font-medium text-gray-500">
                <Check className="mr-2 h-4 w-4 text-green-500" />
                No credit card required
              </div>
            </motion.div>
          </motion.div>

          {/* ─────────────────────────── Right column  */}
          <motion.div
            initial={{ opacity: 0, x: 60, rotate: -2, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, rotate: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="relative flex justify-center lg:justify-end"
          >
            {/* colourful blur behind video */}
            <div className="absolute inset-0 -z-10 scale-105 rotate-3 rounded-3xl bg-gradient-to-br from-purple-200 via-pink-200 to-orange-200 blur-sm opacity-60" />

            {/* video card */}
            <motion.div
              whileHover={{ scale: 1.02, rotate: 1 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-lg rounded-2xl border border-gray-100 bg-white p-4 shadow-2xl"
            >
              {/* faux-browser header */}
              <div className="mb-4 flex items-center justify-between rounded-t-xl bg-gray-50 p-3">
                <div className="flex space-x-2">
                  <div className="h-3 w-3 rounded-full bg-red-400" />
                  <div className="h-3 w-3 rounded-full bg-yellow-400" />
                  <div className="h-3 w-3 rounded-full bg-green-400" />
                </div>
                <div className="w-6" />
              </div>

              {/* hero video */}
              <div className="relative overflow-hidden rounded-xl">
                <video
                  className="aspect-[0.939] w-full rounded-3xl"
                  data-src="https://backend.chatbase.co/storage/v1/object/public/chatbase/landing/hero/hero.webm"
                  preload="metadata"
                  poster="https://backend.chatbase.co/storage/v1/object/public/chatbase/landing/hero/hero-thumbnail.png"
                  playsInline
                  muted
                  loop
                  autoPlay
                  style={{
                    objectFit: "contain",
                    display: "block",
                    width: "100%",
                    cursor: "pointer",
                  }}
                  src="https://backend.chatbase.co/storage/v1/object/public/chatbase/landing/hero/hero.webm"
                >
                  {/* fallback text */}
                  Your browser does not support the video tag. Please try viewing this page in a modern browser.
                </video>
              </div>

              {/* caption */}
              <p className="mt-4 text-center text-sm font-medium text-gray-600">
                Watch EmailAssist connect to Gmail and generate smart replies
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
