import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { useLang } from "@/context/LanguageContext";

const leaders = {
  en: [
    {
      name: "Shyam Kishore Thakur",
      role: "Director",
      credentials: "M.Ed, LLB",
      quote: "Education is not just about textbooks — it is about building character, nurturing curiosity, and instilling values that last a lifetime. At S.S. Central School, we are committed to shaping responsible citizens of tomorrow.",
    },
    {
      name: "Er. Shalini Bhardwaj",
      role: "Principal",
      credentials: "Engineer & Educator",
      quote: "Our mission is to create a learning ecosystem where technology and tradition coexist, where every child discovers their unique potential and grows into a confident, compassionate individual.",
    },
  ],
  hi: [
    {
      name: "श्याम किशोर ठाकुर",
      role: "निदेशक",
      credentials: "एम.एड, एलएलबी",
      quote: "शिक्षा केवल पाठ्यपुस्तकों के बारे में नहीं है — यह चरित्र निर्माण, जिज्ञासा को पोषित करने और जीवन भर चलने वाले मूल्यों को स्थापित करने के बारे में है। एस.एस. सेंट्रल स्कूल में, हम कल के जिम्मेदार नागरिकों को आकार देने के लिए प्रतिबद्ध हैं।",
    },
    {
      name: "इं. शालिनी भारद्वाज",
      role: "प्रधानाचार्य",
      credentials: "इंजीनियर एवं शिक्षाविद",
      quote: "हमारा मिशन एक एसा शिक्षण पारिस्थितिकी तंत्र बनाना है जहाँ प्रौद्योगिकी और परंपरा सह-अस्तित्व में हों, जहाँ हर बच्चा अपनी अनूठी क्षमता की खोज करे और एक आत्मविश्वासी, दयालु व्यक्ति के रूप में विकसित हो।",
    },
  ],
};

const t = {
  en: { tag: "Our Leadership", heading1: "Guided by", heading2: "Vision & Values" },
  hi: { tag: "हमारा नेतृत्व", heading1: "मार्गदर्शित", heading2: "दृष्टि और मूल्यों द्वारा" },
};

export default function LeadershipSection() {
  const { lang } = useLang();
  const tx = t[lang];

  return (
    <section id="leadership" className="py-8 sm:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14 lg:mb-20">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-accent font-medium tracking-[0.2em] sm:tracking-[0.3em] uppercase text-[10px] sm:text-xs mb-3 sm:mb-4">{tx.tag}</p>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground leading-tight">
              {tx.heading1} <span className="italic text-accent">{tx.heading2}</span>
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {leaders[lang].map((leader, i) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="relative bg-card border border-border rounded-2xl p-6 sm:p-8 lg:p-10"
            >
              <div className="absolute top-0 left-0 w-16 h-16 sm:w-20 sm:h-20 border-t-2 border-l-2 border-accent/30 rounded-tl-2xl" />
              <div className="relative">
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                  <span className="bg-accent/10 text-accent px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-semibold tracking-wider uppercase">
                    {leader.role}
                  </span>
                  <span className="text-muted-foreground text-[10px] sm:text-xs tracking-wide">{leader.credentials}</span>
                </div>
                <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-4 sm:mb-6">{leader.name}</h3>
                <div className="relative pl-4 sm:pl-6 border-l-2 border-accent/30">
                  <Quote className="absolute -left-3 -top-1 w-5 h-5 sm:w-6 sm:h-6 text-accent/30 bg-card" />
                  <p className="text-muted-foreground italic leading-relaxed text-sm sm:text-base">{leader.quote}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
