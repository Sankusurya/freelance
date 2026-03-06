"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
    Search, Bell, Mail, Briefcase, ChevronDown,
    Image as ImageIcon, X, ArrowLeft, Star
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// MOCK DATA
const SELLER = {
    name: "Izhaan",
    avatar: "https://i.pravatar.cc/150?u=12",
    rating: 5.0,
    reviews: 114,
    level: "Level 2 Seller",
    tagline: "Expertise in Every Design, Brilliance in Every Detail",
    isOnline: true
};

const PORTFOLIO_PROJECTS = [
    {
        id: 1,
        title: "Nut Cravings Website UI Design",
        description: "Fun and colorful website design for a snacks and gifts brand. The goal was to keep it simple and let the product shine while maintaining an addictive UI.",
        image: "https://images.unsplash.com/photo-1542892994-0cfb02ee96de?w=800&q=80",
        imageCount: 5
    },
    {
        id: 2,
        title: "Microcart Landing Page Design",
        description: "Designed a landing page for Microcart, a no code website builder focused on helping people launch sites quickly with a modern, dark-mode focused aesthetic.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
        imageCount: 5
    },
    {
        id: 3,
        title: "The IV Company Website Design",
        description: "Clean, modern website for a mobile IV therapy service. Designed to feel professional and trustworthy while showcasing health benefits.",
        image: "https://images.unsplash.com/photo-1557821552-47d0515ea147?w=800&q=80",
        imageCount: 2
    },
    {
        id: 4,
        title: "SaaS Dashboard Concept",
        description: "A comprehensive analytics dashboard for B2B SaaS, featuring clean data visualizations, light mode interface, and fully componentized Figma assets.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
        imageCount: 8
    },
    {
        id: 5,
        title: "Fintech Mobile Application",
        description: "Modern, secure-feeling mobile app design for a personal finance startup. Includes budgeting features, transfer flows, and sleek dark mode.",
        image: "https://images.unsplash.com/photo-1616077168079-7e09a677fb2c?w=800&q=80",
        imageCount: 12
    },
    {
        id: 6,
        title: "Real Estate Property Portal",
        description: "High-end property listing platform with map integrations, VR tour layouts, and elegant typography to appeal to luxury buyers.",
        image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
        imageCount: 4
    }
];

