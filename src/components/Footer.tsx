export function Footer() {
  return (
    <footer className="relative z-10 mt-32 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 max-w-7xl mx-auto w-full">
      <div className="text-white/40 text-xs">© 2026 Studio. All rights reserved.</div>
      <div className="flex items-center gap-6 text-white/40 text-xs">
        <a href="#" className="hover:text-white transition-colors">Privacy</a>
        <a href="#" className="hover:text-white transition-colors">Terms</a>
        <a href="#" className="hover:text-white transition-colors">Contact</a>
      </div>
    </footer>
  );
}
