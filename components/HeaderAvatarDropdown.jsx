"use client";

import React, { useState, useRef, useEffect } from "react";
import { Globe, Check, ChevronLeft } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export default function HeaderAvatarDropdown({
    avatarSrc = "https://i.pravatar.cc/150?img=11",
    isOnline = true
}) {
    const [isOpen, setIsOpen] = useState(false);
    const [showCurrencyPanel, setShowCurrencyPanel] = useState(false);
    const [currency, setCurrency] = useState("₹ INR");
    const dropdownRef = useRef(null);

    // Close on outside click
    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
                setShowCurrencyPanel(false); // reset panel state too
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
        if (isOpen) {
            setShowCurrencyPanel(false);
        }
    };

    const handleCurrencySelect = (val) => {
        setCurrency(val);
        setShowCurrencyPanel(false);
        setIsOpen(false);
    };

    return (
        <div className="relative z-[100]" ref={dropdownRef}>
            {/* Avatar Button */}
            <div
                className="relative group cursor-pointer ml-2"
                onClick={toggleDropdown}
            >
                <img
                    src={avatarSrc}
                    alt="User"
                    className={`w-10 h-10 rounded-full border-2 transition-colors shadow-sm object-cover ${isOpen ? 'border-indigo-600' : 'border-transparent group-hover:border-indigo-600'}`}
                />
                <div className={`absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full border-[2.5px] border-[#F4F4F0] transition-colors duration-300 shadow-sm ${isOnline ? 'bg-emerald-500' : 'bg-gray-400'}`}></div>
            </div>

            {/* Dropdown Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.15, ease: "easeOut" }}
                        className="absolute right-0 top-[calc(100%+12px)] w-[280px] bg-white rounded-[16px] border border-black/5 shadow-[0_8px_30px_rgb(0,0,0,0.08)] overflow-visible font-sans"
                    >
                        {/* Top Arrow Pointer */}
                        <div className="absolute -top-[6px] right-4 w-3 h-3 bg-white border-t border-l border-black/5 rotate-45 rounded-tl-sm pointer-events-none z-10"></div>

                        <div className="relative overflow-hidden rounded-[16px]">
                            {/* PRIMARY PANEL */}
                            <motion.div
                                initial={false}
                                animate={{ x: showCurrencyPanel ? "-100%" : "0%" }}
                                transition={{ type: "tween", ease: "easeInOut", duration: 0.25 }}
                                className="w-full flex-shrink-0 relative bg-white py-2"
                            >
                                {/* SECTION 1 */}
                                <div className="px-2 pb-2 border-b border-black/5">
                                    <DropdownItem label="Profile" />
                                    <DropdownItem label="Post a project brief" />
                                    <DropdownItem label="Your briefs" />
                                </div>

                                {/* SECTION 2 */}
                                <div className="p-2 border-b border-black/5">
                                    <DropdownItem label="Become a Seller" />
                                    <DropdownItem label="Account settings" />
                                    <DropdownItem label="Billing and payments" />
                                </div>

                                {/* SECTION 3 */}
                                <div className="p-2 border-b border-black/5">
                                    <DropdownItem
                                        label="English"
                                        icon={<Globe size={16} className="text-gray-400" />}
                                    />
                                    <DropdownItem
                                        label={currency}
                                        onClick={() => setShowCurrencyPanel(true)}
                                    />
                                    <DropdownItem label="Help & support" />
                                </div>

                                {/* SECTION 4 */}
                                <div className="p-2">
                                    <DropdownItem label="Sign out" />
                                </div>
                            </motion.div>

                            {/* SECONDARY PANEL (Currency Selector) */}
                            <motion.div
                                initial={false}
                                animate={{ x: showCurrencyPanel ? "0%" : "100%" }}
                                transition={{ type: "tween", ease: "easeInOut", duration: 0.25 }}
                                className="absolute inset-0 w-full bg-white flex flex-col py-2"
                            >
                                {/* Header */}
                                <div className="flex items-center gap-3 px-4 py-3 border-b border-black/5">
                                    <button
                                        onClick={() => setShowCurrencyPanel(false)}
                                        className="w-6 h-6 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-500 transition-colors"
                                    >
                                        <ChevronLeft size={16} />
                                    </button>
                                    <span className="font-bold text-[14px] text-[#0A0A0A]">Select Currency</span>
                                </div>

                                {/* Options */}
                                <div className="p-2 overflow-y-auto max-h-[300px]">
                                    <CurrencyOption
                                        label="Indian Rupee"
                                        symbol="₹ INR"
                                        isSelected={currency === "₹ INR"}
                                        onSelect={() => handleCurrencySelect("₹ INR")}
                                    />
                                    <CurrencyOption
                                        label="US Dollar"
                                        symbol="$ USD"
                                        isSelected={currency === "$ USD"}
                                        onSelect={() => handleCurrencySelect("$ USD")}
                                    />
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

// Subcomponents for cleaner code
function DropdownItem({ label, icon, onClick, className = "text-gray-600 hover:text-[#0A0A0A]" }) {
    return (
        <button
            onClick={onClick}
            className={`w-full flex items-center justify-between px-4 py-2.5 rounded-lg hover:bg-gray-50 transition-colors text-left font-semibold text-[14px] ${className}`}
        >
            <span>{label}</span>
            {icon && <span>{icon}</span>}
        </button>
    );
}

function CurrencyOption({ label, symbol, isSelected, onSelect }) {
    return (
        <button
            onClick={onSelect}
            className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-colors text-left ${isSelected ? 'bg-indigo-50/50' : 'hover:bg-gray-50'}`}
        >
            <div className="flex items-center gap-3">
                <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${isSelected ? 'border-indigo-600' : 'border-gray-300'}`}>
                    {isSelected && <div className="w-2 h-2 rounded-full bg-indigo-600" />}
                </div>
                <div className="flex flex-col">
                    <span className={`text-[14px] font-bold ${isSelected ? 'text-[#0A0A0A]' : 'text-gray-600'}`}>{symbol}</span>
                    <span className="text-[12px] font-medium text-gray-400">{label}</span>
                </div>
            </div>
            {isSelected && <Check size={16} className="text-indigo-600" />}
        </button>
    );
}
