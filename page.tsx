'use client';

import React, { useState, useEffect } from 'react';
import { 
  Moon, 
  Sun, 
  Mail, 
  Phone, 
  MapPin, 
  Briefcase, 
  GraduationCap, 
  Award, 
  ExternalLink, 
  Send, 
  Check, 
  Copy, 
  ArrowUpRight,
  Sparkles,
  UserCheck
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- DATA UTAMA DARI CV (100% AKURAT KANONIKAL) ---
const PORTFOLIO_DATA = {
  name: "DELVYN VEDERICK",
  field: "Manajemen Bisnis",
  age: 17,
  profileText: "Saya berumur 17 tahun, memiliki ketertarikan besar pada bidang bisnis dan manajemen. Memiliki semangat untuk mempelajari hal baru, mencoba berbagai kesempatan, serta mengembangkan keterampilan profesional. Memiliki keterampilan komunikasi dan kerja sama tim, serta pengetahuan dasar Microsoft Office.",
  contact: {
    phone: "0851-4157-1820",
    phoneFormatted: "6285141571820",
    email: "dvederick@gmail.com",
    address: "Taman Palem Lestari Blok E6/109",
    mapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.974530064972!2d106.7262141758682!3d-6.134098993852684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6a1215b2e541ad%3A0xb3e64883d6a9bbef!2sTaman%20Palem%20Lestari%20Blok%20E6!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
  },
  education: [
    {
      period: "2024 - 2027",
      institution: "SMA Kasih Kemuliaan",
      major: "Jurusan IPS"
    }
  ],
  experience: [
    {
      role: "Magang (Internship)",
      company: "Kungfu Live Seafood",
      period: "Pengalaman Kerja",
      description: "Menjalani program magang di industri kuliner/seafood, berfokus pada operasional tim, layanan pelanggan, serta kemampuan beradaptasi di lingkungan kerja yang dinamis."
    }
  ],
  skills: [
    { name: "Microsoft Office", level: "Dasar / Operasional" },
    { name: "Komunikasi", level: "Interpersonal & Profesional" },
    { name: "Kemampuan Beradaptasi", level: "Tinggi" },
    { name: "Kerja Sama Tim", level: "Kolaboratif" }
  ]
};

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(true);
  const [copied, setCopied] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [cursorHovered, setCursorHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const copyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`${darkMode ? 'bg-zinc-950 text-zinc-100' : 'bg-zinc-50 text-zinc-900'} transition-colors duration-500 min-h-screen font-sans selection:bg-amber-500 selection:text-black relative overflow-x-hidden`}>
      
      {/* Import Google Fonts Premium secara langsung */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap');
        
        body {
          font-family: 'Plus Jakarta Sans', sans-serif;
        }
        h1, h2, h3, h4, .font-heading {
          font-family: 'Outfit', sans-serif;
        }
      `}</style>

      {/* Custom Floating Cursor (Hanya Muncul di Desktop) */}
      <motion.div 
        className="hidden md:block fixed top-0 left-0 w-6 h-6 rounded-full border-2 border-amber-500/80 pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePos.x - 12,
          y: mousePos.y - 12,
          scale: cursorHovered ? 2 : 1,
          backgroundColor: cursorHovered ? 'rgba(245, 158, 11, 0.3)' : 'transparent'
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 28, mass: 0.1 }}
      />

      {/* Background Subtle Gradient Effects */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className={`absolute -top-40 -left-40 w-96 h-96 rounded-full blur-[120px] opacity-20 ${darkMode ? 'bg-amber-500' : 'bg-amber-400'}`} />
        <div className={`absolute top-1/2 -right-40 w-96 h-96 rounded-full blur-[120px] opacity-20 ${darkMode ? 'bg-blue-600' : 'bg-blue-300'}`} />
      </div>

      {/* STICKY NAVBAR */}
      <nav className={`sticky top-0 z-40 backdrop-blur-md border-b ${darkMode ? 'bg-zinc-950/80 border-zinc-800/80' : 'bg-zinc-50/80 border-zinc-200/80'} transition-colors duration-300`}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <motion.a 
            href="#" 
            className="text-xl font-extrabold tracking-tight font-heading flex items-center gap-2"
            whileHover={{ scale: 1.02 }}
            onMouseEnter={() => setCursorHovered(true)}
            onMouseLeave={() => setCursorHovered(false)}
          >
            <span className="bg-gradient-to-r from-amber-500 to-amber-200 bg-clip-text text-transparent">
              {PORTFOLIO_DATA.name}
            </span>
          </motion.a>

          {/* Menu Items */}
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium tracking-wide">
            <a href="#about" className="hover:text-amber-500 transition-colors">Tentang</a>
            <a href="#experience" className="hover:text-amber-500 transition-colors">Pengalaman</a>
            <a href="#skills" className="hover:text-amber-500 transition-colors">Keahlian</a>
            <a href="#education" className="hover:text-amber-500 transition-colors">Pendidikan</a>
            <a href="#contact" className="hover:text-amber-500 transition-colors">Kontak</a>
          </div>

          <div className="flex items-center gap-4">
            {/* Dark Mode Toggle */}
            <motion.button
              onClick={toggleDarkMode}
              className={`p-2.5 rounded-full border ${darkMode ? 'bg-zinc-900 border-zinc-800 text-amber-400' : 'bg-white border-zinc-200 text-zinc-800'} shadow-sm`}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </motion.button>

            <a 
              href={`https://wa.me/${PORTFOLIO_DATA.contact.phoneFormatted}`}
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-semibold px-4 py-2 rounded-full text-xs tracking-wider uppercase shadow-md transition-all"
            >
              Hubungi WhatsApp
            </a>
          </div>
        </div>
      </nav>

      {/* HERO SECTION (ULTRA CLEAN & CENTERED) */}
      <section className="relative z-10 min-h-[85vh] flex items-center justify-center py
