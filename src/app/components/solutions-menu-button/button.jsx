import React from 'react';
import Link from 'next/link';

export default function SolutionsButton() {
  return (
    <>
      {/* heading + underline */}
      <div className="inline-block">
        <h2 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-3xl font-semibold mb-1">
          Solutions
        </h2>
        <div className="h-[3px] w-full bg-[#e5eef7] rounded-full" />
      </div>

      {/* tagline */}
      <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl font-medium my-6 max-w-3xl mx-auto">
        Browse all our&nbsp;solutions to find the perfect fit for your&nbsp;business.
      </p>

      {/* button */}
      <Link
        href="/solution-page"
        className="inline-block bg-[#C93C3C] hover:bg-[#b53535] transition-colors
                   text-white font-medium py-2 px-6 sm:py-3 sm:px-8 md:py-4 md:px-10
                   rounded-lg shadow-[0_4px_6px_0_rgba(201,60,60,0.4)]"
      >
        View&nbsp;All&nbsp;Solutions
      </Link>
    </>
  );
}
