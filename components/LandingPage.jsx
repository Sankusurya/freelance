"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import HeaderAvatarDropdown from "./HeaderAvatarDropdown";
import {
    Search,
    Bell,
    Mail,
    Heart,
    Bookmark,
    ChevronDown,
    Filter,
    Star,
    Sparkles,
    Menu,
    Flame,
    Layout,
    ArrowLeft,
    ChevronLeft,
    ChevronRight,
    CheckCircle2,
    Home,
    X,
    Smartphone,
    Briefcase,
    ArrowRight,
    BrainCircuit,
    Target,
    FileText,
    AlertCircle
} from "lucide-react";


// Mock Data for Categories & Freelancers
const ALL_FREELANCERS = [
    {
        "id": 1,
        "name": "Sikander",
        "level": "Level 2",
        "rating": 4.9,
        "reviews": 349,
        "title": "I will do ui ux design for saas, dashboard, web app, admin panel in figma",
        "price": "From ₹150",
        "image": "https://images.unsplash.com/photo-1555680202-c86f0e12f086?w=800&q=80",
        "avatar": "https://i.pravatar.cc/150?u=12",
        "category": "UI / UX Design",
        "isChoice": true
    },
    {
        "id": 2,
        "name": "Nabee",
        "level": "Level 2",
        "rating": 4.9,
        "reviews": 61,
        "title": "I will do UX UI design, app design, figma website design, wireframes, prototypes",
        "price": "From ₹120",
        "image": "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80",
        "avatar": "https://i.pravatar.cc/150?u=13",
        "category": "UI / UX Design"
    },
    {
        "id": 3,
        "name": "Zainab Ali",
        "level": "Level 2",
        "rating": 4.9,
        "reviews": 161,
        "title": "I will do product UI UX design app, web, dashboard in figma",
        "price": "From ₹100",
        "image": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
        "avatar": "https://i.pravatar.cc/150?u=14",
        "category": "UI / UX Design"
    },
    {
        "id": 4,
        "name": "Momeynah",
        "level": "Level 2",
        "rating": 4.9,
        "reviews": 105,
        "title": "I will design wireframes, app UI UX design, web design prototype in figma",
        "price": "From ₹80",
        "image": "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
        "avatar": "https://i.pravatar.cc/150?u=15",
        "category": "UI / UX Design"
    },
    {
        "id": 5,
        "name": "Alexandra Reed",
        "level": "Top Rated",
        "rating": 5,
        "reviews": 420,
        "title": "I will build a custom React, Next.js website or complex SaaS platform",
        "price": "From ₹850",
        "image": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
        "avatar": "https://i.pravatar.cc/150?u=1",
        "category": "App & Web Development"
    },
    {
        "id": 6,
        "name": "David Kim",
        "level": "Top Rated",
        "rating": 4.8,
        "reviews": 215,
        "title": "I will develop robust backend systems and REST APIs in Node.js",
        "price": "From ₹500",
        "image": "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
        "avatar": "https://i.pravatar.cc/150?u=2",
        "category": "App & Web Development"
    },
    {
        "id": 7,
        "name": "Olivia Davis",
        "level": "Level 2",
        "rating": 5,
        "reviews": 180,
        "title": "I will design an unforgettable brand identity and logo guidelines",
        "price": "From ₹250",
        "image": "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?w=800&q=80",
        "avatar": "https://i.pravatar.cc/150?u=9",
        "category": "Creative & Brand Identity",
        "isChoice": true
    },
    {
        "id": 8,
        "name": "William Martin",
        "level": "Level 1",
        "rating": 4.8,
        "reviews": 90,
        "title": "I will create engaging 2D/3D motion graphics and explainer videos",
        "price": "From ₹300",
        "image": "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80",
        "avatar": "https://i.pravatar.cc/150?u=18",
        "category": "Video & Animation"
    },
    {
        "id": 9,
        "name": "Sikander",
        "level": "Level 2",
        "rating": 4.9,
        "reviews": 349,
        "title": "I will do ui ux design for saas, dashboard, web app, admin panel in figma",
        "price": "From ₹150",
        "image": "https://images.unsplash.com/photo-1555680202-c86f0e12f086?w=800&q=80",
        "avatar": "https://i.pravatar.cc/150?u=12",
        "category": "UI / UX Design",
        "isChoice": true
    },
    {
        "id": 10,
        "name": "Nabee",
        "level": "Level 2",
        "rating": 4.9,
        "reviews": 61,
        "title": "I will do UX UI design, app design, figma website design, wireframes, prototypes",
        "price": "From ₹120",
        "image": "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80",
        "avatar": "https://i.pravatar.cc/150?u=13",
        "category": "UI / UX Design"
    },
    {
        "id": 11,
        "name": "Zainab Ali",
        "level": "Level 2",
        "rating": 4.9,
        "reviews": 161,
        "title": "I will do product UI UX design app, web, dashboard in figma",
        "price": "From ₹100",
        "image": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
        "avatar": "https://i.pravatar.cc/150?u=14",
        "category": "UI / UX Design"
    },
    {
        "id": 12,
        "name": "Momeynah",
        "level": "Level 2",
        "rating": 4.9,
        "reviews": 105,
        "title": "I will design wireframes, app UI UX design, web design prototype in figma",
        "price": "From ₹80",
        "image": "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
        "avatar": "https://i.pravatar.cc/150?u=15",
        "category": "UI / UX Design"
    },
    {
        "id": 13,
        "name": "Alexandra Reed",
        "level": "Top Rated",
        "rating": 5,
        "reviews": 420,
        "title": "I will build a custom React, Next.js website or complex SaaS platform",
        "price": "From ₹850",
        "image": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
        "avatar": "https://i.pravatar.cc/150?u=1",
        "category": "App & Web Development"
    },
    {
        "id": 14,
        "name": "David Kim",
        "level": "Top Rated",
        "rating": 4.8,
        "reviews": 215,
        "title": "I will develop robust backend systems and REST APIs in Node.js",
        "price": "From ₹500",
        "image": "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
        "avatar": "https://i.pravatar.cc/150?u=2",
        "category": "App & Web Development"
    },
    {
        "id": 15,
        "name": "Olivia Davis",
        "level": "Level 2",
        "rating": 5,
        "reviews": 180,
        "title": "I will design an unforgettable brand identity and logo guidelines",
        "price": "From ₹250",
        "image": "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?w=800&q=80",
        "avatar": "https://i.pravatar.cc/150?u=9",
        "category": "Creative & Brand Identity",
        "isChoice": true
    },
    {
        "id": 16,
        "name": "William Martin",
        "level": "Level 1",
        "rating": 4.8,
        "reviews": 90,
        "title": "I will create engaging 2D/3D motion graphics and explainer videos",
        "price": "From ₹300",
        "image": "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80",
        "avatar": "https://i.pravatar.cc/150?u=18",
        "category": "Video & Animation"
    },
    {
        "id": 17,
        "name": "Sikander",
        "level": "Level 2",
        "rating": 4.9,
        "reviews": 349,
        "title": "I will do ui ux design for saas, dashboard, web app, admin panel in figma",
        "price": "From ₹150",
        "image": "https://images.unsplash.com/photo-1555680202-c86f0e12f086?w=800&q=80",
        "avatar": "https://i.pravatar.cc/150?u=12",
        "category": "UI / UX Design",
        "isChoice": true
    },
    {
        "id": 18,
        "name": "Nabee",
        "level": "Level 2",
        "rating": 4.9,
        "reviews": 61,
        "title": "I will do UX UI design, app design, figma website design, wireframes, prototypes",
        "price": "From ₹120",
        "image": "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80",
        "avatar": "https://i.pravatar.cc/150?u=13",
        "category": "UI / UX Design"
    },
    {
        "id": 19,
        "name": "Zainab Ali",
        "level": "Level 2",
        "rating": 4.9,
        "reviews": 161,
        "title": "I will do product UI UX design app, web, dashboard in figma",
        "price": "From ₹100",
        "image": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
        "avatar": "https://i.pravatar.cc/150?u=14",
        "category": "UI / UX Design"
    },
    {
        "id": 20,
        "name": "Momeynah",
        "level": "Level 2",
        "rating": 4.9,
        "reviews": 105,
        "title": "I will design wireframes, app UI UX design, web design prototype in figma",
        "price": "From ₹80",
        "image": "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
        "avatar": "https://i.pravatar.cc/150?u=15",
        "category": "UI / UX Design"
    },
    {
        "id": 21,
        "name": "Alexandra Reed",
        "level": "Top Rated",
        "rating": 5,
        "reviews": 420,
        "title": "I will build a custom React, Next.js website or complex SaaS platform",
        "price": "From ₹850",
        "image": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
        "avatar": "https://i.pravatar.cc/150?u=1",
        "category": "App & Web Development"
    },
    {
        "id": 22,
        "name": "David Kim",
        "level": "Top Rated",
        "rating": 4.8,
        "reviews": 215,
        "title": "I will develop robust backend systems and REST APIs in Node.js",
        "price": "From ₹500",
        "image": "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
        "avatar": "https://i.pravatar.cc/150?u=2",
        "category": "App & Web Development"
    },
    {
        "id": 23,
        "name": "Olivia Davis",
        "level": "Level 2",
        "rating": 5,
        "reviews": 180,
        "title": "I will design an unforgettable brand identity and logo guidelines",
        "price": "From ₹250",
        "image": "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?w=800&q=80",
        "avatar": "https://i.pravatar.cc/150?u=9",
        "category": "Creative & Brand Identity",
        "isChoice": true
    },
    {
        "id": 24,
        "name": "William Martin",
        "level": "Level 1",
        "rating": 4.8,
        "reviews": 90,
        "title": "I will create engaging 2D/3D motion graphics and explainer videos",
        "price": "From ₹300",
        "image": "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80",
        "avatar": "https://i.pravatar.cc/150?u=18",
        "category": "Video & Animation"
    }
];

