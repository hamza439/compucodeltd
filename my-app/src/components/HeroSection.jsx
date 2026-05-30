import { useState, useEffect } from "react";

const features = [
  {
    title: "AI Powered EDiscovery Solution",
    icon: (
      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-red-400 to-orange-400 flex items-center justify-center">
        <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" className="w-8 h-8">
          <rect x="4" y="6" width="16" height="12" rx="2" />
          <circle cx="9" cy="12" r="1.2" fill="white" stroke="none" />
          <circle cx="15" cy="12" r="1.2" fill="white" stroke="none" />
          <path d="M9 15.5c1 .8 5 .8 6 0" strokeLinecap="round" />
          <path d="M8 6V4M16 6V4" strokeLinecap="round" />
          <path d="M2 10h2M20 10h2" strokeLinecap="round" />
        </svg>
      </div>
    ),
  },
  {
    title: "AI Powered Compliance Archiving And Content Preserve",
    icon: (
      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-red-500 to-rose-400 flex items-center justify-center">
        <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" className="w-8 h-8">
          <circle cx="12" cy="12" r="3" />
          <circle cx="19" cy="9" r="2" />
          <path d="M12 2v3M12 19v3M2 12h3M19 12h3" strokeLinecap="round" />
          <path d="M5.6 5.6l2 2M16.4 16.4l2 2M5.6 18.4l2-2M16.4 7.6l2-2" strokeLinecap="round" />
        </svg>
      </div>
    ),
  },
  {
    title: "Enterprise Knowledge Base Built With AI",
    icon: (
      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center">
        <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" className="w-8 h-8">
          <ellipse cx="12" cy="8" rx="7" ry="3" />
          <path d="M5 8v4c0 1.66 3.13 3 7 3s7-1.34 7-3V8" />
          <path d="M5 12v4c0 1.66 3.13 3 7 3s7-1.34 7-3v-4" />
        </svg>
      </div>
    ),
  },
];

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
        <section className="relative w-full h-[550px] overflow-visible">
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

          <div className="relative z-20 px-14 pt-16 max-w-5xl mx-auto">
            <p className="hero-label text-white text-[14px] tracking-[0.12em] uppercase mb-2 font-medium" style={{ fontFamily: "'Sora', sans-serif" }}>
              DATA INTELLIGENCE SOLUTIONS
            </p>
            <h1 className="hero-h1" style={{ fontFamily: "'Sora', sans-serif", fontSize: "clamp(1.8rem,4vw,3.2rem)", fontWeight: 700, lineHeight: 1.1, color: "white", textTransform: "uppercase" }}>
              Unified array of data solutions
              <br />
              powered by <span style={{ color: "#e53e2d" }}>Generative AI</span>
            </h1>
            <p className="hero-p text-white/80 text-[15px] leading-[1.5] mt-6 max-w-xl">
              Harness next-generation AI to transform your organisation archives,
              retrieves, and acts on critical data — at enterprise scale.
            </p>
            <div className="hero-btn mt-8">
              <button className="cta-btn bg-[#e53e2d] text-white text-[13px] tracking-[0.1em] uppercase px-6 py-3 font-medium">
                Explore Generative AI Data Archiving Solutions
              </button>
            </div>
          </div>
        </section>

        {/* ── CARDS ── */}
        <div className="relative z-30 px-14 pb-12">
          <div
            className="flex flex-row justify-center gap-5 items-stretch max-w-5xl mx-auto -mt-24
            max-sm:flex-col max-sm:max-w-sm max-sm:mx-auto max-sm:-mt-24 max-sm:gap-3"
          >
            {features.map((feature, index) => {
              const isActive = active === index;
              return (
                <div
                  key={index}
                  onClick={() => setActive(index)}
                  style={{
                    flex: "1 1 0",
                    minWidth: 0,
                    "--delay": `${0.75 + index * 0.12}s`,
                  }}
                  className={`card-item card-hover bg-white flex flex-col cursor-pointer
                    ${isActive
                      ? "border-[2.5px] border-[#e53e2d] -translate-y-1.5 z-10 card-active"
                      : "border border-gray-200"
                    }`}
                >
                  {/* Icon area */}
                  <div className="flex-1 flex items-center justify-center px-6 py-10">
                    <div className="icon-wrap">
                      {feature.icon}
                    </div>
                  </div>

                  {/* Red footer */}
                  <div className="w-full bg-[#e53e2d] px-5 pt-5 pb-4 flex-shrink-0">
                    <h3
                      className="text-[14px] font-bold text-white leading-snug text-center"
                      style={{ minHeight: "3.2em", display: "flex", alignItems: "center", justifyContent: "center" }}
                    >
                      {feature.title}
                    </h3>
                    <div className="flex justify-end mt-2.5">
                      <svg
                        className={`w-[17px] h-[17px] text-white/75 ${isActive ? "arrow-icon" : ""}`}
                        fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </>
  );
}