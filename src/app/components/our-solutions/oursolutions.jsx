"use client";

import Link from "next/link";
import * as Icons from "lucide-react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import Image from "next/image";

const solutions = {
  "Business Process Automation": {
    description:
      "Streamline your operations with our cutting-edge automation solutions that reduce manual work and increase efficiency.",
    image: "/images/as.svg",
  },
  "AI & Machine Learning": {
    description:
      "Leverage artificial intelligence to gain insights, automate processes, and enhance customer experiences.",
    image: "/images/csr.svg",
  },
  "Communication & Collaboration Tools": {
    description:
      "Enhance team productivity with our integrated communication and collaboration platform solutions.",
    image: "/images/dms.svg",
  },
  "Data & Business Intelligence": {
    description:
      "Transform raw data into actionable insights with our powerful analytics and visualization tools.",
    image: "/images/dms.svg",
  },
  "CRM & Marketing Automation": {
    description:
      "Optimize customer relationships and marketing efforts with our comprehensive CRM solutions.",
    image: "/images/csr.svg",
  },
  "Cloud & Infrastructure": {
    description:
      "Scale your business with our secure and reliable cloud infrastructure services.",
    image: "/images/dms.svg",
  },
  "Security & Compliance": {
    description:
      "Enterprise-grade security solutions and compliance frameworks to protect your business data.",
    image: "/images/dms.svg",
  },
  "Customer Insights & Feedback": {
    description:
      "Turn customer data into actionable intelligence to improve experiences and products.",
    image: "/images/csr.svg",
  },
};

const iconList = [
  "Briefcase",
  "Cpu",
  "MessagesSquare",
  "Database",
  "Contact",
  "Cloud",
  "Shield",
  "BarChart",
];

export default function OurSolutions() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100,
        duration: 0.8,
      },
    },
  };

  const solutionEntries = Object.entries(solutions).slice(0, 3);

  return (
    <div className="relative w-full" id="solutions">
      {/* Arc positioned at the top right */}
      <div className="absolute top-0 keft-[-180px] transform translate-x-4 translate-y-4">
        <div className="arc"></div>
      </div>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="lg:pt-10 font-montserrat mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-10"
      >
        <h1 className="text-[#C93C3C] text-2xl md:text-3xl font-bold">
          Our Solutions<span className="text-white">.</span>
        </h1>
        <p className="text-lg text-gray-300 mt-4 max-w-3xl pb-10">
          Innovative technology solutions designed to transform your business
          operations
        </p>
      </motion.section>

      <div className="container mx-auto px-6 md:px-8 lg:px-10 xl:px-10 lg:pb-20 pb-16">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={container}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {solutionEntries.map(([category, data], idx) => {
            const Icon = Icons[iconList[idx]] || Icons.CircleHelp;
            const categoryPath = category.toLowerCase().replace(/ /g, "-");

            return (
              <motion.div
                key={category}
                variants={cardVariants}
                className="card-container group"
              >
                <div className="card-background"></div>
                <div className="card-content">
                  <div className="flex flex-col h-full">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#C93C3C]">
                        <Icon
                          size={24}
                          strokeWidth={1.5}
                          className="text-white"
                        />
                      </div>
                      <h2 className="text-xl font-bold text-white">
                        {category}
                      </h2>
                    </div>

                    <p className="text-gray-300 flex-1 text-sm">
                      {data.description}
                    </p>

                    <div className="relative w-full h-60 rounded-lg overflow-hidden my-3 border border-white/10">
                      <Image
                        src={data.image}
                        alt={category}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>

                    <div className="mt-2">
                      <Link
                        href={`/solutions/${categoryPath}`}
                        className="inline-flex items-center gap-1 text-white font-medium hover:text-[#C93C3C] transition-colors"
                      >
                        Read More
                        <Icons.ArrowRight
                          size={16}
                          className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <div className="flex justify-center mt-12">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Link
              href="/solution-page"
              className="relative overflow-hidden inline-flex items-center rounded-3xl bg-white text-[#C93C3C] shadow-[10px_10px_20px_rgba(0,0,0,0.05)] px-8 py-3 font-semibold group"
              style={{ "--clr": "#C93C3C" }}
            >
              <span className="absolute inset-0 bg-[var(--clr)] transform -translate-x-full transition-transform duration-300 group-hover:translate-x-0 z-0"></span>
              <span className="relative z-10 transition-colors duration-200 group-hover:text-white">
                View All Solutions
              </span>
            </Link>
          </motion.div>
        </div>
      </div>

      <style jsx global>{`
        .arc {
          --b: 40px; /* the border thickness */
          --a: 240deg; /* control the progression */
      
          width: 250px;
          aspect-ratio: 1;
          padding: var(--b);
          border-radius: 50%;
          background: #c93c3c;
          --_g: /var(--b) var(--b) no-repeat
            radial-gradient(50% 50%, #000 97%, #0000);
          mask: top var(--_g),
            calc(50% + 50% * sin(var(--a))) 
            calc(50% - 50% * cos(var(--a))) var(--_g),
            linear-gradient(#0000 0 0) content-box intersect,
            conic-gradient(#000 var(--a), #ff0000 180deg);
          opacity: 0.2; /* Reduced opacity */
          transform: rotate(180deg); /* Rotate the arc 180 degrees */
        }

        .card-container {
          position: relative;
          width: 100%;
          height: 100%;
          min-height: 400px;
        }

        .card-background {
          position: absolute;
          inset: 0;
          left: -5px;
          margin: auto;
          width: calc(100% + 10px);
          height: calc(100% + 10px);
          border-radius: 10px;
          background: linear-gradient(-45deg, #c93c3c 0%, #0a1a3a 100%);
          z-index: 1;
          pointer-events: none;
          transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .card-background::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(-45deg, #c93c3c 0%, #0a1a3a 100%);
          transform: translate3d(0, 0, 0) scale(0.95);
          filter: blur(20px);
          z-index: 0;
          opacity: 0.7;
        }

        .card-content {
          position: relative;
          width: 100%;
          height: 100%;
          background: linear-gradient(to right, #0f172a, #1e293b, #0f172a);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 20px;
          border-radius: 8px;
          z-index: 2;
          border: 1px solid rgba(201, 60, 60, 0.3);
        }

        .card-container:hover .card-background {
          transform: rotate(-90deg) scaleX(1.34) scaleY(0.77);
        }

        .card-container:hover .card-background::after {
          filter: blur(30px);
          opacity: 0.9;
        }

        .card-container:hover .card-content {
          border-color: rgba(201, 60, 60, 0.6);
        }
      `}</style>
    </div>
  );
}
