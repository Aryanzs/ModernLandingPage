import React from "react";
import { motion } from "motion/react";
import { Check, ArrowUpRight, Sparkles } from "lucide-react";
import { CTA } from "../components/CTA";

const tiers = [
  {
    name: "Ignite",
    price: "$2,999",
    period: "/mo",
    desc: "For brands ready to step out of the dark ages.",
    features: [
      "AI-Assisted Wireframing",
      "Standard UI/UX Design",
      "2 Revision Cycles",
      "Email Support",
      "1 Month Delivery"
    ],
    buttonText: "Start Igniting",
    highlight: false
  },
  {
    name: "Vanguard",
    price: "$7,999",
    period: "/mo",
    desc: "The ultimate generative engine. Total market domination.",
    features: [
      "Generative UI/UX Architecture",
      "Predictive Conversion Optimization",
      "Unlimited Revisions",
      "Priority 24/7 Support",
      "14-Day Delivery"
    ],
    buttonText: "Unleash Power",
    highlight: true
  },
  {
    name: "Apex",
    price: "Custom",
    period: "",
    desc: "For enterprises that dictate the future of their industry.",
    features: [
      "Autonomous Engineering",
      "Dedicated AI Model Training",
      "Real-time Personalization",
      "White-glove Onboarding",
      "Full Source Code Ownership"
    ],
    buttonText: "Contact Sales",
    highlight: false
  }
];

export function Pricing() {
  return (
    <div className="overflow-hidden relative min-h-screen flex flex-col">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-white/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Cinematic Intro */}
      <section className="relative pt-40 pb-20 px-6 flex flex-col items-center justify-center text-center min-h-[40vh] md:min-h-[50vh]">
        <motion.div
          initial={{ opacity: 0, filter: "blur(20px)", y: 20 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading italic text-white/40 mb-2">
            Your website is boring.
          </h1>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, filter: "blur(20px)", y: 20 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{ duration: 1.5, delay: 2, ease: "easeOut" }}
        >
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-heading italic text-white">
            Experience the real power.
          </h2>
        </motion.div>
      </section>

      {/* Pricing Cards */}
      <section className="px-6 pb-32 max-w-7xl mx-auto w-full relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 4, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center"
        >
          {tiers.map((tier) => (
            <div 
              key={tier.name}
              className={`relative group liquid-glass-strong rounded-3xl p-8 md:p-10 flex flex-col h-full transition-transform duration-500 hover:-translate-y-4 ${
                tier.highlight ? 'md:-translate-y-4 md:hover:-translate-y-8 border border-white/20 shadow-[0_0_40px_rgba(255,255,255,0.1)]' : 'border border-transparent'
              }`}
            >
              {tier.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 liquid-glass rounded-full px-4 py-1 flex items-center gap-2 text-xs font-medium text-white shadow-lg">
                  <Sparkles className="w-3 h-3" /> Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl font-heading italic text-white mb-2">{tier.name}</h3>
                <p className="text-white/60 text-sm font-light h-10">{tier.desc}</p>
              </div>
              
              <div className="mb-8 flex items-baseline gap-1">
                <span className="text-5xl font-heading italic text-white">{tier.price}</span>
                <span className="text-white/40 text-sm">{tier.period}</span>
              </div>
              
              <ul className="flex flex-col gap-4 mb-10 flex-1">
                {tier.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm text-white/80 font-light">
                    <Check className="w-5 h-5 text-white/40 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button className={`w-full rounded-full py-4 font-medium flex items-center justify-center gap-2 transition-colors ${
                tier.highlight 
                  ? 'bg-white text-black hover:bg-white/90' 
                  : 'liquid-glass text-white hover:bg-white/10'
              }`}>
                {tier.buttonText} <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </motion.div>
      </section>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 5 }}
      >
        <CTA />
      </motion.div>
    </div>
  );
}
