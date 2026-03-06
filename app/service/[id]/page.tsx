"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
    Search,
    Bell,
    Mail,
    Heart,
    ChevronLeft,
    ChevronRight,
    CheckCircle2,
    Star,
    Upload,
    Clock,
    RotateCw,
    Check,
    Briefcase,
    MoreHorizontal,
    X,
    AlertTriangle,
    MessageSquare,
    ArrowRight,
    Share
} from "lucide-react";

// Mock Data for the Service (Normally fetched via ID)
const GIG_DATA = {
    id: "1",
    title: "I will do ui ux design for saas, dashboard, web app, admin panel in figma",
    valueProposition: "Transforming complex workflows into clean, intuitive, and high-converting user interfaces.",
    category: "Graphics & Design",
    subCategory: "UI / UX Design",
    rating: 4.9,
    reviews: 349,
    ordersInQueue: 4,
    images: [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&q=80",
        "https://images.unsplash.com/photo-1557821552-47d0515ea147?w=1200&q=80",
        "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?w=1200&q=80",
        "https://images.unsplash.com/photo-1542892994-0cfb02ee96de?w=1200&q=80"
    ],
    seller: {
        name: "Sikander",
        avatar: "https://i.pravatar.cc/150?u=14",
        level: "Level 2 Seller",
        isChoice: true,
        joined: "May 2021",
        country: "India",
        avgResponse: "1 hour",
        languages: ["English (Fluent)", "Hindi (Native)"],
        description: "I am a professional UX/UI designer with 5+ years of experience in creating modern, premium SaaS and mobile app designs. I focus on aesthetic, conversion-optimized interfaces that follow top UX laws."
    },
    packages: {
        basic: {
            title: "Basic UI Scope",
            desc: "1 Page / Screen Design (Web or Mobile) + Source File",
            price: "₹150",
            delivery: "2 Days Delivery",
            revisions: "1 Revision",
            features: [
                "1 Page/Screen",
                "Source File (Figma)",
                "Interactive Mockup",
                "Auto Layouts"
            ]
        },
        standard: {
            title: "Standard Dashboard",
            desc: "Up to 3 Pages / Screens Design + Prototypes + Auto Layouts",
            price: "₹400",
            delivery: "4 Days Delivery",
            revisions: "3 Revisions",
            features: [
                "Up to 3 Pages/Screens",
                "Source File (Figma)",
                "Interactive Mockup",
                "Auto Layouts",
                "Design System Basics"
            ],
            isPopular: true
        },
        premium: {
            title: "Premium SaaS App",
            desc: "Up to 10 Pages Full Dashboard UI UX + Advanced Prototype + Design System",
            price: "₹1,200",
            delivery: "7 Days Delivery",
            revisions: "Unlimited Revisions",
            features: [
                "Up to 10 Pages/Screens",
                "Source File (Figma)",
                "Interactive Mockup",
                "Auto Layouts",
                "Design System Basics",
                "Developer Handover"
            ]
        }
    },
    sections: {
        about: {
            title: "About This Service",
            desc: "I create clean, modern, and easy-to-use interfaces for web apps, SaaS dashboards, and mobile applications. My goal is to make your product not only look professional but also feel effortless for your users. \n\nNo complex jargon—just good design that solves real problems. Whether you are building an MVP to pitch to investors or upgrading an existing platform, I will provide a design that stands out and increases user engagement."
        },
        deliverables: [
            "Pixel-perfect Figma source files",
            "Clickable interactive prototypes",
            "Fully organized layers with Auto-Layouts",
            "Design system basics (Colors, Typography)",
            "Developer-ready handoff assets"
        ],
        process: [
            { step: 1, title: "Requirement Discussion", desc: "We chat about your business goals, target audience, and feature requirements." },
            { step: 2, title: "Wireframes & UX", desc: "I map out the user journey and basic screen layouts to ensure logic is perfect." },
            { step: 3, title: "Visual UI Design", desc: "I bring the wireframes to life with premium colors, typography, and styling." },
            { step: 4, title: "Final Delivery & Handoff", desc: "You receive clean Figma files, ready to be coded by your developers." }
        ],
        faqs: [
            { q: "Can you match my existing brand guidelines?", a: "Absolutely. Just share your logo, brand colors, and guidelines, and I will ensure the design aligns perfectly with your brand identity." },
            { q: "What if I need more screens than the package offers?", a: "No problem! We can create a custom order. Feel free to message me with your exact requirements." },
            { q: "How do revisions work?", a: "A revision covers minor tweaks to the delivered design (like changing a color, font, or moving a button). It does not cover a complete redesign or adding new screens." },
            { q: "What files will I receive?", a: "You will receive a link to the Figma file, which contains the design, prototype, and all exportable assets. You will have full ownership." }
        ],
        testimonials: [
            { id: 1, name: "John Smith", avatar: "https://i.pravatar.cc/150?u=50", role: "CEO at TechFlow", rating: 5, date: "2 weeks ago", text: "Amazing work! Sikander totally understood our complex SaaS requirements and turned them into a beautifully simple dashboard. Highly recommended." },
            { id: 2, name: "Sarah Lee", avatar: "https://i.pravatar.cc/150?u=51", role: "Product Manager", rating: 5, date: "1 month ago", text: "Very fast delivery and the quality is premium. The Figma files were perfectly organized which our developers loved." },
            { id: 3, name: "Mark V.", avatar: "https://i.pravatar.cc/150?u=52", role: "Startup Founder", rating: 4.9, date: "2 months ago", text: "Great communication and great design. He iterated on the feedback very quickly. Will definitely work with him again." }
        ]
    }
};

