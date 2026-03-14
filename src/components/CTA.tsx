import { VideoBackground } from "./VideoBackground";
import { Footer } from "./Footer";

export function CTA() {
  return (
    <section className="relative py-32 px-6 md:px-16 lg:px-24 min-h-[600px] flex flex-col justify-center">
      <VideoBackground 
        src="https://stream.mux.com/8wrHPCX2dC3msyYU9ObwqNdm00u3ViXvOSHUMRYSEe5Q.m3u8"
      />
      <div className="absolute top-0 left-0 right-0 h-[200px] bg-gradient-to-b from-black to-transparent z-[1]" />
      <div className="absolute bottom-0 left-0 right-0 h-[200px] bg-gradient-to-t from-black to-transparent z-[1]" />

      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-heading italic text-white tracking-tight leading-[0.9] mb-6">
          Your next website starts here.
        </h2>
        <p className="text-white/60 font-light text-lg mb-10">
          Book a free strategy call. See what AI-powered design can do.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <button className="liquid-glass-strong rounded-full px-8 py-4 hover:bg-white/5 transition-colors">
            Book a Call
          </button>
          <button className="bg-white text-black rounded-full px-8 py-4 hover:bg-white/90 transition-colors">
            View Pricing
          </button>
        </div>
      </div>

      <Footer />
    </section>
  );
}
