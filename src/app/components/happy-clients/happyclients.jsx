'use client';

import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { Smile, CheckCircle, Users } from 'lucide-react';

const stats = [
  { 
    number: 1100, 
    label: "Happy Clients",
    icon: <Smile className="w-10 h-10 text-[#C93C3C]" />,
  },
  { 
    number: 1500, 
    label: "Projects Completed",
    icon: <CheckCircle className="w-10 h-10 text-[#C93C3C]" />,
  },
  { 
    number: 100, 
    label: "Team Members",
    icon: <Users className="w-10 h-10 text-[#C93C3C]" />,
  },
];

export default function ClientsCount() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3
  });

  return (
    <div 
      className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#0F172A] via-[#1E293B] to-[#0F172A]"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center"
            >
              <div className="mb-4 p-3 bg-[#1E293B] rounded-full border border-[#C93C3C]/30">
                {stat.icon}
              </div>
              <p className="text-5xl font-bold text-[#C93C3C]">
                {inView ? (
                  <CountUp 
                    end={stat.number} 
                    duration={2.5}
                    separator=","
                  />
                ) : "0"}
                <span className="text-[#C93C3C]">+</span>
              </p>
              <p className="text-xl text-white mt-2 font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}