
import { useState, useEffect, useRef } from "react";

const cards = [
  {
    id: 0,
    label: "Empowered\nAdvisors",
    title: "Empowered Advisors",
    desc: "Manage client relationships from proposal to trading & rebalancing to reporting in a user-friendly experience.",
    link: "#",
    stripes: true,
    redTop: true,
    cardStyle: {
      width: "205px", height: "278px", left: "15px", top: "100px",
      background: "linear-gradient(148deg,#2a2a2a 0%,#1a1a1a 50%,#111 100%)",
      transform: "perspective(900px) rotateX(40deg) rotateY(-15deg) rotateZ(-10deg)",
      boxShadow: "-20px 40px 70px rgba(0,0,0,0.75),inset 0 1px 0 rgba(255,255,255,0.07)",
      border: "1px solid rgba(255,255,255,0.07)",
      zIndex: 12,
    },
    labelColor: "rgba(220,200,195,0.85)",
    labelPos: { bottom: "20px", left: "14px" },
    btnPos: { left: "calc(15px + 80px)", top: "calc(100px + 115px)" },
    popPos: { left: "0px", top: "295px" },
    animDelay: "0ms",
  },
  {
    id: 1,
    label: "Tax\nTransition",
    title: "Tax Transition",
    desc: "Overlay tax-smart approaches to optimize results while retaining personalization.",
    link: "#",
    stripes: true,
    redTop: true,
    cardStyle: {
      width: "190px", height: "258px", left: "148px", top: "68px",
      background: "linear-gradient(148deg,#2e2e2e 0%,#1e1e1e 50%,#141414 100%)",
      transform: "perspective(900px) rotateX(33deg) rotateY(-9deg) rotateZ(-6deg)",
      boxShadow: "-13px 28px 55px rgba(0,0,0,0.7)",
      border: "1px solid rgba(255,255,255,0.06)",
      zIndex: 8,
    },
    labelColor: "rgba(220,200,195,0.85)",
    labelPos: { top: "16px", left: "13px" },
    btnPos: { left: "calc(148px + 72px)", top: "calc(68px + 90px)" },
    popPos: { left: "118px", top: "42px" },
    animDelay: "150ms",
  },
  {
    id: 2,
    label: "Centralized\nInvestment",
    title: "Centralized Investment",
    desc: "Streamline portfolio management with our proven solutions.",
    link: "#",
    stripes: true,
    redTop: true,
    cardStyle: {
      width: "174px", height: "235px", left: "268px", top: "32px",
      background: "linear-gradient(148deg,#252525 0%,#181818 50%,#101010 100%)",
      transform: "perspective(900px) rotateX(27deg) rotateY(-4deg) rotateZ(-3deg)",
      boxShadow: "-8px 18px 40px rgba(0,0,0,0.65)",
      border: "1px solid rgba(255,255,255,0.05)",
      zIndex: 4,
    },
    labelColor: "rgba(180,160,155,0.7)",
    labelPos: { top: "14px", left: "12px" },
    btnPos: { left: "calc(268px + 110px)", top: "calc(32px + 55px)" },
    popPos: { left: "240px", top: "-5px" },
    animDelay: "300ms",
  },
];

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

