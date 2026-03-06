import React, { useState } from 'react';
import {
    CheckCircle2, Circle, Upload, Sparkles, ChevronDown, ChevronUp,
    Image as ImageIcon, Link2, Info, ArrowRight, User, Briefcase, FileText, LayoutTemplate, Clock
} from 'lucide-react';

export default function ProfileCompletion({ onComplete, onSkip }) {
    const [activeStep, setActiveStep] = useState(1);
    const [completedSteps, setCompletedSteps] = useState([]);

    const steps = [
        { id: 1, title: "Basic Information", icon: User },
        { id: 2, title: "Skills & Expertise", icon: Briefcase },
        { id: 3, title: "About You", icon: FileText },
        { id: 4, title: "Work Experience / Portfolio", icon: LayoutTemplate },
        { id: 5, title: "Availability & Pricing", icon: Clock },
    ];

    const markCompletedAndNext = (stepId) => {
        if (!completedSteps.includes(stepId)) {
            setCompletedSteps([...completedSteps, stepId]);
        }
        if (stepId < 5) setActiveStep(stepId + 1);
    };

    return (
        <div className="bg-[#F4F4F0] min-h-[calc(100vh-80px)] font-sans text-[#0A0A0A] pb-32 pt-12">
            <div className="max-w-[1200px] mx-auto px-6">

                {/* 1. Top Section */}
                <div className="mb-10 text-center max-w-2xl mx-auto">
                    <h1 className="text-3xl md:text-4xl tracking-tight font-black uppercase mb-3">Complete Your Freelancer Profile</h1>
                    <p className="text-gray-500 font-medium mb-8">A complete profile helps you get more clients and better projects.</p>

                    <div className="flex flex-col items-center">
                        <div className="w-full max-w-md h-2 bg-gray-200 rounded-full mb-2 overflow-hidden relative">
                            <div className="absolute top-0 left-0 h-full bg-indigo-600 rounded-full transition-all duration-1000 ease-out" style={{ width: '65%' }}></div>
                        </div>
                        <div className="flex justify-between w-full max-w-md text-xs font-bold uppercase tracking-widest text-gray-400">
                            <span>65% Completed</span>
                            <span className="flex items-center gap-1"><Info size={12} /> Edit anytime later</span>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-8">

                    {/* 2. Step-Based Sections */}
                    <div className="flex-1 flex flex-col gap-4">
                        {/* Step 1 */}
                        <StepCard
                            step={1}
                            title="Basic Information"
                            isActive={activeStep === 1}
                            isCompleted={completedSteps.includes(1)}
                            onClick={() => setActiveStep(1)}
                        >
                            <div className="flex flex-col md:flex-row gap-8 items-start">
                                <div className="flex flex-col items-center gap-3">
                                    <div className="w-24 h-24 bg-gray-50 border border-dashed border-gray-300 rounded-full flex flex-col items-center justify-center cursor-pointer hover:bg-indigo-50 hover:border-indigo-200 transition-colors relative group">
                                        <Upload className="text-gray-400 group-hover:text-indigo-600 mb-1" size={20} />
                                    </div>
                                    <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Upload Photo</span>
                                </div>
                                <div className="flex-1 w-full space-y-5">
                                    <div>
                                        <label className="block text-xs font-bold tracking-widest uppercase text-gray-600 mb-2">Professional Title</label>
                                        <input type="text" placeholder="e.g. UI/UX Designer | 3+ years experience" className="w-full border border-black/10 rounded-xl px-4 py-3 text-sm font-medium focus:outline-none focus:border-indigo-600 focus:ring-4 focus:ring-indigo-600/10 transition-all placeholder-gray-300" />
                                        <p className="text-[11px] text-indigo-600 font-bold mt-2 flex items-center gap-1.5 bg-indigo-50 inline-flex px-2 py-1 rounded-md"><Info size={14} /> Clients decide in seconds. A clear title builds trust.</p>
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold tracking-widest uppercase text-gray-600 mb-2">Location (Optional)</label>
                                        <input type="text" placeholder="City, Country" className="w-full border border-black/10 rounded-xl px-4 py-3 text-sm font-medium focus:outline-none focus:border-indigo-600 focus:ring-4 focus:ring-indigo-600/10 transition-all placeholder-gray-300" />
                                    </div>
                                    <button onClick={() => markCompletedAndNext(1)} className="mt-2 bg-[#0A0A0A] text-white px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest hover:bg-indigo-600 hover:shadow-lg hover:shadow-indigo-600/20 hover:-translate-y-0.5 transition-all w-fit">Continue</button>
                                </div>
                            </div>
                        </StepCard>

                        {/* Step 2 */}
                        <StepCard
                            step={2}
                            title="Skills & Expertise"
                            isActive={activeStep === 2}
                            isCompleted={completedSteps.includes(2)}
                            onClick={() => setActiveStep(2)}
                        >
                            <div className="space-y-6">
                                <div>
                                    <label className="block text-xs font-bold tracking-widest uppercase text-gray-600 mb-3">Add Your Skills</label>
                                    <div className="flex flex-wrap gap-2 mb-3">
                                        <span className="bg-[#0A0A0A] text-white px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-sm">Figma <span className="cursor-pointer text-gray-400 hover:text-white">&times;</span></span>
                                        <span className="bg-[#0A0A0A] text-white px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-sm">Wireframing <span className="cursor-pointer text-gray-400 hover:text-white">&times;</span></span>
                                    </div>
                                    <input type="text" placeholder="Type a skill and press Enter (e.g. Prototyping)" className="w-full border border-black/10 rounded-xl px-4 py-3 text-sm font-medium focus:outline-none focus:border-indigo-600 focus:ring-4 focus:ring-indigo-600/10 transition-all placeholder-gray-300" />
                                </div>

                                <div>
                                    <label className="block text-xs font-bold tracking-widest uppercase text-gray-600 mb-3">Skill Level</label>
                                    <div className="flex gap-3">
                                        <button className="flex-1 border border-black/10 bg-white rounded-xl py-3 text-sm font-bold hover:border-black/30 transition-colors">Beginner</button>
                                        <button className="flex-1 border-2 border-indigo-600 bg-indigo-50/50 rounded-xl py-3 text-sm font-bold text-indigo-700 shadow-sm transition-colors">Intermediate</button>
                                        <button className="flex-1 border border-black/10 bg-white rounded-xl py-3 text-sm font-bold hover:border-black/30 transition-colors">Expert</button>
                                    </div>
                                </div>
                                <p className="text-[11px] text-orange-600 font-bold flex items-center gap-1.5 bg-orange-50 inline-flex px-2 py-1 rounded-md"><Info size={14} /> Only add skills you are confident in.</p>
                                <div className="pt-2">
                                    <button onClick={() => markCompletedAndNext(2)} className="bg-[#0A0A0A] text-white px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest hover:bg-indigo-600 hover:shadow-lg hover:shadow-indigo-600/20 hover:-translate-y-0.5 transition-all w-fit">Continue</button>
                                </div>
                            </div>
                        </StepCard>

                        {/* Step 3 */}
                        <StepCard
                            step={3}
                            title="About You"
                            isActive={activeStep === 3}
                            isCompleted={completedSteps.includes(3)}
                            onClick={() => setActiveStep(3)}
                        >
                            <div className="space-y-4">
                                <div className="flex justify-between items-center mb-2">
                                    <label className="block text-xs font-bold tracking-widest uppercase text-gray-600">Short Bio</label>
                                    <button className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-indigo-600 bg-indigo-50 px-3 py-1.5 rounded-full hover:bg-indigo-100 transition-colors border border-indigo-100">
                                        <Sparkles size={14} /> Help me write
                                    </button>
                                </div>
                                <textarea rows={4} placeholder="Hi! I'm a UI/UX designer specializing in SaaS applications. I help startups turn complex ideas into simple interfaces..." className="w-full border border-black/10 rounded-xl px-4 py-3 text-sm font-medium focus:outline-none focus:border-indigo-600 focus:ring-4 focus:ring-indigo-600/10 transition-all resize-none placeholder-gray-300"></textarea>
                                <div className="flex justify-between items-center mt-2">
                                    <p className="text-[11px] text-indigo-600 font-bold flex items-center gap-1.5 bg-indigo-50 inline-flex px-2 py-1 rounded-md"><Info size={14} /> Explain what you do and how you help clients.</p>
                                    <span className="text-[10px] font-bold text-gray-400 tracking-wider">120 / 500</span>
                                </div>
                                <div className="pt-2">
                                    <button onClick={() => markCompletedAndNext(3)} className="bg-[#0A0A0A] text-white px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest hover:bg-indigo-600 hover:shadow-lg hover:shadow-indigo-600/20 hover:-translate-y-0.5 transition-all w-fit">Continue</button>
                                </div>
                            </div>
                        </StepCard>

                        {/* Step 4 */}
                        <StepCard
                            step={4}
                            title="Work Experience / Portfolio"
                            isActive={activeStep === 4}
                            isCompleted={completedSteps.includes(4)}
                            onClick={() => setActiveStep(4)}
                        >
                            <div className="space-y-4">
                                <label className="block text-xs font-bold tracking-widest uppercase text-gray-600 mb-2">Add Previous Work (Recommended)</label>

                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-2">
                                    <div className="aspect-video bg-gray-50 border border-dashed border-gray-300 rounded-2xl flex flex-col items-center justify-center cursor-pointer hover:bg-indigo-50 hover:border-indigo-200 transition-all text-gray-400 group">
                                        <ImageIcon size={24} className="mb-2 group-hover:text-indigo-600 transition-colors" />
                                        <span className="text-[10px] uppercase tracking-widest font-bold group-hover:text-indigo-700">Upload Image</span>
                                    </div>
                                    <div className="aspect-video bg-gray-50 border border-dashed border-gray-300 rounded-2xl flex flex-col items-center justify-center cursor-pointer hover:bg-indigo-50 hover:border-indigo-200 transition-all text-gray-400 group">
                                        <Link2 size={24} className="mb-2 group-hover:text-indigo-600 transition-colors" />
                                        <span className="text-[10px] uppercase tracking-widest font-bold group-hover:text-indigo-700">Add Link</span>
                                    </div>
                                </div>

                                <div className="bg-orange-50/50 border border-orange-100 rounded-2xl p-4 flex gap-3">
                                    <Info className="text-orange-500 shrink-0 mt-0.5" size={18} />
                                    <div>
                                        <h4 className="text-[13px] font-black tracking-tight text-[#0A0A0A] mb-1">No experience?</h4>
                                        <p className="text-xs text-gray-500 font-medium leading-relaxed">That's okay! Even sample projects, personal concepts, or related coursework can help clients understand your style.</p>
                                    </div>
                                </div>
                                <div className="pt-2">
                                    <button onClick={() => markCompletedAndNext(4)} className="bg-[#0A0A0A] text-white px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest hover:bg-indigo-600 hover:shadow-lg hover:shadow-indigo-600/20 hover:-translate-y-0.5 transition-all w-fit">Continue</button>
                                </div>
                            </div>
                        </StepCard>

                        {/* Step 5 */}
                        <StepCard
                            step={5}
                            title="Availability & Pricing"
                            isActive={activeStep === 5}
                            isCompleted={completedSteps.includes(5)}
                            onClick={() => setActiveStep(5)}
                        >
                            <div className="space-y-6">
                                <div>
                                    <label className="block text-xs font-bold tracking-widest uppercase text-gray-600 mb-3">Availability</label>
                                    <div className="flex flex-col sm:flex-row gap-3">
                                        <button className="flex-1 border border-black/10 bg-white rounded-xl py-3 text-sm font-bold hover:border-black/30 transition-colors">Full-time <span className="text-gray-400 text-xs font-medium ml-1">(30+ hrs)</span></button>
                                        <button className="flex-1 border-2 border-indigo-600 bg-indigo-50/50 rounded-xl py-3 text-sm font-bold text-indigo-700 shadow-sm transition-colors">Part-time <span className="font-medium text-xs ml-1 opacity-75">(&lt;30 hrs)</span></button>
                                        <button className="flex-1 border border-black/10 bg-white rounded-xl py-3 text-sm font-bold hover:border-black/30 transition-colors">As Needed</button>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs font-bold tracking-widest uppercase text-gray-600 mb-3">Expected Hourly Rate</label>
                                    <div className="flex items-center gap-4">
                                        <div className="relative">
                                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-black">$</span>
                                            <input type="number" placeholder="25" className="w-32 border border-black/10 rounded-xl py-3 pl-8 pr-4 text-base font-bold text-[#0A0A0A] focus:outline-none focus:border-indigo-600 focus:ring-4 focus:ring-indigo-600/10 transition-all placeholder-gray-300" />
                                        </div>
                                        <span className="text-[11px] text-gray-500 font-bold bg-gray-100/50 px-3 py-2 rounded-lg border border-gray-200/50">Suggested range: $20 - $40</span>
                                    </div>
                                </div>
                                <p className="text-[11px] text-indigo-600 font-bold flex items-center gap-1.5 bg-indigo-50 inline-flex px-2 py-1 rounded-md"><Info size={14} /> You can change pricing anytime.</p>
                                <div className="pt-2">
                                    <button onClick={() => markCompletedAndNext(5)} className="bg-emerald-500 text-white px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest hover:bg-emerald-600 hover:shadow-lg hover:shadow-emerald-500/20 hover:-translate-y-0.5 transition-all w-fit flex items-center gap-2"><CheckCircle2 size={16} /> Finish Profile</button>
                                </div>
                            </div>
                        </StepCard>

                    </div>

                    {/* 3. Right Side */}
                    <div className="w-full lg:w-[360px] shrink-0">
                        <div className="sticky top-28 space-y-6">

                            {/* Live Preview Card */}
                            <div className="bg-white border border-black/5 rounded-3xl p-6 shadow-sm">
                                <h3 className="text-[10px] font-black tracking-widest uppercase text-gray-400 mb-5 pb-3 border-b border-gray-100 flex items-center gap-2"><User size={14} /> Profile Preview</h3>
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-16 h-16 bg-gray-50 border border-gray-100 rounded-full flex items-center justify-center shrink-0">
                                        <User size={24} className="text-gray-300" />
                                    </div>
                                    <div className="flex-1 w-full">
                                        <div className="h-4 w-3/4 bg-gray-200 rounded-md mb-2"></div>
                                        <div className="h-3 w-1/2 bg-gray-100 rounded-md"></div>
                                    </div>
                                </div>
                                <div className="space-y-2.5 mb-6">
                                    <div className="h-3 w-full bg-gray-50 rounded-md"></div>
                                    <div className="h-3 w-full bg-gray-50 rounded-md"></div>
                                    <div className="h-3 w-4/5 bg-gray-50 rounded-md"></div>
                                </div>
                                <div className="flex gap-2">
                                    <div className="h-6 w-20 bg-indigo-50 rounded-full"></div>
                                    <div className="h-6 w-24 bg-indigo-50 rounded-full"></div>
                                </div>
                            </div>

                            {/* Checklist Card */}
                            <div className="bg-white border border-black/5 rounded-3xl p-6 shadow-sm">
                                <h3 className="text-[10px] font-black tracking-widest uppercase text-gray-400 mb-5 pb-3 border-b border-gray-100">Completion Checklist</h3>
                                <ul className="space-y-4 mb-6">
                                    <ChecklistItem text="Basic Information" completed={completedSteps.includes(1)} />
                                    <ChecklistItem text="Skills added" completed={completedSteps.includes(2)} />
                                    <ChecklistItem text="About You written" completed={completedSteps.includes(3)} />
                                    <ChecklistItem text="Portfolio (Optional)" completed={false} />
                                    <ChecklistItem text="Pricing & Availability" completed={false} />
                                </ul>

                                <div className="bg-indigo-50/70 border border-indigo-100/50 rounded-2xl p-4 flex gap-3 items-start">
                                    <Sparkles className="text-indigo-500 shrink-0 mt-0.5" size={16} />
                                    <p className="text-[13px] font-bold tracking-tight text-indigo-700 leading-snug">Profiles with 100% completion get <span className="text-indigo-900 border-b border-indigo-200">3x more views</span>.</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                {/* 4. Bottom Actions */}
                <div className="mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-6 max-w-[830px]">
                    <div className="flex items-center gap-2 text-[11px] font-bold text-gray-400 uppercase tracking-widest bg-gray-100/50 px-3 py-1.5 rounded-lg border border-black/5">
                        <Info size={14} /> You can complete later from settings.
                    </div>
                    <div className="flex items-center gap-6">
                        <button onClick={onSkip} className="text-[11px] font-black uppercase tracking-widest text-gray-400 hover:text-[#0A0A0A] transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-[#0A0A0A] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left pb-1">Skip for now</button>
                        <button onClick={onComplete} className="bg-[#0A0A0A] hover:bg-indigo-600 text-white px-8 py-4 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-300 flex items-center gap-3 shadow-[0_10px_20px_-10px_rgba(0,0,0,0.3)] hover:shadow-indigo-500/25 hover:-translate-y-0.5">
                            Save & Continue <ArrowRight size={16} />
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
}

function ChecklistItem({ text, completed }) {
    return (
        <li className={`flex items-center gap-3 text-sm font-bold ${completed ? 'text-gray-900' : 'text-gray-400'}`}>
            {completed ? <CheckCircle2 className="text-indigo-600 shrink-0" size={18} /> : <Circle className="text-gray-200 shrink-0" size={18} />}
            <span className={completed ? 'line-through decoration-gray-300 decoration-2 opacity-50' : ''}>{text}</span>
        </li>
    );
}

function StepCard({ step, title, isActive, isCompleted, onClick, children }) {
    return (
        <div className={`bg-white border rounded-3xl transition-all duration-500 overflow-hidden ${isActive ? 'border-indigo-200 shadow-[0_15px_40px_-10px_rgba(79,70,229,0.15)] ring-4 ring-indigo-50/50' : 'border-black/5 hover:border-black/10'}`}>
            <button
                onClick={onClick}
                className="w-full px-8 py-6 flex items-center justify-between bg-white focus:outline-none group"
            >
                <div className="flex items-center gap-5">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-[13px] font-black transition-colors ${isCompleted ? 'bg-indigo-600 text-white' : isActive ? 'bg-indigo-100 text-indigo-700' : 'bg-gray-100 text-gray-400 group-hover:bg-gray-200'}`}>
                        {isCompleted ? <CheckCircle2 size={18} /> : step}
                    </div>
                    <h2 className={`font-black text-xl tracking-tight transition-colors ${isActive || isCompleted ? 'text-[#0A0A0A]' : 'text-gray-400 group-hover:text-gray-700'}`}>{title}</h2>
                </div>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isActive ? 'bg-indigo-50 text-indigo-600' : 'text-gray-300 group-hover:bg-gray-50 group-hover:text-gray-500'}`}>
                    {isActive ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </div>
            </button>
            <div className={`transition-all duration-500 ease-in-out origin-top ${isActive ? 'max-h-[1000px] opacity-100 scale-y-100' : 'max-h-0 opacity-0 scale-y-95 overflow-hidden'}`}>
                <div className="px-8 pb-8 pt-2 border-t border-gray-50">
                    {children}
                </div>
            </div>
        </div>
    );
}
