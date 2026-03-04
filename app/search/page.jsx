"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
    Search,
    Bell,
    Mail,
    Heart,
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
    X
} from "lucide-react";

// Mock Data for Categories & Freelancers
const ALL_FREELANCERS = [
    {
        id: 1,
        name: "Sikander",
        level: "Level 2",
        rating: 4.9,
        reviews: 349,
        title: "I will do ui ux design for saas, dashboard, web app, admin panel in figma",
        price: "From ₹150",
        image: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?w=800&q=80",
        avatar: "https://i.pravatar.cc/150?u=12",
        category: "UI / UX Design",
        isChoice: true
    },
    {
        id: 2,
        name: "Nabee",
        level: "Level 2",
        rating: 4.9,
        reviews: 61,
        title: "I will do UX UI design, app design, figma website design, wireframes, prototypes",
        price: "From ₹120",
        image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80",
        avatar: "https://i.pravatar.cc/150?u=13",
        category: "UI / UX Design"
    },
    {
        id: 3,
        name: "Zainab Ali",
        level: "Level 2",
        rating: 4.9,
        reviews: 161,
        title: "I will do product UI UX design app, web, dashboard in figma",
        price: "From ₹100",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
        avatar: "https://i.pravatar.cc/150?u=14",
        category: "UI / UX Design"
    },
    {
        id: 4,
        name: "Momeynah",
        level: "Level 2",
        rating: 4.9,
        reviews: 105,
        title: "I will design wireframes, app UI UX design, web design prototype in figma",
        price: "From ₹80",
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
        avatar: "https://i.pravatar.cc/150?u=15",
        category: "UI / UX Design"
    },
    {
        id: 5,
        name: "Alexandra Reed",
        level: "Top Rated",
        rating: 5.0,
        reviews: 420,
        title: "I will build a custom React, Next.js website or complex SaaS platform",
        price: "From ₹850",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
        avatar: "https://i.pravatar.cc/150?u=1",
        category: "App & Web Development"
    },
    {
        id: 6,
        name: "David Kim",
        level: "Top Rated",
        rating: 4.8,
        reviews: 215,
        title: "I will develop robust backend systems and REST APIs in Node.js",
        price: "From ₹500",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
        avatar: "https://i.pravatar.cc/150?u=2",
        category: "App & Web Development"
    },
    {
        id: 7,
        name: "Olivia Davis",
        level: "Level 2",
        rating: 5.0,
        reviews: 180,
        title: "I will design an unforgettable brand identity and logo guidelines",
        price: "From ₹250",
        image: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?w=800&q=80",
        avatar: "https://i.pravatar.cc/150?u=9",
        category: "Creative & Brand Identity",
        isChoice: true
    },
    {
        id: 8,
        name: "William Martin",
        level: "Level 1",
        rating: 4.8,
        reviews: 90,
        title: "I will create engaging 2D/3D motion graphics and explainer videos",
        price: "From ₹300",
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80",
        avatar: "https://i.pravatar.cc/150?u=18",
        category: "Video & Animation"
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
        [
            { title: "Misc", items: ["Blockchain & Cryptocurrency", "NFT Development", "Bot Development", "Electronics Engineering", "Support & IT", "Convert Files"] }
        ]
    ],
    "Digital Marketing": [
        [
            { title: "Search", items: ["Search Engine Optimization (SEO)", "Search Engine Marketing (SEM)", "Local SEO", "E-Commerce SEO", "Video SEO"] }
        ],
        [
            { title: "Social", items: ["Social Media Marketing", "Paid Social Media", "Influencer Marketing", "Community Management"] }
        ],
        [
            { title: "Content", items: ["Content Marketing", "Video Marketing", "Email Marketing", "Guest Posting", "Podcast Marketing"] }
        ],
        [
            { title: "Industry & Strategies", items: ["Marketing Strategy", "Web Analytics", "Public Relations", "Crowdfunding", "Affiliate Marketing"] }
        ]
    ],
    "Video & Animation": [
        [
            { title: "Editing & Post-Production", items: ["Video Editing", "Visual Effects", "Video Color Grading", "Subtitles & Captions", "Intro & Outro Videos"] }
        ],
        [
            { title: "Animation", items: ["Character Animation", "2D Animation", "3D Animation", "Whiteboard Animation", "Logo Animation"] }
        ],
        [
            { title: "Social & Marketing", items: ["Social Media Videos", "UGC Videos", "Corporate Videos", "App & Website Previews", "Real Estate Promos"] }
        ],
        [
            { title: "Other", items: ["Live Action Explainers", "Lottie & Web Animation", "E-Commerce Product Videos", "Unboxing Videos"] }
        ]
    ],
    "Writing & Translation": [
        [
            { title: "Content Writing", items: ["Articles & Blog Posts", "Website Content", "Product Descriptions", "Grant Writing", "Technical Writing"] }
        ],
        [
            { title: "Editing & Critique", items: ["Proofreading & Editing", "AI Content Editing", "Beta Reading"] }
        ],
        [
            { title: "Business & Marketing", items: ["Copywriting", "Email Copy", "Sales Copy", "Social Media Copy", "Podcast Writing"] }
        ],
        [
            { title: "Translation & Transcripts", items: ["Translation", "Localization", "Transcription", "Cover Letters", "Resumes"] }
        ]
    ],
    "Music & Audio": [
        [
            { title: "Music Production", items: ["Producers & Composers", "Beat Making", "Singer-Songwriters", "Mixing & Mastering"] }
        ],
        [
            { title: "Voice Over", items: ["Voice Over", "AI Voice Over|NEW", "Dubbing/Voice Acting"] }
        ],
        [
            { title: "Audio & Sound", items: ["Sound Design", "Audio Editing", "Podcast Production", "Audiobook Production"] }
        ],
        [
            { title: "Music Lessons", items: ["Online Music Lessons", "Singing Lessons", "DJ Mixing"] }
        ]
    ],
    "Business": [
        [
            { title: "Business Operations", items: ["Virtual Assistant", "Data Entry", "Project Management", "Supply Chain Management"] }
        ],
        [
            { title: "Business Consulting", items: ["Business Consulting", "Market Research", "Business Plans", "Legal Consulting"] }
        ],
        [
            { title: "Sales & Customer Care", items: ["Sales", "Customer Care", "CRM Management", "Lead Generation"] }
        ],
        [
            { title: "Other", items: ["Event Management", "Human Resources", "Career Counseling"] }
        ]
    ],
    "Finance": [
        [
            { title: "Accounting", items: ["Accounting & Bookkeeping", "Tax Consulting", "Financial Forecasting"] }
        ],
        [
            { title: "Personal Finance", items: ["Personal Finance Planning", "Wealth Management"] }
        ],
        [
            { title: "Corporate Finance", items: ["Financial Modeling", "Corporate Valuation", "Fundraising Consulting"] }
        ],
        [
            { title: "Trading", items: ["Algorithmic Trading", "Crypto Trading Advice", "Trading Bots"] }
        ]
    ],
    "AI Services": [
        [
            { title: "AI Development", items: ["AI Applications", "AI Agents", "Custom GPT Apps", "AI Integration"] }
        ],
        [
            { title: "AI Art & Audio", items: ["AI Artists", "AI Music", "AI Voice Over", "AI Video Generation"] }
        ],
        [
            { title: "AI Text & Data", items: ["AI Content Editing", "Prompt Engineering", "Data Science & AI"] }
        ],
        [
            { title: "AI Consulting", items: ["AI Strategy", "AI Audits", "AI Lessons"] }
        ]
    ],
    "Personal Growth": [
        [
            { title: "Life & Career", items: ["Life Coaching", "Career Counseling", "Resume Writing", "Interview Preparation"] }
        ],
        [
            { title: "Health & Wellness", items: ["Fitness Training", "Nutrition Coaching", "Mental Health Coaching", "Mindfulness & Meditation"] }
        ],
        [
            { title: "Hobbies & Leisure", items: ["Arts & Crafts Lessons", "Cooking Lessons", "Gaming Coaching", "Travel Planning"] }
        ],
        [
            { title: "Spirituality", items: ["Astrology & Reading", "Energy Healing", "Spiritual Counseling"] }
        ]
    ],
    "Consulting": [
        [
            { title: "Business & Strategy", items: ["Business Consulting", "Market Research", "Startup Consulting", "Management Consulting"] }
        ],
        [
            { title: "Marketing & Sales", items: ["Marketing Consulting", "Sales Consulting", "Brand Consulting"] }
        ],
        [
            { title: "Tech & IT", items: ["IT Consulting", "Cybersecurity Consulting", "Software Architecture Consulting"] }
        ],
        [
            { title: "Other Consulting", items: ["Legal Consulting", "Financial Consulting", "HR Consulting"] }
        ]
    ],
    "Data": [
        [
            { title: "Data Analysis", items: ["Data Analytics", "Data Visualization", "Dashboards", "Business Intelligence"] }
        ],
        [
            { title: "Data Science", items: ["Machine Learning", "Data Modeling", "Statistical Analysis", "Deep Learning"] }
        ],
        [
            { title: "Data Engineering", items: ["Data Engineering", "Data Warehousing", "ETL Pipelines", "Big Data"] }
        ],
        [
            { title: "Management", items: ["Databases", "Data Processing", "Data Entry", "Data Cleaning"] }
        ]
    ],
    "Photography": [
        [
            { title: "Products & Lifestyle", items: ["Product Photography", "Food Photography", "Lifestyle Photography", "Fashion Photography"] }
        ],
        [
            { title: "Events & Portraits", items: ["Event Photography", "Portrait Photography", "Wedding Photography"] }
        ],
        [
            { title: "Specialized", items: ["Real Estate Photography", "Drone & Aerial Photography", "Nature Photography"] }
        ],
        [
            { title: "Post-Processing", items: ["Photo Retouching", "Color Grading", "Background Removal", "Image Restoration"] }
        ]
    ]
};

