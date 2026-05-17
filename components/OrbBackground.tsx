"use client";

import { useEffect, useRef } from "react";

export default function OrbBackground() {
  const wrap1 = useRef<HTMLDivElement>(null);
  const wrap2 = useRef<HTMLDivElement>(null);
  const wrap3 = useRef<HTMLDivElement>(null);
  const wrap4 = useRef<HTMLDivElement>(null);
  const wrap5 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let rafId: number;
    let lastY = -1;

    const tick = () => {
      const y = window.scrollY;
      if (y !== lastY) {
        lastY = y;
        if (wrap1.current) wrap1.current.style.transform = `translateY(${y * 0.12}px)`;
        if (wrap2.current) wrap2.current.style.transform = `translateY(${y * -0.08}px)`;
        if (wrap3.current) wrap3.current.style.transform = `translateY(${y * 0.18}px)`;
        if (wrap4.current) wrap4.current.style.transform = `translateY(${y * -0.05}px)`;
        if (wrap5.current) wrap5.current.style.transform = `translateY(${y * 0.10}px)`;
      }
      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">

      {/* Orb 1 — purple, top-left */}
      <div ref={wrap1} className="absolute" style={{ width: "700px", height: "700px", top: "-200px", left: "-100px", willChange: "transform" }}>
        <div className="w-full h-full animate-float-slow animate-pulse-glow" style={{
          background: "radial-gradient(circle, rgba(139,92,246,0.18) 0%, rgba(139,92,246,0.06) 40%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(40px)",
        }} />
      </div>

      {/* Orb 2 — blue, top-right */}
      <div ref={wrap2} className="absolute" style={{ width: "600px", height: "600px", top: "10%", right: "-150px", willChange: "transform" }}>
        <div className="w-full h-full animate-float-medium animate-pulse-glow" style={{
          background: "radial-gradient(circle, rgba(59,130,246,0.15) 0%, rgba(59,130,246,0.05) 40%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(40px)",
          animationDelay: "2s",
        }} />
      </div>

      {/* Orb 3 — pink, mid-centre */}
      <div ref={wrap3} className="absolute" style={{ width: "500px", height: "500px", top: "40%", left: "30%", willChange: "transform" }}>
        <div className="w-full h-full animate-float-fast" style={{
          background: "radial-gradient(circle, rgba(236,72,153,0.10) 0%, rgba(236,72,153,0.03) 40%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(50px)",
          animationDelay: "1s",
        }} />
      </div>

      {/* Orb 4 — indigo, bottom-right */}
      <div ref={wrap4} className="absolute" style={{ width: "800px", height: "800px", bottom: "-300px", right: "10%", willChange: "transform" }}>
        <div className="w-full h-full animate-float-slow" style={{
          background: "radial-gradient(circle, rgba(99,102,241,0.12) 0%, rgba(99,102,241,0.04) 40%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(60px)",
          animationDelay: "3s",
        }} />
      </div>

      {/* Orb 5 — violet, mid-left */}
      <div ref={wrap5} className="absolute" style={{ width: "300px", height: "300px", top: "60%", left: "5%", willChange: "transform" }}>
        <div className="w-full h-full animate-float-medium" style={{
          background: "radial-gradient(circle, rgba(167,139,250,0.12) 0%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(30px)",
          animationDelay: "4s",
        }} />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-bg opacity-100" />
    </div>
  );
}
