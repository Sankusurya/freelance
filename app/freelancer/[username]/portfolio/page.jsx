"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Star, ArrowRight, ArrowLeft, X, ExternalLink, MessageSquare, Briefcase } from "lucide-react";

// Mock Data
const SELLER_DATA = {
    username: "sikander",
    name: "Sikander",
    avatar: "https://i.pravatar.cc/150?u=14",
    rating: 4.9,
    reviews: 349,
};

const MOCK_PROJECTS = [
    {
        id: 1,
        title: "Fintech SaaS Dashboard",
        outcome: "Increased user retention by 40% with intuitive data visualization.",
        tags: ["SaaS", "Dashboard", "Finance"],
        duration: "2 Weeks",
        budget: "$800 - $1,200",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
        isMadeOnEduprova: true,
    },
    {
        id: 2,
        title: "E-Commerce Mobile App",
        outcome: "Redesigned checkout flow resulting in 25% higher conversion rate.",
        tags: ["Mobile App", "E-Commerce", "UX/UI"],
        duration: "3 Weeks",
        budget: "$1,500 - $2,000",
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
        isMadeOnEduprova: false,
    },
    {
        id: 3,
        title: "Healthcare Provider Portal",
        outcome: "Streamlined patient data management for a network of clinics.",
        tags: ["Web App", "Healthcare", "Dashboard"],
        duration: "4 Weeks",
        budget: "$2,500 - $3,500",
        image: "https://images.unsplash.com/photo-1557821552-47d0515ea147?w=800&q=80",
        isMadeOnEduprova: true,
    },
    {
        id: 4,
        title: "Real Estate Admin Panel",
        outcome: "Centralized property management system for agents.",
        tags: ["Admin Panel", "Real Estate"],
        duration: "2 Weeks",
        budget: "$1,000 - $1,500",
        image: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?w=800&q=80",
        isMadeOnEduprova: true,
    },
    {
        id: 5,
        title: "AI Copywriting Tool UI",
        outcome: "Clean, minimal interface for an AI-powered content generator.",
        tags: ["SaaS", "AI", "Web Design"],
        duration: "1 Week",
        budget: "$500 - $800",
        image: "https://images.unsplash.com/photo-1542892994-0cfb02ee96de?w=800&q=80",
        isMadeOnEduprova: false,
    },
    {
        id: 6,
        title: "Logistics Tracking App",
        outcome: "Real-time delivery tracking interface for drivers and customers.",
        tags: ["Mobile App", "Logistics", "UI Design"],
        duration: "3 Weeks",
        budget: "$1,200 - $1,800",
        image: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?w=800&q=80",
        isMadeOnEduprova: true,
    }
];

