import React from "react";
import { Heart, MapPin, Phone, Mail, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import schoolLogo from "@/assets/S.S Central School logo.jpeg";

const t = {
  en: {
    tagline: "An English Medium School",
    desc: "A C.B.S.E. curriculum school offering classes from Play to Class X, committed to connecting modern education with timeless values.",
    quickLinks: "Quick Links",
    links: [
      { label: "Home", href: "#home" },
      { label: "About Us", href: "#about" },
      { label: "Features", href: "#features" },
      { label: "Leadership", href: "#leadership" },
      { label: "Contact", href: "#contact" },
    ],
    classes: "Classes Offered",
    classesList: ["Play Group", "Nursery & KG", "Class I – V", "Class VI – VIII", "Class IX – X"],
    contactTitle: "Contact Info",
    address: "Neelanchal, Ram Krishna Nagar, West of Town High School, Anderkila, Hajipur (Vaishali)",
    phone1: "9369995136",
    phone2: "9807198393",
    whatsapp: "Chat on WhatsApp",
    email: "sscentralhajipur@gmail.com",
    madeWith: "Made with",
    forEdu: "for education",
    rights: "All rights reserved.",
  },
  hi: {
    tagline: "एक अंग्रेजी माध्यम विद्यालय",
    desc: "एक सी.बी.एस.ई. पाठ्यक्रम विद्यालय जो प्ले से कक्षा X तक कक्षाएँ प्रदान करता है।",
    quickLinks: "त्वरित लिंक",
    links: [
      { label: "होम", href: "#home" },
      { label: "हमारे बारे में", href: "#about" },
      { label: "सुविधाएँ", href: "#features" },
      { label: "नेतृत्व", href: "#leadership" },
      { label: "संपर्क", href: "#contact" },
    ],
    classes: "कक्षाएँ",
    classesList: ["प्ले ग्रुप", "नर्सरी & KG", "कक्षा I – V", "कक्षा VI – VIII", "कक्षा IX – X"],
    contactTitle: "संपर्क जानकारी",
    address: "नीलांचल, राम कृष्ण नगर, टाउन हाई स्कूल के पश्चिम, अंदरकिला, हाजीपुर (वैशाली)",
    phone1: "9369995136",
    phone2: "9807198393",
    whatsapp: "WhatsApp पर चैट करें",
    email: "sscentralhajipur@gmail.com",
    madeWith: "बनाया गया",
    forEdu: "शिक्षा के लिए",
    rights: "सर्वाधिकार सुरक्षित।",
  },
};

export default function Footer() {
  const { lang } = useLang();
  const tx = t[lang];

  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer style={{ backgroundColor: "#f5f5fd" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">

          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img src={schoolLogo} alt="Logo" className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover" />
              <div>
                <p className="font-serif font-bold text-sm sm:text-base leading-tight" style={{ color: "#0b104a" }}>S.S. Central School</p>
                <p className="text-[9px] sm:text-[10px] tracking-widest uppercase" style={{ color: "#0b104a80" }}>{tx.tagline}</p>
              </div>
            </div>
            <p className="text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6" style={{ color: "#0b104a99" }}>{tx.desc}</p>
            <div className="flex items-center gap-3">
              {[
                { icon: <Facebook className="w-4 h-4" />, href: "https://www.facebook.com/sscentralhajipur" },
                { icon: <Twitter className="w-4 h-4" />, href: "#" },
                { icon: <Instagram className="w-4 h-4" />, href: "https://www.instagram.com/sscentralhajipur?utm_source=qr&igsh=bGV5cG16cmFkdHdx" },
                { icon: <Linkedin className="w-4 h-4" />, href: "#" },
              ].map((s, i) => (
                <a key={i} href={s.href} className="w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center transition-all hover:opacity-80" style={{ backgroundColor: "#f5f5fd", color: "black", border: "1px solid black" }}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-serif font-bold text-sm sm:text-base mb-4 sm:mb-5 pb-2 border-b" style={{ color: "#0b104a", borderColor: "#525fe1" }}>{tx.quickLinks}</h4>
            <ul className="space-y-2">
              {tx.links.map((link) => (
                <li key={link.href}>
                  <button onClick={() => scrollTo(link.href)} className="text-xs sm:text-sm transition-colors hover:opacity-60" style={{ color: "#0b104a" }}>
                    › {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-bold text-sm sm:text-base mb-4 sm:mb-5 pb-2 border-b" style={{ color: "#0b104a", borderColor: "#525fe1" }}>{tx.classes}</h4>
            <ul className="space-y-2">
              {tx.classesList.map((c, i) => (
                <li key={i} className="text-xs sm:text-sm" style={{ color: "#0b104a" }}>› {c}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-bold text-sm sm:text-base mb-4 sm:mb-5 pb-2 border-b" style={{ color: "#0b104a", borderColor: "#525fe1" }}>{tx.contactTitle}</h4>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex gap-3">
                <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mt-1 shrink-0" style={{ color: "#525fe1" }} />
                <p className="text-xs sm:text-sm leading-relaxed" style={{ color: "#0b104a" }}>{tx.address}</p>
              </div>
              <div className="flex gap-3 items-center">
                <Phone className="w-3 h-3 sm:w-4 sm:h-4 shrink-0" style={{ color: "#525fe1" }} />
                <div className="text-xs sm:text-sm">
                  <a href={`tel:${tx.phone1}`} className="block transition-colors hover:opacity-60" style={{ color: "#0b104a" }}>{tx.phone1}</a>
                  <a href={`tel:${tx.phone2}`} className="block transition-colors hover:opacity-60" style={{ color: "#0b104a" }}>{tx.phone2}</a>
                </div>
              </div>
              <div className="flex gap-3 items-center">
                <Mail className="w-3 h-3 sm:w-4 sm:h-4 shrink-0" style={{ color: "#525fe1" }} />
                <a href={`mailto:${tx.email}`} className="text-xs sm:text-sm transition-colors hover:opacity-60 break-all" style={{ color: "#0b104a" }}>{tx.email}</a>
              </div>
            </div>
          </div>

        </div>

        <div className="mt-8 sm:mt-12 pt-4 sm:pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4" style={{ borderTop: "1px solid #0b104a20" }}>
          <p className="text-[10px] sm:text-xs text-center sm:text-left" style={{ color: "#0b104a80" }}>© {new Date().getFullYear()} S.S. Central School. {tx.rights}</p>
          <p className="text-[10px] sm:text-xs flex items-center gap-1" style={{ color: "#0b104a80" }}>
            {tx.madeWith} <Heart className="w-3 h-3" style={{ color: "#525fe1" }} /> {tx.forEdu}
          </p>
        </div>
      </div>
    </footer>
  );
}
