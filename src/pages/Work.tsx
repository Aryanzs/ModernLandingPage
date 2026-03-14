import React from "react";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { BlurText } from "../components/BlurText";
import { VideoBackground } from "../components/VideoBackground";
import { CTA } from "../components/CTA";

const row1 = [
  { img: "https://picsum.photos/seed/w1/800/600", title: "Aura" },
  { img: "https://picsum.photos/seed/w2/800/600", title: "Nova" },
  { img: "https://picsum.photos/seed/w3/800/600", title: "Fluid" },
  { img: "https://picsum.photos/seed/w4/800/600", title: "Eos" },
  { img: "https://picsum.photos/seed/w5/800/600", title: "Vanguard" },
];

const row2 = [
  { img: "https://picsum.photos/seed/w6/800/600", title: "Zenith" },
  { img: "https://picsum.photos/seed/w7/800/600", title: "Pulse" },
  { img: "https://picsum.photos/seed/w8/800/600", title: "Origin" },
  { img: "https://picsum.photos/seed/w9/800/600", title: "Shift" },
  { img: "https://picsum.photos/seed/w10/800/600", title: "Core" },
];

export function Work() {
  return (
    <div className="overflow-visible">
      {/* SECTION 1 — HERO */}
      <section className="relative w-full min-h-[700px] py-32 px-6 md:px-16 lg:px-24 flex items-center justify-center">
        <VideoBackground 
          src="https://stream.mux.com/NcU3HlHeF7CUL86azTTzpy3Tlb00d6iF3BmCdFslMJYM.m3u8"
        />
        <div className="absolute top-0 left-0 right-0 h-[200px] bg-gradient-to-b from-black to-transparent z-[1]" />
        <div className="absolute bottom-0 left-0 right-0 h-[200px] bg-gradient-to-t from-black to-transparent z-[1]" />

        <div className="relative z-10 text-center max-w-4xl mx-auto min-h-[400px] flex flex-col items-center justify-center pt-24">
          <div className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-body inline-block mb-6">
            Our Work
          </div>
          <BlurText 
            text="Proof in the pixels." 
            className="text-5xl md:text-6xl lg:text-7xl font-heading italic text-white tracking-tight leading-[0.9] mb-8"
            delay={0}
          />
          <motion.p 
            initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-white/60 font-light text-lg md:text-xl mb-10 max-w-2xl"
          >
            We don't just talk about the future of web design. We build it every day. Explore our latest AI-generated, human-refined experiences.
          </motion.p>
        </div>
      </section>

      {/* SECTION 2 — ENDLESS SCROLLING GALLERY */}
      <section className="py-12 overflow-hidden flex flex-col gap-8 relative">
        {/* Subtle gradients to fade the edges of the scrolling area */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

        {/* Row 1: Scrolls Left */}
        <div className="flex gap-8 w-max animate-marquee pause-on-hover">
          {/* First Set */}
          <div className="flex gap-8 shrink-0">
            {row1.map((item, i) => (
              <GalleryCard key={`r1-a-${i}`} item={item} />
            ))}
          </div>
          {/* Duplicated Set for Seamless Loop */}
          <div className="flex gap-8 shrink-0">
            {row1.map((item, i) => (
              <GalleryCard key={`r1-b-${i}`} item={item} />
            ))}
          </div>
        </div>

        {/* Row 2: Scrolls Right */}
        <div className="flex gap-8 w-max animate-marquee-reverse pause-on-hover">
          {/* First Set */}
          <div className="flex gap-8 shrink-0">
            {row2.map((item, i) => (
              <GalleryCard key={`r2-a-${i}`} item={item} />
            ))}
          </div>
          {/* Duplicated Set for Seamless Loop */}
          <div className="flex gap-8 shrink-0">
            {row2.map((item, i) => (
              <GalleryCard key={`r2-b-${i}`} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — FEATURED CASE STUDIES */}
      <section className="py-32 px-6 md:px-16 lg:px-24 max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <div className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-body inline-block mb-4">
            Featured
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9]">
            Deep dives into digital excellence.
          </h2>
        </div>

        <div className="flex flex-col gap-24">
          {/* Case Study 1 */}
          <div className="group cursor-pointer">
            <div className="liquid-glass rounded-3xl overflow-hidden aspect-[21/9] relative mb-8">
              <img 
                src="https://picsum.photos/seed/case1/1600/900" 
                alt="Project Lumina" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80" 
                referrerPolicy="no-referrer" 
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="liquid-glass-strong rounded-full px-8 py-4 text-white font-medium flex items-center gap-2">
                  Read Case Study <ArrowUpRight className="w-5 h-5" />
                </span>
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 px-4">
              <div>
                <h3 className="text-3xl font-heading italic text-white mb-2">Project Lumina</h3>
                <p className="text-white/60 font-light">E-commerce platform reimagined with predictive layouts.</p>
              </div>
              <div className="flex gap-3">
                <span className="liquid-glass rounded-full px-4 py-1.5 text-xs text-white/80">E-Commerce</span>
                <span className="liquid-glass rounded-full px-4 py-1.5 text-xs text-white/80">AI Design</span>
              </div>
            </div>
          </div>

          {/* Case Study 2 */}
          <div className="group cursor-pointer">
            <div className="liquid-glass rounded-3xl overflow-hidden aspect-[21/9] relative mb-8">
              <img 
                src="https://picsum.photos/seed/case2/1600/900" 
                alt="Project Nexus" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80" 
                referrerPolicy="no-referrer" 
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="liquid-glass-strong rounded-full px-8 py-4 text-white font-medium flex items-center gap-2">
                  Read Case Study <ArrowUpRight className="w-5 h-5" />
                </span>
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 px-4">
              <div>
                <h3 className="text-3xl font-heading italic text-white mb-2">Project Nexus</h3>
                <p className="text-white/60 font-light">The ultimate SaaS dashboard built for enterprise scale.</p>
              </div>
              <div className="flex gap-3">
                <span className="liquid-glass rounded-full px-4 py-1.5 text-xs text-white/80">SaaS</span>
                <span className="liquid-glass rounded-full px-4 py-1.5 text-xs text-white/80">Dashboard</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
}

const GalleryCard: React.FC<{ item: { img: string, title: string } }> = ({ item }) => {
  return (
    <div className="relative group liquid-glass-strong rounded-3xl overflow-hidden w-[300px] md:w-[450px] lg:w-[600px] aspect-[4/3] shrink-0 cursor-pointer">
      <img 
        src={item.img} 
        alt={item.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" 
        referrerPolicy="no-referrer"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
      
      <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
        <h3 className="text-2xl font-heading italic text-white mb-2">{item.title}</h3>
        <div className="flex items-center gap-2 text-white/80 text-sm font-light opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
          View Project <ArrowUpRight className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
};