export default function PortfolioPage() {
    const [showOnlyEduprova, setShowOnlyEduprova] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const filteredProjects = showOnlyEduprova
        ? MOCK_PROJECTS.filter((p) => p.isMadeOnEduprova)
        : MOCK_PROJECTS;

    return (
        <div className="min-h-[100svh] bg-[#F4F4F0] text-[#0A0A0A] font-sans">
            {/* Minimal Header */}
            <header className="sticky top-0 z-50 bg-[#F4F4F0]/80 backdrop-blur-xl border-b border-black/5 transition-all duration-300">
                <div className="max-w-[1400px] mx-auto px-6 py-4">
                    <div className="flex items-center justify-start">
                        <Link href="/">
                            <div className="text-xl font-black tracking-tighter uppercase flex items-center gap-2 text-[#0A0A0A]">
                                <div className="w-4 h-4 bg-indigo-600 rounded-sm"></div>
                                Eduprova
                            </div>
                        </Link>
                    </div>
                </div>
            </header>

            <main className="max-w-[1400px] mx-auto px-6 pt-8 pb-32">
                {/* Contextual Back Navigation */}
                <motion.div
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.15, ease: "easeOut" }}
                    className="mb-8 w-fit"
                >
                    <Link
                        href={`/service/1`}
                        className="inline-flex items-center gap-2 text-[14px] font-medium text-gray-500 hover:text-gray-900 transition-all hover:bg-black/5 hover:scale-[1.02] px-3 py-2 -mx-3 rounded-[12px]"
                    >
                        <ArrowLeft size={18} strokeWidth={2} />
                        <span>Back to Service</span>
                    </Link>
                </motion.div>

                {/* Hero Header Section */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 border-b border-black/5 pb-8">
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col">
                            <h1 className="text-4xl md:text-5xl font-black tracking-tight text-[#0A0A0A] uppercase mb-2">
                                All Projects
                            </h1>
                            <p className="text-lg font-medium text-gray-500 max-w-xl">
                                A complete collection of my recent work and case studies.
                            </p>
                        </div>

                        {/* Freelancer Mini Profile */}
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-2">
                            <div className="flex items-center gap-3">
                                <img src={SELLER_DATA.avatar} alt={SELLER_DATA.name} className="w-8 h-8 rounded-full border border-black/5 object-cover" />
                                <span className="text-sm font-bold text-gray-900">{SELLER_DATA.name}</span>
                            </div>
                            <div className="w-1 h-1 rounded-full bg-gray-300"></div>
                            <div className="flex items-center gap-1.5">
                                <Star size={16} className="fill-amber-500 text-amber-500" />
                                <span className="text-sm font-bold text-[#0A0A0A]">{SELLER_DATA.rating}</span>
                                <span className="text-sm font-medium text-gray-400">({SELLER_DATA.reviews} Reviews)</span>
                            </div>
                            <div className="w-1 h-1 rounded-full bg-gray-300"></div>
                            <div className="text-sm font-bold text-gray-500">
                                {MOCK_PROJECTS.length} Projects Total
                            </div>
                        </div>
                    </div>

                    {/* Minimal Pill Toggle */}
                    <div className="flex items-center bg-gray-200/50 p-1 rounded-full w-max">
                        <button
                            onClick={() => setShowOnlyEduprova(false)}
                            className={`px-5 py-2 rounded-full text-[11px] font-bold uppercase tracking-widest transition-all ${!showOnlyEduprova
                                ? "bg-white text-gray-900 shadow-sm"
                                : "text-gray-500 hover:text-gray-900"
                                }`}
                        >
                            All Projects
                        </button>
                        <button
                            onClick={() => setShowOnlyEduprova(true)}
                            className={`px-5 py-2 rounded-full text-[11px] font-bold uppercase tracking-widest transition-all ${showOnlyEduprova
                                ? "bg-white text-indigo-600 shadow-sm"
                                : "text-gray-500 hover:text-gray-900"
                                }`}
                        >
                            Made on Eduprova
                        </button>
                    </div>
                </div>

                {/* Project Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-y-12">
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project) => (
                            <motion.div
                                layout
                                onClick={() => setSelectedProject(project)}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                                key={project.id}
                                className="group cursor-pointer flex flex-col relative z-0"
                            >
                                {/* Img container */}
                                <div
                                    className="aspect-[4/3] rounded-[24px] overflow-hidden mb-5 relative shadow-[0_4px_30px_rgb(0,0,0,0.05)] border border-black/5 group-hover:shadow-[0_12px_40px_rgb(0,0,0,0.1)] transition-all duration-500"
                                >
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                                    />

                                    {/* Made on Eduprova Badge */}
                                    {project.isMadeOnEduprova && (
                                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-black/5 flex items-center gap-1.5 shadow-sm">
                                            <div className="w-2 h-2 bg-indigo-600 rounded-sm"></div>
                                            <span className="text-[9px] font-bold text-gray-900 uppercase tracking-widest">Eduprova Project</span>
                                        </div>
                                    )}

                                    {/* Hover Overlay "View Case Study" */}
                                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <div className="bg-white text-gray-900 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
                                            View Case Study <ArrowRight size={16} />
                                        </div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex flex-col px-1">
                                    <h3 className="text-xl font-black text-gray-900 leading-tight mb-1.5 group-hover:text-indigo-600 transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-[15px] font-medium text-gray-500 line-clamp-1 mb-4">
                                        {project.outcome}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-5">
                                        {project.tags.map((tag, idx) => (
                                            <span key={idx} className="text-[10px] font-bold text-gray-600 bg-gray-200/60 px-2.5 py-1.25 rounded-md uppercase tracking-wide">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex items-center gap-6 mt-auto pt-4 border-t border-black/5">
                                        <div>
                                            <div className="text-[9px] font-bold uppercase tracking-widest text-gray-400 mb-0.5">Duration</div>
                                            <div className="text-xs font-black text-gray-900">{project.duration}</div>
                                        </div>
                                        <div>
                                            <div className="text-[9px] font-bold uppercase tracking-widest text-gray-400 mb-0.5">Budget</div>
                                            <div className="text-xs font-black text-gray-900">{project.budget}</div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {filteredProjects.length === 0 && (
                    <div className="py-20 text-center">
                        <p className="text-gray-500 font-medium">No projects found for this selection.</p>
                    </div>
                )}
            </main>

            {/* Expanded Case Study View Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm p-4 md:p-8 flex justify-center items-center overflow-hidden"
                        onClick={() => setSelectedProject(null)}
                    >
                        {/* Centered Modal Container */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.96, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.96, y: 20 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className="bg-white w-full max-w-[1200px] max-h-[100%] md:max-h-[90vh] rounded-[24px] shadow-2xl relative flex flex-col overflow-hidden my-auto"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close Button (Fixed relative to modal) */}
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-6 right-6 z-[110] w-10 h-10 bg-gray-100/80 hover:bg-gray-200 backdrop-blur-md border border-black/5 rounded-full flex items-center justify-center text-gray-600 hover:text-gray-900 transition-all shadow-sm"
                            >
                                <X size={20} />
                            </button>

                            {/* Scrollable Inner Content */}
                            <div className="overflow-y-auto overflow-x-hidden flex-1 relative custom-scrollbar">
                                {/* Top Section */}
                                <div className="p-8 md:p-12 border-b border-black/5 flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
                                    {/* Left Content */}
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-4">
                                            {selectedProject.isMadeOnEduprova && (
                                                <div className="bg-indigo-50 border border-indigo-100 px-3 py-1.5 rounded-full flex items-center gap-1.5">
                                                    <div className="w-1.5 h-1.5 bg-indigo-600 rounded-sm"></div>
                                                    <span className="text-[10px] font-bold text-indigo-700 uppercase tracking-widest mt-px">Eduprova Project</span>
                                                </div>
                                            )}
                                        </div>

                                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight tracking-tight mb-4">
                                            {selectedProject.title}
                                        </h2>

                                        <p className="text-lg md:text-xl font-medium text-gray-500 leading-relaxed mb-6 max-w-2xl">
                                            {selectedProject.outcome}
                                        </p>

                                        <div className="flex flex-wrap gap-2 mb-8">
                                            {selectedProject.tags.map((tag, idx) => (
                                                <span key={idx} className="text-[10px] md:text-xs font-bold text-gray-600 bg-gray-100 px-3 py-1.5 rounded-md uppercase tracking-wide cursor-default">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="flex items-center gap-8 lg:gap-12">
                                            <div>
                                                <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">Duration</div>
                                                <div className="text-lg font-black text-gray-900">{selectedProject.duration}</div>
                                            </div>
                                            <div>
                                                <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">Budget</div>
                                                <div className="text-lg font-black text-gray-900">{selectedProject.budget}</div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Right Content (CTAs) */}
                                    <div className="w-full lg:w-[320px] shrink-0 pt-2 lg:pt-0">
                                        <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">Take Action</h4>
                                        <button className="w-full h-14 bg-[#0A0A0A] hover:bg-indigo-600 text-white rounded-xl text-[13px] font-black uppercase tracking-widest transition-all shadow-md hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2 group mb-3">
                                            <ExternalLink size={18} className="group-hover:scale-110 transition-transform" /> View Live Site
                                        </button>
                                        <div className="grid grid-cols-2 gap-3">
                                            <button className="w-full h-12 bg-white border border-gray-200 hover:border-gray-400 hover:bg-gray-50 text-gray-700 rounded-xl text-xs font-bold transition-all shadow-sm flex items-center justify-center gap-2">
                                                <MessageSquare size={16} /> Message
                                            </button>
                                            <button className="w-full h-12 bg-white border border-gray-200 hover:border-gray-400 hover:bg-gray-50 text-gray-700 rounded-xl text-xs font-bold transition-all shadow-sm flex items-center justify-center gap-2">
                                                <Briefcase size={16} /> Hire Me
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* Bottom Component (Image Preview) */}
                                <div className="p-8 md:p-12 bg-gray-50">
                                    <div className="text-center mb-8">
                                        <h3 className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-2">Project Preview</h3>
                                    </div>
                                    <div className="w-full rounded-[16px] overflow-hidden border border-black/5 shadow-sm max-h-[600px] flex items-start justify-center bg-white">
                                        <img
                                            src={selectedProject.image}
                                            alt={selectedProject.title}
                                            className="w-full object-cover object-top"
                                        />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
