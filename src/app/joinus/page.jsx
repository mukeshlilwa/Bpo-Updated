"use client";

import React from 'react';
import { Briefcase, Code2, Handshake, TrendingUp } from 'lucide-react';
import Image from 'next/image';
import HeroImage from "../../../public/images/card-img.jpg";
import GlobalBackground from '../components/GlobalBackground/background';
import { motion } from 'framer-motion'

const JoinUs = () => {
  // Color scheme
  const colors = {
    primary: '#C93C3C',
    secondary: '#2C3E50',
    accent: '#E74C3C',
    lightBg: '#F5F7FA',
    darkText: '#333333',
    lightText: '#FFFFFF'
  };

  const benefits = [
    {
      icon: <Briefcase className="w-8 h-8 mb-4" />,
      title: "Professional Growth",
      description: "Access to training programs and mentorship opportunities to advance your career."
    },
    {
      icon: <Code2 className="w-8 h-8 mb-4" />,
      title: "Cutting-Edge Technology",
      description: "Work with the latest tools and technologies in the industry."
    },
    {
      icon: <Handshake className="w-8 h-8 mb-4" />,
      title: "Collaborative Culture",
      description: "Join a team that values collaboration, creativity, and innovation."
    },
    {
      icon: <TrendingUp className="w-8 h-8 mb-4" />,
      title: "Career Advancement",
      description: "Clear paths for promotion and opportunities to take on leadership roles."
    }
  ];

  const openPositions = [
    {
      title: "Frontend Developer",
      department: "Engineering",
      type: "Full-time",
      location: "Remote"
    },
    {
      title: "UX Designer",
      department: "Design",
      type: "Full-time",
      location: "Hybrid"
    },
    {
      title: "Digital Marketing Specialist",
      department: "Marketing",
      type: "Full-time",
      location: "Remote"
    },
    {
      title: "Customer Support Representative",
      department: "Operations",
      type: "Part-time",
      location: "On-site"
    }
  ];

  return (
    <div className="min-h-screen">
      <GlobalBackground/>
      {/* Hero Section */}
      <section className="relative">
        <div 
          className="py-24 px-4 sm:px-6 lg:px-8"
          style={{ 
            background: `linear-gradient(135deg, ${colors.secondary} 0%, ${colors.primary} 100%)`
          }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-4xl font-extrabold tracking-tight text-white">
              Join Our <span className="font-black">Team</span>
              <span style={{ color: colors.accent }}>.</span>
            </h1>
            <p className="mt-6 text-xl text-gray-100 max-w-3xl mx-auto">
              Be part of something great. Help us build innovative solutions while growing your career.
            </p>
            <div className="mt-10">
              <a
                href="#open-positions"
                className="inline-block px-8 py-3 border border-transparent text-base font-medium rounded-md text-white"
                style={{ backgroundColor: colors.primary }}
              >
                View Open Positions
              </a>
            </div>
          </div>
        </div>
      </section>

     

<section className="py-15">
  <GlobalBackground/>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
    <div>
      <h2 className="text-3xl font-extrabold text-white">
        Why Join Us?
      </h2>
      <p className="mt-4 max-w-2xl text-xl text-white">
        We offer more than just a job - we offer a career with purpose.
      </p>
    </div>

    <div className="mt-12">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {benefits.map((benefit, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.1 }}
            whileHover={{ scale: 1.03 }}
            className="pt-10 pb-8 px-6 text-center rounded-lg shadow-md bg-gradient-to-r from-[#0F172A] via-[#1E293B] to-[#0F172A] text-white"
          >
            <div className="flex items-center justify-center w-16 h-16 mx-auto rounded-full bg-white">
              <div className="flex items-center justify-center w-full h-full">
                {React.cloneElement(benefit.icon, {
                  size: 35,
                  color: colors.primary,
                  className: "block"
                })}
              </div>
            </div>

            <h3 className="mt-6 text-lg font-medium text-[#C93C3C]">
              {benefit.title}
            </h3>

            <p className="mt-2 text-base">
              {benefit.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
</section>


      {/* Open Positions Section */}

<section id="open-positions" className="py-16">
  <div className="px-4 sm:px-6 lg:px-10">
    <div>
      <h2 className="text-3xl font-extrabold text-white">
        Current Openings
      </h2>
      <p className="mt-4 text-xl text-white mx-auto">
        Find the perfect role for your skills and ambitions.
      </p>
    </div>

    <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {openPositions.map((position, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.1 }}
          whileHover={{ scale: 1.02 }}
          className="flex flex-col rounded-lg shadow-md overflow-hidden bg-gradient-to-r from-[#0F172A] via-[#1E293B] to-[#0F172A] text-white hover:shadow-lg transition-all duration-300"
        >
          <div className="flex-1 p-6 flex flex-col justify-between">
            <div className="flex-1">
              <div className="flex items-center">
                <span
                  className="inline-flex px-3 py-1 rounded-full text-sm font-medium"
                  style={{
                    backgroundColor: `${colors.primary}20`,
                    color: colors.primary,
                  }}
                >
                  {position.department}
                </span>
                <span className="ml-2 inline-flex px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
                  {position.type}
                </span>
              </div>
              <h3 className="mt-3 text-xl font-semibold text-white">
                {position.title}
              </h3>
              <p className="mt-3 text-base text-gray-500">
                <svg
                  className="flex-shrink-0 mr-1.5 h-5 w-5 inline-block"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                {position.location}
              </p>
            </div>
            <div className="mt-6">
              <button
                className="w-full flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white cursor-pointer"
                style={{ backgroundColor: colors.primary }}
              >
                Apply Now
              </button>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>


      {/* Culture Section */}
      <section className="py-15 bg-gradient-to-r from-[#0F172A] via-[#1E293B] to-[#0F172A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div className="mb-12 lg:mb-0">
              <h2 className="text-3xl font-extrabold text-white">
                Our Culture
              </h2>
              <p className="mt-4 text-lg text-white">
                At our company, we foster an environment of collaboration, innovation, and continuous learning. We believe in work-life balance and creating opportunities for our team members to thrive both professionally and personally.
              </p>
              <p className="mt-4 text-lg text-white">
                Our core values include transparency, accountability, and a commitment to excellence in everything we do.
              </p>
              <div className="mt-8">
                <button
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white"
                  style={{ backgroundColor: colors.primary }}
                >
                  Learn More About Us
                </button>
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden">
              <Image
                src={HeroImage}
                alt="Our Team Culture"
                className="w-full h-auto rounded-lg shadow-xl"
                placeholder="blur"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-8 px-6 shadow rounded-lg sm:px-10 bg-gradient-to-r from-[#0F172A] via-[#1E293B] to-[#0F172A] text-white">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-[#c93c3c] ">
                Apply Now
              </h2>
              <p className="mt-4 text-lg">
                Ready to take the next step in your career?
              </p>
            </div>
            <form className="mt-8 space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="first-name" className="block text-sm font-medium">
                    First name
                  </label>
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-1"
                    style={{ focusRingColor: colors.primary }}
                  />
                </div>
                <div>
                  <label htmlFor="last-name" className="block text-sm font-medium">
                    Last name
                  </label>
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-1 focus:ring-offset-1"
                    
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium ">
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-1 focus:ring-offset-1"
                  style={{ focusRingColor: colors.primary }}
                />
              </div>
              <div>
                <label htmlFor="position" className="block text-sm font-medium">
                  Position
                </label>
                <select
                  id="position"
                  name="position"
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-1 focus:ring-offset-1 rounded-md"
                  style={{ focusRingColor: colors.primary }}
                >
                  <option>Select a position</option>
                  {openPositions.map((position, index) => (
                    <option key={index} value={position.title}>
                      {position.title} ({position.department})
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="resume" className="block text-sm font-medium">
                  Resume
                </label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                  <div className="space-y-1 text-center">
                    <svg
                      className="mx-auto h-12 w-12 text-gray-400"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div className="flex text-sm text-gray-600">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer rounded-md font-medium"
                        style={{ color: colors.primary }}
                      >
                        <span>Upload a file</span>
                        <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">PDF, DOC, DOCX up to 5MB</p>
                  </div>
                </div>
              </div>
              <div>
                <label htmlFor="cover-letter" className="block text-sm font-medium ">
                  Cover Letter
                </label>
                <div className="mt-1">
                  <textarea
                    id="cover-letter"
                    name="cover-letter"
                    rows={4}
                    className="shadow-sm focus:ring-1 focus:ring-offset-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                    style={{ focusRingColor: colors.primary }}
                    defaultValue={''}
                  />
                </div>
              </div>
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white"
                  style={{ backgroundColor: colors.primary }}
                >
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JoinUs;