import React, { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle2, Send, Instagram, Linkedin } from 'lucide-react';
import { CONTACT_INFO } from '../config/contact';

export default function ContactView({ onRequestDemo }) {
  const [submitted, setSubmitted] = useState(false);
  const [inquiryType, setInquiryType] = useState('Smart Campus');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <div className="relative min-h-screen py-16 lg:py-24 overflow-hidden bg-gray-50/50">
      
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-green/20 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[50%] h-[50%] bg-[#00b853]/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="container relative z-10 flex flex-col gap-12">
        {/* Header Section */}
        <div className="text-center max-w-[700px] mx-auto mb-4">
          <h2 className="text-[2.5rem] lg:text-[3rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 mb-4 tracking-tight">
            Get in Touch
          </h2>
          <p className="text-[1.1rem] text-gray-500 font-medium">
            Have questions about our enterprise solutions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        {/* Main Card Container */}
        <div className="bg-white/80 backdrop-blur-xl rounded-[2.5rem] p-3 sm:p-4 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] flex flex-col md:flex-row w-full max-w-[1100px] mx-auto border border-white/50">
          
          {/* Left Column: Contact Info (Dark Card) */}
          <div className="bg-gradient-to-br from-[#008f40] via-[#00a34a] to-[#05c45e] rounded-[2rem] p-10 lg:p-12 relative overflow-hidden text-white w-full md:w-[40%] min-h-[550px] flex flex-col shrink-0 shadow-inner">
            
            {/* Decorative Glass Circles */}
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-2xl"></div>
            <div className="absolute top-10 -right-10 w-32 h-32 bg-white/20 rounded-full blur-xl"></div>
            
            <div className="relative z-10 flex-1 flex flex-col h-full">
              <h3 className="text-3xl font-bold mb-4 tracking-tight">Contact Info</h3>
              <p className="text-[1rem] text-white/90 mb-12 max-w-[280px] leading-relaxed font-medium">
                Fill up the form and our team will get back to you within 24 hours.
              </p>
              
              <div className="flex flex-col gap-8 flex-1">
                <div className="flex items-center gap-5 group cursor-default">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors backdrop-blur-md">
                    <Phone size={22} className="text-white" />
                  </div>
                  <span className="text-[1.05rem] font-medium">{CONTACT_INFO.phone}</span>
                </div>
                <div className="flex items-center gap-5 group cursor-default">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors backdrop-blur-md">
                    <Mail size={22} className="text-white" />
                  </div>
                  <a href={`mailto:${CONTACT_INFO.email}`} className="text-[1.05rem] font-medium text-white hover:text-white/80 transition-colors no-underline">
                    {CONTACT_INFO.email}
                  </a>
                </div>
                <div className="flex items-start gap-5 group cursor-default">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors backdrop-blur-md shrink-0">
                    <MapPin size={22} className="text-white" />
                  </div>
                  <span className="text-[1.05rem] font-medium leading-relaxed pt-1">
                    {CONTACT_INFO.address.split(', ').map((line, i) => (
                      <React.Fragment key={i}>
                        {line}
                        {i !== CONTACT_INFO.address.split(', ').length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </span>
                </div>
              </div>

              {/* Socials */}
              <div className="mt-auto pt-10">
                <div className="flex items-center gap-4">
                  <a href={CONTACT_INFO.socials.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-[#008f40] transition-all duration-300 text-white backdrop-blur-md hover:-translate-y-1">
                    <Instagram size={18} />
                  </a>
                  <a href={CONTACT_INFO.socials.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-[#008f40] transition-all duration-300 text-white backdrop-blur-md hover:-translate-y-1">
                    <Linkedin size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="flex-1 p-8 sm:p-12 lg:p-14 bg-transparent relative">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col h-full animate-in fade-in duration-500">
                
                {/* Grid for Name & Contact Inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-12 mb-14">
                  {[
                    { id: 'firstName', label: 'First Name', type: 'text' },
                    { id: 'lastName', label: 'Last Name', type: 'text' },
                    { id: 'email', label: 'Email', type: 'email' },
                    { id: 'phone', label: 'Phone', type: 'tel' },
                  ].map((field) => (
                    <div key={field.id} className="relative group">
                      <input 
                        type={field.type} 
                        id={field.id} 
                        required 
                        className="w-full bg-transparent border-0 border-b-2 border-gray-200 px-0 py-2.5 text-[1rem] text-gray-900 focus:outline-none focus:ring-0 focus:border-brand-green transition-all peer placeholder-transparent" 
                        placeholder={field.label} 
                      />
                      <label 
                        htmlFor={field.id} 
                        className="absolute left-0 -top-5 text-[0.8rem] font-bold text-gray-500 transition-all peer-placeholder-shown:text-[1rem] peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-placeholder-shown:font-normal peer-focus:-top-5 peer-focus:text-[0.8rem] peer-focus:font-bold peer-focus:text-brand-green cursor-text"
                      >
                        {field.label}
                      </label>
                    </div>
                  ))}
                </div>

                {/* Radio Group - Pill style */}
                <div className="mb-14">
                  <p className="text-[0.95rem] font-bold text-gray-900 mb-5">What service do you need?</p>
                  <div className="flex flex-wrap gap-3">
                    {['Smart Campus', 'Fee Management', 'Custom LMS', 'Other'].map((type) => (
                      <label key={type} className="cursor-pointer">
                        <input 
                          type="radio" 
                          name="inquiryType" 
                          value={type} 
                          checked={inquiryType === type} 
                          onChange={(e) => setInquiryType(e.target.value)} 
                          className="hidden" 
                        />
                        <div className={`px-5 py-2.5 rounded-full text-[0.9rem] font-medium transition-all duration-300 border ${inquiryType === type ? 'bg-brand-green text-white border-brand-green shadow-md shadow-brand-green/20' : 'bg-gray-50 text-gray-600 border-gray-200 hover:bg-gray-100 hover:border-gray-300'}`}>
                          {type}
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Message Input */}
                <div className="relative group mb-12">
                  <textarea 
                    id="message" 
                    required 
                    rows={1} 
                    className="w-full bg-transparent border-0 border-b-2 border-gray-200 px-0 py-2.5 text-[1rem] text-gray-900 focus:outline-none focus:ring-0 focus:border-brand-green transition-all peer placeholder-transparent resize-none" 
                    placeholder="Message"
                  ></textarea>
                  <label 
                    htmlFor="message" 
                    className="absolute left-0 -top-5 text-[0.8rem] font-bold text-gray-500 transition-all peer-placeholder-shown:text-[1rem] peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-placeholder-shown:font-normal peer-focus:-top-5 peer-focus:text-[0.8rem] peer-focus:font-bold peer-focus:text-brand-green cursor-text"
                  >
                    Message
                  </label>
                </div>

                {/* Submit Button */}
                <div className="mt-auto flex justify-end">
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="bg-brand-green hover:bg-[#007a36] text-white py-4 px-10 rounded-full text-[1rem] font-bold border-none flex items-center justify-center gap-3 shadow-xl shadow-brand-green/20 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand-green/30 active:translate-y-0 disabled:opacity-70 disabled:cursor-not-allowed min-w-[200px]"
                  >
                    {isSubmitting ? (
                      <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    ) : (
                      <>
                        Send Message
                        <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            ) : (
              <div className="flex flex-col items-center justify-center text-center h-full gap-5 animate-in fade-in zoom-in duration-700 bg-gray-50/50 rounded-2xl p-10 border border-gray-100">
                <div className="w-24 h-24 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green mb-2 relative">
                  <div className="absolute inset-0 rounded-full bg-brand-green/20 animate-ping"></div>
                  <CheckCircle2 size={48} className="relative z-10" />
                </div>
                <h3 className="text-[2rem] font-bold text-gray-900 tracking-tight">Message Sent!</h3>
                <p className="text-[1.1rem] text-gray-500 max-w-[350px] leading-relaxed">
                  Thank you for reaching out. A member of our team will be in touch with you shortly.
                </p>
                <button 
                  onClick={() => setSubmitted(false)} 
                  className="mt-6 text-brand-green font-bold hover:text-[#007a36] bg-transparent border-none cursor-pointer flex items-center gap-2 transition-colors"
                >
                  Send another message
                </button>
              </div>
            )}
          </div>
          
        </div>
      </div>
    </div>
  );
}
