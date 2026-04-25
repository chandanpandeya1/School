import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Shield, Award, Heart } from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import ss6 from "@/assets/ss6.jpg";

const t = {
  en: {
    tag: "About Our School",
    heading1: "We Work to Connect Modern Education",
    heading2: "With Values",
    desc: "S.S. Central School is an English Medium school following the C.B.S.E. curriculum, offering classes from Play to Class X. We are committed to providing a nurturing and stimulating environment where students thrive academically, socially, and morally.",
    years: "Active Students",
    values: [
      { icon: BookOpen, title: "Academic Rigor", desc: "C.B.S.E. curriculum with holistic development" },
      { icon: Shield, title: "Safe Campus", desc: "CCTV monitored, secure environment" },
      { icon: Award, title: "Excellence", desc: "Qualified & experienced teaching staff" },
      { icon: Heart, title: "Value System", desc: "Education rooted in timeless values" },
    ],
  },
  hi: {
    tag: "हमारे विद्यालय के बारे में",
    heading1: "हम आधुनिक शिक्षा को जोड़ते हैं",
    heading2: "मूल्यों के साथ",
    desc: "एस.एस. सेंट्रल स्कूल एक अंग्रेजी माध्यम विद्यालय है जो सी.बी.एस.ई. पाठ्यक्रम का अनुसरण करता है और प्ले से कक्षा X तक कक्षाएँ प्रदान करता है। हम एक पोषणकारी और उत्तेजक वातावरण प्रदान करने के लिए प्रतिबद्ध हैं।",
    years: "सक्रिय छात्र",
    values: [
      { icon: BookOpen, title: "शैक्षणिक कठोरता", desc: "समग्र विकास के साथ सी.बी.एस.ई. पाठ्यक्रम" },
      { icon: Shield, title: "सुरक्षित परिसर", desc: "सीसीटीवी निगरानी, सुरक्षित वातावरण" },
      { icon: Award, title: "उत्कृष्टता", desc: "योग्य एवं अनुभवी शिक्षण स्टाफ" },
      { icon: Heart, title: "मूल्य प्रणाली", desc: "शाश्वत मूल्यों में निहित शिक्षा" },
    ],
  },
};

export default function AboutSection() {
  const { lang } = useLang();
  const tx = t[lang];

  return (
    <section id="about" className="py-6 sm:py-8 lg:py-6">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 xl:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="absolute -inset-4 bg-accent/5 rounded-3xl -rotate-2" />
            <img
              src={ss6}
              alt="Aerial view of S.S. Central School campus"
              className="relative rounded-2xl w-full object-cover aspect-[4/3] shadow-xl"
            />
            <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-accent text-accent-foreground px-4 py-3 sm:px-6 sm:py-4 rounded-xl shadow-lg">
              <p className="font-serif text-2xl sm:text-3xl font-bold">300+</p>
              <p className="text-[10px] sm:text-xs tracking-wider uppercase opacity-80">{tx.years}</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <p className="text-accent font-medium tracking-[0.2em] sm:tracking-[0.3em] uppercase text-[10px] sm:text-xs mb-3 sm:mb-4">
              {tx.tag}
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground leading-tight mb-4 sm:mb-6">
              {tx.heading1}{" "}
              <span className="italic text-accent">{tx.heading2}</span>
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8 lg:mb-10 max-w-lg">
              {tx.desc}
            </p>

            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {tx.values.map((item) => (
                <div key={item.title} className="group">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-2 sm:mb-3 group-hover:bg-accent/20 transition-colors">
                    <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                  </div>
                  <h4 className="font-serif font-semibold text-foreground text-xs sm:text-sm mb-1">{item.title}</h4>
                  <p className="text-muted-foreground text-[10px] sm:text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
