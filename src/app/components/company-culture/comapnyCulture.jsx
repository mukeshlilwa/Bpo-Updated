'use client';

import { motion, useAnimation, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export default function CompanyTimeline() {
  const containerRef = useRef(null);
  const [timelineHeight, setTimelineHeight] = useState(0);
  const timelineContainerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const timelineColor = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["#7F1D1D", "#FECACA", "#1E3A8A"]
  );

  const [ref1, inView1] = useInView({ threshold: 0.3 });
  const [ref2, inView2] = useInView({ threshold: 0.3 });
  const [ref3, inView3] = useInView({ threshold: 0.3 });
  const [ref4, inView4] = useInView({ threshold: 0.3 });

  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();
  const controls4 = useAnimation();

  useEffect(() => {
    if (inView1) controls1.start("visible");
    else controls1.start("hidden");
  }, [controls1, inView1]);

  useEffect(() => {
    if (inView2) controls2.start("visible");
    else controls2.start("hidden");
  }, [controls2, inView2]);

  useEffect(() => {
    if (inView3) controls3.start("visible");
    else controls3.start("hidden");
  }, [controls3, inView3]);

  useEffect(() => {
    if (inView4) controls4.start("visible");
    else controls4.start("hidden");
  }, [controls4, inView4]);

  useEffect(() => {
    const calculateHeight = () => {
      if (timelineContainerRef.current) {
        const firstSection = document.querySelector('#section-1');
        const lastSection = document.querySelector('#section-4');

        if (firstSection && lastSection) {
          const firstSectionTop = firstSection.getBoundingClientRect().top + window.scrollY;
          const lastSectionBottom = lastSection.getBoundingClientRect().bottom + window.scrollY;
          const calculatedHeight = lastSectionBottom - firstSectionTop;
          setTimelineHeight(calculatedHeight);
        }
      }
    };

    calculateHeight();
    window.addEventListener('resize', calculateHeight);

    return () => window.removeEventListener('resize', calculateHeight);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren"
      }
    }
  };

  const leftItemVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.5
      }
    }
  };

  const rightItemVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.5
      }
    }
  };

  const dotVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 10,
        duration: 0.5
      }
    }
  };

  return (
    <div ref={containerRef} className="w-full py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative font-montserrat overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
            Life at Our Company
          </h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-300 max-w-3xl mx-auto">
            Discover what makes our workplace unique and vibrant
          </p>
        </motion.div>

        {/* Timeline container */}
        <div ref={timelineContainerRef} className="relative">
          {/* Dynamic Vertical Timeline Line */}
          <motion.div 
            className="absolute left-1/2 transform -translate-x-1/2 w-1 hidden lg:block"
            style={{
              height: `${timelineHeight}px`,
              top: 0,
            }}
          >
            <motion.div 
              className="w-full h-full"
              style={{
                backgroundColor: timelineColor,
                scaleY: scrollYProgress,
                transformOrigin: 'top',
              }}
            />
          </motion.div>

          {/* Our Culture Section */}
          <div id="section-1" ref={ref1} className="relative mb-16 sm:mb-20 lg:mb-28">
            {/* Timeline Dot */}
            <motion.div
              initial="hidden"
              animate={controls1}
              variants={dotVariants}
              className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2 h-5 w-5 sm:h-6 sm:w-6 rounded-full border-4 border-[#0F172A] z-10"
              style={{ backgroundColor: timelineColor }}
            ></motion.div>

            <motion.div
              initial="hidden"
              animate={controls1}
              variants={containerVariants}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center"
            >
              <motion.div variants={leftItemVariants} className="lg:pr-10 xl:pr-20">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#C93C3C]">Our Culture</h3>
                <p className="text-base sm:text-lg text-gray-300 mt-3 sm:mt-4">
                  We foster a culture of innovation, collaboration, and continuous learning. 
                  Our open-door policy and flat hierarchy encourage everyone to share ideas freely.
                </p>
                <ul className="mt-4 sm:mt-6 space-y-2 sm:space-y-3">
                  <li className="flex items-start text-gray-300 text-sm sm:text-base">
                    <span className="text-[#C93C3C] mr-2">✓</span>
                    <span>Weekly knowledge sharing sessions</span>
                  </li>
                  <li className="flex items-start text-gray-300 text-sm sm:text-base">
                    <span className="text-[#C93C3C] mr-2">✓</span>
                    <span>Flexible work arrangements</span>
                  </li>
                  <li className="flex items-start text-gray-300 text-sm sm:text-base">
                    <span className="text-[#C93C3C] mr-2">✓</span>
                    <span>Monthly team-building activities</span>
                  </li>
                </ul>
              </motion.div>
              <motion.div variants={rightItemVariants} className="lg:pl-10 xl:pl-20 mt-8 lg:mt-0">
                <div className="relative h-64 sm:h-72 md:h-80 lg:h-96 rounded-lg sm:rounded-xl overflow-hidden border border-white/10">
                  <Image
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                    alt="Diverse team collaborating in modern office"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Our Campus Section */}
          <div id="section-2" ref={ref2} className="relative mb-16 sm:mb-20 lg:mb-28">
            {/* Timeline Dot */}
            <motion.div
              initial="hidden"
              animate={controls2}
              variants={dotVariants}
              className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2 h-5 w-5 sm:h-6 sm:w-6 rounded-full border-4 border-[#0F172A] z-10"
              style={{ backgroundColor: timelineColor }}
            ></motion.div>

            <motion.div
              initial="hidden"
              animate={controls2}
              variants={containerVariants}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center"
            >
              <motion.div variants={leftItemVariants} className="lg:order-2 lg:pl-10 xl:pl-20">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#C93C3C]">Our Campus</h3>
                <p className="text-base sm:text-lg text-gray-300 mt-3 sm:mt-4">
                  Our state-of-the-art campus is designed to inspire creativity and productivity, 
                  with modern workspaces, relaxation zones, and cutting-edge facilities.
                </p>
                <ul className="mt-4 sm:mt-6 space-y-2 sm:space-y-3">
                  <li className="flex items-start text-gray-300 text-sm sm:text-base">
                    <span className="text-[#C93C3C] mr-2">✓</span>
                    <span>Ergonomic workstations</span>
                  </li>
                  <li className="flex items-start text-gray-300 text-sm sm:text-base">
                    <span className="text-[#C93C3C] mr-2">✓</span>
                    <span>On-site gym and wellness center</span>
                  </li>
                  <li className="flex items-start text-gray-300 text-sm sm:text-base">
                    <span className="text-[#C93C3C] mr-2">✓</span>
                    <span>Cafeteria with healthy meal options</span>
                  </li>
                </ul>
              </motion.div>
              <motion.div variants={rightItemVariants} className="lg:order-1 lg:pr-10 xl:pr-20 mt-8 lg:mt-0">
                <div className="relative h-64 sm:h-72 md:h-80 lg:h-96 rounded-lg sm:rounded-xl overflow-hidden border border-white/10">
                  <Image
                    src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80"
                    alt="Modern office space with glass walls and greenery"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Sports & Recreation Section */}
          <div id="section-3" ref={ref3} className="relative mb-16 sm:mb-20 lg:mb-28">
            {/* Timeline Dot */}
            <motion.div
              initial="hidden"
              animate={controls3}
              variants={dotVariants}
              className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2 h-5 w-5 sm:h-6 sm:w-6 rounded-full border-4 border-[#0F172A] z-10"
              style={{ backgroundColor: timelineColor }}
            ></motion.div>

            <motion.div
              initial="hidden"
              animate={controls3}
              variants={containerVariants}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center"
            >
              <motion.div variants={leftItemVariants} className="lg:pr-10 xl:pr-20">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#C93C3C]">Sports & Recreation</h3>
                <p className="text-base sm:text-lg text-gray-300 mt-3 sm:mt-4">
                  We believe in work-life balance and encourage employees to stay active 
                  through various sports and recreational activities.
                </p>
                <ul className="mt-4 sm:mt-6 space-y-2 sm:space-y-3">
                  <li className="flex items-start text-gray-300 text-sm sm:text-base">
                    <span className="text-[#C93C3C] mr-2">✓</span>
                    <span>Annual sports tournaments</span>
                  </li>
                  <li className="flex items-start text-gray-300 text-sm sm:text-base">
                    <span className="text-[#C93C3C] mr-2">✓</span>
                    <span>Yoga and meditation classes</span>
                  </li>
                  <li className="flex items-start text-gray-300 text-sm sm:text-base">
                    <span className="text-[#C93C3C] mr-2">✓</span>
                    <span>Company-sponsored fitness challenges</span>
                  </li>
                </ul>
              </motion.div>
              <motion.div variants={rightItemVariants} className="lg:pl-10 xl:pl-20 mt-8 lg:mt-0">
                <div className="relative h-64 sm:h-72 md:h-80 lg:h-96 rounded-lg sm:rounded-xl overflow-hidden border border-white/10">
                  <Image
                    src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                    alt="Group of colleagues playing table tennis in office"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Events & Functions Section */}
          <div id="section-4" ref={ref4} className="relative">
            {/* Timeline Dot */}
            <motion.div
              initial="hidden"
              animate={controls4}
              variants={dotVariants}
              className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2 h-5 w-5 sm:h-6 sm:w-6 rounded-full border-4 border-[#0F172A] z-10"
              style={{ backgroundColor: timelineColor }}
            ></motion.div>

            <motion.div
              initial="hidden"
              animate={controls4}
              variants={containerVariants}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center"
            >
              <motion.div variants={leftItemVariants} className="lg:order-2 lg:pl-10 xl:pl-20">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#C93C3C]">Events & Functions</h3>
                <p className="text-base sm:text-lg text-gray-300 mt-3 sm:mt-4">
                  We celebrate milestones, festivals, and achievements together as one big family, 
                  creating memories that last a lifetime.
                </p>
                <ul className="mt-4 sm:mt-6 space-y-2 sm:space-y-3">
                  <li className="flex items-start text-gray-300 text-sm sm:text-base">
                    <span className="text-[#C93C3C] mr-2">✓</span>
                    <span>Annual award ceremonies</span>
                  </li>
                  <li className="flex items-start text-gray-300 text-sm sm:text-base">
                    <span className="text-[#C93C3C] mr-2">✓</span>
                    <span>Cultural festival celebrations</span>
                  </li>
                  <li className="flex items-start text-gray-300 text-sm sm:text-base">
                    <span className="text-[#C93C3C] mr-2">✓</span>
                    <span>Quarterly team outings</span>
                  </li>
                </ul>
              </motion.div>
              <motion.div variants={rightItemVariants} className="lg:order-1 lg:pr-10 xl:pr-20 mt-8 lg:mt-0">
                <div className="relative h-64 sm:h-72 md:h-80 lg:h-96 rounded-lg sm:rounded-xl overflow-hidden border border-white/10">
                  <Image
                    src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                    alt="Company holiday party with people celebrating"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}