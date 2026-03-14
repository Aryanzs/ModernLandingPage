import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { ScrollToTop } from "./components/ScrollToTop";

// Lazy load pages for better performance
const Home = React.lazy(() => import("./pages/Home").then(module => ({ default: module.Home })));
const Services = React.lazy(() => import("./pages/Services").then(module => ({ default: module.Services })));
const Work = React.lazy(() => import("./pages/Work").then(module => ({ default: module.Work })));
const Process = React.lazy(() => import("./pages/Process").then(module => ({ default: module.Process })));
const Pricing = React.lazy(() => import("./pages/Pricing").then(module => ({ default: module.Pricing })));

// Loading fallback
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-black">
    <div className="w-8 h-8 border-2 border-white/20 border-t-white rounded-full animate-spin" />
  </div>
);

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <main className="bg-black min-h-screen overflow-visible font-body text-white">
        <Navbar />
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/work" element={<Work />} />
            <Route path="/process" element={<Process />} />
            <Route path="/pricing" element={<Pricing />} />
          </Routes>
        </Suspense>
      </main>
    </BrowserRouter>
  );
}
