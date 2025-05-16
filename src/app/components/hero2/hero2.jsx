'use client';
import React, { useState, useEffect, useRef } from 'react';

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
        transform: `translate(${(col - 1) * 800}px, ${row * 200}px) rotate(${(index % 2 === 0 ? -1 : 1) * 20}deg) scale(0.8)`,
        opacity: 0,
        zIndex: 0,
        transition: 'all 0.9s ease-in'
      };
    } else {
      const offset = (index - activeIndex + cards.length) % cards.length;
      return {
        transform: `translateY(${offset * -30}px) scale(${1 - offset * 0.06})`,
        zIndex: cards.length - offset,
        opacity: offset > 2 ? 0 : 1,
        transition: 'all 0.9s ease-out'
      };
    }
  };

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-screen flex items-center justify-center text-white font-montserrat overflow-hidden px-4 sm:px-6 md:px-8 lg:px-10 2xl:px-14 py-12"
    >
      <div className="relative z-20 w-full flex flex-col lg:flex-row items-center justify-between gap-8 max-w-[1400px] mx-auto">
        {/* Mobile Cards */}
        <div className="w-full lg:hidden mt-10 flex items-center justify-center">
          <div className="relative h-[330px] w-full max-w-md">
            {cards.map((card, index) => (
              <div
                key={card.title}
                className="absolute w-full rounded-2xl shadow-xl overflow-hidden cursor-pointer transition-all duration-700"
                style={{
                  ...getCardStyle(index),
                  backgroundImage: card.bgGradient,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div className="h-52 overflow-hidden relative">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover scale-110 animate-zoom"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold text-white mb-1">{card.title}</h3>
                  <p className="text-white text-sm">{card.content}</p>
                </div>
              </div>
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
          <div className="pointer-events-auto flex flex-col sm:flex-row gap-4 pt-5 justify-center lg:justify-start">
            <button className="relative overflow-hidden rounded-3xl bg-[#c93c3c] text-white px-6 py-3 font-semibold group transition-transform duration-300 hover:scale-105 shadow-lg">
              <span className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 z-0"></span>
              <span className="relative text-white group-hover:text-[#c93c3c] transition-colors duration-200 z-10">
                Explore Services
              </span>
            </button>

            <button
              className="relative overflow-hidden rounded-3xl bg-white text-neutral-900 px-6 py-3 font-semibold group transition-transform duration-300 hover:scale-105 shadow-lg"
              onClick={() => {
                const form = document.getElementById('contact-form');
                if (form) form.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <span className="absolute inset-0 bg-[#C93C3C] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 z-0"></span>
              <span className="relative text-[#C93C3C] group-hover:text-white transition-colors duration-200 z-10">
                Request Free Demo
              </span>
            </button>
          </div>
        </div>

        {/* Desktop Cards */}
        <div className="hidden lg:flex lg:w-1/2 relative h-[800px] w-full max-w-lg items-center justify-center">
          {cards.map((card, index) => (
            <div
              key={card.title}
              className="absolute w-full rounded-2xl shadow-xl overflow-hidden cursor-pointer transition-all duration-700"
              style={{
                ...getCardStyle(index),
                backgroundImage: card.bgGradient,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="h-60 overflow-hidden relative">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover scale-110 animate-zoom"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">{card.title}</h3>
                <p className="text-white text-base">{card.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero2;
