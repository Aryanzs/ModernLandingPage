import { motion } from "motion/react";
import { ArrowUpRight, PenTool, Search, Users, Settings } from "lucide-react";
import { BlurText } from "../components/BlurText";
import { VideoBackground } from "../components/VideoBackground";
import { CTA } from "../components/CTA";

export function Services() {
  return (
    <div className="overflow-visible">
      {/* SECTION 1 — HERO */}
      <section className="relative w-full min-h-[800px] py-32 px-6 md:px-16 lg:px-24 flex items-center justify-center">
        <VideoBackground 
          src="https://stream.mux.com/9JXDljEVWYwWu01PUkAemafDugK89o01BR6zqJ3aS9u00A.m3u8"
        />
        <div className="absolute top-0 left-0 right-0 h-[200px] bg-gradient-to-b from-black to-transparent z-[1]" />
        <div className="absolute bottom-0 left-0 right-0 h-[200px] bg-gradient-to-t from-black to-transparent z-[1]" />

        <div className="relative z-10 text-center max-w-4xl mx-auto min-h-[500px] flex flex-col items-center justify-center pt-24">
          <div className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-body inline-block mb-6">
            Our Services
          </div>
          <BlurText 
            text="Intelligence at every layer." 
            className="text-5xl md:text-6xl lg:text-7xl font-heading italic text-white tracking-tight leading-[0.9] mb-8"
            delay={0}
          />
          <motion.p 
            initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-white/60 font-light text-lg md:text-xl mb-10 max-w-2xl"
          >
            From generative layouts to predictive analytics. Discover how our AI-native approach transforms your digital presence.
          </motion.p>
        </div>
      </section>

      {/* SECTION 2 — CHESS (Core Services) */}
      <section className="py-24 px-6 md:px-16 lg:px-24 max-w-7xl mx-auto">
        <div className="flex flex-col gap-32">
          {/* Row 1 */}
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 text-left">
              <div className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-body inline-block mb-6">
                01 / Design
              </div>
              <h3 className="text-3xl md:text-4xl font-heading italic text-white mb-6">Generative UI/UX Design</h3>
              <p className="text-white/60 font-light text-base md:text-lg mb-8">
                We don't use templates. Our AI generates bespoke, high-converting interfaces based on your brand's unique DNA and industry data. Every layout is optimized for engagement before a single line of code is written.
              </p>
              <button className="liquid-glass-strong rounded-full px-6 py-3 hover:bg-white/5 transition-colors flex items-center gap-2">
                Explore Design <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
            <div className="flex-1 w-full">
              <div className="liquid-glass rounded-2xl overflow-hidden aspect-video relative">
                <img src="https://picsum.photos/seed/uiux/800/600" alt="Generative UI Design" className="w-full h-full object-cover opacity-80" referrerPolicy="no-referrer" loading="lazy" />
              </div>
            </div>
          </div>

          {/* Row 2 */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
            <div className="flex-1 text-left">
              <div className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-body inline-block mb-6">
                02 / Engineering
              </div>
              <h3 className="text-3xl md:text-4xl font-heading italic text-white mb-6">Autonomous Engineering</h3>
              <p className="text-white/60 font-light text-base md:text-lg mb-8">
                Clean, scalable code written in seconds. Our proprietary models generate React, Tailwind, and Next.js code that humans actually want to read. It's performant, accessible, and ready to scale.
              </p>
              <button className="liquid-glass-strong rounded-full px-6 py-3 hover:bg-white/5 transition-colors flex items-center gap-2">
                Explore Engineering <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
            <div className="flex-1 w-full">
              <div className="liquid-glass rounded-2xl overflow-hidden aspect-video relative">
                <img src="https://picsum.photos/seed/code/800/600" alt="Autonomous Engineering" className="w-full h-full object-cover opacity-80" referrerPolicy="no-referrer" loading="lazy" />
              </div>
            </div>
          </div>

          {/* Row 3 */}
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 text-left">
              <div className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-body inline-block mb-6">
                03 / Growth
              </div>
              <h3 className="text-3xl md:text-4xl font-heading italic text-white mb-6">Predictive Optimization</h3>
              <p className="text-white/60 font-light text-base md:text-lg mb-8">
                Launch is just the beginning. Your site continuously runs multivariate tests, adapting its layout and copy to maximize conversion rates. It learns from every visitor to deliver the perfect experience.
              </p>
              <button className="liquid-glass-strong rounded-full px-6 py-3 hover:bg-white/5 transition-colors flex items-center gap-2">
                Explore Growth <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
            <div className="flex-1 w-full">
              <div className="liquid-glass rounded-2xl overflow-hidden aspect-video relative">
                <img src="https://picsum.photos/seed/growth/800/600" alt="Predictive Optimization" className="w-full h-full object-cover opacity-80" referrerPolicy="no-referrer" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — GRID (The Toolkit) */}
      <section className="py-24 px-6 md:px-16 lg:px-24 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-body inline-block mb-4">
            The Toolkit
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9]">
            Everything you need. Nothing you don't.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: PenTool, title: "Dynamic Copywriting", desc: "AI-generated copy that adapts to user behavior and search intent." },
            { icon: Search, title: "Algorithmic SEO", desc: "Technical SEO and content structures optimized for modern search engines." },
            { icon: Users, title: "Real-time Personalization", desc: "Unique experiences for every visitor based on their browsing patterns." },
            { icon: Settings, title: "Automated Maintenance", desc: "Self-healing code and automated dependency updates keep you secure." }
          ].map((feature, i) => (
            <div key={i} className="liquid-glass rounded-2xl p-6 flex flex-col gap-4">
              <div className="liquid-glass-strong rounded-full w-10 h-10 flex items-center justify-center">
                <feature.icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-heading italic text-white">{feature.title}</h3>
              <p className="text-white/60 font-light text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 4 — PROCESS */}
      <section className="py-24 px-6 md:px-16 lg:px-24 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-body inline-block mb-4">
            Methodology
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9]">
            How we build the future.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { step: "01 / Analyze", desc: "We ingest your brand guidelines, target audience data, and competitor landscape to form a strategic baseline." },
            { step: "02 / Generate", desc: "Our models produce hundreds of variations, selecting the optimal path forward for design and architecture." },
            { step: "03 / Evolve", desc: "Post-launch, the system continuously learns and improves your conversion metrics autonomously." }
          ].map((item, i) => (
            <div key={i} className="liquid-glass rounded-3xl p-10 flex flex-col gap-6">
              <div className="text-2xl font-heading italic text-white">{item.step}</div>
              <p className="text-white/60 font-light text-base leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <CTA />
    </div>
  );
}