const CATEGORIES = [
    "Graphics & Design",
    "Programming & Tech",
    "Digital Marketing",
    "Video & Animation",
    "Writing & Translation",
    "Music & Audio",
    "Business",
    "Finance",
    "AI Services",
    "Personal Growth",
    "Consulting",
    "Data",
    "Photography"
];

const MEGA_MENUS = {
    "Graphics & Design": [
        [
            { title: "Logo & Brand Identity", items: ["Logo Design", "Brand Style Guides", "Business Cards & Stationery", "Fonts & Typography", "Art Direction|NEW", "Logo Maker Tool|TOOL"] },
            { title: "Art & Illustration", items: ["Illustration", "AI Artists", "AI Avatar Design|NEW", "Portraits & Caricatures", "Comic Illustration|NEW", "Cartoon Illustration", "Storyboards"] }
        ],
        [
            { title: "Web & App Design", items: ["Website Design", "App Design", "UX Design", "Landing Page Design", "Icon Design"] },
            { title: "Product & Gaming", items: ["Industrial & Product Design", "Character Modeling", "Game Art", "Graphics for Streamers"] },
            { title: "Print Design", items: ["Brochure Design", "Flyer Design", "Packaging & Label Design", "Poster Design", "Catalog Design", "Menu Design", "Invitation Design"] }
        ],
        [
            { title: "Books & eBooks", items: ["Book Design", "Book Covers", "Book Layout Design", "Children's Book Illustration", "Comic Book Illustration|NEW"] },
            { title: "Visual Design", items: ["Image Editing", "AI Image Editing|NEW", "Presentation Design", "Resume Design", "Infographic Design", "Vector Tracing"] },
            { title: "Marketing Design", items: ["Social Media Design", "Email Design", "Web Banners", "Signage Design", "Billboard Design", "Trade Show Booths"] }
        ],
        [
            { title: "Architecture & Building Design", items: ["Architecture & Interior Design", "Landscape Design", "Building Engineering", "Lighting Design"] },
            { title: "Fashion & Merchandise", items: ["T-Shirts & Merchandise", "Fashion Design", "Jewelry Design"] },
            { title: "3D Design", items: ["3D Architecture", "3D Industrial Design", "3D Fashion & Garment", "3D Printing Characters", "3D Landscape", "3D Game Assets", "3D Jewelry Design", "3D Rendering"] }
        ]
    ],
    "Programming & Tech": [
        [
            { title: "Software Development", items: ["Web Development", "Mobile App Development", "Desktop Applications", "Game Development", "AI Software Development|NEW", "APIs & Integrations"] },
            { title: "QA & Review", items: ["QA & Testing", "Code Review"] }
        ],
        [
            { title: "Website Builders", items: ["WordPress", "Shopify", "Wix", "Webflow", "Squarespace", "Custom Website"] },
            { title: "Application Security", items: ["Cybersecurity & Data Protection", "Vulnerability Assessment", "Penetration Testing"] }
        ],
        [
            { title: "Data", items: ["Data Engineering", "Data Science & AI", "Data Analytics", "Data Visualization", "Databases", "Data Processing"] },
            { title: "Cloud & Cyber Security", items: ["Cloud Computing", "DevOps & MLOps", "Server Management", "IT Support"] }
        ],
        [{ title: "Misc", items: ["Blockchain & Cryptocurrency", "NFT Development", "Bot Development", "Electronics Engineering", "Support & IT", "Convert Files"] }]
    ],
    "Digital Marketing": [
        [{ title: "Search", items: ["Search Engine Optimization (SEO)", "Search Engine Marketing (SEM)", "Local SEO", "E-Commerce SEO", "Video SEO"] }],
        [{ title: "Social", items: ["Social Media Marketing", "Paid Social Media", "Influencer Marketing", "Community Management"] }],
        [{ title: "Content", items: ["Content Marketing", "Video Marketing", "Email Marketing", "Guest Posting", "Podcast Marketing"] }],
        [{ title: "Industry & Strategies", items: ["Marketing Strategy", "Web Analytics", "Public Relations", "Crowdfunding", "Affiliate Marketing"] }]
    ],
    "Video & Animation": [
        [{ title: "Editing & Post-Production", items: ["Video Editing", "Visual Effects", "Video Color Grading", "Subtitles & Captions", "Intro & Outro Videos"] }],
        [{ title: "Animation", items: ["Character Animation", "2D Animation", "3D Animation", "Whiteboard Animation", "Logo Animation"] }],
        [{ title: "Social & Marketing", items: ["Social Media Videos", "UGC Videos", "Corporate Videos", "App & Website Previews", "Real Estate Promos"] }],
        [{ title: "Other", items: ["Live Action Explainers", "Lottie & Web Animation", "E-Commerce Product Videos", "Unboxing Videos"] }]
    ],
    "Writing & Translation": [
        [{ title: "Content Writing", items: ["Articles & Blog Posts", "Website Content", "Product Descriptions", "Grant Writing", "Technical Writing"] }],
        [{ title: "Editing & Critique", items: ["Proofreading & Editing", "AI Content Editing", "Beta Reading"] }],
        [{ title: "Business & Marketing", items: ["Copywriting", "Email Copy", "Sales Copy", "Social Media Copy", "Podcast Writing"] }],
        [{ title: "Translation & Transcripts", items: ["Translation", "Localization", "Transcription", "Cover Letters", "Resumes"] }]
    ],
    "Music & Audio": [
        [{ title: "Music Production", items: ["Producers & Composers", "Beat Making", "Singer-Songwriters", "Mixing & Mastering"] }],
        [{ title: "Voice Over", items: ["Voice Over", "AI Voice Over|NEW", "Dubbing/Voice Acting"] }],
        [{ title: "Audio & Sound", items: ["Sound Design", "Audio Editing", "Podcast Production", "Audiobook Production"] }],
        [{ title: "Music Lessons", items: ["Online Music Lessons", "Singing Lessons", "DJ Mixing"] }]
    ],
    "Business": [
        [{ title: "Business Operations", items: ["Virtual Assistant", "Data Entry", "Project Management", "Supply Chain Management"] }],
        [{ title: "Business Consulting", items: ["Business Consulting", "Market Research", "Business Plans", "Legal Consulting"] }],
        [{ title: "Sales & Customer Care", items: ["Sales", "Customer Care", "CRM Management", "Lead Generation"] }],
        [{ title: "Other", items: ["Event Management", "Human Resources", "Career Counseling"] }]
    ],
    "Finance": [
        [{ title: "Accounting", items: ["Accounting & Bookkeeping", "Tax Consulting", "Financial Forecasting"] }],
        [{ title: "Personal Finance", items: ["Personal Finance Planning", "Wealth Management"] }],
        [{ title: "Corporate Finance", items: ["Financial Modeling", "Corporate Valuation", "Fundraising Consulting"] }],
        [{ title: "Trading", items: ["Algorithmic Trading", "Crypto Trading Advice", "Trading Bots"] }]
    ],
    "AI Services": [
        [{ title: "AI Development", items: ["AI Applications", "AI Agents", "Custom GPT Apps", "AI Integration"] }],
        [{ title: "AI Art & Audio", items: ["AI Artists", "AI Music", "AI Voice Over", "AI Video Generation"] }],
        [{ title: "AI Text & Data", items: ["AI Content Editing", "Prompt Engineering", "Data Science & AI"] }],
        [{ title: "AI Consulting", items: ["AI Strategy", "AI Audits", "AI Lessons"] }]
    ],
    "Personal Growth": [
        [{ title: "Life & Career", items: ["Life Coaching", "Career Counseling", "Resume Writing", "Interview Preparation"] }],
        [{ title: "Health & Wellness", items: ["Fitness Training", "Nutrition Coaching", "Mental Health Coaching", "Mindfulness & Meditation"] }],
        [{ title: "Hobbies & Leisure", items: ["Arts & Crafts Lessons", "Cooking Lessons", "Gaming Coaching", "Travel Planning"] }],
        [{ title: "Spirituality", items: ["Astrology & Reading", "Energy Healing", "Spiritual Counseling"] }]
    ],
    "Consulting": [
        [{ title: "Business & Strategy", items: ["Business Consulting", "Market Research", "Startup Consulting", "Management Consulting"] }],
        [{ title: "Marketing & Sales", items: ["Marketing Consulting", "Sales Consulting", "Brand Consulting"] }],
        [{ title: "Tech & IT", items: ["IT Consulting", "Cybersecurity Consulting", "Software Architecture Consulting"] }],
        [{ title: "Other Consulting", items: ["Legal Consulting", "Financial Consulting", "HR Consulting"] }]
    ],
    "Data": [
        [{ title: "Data Analysis", items: ["Data Analytics", "Data Visualization", "Dashboards", "Business Intelligence"] }],
        [{ title: "Data Science", items: ["Machine Learning", "Data Modeling", "Statistical Analysis", "Deep Learning"] }],
        [{ title: "Data Engineering", items: ["Data Engineering", "Data Warehousing", "ETL Pipelines", "Big Data"] }],
        [{ title: "Management", items: ["Databases", "Data Processing", "Data Entry", "Data Cleaning"] }]
    ],
    "Photography": [
        [{ title: "Products & Lifestyle", items: ["Product Photography", "Food Photography", "Lifestyle Photography", "Fashion Photography"] }],
        [{ title: "Events & Portraits", items: ["Event Photography", "Portrait Photography", "Wedding Photography"] }],
        [{ title: "Specialized", items: ["Real Estate Photography", "Drone & Aerial Photography", "Nature Photography"] }],
        [{ title: "Post-Processing", items: ["Photo Retouching", "Color Grading", "Background Removal", "Image Restoration"] }]
    ]
};

