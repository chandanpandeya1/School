import React, { useState, useEffect } from "react";
import schoolLogo from "@/assets/S.S Central School logo.jpeg";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "@/context/LanguageContext";

const NAV_LINKS = {
  en: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Features", href: "#features" },
    { label: "Leadership", href: "#leadership" },
    { label: "Contact", href: "#contact" },
  ],
  hi: [
    { label: "होम", href: "#home" },
    { label: "परिचय", href: "#about" },
    { label: "सुविधाएँ", href: "#features" },
    { label: "नेतृत्व", href: "#leadership" },
    { label: "संपर्क", href: "#contact" },
  ],
};

export default function Navbar() {
  const { lang, setLang } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");
  const links = NAV_LINKS[lang];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href) => {
    setMobileOpen(false);
    setActiveLink(href);
    setTimeout(() => {
      const el = document.querySelector(href);
      if (el) {
        const offset = el.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: offset, behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b border-border ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex items-center gap-2 sm:gap-3">
            <img src={schoolLogo} alt="School Logo" className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full object-cover" />
            <div>
              <p className="font-serif font-bold text-lg sm:text-2xl lg:text-3xl xl:text-4xl leading-tight" style={{ color: "#0b104a" }}>
                S.S. Central School
              </p>
              <p className="text-[10px] sm:text-xs lg:text-sm tracking-widest uppercase" style={{ color: "#0b104a" }}>
                English Medium School (C.B.S.E.)
              </p>
              <p className="text-[9px] sm:text-[11px] lg:text-xs tracking-wide" style={{ color: "#0b104a" }}>
                Reg. No. 22012782025127124235
              </p>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-8">
            {links.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="text-sm font-medium transition-all tracking-wide px-3 py-1.5 rounded-full"
                style={activeLink === link.href ? { backgroundColor: "#06424C", color: "#fff" } : { color: "hsl(var(--muted-foreground))" }}
                onMouseEnter={(e) => {
                  if (activeLink !== link.href) {
                    e.currentTarget.style.backgroundColor = "#06424C";
                    e.currentTarget.style.color = "#fff";
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeLink !== link.href) {
                    e.currentTarget.style.backgroundColor = "";
                    e.currentTarget.style.color = "hsl(var(--muted-foreground))";
                  }
                }}
              >
                {link.label}
              </button>
            ))}
            
            <button
              onClick={() => setLang(lang === "en" ? "hi" : "en")}
              className="text-sm font-semibold transition-all px-3 py-1.5 rounded-full"
              style={activeLink === "lang" ? { backgroundColor: "#06424C", color: "#fff" } : { color: "hsl(var(--muted-foreground))" }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#06424C"; e.currentTarget.style.color = "#fff"; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = ""; e.currentTarget.style.color = "hsl(var(--muted-foreground))"; }}
            >
              {lang === "en" ? "हिंदी" : "EN"}
            </button>
          </div>

          <button
            className="lg:hidden text-foreground p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="px-6 py-6 space-y-4">
              {links.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="block w-full text-left text-base font-medium text-foreground"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => setLang(lang === "en" ? "hi" : "en")}
                className="block text-base font-semibold border-2 rounded-full px-4 py-1.5"
                style={{ borderColor: "#06424C", color: "#06424C" }}
              >
                {lang === "en" ? "हिंदी" : "EN"}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
