'use client';
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';


const Hero2 = () => {
  const containerRef = useRef(null);
  const [scrollDirection, setScrollDirection] = useState('up');
  const [activeIndex, setActiveIndex] = useState(0);
  const prevScrollY = useRef(0);

  const cards = [
    {
      title: "BPO Services",
      content: "Comprehensive business process outsourcing solutions",
      image: "https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      bgGradient: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)"
    },
    {
      title: "CRM Solutions",
      content: "Advanced customer relationship management systems",
      image: "https://images.unsplash.com/photo-1614332287897-cdc485fa562d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      bgGradient: "linear-gradient(135deg, #1e1e2f 0%, #2d2d44 100%)"
    },
    {
      title: "Automation",
      content: "Streamline operations with intelligent automation",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      bgGradient: "linear-gradient(135deg, #2e2e38 0%, #4b5563 100%)"
    },
    {
      title: "Cloud Solutions",
      content: "Secure and scalable cloud infrastructure services",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80",
      bgGradient: "linear-gradient(135deg, #2a2e35 0%, #384148 100%)"
    },
    {
      title: "AI Services",
      content: "Advanced artificial intelligence implementations",
      image: "https://images.unsplash.com/photo-1534723328310-e82dad3ee43f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80",
      bgGradient: "linear-gradient(135deg, #3b2f3b 0%, #4e4454 100%)"
    },
    {
      title: "Data Analytics",
      content: "Transform raw data into actionable insights",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80",
      bgGradient: "linear-gradient(135deg, #1f2a2e 0%, #2d3e43 100%)"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollDirection(currentScrollY > prevScrollY.current ? 'down' : 'up');
      prevScrollY.current = currentScrollY;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (scrollDirection === 'up') {
      const interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % cards.length);
      }, 2500);
      return () => clearInterval(interval);
    }
  }, [scrollDirection]);

  const getCardStyle = (index) => {
    if (scrollDirection === 'down') {
      const row = Math.floor(index / 3);
      const col = index % 3;
      return {
        x: (col - 1) * 800,
        y: row * 200,
        rotate: (index % 2 === 0 ? -1 : 1) * 20,
        scale: 0.8,
        opacity: 0,
        transition: { duration: 0.9, ease: 'easeIn' }
      };
    } else {
      const offset = (index - activeIndex + cards.length) % cards.length;
      return {
        x: 0,
        y: offset * -30,
        scale: 1 - offset * 0.04,
        zIndex: cards.length - offset,
        opacity: offset > 3 ? 0 : 1,
        transition: { duration: 0.9, ease: 'easeOut' }
      };
    }
  };

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-screen lg:h-screen flex items-center justify-center text-white font-montserrat overflow-hidden "
    >  
      <motion.div className="relative z-20 w-full px-6 lg:px-10 py-12 flex flex-col lg:flex-row items-center justify-between gap-8">
        
        {/* Mobile Cards */}
        <div className="w-full lg:hidden mt-10 flex items-center justify-center">
          <div className="relative h-[330px] w-full max-w-md">
            {cards.map((card, index) => (
              <motion.div
                key={card.title}
                animate={getCardStyle(index)}
                className="absolute w-full rounded-2xl shadow-xl overflow-hidden cursor-pointer"
                style={{
                  originX: 0,
                  originY: 4,
                  backgroundImage: card.bgGradient,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div className="h-52 overflow-hidden relative">
                  <motion.img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover"
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.8 }}
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold text-white mb-1">{card.title}</h3>
                  <p className="text-white text-sm">{card.content}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Hero Text */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-3xl lg:text-6xl font-bold leading-tight gradient-text dm-serif-display-regular">
            Transform Your Business with Our Expert BPO Services
          </h1>
          <p className="text-lg text-gray-200 font-medium mt-5">
            Comprehensive digital solutions for modern business challenges.
          </p>
          <div className="pointer-events-auto flex flex-col sm:flex-row gap-4 pt-5 justify-center lg:justify-start ">
            <motion.button
              className=" relative overflow-hidden rounded-3xl bg-[#c93c3c] text-white shadow-[10px_10px_20px_rgba(0,0,0,0.05)] cursor-pointer group px-6 py-3 font-semibold"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <span className="absolute inset-0 bg-white transform -translate-x-full transition-transform duration-300 group-hover:translate-x-0 z-0"></span>
              <div className="relative flex items-center font-semibold">
                <span className="text-white group-hover:text-[#c93c3c] transition-colors duration-200">
                  Explore Services
                </span>
              </div>
            </motion.button>

            <motion.button
              className="pointer-events-auto relative overflow-hidden rounded-3xl bg-white text-neutral-900 shadow-[10px_10px_20px_rgba(0,0,0,0.05)] cursor-pointer group px-6 py-3 font-semibold"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              onClick={() => {
                const form = document.getElementById('contact-form');
                if (form) {
                  form.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              <span className="absolute inset-0 bg-[#C93C3C] transform -translate-x-full transition-transform duration-300 group-hover:translate-x-0 z-0"></span>
              <div className="relative flex items-center font-semibold">
                <span className="text-[#C93C3C] group-hover:text-white transition-colors duration-200">
                  Request Free Demo
                </span>
              </div>
            </motion.button>
          </div>
        </div>

        {/* Desktop Cards */}
        <div className="hidden lg:flex lg:w-1/2 relative h-[800px] w-full max-w-lg items-center justify-center">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              animate={getCardStyle(index)}
              className="absolute w-full rounded-2xl shadow-xl overflow-hidden cursor-pointer"
              style={{
                originX: 0,
                originY: 4,
                backgroundImage: card.bgGradient,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="h-60 overflow-hidden relative">
                <motion.img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover"
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.8 }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {card.title}
                </h3>
                <p className="text-white text-base">{card.content}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Hero2;
