import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Baby, ArrowRight, X, Clock, Shield, Heart, Phone } from "lucide-react";
import { useLang } from "@/context/LanguageContext";

const t = {
  en: {
    heading: "Day Care Facility Available",
    desc: "A safe, nurturing space for your child while you focus on work.",
    btn: "Learn More",
    modal: {
      title: "Day Care Facility",
      subtitle: "Safe & Nurturing Care for Your Child",
      points: [
        { icon: Clock, text: "Available from 8:00 AM to 5:00 PM, Monday to Saturday" },
        { icon: Shield, text: "CCTV monitored, fully secure environment for toddlers" },
        { icon: Baby, text: "Trained and caring staff dedicated to child development" },
        { icon: Heart, text: "Nutritious meals, play activities & learning sessions included" },
        { icon: Phone, text: "Parents notified instantly in case of any concern" },
      ],
      call: "Call to Enroll: 9369995136",
      close: "Close",
    },
  },
  hi: {
    heading: "डे केयर सुविधा उपलब्ध",
    desc: "आपके काम पर ध्यान केंद्रित करते समय आपके बच्चे के लिए एक सुरक्षित, पोषणकारी स्थान।",
    btn: "अधिक जानें",
    modal: {
      title: "डे केयर सुविधा",
      subtitle: "आपके बच्चे के लिए सुरक्षित देखभाल",
      points: [
        { icon: Clock, text: "सोमवार से शनिवार, सुबह 8:00 से शाम 5:00 बजे तक उपलब्ध" },
        { icon: Shield, text: "सीसीटीवी निगरानी, पूरी तरह सुरक्षित वातावरण" },
        { icon: Baby, text: "प्रशिक्षित और देखभाल करने वाला स्टाफ" },
        { icon: Heart, text: "पौष्टिक भोजन, खेल गतिविधियाँ और शिक्षण सत्र शामिल" },
        { icon: Phone, text: "किसी भी चिंता की स्थिति में माता-पिता को तुरंत सूचित किया जाता है" },
      ],
      call: "नामांकन के लिए कॉल करें: 9369995136",
      close: "बंद करें",
    },
  },
};

export default function DayCareStrip() {
  const { lang } = useLang();
  const tx = t[lang];
  const [open, setOpen] = useState(false);

  return (
    <>
    <section className="bg-accent text-accent-foreground py-10 sm:py-12 lg:py-16 xl:py-20 relative overflow-hidden">
      <div className="absolute -right-20 -top-20 w-60 h-60 border border-accent-foreground/10 rounded-full" />
      <div className="absolute -left-10 -bottom-10 w-40 h-40 border border-accent-foreground/10 rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8"
        >
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 text-center sm:text-left">
            <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-2xl bg-accent-foreground/10 flex items-center justify-center shrink-0">
              <Baby className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
            </div>
            <div>
              <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl font-bold mb-1">{tx.heading}</h3>
              <p className="text-accent-foreground/80 text-xs sm:text-sm lg:text-base">{tx.desc}</p>
            </div>
          </div>
          <button
            onClick={() => setOpen(true)}
            className="w-full sm:w-auto bg-accent-foreground text-accent hover:bg-accent-foreground/90 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full font-medium text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shrink-0"
          >
            {tx.btn}
            <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
          </button>
        </motion.div>
      </div>
    </section>

    {/* Modal */}
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
          style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
          onClick={() => setOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            className="bg-white rounded-2xl p-6 sm:p-8 max-w-md w-full shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: "#B5883B20" }}>
                  <Baby className="w-5 h-5" style={{ color: "#B5883B" }} />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-lg" style={{ color: "#0b104a" }}>{tx.modal.title}</h3>
                  <p className="text-xs" style={{ color: "#4a5355" }}>{tx.modal.subtitle}</p>
                </div>
              </div>
              <button onClick={() => setOpen(false)} className="p-1 rounded-full hover:bg-gray-100">
                <X className="w-5 h-5" style={{ color: "#0b104a" }} />
              </button>
            </div>

            <div className="space-y-3 mb-6">
              {tx.modal.points.map((point, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg shrink-0 flex items-center justify-center mt-0.5" style={{ backgroundColor: "#B5883B15" }}>
                    <point.icon className="w-4 h-4" style={{ color: "#B5883B" }} />
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: "#4a5355" }}>{point.text}</p>
                </div>
              ))}
            </div>

            <a href="tel:9369995136" className="block">
              <button className="w-full py-3 rounded-full font-medium text-sm text-white transition-all hover:opacity-90" style={{ backgroundColor: "#B5883B" }}>
                {tx.modal.call}
              </button>
            </a>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
    </>
  );
}
