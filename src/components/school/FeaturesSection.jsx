import React from "react";
import { motion } from "framer-motion";
import {
  Monitor, Shield, FlaskConical, Camera, Laptop,
  Snowflake, Clock, Bus, BookOpen, Building2,
  HeartPulse, Baby, Leaf, Droplets, Bath,
  GraduationCap, MapPin, Dumbbell, Music
} from "lucide-react";
import FeatureCard from "./FeatureCard";
import { useLang } from "@/context/LanguageContext";

const FEATURES = {
  en: [
    { icon: Monitor, title: "Smart Class Rooms", description: "Interactive digital learning with modern smart boards and audio-visual aids." },
    { icon: Shield, title: "Well Secure Campus", description: "Round-the-clock security with trained personnel ensuring a safe environment." },
    { icon: FlaskConical, title: "Modern Laboratories", description: "State-of-the-art science labs for hands-on experimental learning." },
    { icon: Camera, title: "CCTV Cameras", description: "Complete campus surveillance for safety and transparency." },
    { icon: Laptop, title: "Computer Lab", description: "Fully equipped computer laboratory with latest technology." },
    { icon: Snowflake, title: "AC Kindergarten", description: "Air-conditioned classrooms for comfortable early learning." },
    { icon: Clock, title: "Extra Doubt Classes", description: "Dedicated sessions for doubt clearance and additional support." },
    { icon: Bus, title: "GPS Transport", description: "Real-time GPS-enabled bus tracking for your peace of mind." },
    { icon: BookOpen, title: "Well Stacked Library", description: "A rich collection of books fostering a love for reading." },
    { icon: Building2, title: "Multi-Purpose Hall", description: "Versatile space for events, assemblies, and cultural programs." },
    { icon: HeartPulse, title: "First Aid Facility", description: "On-campus first aid and medical support always available." },
    { icon: Baby, title: "Day Care Facility", description: "Safe and nurturing day care for working parents." },
    { icon: Leaf, title: "Healthy Environment", description: "Green, clean, and positive learning spaces for all students." },
    { icon: Droplets, title: "RO Water Facility", description: "Pure and safe drinking water available across campus." },
    { icon: Bath, title: "Sanitary Facilities", description: "Clean, modern sanitary amenities maintained regularly." },
    { icon: GraduationCap, title: "Experienced Teachers", description: "Highly qualified and dedicated teaching professionals." },
    { icon: MapPin, title: "Picnics & Field Trips", description: "Regular excursions for experiential outdoor learning." },
    { icon: Dumbbell, title: "Sports Facilities", description: "Indoor and outdoor sports infrastructure for physical growth." },
    { icon: Music, title: "Music, Art & Craft", description: "Creative activities nurturing artistic expression and talent." },
  ],
  hi: [
    { icon: Monitor, title: "स्मार्ट क्लास रूम", description: "आधुनिक स्मार्ट बोर्ड और ऑडियो-विजुअल सहायता के साथ इंटरैक्टिव डिजिटल शिक्षा।" },
    { icon: Shield, title: "सुरक्षित परिसर", description: "प्रशिक्षित कर्मियों के साथ चौबीसों घंटे सुरक्षा।" },
    { icon: FlaskConical, title: "आधुनिक प्रयोगशालाएँ", description: "व्यावहारिक प्रयोगात्मक शिक्षा के लिए अत्याधुनिक विज्ञान प्रयोगशालाएँ।" },
    { icon: Camera, title: "सीसीटीवी कैमरे", description: "सुरक्षा और पारदर्शिता के लिए पूर्ण परिसर निगरानी।" },
    { icon: Laptop, title: "कंप्यूटर लैब", description: "नवीनतम तकनीक के साथ पूरी तरह सुसज्जित कंप्यूटर प्रयोगशाला।" },
    { icon: Snowflake, title: "एसी किंडरगार्टन", description: "आरामदायक प्रारंभिक शिक्षा के लिए वातानुकूलित कक्षाएँ।" },
    { icon: Clock, title: "अतिरिक्त संदेह कक्षाएँ", description: "संदेह निवारण और अतिरिक्त सहायता के लिए समर्पित सत्र।" },
    { icon: Bus, title: "जीपीएस परिवहन", description: "आपकी मानसिक शांति के लिए रियल-टाइम जीपीएस बस ट्रैकिंग।" },
    { icon: BookOpen, title: "समृद्ध पुस्तकालय", description: "पढ़ने के प्रति प्रेम को बढ़ावा देने वाली पुस्तकों का समृद्ध संग्रह।" },
    { icon: Building2, title: "बहुउद्देशीय हॉल", description: "कार्यक्रमों, सभाओं और सांस्कृतिक कार्यक्रमों के लिए बहुमुखी स्थान।" },
    { icon: HeartPulse, title: "प्राथमिक चिकित्सा सुविधा", description: "परिसर में प्राथमिक चिकित्सा और चिकित्सा सहायता हमेशा उपलब्ध।" },
    { icon: Baby, title: "डे केयर सुविधा", description: "कामकाजी माता-पिता के लिए सुरक्षित और पोषणकारी डे केयर।" },
    { icon: Leaf, title: "स्वस्थ वातावरण", description: "सभी छात्रों के लिए हरे, स्वच्छ और सकारात्मक शिक्षण स्थान।" },
    { icon: Droplets, title: "आरओ जल सुविधा", description: "पूरे परिसर में शुद्ध और सुरक्षित पेयजल उपलब्ध।" },
    { icon: Bath, title: "स्वच्छता सुविधाएँ", description: "नियमित रूप से रखरखाव की गई स्वच्छ, आधुनिक स्वच्छता सुविधाएँ।" },
    { icon: GraduationCap, title: "अनुभवी शिक्षक", description: "अत्यधिक योग्य और समर्पित शिक्षण पेशेवर।" },
    { icon: MapPin, title: "पिकनिक और भ्रमण", description: "अनुभवात्मक बाहरी शिक्षा के लिए नियमित भ्रमण।" },
    { icon: Dumbbell, title: "खेल सुविधाएँ", description: "शारीरिक विकास के लिए इनडोर और आउटडोर खेल बुनियादी ढाँचा।" },
    { icon: Music, title: "संगीत, कला और शिल्प", description: "कलात्मक अभिव्यक्ति और प्रतिभा को पोषित करने वाली रचनात्मक गतिविधियाँ।" },
  ],
};

