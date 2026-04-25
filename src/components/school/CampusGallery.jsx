import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "@/context/LanguageContext";

import img1 from "@/assets/Facebook_creation_C411C59D-1404-42AD-9DE9-24DDE5B92087.jpeg";
import img2 from "@/assets/Facebook_creation_EB8E2096-4281-4E82-B27B-C81D38425268.jpeg";
import img3 from "@/assets/Facebook_creation_EE641F08-D1F1-43C2-97F8-50275CF99063.jpeg";
import img5 from "@/assets/IMG-20260422-WA0039.jpg.jpeg";
import img6 from "@/assets/IMG-20260424-WA0002.jpg.jpeg";
import img7 from "@/assets/IMG20260425095908.jpg.jpeg";
import img8 from "@/assets/IMG20260425095939.jpg.jpeg";
import img13 from "@/assets/IMG20260425100012.jpg.jpeg";
import img14 from "@/assets/IMG20260425100020.jpg.jpeg";
import img16 from "@/assets/IMG20260425100042.jpg.jpeg";
import img18 from "@/assets/IMG20260425100050.jpg.jpeg";
import img19 from "@/assets/InShot_20260418_185859357.jpg.jpeg";
import img20 from "@/assets/InShot_20260423_124229579.jpg.jpeg";
import img21 from "@/assets/1747935587355.jpg.jpeg";

const IMAGES = [img1,img21,img2,img3,img5,img6,img7,img8,img13,img14,img16,img18,img19,img20];

const t = {
  en: { tag: "School Campus", heading1: "Life at", heading2: "S.S. Central School", showMore: "Show More", showLess: "Show Less" },
  hi: { tag: "स्कूल परिसर", heading1: "जीवन", heading2: "एस.एस. सेंट्रल स्कूल में", showMore: "और देखें", showLess: "कम करें" },
};

export default function CampusGallery() {
  const { lang } = useLang();
  const tx = t[lang];
  const [showAll, setShowAll] = useState(false);

  const visible = showAll ? IMAGES : IMAGES.slice(0, 6);

  return (
    <section id="gallery" className="py-6 sm:py-8 lg:py-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-accent font-medium tracking-[0.2em] sm:tracking-[0.3em] uppercase text-[10px] sm:text-xs mb-3 sm:mb-4">{tx.tag}</p>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground leading-tight">
              {tx.heading1} <span className="italic text-accent">{tx.heading2}</span>
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3 sm:gap-4">
          <AnimatePresence>
            {visible.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 group"
                style={{ aspectRatio: "390/495" }}
              >
                <img
                  src={img}
                  alt={`Campus ${i + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="text-center mt-8">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-8 py-3 rounded-full font-medium text-sm text-white transition-all hover:opacity-90"
            style={{ backgroundColor: "#B5883B" }}
          >
            {showAll ? tx.showLess : tx.showMore} ({showAll ? "" : `+${IMAGES.length - 6} `}photos)
          </button>
        </div>

      </div>
    </section>
  );
}
