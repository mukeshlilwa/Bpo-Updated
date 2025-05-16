'use client';

import Link from 'next/link';
import * as Icons from 'lucide-react';
import ContactForm from '../components/contact-form/contactform';
import GlobalBackground from '../components/GlobalBackground/background';

// Color scheme
const colors = {
  primary: '#C93C3C',
  secondary: '#2C3E50',
  accent: '#E74C3C',
  lightBg: '#F5F7FA',
  darkText: '#333333',
  lightText: '#FFFFFF'
};

/* ---------- STATIC DATA ---------- */
const services = {
  'Customer Support Services': [
    'Inbound and Outbound Calling',
    'Customer Service Representative',
    'Appointment Setting',
    'Front Desk Support',
    'Chat Support',
    'Email Support',
    'Virtual Assistant',
    'Virtual Order Taker',
    'Quality Assurance',
  ],
  'Digital Marketing Services': [
    'SEO (Search Engine Optimization)',
    'Social Media Marketing',
    'PPC (Pay‑Per‑Click) Management',
    'E‑commerce Marketing',
    'Conversion Rate Optimization',
  ],
  'Administrative Support': ['CRM Support', 'Automation Services'],
};

/* Lucide icons per category */
const iconList = ['Headset', 'Megaphone', 'Settings'];

export default function ServicesPage() {
  return (
    
    <div>
      {/* Render Global Background only for this page */}

      {/* Top Section */}
      <section className="relative">
        <div 
          className="py-20 px-4 sm:px-6 md:px-10 lg:px-10"
          style={{ 
            background: `linear-gradient(135deg, ${colors.secondary} 0%, ${colors.primary} 100%)`
          }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white pt-0 lg:pt-5 ">
              Services<span style={{ color: colors.accent }}>.</span>
            </h1>
            <p className="mt-4 text-lg text-gray-100">
              Explore Our Comprehensive Solutions
            </p>
          </div>
        </div>
      </section>

      {/* Service Cards */}
      <div className="container mx-auto px-6 md:px-10 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(services).map(([category, items], idx) => {
            const Icon = Icons[iconList[idx]] || Icons.CircleHelp;
            const categoryPath = category.toLowerCase().replace(/ /g, '-');

            return (
              <div
                key={category}
                className="relative group transition-all duration-300 hover:-translate-y-2"
              >
                {/* Card Container */}
                <div className="h-full pt-8"> {/* Reduced pt to better position icon */}
                  
                <div className="absolute -top-0 left-8 z-10">
                    <div 
                      className="w-16 h-16 flex items-center justify-center rounded-full shadow-lg border-4 border-[#C93C3C] bg-gradient-to-r from-[#0F172A] via-[#1E293B] to-[#0F172A] text-white"
                      style={{ backgroundColor: colors.primary }}
                    >
                      <Icon size={28} strokeWidth={1.5} className="text-white" />
                    </div>
                  </div>

                  {/* Card Content */}
                  <div 
                    className="h-full p-8 rounded-xl shadow-md bg-white bg-gradient-to-r from-[#0F172A] via-[#1E293B] to-[#0F172A] text-white"
                    style={{ 
                      borderTop: `4px solid ${colors.primary}`,
                    }}
                  >
                    <h2 
                      className="text-xl font-bold mb-6 mt-4"
                      
                    >
                      {category}
                    </h2>

                    <ul className="space-y-3">
                      {items.map((item, i) => (
                        <li key={item}>
                          <Link
                            href={`/services/${categoryPath}/${i}`}
                            className="flex items-center gap-2 font-medium hover:underline"
                            
                          >
                            <Icons.ArrowRight 
                              size={16} 
                              style={{ color: colors.primary }} 
                            />
                            <span className="text-sm md:text-base">{item}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Contact Form Section */}
      <ContactForm/>
    </div>
  );
}
