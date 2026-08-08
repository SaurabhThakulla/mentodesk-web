import React, { useState } from 'react';
import { 
  Monitor, 
  CheckCircle2, 
  CreditCard, 
  BookOpen, 
  Activity,
  ArrowUpRight
} from 'lucide-react';

export default function DashboardPreview() {
  const [activeConsoleTab, setActiveConsoleTab] = useState('smart-campus');

  const tabData = {
    'smart-campus': {
      label: 'Campus Ops',
      icon: Monitor,
      metrics: [
        { label: 'Desk Occupancy', value: '89.2%', change: '+14.5% peak', color: '#00b853' },
        { label: 'Turnstile Sync', value: '42 Bldgs', change: 'Biometric active', color: '#0284c7' },
        { label: 'Facility Load', value: '1,240 kW', change: 'Optimized', color: '#7c3aed' }
      ],
      feed: [
        { text: 'Biometric Sync: Science Complex Gate #3', time: 'Just now', iconColor: '#00b853' },
        { text: 'Smart Desk Allocation: Hall B (240 Desks Assigned)', time: '1m ago', iconColor: '#0284c7' },
        { text: 'HVAC Sensor Auto-Adjust: Energy saved 12%', time: '4m ago', iconColor: '#7c3aed' }
      ]
    },
    'fee-automation': {
      label: 'Fee Automation',
      icon: CreditCard,
      metrics: [
        { label: 'Fee Reconciled', value: '$984,500', change: '99.8% recovery', color: '#00b853' },
        { label: 'Auto Receipts', value: '4,120 Sent', change: 'Zero delay', color: '#0284c7' },
        { label: 'Gateway SLA', value: '99.99%', change: 'Stripe & Razorpay', color: '#7c3aed' }
      ],
      feed: [
        { text: 'Payment Cleared: $1,450 Tuition Fee (Ref #89412)', time: 'Just now', iconColor: '#00b853' },
        { text: 'DBS Bank Reconciliation: Batch #410 Approved', time: '2m ago', iconColor: '#0284c7' },
        { text: 'Automated Installment Reminder: 450 SMS Dispatched', time: '6m ago', iconColor: '#7c3aed' }
      ]
    },
    'lms-sessions': {
      label: 'Custom LMS',
      icon: BookOpen,
      metrics: [
        { label: 'Active Learners', value: '14,890', change: '+22.4% live', color: '#00b853' },
        { label: 'AI Quiz Graded', value: '3,450', change: 'Avg 1.2s / paper', color: '#0284c7' },
        { label: 'Stream Health', value: '4K Ultra', change: '0.01ms Latency', color: '#7c3aed' }
      ],
      feed: [
        { text: 'Live Lecture Stream: CS-301 Algorithms (840 students)', time: 'Just now', iconColor: '#00b853' },
        { text: 'AI Assignment Grader: 120 Submissions Processed', time: '3m ago', iconColor: '#0284c7' },
        { text: 'Proctored Exam: Zero integrity flags detected', time: '5m ago', iconColor: '#7c3aed' }
      ]
    }
  };

  const currentTabInfo = tabData[activeConsoleTab];

  return (
    <div className="bg-white border border-gray-200/90 rounded-[18px] p-6 relative shadow-[0_20px_50px_-15px_rgba(0,0,0,0.1),0_0_0_1px_rgba(0,0,0,0.02)]">
      {/* Console Header Bar */}
      <div className="flex items-center justify-between mb-5 pb-3.5 border-b border-gray-200">
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
          <span className="text-[0.8rem] font-semibold text-gray-500 ml-1">
            MentoDesk OS Control Console v4.2
          </span>
        </div>
        <div className="inline-flex items-center gap-1.5 text-[0.75rem] font-bold text-brand-green bg-brand-green/10 px-2.5 py-1 rounded-full border border-brand-green/20">
          <div className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse shadow-[0_0_0_0_rgba(0,184,83,0.7)]"></div>
          <span>System Live</span>
        </div>
      </div>

      {/* Console Tabs */}
      <div className="flex gap-1.5 bg-gray-100 p-1 rounded-xl mb-5 overflow-x-auto hide-scrollbar">
        {Object.keys(tabData).map((key) => {
          const item = tabData[key];
          const IconComp = item.icon;
          const isActive = activeConsoleTab === key;
          return (
            <button
              key={key}
              onClick={() => setActiveConsoleTab(key)}
              className={`flex-1 min-w-max flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-[0.78rem] font-semibold border-none cursor-pointer transition-all duration-200 whitespace-nowrap ${
                isActive 
                  ? 'bg-white text-brand-green shadow-sm' 
                  : 'bg-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              <IconComp size={14} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-5">
        {currentTabInfo.metrics.map((m, idx) => (
          <div key={idx} className="p-3.5 bg-slate-50 border border-gray-200 rounded-xl">
            <div className="text-[0.72rem] text-gray-500 mb-1 font-medium">{m.label}</div>
            <div className="text-[1.3rem] font-extrabold text-gray-900 tracking-tight">{m.value}</div>
            <div className="text-[0.7rem] font-semibold mt-0.5" style={{ color: m.color }}>
              {m.change}
            </div>
          </div>
        ))}
      </div>

      {/* Real-Time Feed Container */}
      <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="text-[0.8rem] font-bold text-gray-900 flex items-center gap-1.5">
            <Activity size={15} className="text-brand-green" />
            <span>Real-Time Operations Feed</span>
          </div>
          <span className="text-[0.72rem] text-brand-green font-semibold flex items-center gap-0.5">
            Auto-Sync <ArrowUpRight size={12} />
          </span>
        </div>

        <div className="flex flex-col gap-2.5">
          {currentTabInfo.feed.map((f, idx) => (
            <div key={idx} className={`flex items-center justify-between text-[0.8rem] text-gray-600 py-1.5 ${
              idx === currentTabInfo.feed.length - 1 ? 'border-none' : 'border-b border-dashed border-gray-200/70'
            }`}>
              <span className="flex items-center gap-2">
                <CheckCircle2 size={14} color={f.iconColor} />
                {f.text}
              </span>
              <span className="text-[0.7rem] text-gray-500 font-medium">{f.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