export default function PortfolioPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [isMadeOnEduprova, setIsMadeOnEduprova] = useState(false);
    const [activeFilters, setActiveFilters] = useState(["Website Design"]);

    const toggleFilter = (filter: string) => {
        if (activeFilters.includes(filter)) {
            setActiveFilters(prev => prev.filter(f => f !== filter));
        } else {
            setActiveFilters(prev => [...prev, filter]);
        }
    };

    return (
        <div className="min-h-[100svh] bg-[#F4F4F0] text-[#0A0A0A] font-sans">
            {/* TOP NAVBAR (Reused Eduprova Header) */}
            <header className="sticky top-0 z-50 bg-[#F4F4F0]/80 backdrop-blur-xl border-b border-black/5 transition-all duration-300">
                <div className="max-w-[1400px] mx-auto">
                    <div className="flex items-center justify-between px-6 py-4 lg:py-6 relative">
                        <div className="flex items-center gap-12 flex-1">
                            <Link href="/">
                                <div className="text-2xl font-black tracking-tighter uppercase flex items-center gap-2 text-[#0A0A0A]">
                                    <div className="w-4 h-4 bg-indigo-600 rounded-sm"></div>
                                    Eduprova
                                </div>
                            </Link>

                            <div className="hidden lg:flex w-full max-w-xl relative">
                                <Search size={18} className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Search services or skills..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full bg-white border border-black/5 shadow-sm rounded-full py-3 pl-14 pr-6 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-indigo-600/20 transition-all"
                                />
                            </div>
                        </div>

                        <div className="hidden md:flex items-center gap-6">
                            <nav className="flex items-center gap-6 text-gray-500">
                                <button className="hover:text-black transition-colors relative flex items-center" title="Messages">
                                    <Mail size={22} strokeWidth={2} />
                                </button>
                                <button className="hover:text-black transition-colors relative flex items-center" title="Orders">
                                    <Briefcase size={22} strokeWidth={2} />
                                </button>
                                <button className="hover:text-black transition-colors relative flex items-center" title="Notifications">
                                    <Bell size={22} strokeWidth={2} />
                                    <span className="absolute top-0 right-0.5 w-2.5 h-2.5 bg-rose-500 rounded-full border-2 border-[#F4F4F0] translate-x-1/2 -translate-y-1/4"></span>
                                </button>
                            </nav>
                            <div className="relative group cursor-pointer ml-2">
                                <img src="https://i.pravatar.cc/150?img=11" alt="User" className="w-10 h-10 rounded-full border-2 border-transparent group-hover:border-indigo-600 transition-colors shadow-sm object-cover" />
                                <div className={`absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full border-[2.5px] border-white transition-colors duration-300 shadow-sm bg-emerald-500`}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <main className="max-w-[1400px] mx-auto px-6 pt-8 pb-32">

                {/* BACK BUTTON */}
                <div className="mb-8">
                    <button
                        onClick={() => window.history.back()}
                        className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-[#0A0A0A] transition-colors"
                    >
                        <ArrowLeft size={16} /> Back to Service
                    </button>
                </div>

                {/* SELLER HEADER SECTION */}
                <div className="bg-white rounded-[32px] p-8 border border-black/5 shadow-[0_4px_30px_rgb(0,0,0,0.03)] mb-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="flex items-center gap-6">
                        <div className="relative flex-shrink-0">
                            <img src={SELLER.avatar} alt={SELLER.name} className="w-24 h-24 rounded-full border border-black/5 object-cover" />
                            {SELLER.isOnline && (
                                <div className="absolute bottom-1 right-1 w-5 h-5 bg-emerald-500 border-4 border-white rounded-full"></div>
                            )}
                        </div>
                        <div>
                            <h1 className="text-2xl font-black text-[#0A0A0A] mb-2">{SELLER.name}</h1>

                            <div className="flex flex-wrap items-center gap-4 text-sm font-medium mb-3">
                                <div className="flex items-center gap-1.5">
                                    <Star size={16} className="fill-amber-500 text-amber-500" />
                                    <span className="font-bold text-[#0A0A0A]">{SELLER.rating}</span>
                                    <span className="text-gray-500">({SELLER.reviews})</span>
                                </div>
                                <div className="w-1 h-1 rounded-full bg-gray-300"></div>
                                <span className="text-gray-900 font-bold">{SELLER.level}</span>
                            </div>

                            <p className="text-gray-600">{SELLER.tagline}</p>
                        </div>
                    </div>

                    <button className="bg-[#0A0A0A] hover:bg-indigo-600 text-white px-8 py-3.5 rounded-full text-xs font-black uppercase tracking-widest transition-all shadow-[0_4px_15px_rgb(0,0,0,0.1)] hover:-translate-y-0.5 whitespace-nowrap self-start md:self-center">
                        Contact
                    </button>
                </div>

                {/* PORTFOLIO SECTION */}
                <div>
                    <h2 className="text-3xl font-black tracking-tight text-[#0A0A0A] mb-8">
                        Portfolio
                    </h2>

                    {/* FILTERS TRAY */}
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-6">
                        <div className="flex items-center gap-3">
                            <button className="flex items-center gap-2 bg-white border border-black/10 hover:border-black/30 text-[#0A0A0A] px-4 py-2.5 rounded-full text-sm font-medium transition-all shadow-sm">
                                Industry <ChevronDown size={16} className="text-gray-400" />
                            </button>
                            <button className="flex items-center justify-between w-[220px] bg-white border border-black/10 hover:border-black/30 text-gray-500 px-4 py-2.5 rounded-[12px] text-sm font-medium transition-all shadow-sm">
                                Search areas of expertise <ChevronDown size={16} className="text-gray-400" />
                            </button>
                        </div>

                        <div className="w-px h-6 bg-gray-300 hidden md:block mx-2"></div>

                        {/* Toggle Switches */}
                        <div className="flex items-center gap-3">
                            <button
                                onClick={() => setIsMadeOnEduprova(!isMadeOnEduprova)}
                                className={`w-10 h-5 md:w-11 md:h-6 rounded-full relative transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 ${isMadeOnEduprova ? 'bg-emerald-500' : 'bg-gray-300'}`}
                            >
                                <div className={`w-3.5 h-3.5 md:w-4 md:h-4 bg-white rounded-full shadow-md absolute top-1/2 -translate-y-1/2 transition-all duration-300 ${isMadeOnEduprova ? 'left-[20px] md:left-[24px]' : 'left-[4px]'}`}></div>
                            </button>
                            <span className="text-sm font-bold text-gray-700">Made on Eduprova</span>
                        </div>
                    </div>

                    {/* ACTIVE FILTERS (PILLS) */}
                    {(activeFilters.length > 0) && (
                        <div className="flex items-center gap-2 mb-8">
                            {activeFilters.map(filter => (
                                <div key={filter} className="flex items-center gap-2 bg-gray-200/50 text-[#0A0A0A] text-sm font-semibold px-4 py-1.5 rounded-full">
                                    {filter}
                                    <button onClick={() => toggleFilter(filter)} className="hover:text-rose-500 hover:bg-rose-100 rounded-full p-0.5 transition-colors">
                                        <X size={14} />
                                    </button>
                                </div>
                            ))}
                            <button
                                onClick={() => setActiveFilters([])}
                                className="text-sm font-bold text-gray-500 hover:text-[#0A0A0A] transition-colors ml-2"
                            >
                                Clear filters
                            </button>
                        </div>
                    )}

                    {/* RESULTS COUNT */}
                    <div className="mb-6">
                        <span className="text-sm font-bold text-gray-500">
                            Showing {PORTFOLIO_PROJECTS.length} projects
                        </span>
                    </div>

                    {/* PORTFOLIO GRID */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {PORTFOLIO_PROJECTS.map((project) => (
                            <div key={project.id} className="group bg-white rounded-3xl overflow-hidden border border-black/5 hover:border-black/10 hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer">

                                {/* Image Container */}
                                <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100 p-2">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover rounded-2xl group-hover:scale-[1.03] transition-transform duration-500"
                                    />

                                    {/* Multiple Images Indicator Badge */}
                                    {project.imageCount > 1 && (
                                        <div className="absolute bottom-5 right-5 bg-black/60 backdrop-blur-md text-white px-2 py-1.5 rounded-lg flex items-center gap-1.5 text-xs font-bold shadow-[0_4px_12px_rgb(0,0,0,0.1)]">
                                            <ImageIcon size={14} />
                                            {project.imageCount}
                                        </div>
                                    )}
                                </div>

                                {/* Content Details */}
                                <div className="p-6 flex-1 flex flex-col">
                                    <h3 className="text-lg font-black text-[#0A0A0A] mb-3 leading-snug group-hover:text-indigo-600 transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-500 text-sm font-medium leading-relaxed line-clamp-3 mb-4">
                                        {project.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </main>

            {/* Clean Footer (Reused) */}
            <footer className="border-t border-black/5 bg-[#F4F4F0] pt-24 pb-24 lg:pb-12">
                <div className="max-w-[1400px] mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-20">
                        <div className="lg:col-span-2">
                            <div className="text-2xl font-black tracking-tighter uppercase flex items-center gap-2 text-[#0A0A0A] mb-6">
                                <div className="w-4 h-4 bg-indigo-600 rounded-sm"></div>
                                Eduprova
                            </div>
                            <p className="text-gray-500 max-w-sm mb-8 leading-relaxed font-medium">Empowering the world's most driven talents and businesses to build incredible things together.</p>
                        </div>
                        {/* Footer Columns placeholder for brevity */}
                        <div>
                            <h4 className="font-bold text-[#0A0A0A] mb-6 uppercase tracking-widest text-xs">Categories</h4>
                            <ul className="space-y-4 text-sm font-medium text-gray-500">
                                <li><Link href="/" className="hover:text-indigo-600 transition-colors">Graphics & Design</Link></li>
                                <li><Link href="/" className="hover:text-indigo-600 transition-colors">Programming & Tech</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-[#0A0A0A] mb-6 uppercase tracking-widest text-xs">About</h4>
                            <ul className="space-y-4 text-sm font-medium text-gray-500">
                                <li><Link href="/" className="hover:text-indigo-600 transition-colors">Careers</Link></li>
                                <li><Link href="/" className="hover:text-indigo-600 transition-colors">Press & News</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-[#0A0A0A] mb-6 uppercase tracking-widest text-xs">Support</h4>
                            <ul className="space-y-4 text-sm font-medium text-gray-500">
                                <li><Link href="/" className="hover:text-indigo-600 transition-colors">Help & Support</Link></li>
                                <li><Link href="/" className="hover:text-indigo-600 transition-colors">Trust & Safety</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-black/5 text-sm font-medium text-gray-500">
                        <p>© {new Date().getFullYear()} Eduprova Inc. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

