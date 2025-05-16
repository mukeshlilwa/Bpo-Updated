'use client';

import Link from 'next/link';
import * as Icons from 'lucide-react';
import Image from 'next/image';

const services = {
  'Customer Support Services': {
    description: "Elevate your customer experience with BPO Brigade's expert support teams. Our tailored solutions deliver 24/7 multilingual assistance, reducing response times and boosting satisfaction while cutting your operational costs.",
    image: '/images/csr.svg'
  },
  'Digital Marketing Services': {
    description: "Unleash your digital potential with BPO Brigade's data-driven marketing strategies. From targeted social campaigns to conversion-optimized SEO, we amplify your online presence and drive measurable business growth.",
    image: '/images/dms.svg'
  },
  'Administrative Support': {
    description: "Streamline your operations with BPO Brigade's efficient administrative solutions. Our virtual assistants and CRM experts handle backend tasks with precision, freeing your team to focus on strategic priorities.",
    image: '/images/as.svg'
  },
};

const iconList = ['Headset', 'Megaphone', 'Settings'];

export default function OurServices() {
  return (
    <div className="relative w-full overflow-hidden" id="services">
      {/* Arc decoration */}
      <div className="absolute top-0 right-[-130px] translate-x-4 translate-y-4">
        <div className="arc"></div>
      </div>

      <section className="pt-16 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-10 font-montserrat">
        <h1 className="text-[#C93C3C] text-2xl md:text-3xl font-bold">
          Our Services<span className="text-white">.</span>
        </h1>
        <p className="text-lg text-gray-300 mt-4 max-w-3xl pb-10">
          Tailored BPO solutions designed to optimize your operations and accelerate growth
        </p>
      </section>

      <div className="container mx-auto px-6 md:px-8 lg:px-10 xl:px-10 pb-16 lg:pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(services).map(([category, data], idx) => {
            const Icon = Icons[iconList[idx]] || Icons.CircleHelp;
            const categoryPath = category.toLowerCase().replace(/ /g, '-');

            return (
              <div key={category} className="card-container group">
                <div className="card-background"></div>
                <div className="card-content">
                  <div className="flex flex-col h-full">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#C93C3C]">
                        <Icon size={24} strokeWidth={1.5} className="text-white" />
                      </div>
                      <h2 className="text-xl font-bold text-white">{category}</h2>
                    </div>
                    
                    <p className="text-gray-300 text-sm flex-1 line-clamp-3">
                      {data.description}
                    </p>

                    <div className="relative w-full h-56 rounded-lg overflow-hidden my-3 border border-white/10">
                      <Image
                        src={data.image}
                        alt={category}
                        fill
                        className="object-cover"
                        sizes="100vw"
                      />
                    </div>

                    <div className="mt-2">
                      <Link
                        href={`/services/${categoryPath}`}
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
            href="/service-page"
            className="relative overflow-hidden inline-flex items-center gap-2 px-8 py-3 rounded-full bg-white text-[#C93C3C] shadow-md group font-semibold transition-transform duration-300 hover:scale-105"
          >
            <span className="absolute inset-0 bg-[#C93C3C] -translate-x-full group-hover:translate-x-0 transition-transform duration-300 z-0 rounded-full"></span>
            <span className="relative z-10 transition-colors duration-200 group-hover:text-white whitespace-nowrap">
              View All Services
            </span>
          </Link>
        </div>
      </div>

      <style jsx global>{`
        .arc {
          --b: 40px;
          --a: 240deg;
          width: 250px;
          aspect-ratio: 1;
          padding: var(--b);
          border-radius: 50%;
          background: #c93c3c;
          --_g: /var(--b) var(--b) no-repeat radial-gradient(50% 50%, #000 97%, #0000);
          mask: top var(--_g), calc(50% + 50% * sin(var(--a))) calc(50% - 50% * cos(var(--a))) var(--_g), linear-gradient(#0000 0 0) content-box intersect, conic-gradient(#000 var(--a), #ff0000 180deg);
          opacity: 0.2;
          transform: rotate(180deg);
        }

        .card-container {
          position: relative;
          min-height: 420px;
          display: flex;
          flex-direction: column;
        }

        .card-background {
          position: absolute;
          inset: 0;
          left: -5px;
          width: calc(100% + 10px);
          height: calc(100% + 10px);
          border-radius: 10px;
          background: linear-gradient(-45deg, #C93C3C 0%, #0a1a3a 100%);
          z-index: 1;
          pointer-events: none;
          transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .card-background::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(-45deg, #C93C3C 0%, #0a1a3a 100%);
          transform: translate3d(0, 0, 0) scale(0.95);
          filter: blur(20px);
          z-index: 0;
          opacity: 0.7;
        }

        .card-content {
          position: relative;
          background: linear-gradient(to right, #0F172A, #1E293B, #0F172A);
          display: flex;
          flex-direction: column;
          padding: 20px;
          border-radius: 8px;
          z-index: 2;
          border: 1px solid rgba(201, 60, 60, 0.3);
          height: 100%;
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

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}
