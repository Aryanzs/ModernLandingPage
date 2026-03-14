import { motion } from "motion/react";
import { ArrowUpRight, Play, Zap, Palette, BarChart3, Shield } from "lucide-react";
import { BlurText } from "../components/BlurText";
import { VideoBackground } from "../components/VideoBackground";
import { CTA } from "../components/CTA";

export function Home() {
  return (
    <div className="overflow-visible">
      {/* SECTION 2 — HERO */}
      <section className="relative overflow-visible h-[1000px] bg-black flex flex-col">
        <VideoBackground 
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260307_083826_e938b29f-a43a-41ec-a153-3d4730578ab8.mp4" 
          className="top-[20%] h-auto max-h-[80%] object-contain"
        />
        <div className="absolute inset-0 bg-black/5 z-0" />
        <div className="absolute bottom-0 left-0 right-0 z-[1] h-[300px] bg-gradient-to-b from-transparent to-black" />

        <div className="relative z-10 flex flex-col items-center text-center pt-[150px] px-6 max-w-5xl mx-auto flex-1">
          <div className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-body inline-flex items-center gap-2 mb-8">
            <span className="bg-white text-black rounded-full px-2 py-0.5 text-[10px] uppercase tracking-wider font-bold">New</span>
            Introducing AI-powered web design.
          </div>

          <BlurText 
            text="The Website Your Brand Deserves" 
            className="text-6xl md:text-7xl lg:text-[5.5rem] font-heading italic text-foreground leading-[0.8] tracking-[-4px] mb-8"
            delay={0}
          />

          <motion.p 
            initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-white/60 font-light text-lg md:text-xl max-w-2xl mb-12"
          >
            Stunning design. Blazing performance. Built by AI, refined by experts. This is web design, wildly reimagined.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.5 }}
            className="flex flex-col sm:flex-row items-center gap-6"
          >
            <button className="liquid-glass-strong rounded-full px-8 py-4 flex items-center gap-2 hover:bg-white/5 transition-colors">
              Get Started <ArrowUpRight className="w-4 h-4" />
            </button>
            <button className="rounded-full px-8 py-4 flex items-center gap-2 text-white/80 hover:text-white transition-colors">
              <Play className="w-4 h-4 fill-current" /> Watch the Film
            </button>
          </motion.div>

          {/* SECTION 3 — PARTNERS BAR */}
          <div className="mt-auto pb-8 pt-16 w-full flex flex-col items-center">
            <div className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-body inline-block mb-8">
              Trusted by the teams behind
            </div>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-50">
              {["Stripe", "Vercel", "Linear", "Notion", "Figma"].map((partner) => (
                <span key={partner} className="text-2xl md:text-3xl font-heading italic text-white">
                  {partner}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — START SECTION ("How It Works") */}
      <section className="relative w-full min-h-[700px] py-32 px-6 md:px-16 lg:px-24 flex items-center justify-center">
        <VideoBackground 
          src="https://stream.mux.com/9JXDljEVWYwWu01PUkAemafDugK89o01BR6zqJ3aS9u00A.m3u8"
        />
        <div className="absolute top-0 left-0 right-0 h-[200px] bg-gradient-to-b from-black to-transparent z-[1]" />
        <div className="absolute bottom-0 left-0 right-0 h-[200px] bg-gradient-to-t from-black to-transparent z-[1]" />

        <div className="relative z-10 text-center max-w-3xl mx-auto min-h-[500px] flex flex-col items-center justify-center">
          <div className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-body inline-block mb-6">
            How It Works
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9] mb-6">
            You dream it. We ship it.
          </h2>
          <p className="text-white/60 font-light text-lg mb-10">
            Share your vision. Our AI handles the rest—wireframes, design, code, launch. All in days, not quarters.
          </p>
          <button className="liquid-glass-strong rounded-full px-8 py-4 flex items-center gap-2 hover:bg-white/5 transition-colors">
            Get Started <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* SECTION 5 — FEATURES CHESS */}
      <section className="py-24 px-6 md:px-16 lg:px-24 max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <div className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-body inline-block mb-4">
            Capabilities
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9]">
            Pro features. Zero complexity.
          </h2>
        </div>

        <div className="flex flex-col gap-32">
          {/* Row 1 */}
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 text-left">
              <h3 className="text-3xl md:text-4xl font-heading italic text-white mb-6">Designed to convert. Built to perform.</h3>
              <p className="text-white/60 font-light text-base md:text-lg mb-8">
                Every pixel is intentional. Our AI studies what works across thousands of top sites—then builds yours to outperform them all.
              </p>
              <button className="liquid-glass-strong rounded-full px-6 py-3 hover:bg-white/5 transition-colors">
                Learn more
              </button>
            </div>
            <div className="flex-1 w-full">
              <div className="liquid-glass rounded-2xl overflow-hidden aspect-video relative">
                <img src="https://picsum.photos/seed/design/800/600" alt="Design Interface" className="w-full h-full object-cover opacity-80" referrerPolicy="no-referrer" loading="lazy" />
              </div>
            </div>
          </div>

          {/* Row 2 */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
            <div className="flex-1 text-left">
              <h3 className="text-3xl md:text-4xl font-heading italic text-white mb-6">It gets smarter. Automatically.</h3>
              <p className="text-white/60 font-light text-base md:text-lg mb-8">
                Your site evolves on its own. AI monitors every click, scroll, and conversion—then optimizes in real time. No manual updates. Ever.
              </p>
              <button className="liquid-glass-strong rounded-full px-6 py-3 hover:bg-white/5 transition-colors">
                See how it works
              </button>
            </div>
            <div className="flex-1 w-full">
              <div className="liquid-glass rounded-2xl overflow-hidden aspect-video relative">
                <img src="https://picsum.photos/seed/analytics/800/600" alt="Analytics Dashboard" className="w-full h-full object-cover opacity-80" referrerPolicy="no-referrer" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — FEATURES GRID */}
      <section className="py-24 px-6 md:px-16 lg:px-24 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-body inline-block mb-4">
            Why Us
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9]">
            The difference is everything.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Zap, title: "Days, Not Months", desc: "Concept to launch at a pace that redefines fast." },
            { icon: Palette, title: "Obsessively Crafted", desc: "Every detail considered. Every element refined." },
            { icon: BarChart3, title: "Built to Convert", desc: "Layouts informed by data. Decisions backed by performance." },
            { icon: Shield, title: "Secure by Default", desc: "Enterprise-grade protection comes standard." }
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

      {/* SECTION 7 — STATS */}
      <section className="relative py-32 px-6 md:px-16 lg:px-24">
        <VideoBackground 
          src="https://stream.mux.com/NcU3HlHeF7CUL86azTTzpy3Tlb00d6iF3BmCdFslMJYM.m3u8"
          desaturate
        />
        <div className="absolute top-0 left-0 right-0 h-[200px] bg-gradient-to-b from-black to-transparent z-[1]" />
        <div className="absolute bottom-0 left-0 right-0 h-[200px] bg-gradient-to-t from-black to-transparent z-[1]" />

        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="liquid-glass rounded-3xl p-12 md:p-16 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { val: "200+", label: "Sites launched" },
              { val: "98%", label: "Client satisfaction" },
              { val: "3.2x", label: "More conversions" },
              { val: "5 days", label: "Average delivery" }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col gap-2">
                <div className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white">{stat.val}</div>
                <div className="text-white/60 font-light text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8 — TESTIMONIALS */}
      <section className="py-24 px-6 md:px-16 lg:px-24 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-body inline-block mb-4">
            What They Say
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9]">
            Don't take our word for it.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { quote: "A complete rebuild in five days. The AI-driven insights completely transformed how we present our product. Unbelievable.", name: "Sarah Chen", role: "CEO Luminary" },
            { quote: "Conversions up 4x in the first month. The design is stunning, but the performance is what really blew us away.", name: "Marcus Webb", role: "Head of Growth Arcline" },
            { quote: "They didn't just design our site, they elevated our entire brand identity. The liquid glass aesthetic is perfect.", name: "Elena Voss", role: "Brand Director Helix" }
          ].map((t, i) => (
            <div key={i} className="liquid-glass rounded-2xl p-8 flex flex-col justify-between gap-8">
              <p className="text-white/80 font-light text-sm italic leading-relaxed">"{t.quote}"</p>
              <div>
                <div className="text-white font-medium text-sm">{t.name}</div>
                <div className="text-white/50 font-light text-xs">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTA />
    </div>
  );
}
