"use client";
import React from "react";
import Image from "next/image";
import AboutImage from "../../../public/images/aboutImage.jpeg";

import { Section } from "lucide-react";
import AboutSupportColumns from "../components/about-support/about-support";
import CeoMessage from "../components/ceo-message/ceomessage";
import Testimonials from "../components/testimonials/testminials";
import ContactForm from "../components/contact-form/contactform";
import GlobalBackground from "../components/GlobalBackground/background";
import ClientsCount from "../components/happy-clients/happyclients";

const AboutUs = () => {

  // Color scheme
const colors = {
  primary: '#C93C3C',
  secondary: '#2C3E50',
  accent: '#E74C3C',
  lightBg: '#F5F7FA',
  darkText: '#333333',
  lightText: '#FFFFFF'
};

  
  return (
    <>
    <div>
      <GlobalBackground/>
      <div
        className="
          font-montserrat
          mx-auto 
          px-4 sm:px-6 md:px-8 lg:px-10 xl:px-10
        "
      >
        <div className="-mx-4 sm:-mx-6 md:-mx-10 lg:-mx-10 xl:-mx-10 py-20"
        style={{ 
          background: `linear-gradient(135deg, ${colors.secondary} 0%, ${colors.primary} 100%)`
        }}
        >
          <div className="max-w-4xl mx-auto text-center mt-5">
          {/* Headline */}
          <h1 className="text-4xl sm:text-4xl font-extrabold tracking-tight text-white">
              About Us
              <span style={{ color: colors.accent }}>.</span>
            </h1>
            </div>
        </div>



        {/* Content Section */}
        <div className="flex flex-col md:flex-row items-center justify-between py-12 gap-6">
          {/* Left Side: Text */}
          <div className="md:w-1/2">
            <h1 className="lg:text-3xl xl:text-3xl md:text-3xl text-2xl mt-4 font-bold text-[#c93c3c] mb-4">
              Empowering Growth Where People, Process, and Technology Unite
            </h1>
            <p
              className="lg:text-lg text-white text-justify">
              At BPO Brigade, we are more than just a service provider—we are
              your strategic partner in scaling operations, enhancing customer
              experiences, and driving digital transformation. With a strong
              foundation in Customer Support, Digital Marketing, and
              Administrative Services, we deliver end-to-end outsourcing
              solutions tailored to your business needs.
            </p>
          </div>

          {/* Right Side: Image */}
          <div className="md:w-1/2 px-4 mt-8 md:mt-0">
            <Image
              src={AboutImage} // Replace with your actual image path
              alt="About Us"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Count Clients */}
        <ClientsCount/>

      </div>

    

      <CeoMessage />
      <AboutSupportColumns />
      <Testimonials/>
      <div className="mt-10">
      <ContactForm/>
      </div>
      </div>
    </>
  );
};

export default AboutUs;