const FEATURE_IMAGES = [
  { src: "https://media.base44.com/images/public/69e3353b3ba76a81dd3553a6/d59dbae15_generated_0610c29b.png", alt: "Kindergarten classroom" },
  { src: "https://media.base44.com/images/public/69e3353b3ba76a81dd3553a6/d31986332_generated_beffe442.png", alt: "Computer laboratory" },
  { src: "https://media.base44.com/images/public/69e3353b3ba76a81dd3553a6/6d2fa3d9e_generated_2d8c61e6.png", alt: "School library" },
  { src: "https://media.base44.com/images/public/69e3353b3ba76a81dd3553a6/1c184b94f_generated_1d028f24.png", alt: "Students playing sports" },
];

const t = {
  en: { tag: "Salient Features", heading1: "A Secure & Smart", heading2: "Campus Ecosystem", desc: "Every facility is designed to create the ideal learning environment for your child." },
  hi: { tag: "प्रमुख विशेषताएँ", heading1: "एक सुरक्षित और स्मार्ट", heading2: "परिसर पारिस्थितिकी तंत्र", desc: "हर सुविधा आपके बच्चे के लिए आदर्श शिक्षण वातावरण बनाने के लिए डिज़ाइन की गई है।" },
};

export default function FeaturesSection() {
  const { lang } = useLang();
  const tx = t[lang];

  return (
    <section id="features" className="py-6 sm:py-8 lg:py-6 bg-secondary/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12 lg:mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-accent font-medium tracking-[0.2em] sm:tracking-[0.3em] uppercase text-[10px] sm:text-xs mb-3 sm:mb-4">{tx.tag}</p>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground leading-tight mb-3 sm:mb-4">
              {tx.heading1}{" "}<span className="italic text-accent">{tx.heading2}</span>
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base lg:text-lg leading-relaxed">{tx.desc}</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8 sm:mb-12 lg:mb-16">
          {FEATURE_IMAGES.map((img, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="rounded-lg sm:rounded-xl overflow-hidden aspect-[4/3]">
              <img src={img.src} alt={img.alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
          {FEATURES[lang].map((feature, index) => (
            <FeatureCard key={feature.title} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
