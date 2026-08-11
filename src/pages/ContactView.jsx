import React, { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle2, Send, Instagram, Linkedin } from 'lucide-react';
import { CONTACT_INFO } from '../config/contact';

export default function ContactView({ onRequestDemo }) {
  const [submitted, setSubmitted] = useState(false);
  const [inquiryType, setInquiryType] = useState('Smart Campus');

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="container py-16 lg:py-24 flex flex-col gap-12">
      
      {/* Header Section */}
      <div className="text-center max-w-[640px] mx-auto">
        <h2 className="text-[2.2rem] font-extrabold text-[#111827] mb-3 tracking-tight">
          Contact Us
        </h2>
        <p className="text-[1.05rem] text-gray-500 font-medium">
          Any question or remarks? Just write us a message!
        </p>
      </div>

      {/* Main Card Container */}
      <div className="bg-white rounded-[2rem] p-2.5 sm:p-3 shadow-[0_15px_50px_rgba(0,0,0,0.06)] flex flex-col md:flex-row w-full max-w-[1050px] mx-auto border border-gray-100">
        
        {/* Left Column: Contact Info (Dark Card) */}
        <div className="bg-[#008f40] rounded-[1.5rem] p-10 relative overflow-hidden text-white w-full md:w-[40%] min-h-[500px] flex flex-col shrink-0">
          
          {/* Decorative Circles */}
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#00b853] rounded-full translate-x-1/3 translate-y-1/3"></div>
          <div className="absolute bottom-12 right-12 w-24 h-24 bg-[#05c45e] rounded-full mix-blend-screen opacity-50"></div>
          
          <div className="relative z-10 flex-1 flex flex-col">
            <h3 className="text-2xl font-bold mb-3">Contact Information</h3>
            <p className="text-[0.95rem] text-white/80 mb-12 max-w-[250px] leading-relaxed">
              Fill up the form and our Team will get back to you within 24 hours.
            </p>
            
            <div className="flex flex-col gap-8 flex-1">
              <div className="flex items-center gap-5">
                <Phone size={20} className="text-[#05c45e]" />
                <span className="text-[0.95rem]">{CONTACT_INFO.phone}</span>
              </div>
              <div className="flex items-center gap-5">
                <Mail size={20} className="text-[#05c45e]" />
                <span className="text-[0.95rem]">{CONTACT_INFO.email}</span>
              </div>
              <div className="flex items-start gap-5">
                <MapPin size={24} className="text-[#05c45e] shrink-0" />
                <span className="text-[0.95rem] leading-snug">
                  {CONTACT_INFO.address}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Form */}
        <div className="flex-1 p-8 sm:p-12 lg:p-14">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col h-full">
              
              {/* Grid for Name & Contact Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-10 mb-12">
                <div className="relative group">
                  <input type="text" id="firstName" required className="w-full bg-transparent border-0 border-b-[1.5px] border-gray-200 px-0 py-2 text-[0.95rem] text-gray-900 focus:outline-none focus:ring-0 focus:border-brand-green transition-colors peer placeholder-transparent" placeholder="First Name" />
                  <label htmlFor="firstName" className="absolute left-0 -top-4 text-[0.75rem] font-semibold text-gray-500 transition-all peer-placeholder-shown:text-[0.95rem] peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-4 peer-focus:text-[0.75rem] peer-focus:text-brand-green cursor-text">First Name</label>
                </div>
                <div className="relative group">
                  <input type="text" id="lastName" required className="w-full bg-transparent border-0 border-b-[1.5px] border-gray-200 px-0 py-2 text-[0.95rem] text-gray-900 focus:outline-none focus:ring-0 focus:border-brand-green transition-colors peer placeholder-transparent" placeholder="Last Name" />
                  <label htmlFor="lastName" className="absolute left-0 -top-4 text-[0.75rem] font-semibold text-gray-500 transition-all peer-placeholder-shown:text-[0.95rem] peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-4 peer-focus:text-[0.75rem] peer-focus:text-brand-green cursor-text">Last Name</label>
                </div>
                <div className="relative group">
                  <input type="email" id="email" required className="w-full bg-transparent border-0 border-b-[1.5px] border-gray-200 px-0 py-2 text-[0.95rem] text-gray-900 focus:outline-none focus:ring-0 focus:border-brand-green transition-colors peer placeholder-transparent" placeholder="Email" />
                  <label htmlFor="email" className="absolute left-0 -top-4 text-[0.75rem] font-semibold text-gray-500 transition-all peer-placeholder-shown:text-[0.95rem] peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-4 peer-focus:text-[0.75rem] peer-focus:text-brand-green cursor-text">Email</label>
                </div>
                <div className="relative group">
                  <input type="tel" id="phone" required className="w-full bg-transparent border-0 border-b-[1.5px] border-gray-200 px-0 py-2 text-[0.95rem] text-gray-900 focus:outline-none focus:ring-0 focus:border-brand-green transition-colors peer placeholder-transparent" placeholder="Phone" />
                  <label htmlFor="phone" className="absolute left-0 -top-4 text-[0.75rem] font-semibold text-gray-500 transition-all peer-placeholder-shown:text-[0.95rem] peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-4 peer-focus:text-[0.75rem] peer-focus:text-brand-green cursor-text">Phone</label>
                </div>
              </div>

              {/* Radio Group */}
              <div className="mb-12">
                <p className="text-[0.9rem] font-bold text-gray-900 mb-4">What service do you need?</p>
                <div className="flex flex-wrap gap-x-6 gap-y-4">
                  {['Smart Campus', 'Fee Management', 'Custom LMS', 'Other'].map((type) => (
                    <label key={type} className="flex items-center gap-2 cursor-pointer group">
                      <div className={`w-[18px] h-[18px] rounded-full border-[1.5px] flex items-center justify-center transition-colors ${inquiryType === type ? 'border-brand-green bg-brand-green' : 'border-gray-300 bg-transparent group-hover:border-gray-400'}`}>
                        {inquiryType === type && <CheckCircle2 size={12} className="text-white" strokeWidth={3} />}
                      </div>
                      <span className={`text-[0.85rem] ${inquiryType === type ? 'text-gray-900 font-medium' : 'text-gray-500'}`}>{type}</span>
                      <input type="radio" name="inquiryType" value={type} checked={inquiryType === type} onChange={(e) => setInquiryType(e.target.value)} className="hidden" />
                    </label>
                  ))}
                </div>
              </div>

              {/* Message Input */}
              <div className="relative group mb-12">
                <textarea id="message" required rows={1} className="w-full bg-transparent border-0 border-b-[1.5px] border-gray-200 px-0 py-2 text-[0.95rem] text-gray-900 focus:outline-none focus:ring-0 focus:border-brand-green transition-colors peer placeholder-transparent resize-none" placeholder="Message"></textarea>
                <label htmlFor="message" className="absolute left-0 -top-4 text-[0.75rem] font-semibold text-gray-500 transition-all peer-placeholder-shown:text-[0.95rem] peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-4 peer-focus:text-[0.75rem] peer-focus:text-brand-green cursor-text">Message</label>
              </div>

              {/* Submit Button */}
              <div className="mt-auto flex justify-end">
                <button type="submit" className="bg-[#008f40] hover:bg-brand-green text-white py-3.5 px-8 rounded-xl text-[0.95rem] font-bold border-none flex items-center gap-2 shadow-lg shadow-brand-green/20 cursor-pointer transition-all duration-300 hover:-translate-y-0.5">
                  Send Message
                </button>
              </div>
            </form>
          ) : (
            <div className="flex flex-col items-center justify-center text-center h-full gap-4 animate-in fade-in zoom-in duration-500">
              <div className="w-20 h-20 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green mb-2">
                <CheckCircle2 size={40} />
              </div>
              <h3 className="text-[1.6rem] font-bold text-gray-900">Message Sent!</h3>
              <p className="text-[1rem] text-gray-500 max-w-[300px] leading-relaxed">
                Thank you for reaching out. A member of our team will be in touch with you shortly.
              </p>
              <button onClick={() => setSubmitted(false)} className="mt-4 text-brand-green font-semibold hover:underline bg-transparent border-none cursor-pointer">
                Send another message
              </button>
            </div>
          )}
        </div>
        
      </div>
    </div>
  );
}
