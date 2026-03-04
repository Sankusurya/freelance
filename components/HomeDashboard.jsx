"use client";

import React, { useState } from 'react';
import {
    Layout,
    Input,
    Button,
    Badge,
    Avatar,
    Typography,
    Card,
    Row,
    Col,
    List,
    Tag,
} from 'antd';
import {
    SearchOutlined,
    BellFilled,
    MailFilled,
    HeartFilled,
    ShoppingCartOutlined,
    StarFilled,
    SafetyCertificateFilled,
    ThunderboltFilled
} from '@ant-design/icons';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Wallet, ShieldCheck, ArrowRight } from "lucide-react";

const { Header, Content, Footer } = Layout;
const { Title, Text } = Typography;

// Mock Data for Views
const CATEGORIES = [
    { name: 'Graphics & Design', icon: '🎨' },
    { name: 'Digital Marketing', icon: '📢' },
    { name: 'Writing & Translation', icon: '✍️' },
    { name: 'Video & Animation', icon: '🎬' },
    { name: 'Music & Audio', icon: '🎵' },
    { name: 'Programming & Tech', icon: '💻' },
    { name: 'Business', icon: '💼' },
    { name: 'Lifestyle', icon: '🧘' },
];

const GIGS = [
    { id: 1, title: 'I will design a modern logo for your business', rating: 5.0, reviews: 120, price: 50, image: 'https://images.unsplash.com/photo-1626785774573-4b79931433da?auto=format&fit=crop&q=80&w=300&h=200', seller: 'DesignPro' },
    { id: 2, title: 'I will build a responsive React website', rating: 4.9, reviews: 85, price: 150, image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=300&h=200', seller: 'DevMaster' },
    { id: 3, title: 'I will write SEO optimized content', rating: 4.8, reviews: 200, price: 30, image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=300&h=200', seller: 'WordWizard' },
    { id: 4, title: 'I will create a whiteboard animation video', rating: 5.0, reviews: 45, price: 80, image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=300&h=200', seller: 'VideoExpert' },
];

const JOBS = [
    { id: 1, title: 'Need a Logo Designer for Startup', budget: '$200 - $500', posted: '2h ago', proposals: 5 },
    { id: 2, title: 'Full Stack Developer for E-commerce Site', budget: '$1000 - $3000', posted: '5h ago', proposals: 12 },
    { id: 3, title: 'Content Writer for Tech Blog', budget: '$50 per article', posted: '1d ago', proposals: 20 },
];

export default function HomeDashboard() {
    const [mode, setMode] = useState('client'); // 'client' | 'freelancer'
    const [searchValue, setSearchValue] = useState('');

    const toggleMode = (targetMode) => {
        setMode(targetMode);
    };

    return (
        <Layout className="min-h-screen bg-transparent font-sans">
            {/* Fixed Header */}
            <Header className="sticky top-0 z-50 flex items-center justify-between bg-[#0F172A] px-8 h-[80px] shadow-sm border-b border-gray-800 transition-all duration-300">
                {/* Left: Logo */}
                <div className="flex items-center gap-2 shrink-0">
                    <div className="text-2xl font-bold tracking-tight cursor-pointer select-none">
                        <span className="text-white">freelance</span>
                        <span className="text-green-400">.</span>
                    </div>
                </div>

                {/* Center: Search Input */}
                <div className="flex-1 max-w-[600px] mx-8 hidden md:block">
                    <div className="relative group">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 z-10">
                            <SearchOutlined style={{ fontSize: '20px' }} />
                        </span>
                        <Input
                            value={searchValue}
                            onChange={(e) => setSearchValue(e.target.value)}
                            placeholder={mode === 'client' ? "What service are you looking for today?" : "Search for jobs, leads, or clients..."}
                            className="w-full !bg-gray-800/50 !border !border-gray-700 hover:!border-gray-600 focus:!border-green-500 focus:!bg-gray-800 !text-white placeholder:!text-gray-400 !rounded-full !py-2.5 !pl-12 !pr-4 !shadow-sm transition-all !text-sm h-auto"
                        />
                    </div>
                </div>

                {/* Right: Icons & Mode Toggle */}
                <div className="flex items-center gap-6 shrink-0">
                    <nav className="flex items-center gap-2 text-white/90">
                        {/* Notification */}
                        <Badge count={3} size="small" offset={[-4, 4]} color="#ef4444" className="cursor-pointer">
                            <motion.div
                                whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.1)' }}
                                className="w-10 h-10 flex items-center justify-center rounded-full transition-all"
                            >
                                <BellFilled style={{ fontSize: '22px', color: '#e2e8f0' }} />
                            </motion.div>
                        </Badge>

                        {/* Messages */}
                        <Badge count={2} size="small" offset={[-2, 2]} color="#3b82f6" className="cursor-pointer">
                            <motion.div
                                whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.1)' }}
                                className="w-10 h-10 flex items-center justify-center rounded-full transition-all"
                            >
                                <MailFilled style={{ fontSize: '22px', color: '#e2e8f0' }} />
                            </motion.div>
                        </Badge>

                        {/* Cart */}
                        <Badge count={0} size="small" offset={[-2, 2]} color="#10b981" className="cursor-pointer">
                            <motion.div
                                whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.1)' }}
                                className="w-10 h-10 flex items-center justify-center rounded-full transition-all"
                            >
                                <ShoppingCartOutlined style={{ fontSize: '22px', color: '#e2e8f0' }} />
                            </motion.div>
                        </Badge>

                        {/* Wishlist */}
                        <motion.div
                            whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.1)' }}
                            className="w-10 h-10 flex items-center justify-center rounded-full transition-all cursor-pointer"
                        >
                            <HeartFilled style={{ fontSize: '22px', color: '#e2e8f0' }} />
                        </motion.div>

                        <a href="#" className="font-semibold text-gray-200 hover:text-white transition-colors hidden lg:block text-sm px-3 hover:bg-white/5 py-1.5 rounded-lg">Orders</a>
                    </nav>

                    {/* Mode Toggle Switch */}
                    <div className="flex items-center bg-gray-800/80 p-1 rounded-full border border-gray-700">
                        {['Client', 'Freelancer'].map((m) => {
                            const isActive = mode === m.toLowerCase();
                            return (
                                <button
                                    key={m}
                                    onClick={() => toggleMode(m.toLowerCase())}
                                    className={`relative px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 z-10 flex items-center justify-center ${isActive
                                        ? 'text-white'
                                        : 'text-gray-400 hover:text-gray-200'
                                        }`}
                                >
                                    {isActive && (
                                        <motion.div
                                            layoutId="activePill"
                                            className="absolute inset-0 bg-green-600 rounded-full -z-10 shadow-lg"
                                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                        />
                                    )}
                                    {m}
                                </button>
                            );
                        })}
                    </div>

                    <div className="pl-2 border-l border-gray-700">
                        <Avatar size={36} className="bg-gradient-to-br from-green-500 to-emerald-600 cursor-pointer hover:ring-2 hover:ring-green-400 hover:ring-offset-2 hover:ring-offset-[#0F172A] transition-all font-bold text-sm">
                            A
                        </Avatar>
                    </div>
                </div>
            </Header>

            {/* Main Content Area */}
            <Content className="pt-6 pb-20 px-6 max-w-[1440px] mx-auto w-full">
                <AnimatePresence mode="wait">
                    {mode === 'client' ? (
                        <ClientDashboard key="client" />
                    ) : (
                        <FreelancerDashboard key="freelancer" />
                    )}
                </AnimatePresence>
            </Content>
        </Layout>
    );
}

