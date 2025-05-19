"use client";
import Image from "next/image";
import React from "react";

export default function AdministrativeSupport() 
{
  // Color scheme
  const colors = {
    primary: "#C93C3C",
    secondary: "#2C3E50",
    accent: "#E74C3C",
    lightBg: "#F5F7FA",
    darkText: "#333333",
    lightText: "#FFFFFF",
  };

  return (
    <section
      className="
        font-montserrat
        mx-auto 
        px-4 sm:px-6 md:px-8 lg:px-10 xl:px-10
      "
    >
      {/* ===== FULL‑WIDTH HEADLINE + SUPPORTING TEXT ===== */}
      <div
        className="-mx-4 sm:-mx-6 md:-mx-10 lg:-mx-16 xl:-mx-20 py-16"
        style={{
          background: `linear-gradient(135deg, ${colors.secondary} 0%, ${colors.primary} 100%)`,
        }}
      >
        <h1
          className="
            text-white text-center
            text-2xl sm:text-2xl md:text-4xl lg:text-4xl
            font-extrabold
            sm:pt-8
          "
        >
          Administrative Support
          <span className="text-[#9c3c3c]">.</span>
        </h1>

        {/* supporting text */}
        <p
          className="
            text-white text-center
            text-sm sm:text-base md:text-lg lg:text-lg
            font-medium
            sm:pb-8
            max-w-4xl mx-auto px-4 pt-5
          "
        >
          Streamlining Your Operations, So You Can Focus on What Matters.
        </p>
      </div>

      {/* ───────── OVERVIEW ───────── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 lg:gap-10 mb-10 md:mb-16 lg:mb-20 mt-10">
        {/* Text Column */}
        <div className="lg:col-span-8 order-1">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-bold text-[#9c3c3c] mb-4">
            Overview
          </h2>
          <p className="text-justify text-sm sm:text-base md:text-lg lg:text-lg leading-relaxed text-white">
            When your day is packed, we step in to handle the details. Our
            administrative support keeps your operations running smoothly, from
            scheduling to communication and beyond. We streamline your
            processes, organize your tasks, and make sure nothing slips through
            the cracks. With a focus on efficiency and accuracy, we free you up
            to focus on what matters most. Let us handle the routine, so you can
            excel at your core.
          </p>
        </div>

        {/* Image Column */}
        <div className="lg:col-span-4 order-2 relative">
          <div className="w-full lg:h-[250px] sm:h-[200px] bg-gray-200 rounded-lg overflow-hidden">
            <Image
              src="/images/card-img.jpg"
              alt="Call center support team"
              className="object-contain"
              width={400}
              height={300}
              priority={false}
            />
          </div>
        </div>
      </div>

      <div/>

      {/* Why Choose Us */}
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-bold text-[#9c3c3c] mb-6">
        Why&nbsp;Choose&nbsp;Us
      </h2>

      <ul className="space-y-6">
        {[
          {
            title: "Efficient Task Management",
            body: "We take care of scheduling, emails, and other daily tasks to keep your workflow organized.",
          },
          {
            title: "Organized Systems",
            body: "Our team builds tailored systems to streamline your operations and keep things running smoothly.",
          },
          {
            title: "Personalized Support",
            body: "We adapt to your unique needs, providing hands-on support to keep your business efficient and stress-free.",
          },
        ].map(({ title, body }) => (
          <li
            key={title}
            className="
              bg-gradient-to-r from-[#0F172A] via-[#1E293B] to-[#0F172A] border-l-4 border-[#C93C3C]
              rounded-md p-4 sm:p-5 md:p-6 shadow-sm
            "
          >
            <h3 className="text-base sm:text-lg md:text-xl lg:text-xl font-semibold text-[#C93C3C] mb-1">
              {title}
            </h3>
            <p className="text-sm sm:text-base md:text-lg lg:text-lg text-white text-justify">
              {body}
            </p>
          </li>
        ))}
      </ul>

    
    </section>
  );
}
