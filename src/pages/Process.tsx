import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { BlurText } from "../components/BlurText";
import { VideoBackground } from "../components/VideoBackground";
import { CTA } from "../components/CTA";

const steps = [
  {
    num: "01",
    title: "Discovery & Strategy",
    desc: "We ingest your brand guidelines, target audience data, and competitor landscape. Our AI models analyze millions of data points to form a strategic baseline that guarantees market differentiation.",
    img: "https://picsum.photos/seed/strategy1/800/600"
  },
  {
    num: "02",
    title: "Generative Architecture",
    desc: "Before a single pixel is styled, our proprietary models draft the wireframes and user flows. We simulate thousands of user journeys to find the path of least resistance to conversion.",
    img: "https://picsum.photos/seed/arch2/800/600"
  },
  {
    num: "03",
    title: "Design Synthesis",
    desc: "This is where the magic happens. We apply our signature aesthetic—liquid glass, deep contrasts, and fluid typography. The AI generates bespoke, high-converting interfaces based on your brand's unique DNA.",
    img: "https://picsum.photos/seed/design3/800/600"
  },
  {
    num: "04",
    title: "Autonomous Engineering",
    desc: "Clean, scalable code written in seconds. Our system translates the approved designs into performant React, Tailwind, and Next.js code. It's accessible, SEO-optimized, and ready to scale.",
    img: "https://picsum.photos/seed/code4/800/600"
  },
  {
    num: "05",
    title: "Predictive Optimization",
    desc: "Launch is just the beginning. Your site continuously runs multivariate tests, adapting its layout and copy to maximize conversion rates. It learns from every visitor to deliver the perfect experience.",
    img: "https://picsum.photos/seed/growth5/800/600"
  }
];

export function Process() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className="overflow-visible">
      {/* SECTION 1 — HERO */}
      <section className="relative w-full min-h-[700px] py-32 px-6 md:px-16 lg:px-24 flex items-center justify-center">
        <VideoBackground 
          src="https://stream.mux.com/9JXDljEVWYwWu01PUkAemafDugK89o01BR6zqJ3aS9u00A.m3u8"
        />
        <div className="absolute top-0 left-0 right-0 h-[200px] bg-gradient-to-b from-black to-transparent z-[1]" />
        <div className="absolute bottom-0 left-0 right-0 h-[200px] bg-gradient-to-t from-black to-transparent z-[1]" />

        <div className="relative z-10 text-center max-w-4xl mx-auto min-h-[400px] flex flex-col items-center justify-center pt-24">
          <div className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-body inline-block mb-6">
            The Process
          </div>
          <BlurText 
            text="The anatomy of creation." 
            className="text-5xl md:text-6xl lg:text-7xl font-heading italic text-white tracking-tight leading-[0.9] mb-8"
            delay={0}
          />
          <motion.p 
            initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-white/60 font-light text-lg md:text-xl mb-10 max-w-2xl"
          >
            A seamless blend of artificial intelligence and human intuition. See how we take your vision from concept to a self-optimizing reality.
          </motion.p>
        </div>
      </section>

      {/* SECTION 2 — TIMELINE */}
      <section className="py-32 px-6 md:px-16 lg:px-24 max-w-7xl mx-auto relative" ref={containerRef} style={{ position: "relative" }}>
        
        {/* Central Line (Desktop) / Left Line (Mobile) */}
        <div className="absolute left-8 md:left-1/2 top-32 bottom-32 w-[1px] bg-white/10 -translate-x-1/2 hidden sm:block">
          <motion.div 
            className="w-full bg-white origin-top"
            style={{ height: lineHeight }}
          />
        </div>

        <div className="flex flex-col gap-24 md:gap-40 relative z-10">
          {steps.map((step, index) => {
            const isEven = index % 2 === 0;
            
            return (
              <div key={step.num} className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 md:gap-24`}>
                
                {/* Content Side */}
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? -50 : 50, filter: "blur(10px)" }}
                  whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                  viewport={{ once: false, margin: "-20%" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="flex-1 flex flex-col gap-6 w-full"
                >
                  <div className="flex items-center gap-6 mb-2">
                    <span className="text-6xl md:text-8xl font-heading italic text-white/20 leading-none">
                      {step.num}
                    </span>
                    <h3 className="text-3xl md:text-4xl font-heading italic text-white leading-tight">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-white/60 font-light text-lg leading-relaxed">
                    {step.desc}
                  </p>
                </motion.div>

                {/* Center Node (Desktop only) */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 items-center justify-center">
                  <motion.div 
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: false, margin: "-20%" }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="w-4 h-4 rounded-full bg-white shadow-[0_0_20px_rgba(255,255,255,0.8)]"
                  />
                </div>

                {/* Image Side */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9, y: 50 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: false, margin: "-20%" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="flex-1 w-full"
                >
                  <div className="liquid-glass-strong rounded-3xl overflow-hidden aspect-[4/3] relative group cursor-pointer">
                    <img 
                      src={step.img} 
                      alt={step.title} 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                  </div>
                </motion.div>

              </div>
            );
          })}
        </div>
      </section>

      {/* SECTION 3 — BOTTOM CTA BANNER */}
      <section className="py-24 px-6 md:px-16 lg:px-24 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-10%" }}
          transition={{ duration: 0.8 }}
          className="liquid-glass rounded-3xl p-12 md:p-20 text-center flex flex-col items-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9] mb-6 relative z-10">
            Ready to start the process?
          </h2>
          <p className="text-white/60 font-light text-lg mb-10 max-w-xl relative z-10">
            Join the forward-thinking brands that are leveraging AI to outpace the competition.
          </p>
          <button className="bg-white text-black rounded-full px-8 py-4 font-medium flex items-center gap-2 hover:bg-white/90 transition-colors relative z-10">
            Initiate Project <ArrowUpRight className="w-4 h-4" />
          </button>
        </motion.div>
      </section>

      <CTA />
    </div>
  );
}
