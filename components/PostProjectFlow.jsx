"use client";

import React, { useState } from "react";
import { ArrowLeft, ArrowRight, UploadCloud, File, Image as ImageIcon, X, CheckCircle2, ChevronDown, Paperclip, Link as LinkIcon, Briefcase } from "lucide-react";
import Link from 'next/link';

const STEPS = [
    { id: 1, title: "Project Basics" },
    { id: 2, title: "Project Details" },
    { id: 3, title: "Budget & Timeline" },
    { id: 4, title: "Attachments" },
    { id: 5, title: "Review & Publish" },
];

export default function PostProjectFlow() {
    const [currentStep, setCurrentStep] = useState(1);
    const [isPublished, setIsPublished] = useState(false);

    // Form Data State
    const [formData, setFormData] = useState({
        title: "",
        category: "",
        subcategory: "",
        projectType: "",
        description: "",
        skills: [],
        experienceLevel: "",
        budgetType: "",
        budgetRange: "",
        timeline: "",
        attachments: [],
        links: []
    });

    const [skillInput, setSkillInput] = useState("");
    const [linkInput, setLinkInput] = useState("");

    const handleNext = () => {
        if (currentStep < 5) setCurrentStep(prev => prev + 1);
        else setIsPublished(true);
    };

    const handleBack = () => {
        if (currentStep > 1) setCurrentStep(prev => prev - 1);
    };

    const addSkill = (e) => {
        if (e.key === 'Enter' && skillInput.trim()) {
            e.preventDefault();
            if (!formData.skills.includes(skillInput.trim())) {
                setFormData(prev => ({ ...prev, skills: [...prev.skills, skillInput.trim()] }));
            }
            setSkillInput("");
        }
    };

    const removeSkill = (skill) => {
        setFormData(prev => ({ ...prev, skills: prev.skills.filter(s => s !== skill) }));
    };

    const addLink = () => {
        if (linkInput.trim()) {
            setFormData(prev => ({ ...prev, links: [...prev.links, linkInput.trim()] }));
            setLinkInput("");
        }
    };

    const removeLink = (url) => {
        setFormData(prev => ({ ...prev, links: prev.links.filter(l => l !== url) }));
    };

    // --- Success State ---
    if (isPublished) {
        return (
            <div className="min-h-screen bg-[#FBFCFF] py-20 px-6 flex flex-col items-center justify-center font-sans">
                <div className="bg-white max-w-lg w-full rounded-3xl p-10 md:p-14 text-center shadow-[0_20px_40px_rgb(0,0,0,0.06)] border border-black/5 relative overflow-hidden">
                    <div className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
                        <CheckCircle2 size={48} strokeWidth={2.5} className="text-emerald-500" />
                    </div>
                    <h2 className="text-3xl font-black text-[#0A0A0A] mb-4 tracking-tight">Your project has been posted successfully</h2>
                    <p className="text-gray-500 font-medium mb-10 leading-relaxed">
                        Freelancers can now view and submit proposals to your project. You will be notified when bids start rolling in.
                    </p>

                    <div className="flex flex-col gap-4">
                        <Link href="/project/1" className="w-full bg-[#0A0A0A] text-white px-6 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-indigo-600 hover:shadow-lg hover:shadow-indigo-600/20 hover:-translate-y-0.5 transition-all flex items-center justify-center">
                            View Project
                        </Link>
                        <Link href="/project/1" className="w-full bg-white text-[#0A0A0A] border border-black/10 px-6 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:border-black/30 transition-colors flex items-center justify-center">
                            Manage Proposals
                        </Link>
                        <button onClick={() => { setIsPublished(false); setCurrentStep(1); setFormData({ ...formData, title: "", description: "" }); }} className="mt-4 text-[11px] font-black uppercase tracking-widest text-gray-400 hover:text-[#0A0A0A] transition-colors">
                            Post Another Project
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    // --- Stepper UI ---
    return (
        <div className="min-h-screen bg-[#FBFCFF] pb-24 font-sans relative">
            {/* Header / Stepper area */}
            <div className="sticky top-0 z-40 bg-white/80 backdrop-blur-xl border-b border-black/5 py-6 px-6 shadow-xs">
                <div className="max-w-[1000px] mx-auto">
                    <div className="flex items-center justify-between mb-8">
                        <div className="text-2xl font-black tracking-tighter uppercase flex items-center gap-2 text-[#0A0A0A]">
                            <div className="w-4 h-4 bg-indigo-600 rounded-sm"></div>
                            Eduprova
                        </div>
                        <button className="text-sm font-bold text-gray-400 hover:text-[#0A0A0A] transition-colors flex items-center gap-2">
                            <X size={18} /> Cancel
                        </button>
                    </div>

                    <div className="relative">
                        {/* Progress Line */}
                        <div className="absolute top-1/2 left-0 w-full h-[3px] bg-gray-100 -translate-y-1/2 rounded-full z-0"></div>
                        <div
                            className="absolute top-1/2 left-0 h-[3px] bg-indigo-600 -translate-y-1/2 rounded-full z-0 transition-all duration-500 ease-out"
                            style={{ width: `${((currentStep - 1) / (STEPS.length - 1)) * 100}%` }}
                        ></div>

                        {/* Steps */}
                        <div className="flex justify-between relative z-10">
                            {STEPS.map((step) => {
                                const isActive = currentStep === step.id;
                                const isCompleted = currentStep > step.id;
                                return (
                                    <div key={step.id} className="flex flex-col items-center gap-3">
                                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 border-2 ${isActive ? 'bg-indigo-600 border-indigo-600 text-white scale-110 shadow-lg shadow-indigo-600/30' :
                                                isCompleted ? 'bg-indigo-600 border-indigo-600 text-white' :
                                                    'bg-white border-gray-200 text-gray-400'
                                            }`}>
                                            {isCompleted ? <CheckCircle2 size={16} strokeWidth={3} /> : step.id}
                                        </div>
                                        <span className={`text-[10px] font-bold uppercase tracking-widest hidden md:block whitespace-nowrap ${isActive ? 'text-[#0A0A0A]' : isCompleted ? 'text-indigo-600' : 'text-gray-400'
                                            }`}>
                                            {step.title}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="max-w-[700px] mx-auto mt-12 px-6">
                <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-[0_10px_30px_rgb(0,0,0,0.04)] border border-black/5">

                    {/* Step 1: Basics */}
                    {currentStep === 1 && (
                        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <h2 className="text-3xl font-black text-[#0A0A0A] mb-8 tracking-tight">Tell us about your project</h2>

                            <div className="space-y-6">
                                <div>
                                    <label className="block text-[11px] font-black uppercase tracking-widest text-gray-500 mb-3">Project Title</label>
                                    <input
                                        type="text"
                                        placeholder="e.g. Build a SaaS Dashboard UI"
                                        className="w-full border-2 border-gray-100 rounded-xl px-4 py-4 text-sm font-medium focus:border-indigo-600 focus:ring-4 focus:ring-indigo-600/10 outline-none transition-all placeholder:text-gray-300"
                                        value={formData.title}
                                        onChange={e => setFormData({ ...formData, title: e.target.value })}
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-[11px] font-black uppercase tracking-widest text-gray-500 mb-3">Category</label>
                                        <div className="relative">
                                            <select
                                                className="w-full appearance-none border-2 border-gray-100 rounded-xl px-4 py-4 text-sm font-medium focus:border-indigo-600 focus:ring-4 focus:ring-indigo-600/10 outline-none transition-all bg-transparent"
                                                value={formData.category}
                                                onChange={e => setFormData({ ...formData, category: e.target.value })}
                                            >
                                                <option value="" disabled>Select Category</option>
                                                <option value="Graphics & Design">Graphics & Design</option>
                                                <option value="Programming & Tech">Programming & Tech</option>
                                                <option value="Digital Marketing">Digital Marketing</option>
                                            </select>
                                            <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-[11px] font-black uppercase tracking-widest text-gray-500 mb-3">Subcategory</label>
                                        <div className="relative">
                                            <select
                                                className="w-full appearance-none border-2 border-gray-100 rounded-xl px-4 py-4 text-sm font-medium focus:border-indigo-600 focus:ring-4 focus:ring-indigo-600/10 outline-none transition-all bg-transparent"
                                                value={formData.subcategory}
                                                onChange={e => setFormData({ ...formData, subcategory: e.target.value })}
                                            >
                                                <option value="" disabled>Select Subcategory</option>
                                                <option value="Web Design">Web Design</option>
                                                <option value="Mobile App Development">Mobile App Development</option>
                                                <option value="SEO">SEO</option>
                                            </select>
                                            <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-[11px] font-black uppercase tracking-widest text-gray-500 mb-4">Project Type</label>
                                    <div className="grid grid-cols-2 gap-4">
                                        <button
                                            onClick={() => setFormData({ ...formData, projectType: "Fixed Price" })}
                                            className={`border-2 rounded-2xl p-4 text-center transition-all ${formData.projectType === 'Fixed Price' ? 'border-indigo-600 bg-indigo-50/50 text-indigo-700' : 'border-gray-100 hover:border-black/20 bg-white text-gray-600'}`}
                                        >
                                            <div className="font-bold text-sm mb-1">Fixed Price</div>
                                            <div className="text-xs opacity-70">A set amount for the entire project</div>
                                        </button>
                                        <button
                                            onClick={() => setFormData({ ...formData, projectType: "Hourly" })}
                                            className={`border-2 rounded-2xl p-4 text-center transition-all ${formData.projectType === 'Hourly' ? 'border-indigo-600 bg-indigo-50/50 text-indigo-700' : 'border-gray-100 hover:border-black/20 bg-white text-gray-600'}`}
                                        >
                                            <div className="font-bold text-sm mb-1">Hourly Rate</div>
                                            <div className="text-xs opacity-70">Pay for the hours worked</div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Step 2: Details */}
                    {currentStep === 2 && (
                        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <h2 className="text-3xl font-black text-[#0A0A0A] mb-8 tracking-tight">Describe your project</h2>

                            <div className="space-y-6">
                                <div>
                                    <label className="block text-[11px] font-black uppercase tracking-widest text-gray-500 mb-3">Project Description</label>
                                    <textarea
                                        rows={6}
                                        placeholder="Describe what you need done, timelines, and exactly what the deliverables are..."
                                        className="w-full border-2 border-gray-100 rounded-xl px-4 py-4 text-sm font-medium focus:border-indigo-600 focus:ring-4 focus:ring-indigo-600/10 outline-none transition-all placeholder:text-gray-300 resize-none"
                                        value={formData.description}
                                        onChange={e => setFormData({ ...formData, description: e.target.value })}
                                    />
                                </div>

                                <div>
                                    <label className="block text-[11px] font-black uppercase tracking-widest text-gray-500 mb-3">Required Skills</label>
                                    <div className="w-full border-2 border-gray-100 rounded-xl p-3 focus-within:border-indigo-600 focus-within:ring-4 focus-within:ring-indigo-600/10 transition-all bg-white min-h-[56px] flex flex-wrap gap-2 items-center">
                                        {formData.skills.map((skill, idx) => (
                                            <span key={idx} className="bg-gray-100 text-gray-700 font-bold text-xs px-3 py-1.5 rounded-full flex items-center gap-1.5">
                                                {skill}
                                                <button onClick={() => removeSkill(skill)} className="hover:text-rose-500 transition-colors"><X size={12} strokeWidth={3} /></button>
                                            </span>
                                        ))}
                                        <input
                                            type="text"
                                            placeholder={formData.skills.length === 0 ? "Type a skill and press Enter" : ""}
                                            className="flex-1 bg-transparent border-none outline-none text-sm font-medium min-w-[120px]"
                                            value={skillInput}
                                            onChange={e => setSkillInput(e.target.value)}
                                            onKeyDown={addSkill}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-[11px] font-black uppercase tracking-widest text-gray-500 mb-4">Experience Level Needed</label>
                                    <div className="flex flex-col sm:flex-row gap-4">
                                        {['Entry Level', 'Intermediate', 'Expert'].map(level => (
                                            <button
                                                key={level}
                                                onClick={() => setFormData({ ...formData, experienceLevel: level })}
                                                className={`flex-1 border-2 py-3 rounded-xl text-sm font-bold transition-colors ${formData.experienceLevel === level ? 'border-indigo-600 bg-indigo-50/50 text-indigo-700' : 'border-gray-100 bg-white hover:border-black/20 text-gray-600'}`}
                                            >
                                                {level}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Step 3: Budget & Timeline */}
                    {currentStep === 3 && (
                        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <h2 className="text-3xl font-black text-[#0A0A0A] mb-8 tracking-tight">Budget and Timeline</h2>

                            <div className="space-y-8">
                                <div>
                                    <label className="block text-[11px] font-black uppercase tracking-widest text-gray-500 mb-4">Project Budget</label>
                                    <div className="flex items-center gap-4 mb-4">
                                        <button
                                            onClick={() => setFormData({ ...formData, budgetType: "Fixed Price" })}
                                            className={`flex-1 border-2 py-3 rounded-xl text-sm font-bold transition-colors ${formData.budgetType === 'Fixed Price' ? 'border-indigo-600 bg-indigo-50/50 text-indigo-700' : 'border-gray-100 bg-white hover:border-black/20 text-gray-600'}`}
                                        >
                                            Fixed Price
                                        </button>
                                        <button
                                            onClick={() => setFormData({ ...formData, budgetType: "Hourly" })}
                                            className={`flex-1 border-2 py-3 rounded-xl text-sm font-bold transition-colors ${formData.budgetType === 'Hourly' ? 'border-indigo-600 bg-indigo-50/50 text-indigo-700' : 'border-gray-100 bg-white hover:border-black/20 text-gray-600'}`}
                                        >
                                            Hourly Rate
                                        </button>
                                    </div>

                                    {formData.budgetType && (
                                        <div className="relative animate-in fade-in slide-in-from-top-2">
                                            <span className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-gray-400">$</span>
                                            <input
                                                type="text"
                                                placeholder={formData.budgetType === 'Hourly' ? "e.g. 25 - 50 / hr" : "e.g. 500 - 1000"}
                                                className="w-full border-2 border-gray-100 rounded-xl px-4 pl-8 py-4 text-sm font-bold focus:border-indigo-600 focus:ring-4 focus:ring-indigo-600/10 outline-none transition-all"
                                                value={formData.budgetRange}
                                                onChange={e => setFormData({ ...formData, budgetRange: e.target.value })}
                                            />
                                        </div>
                                    )}
                                </div>

                                <div>
                                    <label className="block text-[11px] font-black uppercase tracking-widest text-gray-500 mb-4">Expected Timeline</label>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {['Less than 1 week', '1–4 weeks', '1–3 months', 'More than 3 months'].map(time => (
                                            <button
                                                key={time}
                                                onClick={() => setFormData({ ...formData, timeline: time })}
                                                className={`border-2 py-4 px-6 rounded-xl text-sm font-bold transition-colors text-left flex justify-between items-center ${formData.timeline === time ? 'border-indigo-600 bg-indigo-50/50 text-indigo-700 shadow-sm' : 'border-gray-100 bg-white hover:border-black/20 text-gray-600'}`}
                                            >
                                                {time}
                                                {formData.timeline === time && <CheckCircle2 size={16} />}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Step 4: Attachments */}
                    {currentStep === 4 && (
                        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <h2 className="text-3xl font-black text-[#0A0A0A] mb-8 tracking-tight">Add supporting files</h2>

                            <div className="space-y-8">
                                <div>
                                    <label className="block text-[11px] font-black uppercase tracking-widest text-gray-500 mb-3">Upload Documents or Images</label>
                                    <div className="w-full border-2 border-dashed border-gray-200 rounded-2xl p-12 flex flex-col items-center justify-center bg-gray-50/50 hover:bg-gray-50 hover:border-gray-300 transition-all cursor-pointer group">
                                        <div className="w-16 h-16 bg-white shadow-sm border border-black/5 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 group-hover:shadow-md transition-all">
                                            <UploadCloud size={28} className="text-indigo-600" />
                                        </div>
                                        <div className="font-bold text-[#0A0A0A] mb-1">Click to upload or drag and drop</div>
                                        <div className="text-xs font-medium text-gray-400">SVG, PNG, JPG, PDF or DOC (Max. 50MB)</div>
                                    </div>

                                    {/* Mock Uploaded Files */}
                                    <div className="mt-4 flex flex-col gap-2">
                                        {['design-references.pdf', 'wireframes_v2.png'].map((file, i) => (
                                            <div key={i} className="flex flex-row items-center justify-between p-3 border border-gray-100 rounded-xl bg-white shadow-sm">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600">
                                                        {file.endsWith('.png') ? <ImageIcon size={14} /> : <File size={14} />}
                                                    </div>
                                                    <span className="text-sm font-bold text-gray-700">{file}</span>
                                                </div>
                                                <button className="w-8 h-8 rounded-full hover:bg-rose-50 flex items-center justify-center text-gray-400 hover:text-rose-500 transition-colors">
                                                    <X size={14} strokeWidth={3} />
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-[11px] font-black uppercase tracking-widest text-gray-500 mb-3">Project Reference Links</label>
                                    <div className="flex gap-2 mb-3">
                                        <div className="relative flex-1">
                                            <LinkIcon size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                                            <input
                                                type="text"
                                                placeholder="https://example.com"
                                                className="w-full border-2 border-gray-100 rounded-xl px-4 pl-10 py-3 text-sm font-medium focus:border-indigo-600 focus:ring-4 focus:ring-indigo-600/10 outline-none transition-all placeholder:text-gray-300"
                                                value={linkInput}
                                                onChange={e => setLinkInput(e.target.value)}
                                                onKeyDown={(e) => { if (e.key === 'Enter') addLink(); }}
                                            />
                                        </div>
                                        <button onClick={addLink} className="bg-white border-2 border-gray-100 hover:border-black/20 text-[#0A0A0A] px-6 rounded-xl font-bold text-sm transition-all shadow-sm active:scale-95">Add</button>
                                    </div>

                                    {/* Link List */}
                                    <div className="flex flex-col gap-2">
                                        {formData.links.map((link, idx) => (
                                            <div key={idx} className="flex justify-between items-center bg-gray-50 px-4 py-2.5 rounded-lg">
                                                <a href={link} target="_blank" rel="noreferrer" className="text-sm font-medium text-indigo-600 hover:underline overflow-hidden text-ellipsis whitespace-nowrap">{link}</a>
                                                <button onClick={() => removeLink(link)} className="text-gray-400 hover:text-rose-500 transition-colors"><X size={14} /></button>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Step 5: Review */}
                    {currentStep === 5 && (
                        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <h2 className="text-3xl font-black text-[#0A0A0A] mb-8 tracking-tight">Review your project</h2>

                            <div className="space-y-6">
                                {/* Summary Card */}
                                <div className="border border-black/10 rounded-2xl bg-white shadow-sm overflow-hidden">
                                    <div className="bg-gray-50/80 px-6 py-4 border-b border-black/5 flex justify-between items-center">
                                        <h3 className="font-bold text-[#0A0A0A] text-lg">{formData.title || "Build a SaaS Dashboard UI"}</h3>
                                        <button onClick={() => setCurrentStep(1)} className="text-indigo-600 text-xs font-bold uppercase tracking-widest hover:underline">Edit</button>
                                    </div>
                                    <div className="p-6 space-y-6">
                                        <div>
                                            <div className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">Description</div>
                                            <p className="text-sm font-medium text-gray-600 leading-relaxed">
                                                {formData.description || "We are looking for an experienced UI/UX designer to revamp our current SaaS offering layout focusing on analytics dashboards."}
                                            </p>
                                        </div>

                                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                            <div>
                                                <div className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">Category</div>
                                                <div className="text-sm font-bold text-gray-800">{formData.category || "UI/UX Design"}</div>
                                            </div>
                                            <div>
                                                <div className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">Budget</div>
                                                <div className="text-sm font-bold text-gray-800">{formData.budgetType === 'Hourly' ? 'Hourly' : 'Fixed'}: ${formData.budgetRange || "500-1000"}</div>
                                            </div>
                                            <div>
                                                <div className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">Timeline</div>
                                                <div className="text-sm font-bold text-gray-800">{formData.timeline || "1-4 weeks"}</div>
                                            </div>
                                            <div>
                                                <div className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">Experience</div>
                                                <div className="text-sm font-bold text-gray-800">{formData.experienceLevel || "Expert"}</div>
                                            </div>
                                        </div>

                                        <div>
                                            <div className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">Skills Required</div>
                                            <div className="flex flex-wrap gap-2">
                                                {(formData.skills.length ? formData.skills : ['Figma', 'UI Design', 'SaaS', 'Prototyping']).map((skill, idx) => (
                                                    <span key={idx} className="bg-gray-100 text-gray-700 font-bold text-xs px-3 py-1.5 rounded-full">
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="border-t border-black/5 pt-4">
                                            <div className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">Attachments ({formData.links.length + 2})</div>
                                            <div className="flex items-center gap-2 text-sm font-medium text-indigo-600">
                                                <Paperclip size={16} /> 2 Files, {formData.links.length} Links attached
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Bottom Navigation Buttons */}
                    <div className="mt-10 pt-6 border-t border-black/5 flex items-center justify-between">
                        {currentStep > 1 ? (
                            <button
                                onClick={handleBack}
                                className="px-6 py-3 rounded-full font-bold uppercase tracking-widest text-xs text-gray-500 hover:text-[#0A0A0A] hover:bg-gray-50 transition-colors flex items-center gap-2"
                            >
                                <ArrowLeft size={16} /> Back
                            </button>
                        ) : (
                            <div></div>
                        )}

                        <button
                            onClick={handleNext}
                            className={`px-8 py-3.5 rounded-full font-bold uppercase tracking-widest text-xs transition-all shadow-md flex items-center gap-2 ${currentStep === 5
                                    ? 'bg-emerald-500 hover:bg-emerald-600 text-white shadow-emerald-500/20 shadow-lg hover:-translate-y-0.5'
                                    : 'bg-[#0A0A0A] hover:bg-indigo-600 text-white shadow-indigo-600/20 shadow-lg hover:-translate-y-0.5'
                                }`}
                        >
                            {currentStep === 5 ? "Publish Project" : "Save & Continue"} {currentStep < 5 && <ArrowRight size={16} />}
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
}