export default function ServiceDetailPage() {
    // Top Nav State
    const [searchQuery, setSearchQuery] = useState("");
    const [isOnline, setIsOnline] = useState(true);

    // Image Gallery State
    const [activeImageIndex, setActiveImageIndex] = useState(0);

    // Package Tabs State
    const [activePackageTab, setActivePackageTab] = useState("standard");
    const activePackage = GIG_DATA.packages[activePackageTab];

    // Actions State
    const [isSaved, setIsSaved] = useState(false);
    const [showToast, setShowToast] = useState(false);
    const [showMoreMenu, setShowMoreMenu] = useState(false);
    const [isCapsuleHovered, setIsCapsuleHovered] = useState(false);
    const [isChatOpen, setIsChatOpen] = useState(false);

    const handleSave = () => {
        if (!isSaved) {
            setIsSaved(true);
            setShowToast(true);
            setTimeout(() => setShowToast(false), 3000);
        } else {
            setIsSaved(false);
        }
    };

    const handleShare = () => {
        if (navigator.share) {
            navigator.share({
                title: "Eduprova Service",
                url: window.location.href
            }).catch(console.error);
        } else {
            navigator.clipboard.writeText(window.location.href);
            // Fallback for copy
            alert("Link copied to clipboard!");
        }
    };

    const nextImage = () => setActiveImageIndex((prev) => (prev + 1) % GIG_DATA.images.length);
    const prevImage = () => setActiveImageIndex((prev) => (prev - 1 + GIG_DATA.images.length) % GIG_DATA.images.length);

    return (
        <div className="min-h-[100svh] bg-[#F4F4F0] text-[#0A0A0A] font-sans">

            {/* TOP NAVBAR (Reused from Landing Page) */}
            <header className="sticky top-0 z-50 bg-[#F4F4F0]/80 backdrop-blur-xl border-b border-black/5 transition-all duration-300">
                <div className="max-w-[1400px] mx-auto">
                    <div className="flex items-center justify-between px-6 py-6 border-b border-black/5 relative">
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
                                    className="w-full bg-white border border-black/5 shadow-sm rounded-full py-3.5 pl-14 pr-6 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-indigo-600/20 transition-all"
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
                            <div className="relative group cursor-pointer ml-2" onClick={() => setIsOnline(!isOnline)} title={isOnline ? "Online (Click to go offline)" : "Offline (Click to go online)"}>
                                <img src="https://i.pravatar.cc/150?img=11" alt="User" className="w-10 h-10 rounded-full border-2 border-transparent group-hover:border-indigo-600 transition-colors shadow-sm object-cover" />
                                <div className={`absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full border-[2.5px] border-white transition-colors duration-300 shadow-sm ${isOnline ? 'bg-emerald-500' : 'bg-gray-400'}`}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <main className="max-w-[1400px] mx-auto px-6 pt-8 pb-32">

                {/* TOAST NOTIFICATION */}
                <AnimatePresence>
                    {showToast && (
                        <motion.div
                            initial={{ opacity: 0, y: -10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95, y: -10 }}
                            className="fixed top-24 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-[5%] z-[100] bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-black/5 flex items-center gap-3 pr-4 pl-0 py-0 rounded-md overflow-hidden min-h-[48px]"
                        >
                            <div className="w-1 absolute left-0 top-0 bottom-0 bg-emerald-500"></div>
                            <div className="pl-4 flex items-center gap-2">
                                <CheckCircle2 size={18} className="text-emerald-500" />
                                <span className="text-sm font-medium text-gray-800">The item saved in: <span className="font-bold">My first list.</span></span>
                            </div>
                            <button onClick={() => setShowToast(false)} className="ml-4 text-gray-400 hover:text-black transition-colors pl-2 border-l border-black/5 h-full py-3">
                                <X size={16} />
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* BREADCRUMBS & ACTIONS HEADER */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                    {/* BREADCRUMBS */}
                    <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-gray-400">
                        <Link href="/" className="hover:text-black transition-colors">Home</Link>
                        <span className="text-gray-300">/</span>
                        <Link href="/" className="hover:text-black transition-colors">{GIG_DATA.category}</Link>
                        <span className="text-gray-300">/</span>
                        <span className="text-indigo-600">{GIG_DATA.subCategory}</span>
                    </div>

                    {/* TOP ACTIONS (Save, Share, More) */}
                    <div className="flex items-center gap-1.5 sm:gap-2">
                        {/* Save Button */}
                        <button
                            onClick={handleSave}
                            className="w-10 h-10 flex items-center justify-center text-gray-500 hover:text-rose-500 hover:scale-[1.05] transition-all"
                            title="Save for later"
                        >
                            <Heart size={22} strokeWidth={2} className={isSaved ? "fill-rose-500 text-rose-500" : ""} />
                        </button>

                        {/* Share Button */}
                        <button
                            onClick={handleShare}
                            className="w-10 h-10 flex items-center justify-center text-gray-500 hover:text-gray-900 transition-colors"
                            title="Share service"
                        >
                            <Share size={22} strokeWidth={2} />
                        </button>

                        {/* More/3 Dots Button */}
                        <div className="relative">
                            <button
                                onClick={() => setShowMoreMenu(!showMoreMenu)}
                                className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-gray-700 transition-colors"
                                title="More options"
                            >
                                <MoreHorizontal size={20} strokeWidth={2} />
                            </button>

                            {/* Dropdown for More Options */}
                            <AnimatePresence>
                                {showMoreMenu && (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.95, y: 10 }}
                                        animate={{ opacity: 1, scale: 1, y: 0 }}
                                        exit={{ opacity: 0, scale: 0.95, y: 10 }}
                                        transition={{ duration: 0.15 }}
                                        className="absolute right-0 top-full mt-2 w-[180px] bg-white border border-black/10 shadow-xl rounded-xl z-50 py-1"
                                    >
                                        <button className="w-full text-left px-4 py-3 text-sm font-medium text-gray-700 hover:bg-rose-50 hover:text-rose-600 transition-colors flex items-center gap-2">
                                            <AlertTriangle size={16} />
                                            Report an issue
                                        </button>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-16">

                    {/* LEFT COLUMN: Main Gig Content */}
                    <div className="flex-1 w-full max-w-[800px]">

                        {/* Gig Title */}
                        <h1 className="text-3xl md:text-3xl lg:text-4xl leading-[1.2] font-black text-gray-900 tracking-tight mb-3">
                            {GIG_DATA.title}
                        </h1>

                        <p className="text-lg text-gray-600 font-medium leading-relaxed mb-6">
                            {GIG_DATA.valueProposition}
                        </p>

                        {/* Seller Summary Snippet */}
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-8">
                            <div className="flex items-center gap-2">
                                <div className="relative">
                                    <img src={GIG_DATA.seller.avatar} alt={GIG_DATA.seller.name} className="w-10 h-10 rounded-full border border-black/5" />
                                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-[#F4F4F0] rounded-full"></div>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-sm font-bold text-gray-900 leading-tight">{GIG_DATA.seller.name}</span>
                                    {GIG_DATA.seller.isChoice && <span className="text-[10px] text-indigo-600 font-bold uppercase tracking-widest">Spicy Choice</span>}
                                </div>
                            </div>

                            <div className="w-px h-5 bg-gray-300 hidden sm:block"></div>

                            <div className="flex items-center gap-1.5">
                                <Star size={16} className="fill-amber-500 text-amber-500" />
                                <span className="text-sm font-bold text-[#0A0A0A]">{GIG_DATA.rating}</span>
                                <span className="text-sm font-medium text-gray-400">({GIG_DATA.reviews} Reviews)</span>
                            </div>

                            <div className="w-px h-5 bg-gray-300 hidden sm:block"></div>

                            <div className="flex items-center gap-1.5 text-sm font-bold text-gray-500">
                                <span>{GIG_DATA.ordersInQueue} Orders in Queue</span>
                            </div>
                        </div>

                        {/* Interactive Image Gallery */}
                        <div className="relative aspect-[16/10] bg-gray-100 rounded-[32px] overflow-hidden mb-12 shadow-[0_4px_30px_rgb(0,0,0,0.05)] border border-black/5 group">
                            <AnimatePresence mode="popLayout" initial={false}>
                                <motion.img
                                    key={activeImageIndex}
                                    src={GIG_DATA.images[activeImageIndex]}
                                    alt={`Gig image ${activeImageIndex + 1}`}
                                    className="w-full h-full object-cover"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                />
                            </AnimatePresence>

                            {/* Nav Arrows */}
                            <button onClick={prevImage} className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity disabled:opacity-0 shadow-lg text-gray-600 hover:text-black">
                                <ChevronLeft size={24} />
                            </button>
                            <button onClick={nextImage} className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg text-gray-600 hover:text-black">
                                <ChevronRight size={24} />
                            </button>



                            {/* Thumbnails indicator */}
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                                {GIG_DATA.images.map((_, i) => (
                                    <div key={i} className={`w-2 h-2 rounded-full transition-all duration-300 ${i === activeImageIndex ? 'bg-white scale-125' : 'bg-white/50'}`}></div>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-col gap-12 sm:gap-16 pt-8 pb-12 w-full">

                            {/* Section 2: About This Service */}
                            <section>
                                <h2 className="text-xl sm:text-2xl font-black text-gray-900 mb-4 uppercase tracking-tight">{GIG_DATA.sections.about.title}</h2>
                                <p className="text-gray-600 text-base sm:text-lg font-medium leading-relaxed whitespace-pre-wrap">
                                    {GIG_DATA.sections.about.desc}
                                </p>
                            </section>

                            <hr className="border-black/5" />

                            {/* Section 3: What You'll Get */}
                            <section>
                                <h2 className="text-xl sm:text-2xl font-black text-gray-900 mb-6 uppercase tracking-tight">What You'll Get</h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {GIG_DATA.sections.deliverables.map((item, i) => (
                                        <div key={i} className="flex items-start gap-3">
                                            <div className="mt-1 w-6 h-6 rounded-full bg-emerald-50 flex items-center justify-center flex-shrink-0">
                                                <Check size={14} className="text-emerald-600" strokeWidth={3} />
                                            </div>
                                            <span className="text-base font-medium text-gray-700">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            <hr className="border-black/5" />

                            {/* Section 5: Premium Portfolio Showcase */}
                            <section>
                                <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-8 gap-4">
                                    <div>
                                        <h2 className="text-2xl sm:text-3xl font-black text-gray-900 uppercase tracking-tight mb-2">My Portfolio</h2>
                                        <p className="text-gray-500 font-medium text-sm sm:text-base max-w-md leading-relaxed">
                                            A curated selection of recent case studies, highlighting real-world impact and beautiful digital design.
                                        </p>
                                    </div>
                                    <Link target="_blank" href="/freelancer/sikander/portfolio" className="inline-flex items-center justify-center h-12 px-6 rounded-[14px] bg-[#0A0A0A] text-white text-[11px] font-black uppercase tracking-widest hover:bg-indigo-600 hover:shadow-[0_8px_30px_rgb(79,70,229,0.3)] hover:-translate-y-0.5 transition-all duration-300 shrink-0 gap-2 group z-10">
                                        View Full Portfolio <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-5">
                                    {/* Primary Bento Hero Card */}
                                    <Link target="_blank" href="/freelancer/sikander/portfolio" className="md:col-span-8 relative rounded-[28px] overflow-hidden aspect-[4/3] md:aspect-auto md:h-[500px] border border-black/5 bg-gray-100 group cursor-pointer hover:shadow-2xl hover:border-black/10 transition-all duration-500 block">
                                        <img src={GIG_DATA.images[0]} alt="Featured Project" className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]" />

                                        {/* Elegant shadow gradient */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-90 transition-opacity group-hover:opacity-100" />

                                        {/* Floating Expand Arrow */}
                                        <div className="absolute top-6 right-6 w-11 h-11 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-400 ease-out shadow-xl z-20">
                                            <ArrowRight size={18} className="-rotate-45" />
                                        </div>

                                        {/* Hero Overlay Content */}
                                        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-10 z-10">
                                            <div className="flex flex-wrap items-center gap-2.5 mb-5 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                                                <div className="bg-white/10 backdrop-blur-md border border-white/20 text-white text-[9px] md:text-[10px] font-black uppercase tracking-widest px-3 md:px-4 py-1.5 md:py-2 rounded-[10px] inline-flex items-center gap-2 shadow-[0_4px_12px_rgb(0,0,0,0.1)]">
                                                    <div className="w-1.5 h-1.5 bg-indigo-400 rounded-sm" />
                                                    Featured Project
                                                </div>
                                                <div className="bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold text-[9px] md:text-[10px] uppercase tracking-widest px-3 md:px-4 py-1.5 md:py-2 rounded-[10px]">Dashboard</div>
                                                <div className="bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold text-[9px] md:text-[10px] uppercase tracking-widest px-3 md:px-4 py-1.5 md:py-2 rounded-[10px]">Finance</div>
                                            </div>

                                            <h3 className="text-3xl md:text-[40px] font-black text-white mb-4 leading-none tracking-tight transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75 ease-out group-hover:text-indigo-200">
                                                Fintech SaaS Layout
                                            </h3>

                                            <div className="flex flex-row items-center gap-8 md:gap-12 mt-2 opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100 ease-out border-t border-white/10 pt-5">
                                                <div className="flex flex-col">
                                                    <span className="text-[9px] md:text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Duration</span>
                                                    <span className="text-sm md:text-base font-black text-white drop-shadow-md">2 Weeks</span>
                                                </div>
                                                <div className="flex flex-col">
                                                    <span className="text-[9px] md:text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Budget</span>
                                                    <span className="text-sm md:text-base font-black text-white drop-shadow-md">$800 - $1,200</span>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>

                                    {/* Secondary Bento Group */}
                                    <div className="md:col-span-4 flex flex-col gap-4 sm:gap-5">
                                        {[
                                            { img: GIG_DATA.images[1], title: "E-Commerce Experience", tag: "Mobile Design" },
                                            { img: GIG_DATA.images[2], title: "Healthcare Solutions", tag: "Enterprise" }
                                        ].map((project, i) => (
                                            <Link target="_blank" href="/freelancer/sikander/portfolio" key={i} className="flex-1 relative rounded-[28px] overflow-hidden bg-gray-100 border border-black/5 group cursor-pointer hover:shadow-xl hover:border-black/10 transition-all duration-500 aspect-[4/3] md:aspect-auto block">
                                                <img src={project.img} alt={project.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]" />

                                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-90 transition-opacity group-hover:opacity-100" />

                                                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-300 z-20">
                                                    <ArrowRight size={14} className="-rotate-45" />
                                                </div>

                                                <div className="absolute inset-x-0 bottom-0 p-5 md:p-7 z-10 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                                    <span className="inline-block text-[8px] md:text-[9px] font-black text-white/90 uppercase tracking-widest border border-white/20 px-3 py-1.5 rounded-[8px] backdrop-blur-md bg-black/20 mb-3 shadow-md">
                                                        {project.tag}
                                                    </span>
                                                    <h4 className="text-xl md:text-2xl font-black text-white leading-tight tracking-tight group-hover:text-indigo-200 transition-colors">{project.title}</h4>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </div>

                                <div className="mt-5 flex justify-end">
                                    <Link target="_blank" href="/freelancer/sikander/portfolio" className="text-[11px] font-black text-gray-500 hover:text-black uppercase tracking-widest flex items-center gap-1.5 group transition-all mr-2">
                                        Explore More Projects <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform" />
                                    </Link>
                                </div>
                            </section>

                            <hr className="border-black/5" />

                            {/* Section 6: Process */}
                            <section>
                                <h2 className="text-xl sm:text-2xl font-black text-gray-900 mb-8 uppercase tracking-tight">How We Work</h2>
                                <div className="space-y-6">
                                    {GIG_DATA.sections.process.map((step, i) => (
                                        <div key={i} className="flex gap-4 sm:gap-6 relative">
                                            {/* Line connector */}
                                            {i !== GIG_DATA.sections.process.length - 1 && (
                                                <div className="absolute left-4 top-10 bottom-[-24px] w-px bg-gray-200"></div>
                                            )}

                                            <div className="w-8 h-8 rounded-full bg-indigo-50 border border-indigo-100 flex items-center justify-center flex-shrink-0 z-10 text-indigo-600 font-bold text-sm">
                                                {step.step}
                                            </div>
                                            <div className="pt-1 pb-2">
                                                <h3 className="text-lg font-bold text-gray-900 mb-1">{step.title}</h3>
                                                <p className="text-gray-600 font-medium text-sm sm:text-base leading-relaxed">{step.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            <hr className="border-black/5" />

                            {/* Section 7: Reviews & Ratings */}
                            <section>
                                <h2 className="text-xl sm:text-2xl font-black text-gray-900 mb-8 uppercase tracking-tight">Client Testimonials</h2>
                                <div className="space-y-6">
                                    {GIG_DATA.sections.testimonials.map((review) => (
                                        <div key={review.id} className="p-6 bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
                                            <div className="flex items-start justify-between mb-4">
                                                <div className="flex items-center gap-3">
                                                    <img src={review.avatar} alt={review.name} className="w-10 h-10 rounded-full object-cover" />
                                                    <div>
                                                        <h4 className="font-bold text-gray-900 leading-tight">{review.name}</h4>
                                                        <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">{review.role}</span>
                                                    </div>
                                                </div>
                                                <div className="text-xs font-medium text-gray-400">{review.date}</div>
                                            </div>

                                            <div className="flex items-center gap-1 mb-3">
                                                {[...Array(5)].map((_, idx) => (
                                                    <Star key={idx} size={14} className={idx < Math.floor(review.rating) ? "fill-amber-500 text-amber-500" : "text-gray-300"} />
                                                ))}
                                                <span className="ml-2 text-sm font-bold text-gray-900">{review.rating}</span>
                                            </div>

                                            <p className="text-gray-600 font-medium text-sm sm:text-base leading-relaxed">"{review.text}"</p>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            <hr className="border-black/5" />

                            {/* Section 8: FAQs */}
                            <section>
                                <h2 className="text-xl sm:text-2xl font-black text-gray-900 mb-6 uppercase tracking-tight">Frequently Asked Questions</h2>
                                <div className="space-y-4">
                                    {GIG_DATA.sections.faqs.map((faq, i) => (
                                        <details key={i} className="group bg-white border border-gray-200 rounded-2xl overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                                            <summary className="flex items-center justify-between cursor-pointer p-5 sm:p-6 font-bold text-gray-900 group-open:bg-gray-50/50 transition-colors">
                                                <span className="pr-4">{faq.q}</span>
                                                <span className="flex-shrink-0 text-gray-400 group-open:text-indigo-600 transition-colors">
                                                    <svg className="w-5 h-5 group-open:rotate-180 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                    </svg>
                                                </span>
                                            </summary>
                                            <div className="px-5 sm:px-6 pb-6 text-gray-600 font-medium leading-relaxed bg-gray-50/50">
                                                {faq.a}
                                            </div>
                                        </details>
                                    ))}
                                </div>
                            </section>

                        </div>
                    </div>


                    {/* RIGHT COLUMN: Sticky Pricing Board */}
                    <div className="flex-none lg:w-[380px] xl:w-[400px] relative">
                        <div className="sticky top-[96px]">
                            <div className="bg-white border border-gray-200/80 rounded-[24px] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.08)] transition-shadow duration-300 mb-6 flex flex-col">

                                {/* Tabs Segmented Control */}
                                <div className="p-2 border-b border-gray-100">
                                    <div className="flex bg-gray-100/60 p-1 rounded-[16px] relative">
                                        {Object.keys(GIG_DATA.packages).map((key) => (
                                            <button
                                                key={key}
                                                onClick={() => setActivePackageTab(key)}
                                                className={`flex-1 py-3 text-[11px] font-bold uppercase tracking-widest relative z-10 transition-colors ${activePackageTab === key ? 'text-gray-900' : 'text-gray-500 hover:text-gray-900'}`}
                                            >
                                                {activePackageTab === key && (
                                                    <motion.div layoutId="pill-indicator" className="absolute inset-0 bg-white rounded-[12px] shadow-[0_2px_8px_rgb(0,0,0,0.06)]" style={{ zIndex: -1 }}></motion.div>
                                                )}
                                                {key}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Package Content */}
                                <div className="p-6 sm:p-7">
                                    <div className="flex justify-between items-start mb-3 gap-4">
                                        <div>
                                            <h3 className="text-lg sm:text-xl font-bold text-gray-900 leading-snug mb-1">{activePackage.title}</h3>
                                            {activePackage.isPopular && (
                                                <div className="inline-flex items-center gap-1 bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-700 px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-widest border border-indigo-100/50">
                                                    <Star size={10} className="fill-indigo-600" /> Most Popular
                                                </div>
                                            )}
                                        </div>
                                        <span className="text-2xl sm:text-3xl font-black text-gray-900 leading-none tracking-tight">{activePackage.price}</span>
                                    </div>

                                    <p className="text-[14px] font-medium text-gray-500 mb-6 min-h-[42px] leading-relaxed">
                                        {activePackage.desc}
                                    </p>

                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="flex-1 flex items-center justify-center gap-2 text-[13px] font-bold text-gray-700 bg-gray-50/80 py-2.5 rounded-xl border border-gray-100/80">
                                            <Clock size={16} className="text-indigo-500" />
                                            {activePackage.delivery}
                                        </div>
                                        <div className="flex-1 flex items-center justify-center gap-2 text-[13px] font-bold text-gray-700 bg-gray-50/80 py-2.5 rounded-xl border border-gray-100/80">
                                            <RotateCw size={16} className="text-indigo-500" />
                                            {activePackage.revisions}
                                        </div>
                                    </div>

                                    <div className="mb-8">
                                        <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">What's Included</div>
                                        <ul className="space-y-3.5">
                                            {activePackage.features.map((feature, i) => (
                                                <li key={i} className="flex items-start gap-3">
                                                    <div className="mt-0.5 w-5 h-5 rounded-full bg-emerald-50 flex items-center justify-center flex-shrink-0">
                                                        <Check size={12} className="text-emerald-600" strokeWidth={3} />
                                                    </div>
                                                    <span className="text-[14px] font-medium text-gray-700 leading-tight pt-px">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <Link href="/checkout" className="flex-1 block overflow-hidden">
                                            <button className="w-full h-[60px] px-4 sm:px-6 bg-[#0A0A0A] hover:bg-indigo-600 text-white rounded-full text-[11px] sm:text-[12px] lg:text-[13px] font-black uppercase tracking-widest transition-all shadow-[0_4px_15px_rgb(0,0,0,0.1)] hover:shadow-[0_8px_25px_rgb(79,70,229,0.3)] flex items-center justify-center gap-2">
                                                <span className="truncate">Continue with {activePackageTab}</span>
                                                <ChevronRight size={18} strokeWidth={2.5} className="flex-shrink-0" />
                                            </button>
                                        </Link>
                                        <button className="w-[60px] h-[60px] flex-none bg-white border border-black/10 text-gray-500 hover:text-black hover:border-black/30 rounded-full flex items-center justify-center transition-all shadow-sm">
                                            <MessageSquare size={22} strokeWidth={2} />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="text-center px-6">
                                <p className="text-[13px] text-gray-500 font-medium">Have specific requirements? <button className="text-indigo-600 font-bold hover:underline transition-all">Get a Custom Quote</button></p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Mobile Sticky CTA (Section 9) */}
            <AnimatePresence>
                <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-black/10 p-4 pb-6 z-40 lg:hidden shadow-[0_-10px_30px_rgb(0,0,0,0.05)]">
                    <div className="flex items-center gap-4 max-w-xl mx-auto">
                        <div className="flex flex-col flex-none">
                            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-0.5">{activePackageTab}</span>
                            <span className="text-xl font-black text-gray-900 leading-none">{activePackage.price}</span>
                        </div>
                        <div className="flex items-center gap-2 flex-1">
                            <button className="w-12 h-12 flex-none bg-white border border-black/10 text-gray-500 hover:text-black rounded-full flex items-center justify-center transition-all shadow-sm">
                                <MessageSquare size={18} strokeWidth={2} />
                            </button>
                            <Link href="/checkout" className="flex-1 block">
                                <button className="w-full h-12 bg-[#0A0A0A] hover:bg-indigo-600 text-white rounded-full text-[11px] sm:text-[12px] font-black uppercase tracking-widest transition-all shadow-md flex items-center justify-center gap-2">
                                    <span className="truncate">Continue</span>
                                    <ChevronRight size={16} strokeWidth={2.5} className="flex-shrink-0" />
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </AnimatePresence>

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
                        <div>
                            <h4 className="font-bold text-[#0A0A0A] mb-6 uppercase tracking-widest text-xs">Categories</h4>
                            <ul className="space-y-4 text-sm font-medium text-gray-500">
                                <li><Link href="/" className="hover:text-indigo-600 transition-colors">Graphics & Design</Link></li>
                                <li><Link href="/" className="hover:text-indigo-600 transition-colors">Programming & Tech</Link></li>
                                <li><Link href="/" className="hover:text-indigo-600 transition-colors">Digital Marketing</Link></li>
                                <li><Link href="/" className="hover:text-indigo-600 transition-colors">Video & Animation</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-[#0A0A0A] mb-6 uppercase tracking-widest text-xs">About</h4>
                            <ul className="space-y-4 text-sm font-medium text-gray-500">
                                <li><Link href="/" className="hover:text-indigo-600 transition-colors">Careers</Link></li>
                                <li><Link href="/" className="hover:text-indigo-600 transition-colors">Press & News</Link></li>
                                <li><Link href="/" className="hover:text-indigo-600 transition-colors">Partnerships</Link></li>
                                <li><Link href="/" className="hover:text-indigo-600 transition-colors">Privacy Policy</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-[#0A0A0A] mb-6 uppercase tracking-widest text-xs">Support</h4>
                            <ul className="space-y-4 text-sm font-medium text-gray-500">
                                <li><Link href="/" className="hover:text-indigo-600 transition-colors">Help & Support</Link></li>
                                <li><Link href="/" className="hover:text-indigo-600 transition-colors">Trust & Safety</Link></li>
                                <li><Link href="/" className="hover:text-indigo-600 transition-colors">Selling on Eduprova</Link></li>
                                <li><Link href="/" className="hover:text-indigo-600 transition-colors">Buying on Eduprova</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-black/5 text-sm font-medium text-gray-500">
                        <p>© {new Date().getFullYear()} Eduprova Inc. All rights reserved.</p>
                    </div>
                </div>
            </footer>

            {/* Floating Message Capsule */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="fixed bottom-6 right-6 z-50 flex items-center p-1.5 bg-white/90 backdrop-blur-[8px] shadow-[0_4px_20px_rgb(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/50 rounded-full cursor-pointer transition-all duration-300 group overflow-hidden"
                onClick={() => setIsChatOpen(true)}
                onMouseEnter={() => setIsCapsuleHovered(true)}
                onMouseLeave={() => setIsCapsuleHovered(false)}
            >
                <div className="relative flex-shrink-0">
                    <img src={GIG_DATA.seller.avatar} alt={GIG_DATA.seller.name} className="w-12 h-12 rounded-full object-cover shadow-sm bg-gray-100 z-10 relative" />
                    <div className="absolute inset-0 rounded-full bg-emerald-400/20 blur-[5px] animate-[pulse_10s_ease-in-out_infinite] z-0"></div>
                    <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-emerald-500 border-2 border-white rounded-full z-20"></div>
                </div>

                <div
                    className={`flex flex-col justify-center overflow-hidden transition-all duration-300 ease-out whitespace-nowrap ${isCapsuleHovered ? 'w-[170px] opacity-100 ml-3.5 mr-4' : 'w-0 opacity-0 ml-0 mr-0'}`}
                >
                    <div className="text-[13px] font-bold text-gray-900 leading-tight mb-0.5">Chat with {GIG_DATA.seller.name}</div>
                    <div className="text-[11px] font-medium text-gray-500 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                        <span>Online • {GIG_DATA.seller.avgResponse}</span>
                    </div>
                </div>
            </motion.div>

            {/* Slide-in Chat Panel */}
            <AnimatePresence>
                {isChatOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/5 z-[60] backdrop-blur-sm"
                            onClick={() => setIsChatOpen(false)}
                        />
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 30, stiffness: 300 }}
                            className="fixed top-0 right-0 bottom-0 w-full sm:w-[400px] bg-white shadow-2xl z-[70] border-l border-black/5 flex flex-col"
                        >
                            {/* Chat Header */}
                            <div className="p-6 border-b border-black/5 flex items-center justify-between bg-white">
                                <div className="flex items-center gap-3">
                                    <div className="relative">
                                        <img src={GIG_DATA.seller.avatar} alt={GIG_DATA.seller.name} className="w-10 h-10 rounded-full object-cover" />
                                        <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 border-2 border-white rounded-full"></div>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900">{GIG_DATA.seller.name}</h3>
                                        <p className="text-xs text-gray-500 font-medium tracking-wide">Online • Avg. response {GIG_DATA.seller.avgResponse}</p>
                                    </div>
                                </div>
                                <button onClick={() => setIsChatOpen(false)} className="w-10 h-10 flex flex-col items-center justify-center rounded-full bg-gray-50 hover:bg-gray-100 text-gray-500 hover:text-gray-900 transition-colors">
                                    <X size={20} />
                                </button>
                            </div>

                            {/* Chat Body */}
                            <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-4 bg-[#F8F9FA]">
                                <div className="text-center text-xs font-bold uppercase tracking-widest text-gray-400 my-4">Today</div>
                                <div className="bg-white p-4 rounded-2xl rounded-tl-sm shadow-sm border border-black/5 self-start max-w-[85%]">
                                    <p className="text-[14px] text-gray-700 leading-relaxed font-medium">Hi there! Thanks for checking out my service. Do you have any questions about the {activePackageTab} package?</p>
                                    <span className="text-[10px] uppercase font-bold text-gray-400 mt-2 block">10:45 AM</span>
                                </div>
                            </div>

                            {/* Chat Input */}
                            <div className="p-4 bg-white border-t border-black/5 pb-8 sm:pb-4">
                                <div className="relative flex items-center">
                                    <input type="text" placeholder="Type a message..." className="w-full bg-gray-50 border border-black/5 rounded-full py-3.5 pl-5 pr-12 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-indigo-600/20 focus:bg-white transition-all shadow-sm" />
                                    <button className="absolute right-2 w-9 h-9 flex items-center justify-center bg-indigo-600 text-white rounded-full hover:bg-indigo-700 hover:scale-105 transition-all shadow-sm">
                                        <ArrowRight size={16} strokeWidth={2.5} />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

        </div>
    );
}
