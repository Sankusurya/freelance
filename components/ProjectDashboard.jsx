"use client";

import React, { useState } from "react";
import { Link, ArrowLeft, MoreHorizontal, User, ShieldCheck, Clock, MapPin, CheckCircle2, MessageSquare, Briefcase, Paperclip, ChevronRight, X } from "lucide-react";

export default function ProjectDashboard() {
    const [viewMode, setViewMode] = useState('client'); // 'client' | 'freelancer'
    const [isHireModalOpen, setIsHireModalOpen] = useState(false);
    const [isSubmitProposalOpen, setIsSubmitProposalOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('proposals'); // Client view: 'overview' | 'proposals' | 'shortlisted'

    // Form data for proposal
    const [proposalCover, setProposalCover] = useState("");
    const [proposalPrice, setProposalPrice] = useState("");
    const [proposalTime, setProposalTime] = useState("");

    const project = {
        title: "Build a SaaS Dashboard UI",
        budgetType: "Fixed Price",
        budgetRange: "$500 - $1,000",
        timeline: "1-4 weeks",
        experience: "Expert",
        status: "Open Workspace",
        posted: "2 hours ago",
        description: "We are looking for an experienced UI/UX designer to revamp our current SaaS offering layout focusing on analytics dashboards. The deliverable should be clean, modern, and high converting. We'll need a style guide, 5 unique dashboard views, and interactive prototypes built in Figma.",
        skills: ["UI/UX Design", "Figma", "SaaS", "Prototyping", "Analytics"],
    };

    const proposals = [
        { id: 1, name: "Sanku S.", title: "Senior SaaS UI Designer", location: "United States", rating: 4.9, reviews: 142, bidAmount: "$850", deliveryTime: "3 weeks", coverLetter: "Hi! I have designed over 20 SaaS dashboards in the past 3 years. I specialize in complex data visualization and clean aesthetics. I can deliver the 5 views with a full interactive prototype and a comprehensive design system.", status: "new" },
        { id: 2, name: "David M.", title: "Product Designer", location: "Canada", rating: 4.7, reviews: 89, bidAmount: "$600", deliveryTime: "2 weeks", coverLetter: "Hello, I can design a very clean dashboard for you at a competitive price. Let's arrange a call to discuss your exact needs and users.", status: "shortlisted" },
    ];

    return (
        <div className="min-h-screen bg-[#FBFCFF] text-[#0A0A0A] font-sans pb-24">

            {/* Top Navigation & Mode Toggle */}
            <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-xl border-b border-black/5 py-4 px-6 shadow-xs flex items-center justify-between">
                <div className="flex items-center gap-6">
                    <a href="/" className="text-xl font-black tracking-tighter uppercase flex items-center gap-2 text-[#0A0A0A]">
                        <div className="w-3 h-3 bg-indigo-600 rounded-sm"></div>
                        Eduprova
                    </a>
                    <div className="w-px h-6 bg-gray-200"></div>
                    <div className="flex items-center bg-gray-100 p-1 rounded-full">
                        <button onClick={() => setViewMode('client')} className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${viewMode === 'client' ? 'bg-white text-[#0A0A0A] shadow-sm' : 'text-gray-500 hover:text-[#0A0A0A]'}`}>Client View</button>
                        <button onClick={() => setViewMode('freelancer')} className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${viewMode === 'freelancer' ? 'bg-white text-[#0A0A0A] shadow-sm' : 'text-gray-500 hover:text-[#0A0A0A]'}`}>Freelancer View</button>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <div className="flex flex-col items-end hidden md:flex">
                        <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Status</span>
                        <span className="text-xs font-bold text-emerald-600 flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Receiving Proposals</span>
                    </div>
                </div>
            </header>

            {/* --- Modals --- */}
            {/* Submit Proposal Modal (Freelancer) */}
            {isSubmitProposalOpen && (
                <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4">
                    <div className="bg-white rounded-[2rem] max-w-[600px] w-full p-8 md:p-10 shadow-2xl relative">
                        <button onClick={() => setIsSubmitProposalOpen(false)} className="absolute top-6 right-6 text-gray-400 hover:text-[#0A0A0A] transition-colors"><X size={24} /></button>
                        <h2 className="text-3xl font-black text-[#0A0A0A] mb-8 tracking-tight">Submit your proposal</h2>

                        <div className="space-y-6">
                            <div>
                                <label className="block text-[11px] font-black uppercase tracking-widest text-gray-500 mb-3">Bid Amount</label>
                                <div className="relative">
                                    <span className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-gray-400">$</span>
                                    <input type="text" placeholder="e.g. 750" value={proposalPrice} onChange={(e) => setProposalPrice(e.target.value)} className="w-full border-2 border-gray-100 rounded-xl px-4 pl-8 py-3 text-sm font-bold focus:border-indigo-600 outline-none" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-[11px] font-black uppercase tracking-widest text-gray-500 mb-3">Estimated Delivery</label>
                                <input type="text" placeholder="e.g. 2 weeks" value={proposalTime} onChange={(e) => setProposalTime(e.target.value)} className="w-full border-2 border-gray-100 rounded-xl px-4 py-3 text-sm font-medium focus:border-indigo-600 outline-none" />
                            </div>
                            <div>
                                <label className="block text-[11px] font-black uppercase tracking-widest text-gray-500 mb-3">Cover Letter</label>
                                <textarea rows={5} placeholder="Introduce yourself, list past experiences relevant to SaaS, and explain your approach..." value={proposalCover} onChange={(e) => setProposalCover(e.target.value)} className="w-full border-2 border-gray-100 rounded-xl px-4 py-3 text-sm font-medium focus:border-indigo-600 outline-none resize-none" />
                            </div>
                            <div>
                                <label className="block text-[11px] font-black uppercase tracking-widest text-gray-500 mb-3">Attach Work Samples</label>
                                <div className="w-full border-2 border-dashed border-gray-200 rounded-xl p-6 flex flex-col items-center justify-center bg-gray-50/50 hover:bg-gray-50 cursor-pointer">
                                    <Paperclip size={20} className="text-indigo-600 mb-2" />
                                    <div className="text-xs font-bold text-gray-700">Attach files or links</div>
                                </div>
                            </div>
                            <div className="flex gap-4 pt-4 border-t border-black/5 mt-8">
                                <button onClick={() => setIsSubmitProposalOpen(false)} className="flex-1 py-3.5 rounded-full font-bold uppercase tracking-widest text-xs text-gray-500 hover:bg-gray-50 transition-colors border border-gray-200">Cancel</button>
                                <button onClick={() => setIsSubmitProposalOpen(false)} className="flex-1 bg-indigo-600 text-white rounded-full font-bold uppercase tracking-widest text-xs hover:bg-indigo-700 hover:shadow-lg shadow-indigo-600/20 transition-all">Submit Proposal</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Hire Freelancer Modal (Client) */}
            {isHireModalOpen && (
                <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4">
                    <div className="bg-white rounded-[2rem] max-w-[500px] w-full p-8 md:p-10 shadow-2xl relative text-center">
                        <button onClick={() => setIsHireModalOpen(false)} className="absolute top-6 right-6 text-gray-400 hover:text-[#0A0A0A] transition-colors"><X size={24} /></button>
                        <div className="w-16 h-16 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Briefcase size={28} />
                        </div>
                        <h2 className="text-2xl font-black text-[#0A0A0A] mb-2 tracking-tight">Hire Sanku S.</h2>
                        <p className="text-gray-500 text-sm font-medium mb-8">You are about to start a contract based on the agreed proposal details. Once confirmed, your project workspace will unlock.</p>

                        <div className="bg-gray-50 rounded-2xl p-6 text-left space-y-4 mb-8">
                            <div className="flex justify-between border-b border-gray-200 pb-3">
                                <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Project</span>
                                <span className="text-sm font-bold text-gray-800">{project.title}</span>
                            </div>
                            <div className="flex justify-between border-b border-gray-200 pb-3">
                                <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Price Agreed</span>
                                <span className="text-sm font-black text-emerald-600">$850.00</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Delivery</span>
                                <span className="text-sm font-bold text-gray-800">3 weeks</span>
                            </div>
                        </div>

                        <div className="flex gap-4 flex-col sm:flex-row">
                            <button onClick={() => setIsHireModalOpen(false)} className="flex-1 py-3.5 rounded-full font-bold uppercase tracking-widest text-xs text-gray-500 hover:bg-gray-50 transition-colors border border-gray-200">Cancel</button>
                            <button onClick={() => setIsHireModalOpen(false)} className="flex-1 bg-emerald-500 text-white rounded-full font-bold uppercase tracking-widest text-xs hover:bg-emerald-600 hover:shadow-lg shadow-emerald-500/20 transition-all flex items-center justify-center gap-2">
                                <CheckCircle2 size={16} /> Confirm Hire
                            </button>
                        </div>
                    </div>
                </div>
            )}


            {/* --- Main Page Content --- */}
            <div className="max-w-[1200px] mx-auto mt-10 px-6">

                {/* Hero / Project Header Card */}
                <div className="bg-white rounded-3xl p-8 border border-black/5 shadow-sm mb-10">
                    <div className="flex flex-col lg:flex-row justify-between gap-8 lg:items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-indigo-600 bg-indigo-50 px-3 py-1.5 rounded-full mb-4">
                                UI/UX Design <ChevronRight size={10} /> Web Design
                            </div>
                            <h1 className="text-3xl md:text-4xl font-black text-[#0A0A0A] uppercase tracking-tight mb-4">{project.title}</h1>
                            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-medium text-gray-500">
                                <div className="flex items-center gap-1.5"><Clock size={16} /> Posted {project.posted}</div>
                                <div className="flex items-center gap-1.5"><MapPin size={16} /> Worldwide Remote</div>
                            </div>
                        </div>

                        <div className="flex flex-col items-start lg:items-end gap-4 min-w-[200px]">
                            <div className="text-left lg:text-right">
                                <div className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">{project.budgetType}</div>
                                <div className="text-2xl font-black text-[#0A0A0A] leading-none mb-1">{project.budgetRange}</div>
                                <div className="text-xs font-semibold text-gray-500">{project.experience} Level</div>
                            </div>

                            {viewMode === 'client' && (
                                <div className="flex gap-2">
                                    <button className="bg-white border border-gray-200 text-[#0A0A0A] px-5 py-2.5 rounded-full font-bold text-xs uppercase hover:bg-gray-50 transition-colors shadow-sm">Edit Project</button>
                                    <button className="bg-rose-50 border border-rose-100 text-rose-600 px-5 py-2.5 rounded-full font-bold text-xs uppercase hover:bg-rose-100 transition-colors shadow-sm"><X size={14} className="inline mr-1 -mt-0.5" /> Close</button>
                                </div>
                            )}

                            {viewMode === 'freelancer' && (
                                <button onClick={() => setIsSubmitProposalOpen(true)} className="w-full bg-indigo-600 text-white px-6 py-3 rounded-full font-bold uppercase tracking-[0.1em] text-[11px] shadow-lg hover:shadow-indigo-600/30 hover:-translate-y-0.5 transition-all outline-none">
                                    Submit A Proposal
                                </button>
                            )}
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

                    {/* Left Column (Main Content) */}
                    <div className="lg:col-span-2 space-y-10">
                        {viewMode === 'client' && (
                            <div className="flex gap-6 border-b border-black/5 pb-2">
                                {['overview', 'proposals', 'shortlisted'].map(tab => (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveTab(tab)}
                                        className={`pb-3 text-sm font-bold uppercase tracking-widest transition-colors relative ${activeTab === tab ? 'text-[#0A0A0A]' : 'text-gray-400 hover:text-gray-600'}`}
                                    >
                                        {tab} {tab === 'proposals' && <span className="ml-1 bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded-full text-[10px]">12</span>}
                                        {activeTab === tab && <div className="absolute bottom-[-1px] left-0 w-full h-[3px] bg-[#0A0A0A] rounded-t-lg"></div>}
                                    </button>
                                ))}
                            </div>
                        )}

                        {/* Client Proposals View */}
                        {(viewMode === 'client' && activeTab === 'proposals') && (
                            <div className="space-y-6">
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="text-xl font-black text-[#0A0A0A] uppercase tracking-tight">Active Proposals (12)</h3>
                                    <select className="border border-gray-200 rounded-lg px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-gray-500 bg-white outline-none">
                                        <option>Best Match</option>
                                        <option>Lowest Price</option>
                                        <option>Highest Rating</option>
                                    </select>
                                </div>

                                {proposals.map(prop => (
                                    <div key={prop.id} className="bg-white rounded-2xl p-6 border border-black/5 shadow-sm hover:shadow-md transition-shadow">
                                        <div className="flex flex-col md:flex-row justify-between gap-6 mb-4">
                                            <div className="flex gap-4 items-start">
                                                <div className="relative">
                                                    <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 text-white flex items-center justify-center text-xl font-bold shadow-sm">
                                                        {prop.name[0]}
                                                    </div>
                                                    <div className="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-emerald-500 border-[3px] border-white"></div>
                                                </div>
                                                <div>
                                                    <div className="flex items-center gap-2 mb-1">
                                                        <h4 className="text-lg font-black text-[#0A0A0A] tracking-tight">{prop.name}</h4>
                                                        {prop.status === 'shortlisted' && <span className="bg-orange-100 text-orange-600 text-[9px] px-2 py-0.5 rounded-full font-black uppercase tracking-widest">Shortlisted</span>}
                                                    </div>
                                                    <div className="text-sm font-bold text-gray-600 mb-2">{prop.title}</div>
                                                    <div className="flex items-center gap-3 text-xs font-medium text-gray-500">
                                                        <div className="flex items-center text-amber-500 font-bold"><span className="text-[14px]">★</span> {prop.rating} <span className="text-gray-400 font-medium ml-1">({prop.reviews})</span></div>
                                                        <div className="flex items-center gap-1"><MapPin size={12} /> {prop.location}</div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="flex flex-row md:flex-col justify-between items-end md:items-end w-full md:w-auto mt-2 md:mt-0 pt-4 md:pt-0 border-t md:border-none border-gray-100">
                                                <div className="text-left md:text-right">
                                                    <div className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-0.5">Bid Amount</div>
                                                    <div className="text-lg font-black text-[#0A0A0A]">{prop.bidAmount}</div>
                                                </div>
                                                <div className="text-right mt-0 md:mt-2">
                                                    <div className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-0.5">Delivery in</div>
                                                    <div className="text-sm font-bold text-gray-700">{prop.deliveryTime}</div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="bg-gray-50 rounded-xl p-4 mb-6 border border-black/5 relative">
                                            <div className="absolute top-[-8px] left-8 w-4 h-4 bg-gray-50 border-l border-t border-black/5 rotate-45"></div>
                                            <p className="text-sm text-gray-600 leading-relaxed font-medium line-clamp-3 relative z-10">"{prop.coverLetter}"</p>
                                        </div>

                                        <div className="flex flex-wrap gap-3">
                                            <button className="flex-1 max-w-[140px] bg-[#0A0A0A] hover:bg-indigo-600 text-white py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all shadow-md flex justify-center items-center gap-2"><MessageSquare size={14} /> Message</button>
                                            <button className="flex-1 max-w-[140px] bg-white border border-gray-200 hover:border-black/30 text-[#0A0A0A] py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all flex justify-center items-center">Shortlist</button>
                                            <div className="flex-1 flex justify-end">
                                                <button onClick={() => setIsHireModalOpen(true)} className="bg-emerald-50 text-emerald-600 hover:bg-emerald-500 hover:text-white border border-emerald-200 px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all shadow-sm flex items-center gap-2">Hire <span className="hidden sm:inline">Freelancer</span></button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Project Details / Overview View */}
                        {(viewMode === 'freelancer' || activeTab === 'overview') && (
                            <div className="bg-white rounded-3xl p-8 border border-black/5 shadow-sm space-y-8">
                                <div>
                                    <h3 className="text-sm font-black text-[#0A0A0A] uppercase tracking-widest mb-4">Project Description</h3>
                                    <p className="text-gray-600 font-medium leading-[1.8] whitespace-pre-wrap text-[15px]">
                                        {project.description}
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-sm font-black text-[#0A0A0A] uppercase tracking-widest mb-4">Skills & Expertise Required</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {project.skills.map((skill, idx) => (
                                            <span key={idx} className="bg-indigo-50/50 border border-indigo-100 text-indigo-700 font-bold tracking-wide text-xs px-4 py-2 rounded-full shadow-sm shadow-indigo-100/50">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="border border-gray-100 rounded-xl bg-gray-50/50 p-6 flex flex-col sm:flex-row gap-6 justify-between">
                                    <h3 className="text-sm font-black text-[#0A0A0A] uppercase tracking-widest mb-2 sm:mb-0 w-full sm:w-auto">Attachments</h3>
                                    <div className="flex flex-col gap-2 flex-1">
                                        <div className="flex justify-between items-center text-sm bg-white border border-gray-100 p-3 rounded-lg shadow-sm group hover:border-black/20 cursor-pointer transition-all">
                                            <div className="flex items-center gap-3 font-bold text-gray-700"><Paperclip size={16} className="text-indigo-600" /> brand_guidelines.pdf</div>
                                            <div className="text-xs font-black uppercase tracking-widest text-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity">Download</div>
                                        </div>
                                        <div className="flex justify-between items-center text-sm bg-white border border-gray-100 p-3 rounded-lg shadow-sm group hover:border-black/20 cursor-pointer transition-all">
                                            <div className="flex items-center gap-3 font-bold text-gray-700"><LinkIcon size={16} className="text-indigo-600" /> Current Dashboard URL</div>
                                            <div className="text-xs font-black uppercase tracking-widest text-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity">Visit</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Right Column (Sidebar widgets) */}
                    <div className="space-y-6">
                        {/* Client Info Widget */}
                        <div className="bg-white rounded-2xl p-6 border border-black/5 shadow-sm">
                            <h3 className="text-xs font-black text-[#0A0A0A] uppercase tracking-widest mb-6">About the Client</h3>
                            <div className="space-y-5">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-400 font-bold"><User size={20} /></div>
                                    <div>
                                        <div className="font-bold text-[#0A0A0A]">SaaS Innovations Inc.</div>
                                        <div className="text-xs font-medium text-gray-500">Member since Oct 2024</div>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-3">
                                    <div className="flex items-center gap-2 text-sm font-medium text-gray-600">
                                        <ShieldCheck size={16} className="text-emerald-500" /> Payment method verified
                                    </div>
                                    <div className="flex items-center gap-2 text-sm font-medium text-gray-600">
                                        <CheckCircle2 size={16} className="text-emerald-500" /> Identity verified
                                    </div>
                                </div>
                                <div className="border-t border-black/5 pt-4">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <div className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-0.5">Projects</div>
                                            <div className="text-lg font-bold text-[#0A0A0A]">14</div>
                                        </div>
                                        <div>
                                            <div className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-0.5">Hires</div>
                                            <div className="text-lg font-bold text-[#0A0A0A]">5</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Project Link Widget */}
                        <div className="bg-white rounded-2xl p-6 border border-black/5 shadow-sm">
                            <h3 className="text-xs font-black text-[#0A0A0A] uppercase tracking-widest mb-4">Project Link</h3>
                            <input type="text" readOnly value="https://eduprova.com/p/b1c4e9" className="w-full border border-gray-100 bg-gray-50 rounded-lg px-3 py-2 text-sm font-medium text-gray-500 mb-3 outline-none" />
                            <button className="text-indigo-600 text-xs font-bold uppercase tracking-widest hover:underline hover:text-indigo-800 transition-colors">Copy Link</button>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
}