export default function VestmarkSection() {
  const [open, setOpen] = useState(-1);
  const [sectionRef, visible] = useInView(0.1);
  const toggle = (i) => setOpen(open === i ? -1 : i);

  return (
    <>
      <style>{`
        .vs-section {
          background: #8B2626;
          font-family: 'Helvetica Neue', Arial, sans-serif;
          overflow: hidden;
          padding: 32px 40px; /* Slimmer height */
        }
        .vs-inner {
          max-width: 900px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          align-items: center;
        }
        .vs-cards-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .vs-cards-scene {
          position: relative;
          width: 430px;
          height: 410px;
          flex-shrink: 0;
        }

        /* ── Animations ── */
        .vs-fade-up {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .vs-fade-up.vs-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .vs-slide-right {
          opacity: 0;
          transform: translateX(40px);
          transition: opacity 0.65s ease, transform 0.65s ease;
        }
        .vs-slide-right.vs-visible {
          opacity: 1;
          transform: translateX(0);
        }

        .vs-card-anim {
          opacity: 0;
          transform: translateY(50px) scale(0.92);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .vs-card-anim.vs-visible {
          opacity: 1;
          transform: translateY(0) scale(1);
        }

        .vs-btn-anim {
          opacity: 0;
          transform: scale(0.5);
          transition: opacity 0.4s ease, transform 0.4s ease;
        }
        .vs-btn-anim.vs-visible {
          opacity: 1;
          transform: scale(1);
        }

        /* ── Learn More hover ── */
        .vs-learn-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          border: 1px solid #ffffff;
          color: #ffffff;
          background: transparent;
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          padding: 0.65rem 1.1rem;
          text-decoration: none;
          transition: background 0.2s, color 0.2s, transform 0.2s;
        }
        .vs-learn-btn:hover {
          background: #fff;
          color: #181818;
          transform: translateX(4px);
        }
        .vs-learn-btn svg {
          transition: transform 0.2s;
        }
        .vs-learn-btn:hover svg {
          transform: translateX(4px);
        }

        /* ── Info card hover ── */
        .vs-info-card {
          margin-top: 2rem;
          border-radius: 0.375rem;
          padding: 1rem;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          max-width: 270px;
          transition: background 0.25s, border-color 0.25s, transform 0.25s;
        }
        .vs-info-card:hover {
          background: rgba(255,255,255,0.09);
          border-color: rgba(255,255,255,0.18);
          transform: translateY(-2px);
        }

        /* ── Plus button pulse ── */
        @keyframes vs-pulse {
          0%, 100% { box-shadow: 0 4px 20px rgba(232,64,42,0.5); }
          50% { box-shadow: 0 4px 28px rgba(232,64,42,0.85); }
        }
        .vs-plus-btn {
          animation: vs-pulse 2.2s ease-in-out infinite;
        }

        @media (max-width: 768px) {
          .vs-section { padding: 48px 20px 40px; }
          .vs-inner { grid-template-columns: 1fr; gap: 40px; }
          .vs-left { order: 1; }
          .vs-cards-wrap { order: 2; }
          .vs-cards-scene { width: 320px; height: 300px; transform: scale(0.74); transform-origin: top center; }
          .vs-cards-wrap { height: 220px; }
        }
        @media (max-width: 400px) {
          .vs-cards-scene { transform: scale(0.6); transform-origin: top center; }
          .vs-cards-wrap { height: 180px; }
        }
      `}</style>

      <section className="vs-section" ref={sectionRef}>
        <div className="vs-inner">

          {/* ── LEFT ── */}
          <div className="vs-left">

            <h2
              className={`font-extrabold text-white leading-tight mb-4 vs-fade-up ${visible ? "vs-visible" : ""}`}
              style={{ fontSize: "clamp(1.7rem,3vw,2.5rem)", letterSpacing: "-0.01em", transitionDelay: "0ms" }}
            >
              Data Masking &amp;<br />Governance
            </h2>

            <p
              className={`text-sm leading-relaxed mb-7 vs-fade-up ${visible ? "vs-visible" : ""}`}
              style={{ color: "white", maxWidth: "370px", transitionDelay: "120ms" }}
            >
              Protect sensitive data and ensure compliance with our advanced data
              masking and governance solutions.
            </p>

            <div className={`vs-fade-up ${visible ? "vs-visible" : ""}`} style={{ transitionDelay: "240ms" }}>
              <a href="/solutions/data-security" className="vs-learn-btn">
                Learn More
                <svg width="17" height="12" fill="none" viewBox="0 0 17 12">
                  <path fill="currentColor" d="M13.809 5.222 9.058 1.1l1.108-1.1 6.041 6-6.04 6-1.11-1.102 4.752-4.12H.207V5.222h13.602Z" />
                </svg>
              </a>
            </div>

            <div className={`vs-info-card vs-fade-up ${visible ? "vs-visible" : ""}`} style={{ transitionDelay: "360ms" }}>
              <h4 className="text-xs font-bold uppercase mb-1" style={{ fontSize: "0.58rem", letterSpacing: "0.15em", color: "#e8402a" }}>
                Outsourced Services
              </h4>
              <p className="text-xs leading-relaxed" style={{ color: "white", fontSize: "0.76rem" }}>
                In addition to providing software, we can handle operations and
                trading to let you focus on clients.
              </p>
            </div>
          </div>

          {/* ── RIGHT — 3D Cards Scene ── */}
          <div className="vs-cards-wrap">
            <div className="vs-cards-scene">
              {cards.map((c) => (
                <div key={c.id}>
                  {/* Card */}
                  <div
                    className={`absolute rounded-2xl overflow-hidden vs-slide-right ${visible ? "vs-visible" : ""}`}
                    style={{ ...c.cardStyle, transitionDelay: c.animDelay }}
                  >
                    {c.redTop && (
                      <div className="absolute top-0 left-0 right-0" style={{ height: "3px", background: "#e8402a", zIndex: 2 }} />
                    )}
                    {c.stripes && (
                      <div
                        className="absolute inset-0"
                        style={{ background: "repeating-linear-gradient(88deg,transparent 0px,transparent 11px,rgba(255,255,255,0.04) 11px,rgba(255,255,255,0.04) 12px)" }}
                      />
                    )}
                    <span
                      className="absolute font-black uppercase whitespace-pre"
                      style={{
                        ...c.labelPos,
                        fontSize: "0.48rem", letterSpacing: "0.1em", lineHeight: 1.35,
                        color: c.labelColor, writingMode: "vertical-rl",
                        transform: "rotate(180deg)", zIndex: 3,
                      }}
                    >
                      {c.label}
                    </span>
                  </div>

                  {/* + Button */}
                  <button
                    onClick={() => toggle(c.id)}
                    className={`absolute rounded-full flex items-center justify-center font-light vs-plus-btn vs-btn-anim ${visible ? "vs-visible" : ""}`}
                    style={{
                      ...c.btnPos,
                      width: "46px", height: "46px",
                      background: "#e8402a", color: "#fff",
                      fontSize: "1.5rem", border: "none", cursor: "pointer",
                      zIndex: 30, lineHeight: 1,
                      transitionDelay: `calc(${c.animDelay} + 200ms)`,
                    }}
                    onMouseEnter={e => e.currentTarget.style.background = "#ff5540"}
                    onMouseLeave={e => e.currentTarget.style.background = "#e8402a"}
                  >
                    {open === c.id ? "×" : "+"}
                  </button>

                  {/* Popup */}
                  <div
                    className="absolute rounded-xl"
                    style={{
                      ...c.popPos,
                      width: "188px", padding: "1rem 1.1rem 0.9rem",
                      background: "#1e1e1e", border: "1px solid rgba(232,64,42,0.45)",
                      boxShadow: "0 12px 40px rgba(0,0,0,0.8)", zIndex: 50,
                      opacity: open === c.id ? 1 : 0,
                      pointerEvents: open === c.id ? "auto" : "none",
                      transform: open === c.id ? "translateY(0) scale(1)" : "translateY(10px) scale(0.95)",
                      transition: "opacity 0.22s, transform 0.22s",
                    }}
                  >
                    <button
                      onClick={() => toggle(c.id)}
                      style={{ position: "absolute", top: 7, right: 9, background: "none", border: "none", color: "#555", cursor: "pointer", fontSize: 12 }}
                    >✕</button>
                    <h3 style={{ fontSize: "0.73rem", fontWeight: 700, color: "#e8402a", marginBottom: "0.3rem" }}>{c.title}</h3>
                    <p style={{ fontSize: "0.69rem", color: "#888", lineHeight: 1.5, marginBottom: "0.5rem" }}>{c.desc}</p>
                    <a href={c.link} style={{ fontSize: "0.67rem", color: "#fff", opacity: 0.8, textDecoration: "none" }}>Learn more →</a>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  );
}