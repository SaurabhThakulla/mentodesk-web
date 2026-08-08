import React, { useState } from 'react';
import { Calculator, ArrowRight } from 'lucide-react';

export default function RoiCalculator({ onRequestDemo }) {
  const [students, setStudents] = useState(2500);
  const [tuition, setTuition] = useState(8000);

  const annualFeeVolume = students * tuition;
  const estimatedSavings = Math.round(annualFeeVolume * 0.035);
  const hoursSaved = Math.round(students * 1.8);

  return (
    <div className="bg-white border border-gray-200 rounded-3xl p-8 lg:p-10 shadow-[0_8px_30px_rgba(0,0,0,0.04)] relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-brand-green/5 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="relative z-10">
        <div className="text-[0.78rem] font-bold uppercase tracking-[0.1em] text-brand-green mb-3 flex items-center gap-2">
          <Calculator size={18} />
          Interactive ROI Estimator
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2 tracking-tight">
          Calculate Operational Cost Savings
        </h3>
        <p className="text-[0.95rem] text-gray-500 mb-10 max-w-xl">
          Estimate your institution's annual tuition recovery acceleration and administrative hour savings by switching to MentoDesk.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          {/* Left Column: Sliders */}
          <div className="flex flex-col gap-8">
            <div>
              <div className="flex justify-between items-center mb-3 text-[0.9rem] font-medium text-gray-700">
                <span>Total Active Students:</span>
                <span className="font-bold text-brand-green bg-brand-green/10 px-3 py-1 rounded-md">
                  {students.toLocaleString()} Students
                </span>
              </div>
              <input 
                type="range" 
                min="500" 
                max="25000" 
                step="500" 
                value={students} 
                onChange={(e) => setStudents(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-brand-green focus:outline-none focus:ring-2 focus:ring-brand-green/20"
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-3 text-[0.9rem] font-medium text-gray-700">
                <span>Avg Annual Tuition Fee ($):</span>
                <span className="font-bold text-brand-green bg-brand-green/10 px-3 py-1 rounded-md">
                  ${tuition.toLocaleString()} / year
                </span>
              </div>
              <input 
                type="range" 
                min="1000" 
                max="30000" 
                step="1000" 
                value={tuition} 
                onChange={(e) => setTuition(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-brand-green focus:outline-none focus:ring-2 focus:ring-brand-green/20"
              />
            </div>
          </div>

          {/* Right Column: Results Box */}
          <div className="p-8 lg:p-9 rounded-2xl bg-gradient-to-br from-brand-green/5 to-brand-green/10 border border-brand-green/20 shadow-sm relative overflow-hidden">
            <div className="text-[0.75rem] font-bold uppercase tracking-[0.1em] text-brand-green mb-2">
              Estimated Annual Return
            </div>
            
            <div className="text-4xl lg:text-5xl font-extrabold text-brand-green mb-3 tracking-tight">
              ${estimatedSavings.toLocaleString()}
            </div>
            
            <div className="text-[0.9rem] text-gray-600 font-medium mb-8">
              + {hoursSaved.toLocaleString()} Administrative Hours Saved Annually
            </div>

            <button 
              onClick={() => onRequestDemo('Custom ROI Report')} 
              className="w-full py-4 px-6 rounded-xl bg-brand-green text-white text-[0.95rem] font-bold cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(0,184,83,0.3)] flex justify-center items-center gap-2"
            >
              Get Customized ROI Audit <ArrowRight size={18} />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
