import React from "react";
import { GraduationCap, ArrowRight } from "lucide-react";
import { useLang } from "@/context/LanguageContext";

const t = {
  en: {
    badge: "Admissions Open",
    heading: "Admission Free",
    desc: "Registration and Admission is going on for",
    classes: "Play to Class X",
    pattern: "Pattern: C.B.S.E. Curriculum",
    medium: "Medium: English",
    btn: "Register Now",
    call: "Call: 9369995136 / 9807198393",
    rte: "RTE Registration No: 22012782025127124235",
  },
  hi: {
    badge: "प्रवेश खुला है",
    heading: "प्रवेश निःशुल्क",
    desc: "पंजीकरण और प्रवेश जारी है",
    classes: "प्ले से कक्षा X",
    pattern: "पाठ्यक्रम: सी.बी.एस.ई.",
    medium: "माध्यम: अंग्रेजी",
    btn: "अभी पंजीकरण करें",
    call: "कॉल करें: 9369995136 / 9807198393",
    rte: "RTE Registration No: 22012782025127124235",
  },
};

export default function AdmissionCard() {
  const { lang } = useLang();
  const tx = t[lang];

  return (
    <div className="relative">
      <div className="absolute -inset-1 bg-accent/20 rounded-2xl blur-xl" />
      <div className="relative bg-white/95 backdrop-blur-xl border border-white/30 rounded-2xl p-8 text-center">
        <div className="inline-flex items-center gap-2 bg-accent/20 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-6" style={{ color: "#525fe1" }}>
          <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: "#525fe1" }} />
          {tx.badge}
        </div>

        <GraduationCap className="w-12 h-12 mx-auto mb-4" style={{ color: "#525fe1" }} />

        <h3 className="font-serif text-2xl font-bold mb-2" style={{ color: "#0b104a" }}>{tx.heading}</h3>
        <p className="text-sm leading-relaxed mb-6" style={{ color: "#4a5355" }}>
          {tx.desc} <br />
          <span className="text-sm font-semibold" style={{ color: "#0b104a" }}>{tx.classes}</span>
        </p>

        <div className="h-px mb-6" style={{ backgroundColor: "#0b104a20" }} />

        <div className="space-y-3 text-sm mb-6" style={{ color: "#4a5355" }}>
          <p>{tx.pattern}</p>
          <p>{tx.medium}</p>
        </div>

        <a href="tel:9369995136" className="block">
          <button className="w-full py-3.5 rounded-full font-medium text-sm flex items-center justify-center gap-2 transition-all text-white hover:opacity-90" style={{ backgroundColor: "#525fe1" }}>
            {tx.btn}
            <ArrowRight className="w-4 h-4" />
          </button>
        </a>

        <p className="text-xs mt-4" style={{ color: "#4a5355" }}>{tx.call}</p>
        <p className="text-xs mt-2 font-medium" style={{ color: "#525fe1" }}>{tx.rte}</p>
      </div>
    </div>
  );
}
