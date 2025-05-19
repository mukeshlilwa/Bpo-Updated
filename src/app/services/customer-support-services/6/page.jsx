"use client";
import Image from "next/image";
import React from "react";

export default function DigitalMarketing() {
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
          Virtual Assistant
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
          Unlock the Power of Digital Strategies to Accelerate Your Growth.
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
            {" "}
            You need fresh leads and strong reach. Our digital marketing helps
            you reach the right eyes. We plan your path, set clear goals, and
            act fast. From ads to posts, we craft each step to match your brand.
            We guide clicks to your page and turn views into real leads. Our
            team works to grow your name and keep your plan on track. With us,
            you build trust and get real gains.
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
      <div />

      {/* Why Choose Us */}
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-bold text-[#9c3c3c] mb-6">
        Why&nbsp;Choose&nbsp;Us
      </h2>

      <ul className="space-y-6">
        {[
          {
            title: "Full Plan Help",
            body: "We build full plans that guide each move and track each goal.",
          },
          {
            title: "Fresh Ad Ideas",
            body: "We make ads that speak to your fans and push clear action.",
          },
          {
            title: "Post and Share Plans",
            body: "We plan posts and share at the right time to reach more fans.",
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

      {/* CTA STRIP */}
      
    </section>
  );
}
