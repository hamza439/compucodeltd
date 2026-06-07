import { useState, useEffect } from "react";


export default function HeroWithCards() {
  const [active, setActive] = useState(1);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // trigger entrance animations after mount
    const t = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <style>{`
        /* ── Keyframes ── */
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes slideLeft {
          from { opacity: 0; transform: translateX(-32px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes shimmer {
          0%   { background-position: -400px 0; }
          100% { background-position: 400px 0; }
        }
        @keyframes cardRise {
          from { opacity: 0; transform: translateY(40px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes arrowPulse {
          0%, 100% { transform: translateX(0); opacity: 0.75; }
          50%       { transform: translateX(4px); opacity: 1; }
        }
        @keyframes iconFloat {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-5px); }
        }
        @keyframes borderGlow {
          0%, 100% { box-shadow: 0 10px 36px rgba(229,62,45,0.14); }
          50%       { box-shadow: 0 10px 48px rgba(229,62,45,0.32); }
        }

        /* ── Hero text entrance ── */
        .hero-label  { opacity: 0; }
        .hero-h1     { opacity: 0; }
        .hero-p      { opacity: 0; }
        .hero-btn    { opacity: 0; }

        .mounted .hero-label { animation: slideLeft 0.55s cubic-bezier(.22,.68,0,1.2) 0.15s forwards; }
        .mounted .hero-h1    { animation: fadeUp   0.65s cubic-bezier(.22,.68,0,1.2) 0.3s  forwards; }
        .mounted .hero-p     { animation: fadeUp   0.55s cubic-bezier(.22,.68,0,1.2) 0.5s  forwards; }
        .mounted .hero-btn   { animation: fadeUp   0.55s cubic-bezier(.22,.68,0,1.2) 0.65s forwards; }

        /* ── Shimmer on the hero image overlay ── */
        .hero-shimmer::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(
            105deg,
            transparent 30%,
            rgba(255,255,255,0.07) 50%,
            transparent 70%
          );
          background-size: 800px 100%;
          animation: shimmer 3.5s linear infinite;
          pointer-events: none;
        }

        /* ── Card entrance ── */
        .card-item { opacity: 0; }
        .mounted .card-item { animation: cardRise 0.6s cubic-bezier(.22,.68,0,1.2) var(--delay) forwards; }

        /* ── Active card pulse glow ── */
        .card-active { animation: borderGlow 2.4s ease-in-out infinite; }

        /* ── Icon float on active card ── */
        .card-active .icon-wrap { animation: iconFloat 2.8s ease-in-out infinite; }

        /* ── Arrow pulse ── */
        .arrow-icon { animation: arrowPulse 1.6s ease-in-out infinite; }

        /* ── Button shimmer on hover ── */
        .cta-btn {
          position: relative;
          overflow: hidden;
          transition: background 0.2s ease, transform 0.15s ease, box-shadow 0.2s ease;
        }
        .cta-btn::before {
          content: '';
          position: absolute;
          top: 0; left: -100%; width: 60%; height: 100%;
          background: linear-gradient(120deg, transparent, rgba(255,255,255,0.22), transparent);
          transition: left 0.45s ease;
        }
        .cta-btn:hover::before { left: 140%; }
        .cta-btn:hover {
          background: #c0392b !important;
          transform: translateY(-1px);
          box-shadow: 0 6px 20px rgba(229,62,45,0.4);
        }
        .cta-btn:active { transform: translateY(0); }

        /* ── Card hover lift (non-active) ── */
        .card-hover:hover:not(.card-active) {
          transform: translateY(-4px);
          box-shadow: 0 8px 24px rgba(0,0,0,0.1);
        }
        .card-hover { transition: transform 0.25s ease, box-shadow 0.25s ease; }
      `}</style>

      <div className={`w-full font-sans ${mounted ? "mounted" : ""}`}>

        {/* ── BANNER ── */}
        <section className="relative w-full min-h-[100vh] overflow-visible flex flex-col justify-center pb-24">
          <div className="absolute inset-0 overflow-hidden hero-shimmer">
            <img
              src="https://compucodeltd.com/images/banners/slider-06.jpg"
              alt="hero"
              className="w-full h-full object-cover object-[center_30%]"
              style={{ animation: mounted ? "fadeIn 0.8s ease 0.05s both" : "none" }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/15" />
          </div>

          <svg
            className="absolute bottom-0 left-0 z-10 w-[210px] h-[320px] pointer-events-none"
            viewBox="0 0 210 320" fill="none"
            style={{ animation: mounted ? "fadeIn 0.6s ease 0.1s both" : "none" }}
          >
            <polygon points="0,320 0,0 210,320" fill="#e53e2d" opacity="0.46" />
            <polygon points="0,320 0,118 120,320" fill="rgba(0,0,0,0.25)" />
          </svg>

          <div className="relative z-20 px-14 pt-16 max-w-5xl mx-auto text-center flex flex-col items-center">
            <p className="hero-label text-white text-[14px] tracking-[0.12em] uppercase mb-2 font-medium" style={{ fontFamily: "'Sora', sans-serif" }}>
              DATA INTELLIGENCE SOLUTIONS
            </p>
            <h1 className="hero-h1" style={{ fontFamily: "'Sora', sans-serif", fontSize: "28px", fontWeight: 500, lineHeight: "34px", color: "white" }}>
              Unified array of Data Solutions
              <br />
              Powered by <span>Generative AI</span>
            </h1>
            <p className="hero-p text-white/80 text-[15px] leading-[1.5] mt-6 max-w-xl text-center">
              Harness next-generation AI to transform your organisation archives,
              retrieves, and acts on critical data — at enterprise scale.
            </p>
            <div className="hero-btn mt-8">
              <button className="cta-btn bg-[#E84A3B] text-white text-[13px] tracking-[0.1em] uppercase px-6 py-3 font-medium">
                Explore Generative AI Data Archiving Solutions
              </button>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}