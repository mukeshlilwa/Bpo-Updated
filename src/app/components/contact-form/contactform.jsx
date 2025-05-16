'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { motion } from "framer-motion";

export default function ContactForm({
  title = "Get in Touch",
  subtitle = "We're here to help you optimize your processes and maximize results",
  accentColor = '#C93C3C',
  textColor = '#2C3E50'
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  const inputBaseClass = (hasError) =>
    `w-full px-3 sm:px-4 py-2 text-sm sm:text-base rounded-lg border ${
      hasError ? 'border-red-300' : 'border-gray-300'
    } placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[${accentColor}] focus:border-[${accentColor}]`;

  return (
    <div
      className="w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-8 sm:py-10 md:py-12 lg:py-16 "
      id="contact-form"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-[#c93c3c]">
            {title}
          </h1>
          <p className="text-white text-sm sm:text-base md:text-lg">{subtitle}</p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4 sm:space-y-5 md:space-y-6 p-5 sm:p-6 md:p-8 rounded-lg shadow-sm bg-gradient-to-r from-[#0F172A] via-[#1E293B] to-[#0F172A]  text-white"
        >
          {/* Full Name */}
          <div>
            <label className="block text-xs sm:text-sm font-medium mb-1 sm:mb-2">Full Name *</label>
            <input
              {...register('name', {
                required: 'Name is required',
                pattern: {
                  value: /^[A-Za-z ]+$/i,
                  message: 'Invalid name format',
                },
              })}
              className={inputBaseClass(errors.name)}
              placeholder="John Doe"
            />
            {errors.name && (
              <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Email Address */}
          <div>
            <label className="block text-xs sm:text-sm font-medium mb-1 sm:mb-2">Email Address *</label>
            <input
              type="email"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address',
                },
              })}
              className={inputBaseClass(errors.email)}
              placeholder="john@example.com"
            />
            {errors.email && (
              <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-xs sm:text-sm font-medium mb-1 sm:mb-2">Phone Number</label>
            <input
              {...register('phone', {
                pattern: {
                  value: /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/,
                  message: 'Invalid phone number',
                },
              })}
              className={inputBaseClass(errors.phone)}
              placeholder="+1 (555) 123-4567"
            />
            {errors.phone && (
              <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.phone.message}</p>
            )}
          </div>

          {/* Comments */}
          <div>
            <label className="block text-xs sm:text-sm font-medium mb-1 sm:mb-2">Comments *</label>
            <textarea
              {...register('comments', {
                required: 'Comments are required',
                minLength: { value: 20, message: 'Minimum 20 characters' },
                maxLength: { value: 500, message: 'Maximum 500 characters' },
              })}
              rows={4}
              className={inputBaseClass(errors.comments)}
              placeholder="How can we assist you?"
            />
            {errors.comments && (
              <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.comments.message}</p>
            )}
          </div>

          {/* Submit Button */}
          {/* Submit Button */}
<div className="flex justify-center pt-4">
  <motion.button
    type="submit"
    className="relative flex items-center justify-center overflow-hidden rounded-full bg-white text-sm sm:text-base font-medium py-2 sm:py-3 px-4 sm:px-6 shadow-[10px_10px_20px_rgba(0,0,0,0.05)] cursor-pointer group"
    style={{ "--clr": accentColor }}
    whileHover={{ scale: 1.03 }}
    transition={{ duration: 0.3 }}
  >
    <span className="absolute inset-0 bg-[var(--clr)] transform -translate-x-full transition-transform duration-300 group-hover:translate-x-0 z-0"></span>
    <span className="relative z-10 text-[var(--clr)] transition-colors duration-200 group-hover:text-white">
      Send Message
    </span>
  </motion.button>
</div>

        </form>
      </div>
    </div>
  );
}