const FILTER_OPTIONS = {
    "Service Type": ["All Service Types", "Graphics & Design", "Programming & Tech", "Digital Marketing", "Video & Animation", "Writing & Translation", "Music & Audio", "Business", "Finance", "AI Services", "Personal Growth", "Consulting", "Data", "Photography"],
    "Budget Range": ["Any Budget", "Under ₹500", "₹500 - ₹1000", "₹1000 - ₹5000", "₹5000 & Above", "Custom Amount"],
    "Delivery Time": ["Anytime", "Express (24h)", "Up to 3 Days", "Up to 7 Days"],
    "Seller Level": ["Any Level", "Top Rated Seller", "Level 2 Seller", "Level 1 Seller", "New Seller"],
    "Rating": ["Any Rating", "4.5 & Above", "4.0 & Above", "3.0 & Above"]
};

const SORT_OPTIONS = ["Recommended", "Best selling", "Newest arrivals"];

function FreelancerCard({ freelancer, index }) {
    const router = useRouter();
    const [isExpanded, setIsExpanded] = useState(false);
    const priceAmount = freelancer.price?.replace(/from /i, '').trim();

    const getTag = (category) => {
        if (category?.includes("UI") || category?.includes("Design")) return "SaaS UI";
        if (category?.includes("Web") || category?.includes("Development")) return "Web Dev";
        if (category?.includes("Video") || category?.includes("Animation")) return "Motion Graphics";
        return "Specialist";
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: "easeOut", delay: index * 0.08 }}
            className="w-full relative"
        >
            <div className={`bg-white/60 backdrop-blur-xl border border-white/40 p-6 rounded-2xl transition-all duration-300 flex flex-col relative shadow-lg ${isExpanded ? 'z-20' : ''}`}
                style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.6), rgba(255,255,255,0.3))' }}>

                {/* Main Card Content: 3-Column Layout */}
                <div className="grid grid-cols-1 md:grid-cols-[1.2fr_2fr_1fr] md:gap-8 items-start">

                    {/* Column 1: Identity */}
                    <div className="flex items-center gap-2 mb-4 md:mb-0">
                        <div
                            onClick={(e) => { e.stopPropagation(); router.push(`/freelancer/${freelancer.name.toLowerCase().replace(/\s+/g, '_')}`); }}
                            className="relative flex-shrink-0 cursor-pointer"
                        >
                            <img src={freelancer.avatar} alt={freelancer.name} className="w-[56px] h-[56px] rounded-full object-cover border-2 border-white shadow-sm bg-gray-100" />
                            <div className="absolute bottom-0 right-0 w-[8px] h-[8px] bg-emerald-500 border border-white rounded-full"></div>
                        </div>

                        <div className="flex flex-col ml-2">
                            <h4
                                onClick={(e) => { e.stopPropagation(); router.push(`/freelancer/${freelancer.name.toLowerCase().replace(/\s+/g, '_')}`); }}
                                className="text-[17px] font-bold text-[#0A0A0A] cursor-pointer hover:text-[#0066FF] transition-colors truncate"
                            >
                                {freelancer.name}
                            </h4>
                            <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mt-1">
                                {getTag(freelancer.category)}
                            </span>
                        </div>
                    </div>

                    {/* Column 2: Service Info */}
                    <div className="flex flex-col gap-[10px] min-w-0 mb-4 md:mb-0 cursor-pointer" onClick={() => router.push(`/service/${freelancer.id}`)}>
                        <h3 className="text-[18px] md:text-[20px] font-bold text-[#0A0A0A] leading-[1.4] line-clamp-2 pr-6">
                            {freelancer.title}
                        </h3>

                        <div className="flex items-center gap-1.5 h-6">
                            <Star size={14} className="fill-amber-500 text-amber-500" />
                            <span className="text-[13px] font-bold text-gray-900">{freelancer.rating}</span>
                            <span className="text-[13px] font-medium text-gray-400">({freelancer.reviews})</span>
                            <span className="text-gray-300 mx-1">&bull;</span>
                            <span className="flex items-center gap-1.5 text-[12px] font-bold text-gray-500 uppercase tracking-[0.1em]"><span className="text-sm">🚀</span> 2 Days Delivery</span>
                        </div>

                        {/* Trust Indicators */}
                        <div className="flex flex-wrap items-center gap-[10px] mt-3">
                            <div className="bg-white/70 border border-gray-200 px-3 py-1 rounded-lg text-sm font-medium text-gray-700 flex items-center gap-[10px]">
                                <CheckCircle2 size={14} className="text-[#0066FF]" /> 92% Score
                            </div>
                            <div className="bg-white/70 border border-gray-200 px-3 py-1 rounded-lg text-sm font-medium text-gray-700 flex items-center gap-[10px]">
                                <Briefcase size={14} className="text-[#E056FD]" /> 150+ Jobs
                            </div>
                            <div className="bg-white/70 border border-gray-200 px-3 py-1 rounded-lg text-sm font-medium text-gray-700 flex items-center gap-[10px]">
                                <Smartphone size={14} className="text-blue-500" /> 1h Response
                            </div>
                        </div>
                    </div>

                    {/* Column 3: Price & Actions */}
                    <div className="flex flex-col items-end shrink-0 relative">
                        <button
                            onClick={(e) => { e.stopPropagation(); }}
                            className="text-gray-300 hover:text-rose-500 transition-colors p-1"
                        >
                            <Bookmark size={22} className={freelancer.isChoice ? "fill-rose-500 text-rose-500" : ""} />
                        </button>

                        <div className="flex flex-col items-end mt-[14px] w-full">
                            <span className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-[8px]">Starting At</span>
                            <div className="text-[24px] font-bold text-[#0A0A0A] leading-none mb-[18px]">
                                {priceAmount || freelancer.price}
                            </div>
                        </div>

                        <div className="flex items-center gap-[12px] w-full">
                            <button
                                onClick={(e) => { e.stopPropagation(); }}
                                className="flex-1 h-10 px-6 text-[12px] uppercase font-bold tracking-widest rounded-xl bg-linear-to-r from-[#0066FF] to-[#E056FD] text-white shadow-lg shadow-blue-200 transition-all hover:scale-105 active:scale-95"
                            >
                                Contact
                            </button>
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setIsExpanded(!isExpanded);
                                }}
                                className={`w-10 h-10 flex items-center justify-center rounded-full bg-white text-[#0A0A0A] border border-black/5 shadow-sm transition-all duration-200 ${isExpanded ? 'rotate-180 bg-[#0A0A0A] text-white' : 'hover:bg-gray-50'}`}
                            >
                                <ChevronDown size={14} strokeWidth={3} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Expanded Section */}
                <AnimatePresence>
                    {isExpanded && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25, ease: "easeInOut" }}
                            className="overflow-hidden cursor-default"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="mt-8 pt-8 border-t border-black/5 flex flex-col md:flex-row gap-8">
                                <div className="flex-1 flex flex-col gap-6">
                                    <div>
                                        <h5 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-2">Professional Bio</h5>
                                        <p className="text-[14px] text-gray-600 font-medium leading-[1.6]">
                                            With specialized expertise in crafting high-conversion digital experiences, I deliver premium solutions tailored to your business goals. My approach combines strategic thinking with exceptional execution.
                                        </p>
                                    </div>
                                    <div>
                                        <h5 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-3">Core Competencies</h5>
                                        <div className="flex flex-wrap gap-2">
                                            {["Marketplace Strategy", "User Journey Mapping", "Complex UI Systems", "High-Fidelity Interaction"].map(skill => (
                                                <span key={skill} className="bg-white/80 border border-gray-100 px-3 py-1.5 rounded-full text-[11px] font-bold text-gray-700 shadow-sm">
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="md:w-[320px] shrink-0">
                                    <h5 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-3">Recent Work</h5>
                                    <div className="grid grid-cols-3 gap-3 mb-4">
                                        <img src={freelancer.image} className="w-full aspect-square object-cover rounded-xl border border-black/5 shadow-sm" alt="Work 1" />
                                        <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80" className="w-full aspect-square object-cover rounded-xl border border-black/5 shadow-sm" alt="Work 2" />
                                        <div
                                            onClick={() => router.push(`/freelancer/${freelancer.name.toLowerCase().replace(/\s+/g, '_')}`)}
                                            className="w-full aspect-square bg-gray-50 border border-dashed border-gray-300 rounded-xl flex items-center justify-center text-[12px] font-bold text-gray-400 cursor-pointer hover:bg-white hover:border-gray-400 transition-all"
                                        >
                                            +12
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => router.push(`/freelancer/${freelancer.name.toLowerCase().replace(/\s+/g, '_')}`)}
                                        className="w-full h-11 bg-[#0A0A0A] text-white text-[11px] font-bold uppercase tracking-[0.2em] rounded-full flex items-center justify-center gap-2 group/btn hover:bg-indigo-600 transition-all shadow-md"
                                    >
                                        View Full Profile <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    );
}