const FILTER_OPTIONS = {
    "Service Type": ["All Service Types", "Graphics & Design", "Programming & Tech", "Digital Marketing", "Video & Animation", "Writing & Translation", "Music & Audio", "Business", "Finance", "AI Services", "Personal Growth", "Consulting", "Data", "Photography"],
    "Budget Range": ["Any Budget", "Under ₹500", "₹500 - ₹1000", "₹1000 - ₹5000", "₹5000 & Above", "Custom Amount"],
    "Delivery Time": ["Anytime", "Express (24h)", "Up to 3 Days", "Up to 7 Days"],
    "Seller Level": ["Any Level", "Top Rated Seller", "Level 2 Seller", "Level 1 Seller", "New Seller"],
    "Rating": ["Any Rating", "4.5 & Above", "4.0 & Above", "3.0 & Above"]
};

// Available Sorting Options
const SORT_OPTIONS = [
    "Recommended",
    "Best selling",
    "Newest arrivals"
];

function FreelancerCard({ freelancer }) {
    return (
        <div className="flex flex-col border border-black/5 rounded-3xl overflow-hidden group cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white">
            {/* Thumbnail */}
            <div className="relative aspect-[4/3] w-full overflow-hidden">
                <img
                    src={freelancer.image}
                    alt={freelancer.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <button className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors bg-black/20 p-2 rounded-full backdrop-blur-sm">
                    <Heart size={16} className={freelancer.isChoice ? "fill-white" : ""} />
                </button>
            </div>

            {/* Card Content */}
            <div className="p-6 flex flex-col flex-grow">
                {/* Profile Header */}
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                        <img src={freelancer.avatar} alt={freelancer.name} className="w-10 h-10 rounded-full object-cover border border-black/5" />
                        <div>
                            <div className="font-bold text-sm text-[#0A0A0A] flex items-center gap-1.5">
                                {freelancer.name}
                                {freelancer.isChoice && (
                                    <CheckCircle2 size={14} className="text-indigo-600" />
                                )}
                            </div>
                            <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mt-0.5">{freelancer.level}</div>
                        </div>
                    </div>
                </div>

                {/* Title */}
                <h3 className="text-sm font-semibold text-[#0A0A0A] group-hover:text-indigo-600 transition-colors line-clamp-2 leading-relaxed mb-auto">
                    {freelancer.title}
                </h3>

                {/* Footer Data */}
                <div className="flex items-center justify-between mt-6 pt-4 border-t border-black/5">
                    <div className="flex items-center gap-1">
                        <Star size={14} className="text-amber-500 fill-amber-500" />
                        <span className="text-sm font-bold text-[#0A0A0A]">{freelancer.rating}</span>
                        <span className="text-sm text-gray-400 font-medium">({freelancer.reviews})</span>
                    </div>
                    <div className="text-sm font-bold text-[#0A0A0A]">
                        {freelancer.price}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function SearchPage() {
    const [searchQuery, setSearchQuery] = useState("");
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
    const ITEMS_PER_PAGE = 12;

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
        <div className="min-h-[100svh] bg-[#F4F4F0] text-[#0A0A0A] font-sans">

            {/* TOP NAVBAR (Match Landing Page Aesthetic) */}
            <header className="sticky top-0 z-50 bg-[#F4F4F0]/80 backdrop-blur-xl border-b border-black/5 transition-all duration-300">
                <div className="max-w-[1400px] mx-auto">
                    <div className="flex items-center justify-between px-6 py-6 border-b border-black/5">

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
                        <div className="hidden md:flex items-center gap-8">
                            <nav className="flex items-center gap-8 font-bold text-xs uppercase tracking-[0.2em] text-gray-500">
                                <button className="hover:text-black transition-colors">Explore</button>
                                <button className="hover:text-black transition-colors">Messages</button>
                                <button className="hover:text-black transition-colors">Orders</button>
                            </nav>
                            <img src="https://i.pravatar.cc/150?img=11" alt="User" className="w-10 h-10 rounded-full border border-black/10 cursor-pointer hover:border-indigo-600 transition-colors" />
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
                                className="absolute left-0 top-0 bottom-0 z-50 bg-gradient-to-r from-[#F4F4F0] via-[#F4F4F0_80%] to-transparent w-24 flex items-center justify-start pl-6 group pointer-events-auto"
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
                                className="absolute right-0 top-0 bottom-0 z-50 bg-gradient-to-l from-[#F4F4F0] via-[#F4F4F0_80%] to-transparent w-24 flex items-center justify-end pr-6 group pointer-events-auto"
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

            {/* MAIN CONTENT */}
            <main className="max-w-[1400px] mx-auto px-6 pt-8 pb-32">

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
                            <p className="text-gray-500 font-medium mb-8 max-w-sm">Try using different keywords or removing filters to find what you're looking for.</p>
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
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
                                {currentData.map(freelancer => (
                                    <FreelancerCard key={freelancer.id} freelancer={freelancer} />
                                ))}
                            </div>

                            {/* Pagination */}
                            {totalPages > 1 && (
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
                                            onClick={() => setCurrentPage(i + 1)}
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
                            )}
                        </div>
                    )}
                </div>

            </main>

            {/* Clean Footer */}
            <footer className="border-t border-black/5 bg-[#F4F4F0] pt-24 pb-12">
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
    );
}
