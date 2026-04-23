import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useLang } from "@/context/LanguageContext";

const contactItems = {
  en: [
    { icon: Phone, label: "Call Us", lines: ["06224-455326", "9369995136", "9807198393"], href: "tel:9369995136" },
    { icon: Mail, label: "Email", lines: ["sscentralhajipur@gmail.com"], href: "mailto:sscentralhajipur@gmail.com" },
    { icon: MapPin, label: "Visit Us", lines: ["Neelanchal, Ram Krishna Nagar, West of Town High School, Anderkila, Hajipur (Vaishali)"], href: "https://maps.app.goo.gl/3cWEVWABjd9w9cWE6" },
    { icon: Clock, label: "School Hours", lines: ["Mon – Sat: 8:00 AM – 2:00 PM", "Office: 8:00 AM – 4:00 PM"] },
  ],
  hi: [
    { icon: Phone, label: "कॉल करें", lines: ["06224-455326", "9369995136", "9807198393"], href: "tel:9369995136" },
    { icon: Mail, label: "ईमेल", lines: ["sscentralhajipur@gmail.com"], href: "mailto:sscentralhajipur@gmail.com" },
    { icon: MapPin, label: "हमसे मिलें", lines: ["नीलांचल, राम कृष्ण नगर, टाउन हाई स्कूल के पश्चिम, अंदरकिला, हाजीपुर (वैशाली)"], href: "https://maps.app.goo.gl/3cWEVWABjd9w9cWE6" },
    { icon: Clock, label: "विद्यालय समय", lines: ["सोम – शनि: सुबह 8:00 – दोपहर 2:00", "कार्यालय: सुबह 8:00 – शाम 4:00"] },
  ],
};

const t = {
  en: { tag: "Get In Touch", heading1: "We'd Love to", heading2: "Hear From You", desc: "Visit our campus or reach out to know more about admissions and programs." },
  hi: { tag: "संपर्क करें", heading1: "हमें खुशी होगी", heading2: "आपसे सुनकर", desc: "प्रवेश और कार्यक्रमों के बारे में अधिक जानने के लिए हमारे परिसर में आएँ या संपर्क करें।" },
};

export default function ContactSection() {
  const { lang } = useLang();
  const key = /** @type {"en" | "hi"} */ (lang);
  const tx = t[key];

  return (
    <section id="contact" className="py-8 sm:py-12 lg:py-16 bg-secondary/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12 lg:mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-accent font-medium tracking-[0.2em] sm:tracking-[0.3em] uppercase text-[10px] sm:text-xs mb-3 sm:mb-4">{tx.tag}</p>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground leading-tight mb-3 sm:mb-4">
              {tx.heading1} <span className="italic text-accent">{tx.heading2}</span>
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base lg:text-lg leading-relaxed">{tx.desc}</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {contactItems[key].map((item, i) => (
            <motion.div key={item.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <a href={item.href || "#"} className="flex items-start gap-3 sm:gap-4 bg-card border border-border rounded-xl p-3 sm:p-4 hover:border-accent/30 hover:shadow-lg transition-all duration-300 h-full">
                <div className="w-8 h-8 sm:w-9 sm:h-9 shrink-0 rounded-lg bg-accent/10 flex items-center justify-center">
                  <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                </div>
                <div>
                  <p className="font-serif font-semibold text-foreground text-sm sm:text-base mb-1">{item.label}</p>
                  {item.lines.map((line, j) => (
                    <p key={j} className="text-muted-foreground text-xs sm:text-sm leading-relaxed">{line}</p>
                  ))}
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
