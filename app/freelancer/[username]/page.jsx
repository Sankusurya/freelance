"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import HeaderAvatarDropdown from "../../../components/HeaderAvatarDropdown";
import {
  Star,
  MapPin,
  Clock,
  CheckCircle,
  Globe,
  X,
  MessageSquare,
  Search,
  Mail,
  Briefcase,
  Bell,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Heart,
} from "lucide-react";

// ─── Contact Card Component ────────────────────────────────────────────────
function ContactCard({ freelancer }) {
  const [isSaved, setIsSaved] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="bg-white border border-black/5 rounded-[20px] shadow-[0_4px_20px_rgb(0,0,0,0.05)] overflow-visible text-left">
      {/* TOP SECTION — Avatar + Name + Save */}
      <div className="px-5 pt-5 pb-4 border-b border-black/5">
        <div className="flex items-center gap-3">
          {/* Avatar with online dot */}
          <div className="relative shrink-0">
            <img
              src={freelancer.avatar}
              alt={freelancer.name}
              className="w-11 h-11 rounded-full object-cover border border-black/5 shadow-sm"
            />
            {freelancer.isOnline && (
              <span
                className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-[2px] border-white rounded-full block"
                title="Online now"
              />
            )}
          </div>

          {/* Name + Rate */}
          <div className="flex-1 min-w-0">
            <div className="font-black text-[15px] text-[#0A0A0A] tracking-tight leading-tight truncate">
              {freelancer.name}
            </div>
            <div className="text-[13px] text-gray-500 font-semibold mt-0.5">
              {freelancer.hourlyRate}
            </div>
          </div>

          {/* Heart / Save with tooltip */}
          <div className="relative flex-shrink-0">
            <button
              onClick={() => setIsSaved((s) => !s)}
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
              aria-label="Save to list"
              className={`w-9 h-9 flex items-center justify-center rounded-full border transition-all duration-200 active:scale-95 ${isSaved
                ? "bg-rose-50 border-rose-200 text-rose-500 hover:bg-rose-100"
                : "bg-gray-50 border-black/5 text-gray-400 hover:bg-rose-50 hover:border-rose-200 hover:text-rose-400"
                }`}
            >
              <Heart
                size={16}
                className={`transition-all duration-200 ${isSaved ? "fill-rose-500" : "fill-transparent"
                  }`}
              />
            </button>

            {/* Tooltip: shows saved state change */}
            {showTooltip && (
              <div className="absolute bottom-full right-0 mb-2 pointer-events-none z-50">
                <div className="bg-[#0A0A0A] text-white text-[11px] font-bold px-2.5 py-1.5 rounded-lg whitespace-nowrap shadow-lg">
                  {isSaved ? "Saved!" : "Save to list"}
                </div>
                <div className="w-2 h-2 bg-[#0A0A0A] rotate-45 absolute -bottom-1 right-3 rounded-sm" />
              </div>
            )}
          </div>
        </div>

        {/* Online status line */}
        <div className="mt-2.5 flex items-center gap-1.5">
          <span
            className={`w-1.5 h-1.5 rounded-full ${freelancer.isOnline ? "bg-emerald-500" : "bg-gray-300"
              }`}
          />
          <span className="text-[12px] font-semibold text-gray-500">
            {freelancer.isOnline ? "Online now" : "Offline"}
          </span>
        </div>
      </div>

      {/* ─ SECTION 2: Trust Signals
          Principle: Show social proof BEFORE the CTA. A user who sees
          4.9★ from 308 reviews is far more likely to message. */}
      <div className="px-5 py-3.5 flex items-center justify-between border-b border-black/5">
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={13}
              className={i < Math.round(freelancer.rating) ? "fill-amber-500 text-amber-500" : "fill-gray-200 text-gray-200"}
            />
          ))}
          <span className="ml-1.5 text-[13px] font-black text-[#0A0A0A]">
            {freelancer.rating}
          </span>
        </div>
        <span className="text-[12px] font-semibold text-gray-400">
          {freelancer.reviewsCount} reviews
        </span>
      </div>

      {/* ─ SECTION 3: Meta Information
          Principle: Progressive Disclosure — context before commitment.
          Gestalt Proximity: rows grouped inside a single contained block.
          Scannability: Labels left, values right = fast F-pattern scan. */}
      <div className="px-5 pt-4 pb-0">
        <div className="rounded-[14px] border border-black/5 overflow-hidden bg-[#FAFAF9]">
          {/* Row 1 */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-black/5">
            <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">Avg. Response</span>
            <span className="text-[13px] font-bold text-[#0A0A0A]">{freelancer.responseTime}</span>
          </div>
          {/* Row 2 */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-black/5">
            <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">Last Delivery</span>
            <span className="text-[13px] font-bold text-[#0A0A0A]">{freelancer.lastDelivery}</span>
          </div>
          {/* Row 3 */}
          <div className="flex items-start justify-between px-4 py-3">
            <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest pt-0.5">Languages</span>
            <div className="text-right">
              {freelancer.languages.map((lang, i) => (
                <div key={i} className="text-[13px] font-bold text-[#0A0A0A] leading-snug">
                  {lang.split(" ")[0]}&nbsp;
                  <span className="text-gray-400 font-semibold text-[12px]">
                    {lang.match(/\(.*\)/)?.[0] ?? ""}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ─ SECTION 4: Primary CTA — AFTER trust + meta
          Principle: Conversion optimization — primed click after full context.
          Fitts's Law: full-width = maximum clickable area.
          Anxiety Reduction: micro-copy below removes last hesitation. */}
      <div className="px-5 pt-4 pb-5">
        <button className="w-full bg-[#0A0A0A] text-white font-bold text-[14px] tracking-wide py-3.5 rounded-[14px] hover:bg-neutral-800 hover:-translate-y-[1px] hover:shadow-[0_8px_24px_rgb(0,0,0,0.12)] active:translate-y-0 active:shadow-none transition-all duration-200 flex items-center justify-center gap-2">
          <MessageSquare size={16} />
          Contact {freelancer.name.split(" ")[0]}
        </button>
        <p className="text-center text-[11px] text-gray-400 font-semibold mt-2.5 leading-relaxed tracking-wide">
          Free to message · No commitment required
        </p>
      </div>

    </div>
  );
}

// Mock Categories identical to global LandingPage
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

export default function FreelancerProfile({ params }) {
  const { username } = React.use(params);

  // Universal Mock Data structured around the Fiverr-like profile
  const freelancer = {
    name: "Sophia L.",
    username: username || "sophia_l",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    rating: 4.9,
    reviewsCount: 308,
    level: "Pro Expert",
    location: "United States",
    languages: ["English (Native)", "Spanish (Conversational)"],
    responseTime: "1 hour",
    lastDelivery: "about 2 hours ago",
    hourlyRate: "$45/hr",
    isOnline: true,

    description:
      "I'm a UI/UX designer specializing in high-converting web applications and SaaS interfaces. With over 8 years of experience, I help businesses communicate their value clearly and turn visitors into paying customers. My approach blends data-driven insights with premium aesthetics to craft journeys that look beautiful and perform exceptionally.",

    skills: [
      "UI/UX Design",
      "Web Design",
      "Wireframing",
      "Prototyping",
      "Figma",
      "SaaS Platforms",
      "Landing Pages",
    ],

    experience: [
      { label: "Years Experience", value: "8+" },
      { label: "Projects Completed", value: "150+" },
      { label: "Response Rate", value: "100%" },
    ],

    services: [
      {
        id: 1,
        title: "Complete SaaS Website Redesign",
        price: "₹2,500",
        description:
          "A full end-to-end redesign of your marketing site focusing entirely on clarity and trust.",
        delivery: "14 Days",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
      },
      {
        id: 2,
        title: "High-Converting Landing Page",
        price: "₹900",
        description:
          "A single, highly optimized landing page specifically structured to capture leads or drive product sales.",
        delivery: "7 Days",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
      },
      {
        id: 3,
        title: "UI/UX Audit & Optimization",
        price: "₹300",
        description:
          "A comprehensive teardown of your current design with actionable steps to improve conversions right now.",
        delivery: "3 Days",
        image: "https://images.unsplash.com/photo-1555421689-d68471e189f2?w=600&q=80",
      },
    ],

    portfolio: [
      {
        id: 1,
        title: "DataSync SaaS Platform",
        description:
          "Complete UI/UX redesign for a B2B data synchronization tool, increasing conversion by 45% and reducing bounce rates significantly.",
        tags: ["UI Design", "SaaS"],
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      },
      {
        id: 2,
        title: "FinTech App Trust Redesign",
        description:
          "Increased user onboarding completion from 40% to 85% with a simplified AI-driven user interface.",
        tags: ["FinTech", "App Design"],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      },
      {
        id: 3,
        title: "HealthTech Dashboard Component",
        description:
          "Designed a modern data visualization dashboard for a health-tech startup, enabling doctors to track patient metrics effectively.",
        tags: ["Dashboard", "Healthcare"],
        image: "https://images.unsplash.com/photo-1555421689-d68471e189f2?w=800&q=80",
      },
    ],

    reviewsData: {
      overall: 4.9,
      total: 308,
      breakdown: [
        { stars: 5, count: 285 },
        { stars: 4, count: 18 },
        { stars: 3, count: 3 },
        { stars: 2, count: 1 },
        { stars: 1, count: 1 },
      ],
      list: [
        {
          id: 1,
          name: "Michael R.",
          country: "United States",
          rating: 5,
          date: "2 months ago",
          comment:
            "Sophia didn't just design a website; she solved our conversion problem. Before working with her, people didn't understand our product. Now, our signup rate has tripled.",
          avatar: "https://i.pravatar.cc/150?u=123",
        },
        {
          id: 2,
          name: "Sarah Jenkins",
          country: "Canada",
          rating: 5,
          date: "4 months ago",
          comment:
            "Incredibly professional, fast, and the quality is outstanding. The new homepage design brought us immediate ROI within the first week of launch.",
          avatar: "https://i.pravatar.cc/150?u=456",
        },
        {
          id: 3,
          name: "David Chen",
          country: "Australia",
          rating: 4,
          date: "5 months ago",
          comment:
            "Great to work with! Understood our complex B2B domain quickly and translated it into a super clean layout.",
          avatar: "https://i.pravatar.cc/150?u=789",
        },
      ],
    },
  };

  const [activeTab, setActiveTab] = useState("overview");
  const [selectedPortfolio, setSelectedPortfolio] = useState(null);
  const [isStickySubnav, setIsStickySubnav] = useState(false);
  const [descExpanded, setDescExpanded] = useState(false);

  // Navbar state
  const [searchQuery, setSearchQuery] = useState("");
  const categoriesRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "services", label: "Services" },
    { id: "portfolio", label: "Portfolio" },
    { id: "reviews", label: "Reviews" },
  ];

  // Navbar category scroll logic
  const checkNavScroll = () => {
    if (categoriesRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = categoriesRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  useEffect(() => {
    checkNavScroll();
    window.addEventListener('resize', checkNavScroll);
    setTimeout(checkNavScroll, 100);
    return () => window.removeEventListener('resize', checkNavScroll);
  }, []);

  const scrollNavByAmount = (amount) => {
    if (categoriesRef.current) {
      categoriesRef.current.scrollBy({ left: amount, behavior: 'smooth' });
    }
  };

  // Profile Scrollspy and Sticky logic
  useEffect(() => {
    const handleScroll = () => {
      // Offset for checking active section (adjust based on global nav height)
      const scrollPosition = window.scrollY + 200;

      const sections = tabs.map((tab) => document.getElementById(tab.id));

      let currentSection = tabs[0].id;
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          currentSection = tabs[i].id;
          break;
        }
      }

      setActiveTab(currentSection);

      // Determine if sub-nav should snap visually into a sticky styling
      // The hero section's bottom is around 250-300px
      if (window.scrollY > 280) {
        setIsStickySubnav(true);
      } else {
        setIsStickySubnav(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [tabs]);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      // Calculate top position minus height of global nav + sticky sub-nav = 144px + ~60px
      const topPos = section.getBoundingClientRect().top + window.scrollY - 180;
      window.scrollTo({ top: topPos, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-[100svh] bg-[#F4F4F0] text-[#0A0A0A] font-sans">

      {/* 1️⃣ GLOBAL NAVBAR (Sticky at top: 0, z-50) */}
      <header className="sticky top-0 z-50 bg-[#F4F4F0]/80 backdrop-blur-xl border-b border-black/5 transition-all duration-300 pointer-events-auto">
        <div className="max-w-[1400px] mx-auto">
          {/* Top Bar */}
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
                  className="w-full bg-white border border-black/5 shadow-sm rounded-full py-3.5 pl-14 pr-6 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-indigo-600/20 transition-all text-[#0A0A0A]"
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
                  <span className="absolute top-0 right-0.5 w-2.5 h-2.5 bg-rose-500 rounded-full border-2 border-[#F4F4F0] translate-x-1/2 -translate-y-1/4"></span>
                </button>
              </nav>
              <HeaderAvatarDropdown isOnline={true} />
            </div>
          </div>

          {/* Sub Navigation Categories */}
          <div className="relative group">
            {canScrollLeft && (
              <button
                onClick={() => scrollNavByAmount(-300)}
                className="absolute left-0 top-0 bottom-0 z-50 bg-gradient-to-r from-[#F4F4F0] via-[#F4F4F0_80%] to-transparent w-24 flex items-center justify-start px-6 group pointer-events-auto"
              >
                <div className="w-8 h-8 rounded-full bg-white shadow-[0_4px_12px_rgba(0,0,0,0.1)] border border-black/5 flex items-center justify-center text-gray-400 group-hover:text-indigo-600 group-hover:shadow-[0_4px_16px_rgba(79,70,229,0.2)] group-hover:border-indigo-100 transition-all group-active:scale-95">
                  <ChevronLeft size={16} strokeWidth={2.5} />
                </div>
              </button>
            )}

            <div
              ref={categoriesRef}
              onScroll={checkNavScroll}
              className="flex items-center gap-8 px-6 py-4 overflow-x-auto hide-scrollbar z-40 relative scroll-smooth"
            >
              {CATEGORIES.map((cat, i) => (
                <div key={i}>
                  <Link
                    href="/"
                    className="whitespace-nowrap pb-2 text-xs py-2 font-bold uppercase tracking-widest text-gray-500 hover:text-[#0A0A0A] transition-colors flex items-center gap-2 border-b-2 border-transparent"
                  >
                    {cat}
                  </Link>
                </div>
              ))}
            </div>

            {canScrollRight && (
              <button
                onClick={() => scrollNavByAmount(300)}
                className="absolute right-0 top-0 bottom-0 z-50 bg-gradient-to-l from-[#F4F4F0] via-[#F4F4F0_80%] to-transparent w-24 flex items-center justify-end px-6 group pointer-events-auto"
              >
                <div className="w-8 h-8 rounded-full bg-white shadow-[0_4px_12px_rgba(0,0,0,0.1)] border border-black/5 flex items-center justify-center text-gray-400 group-hover:text-indigo-600 group-hover:shadow-[0_4px_16px_rgba(79,70,229,0.2)] group-hover:border-indigo-100 transition-all group-active:scale-95">
                  <ChevronRight size={16} strokeWidth={2.5} />
                </div>
              </button>
            )}
          </div>
        </div>
      </header>

      {/* PAGE BODY */}
      <main className="max-w-[1400px] mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-12 gap-10 relative">

        {/* LEFT COLUMN - Main Content (70%) */}
        <div className="lg:col-span-8 flex flex-col min-w-0 pointer-events-auto">

          {/* 1. Hero Section (Not sticky) */}
          <section className="bg-white p-6 md:p-8 rounded-[24px] border border-black/5 shadow-[0_4px_15px_rgb(0,0,0,0.03)] flex flex-col sm:flex-row gap-6 items-start sm:items-center mb-8">
            <div className="relative shrink-0">
              <img
                src={freelancer.avatar}
                alt={freelancer.name}
                className="w-28 h-28 rounded-full border border-black/5 object-cover shadow-sm"
              />
              {freelancer.isOnline && (
                <div className="absolute bottom-2 right-1 w-4 h-4 bg-emerald-500 border-2 border-white rounded-full z-10" title="Online Now" />
              )}
            </div>
            <div>
              <h1 className="text-3xl font-black text-[#0A0A0A] flex items-center gap-2 tracking-tight">
                {freelancer.name}
                <CheckCircle2 className="w-5 h-5 text-indigo-600 flex-shrink-0" />
              </h1>

              <div className="flex flex-wrap items-center gap-x-3 gap-y-2 mt-3 text-sm text-gray-500 font-medium">
                <span className="flex items-center gap-1 text-amber-500 font-bold">
                  <Star className="w-4 h-4 fill-amber-500" />
                  {freelancer.rating} <span className="text-gray-400 font-medium">({freelancer.reviewsCount})</span>
                </span>
                <span className="w-1.5 h-1.5 bg-gray-200 rounded-full" />
                <span className="text-gray-700 font-bold">{freelancer.level}</span>
                <span className="w-1.5 h-1.5 bg-gray-200 rounded-full" />
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4 text-gray-400" /> {freelancer.location}
                </span>
                <span className="w-1.5 h-1.5 bg-gray-200 rounded-full" />
                <span className="flex items-center gap-1">
                  <Globe className="w-4 h-4 text-gray-400" /> {freelancer.languages.join(", ")}
                </span>
              </div>

              <p className={`mt-4 text-gray-600 leading-[1.6] text-[15px] sm:text-base max-w-2xl ${!descExpanded ? "line-clamp-3" : ""
                }`}>
                {freelancer.description}
              </p>
              {!descExpanded && (
                <button
                  onClick={() => setDescExpanded(true)}
                  className="mt-1.5 text-[13px] font-bold text-indigo-600 hover:text-indigo-700 transition-colors"
                >
                  Read more
                </button>
              )}
              {descExpanded && (
                <button
                  onClick={() => setDescExpanded(false)}
                  className="mt-1.5 text-[13px] font-bold text-gray-400 hover:text-gray-600 transition-colors"
                >
                  Show less
                </button>
              )}
            </div>
          </section>

          {/* 2. Profile Sub-Navigation (Sticky below global nav) */}
          <div
            className={`sticky top-[141px] z-30 pt-2 transition-colors duration-200 mb-10 ${isStickySubnav ? 'bg-[#F4F4F0]/95 backdrop-blur-md px-6 mx-[-24px] shadow-[0_4px_12px_rgb(0,0,0,0.02)] border-b border-black/5' : 'bg-[#F4F4F0] border-b border-black/5'}`}
          >
            <div className="flex gap-8 overflow-x-auto no-scrollbar">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => scrollToSection(tab.id)}
                  className={`pb-4 text-[15px] font-bold tracking-wide transition-colors relative whitespace-nowrap ${activeTab === tab.id
                    ? "text-[#0A0A0A] border-b-2 border-[#0A0A0A]"
                    : "text-gray-500 hover:text-[#0A0A0A] border-b-2 border-transparent"
                    }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* 3. Scrollable Content Sections */}
          <div className="space-y-16 pb-16">

            {/* OVERVIEW SECTION */}
            <section id="overview" className="space-y-10 scroll-mt-[200px]">
              <div>
                <h3 className="text-xl font-black text-[#0A0A0A] mb-4">About Me</h3>
                <p className="text-gray-600 leading-[1.7] text-[15px]">{freelancer.description}</p>
              </div>

              <div>
                <h3 className="text-xl font-black text-[#0A0A0A] mb-4">Skills</h3>
                <div className="flex flex-wrap gap-2.5">
                  {freelancer.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-white text-gray-600 rounded-full text-sm font-semibold border border-black/5 hover:border-black/20 hover:text-[#0A0A0A] transition-colors cursor-default shadow-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-black text-[#0A0A0A] mb-4">Experience Highlights</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                  {freelancer.experience.map((stat, idx) => (
                    <div key={idx} className="bg-white border border-black/5 p-6 rounded-[24px] shadow-[0_4px_15px_rgb(0,0,0,0.03)] text-center">
                      <div className="text-3xl font-black text-[#0A0A0A] mb-1">{stat.value}</div>
                      <div className="text-xs font-bold uppercase tracking-widest text-gray-400">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* SERVICES SECTION */}
            <section id="services" className="space-y-6 scroll-mt-[200px]">
              <h3 className="text-2xl font-black text-[#0A0A0A] mb-6 tracking-tight">See My Services</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {freelancer.services.map((service) => (
                  <div
                    key={service.id}
                    className="bg-white p-3 rounded-[24px] border border-black/5 shadow-[0_4px_15px_rgb(0,0,0,0.03)] hover:shadow-[0_12px_28px_rgb(0,0,0,0.08)] transition-all duration-300 flex flex-col h-full group cursor-pointer"
                  >
                    <div className="relative aspect-[16/10] w-full rounded-[16px] overflow-hidden mb-4 bg-gray-100 text-left">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="px-2 flex flex-col flex-grow">
                      <h4 className="font-bold text-[#0A0A0A] transition-colors line-clamp-2 leading-[1.4] mb-2 hover:text-indigo-600">
                        {service.title}
                      </h4>
                      <p className="text-sm text-gray-500 line-clamp-2 leading-[1.6]">
                        {service.description}
                      </p>

                      <div className="mt-4 pt-4 border-t border-black/5 flex items-center justify-between">
                        <div className="text-[10px] font-bold text-gray-500 bg-gray-50 px-2 py-1.5 rounded-md uppercase tracking-wider">
                          <Clock className="w-3.5 h-3.5 inline pb-[1px]" /> {service.delivery}
                        </div>
                        <div className="flex flex-col items-end justify-center group-hover:-translate-y-0.5 transition-transform duration-300">
                          <span className="text-[9px] font-bold uppercase tracking-widest text-gray-400 mb-0.5">Starting at</span>
                          <span className="font-black text-lg text-[#0A0A0A] leading-none">{service.price}</span>
                        </div>
                      </div>
                    </div>
                    <div className="px-2 pb-2 pt-4">
                      <button className="w-full text-sm font-bold bg-white border border-black/5 text-[#0A0A0A] py-3 rounded-xl hover:border-black/20 hover:bg-gray-50 transition-colors">
                        View Details
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* PORTFOLIO SECTION */}
            <section id="portfolio" className="space-y-6 scroll-mt-[200px]">
              <h3 className="text-2xl font-black text-[#0A0A0A] mb-6 tracking-tight">Portfolio</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {freelancer.portfolio.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => setSelectedPortfolio(item)}
                    className="group cursor-pointer flex flex-col"
                  >
                    <div className="aspect-[4/3] rounded-[16px] overflow-hidden bg-gray-100 border border-black/5 mb-4 relative shadow-sm">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#0A0A0A] group-hover:text-indigo-600 transition-colors line-clamp-1">
                        {item.title}
                      </h4>
                      <p className="text-[13px] text-gray-500 mt-1 line-clamp-2 leading-[1.5]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* REVIEWS SECTION */}
            <section id="reviews" className="space-y-8 scroll-mt-[200px]">
              <h3 className="text-2xl font-black text-[#0A0A0A] mb-6 tracking-tight">Reviews</h3>

              {/* Reviews Header */}
              <div className="flex flex-col md:flex-row items-center gap-8 bg-white p-6 md:p-8 rounded-[24px] border border-black/5 shadow-[0_4px_15px_rgb(0,0,0,0.03)]">
                <div className="flex flex-col items-center flex-shrink-0">
                  <span className="text-6xl font-black text-[#0A0A0A] tracking-tighter">{freelancer.reviewsData.overall}</span>
                  <div className="flex gap-1 mt-2 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                  <span className="text-gray-500 font-bold text-sm">{freelancer.reviewsData.total} reviews</span>
                </div>

                <div className="w-full h-px md:w-px md:h-24 bg-black/5" />

                <div className="flex-1 w-full space-y-3">
                  {freelancer.reviewsData.breakdown.map((row) => (
                    <div key={row.stars} className="flex items-center gap-4 text-sm font-bold text-gray-700">
                      <span className="w-14 text-right flex items-center justify-end gap-1">
                        {row.stars} <Star className="w-3.5 h-3.5 fill-gray-400 text-gray-400" />
                      </span>
                      <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden self-center border border-black/5">
                        <div className="h-full bg-amber-500 rounded-full" style={{ width: `${(row.count / freelancer.reviewsData.total) * 100}%` }} />
                      </div>
                      <span className="w-10 text-gray-400">({row.count})</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Review List */}
              <div className="space-y-6">
                {freelancer.reviewsData.list.map((review) => (
                  <div key={review.id} className="border-b border-black/5 pb-8 last:border-0 last:pb-0">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-4">
                        <img src={review.avatar} alt={review.name} className="w-12 h-12 rounded-full object-cover border border-black/5 shadow-sm" />
                        <div>
                          <div className="font-bold text-[#0A0A0A]">{review.name}</div>
                          <div className="text-xs text-gray-500 font-medium">
                            {review.country}
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`w-3.5 h-3.5 ${i < review.rating ? 'fill-amber-500 text-amber-500' : 'fill-gray-200 text-gray-200'}`} />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-600 leading-[1.6] text-[15px]">
                      &quot;{review.comment}&quot;
                    </p>
                    <div className="text-xs text-gray-400 font-bold tracking-wide mt-3 uppercase">{review.date}</div>
                  </div>
                ))}

                <button className="w-full py-4 text-center text-sm font-bold text-[#0A0A0A] rounded-[16px] bg-white border border-black/5 shadow-sm hover:border-black/20 transition-all flex justify-center items-center mt-6">
                  Load More Reviews
                </button>
              </div>
            </section>
          </div>
        </div>

        {/* RIGHT COLUMN - Sticky CTA Card (30%) */}
        <div className="hidden lg:block lg:col-span-4 pl-0 xl:pl-4">
          <div className="sticky top-[168px] z-20">
            <ContactCard freelancer={freelancer} />
          </div>
        </div>
      </main>

      {/* PORTFOLIO MODAL */}
      <AnimatePresence>
        {selectedPortfolio && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-[#0A0A0A]/40 backdrop-blur-sm"
              onClick={() => setSelectedPortfolio(null)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.2 }}
              className="bg-[#F4F4F0] rounded-[24px] w-full max-w-[900px] max-h-[90vh] flex flex-col relative z-20 shadow-2xl overflow-hidden border border-black/5"
            >
              <div className="flex items-center justify-between p-5 md:p-6 border-b border-black/5 bg-white shrink-0">
                <h3 className="font-black text-lg text-[#0A0A0A] tracking-tight">{selectedPortfolio.title}</h3>
                <button
                  onClick={() => setSelectedPortfolio(null)}
                  className="p-2.5 bg-gray-50 hover:bg-gray-100 border border-black/5 text-[#0A0A0A] rounded-full transition-colors group"
                >
                  <X className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </button>
              </div>
              <div className="overflow-y-auto p-6 md:p-8 flex-1 custom-scrollbar">
                <div className="rounded-[16px] overflow-hidden border border-black/5 shadow-sm relative aspect-video bg-gray-100">
                  <img
                    src={selectedPortfolio.image}
                    alt={selectedPortfolio.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <div className="mt-8 flex flex-wrap gap-2.5">
                  {selectedPortfolio.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="bg-white border border-black/5 px-3 py-1.5 rounded-full text-[11px] font-bold text-gray-500 uppercase tracking-widest shadow-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="mt-6 text-gray-600 leading-[1.7] text-base md:text-lg">
                  {selectedPortfolio.description}
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
