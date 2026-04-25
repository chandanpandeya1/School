import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, GraduationCap, ChevronLeft, ChevronRight } from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import ss7 from "@/assets/ss7.jpg";
import ss1 from "@/assets/ss1.jpeg";
import img2 from "@/assets/Facebook_creation_EE641F08-D1F1-43C2-97F8-50275CF99063.jpeg";
import img3 from "@/assets/IMG-20260424-WA0002.jpg.jpeg";
import img4 from "@/assets/IMG-20260422-WA0038.jpg.jpeg";
import slide1 from "@/assets/slide1.jpg";
import slide2 from "@/assets/slide2.jpg";
import slide3 from "@/assets/slide3.jpg";

const SLIDES = [ss1, img2, img3, img4, slide1, slide2, slide3];

const t = {
  en: {
    tag: "Play to Class X",
    heading1: "Where Modern Education Meets",
    heading2: "Timeless Values",
    desc: "S.S. Central School nurtures young minds through a perfect blend of academic excellence, modern infrastructure, and a deeply rooted value system — preparing your child for a limitless future.",
    contact: "Contact Us",
    explore: "Explore Campus",
    location: "Location",
  },
  hi: {
    tag: "प्ले से कक्षा X",
    heading1: "जहाँ आधुनिक शिक्षा मिलती है",
    heading2: "शाश्वत मूल्यों से",
    desc: "एस.एस. सेंट्रल स्कूल युवा मस्तिष्कों को शैक्षणिक उत्कृष्टता, आधुनिक बुनियादी ढाँचे और गहरी जड़ों वाली मूल्य प्रणाली के सही मिश्रण से पोषित करता है।",
    contact: "संपर्क करें",
    explore: "परिसर देखें",
    location: "स्थान",
  },
};

export default function HeroSection() {
  const { lang } = useLang();
  const tx = t[lang];
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent(p => (p + 1) % SLIDES.length), []);
  const prev = () => setCurrent(p => (p - 1 + SLIDES.length) % SLIDES.length);

  useEffect(() => {
    const timer = setInterval(next, 2000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-20 sm:pt-24"
      style={{ backgroundImage: `url(${ss7})`, backgroundSize: "cover", backgroundPosition: "center center", backgroundRepeat: "no-repeat" }}
    >
      <div className="absolute inset-0 bg-white/60" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-2 sm:py-10 lg:py-8 pb-16 sm:pb-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* Left - Text */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <p className="text-accent font-bold uppercase text-lg sm:text-xl lg:text-2xl mb-4 sm:mb-6 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" />
                {tx.tag}
              </p>
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.2] sm:leading-[1.3] mb-4 sm:mb-6" style={{ color: "#525fe1" }}>
                {tx.heading1}{" "}
                <span className="italic" style={{ color: "#0b104a" }}>{tx.heading2}</span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl max-w-xl leading-relaxed mb-6 sm:mb-8" style={{ color: "#4a5355" }}>
                {tx.desc}
              </p>
              <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                <a href="#contact">
                  <button className="hover:opacity-90 text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-full font-medium text-xs sm:text-sm tracking-wide transition-all" style={{ backgroundColor: "rgb(6, 66, 76)" }}>
                    {tx.contact}
                  </button>
                </a>
                <a href="#features">
                  <button className="hover:opacity-90 text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-full font-medium text-xs sm:text-sm tracking-wide transition-all" style={{ backgroundColor: "rgb(6, 66, 76)" }}>
                    {tx.explore}
                  </button>
                </a>
                <a href="https://maps.app.goo.gl/3cWEVWABjd9w9cWE6" target="_blank" rel="noopener noreferrer">
                  <button className="flex items-center gap-2 hover:opacity-90 text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-full font-medium text-xs sm:text-sm tracking-wide transition-all" style={{ backgroundColor: "rgb(6, 66, 76)" }}>
                    <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                    {tx.location}
                  </button>
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right - Image Slider */}
          <div className="lg:col-span-1 flex items-center justify-end mt-2 lg:mt-0 lg:-mr-1">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="relative w-full"
            >
              {/* Slider */}
              <div className="relative rounded-[10px] overflow-hidden shadow-2xl aspect-[3/2]">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={current}
                    src={SLIDES[current]}
                    alt={`School image ${current + 1}`}
                    className="w-full h-full object-cover absolute inset-0"
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -40 }}
                    transition={{ duration: 0.5 }}
                  />
                </AnimatePresence>

                {/* Prev / Next buttons */}
                <button
                  onClick={prev}
                  className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full flex items-center justify-center transition-all hover:scale-110"
                  style={{ backgroundColor: "rgba(255,255,255,0.85)" }}
                >
                  <ChevronLeft className="w-4 h-4" style={{ color: "#0b104a" }} />
                </button>
                <button
                  onClick={next}
                  className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full flex items-center justify-center transition-all hover:scale-110"
                  style={{ backgroundColor: "rgba(255,255,255,0.85)" }}
                >
                  <ChevronRight className="w-4 h-4" style={{ color: "#0b104a" }} />
                </button>

                {/* Dots */}
                <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5 z-10">
                  {SLIDES.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrent(i)}
                      className="rounded-full transition-all"
                      style={{
                        width: i === current ? "20px" : "8px",
                        height: "8px",
                        backgroundColor: i === current ? "#525fe1" : "rgba(255,255,255,0.7)",
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Free Admission badge */}
              <a href="tel:9369995136">
                <div
                  className="absolute -bottom-10 -right-1 rounded-xl px-4 py-3 flex items-center gap-3 cursor-pointer z-10"
                  style={{ background: "white", border: "2px solid #9ca3af", boxShadow: "0 4px 15px rgba(0,0,0,0.15)", transition: "transform 0.3s, box-shadow 0.3s" }}
                  onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px) scale(1.04)"; e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.2)"; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "0 4px 15px rgba(0,0,0,0.15)"; }}
                >
                  <span className="text-3xl">🎓</span>
                  <div className="text-left">
                    <h2 className="font-bold text-lg leading-tight" style={{ color: "#0b104a" }}>Free</h2>
                    <p className="text-xs font-semibold" style={{ color: "#525fe1" }}>Admission Open</p>
                  </div>
                </div>
              </a>
            </motion.div>
          </div>

        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
    </section>
  );
}
