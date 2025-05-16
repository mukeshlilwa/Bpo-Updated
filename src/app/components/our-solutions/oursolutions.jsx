"use client";

import Link from "next/link";
import * as Icons from "lucide-react";
import Image from "next/image";

const solutions = {
  "Business Process Automation": {
    description: "Streamline your operations with our cutting-edge automation solutions that reduce manual work and increase efficiency.",
    image: "/images/as.svg",
  },
  "AI & Machine Learning": {
    description: "Leverage artificial intelligence to gain insights, automate processes, and enhance customer experiences.",
    image: "/images/csr.svg",
  },
  "Communication & Collaboration Tools": {
    description: "Enhance team productivity with our integrated communication and collaboration platform solutions.",
    image: "/images/dms.svg",
  },
};

const iconList = [
  "Briefcase",
  "Cpu",
  "MessagesSquare",
];

export default function OurSolutions() {
  const solutionEntries = Object.entries(solutions);

  return (
    <div className="relative w-full" id="solutions">
      {/* Arc Design */}
      <div className="absolute top-0 left-[-180px] transform translate-x-4 translate-y-4 z-0">
        <div className="arc"></div>
      </div>

      <section className="pt-10 font-montserrat mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-10">
        <h1 className="text-[#C93C3C] text-2xl md:text-3xl font-bold">
          Our Solutions<span className="text-white">.</span>
        </h1>
        <p className="text-lg text-gray-300 mt-4 max-w-3xl pb-10">
          Innovative technology solutions designed to transform your business operations
        </p>
      </section>

      <div className="container mx-auto px-6 md:px-8 lg:px-10 xl:px-10 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 animate-fade-up" style={{ animationDelay: '0.3s' }}>
          {solutionEntries.map(([category, data], idx) => {
            const Icon = Icons[iconList[idx]] || Icons.CircleHelp;
            const categoryPath = category.toLowerCase().replace(/ /g, "-");

            return (
              <div key={category} className="card-container group animate-fade-up" style={{ animationDelay: `${idx * 150}ms` }}>
                <div className="card-background"></div>
                <div className="card-content">
                  <div className="flex flex-col h-full">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#C93C3C]">
                        <Icon size={24} strokeWidth={1.5} className="text-white" />
                      </div>
                      <h2 className="text-xl font-bold text-white">{category}</h2>
                    </div>

                    <p className="text-gray-300 flex-1 text-sm">{data.description}</p>

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
                        <Icons.ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center mt-12">
          <Link
            href="/solution-page"
            className="relative overflow-hidden inline-flex items-center rounded-3xl bg-white text-[#C93C3C] shadow-lg px-8 py-3 font-semibold group"
          >
            <span className="absolute inset-0 bg-[#C93C3C] transform -translate-x-full transition-transform duration-300 group-hover:translate-x-0 z-0"></span>
            <span className="relative z-10 transition-colors duration-200 group-hover:text-white">
              View All Solutions
            </span>
          </Link>
        </div>
      </div>

      {/* Global styles */}
      <style jsx global>{`
        @keyframes fade-up {
          0% {
            transform: translateY(20px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .animate-fade-up {
          animation: fade-up 0.6s ease-out forwards;
        }

        .arc {
          width: 250px;
          aspect-ratio: 1;
          padding: 40px;
          border-radius: 50%;
          background: #c93c3c;
          opacity: 0.2;
          transform: rotate(180deg);
          mask: radial-gradient(50% 50%, #000 97%, #0000);
        }

        .card-container {
          position: relative;
          width: 100%;
          min-height: 400px;
        }

        .card-background {
          position: absolute;
          inset: 0;
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
          transform: scale(0.95);
          filter: blur(20px);
          z-index: 0;
          opacity: 0.7;
        }

        .card-content {
          position: relative;
          background: linear-gradient(to right, #0f172a, #1e293b, #0f172a);
          padding: 20px;
          border-radius: 8px;
          z-index: 2;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
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
