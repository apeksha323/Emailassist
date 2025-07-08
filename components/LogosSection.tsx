"use client"

import { motion } from "framer-motion"

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
}

export default function LogosSection() {
  const companies = ["Microsoft", "Google", "Slack", "Notion", "Zoom", "Salesforce", "Stripe", "Shopify"]

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-16 bg-white border-b border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-gray-600 mb-12 text-lg font-medium"
        >
          Trusted by 10,000+ professionals and teams
        </motion.p>
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center items-center gap-8 lg:gap-12 opacity-60"
        >
          {companies.map((company, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ scale: 1.1, opacity: 1 }}
              className="transition-all duration-300"
            >
              <div className="w-32 h-12 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors">
                <span className="text-gray-600 font-semibold text-sm">{company}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}
