import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ArrowUpRight, Home, Layers, Image as ImageIcon, Activity, CreditCard, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const navItems = [
  { path: '/', label: 'Home', icon: Home },
  { path: '/services', label: 'Services', icon: Layers },
  { path: '/work', label: 'Work', icon: ImageIcon },
  { path: '/process', label: 'Process', icon: Activity },
  { path: '/pricing', label: 'Pricing', icon: CreditCard },
];

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 60 : -60,
    opacity: 0,
    scale: 0.9,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    zIndex: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 60 : -60,
    opacity: 0,
    scale: 0.9,
    zIndex: 0,
  })
};

export function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [[page, direction], setPage] = useState([0, 0]);

  const currentIndex = navItems.findIndex(item => item.path === location.pathname);
  const activeIndex = currentIndex === -1 ? 0 : currentIndex;

  useEffect(() => {
    if (activeIndex !== page) {
      setPage([activeIndex, activeIndex > page ? 1 : -1]);
    }
  }, [activeIndex, page]);

  const paginate = (newDirection: number) => {
    const nextIndex = (activeIndex + newDirection + navItems.length) % navItems.length;
    setPage([nextIndex, newDirection]);
    navigate(navItems[nextIndex].path);
  };

  const handleDragEnd = (e: any, { offset }: any) => {
    const swipe = offset.x;
    if (swipe < -40) {
      paginate(1);
    } else if (swipe > 40) {
      paginate(-1);
    }
  };

  return (
    <>
      {/* TOP NAVBAR */}
      <nav className="fixed top-4 left-0 right-0 z-50 px-4 md:px-6 pointer-events-none">
        <div className="max-w-7xl mx-auto flex items-center justify-between pointer-events-auto relative">
          
          {/* Left: Logo */}
          <div className="flex-1 flex justify-start">
            <Link to="/" className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors backdrop-blur-md shrink-0">
              <div className="w-5 h-5 md:w-6 md:h-6 bg-white rounded-full" />
            </Link>
          </div>
          
          {/* Center: Desktop & Tablet Links */}
          <div className="liquid-glass rounded-full px-4 py-2 md:px-6 md:py-2 hidden md:flex items-center gap-4 lg:gap-8 absolute left-1/2 -translate-x-1/2">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path} className={`text-xs lg:text-sm font-medium transition-colors ${location.pathname === item.path ? 'text-white' : 'text-foreground/90 hover:text-white'}`}>
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right: CTA */}
          <div className="flex-1 flex justify-end">
            <button className="bg-white text-black rounded-full px-4 py-2 md:px-5 md:py-2.5 text-xs md:text-sm font-medium flex items-center gap-2 hover:bg-white/90 transition-colors shadow-lg shrink-0">
              Get Started <ArrowUpRight className="w-3 h-3 md:w-4 md:h-4" />
            </button>
          </div>

        </div>
      </nav>

      {/* BOTTOM MOBILE NAVBAR */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 md:hidden w-[220px]">
        <div className="liquid-glass-strong rounded-full p-1.5 flex items-center justify-between group relative overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.5)] border border-white/10">
          
          {/* Left Arrow */}
          <button
            onClick={() => paginate(-1)}
            className="w-10 h-10 rounded-full flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all duration-300 z-10 opacity-0 group-hover:opacity-100 focus:opacity-100 active:scale-90"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Center Content */}
          <div className="flex-1 overflow-hidden relative h-12 flex items-center justify-center">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={page}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 400, damping: 35 },
                  opacity: { duration: 0.25 }
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={handleDragEnd}
                className="flex flex-col items-center justify-center cursor-grab active:cursor-grabbing absolute inset-0 w-full h-full"
              >
                {React.createElement(navItems[activeIndex].icon, { className: "w-5 h-5 text-white mb-0.5" })}
                <span className="text-[9px] font-medium text-white/80 uppercase tracking-widest">{navItems[activeIndex].label}</span>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => paginate(1)}
            className="w-10 h-10 rounded-full flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all duration-300 z-10 opacity-0 group-hover:opacity-100 focus:opacity-100 active:scale-90"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </>
  );
}