export default function LandingPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [isOnline, setIsOnline] = useState(true);
    const [activeFilter, setActiveFilter] = useState("Recommended");
    const [hoveredCategory, setHoveredCategory] = useState(null);

    // Scroll state for categories
    const categoriesRef = useRef(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const checkScroll = () => {
        if (categoriesRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = categoriesRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
        }
    };

    useEffect(() => {
        checkScroll();
        window.addEventListener('resize', checkScroll);
        // Add a slight delay check for initial render if fonts/layout shift
        setTimeout(checkScroll, 100);
        return () => window.removeEventListener('resize', checkScroll);
    }, []);

    const scrollByAmount = (amount) => {
        if (categoriesRef.current) {
            categoriesRef.current.scrollBy({ left: amount, behavior: 'smooth' });
        }
    };

    // Filter Dropdown State
    const [activeFilterDropdown, setActiveFilterDropdown] = useState(null);
    const filtersRef = useRef(null);

    // Active Filters State
    const [selectedFilters, setSelectedFilters] = useState({
        "Service Type": "All Service Types",
        "Budget Range": "Any Budget",
        "Delivery Time": "Anytime",
        "Seller Level": "Any Level",
        "Rating": "Any Rating"
    });

    // Active Sort State
    const [activeSort, setActiveSort] = useState("Recommended");
    const [sortDropdownOpen, setSortDropdownOpen] = useState(false);

    const [activeService, setActiveService] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [hasViewedAll, setHasViewedAll] = useState(false);

    // Show 8 cards (2 rows) initially, then 16 per page once they "View All"
    const ITEMS_PER_PAGE = hasViewedAll ? 16 : 8;

    const handleCategoryClick = (cat) => {
        setSelectedFilters(prev => ({ ...prev, "Service Type": cat }));
        setActiveService(null);
        setSearchQuery("");
        setHoveredCategory(null);
    };

    const handleSubServiceClick = (service, category) => {
        setSelectedFilters(prev => ({ ...prev, "Service Type": category }));
        setActiveService(service.split('|')[0]); // ignore new/tool tags
        setSearchQuery("");
        setHoveredCategory(null);
    };

    // Reset page when filters, queries, or sort change
    useEffect(() => {
        setCurrentPage(1);
        setHasViewedAll(false);
    }, [searchQuery, selectedFilters, activeService, activeSort]);

    useEffect(() => {
        function handleClickOutside(event) {
            if (filtersRef.current && !filtersRef.current.contains(event.target)) {
                setActiveFilterDropdown(null);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    // Grouping & Filtering Logic
    const normalizedQuery = searchQuery.toLowerCase().trim();

    // Filter all first based on search
    const filteredFreelancers = ALL_FREELANCERS.filter(f => {
        // 1. Search Filtering
        if (normalizedQuery && !(
            f.title.toLowerCase().includes(normalizedQuery) ||
            f.category.toLowerCase().includes(normalizedQuery) ||
            f.name.toLowerCase().includes(normalizedQuery)
        )) return false;

        // 2. Service Type Filter
        if (selectedFilters["Service Type"] !== "All Service Types" && f.category !== selectedFilters["Service Type"]) return false;

        // 3. Budget Range Filter
        // Parse the price number out of the string containing ₹
        const priceMatch = f.price.match(/\d+/);
        const price = priceMatch ? parseInt(priceMatch[0], 10) : 0;

        if (selectedFilters["Budget Range"] === "Under ₹500" && price >= 500) return false;
        if (selectedFilters["Budget Range"] === "₹500 - ₹1000" && (price < 500 || price > 1000)) return false;
        if (selectedFilters["Budget Range"] === "₹1000 - ₹5000" && (price < 1000 || price > 5000)) return false;
        if (selectedFilters["Budget Range"] === "₹5000 & Above" && price < 5000) return false;

        // 4. Seller Level Filter
        if (selectedFilters["Seller Level"] !== "Any Level" && f.level !== selectedFilters["Seller Level"].toUpperCase()) {
            const fLevel = f.level.toLowerCase();
            const selLevel = selectedFilters["Seller Level"].toLowerCase().replace(' seller', '');
            if (!fLevel.includes(selLevel) && fLevel !== selLevel) return false;
        }

        // 5. Rating Filter
        if (selectedFilters.Rating !== "Any Rating") {
            const ratingThreshold = parseFloat(selectedFilters.Rating.split(' ')[0]);
            if (f.rating < ratingThreshold) return false;
        }

        // 6. Active Sub-Service Filter
        if (activeService && !f.title.toLowerCase().includes(activeService.toLowerCase()) && !f.category.toLowerCase().includes(activeService.toLowerCase())) return false;

        return true;
    });

    // Sort Logic
    const sortedAndFilteredFreelancers = [...filteredFreelancers].sort((a, b) => {
        if (activeSort === "Best selling") {
            // Proxying "Best selling" by using number of reviews
            return b.reviews - a.reviews;
        }
        if (activeSort === "Newest arrivals") {
            // Newest arrivals defaults to array order for this mockup since we have no dates
            return 0;
        }

        // "Recommended" defaults to original array order
        return 0;
    });

    const totalPages = Math.ceil(sortedAndFilteredFreelancers.length / ITEMS_PER_PAGE);
    const currentData = sortedAndFilteredFreelancers.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

    const hasActiveFilters =
        selectedFilters["Service Type"] !== "All Service Types" ||
        selectedFilters["Budget Range"] !== "Any Budget" ||
        selectedFilters["Delivery Time"] !== "Anytime" ||
        selectedFilters["Seller Level"] !== "Any Level" ||
        selectedFilters["Rating"] !== "Any Rating" ||
        activeService !== null ||
        searchQuery.trim() !== "";

    return (
        <div className="min-h-[100svh] bg-transparent text-[#0A0A0A] font-sans relative overflow-hidden">



            <div className="relative z-10 flex flex-col min-h-screen">

                {/* TOP NAVBAR */}
                <header className="sticky top-0 z-50 bg-transparent backdrop-blur-xl transition-all duration-300">
                    <div className="max-w-[1400px] mx-auto">
                        <div className="flex items-center justify-between px-6 py-6">

                            <div className="flex items-center gap-12 flex-1">
                                <Link href="/">
                                    <div className="text-2xl font-black tracking-tighter uppercase flex items-center gap-2 text-[#0A0A0A]">
                                        <div className="w-4 h-4 bg-indigo-600 rounded-sm"></div>
                                        Eduprova
                                    </div>
                                </Link>

                                {/* Main Search Bar */}
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

                            {/* Nav Actions */}
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
                                        <span className="absolute top-0 right-0.5 w-2.5 h-2.5 bg-rose-500 rounded-full border-2 border-[#FBFCFF] translate-x-1/2 -translate-y-1/4"></span>
                                    </button>
                                </nav>
                                <Link href="/post-project">
                                    <button className="bg-[#0A0A0A] text-white px-5 py-2.5 rounded-full text-[11px] font-bold uppercase tracking-widest hover:bg-indigo-600 hover:-translate-y-0.5 transition-all shadow-md">
                                        Post a Project
                                    </button>
                                </Link>
                                <HeaderAvatarDropdown isOnline={isOnline} />
                            </div>

                        </div>

                        {/* Sub Navigation Categories */}
                        <div
                            className="relative group"
                            onMouseLeave={() => setHoveredCategory(null)}
                        >
                            {canScrollLeft && (
                                <button
                                    onClick={() => scrollByAmount(-300)}
                                    className="absolute left-0 top-0 bottom-0 z-50 bg-gradient-to-r from-[#FBFCFF] via-[#FBFCFF_80%] to-transparent w-24 flex items-center justify-start pl-6 group pointer-events-auto"
                                >
                                    <div className="w-8 h-8 rounded-full bg-white shadow-[0_4px_12px_rgba(0,0,0,0.1)] border border-black/5 flex items-center justify-center text-gray-400 group-hover:text-indigo-600 group-hover:shadow-[0_4px_16px_rgba(79,70,229,0.2)] group-hover:border-indigo-100 transition-all group-active:scale-95">
                                        <ChevronLeft size={16} strokeWidth={2.5} />
                                    </div>
                                </button>
                            )}

                            <div
                                ref={categoriesRef}
                                onScroll={checkScroll}
                                className="flex items-center gap-8 px-6 py-4 overflow-x-auto hide-scrollbar z-40 relative scroll-smooth"
                            >
                                {CATEGORIES.map((cat, i) => (
                                    <div
                                        key={i}
                                        onMouseEnter={() => setHoveredCategory(cat)}
                                    >
                                        <button
                                            onClick={() => handleCategoryClick(cat)}
                                            className={`whitespace-nowrap pb-2 text-xs py-2 font-bold uppercase tracking-widest text-gray-500 hover:text-[#0A0A0A] transition-colors flex items-center gap-2 ${(hoveredCategory === cat || selectedFilters.Category === cat) ? 'text-[#0A0A0A] border-b-2 border-[#0A0A0A]' : 'border-b-2 border-transparent'}`}>
                                            {cat}
                                        </button>
                                    </div>
                                ))}
                            </div>

                            {canScrollRight && (
                                <button
                                    onClick={() => scrollByAmount(300)}
                                    className="absolute right-0 top-0 bottom-0 z-50 bg-gradient-to-l from-[#FBFCFF] via-[#FBFCFF_80%] to-transparent w-24 flex items-center justify-end pr-6 group pointer-events-auto"
                                >
                                    <div className="w-8 h-8 rounded-full bg-white shadow-[0_4px_12px_rgba(0,0,0,0.1)] border border-black/5 flex items-center justify-center text-gray-400 group-hover:text-indigo-600 group-hover:shadow-[0_4px_16px_rgba(79,70,229,0.2)] group-hover:border-indigo-100 transition-all group-active:scale-95">
                                        <ChevronRight size={16} strokeWidth={2.5} />
                                    </div>
                                </button>
                            )}

                            {/* MEGA MENU */}
                            {hoveredCategory && MEGA_MENUS[hoveredCategory] && (
                                <div
                                    className="absolute top-full left-0 w-full bg-white border-b border-black/5 shadow-2xl z-40 pb-12 pt-8 max-h-[calc(100vh-140px)] overflow-y-auto overscroll-contain custom-scrollbar"
                                >
                                    <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                                        {MEGA_MENUS[hoveredCategory].map((col, idx) => (
                                            <div key={idx} className="flex flex-col gap-8">
                                                {col.map(section => (
                                                    <div key={section.title}>
                                                        <h3 className="text-[#0A0A0A] font-bold mb-4">{section.title}</h3>
                                                        <ul className="flex flex-col gap-3">
                                                            {section.items.map(item => {
                                                                const [name, badge] = item.split('|');
                                                                return (
                                                                    <li key={name}>
                                                                        <button onClick={() => handleSubServiceClick(name, hoveredCategory)} className="text-gray-500 text-sm font-medium hover:text-indigo-600 transition-colors flex items-center gap-2 text-left">
                                                                            {name}
                                                                            {badge === 'NEW' && <span className="text-[9px] font-black tracking-widest text-[#E11D48] border border-rose-200 uppercase px-1.5 py-0.5 rounded-full bg-rose-50">NEW</span>}
                                                                            {badge === 'TOOL' && <span className="text-indigo-600 text-[10px] ml-1">✏️</span>}
                                                                        </button>
                                                                    </li>
                                                                )
                                                            })}
                                                        </ul>
                                                    </div>
                                                ))}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </header>


                {!searchQuery && (
                    <div className="relative pt-8 pb-10 mb-6 bg-white/40 backdrop-blur-md">
                        <div className="max-w-[1400px] mx-auto px-6">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                                <div>
                                    <h2 className="text-sm md:text-base font-bold text-gray-500 tracking-widest uppercase mb-4">
                                        Welcome back, Sanku S.
                                    </h2>
                                    {/* Profile Strength Indication (Conditionally rendered) */}
                                    {35 < 100 && (
                                        <div className="flex items-center gap-2 text-xs font-bold text-orange-600 bg-orange-50 px-3 py-1.5 rounded-full inline-flex border border-orange-200 shadow-sm">
                                            <AlertCircle size={14} className="text-orange-500" />
                                            <span>Profile Strength: <span className="font-black text-[#0A0A0A]">35%</span></span>
                                            <span className="text-orange-300 mx-1">|</span>
                                            <span className="underline hover:text-orange-800 transition-colors cursor-pointer">Complete Profile</span>
                                        </div>
                                    )}
                                </div>
                                <div className="flex items-center gap-4 flex-shrink-0">
                                    <div className="hidden sm:flex items-center gap-3 bg-white px-5 py-3 rounded-full border border-black/5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all cursor-pointer">
                                        <div className="w-8 h-8 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center">
                                            <Briefcase size={14} />
                                        </div>
                                        <div>
                                            <div className="text-[10px] font-black uppercase tracking-[0.15em] text-gray-400">Active Orders</div>
                                            <div className="text-sm font-black text-[#0A0A0A]">2 In Progress</div>
                                        </div>
                                    </div>
                                    <div className="hidden lg:flex items-center gap-3 bg-white px-5 py-3 rounded-full border border-black/5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all cursor-pointer">
                                        <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
                                            <CheckCircle2 size={14} />
                                        </div>
                                        <div>
                                            <div className="text-[10px] font-black uppercase tracking-[0.15em] text-gray-400">Completed</div>
                                            <div className="text-sm font-black text-[#0A0A0A]">12 Projects</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* MAIN CONTENT */}
                <main className="max-w-[1400px] mx-auto px-6 pt-0 pb-32">

                    {searchQuery && (
                        <div className="mb-6 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-500">
                            <Link href="/" className="hover:text-[#0A0A0A]">Home</Link>
                            <span className="text-gray-300">/</span>
                            <span className="text-indigo-600">Search Results</span>
                        </div>
                    )}

                    {!searchQuery && (
                        <div className="mb-8">
                            <div className="flex items-center gap-3 mb-6 text-sm">
                                <button onClick={() => { setActiveService(null); setSelectedFilters(prev => ({ ...prev, "Service Type": "All Service Types" })); }} className="text-[#0A0A0A] hover:text-indigo-600 transition-colors">
                                    <Home size={18} />
                                </button>
                                <span className="text-gray-300">/</span>
                                <span className="text-gray-500 font-medium cursor-pointer hover:text-[#0A0A0A] transition-colors" onClick={() => setActiveService(null)}>
                                    {selectedFilters["Service Type"] === "All Service Types" ? "All Services" : selectedFilters["Service Type"]}
                                </span>
                                {activeService && (
                                    <>
                                        <span className="text-gray-300">/</span>
                                        <span className="text-[#0A0A0A] font-bold">{activeService}</span>
                                    </>
                                )}
                            </div>
                            <h1 className="text-4xl md:text-5xl font-black tracking-tight text-[#0A0A0A] uppercase">
                                {activeService || (selectedFilters["Service Type"] === "All Service Types" ? "Explore Services." : selectedFilters["Service Type"] + ".")}
                            </h1>
                            <p className="text-gray-500 mt-4 text-lg font-medium">
                                {sortedAndFilteredFreelancers.length} {sortedAndFilteredFreelancers.length === 1 ? 'service' : 'services'} available
                            </p>
                        </div>
                    )}

                    {/* Filters Row - Clean & Minimal */}
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8 border-b border-black/5 pb-6" ref={filtersRef}>
                        <div className="flex items-center gap-3 flex-wrap relative">
                            {Object.keys(FILTER_OPTIONS).map((filter, i) => (
                                <div key={i} className="relative">
                                    <button
                                        onClick={() => setActiveFilterDropdown(activeFilterDropdown === filter ? null : filter)}
                                        className={`flex items-center gap-2 border shadow-sm rounded-full px-5 py-2.5 text-xs font-bold uppercase tracking-widest transition-all ${activeFilterDropdown === filter ? 'bg-[#0A0A0A] text-white border-[#0A0A0A]' : 'bg-white border-black/5 text-[#0A0A0A] hover:border-black/20'}`}
                                    >
                                        {filter} <ChevronDown size={14} className={`transition-transform duration-300 ${activeFilterDropdown === filter ? 'text-white rotate-180' : 'text-gray-400'}`} />
                                    </button>

                                    {/* Dropdown Menu */}
                                    <AnimatePresence>
                                        {activeFilterDropdown === filter && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                                transition={{ duration: 0.2, ease: "easeOut" }}
                                                className="absolute top-full left-0 mt-3 w-56 bg-white border border-black/5 shadow-2xl rounded-2xl z-50 overflow-hidden"
                                            >
                                                <div className="p-2 flex flex-col gap-1 max-h-[300px] overflow-y-auto custom-scrollbar">
                                                    {FILTER_OPTIONS[filter].map((option, idx) => {
                                                        const isSelected = selectedFilters[filter] === option;
                                                        return (
                                                            <button
                                                                key={idx}
                                                                onClick={() => {
                                                                    setSelectedFilters(prev => ({ ...prev, [filter]: option }));
                                                                    setActiveFilterDropdown(null);
                                                                }}
                                                                className={`flex items-center justify-between w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all group ${isSelected ? 'text-indigo-600 bg-indigo-50/50' : 'text-gray-600 hover:text-[#0A0A0A] hover:bg-gray-50'}`}
                                                            >
                                                                {option}
                                                                {isSelected ? (
                                                                    <CheckCircle2 size={16} className="text-indigo-600" />
                                                                ) : (
                                                                    <CheckCircle2 size={16} className="text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity" />
                                                                )}
                                                            </button>
                                                        )
                                                    })}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}

                            {hasActiveFilters && (
                                <div className="relative ml-2">
                                    <button
                                        onClick={() => {
                                            setSearchQuery('');
                                            setActiveService(null);
                                            setSelectedFilters({
                                                "Service Type": "All Service Types",
                                                "Budget Range": "Any Budget",
                                                "Delivery Time": "Anytime",
                                                "Seller Level": "Any Level",
                                                "Rating": "Any Rating"
                                            });
                                        }}
                                        className="flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-red-500 hover:text-red-600 transition-colors"
                                    >
                                        <X size={14} /> Clear Filters
                                    </button>
                                </div>
                            )}
                        </div>

                        <div className="relative flex items-center gap-3 text-xs font-bold uppercase tracking-widest z-40">
                            <span className="text-gray-400">Sort By:</span>
                            <button
                                onClick={() => setSortDropdownOpen(!sortDropdownOpen)}
                                className="flex items-center gap-1.5 text-[#0A0A0A] hover:text-indigo-600 transition-colors"
                            >
                                {activeSort} <ChevronDown size={14} className={`transition-transform duration-300 ${sortDropdownOpen ? 'rotate-180' : ''}`} />
                            </button>

                            <AnimatePresence>
                                {sortDropdownOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                        transition={{ duration: 0.2, ease: "easeOut" }}
                                        className="absolute top-full right-0 mt-3 w-56 bg-white border border-black/5 shadow-2xl rounded-2xl z-50 overflow-hidden"
                                    >
                                        <div className="p-2 flex flex-col gap-1">
                                            {SORT_OPTIONS.map((option, idx) => {
                                                const isSelected = activeSort === option;
                                                return (
                                                    <button
                                                        key={idx}
                                                        onClick={() => {
                                                            setActiveSort(option);
                                                            setSortDropdownOpen(false);
                                                        }}
                                                        className={`flex items-center justify-between w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all group ${isSelected ? 'text-indigo-600 bg-indigo-50/50' : 'text-gray-600 hover:text-[#0A0A0A] hover:bg-gray-50'}`}
                                                    >
                                                        {option}
                                                        {isSelected && (
                                                            <CheckCircle2 size={16} className="text-indigo-600" />
                                                        )}
                                                    </button>
                                                )
                                            })}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* Results Area */}
                    <div className="space-y-20">
                        {/* Empty State */}
                        {sortedAndFilteredFreelancers.length === 0 && (
                            <div className="py-24 text-center flex flex-col items-center">
                                <div className="w-20 h-20 bg-white shadow-sm border border-black/5 rounded-full flex items-center justify-center mb-6">
                                    <Search size={32} className="text-gray-300" />
                                </div>
                                <h2 className="text-2xl font-black text-[#0A0A0A] uppercase mb-4">No results found</h2>
                                <p className="text-gray-500 font-medium mb-8 max-w-sm">Try using different keywords or removing filters to find what you&apos;re looking for.</p>
                                <button
                                    onClick={() => {
                                        setSearchQuery('');
                                        setActiveService(null);
                                        setSelectedFilters(prev => ({
                                            ...prev,
                                            "Service Type": "All Service Types",
                                            "Budget Range": "Any Budget",
                                            "Delivery Time": "Anytime",
                                            "Seller Level": "Any Level",
                                            "Rating": "Any Rating"
                                        }));
                                    }}
                                    className="bg-[#0A0A0A] text-white px-8 py-4 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-indigo-600 transition-all shadow-xl shadow-black/10"
                                >
                                    Clear All Filters
                                </button>
                            </div>
                        )}

                        {/* Results grid */}
                        {sortedAndFilteredFreelancers.length > 0 && (
                            <div>
                                <div className="grid grid-cols-1 gap-5 mb-16 w-full">
                                    {currentData.map((freelancer, index) => (
                                        <FreelancerCard key={freelancer.id} freelancer={freelancer} index={index} />
                                    ))}
                                </div>

                                {/* Pagination and View All */}
                                {!hasViewedAll && sortedAndFilteredFreelancers.length > 8 ? (
                                    <div className="flex justify-center border-t border-black/5 pt-12">
                                        <button
                                            onClick={() => setHasViewedAll(true)}
                                            className="bg-white border-2 border-black/5 hover:border-black/20 text-[#0A0A0A] px-10 py-4 rounded-full font-bold text-xs uppercase tracking-widest transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5"
                                        >
                                            View All {sortedAndFilteredFreelancers.length} Services
                                        </button>
                                    </div>
                                ) : (
                                    totalPages > 1 && (
                                        <div className="flex items-center justify-center gap-2 border-t border-black/5 pt-12">
                                            <button
                                                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                                                disabled={currentPage === 1}
                                                className="w-10 h-10 flex items-center justify-center rounded-full border border-black/5 hover:border-black/20 disabled:opacity-50 disabled:cursor-not-allowed bg-white shadow-sm transition-all text-[#0A0A0A] font-bold"
                                            >
                                                <ChevronLeft size={16} />
                                            </button>

                                            {[...Array(totalPages)].map((_, i) => (
                                                <button
                                                    key={i}
                                                    onClick={() => {
                                                        setCurrentPage(i + 1);
                                                        window.scrollTo({ top: 300, behavior: 'smooth' });
                                                    }}
                                                    className={`w-10 h-10 flex items-center justify-center rounded-full text-sm font-bold transition-all ${currentPage === i + 1 ? 'bg-[#0A0A0A] text-white shadow-md' : 'text-gray-500 hover:bg-gray-100'}`}
                                                >
                                                    {i + 1}
                                                </button>
                                            ))}

                                            <button
                                                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                                                disabled={currentPage === totalPages}
                                                className="w-10 h-10 flex items-center justify-center rounded-full border border-black/5 hover:border-black/20 disabled:opacity-50 disabled:cursor-not-allowed bg-white shadow-sm transition-all text-[#0A0A0A] font-bold"
                                            >
                                                <ChevronRight size={16} />
                                            </button>
                                        </div>
                                    )
                                )}
                            </div>
                        )}
                    </div>

                </main>

                {/* Clean Footer */}
                <footer className="border-t border-black/5 bg-white/20 backdrop-blur-xl pt-24 pb-12">
                    <div className="max-w-[1400px] mx-auto px-6">
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-20">
                            <div className="lg:col-span-2">
                                <div className="text-2xl font-black tracking-tighter uppercase flex items-center gap-2 text-[#0A0A0A] mb-6">
                                    <div className="w-4 h-4 bg-indigo-600 rounded-sm"></div>
                                    Eduprova
                                </div>
                                <p className="text-gray-500 max-w-sm mb-8 leading-relaxed font-medium">Empowering the world&apos;s most driven talents and businesses to build incredible things together.</p>
                            </div>
                            <div>
                                <h4 className="font-bold text-[#0A0A0A] mb-6 uppercase tracking-widest text-xs">Categories</h4>
                                <ul className="space-y-4 text-sm font-medium text-gray-500">
                                    <li><button onClick={() => handleCategoryClick("Graphics & Design")} className="hover:text-indigo-600 transition-colors">Graphics & Design</button></li>
                                    <li><button onClick={() => handleCategoryClick("Programming & Tech")} className="hover:text-indigo-600 transition-colors">Programming & Tech</button></li>
                                    <li><button onClick={() => handleCategoryClick("Digital Marketing")} className="hover:text-indigo-600 transition-colors">Digital Marketing</button></li>
                                    <li><button onClick={() => handleCategoryClick("Video & Animation")} className="hover:text-indigo-600 transition-colors">Video & Animation</button></li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-bold text-[#0A0A0A] mb-6 uppercase tracking-widest text-xs">About</h4>
                                <ul className="space-y-4 text-sm font-medium text-gray-500">
                                    <li><Link href="#" className="hover:text-indigo-600 transition-colors">Careers</Link></li>
                                    <li><Link href="#" className="hover:text-indigo-600 transition-colors">Press & News</Link></li>
                                    <li><Link href="#" className="hover:text-indigo-600 transition-colors">Partnerships</Link></li>
                                    <li><Link href="#" className="hover:text-indigo-600 transition-colors">Privacy Policy</Link></li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-bold text-[#0A0A0A] mb-6 uppercase tracking-widest text-xs">Support</h4>
                                <ul className="space-y-4 text-sm font-medium text-gray-500">
                                    <li><Link href="#" className="hover:text-indigo-600 transition-colors">Help & Support</Link></li>
                                    <li><Link href="#" className="hover:text-indigo-600 transition-colors">Trust & Safety</Link></li>
                                    <li><Link href="#" className="hover:text-indigo-600 transition-colors">Selling on Eduprova</Link></li>
                                    <li><Link href="#" className="hover:text-indigo-600 transition-colors">Buying on Eduprova</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-black/5 text-sm font-medium text-gray-500">
                            <p>© {new Date().getFullYear()} Eduprova Inc. All rights reserved.</p>
                            <div className="flex gap-6 mt-4 md:mt-0">
                                <Link href="#" className="hover:text-[#0A0A0A] transition-colors font-bold tracking-widest uppercase text-xs">Twitter</Link>
                                <Link href="#" className="hover:text-[#0A0A0A] transition-colors font-bold tracking-widest uppercase text-xs">LinkedIn</Link>
                                <Link href="#" className="hover:text-[#0A0A0A] transition-colors font-bold tracking-widest uppercase text-xs">Instagram</Link>
                            </div>
                        </div>
                    </div>
                </footer>

                <style>{`
                ::selection { background: #4F46E5; color: white; }
                .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .hide-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
                .custom-scrollbar::-webkit-scrollbar {
                    width: 6px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background-color: rgba(0,0,0,0.1);
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background-color: rgba(0,0,0,0.2);
                }
            `}</style>
            </div>
        </div>
    );
}
