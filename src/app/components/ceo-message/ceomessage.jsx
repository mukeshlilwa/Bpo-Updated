import React from "react";
import Image from "next/image";
import CeoImage from "../../../../public/images/csr.svg";

const CeoMessage = () => {
  return (
    <div className="lg:py-10 font-montserrat bg-gradient-to-r from-[#0F172A] via-[#1E293B] to-[#0F172A] text-white">
      {/* Layout */}
      <div className="flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 md:px-8 lg:px-10 py-10 gap-10">
        {/* Left Side: Image */}
        <div className="w-full md:w-1/2">
          <Image
            src={CeoImage}
            alt="CEO"
            className="w-full h-auto rounded-lg shadow-lg object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
            priority
          />
        </div>

        {/* Right Side: Content */}
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-start text-[#c93c3c]">
            Message from the CEO
          </h2>
          <p className="lg:text-lg text-white text-justify font-light leading-relaxed">
            At BPO Brigade, our goal is simple: to empower businesses by
            streamlining operations and boosting efficiency. From day one, we’ve
            focused on delivering tailored solutions that exceed
            expectations—ensuring each client receives the attention, strategy,
            and execution they deserve. In today’s fast-changing market,
            adaptability and precision are not just advantages—they're
            necessities. That’s why our approach combines industry-leading
            technology, experienced professionals, and a commitment to
            continuous improvement. We specialize in services ranging from
            customer support and back-office management to digital
            transformation and CRM integration—allowing you to concentrate on
            your core business while we handle the rest. With a dedicated and
            agile team, we turn challenges into opportunities, helping you
            navigate complexity and stay ahead of the curve. <br/>
            <span className="font-medium text-lg text-white">
            
              Atif Iqbal:
              CEO, BPO Brigade
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CeoMessage;