// ------------------------------------------------------------------
// CLIENT VIEW COMPONENT
// ------------------------------------------------------------------
function ClientDashboard() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="space-y-12"
        >
            {/* Custom Hero / Welcome */}
            <section className="bg-white rounded-2xl relative overflow-hidden shadow-sm border border-black/5 min-h-[450px] flex flex-col items-center justify-center pt-10 pb-16">
                <style>{`
                    .bg-grid {
                        background-image: 
                            linear-gradient(to right, rgba(0,0,0,0.04) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(0,0,0,0.04) 1px, transparent 1px);
                        background-size: 80px 80px;
                        background-position: center;
                        position: absolute;
                        top: 0; left: 0; right: 0; bottom: 0;
                        z-index: 0;
                        pointer-events: none;
                    }
                    .mesh-gradient {
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        width: 100%;
                        height: 100%;
                        background: radial-gradient(circle at 20% 40%, rgba(236,72,153,0.08) 0%, transparent 40%),
                                    radial-gradient(circle at 80% 60%, rgba(99,102,241,0.08) 0%, transparent 40%),
                                    radial-gradient(circle at 50% 50%, rgba(244,63,94,0.05) 0%, transparent 60%);
                        z-index: 0;
                        pointer-events: none;
                    }
                `}</style>
                <div className="bg-grid"></div>
                <div className="mesh-gradient"></div>

                <div className="relative text-center w-full max-w-[900px]">
                    {/* Micro Badge top */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-white border text-center border-black/10 px-6 py-2 rounded-full shadow-sm mb-8 flex items-center justify-center gap-2 mx-auto w-max"
                    >
                        <div className="w-2 h-2 rounded-full bg-indigo-600"></div>
                        <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-gray-500">The New Standard</span>
                    </motion.div>

                    {/* Floating Escrow Badge (Left) */}
                    <motion.div
                        initial={{ opacity: 0, x: -50, rotate: -3 }}
                        animate={{ opacity: 1, x: 0, rotate: -6 }}
                        transition={{ delay: 0.3, type: 'spring', stiffness: 200, damping: 20 }}
                        className="absolute top-10 left-[-2rem] md:left-[-3rem] lg:left-[-4rem] bg-white rounded-[2rem] p-4 lg:p-5 shadow-[0_20px_40px_rgb(0,0,0,0.08)] border border-black/5 flex items-center gap-4 z-20 hover:rotate-0 hover:scale-105 transition-all duration-300"
                    >
                        <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                            <Wallet size={18} className="text-emerald-500" />
                        </div>
                        <div className="text-left">
                            <div className="text-[9px] font-black uppercase tracking-[0.15em] text-gray-400 mb-0.5">Escrow Locked</div>
                            <div className="text-xl lg:text-2xl font-black text-[#0A0A0A] tracking-[-0.02em]">$12,500<span className="text-base text-gray-300">.00</span></div>
                        </div>
                    </motion.div>

                    {/* Floating Match Score Badge (Right) */}
                    <motion.div
                        initial={{ opacity: 0, x: 50, rotate: 3 }}
                        animate={{ opacity: 1, x: 0, rotate: 4 }}
                        transition={{ delay: 0.4, type: 'spring', stiffness: 200, damping: 20 }}
                        className="absolute bottom-6 right-[-1rem] md:right-[-2rem] lg:right-[-3rem] bg-white rounded-[2rem] p-4 lg:p-5 shadow-[0_20px_40px_rgb(0,0,0,0.08)] border border-black/5 flex items-start gap-4 z-20 min-w-[220px] hover:rotate-0 hover:scale-105 transition-all duration-300"
                    >
                        <div className="w-10 h-10 rounded-full bg-indigo-50 border border-indigo-100 flex items-center justify-center shrink-0">
                            <ShieldCheck size={18} className="text-indigo-600" />
                        </div>
                        <div className="text-left w-full pr-2">
                            <div className="text-[9px] font-black uppercase tracking-[0.15em] text-gray-400 mb-1 w-full">Match Score</div>
                            <div className="text-[12px] lg:text-[14px] font-black tracking-tight text-[#0A0A0A] mb-3">99.8% Compatibility</div>
                            <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                                <div className="bg-indigo-600 h-full w-[99.8%] rounded-full shadow-[0_0_10px_rgba(79,70,229,0.5)]"></div>
                            </div>
                        </div>
                    </motion.div>

                    <h1 className="text-[12vw] md:text-[100px] lg:text-[130px] leading-[0.8] font-black tracking-[-0.04em] text-[#0A0A0A] uppercase relative z-10 w-full whitespace-nowrap">
                        Hire Expert
                    </h1>
                    <h2 className="text-[15vw] md:text-[120px] lg:text-[150px] leading-[0.8] font-serif italic tracking-[-0.04em] lowercase text-transparent bg-clip-text bg-gradient-to-r from-[#b55cff] via-[#46c6ea] to-[#4c7ef1] relative z-10 -mt-6">
                        talent.
                    </h2>
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-gray-500 text-[14px] md:text-[16px] font-medium max-w-[650px] text-center leading-[1.6] mb-8 relative z-10 mt-4 mx-auto"
                >
                    Find the right professionals for your projects quickly and easily. We connect businesses <br className="hidden md:block" /> with proven, experienced freelancers who deliver high-quality work.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full relative z-20"
                >
                    <Link href="/">
                        <button className="bg-[#0A0A0A] text-white px-8 py-3.5 rounded-[2rem] font-bold text-[11px] uppercase tracking-[0.1em] hover:bg-black/80 hover:scale-[1.02] transition-all duration-300 flex items-center gap-2 shadow-[0_15px_30px_rgba(0,0,0,0.15)] group">
                            Start Hiring
                            <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform" />
                        </button>
                    </Link>
                    <button className="bg-white text-[#0A0A0A] px-8 py-3.5 rounded-[2rem] font-bold text-[11px] uppercase tracking-[0.1em] hover:bg-gray-50 transition-all border border-black/5 hover:shadow-md">
                        Apply As Talent
                    </button>
                </motion.div>
            </section>

            {/* Categories Strip */}
            <section>
                <div className="flex items-center justify-between mb-6">
                    <Title level={3} className="!m-0 text-gray-900">Explore Services</Title>
                    <Link href="/">
                        <span className="text-blue-600 font-semibold hover:underline cursor-pointer">View All Services</span>
                    </Link>
                </div>
                <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
                    {CATEGORIES.map((cat, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -5 }}
                            className="flex-shrink-0 bg-white border border-gray-100 shadow-sm hover:shadow-md rounded-xl p-4 w-40 flex flex-col items-center gap-3 cursor-pointer transition-all"
                        >
                            <span className="text-4xl">{cat.icon}</span>
                            <span className="text-sm font-semibold text-center text-gray-700">{cat.name}</span>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Recommended Gigs */}
            <section>
                <div className="flex items-center justify-between mb-6">
                    <Title level={3} className="!m-0 text-gray-900">Recommended for You</Title>
                    <Link href="/">
                        <span className="text-blue-600 font-semibold hover:underline cursor-pointer">See All</span>
                    </Link>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {GIGS.map((gig) => (
                        <Card
                            key={gig.id}
                            hoverable
                            cover={<img alt={gig.title} src={gig.image} className="h-48 object-cover" />}
                            className="rounded-xl overflow-hidden border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300"
                            styles={{ body: { padding: '16px' } }}
                        >
                            <div className="flex items-center justify-between mb-2">
                                <div className="flex items-center gap-2">
                                    <Avatar size="small" className="bg-gray-200">{gig.seller[0]}</Avatar>
                                    <span className="text-xs font-bold text-gray-700">{gig.seller}</span>
                                </div>
                                <Tag color="gold" icon={<StarFilled />} className="mr-0 rounded-full px-2 border-none bg-yellow-50 text-yellow-600 font-bold">{gig.rating}</Tag>
                            </div>
                            <h3 className="font-semibold text-gray-900 line-clamp-2 min-h-[3rem] mb-2 cursor-pointer hover:text-blue-600 transition-colors">
                                {gig.title}
                            </h3>
                            <div className="mt-4 flex items-center justify-between border-t border-gray-50 pt-3">
                                <HeartFilled className="text-gray-300 hover:text-red-500 cursor-pointer text-lg transition-colors" />
                                <div className="text-right">
                                    <span className="text-xs text-gray-400 font-medium uppercase">Starting at</span>
                                    <div className="text-lg font-bold text-gray-900">${gig.price}</div>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </section>
        </motion.div>
    );
}

// ------------------------------------------------------------------
// FREELANCER VIEW COMPONENT
// ------------------------------------------------------------------
function FreelancerDashboard() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="space-y-12"
        >
            {/* Dashboard Stats */}
            <section className="bg-black text-white rounded-2xl p-10 relative overflow-hidden shadow-xl">
                <div className="relative z-10 grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <div className="text-gray-400 text-sm font-medium mb-1 uppercase tracking-wider">Earnings in Feb</div>
                        <div className="text-4xl font-bold font-mono">$2,450.00</div>
                    </div>
                    <div>
                        <div className="text-gray-400 text-sm font-medium mb-1 uppercase tracking-wider">Active Orders</div>
                        <div className="text-4xl font-bold font-mono">4</div>
                    </div>
                    <div>
                        <div className="text-gray-400 text-sm font-medium mb-1 uppercase tracking-wider">Avg. Selling Price</div>
                        <div className="text-4xl font-bold font-mono">$125</div>
                    </div>
                    <div className="flex items-center justify-end">
                        <Button type="primary" size="large" className="bg-linear-to-r from-[#0066FF] to-[#E056FD] border-none text-white font-bold px-8 h-12 rounded-xl shadow-lg shadow-blue-200 hover:scale-105 active:scale-95 transition-all">
                            Find Work
                        </Button>
                    </div>
                </div>
            </section>

            <Row gutter={[24, 24]}>
                {/* Active Orders Column */}
                <Col xs={24} lg={16}>
                    <Card title="Active Orders" className="shadow-sm rounded-xl border-gray-100 hover:shadow-md transition-shadow" bordered={false} extra={<a href="#" className="text-blue-600 font-medium">View All</a>}>
                        <List
                            itemLayout="horizontal"
                            dataSource={[
                                { title: 'Logo Design for TechStartup', client: 'johndoe', due: '2 days', status: 'In Progress', price: '$200' },
                                { title: 'React Component Library', client: 'webagency', due: '5 days', status: 'Awaiting Review', price: '$850' },
                            ]}
                            renderItem={(item) => (
                                <List.Item
                                    actions={[<Button type="link">View Order</Button>]}
                                    className="hover:bg-gray-50 transition-colors rounded-lg px-2 -mx-2"
                                >
                                    <List.Item.Meta
                                        avatar={<Avatar className="bg-blue-100 text-blue-600">{item.client[0].toUpperCase()}</Avatar>}
                                        title={<a href="#" className="font-semibold text-gray-900">{item.title}</a>}
                                        description={<span className="text-gray-500">Client: {item.client} • Due in <span className="text-orange-500 font-medium">{item.due}</span></span>}
                                    />
                                    <div className="text-right">
                                        <Tag color={item.status === 'In Progress' ? 'processing' : 'warning'} className="mb-1 rounded-full">{item.status}</Tag>
                                        <div className="font-bold text-gray-900">{item.price}</div>
                                    </div>
                                </List.Item>
                            )}
                        />
                    </Card>
                </Col>

                {/* Level / Status Column */}
                <Col xs={24} lg={8}>
                    <Card className="shadow-sm rounded-xl border-gray-100 h-full bg-gradient-to-b from-white to-gray-50" bordered={false}>
                        <div className="text-center py-6">
                            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 mb-4 relative">
                                <SafetyCertificateFilled className="text-4xl text-green-600" />
                                <div className="absolute -bottom-2 bg-black text-white text-xs font-bold px-2 py-0.5 rounded-full">LEVEL 2</div>
                            </div>
                            <Title level={4} className="!mb-1">Top Rated Seller</Title>
                            <Text type="secondary">Maintain 4.8 star rating to keep your status.</Text>

                            <div className="mt-8 space-y-4">
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-500">Response Rate</span>
                                    <span className="font-bold text-gray-900">100%</span>
                                </div>
                                <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                                    <div className="bg-green-500 h-full w-full rounded-full"></div>
                                </div>

                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-500">Order Completion</span>
                                    <span className="font-bold text-gray-900">98%</span>
                                </div>
                                <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                                    <div className="bg-green-500 h-full w-[98%] rounded-full"></div>
                                </div>
                            </div>
                        </div>
                    </Card>
                </Col>
            </Row>

            {/* Suggested Jobs */}
            <section>
                <div className="flex items-center justify-between mb-6">
                    <Title level={3} className="!m-0 text-gray-900">Jobs Matching Your Skills</Title>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {JOBS.map(job => (
                        <Card key={job.id} title={null} className="shadow-sm hover:shadow-lg transition-all border-gray-100 rounded-xl group cursor-pointer">
                            <div className="flex justify-between items-start mb-4">
                                <div className="bg-gray-100 p-2 rounded-lg group-hover:bg-blue-50 transition-colors">
                                    <ThunderboltFilled className="text-gray-500 group-hover:text-blue-600" />
                                </div>
                                <Text type="secondary" className="text-xs">{job.posted}</Text>
                            </div>
                            <h3 className="font-bold text-lg mb-2 group-hover:text-blue-600 transition-colors">{job.title}</h3>
                            <div className="flex items-center gap-3 text-sm text-gray-500 mb-4">
                                <Tag className="m-0 bg-gray-50 border-gray-200 font-medium">{job.budget}</Tag>
                                <span>{job.proposals} proposals</span>
                            </div>
                            <Button block type="primary" ghost className="border-gray-300 text-gray-700 hover:!border-blue-600 hover:!text-blue-600 font-medium">Apply Now</Button>
                        </Card>
                    ))}
                </div>
            </section>
        </motion.div>
    );
}
