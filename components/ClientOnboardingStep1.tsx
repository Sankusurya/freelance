"use client";

import React, { useState, useEffect } from "react";
import { ArrowRight, Layout, PenTool, MonitorSmartphone, Target, Sparkles } from "lucide-react";

export default function ClientOnboardingStep1() {
    const [selectedOption, setSelectedOption] = useState(null);

    // Scroll Reveal Hook for smooth entry
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('reveal-active');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.reveal-elem').forEach(el => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    const options = [
        { id: 'web-app', title: 'Website or App', icon: <MonitorSmartphone size={24} strokeWidth={1.5} />, desc: 'Custom software, SaaS, or complex platforms.' },
        { id: 'ui-ux', title: 'UI / UX Design', icon: <Layout size={24} strokeWidth={1.5} />, desc: 'Wireframes, complete redesigns, or user research.' },
        { id: 'branding', title: 'Branding', icon: <PenTool size={24} strokeWidth={1.5} />, desc: 'Logos, brand identity, and visual guidelines.' },
        { id: 'marketing', title: 'Marketing', icon: <Target size={24} strokeWidth={1.5} />, desc: 'SEO, performance ads, or growth strategy.' },
        { id: 'other', title: 'Something else', icon: <Sparkles size={24} strokeWidth={1.5} />, desc: 'Data science, 3D animation, or custom requests.' },
    ];

    return (
        <div className="w-full min-h-[100svh] bg-[#F4F4F0] text-[#0A0A0A] font-sans overflow-x-hidden flex flex-col pt-8 px-6">

            <style>{`
                .reveal-elem {
                    opacity: 0;
                    transform: translateY(20px);
                    transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
                }
                .reveal-active {
                    opacity: 1;
                    transform: translateY(0);
                }
                .delay-1 { transition-delay: 0.1s; }
                
                /* Noise Overlay */
                .bg-noise {
                    position: fixed;
                    top: 0; left: 0; width: 100vw; height: 100vh;
                    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
                    opacity: 0.04;
                    mix-blend-mode: multiply;
                    pointer-events: none;
                    z-index: 0;
                }

                /* Architectural Grid Lines */
                .bg-grid {
                    background-image: 
                        linear-gradient(to right, rgba(0,0,0,0.03) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(0,0,0,0.03) 1px, transparent 1px);
                    background-size: 80px 80px;
                    position: fixed;
                    top: 0; left: 0; width: 100vw; height: 100vh;
                    z-index: 1;
                    pointer-events: none;
                }
            `}</style>

            <div className="bg-grid"></div>
            <div className="bg-noise"></div>

            {/* Simple Header */}
            <header className="w-full flex items-center justify-between mb-16 relative z-10 px-4 md:px-8">
                <div className="text-2xl font-black tracking-tighter uppercase flex items-center gap-2 cursor-pointer text-[#0A0A0A]">
                    <div className="w-4 h-4 bg-indigo-600 rounded-sm"></div>
                    Eduprova
                </div>
            </header>

            {/* Main Content Area */}
            <main className="flex-1 flex flex-col items-center w-full max-w-[1200px] mx-auto relative z-10 pb-32 px-4">

                <div className="text-center mb-16 reveal-elem w-full">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-[-0.03em] uppercase mb-4 text-[#0A0A0A]">
                        What do you want <br />
                        <span className="font-serif italic font-light lowercase text-indigo-600 tracking-normal">to build?</span>
                    </h1>
                </div>

                {/* Selection Options Grid */}
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 reveal-elem delay-1">
                    {options.map((option) => {
                        const isSelected = selectedOption === option.id;
                        return (
                            <div
                                key={option.id}
                                onClick={() => setSelectedOption(option.id)}
                                className={`
                                    relative p-6 rounded-[2rem] border-2 cursor-pointer transition-all duration-300
                                    flex flex-col gap-4 group overflow-hidden bg-white
                                    ${isSelected
                                        ? 'border-indigo-600 shadow-[0_20px_40px_-10px_rgba(79,70,229,0.2)] scale-[1.02] z-10'
                                        : 'border-white hover:border-black/5 hover:shadow-lg hover:scale-[1.01]'
                                    }
                                `}
                            >
                                {/* Selection Indicator Dot */}
                                <div className="absolute top-6 right-6 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors">
                                    <div className={`w-2.5 h-2.5 rounded-full transition-transform duration-300 ${isSelected ? 'bg-indigo-600 scale-100' : 'bg-transparent scale-0'}`}></div>
                                    <div className={`absolute inset-0 rounded-full border-2 ${isSelected ? 'border-transparent' : 'border-gray-200'}`}></div>
                                </div>

                                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors ${isSelected ? 'bg-indigo-50 text-indigo-600' : 'bg-gray-50 text-gray-400 group-hover:bg-gray-100 group-hover:text-black'}`}>
                                    {option.icon}
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold tracking-tight mb-2 text-[#0A0A0A] uppercase">{option.title}</h3>
                                    <p className="text-sm font-medium text-gray-500">{option.desc}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Continue Action */}
                <div className={`mt-16 transition-all duration-500 flex justify-center w-full ${selectedOption ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0 pointer-events-none'}`}>
                    <button className="bg-[#0A0A0A] text-white px-10 py-5 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-indigo-600 hover:scale-[1.05] transition-all duration-300 flex items-center gap-3 shadow-xl shadow-black/10 group">
                        Continue <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>

            </main>
        </div>
    );
}
