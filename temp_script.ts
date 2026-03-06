const fs = require('fs');
let code = fs.readFileSync('d:\\freelance\\components\\LandingPage.tsx', 'utf-8');
code = code.replace(/function FreelancerCard\(\{ freelancer \}\) \{/, 'function FreelancerCard({ freelancer, index = 0 }) {');
const oldWrapper = `<div
            onClick={() => router.push(\`/service/\${freelancer.id}\`)}
            className="block w-full group cursor-pointer relative"
        >
            <div className={\`bg-white p-5 md:p-6 rounded-[24px] border border-black/5 shadow-[0_4px_15px_rgb(0,0,0,0.03)] hover:shadow-[0_12px_28px_rgb(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-[2px]\`} >
                <div className="flex flex-col md:flex-row gap-5 md:gap-6 items-start md:items-center">`;
const newWrapper = `<motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: "easeOut", delay: index * 0.08 }}
            onClick={() => router.push(\`/service/\${freelancer.id}\`)}
            className="block w-full group cursor-pointer relative"
        >
            <div 
                className="bg-white/60 backdrop-blur-xl border border-white/40 shadow-lg rounded-2xl p-6 transition-all duration-300"
                style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.6), rgba(255,255,255,0.3))' }}
            >
                <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">`;
code = code.replace(oldWrapper, newWrapper);
const oldAvatar = `className="w-14 h-14 md:w-16 md:h-16 rounded-full object-cover shadow-sm bg-gray-200 border-2 border-white" />
                                <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-emerald-500 border-2 border-white rounded-full"></div>
                            </div>
                            <div className="text-left md:text-center mt-0 md:mt-1">
                                <Link`;
const newAvatar = `className="w-[56px] h-[56px] rounded-full object-cover shadow-sm bg-gray-200 border-2 border-white" />
                                <div className="absolute bottom-0 right-0 w-2 h-2 bg-green-500 border border-white rounded-full"></div>
                            </div>
                            <div className="text-left md:text-center mt-0 flex flex-col gap-1 items-start md:items-center">
                                <Link`;
code = code.replace(oldAvatar, newAvatar);
const oldLeftFlex = `className="flex flex-row md:flex-col items-center md:items-center gap-4 md:w-32 flex-shrink-0 text-center relative z-10 w-full md:w-auto justify-between md:justify-start"`;
const newLeftFlex = oldLeftFlex; // Do not touch this line, touch the child instead
const oldLeftChildFlex = `className="flex items-center gap-4 md:flex-col md:gap-1"`;
const newLeftChildFlex = `className="flex items-center gap-2 md:flex-col md:gap-2"`;
code = code.replace(oldLeftChildFlex, newLeftChildFlex);
const oldSkillTag = `className="text-[10px] font-bold text-gray-400 tracking-widest uppercase mt-1"`;
const newSkillTag = `className="text-[10px] font-bold text-gray-400 tracking-widest uppercase mt-0"`;
code = code.replace(oldSkillTag, newSkillTag);
const oldMiddle = `className="flex-grow flex flex-col justify-center min-w-0 pr-0 md:pr-4 md:border-l md:border-black/5 md:pl-6 md:py-2 w-full md:w-auto"`;
const newMiddle = `className="flex-grow flex flex-col justify-center min-w-0 pr-0 md:pr-4 md:border-l md:border-black/5 md:pl-[32px] md:py-2 w-full md:w-auto"`;
code = code.replace(oldMiddle, newMiddle);
const oldTitle = `className="text-[16px] md:text-[18px] font-bold text-[#0A0A0A] leading-snug line-clamp-2 md:line-clamp-2 mb-4 group-hover:text-indigo-600 transition-colors">{freelancer.title}</h3>`;
const newTitle = `className="text-[16px] md:text-[18px] font-bold text-[#0A0A0A] leading-snug line-clamp-2 md:line-clamp-2 mb-[10px] group-hover:text-indigo-600 transition-colors max-w-xl">{freelancer.title}</h3>`;
code = code.replace(oldTitle, newTitle);
const oldBadges = `<div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                            <div className="flex items-center gap-1.5">
                                <Star size={14} className="fill-amber-500 text-amber-500" />
                                <span className="text-[13px] font-bold text-gray-900">{freelancer.rating}</span>
                                <span className="text-[13px] font-medium text-gray-400">({freelancer.reviews})</span>
                            </div>
                            <span className="text-gray-300 hidden md:inline-block">•</span>
                            <div className="flex items-center gap-1.5 text-[10px] sm:text-[11px] font-bold text-gray-500 bg-gray-50 border border-black/5 px-2 py-1.5 rounded-md uppercase tracking-wider">
                                <span>🚀</span> 2 Days Delivery
                            </div>
                            <div className="flex items-center gap-1.5 text-[10px] sm:text-[11px] font-bold text-indigo-600 bg-indigo-50 border border-indigo-100 px-2.5 py-1.5 rounded-md uppercase tracking-wider">
                                <CheckCircle2 size={12} /> 92% Score
                            </div>
                            <div className="flex items-center gap-1.5 text-[10px] sm:text-[11px] font-bold text-gray-500 border border-black/5 px-2.5 py-1.5 rounded-md uppercase tracking-wider hidden lg:flex">
                               <Briefcase size={12} /> 150+ Jobs
                            </div>
                            <div className="flex items-center gap-1.5 text-[10px] sm:text-[11px] font-bold text-gray-500 border border-black/5 px-2.5 py-1.5 rounded-md uppercase tracking-wider hidden xl:flex">
                               <MessageSquare size={12} /> Replies in 1h
                            </div>
                        </div>`;
const newBadges = `<div className="flex flex-col gap-[12px]">
                            <div className="flex items-center gap-1.5">
                                <Star size={14} className="fill-amber-500 text-amber-500" />
                                <span className="text-[13px] font-bold text-gray-900">{freelancer.rating}</span>
                                <span className="text-[13px] font-medium text-gray-400">({freelancer.reviews})</span>
                            </div>

                            <div className="flex flex-wrap items-center gap-[10px]">
                                <div className="flex items-center gap-1.5 bg-white/70 border border-gray-200 rounded-lg px-3 py-1 text-sm font-bold text-gray-500 uppercase tracking-wider">
                                    <span>🚀</span> 2 Days Delivery
                                </div>
                                <div className="flex items-center gap-1.5 bg-white/70 border border-gray-200 rounded-lg px-3 py-1 text-sm font-bold text-indigo-600 uppercase tracking-wider">
                                    <CheckCircle2 size={12} /> 92% Score
                                </div>
                                <div className="hidden lg:flex items-center gap-1.5 bg-white/70 border border-gray-200 rounded-lg px-3 py-1 text-sm font-bold text-gray-500 uppercase tracking-wider">
                                   <Briefcase size={12} /> 150+ Jobs
                                </div>
                                <div className="hidden xl:flex items-center gap-1.5 bg-white/70 border border-gray-200 rounded-lg px-3 py-1 text-sm font-bold text-gray-500 uppercase tracking-wider">
                                   <MessageSquare size={12} /> Replies in 1h
                                </div>
                            </div>
                        </div>`;
code = code.replace(oldBadges, newBadges);
const oldRight = `<div className="w-full md:w-auto flex flex-row md:flex-col items-center md:items-end justify-between md:justify-center border-t md:border-t-0 md:border-l border-black/5 pt-4 md:pt-0 md:pl-6 flex-shrink-0 min-w-[180px] relative z-20">
                        {/* Desktop Actions Row */}
                        <div className="hidden md:flex items-center gap-2 mb-4">
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                }}
                                className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-100 text-gray-400 hover:text-rose-500 transition-colors"
                            >
                                <Bookmark size={15} className={freelancer.isChoice ? "fill-rose-500 text-rose-500" : "fill-transparent transition-all"} />
                            </button>
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setIsExpanded(!isExpanded);
                                }}
                                className={\`w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors \${isExpanded ? 'bg-gray-100 text-[#0A0A0A]' : 'text-gray-500'}\`}
                            >
                                <ChevronDown size={16} className={\`transition-transform duration-300 \${isExpanded ? "rotate-180" : ""}\`} />
                            </button>
                        </div>

                        {/* Pricing */}
                        <div className="flex flex-col items-start md:items-end w-full">
                            <span className="text-[9px] font-bold uppercase tracking-widest text-gray-400 mb-1">Starting At</span>
                            <div className="text-2xl md:text-[28px] font-black text-[#0A0A0A] leading-none mb-0 md:mb-5">
                                {priceAmount || freelancer.price}
                            </div>
                            <div className="hidden md:flex w-full">
                                <button onClick={(e) => {
                                    e.stopPropagation();
                                    router.push(\`/service/\${freelancer.id}\`);
                                }} className="bg-white border-2 border-gray-200 hover:border-[#0A0A0A] text-[#0A0A0A] text-[10px] font-bold uppercase tracking-widest px-5 py-2.5 rounded-full transition-all hover:bg-gray-50 w-full text-center">
                                    Contact
                                </button>
                            </div>
                        </div>`;
const newRight = `<div className="w-full md:w-auto flex flex-row md:flex-col items-center md:items-end justify-between md:justify-center border-t md:border-t-0 md:border-l border-black/5 pt-4 md:pt-0 md:pl-[32px] flex-shrink-0 min-w-[180px] relative z-20">
                        {/* Desktop Actions Row */}
                        <div className="hidden md:flex flex-col items-end w-full">
                            <div className="flex items-center gap-2 mb-[14px]">
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                    }}
                                    className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white/50 text-gray-400 hover:text-rose-500 transition-colors"
                                >
                                    <Bookmark size={15} className={freelancer.isChoice ? "fill-rose-500 text-rose-500" : "fill-transparent transition-all"} />
                                </button>
                            </div>
                            
                            <span className="text-[9px] font-bold uppercase tracking-widest text-gray-400 mb-[8px]">Starting At</span>
                            <div className="text-[24px] font-[700] text-[#0A0A0A] leading-none mb-[18px]">
                                {priceAmount || freelancer.price}
                            </div>
                            
                            <div className="hidden md:flex items-center gap-[12px] w-full">
                                <button onClick={(e) => {
                                    e.stopPropagation();
                                    router.push(\`/service/\${freelancer.id}\`);
                                }} className="flex-1 bg-gradient-to-r from-[#0066FF] to-[#E056FD] text-white px-6 py-2 rounded-xl shadow-[0_4px_12px_rgba(0,102,255,0.2)] transition-all hover:scale-105 active:scale-95 text-xs font-bold uppercase tracking-widest text-center">
                                    Contact
                                </button>
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setIsExpanded(!isExpanded);
                                    }}
                                    className={\`w-[40px] h-[40px] rounded-full flex-shrink-0 flex items-center justify-center hover:bg-white/50 transition-colors \${isExpanded ? 'bg-white/50 text-[#0A0A0A]' : 'text-gray-500'}\`}
                                >
                                    <ChevronDown size={16} className={\`transition-transform duration-200 \${isExpanded ? "rotate-180" : ""}\`} />
                                </button>
                            </div>
                        </div>`;
code = code.replace(oldRight, newRight);
const oldMap = `{currentData.map(freelancer => (
                                    <FreelancerCard key={freelancer.id} freelancer={freelancer} />`;
const newMap = `{currentData.map((freelancer, index) => (
                                    <FreelancerCard key={freelancer.id} freelancer={freelancer} index={index} />`;
code = code.replace(oldMap, newMap);
const oldEnd = `</AnimatePresence>
            </div>
        </div>`;
const newEnd = `</AnimatePresence>
            </div>
        </motion.div>`;
code = code.replace(oldEnd, newEnd);
const oldRoot = `<div className="min-h-[100svh] bg-[#F4F4F0] text-[#0A0A0A] font-sans">`;
const newRoot = `<div className="min-h-[100svh] bg-[#FBFCFF] text-[#0A0A0A] font-sans relative overflow-hidden">
            {/* Animated Blobs Background System */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-rose-500/10 blur-[120px] rounded-full"></div>
                <div className="absolute top-[20%] right-[-10%] w-[40%] h-[40%] bg-indigo-500/10 blur-[120px] rounded-full"></div>
                <div className="absolute bottom-[-10%] left-[20%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full"></div>
                <div className="absolute top-[40%] left-[60%] w-[30%] h-[30%] bg-purple-500/10 blur-[120px] rounded-full"></div>
            </div>`;
code = code.replace(oldRoot, newRoot);
const oldHeader = `bg-[#F4F4F0]/80`;
const newHeader = `bg-[#FBFCFF]/60`;
code = code.replace(oldHeader, newHeader);
const oldFooter = `bg-[#F4F4F0]`;
const newFooter = `bg-transparent`;
code = code.replace(oldFooter, newFooter);
fs.writeFileSync('d:\\freelance\\components\\LandingPage.tsx', code);
console.log('Successfully completed replacements');
