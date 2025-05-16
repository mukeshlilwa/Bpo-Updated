'use client';

import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const reasons = [
  {
    title: "Proven Expertise",
    description: "With years of experience, our team consistently delivers high-quality results tailored to your unique business goals.",
  },
  {
    title: "Cost-Efficient Solutions",
    description: "We help you reduce operational costs while enhancing customer satisfaction through smarter outsourcing.",
  },
  {
    title: "24/7 Multilingual Support",
    description: "Our team is available around the clock, supporting your clients in multiple languages and time zones.",
  },
  {
    title: "Scalable & Flexible Services",
    description: "From startups to enterprises, our services adapt to your evolving needs and growth.",
  },
  {
    title: "Tech-Enabled Operations",
    description: "We use the latest tools and CRMs to ensure seamless workflow integration and real-time insights.",
  },
  {
    title: "Client-Centric Approach",
    description: "We personalize every solution to align with your goals—your success is our mission.",
  },
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { 
      type: "spring", 
      stiffness: 100, 
      damping: 14,
      duration: 0.5
    },
  },
};

export default function WhyUs() {
  return (
    <section id="why-us" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#0F172A] via-[#1E293B] to-[#0F172A]">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center text-[#C93C3C] mb-12"
        >
          Why Choose Us<span className="text-white">?</span>
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12"
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ 
                y: -5,
                boxShadow: "0 10px 25px -5px rgba(201, 60, 60, 0.2)"
              }}
              className="bg-[#1E293B]/80 p-8 rounded-xl backdrop-blur-sm border border-gray-700/50 hover:border-[#C93C3C]/30 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="p-2 bg-[#1E293B] rounded-full border border-[#C93C3C]/30">
                  <CheckCircle className="w-6 h-6 text-[#C93C3C]" />
                </div>
                <h3 className="text-xl font-semibold text-white">{reason.title}</h3>
              </div>
              <p className="text-gray-300">{reason.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}