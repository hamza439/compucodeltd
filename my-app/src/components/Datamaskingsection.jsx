// import { useState } from "react";

// const cards = [
//   {
//     id: 0,
//     label: "Empowered\nAdvisors",
//     title: "Empowered Advisors",
//     desc: "Manage client relationships from proposal to trading & rebalancing to reporting in a user-friendly experience.",
//     link: "#",
//     stripes: false,
//     redTop: false,
//     cardStyle: {
//       width: "205px", height: "278px", left: "15px", top: "100px",
//       background: "linear-gradient(148deg,#f5fff0 0%,#eaff70 28%,#c0ff00 58%,#a8e800 100%)",
//       transform: "perspective(900px) rotateX(40deg) rotateY(-15deg) rotateZ(-10deg)",
//       boxShadow: "-20px 40px 70px rgba(0,0,0,0.75),inset 0 1px 0 rgba(255,255,255,0.5)",
//       zIndex: 12,
//     },
//     labelColor: "#1c3800",
//     labelPos: { bottom: "20px", left: "14px" },
//     btnPos: { left: "calc(15px + 80px)", top: "calc(100px + 115px)" },
//     popPos: { left: "0px", top: "295px" },
//   },
//   {
//     id: 1,
//     label: "Tax\nTransition",
//     title: "Tax Transition",
//     desc: "Overlay tax-smart approaches to optimize results while retaining personalization.",
//     link: "#",
//     stripes: true,
//     redTop: true,
//     cardStyle: {
//       width: "190px", height: "258px", left: "148px", top: "68px",
//       background: "linear-gradient(148deg,#2e2e2e 0%,#1e1e1e 50%,#141414 100%)",
//       transform: "perspective(900px) rotateX(33deg) rotateY(-9deg) rotateZ(-6deg)",
//       boxShadow: "-13px 28px 55px rgba(0,0,0,0.7)",
//       border: "1px solid rgba(255,255,255,0.06)",
//       zIndex: 8,
//     },
//     labelColor: "rgba(220,200,195,0.85)",
//     labelPos: { top: "16px", left: "13px" },
//     btnPos: { left: "calc(148px + 72px)", top: "calc(68px + 90px)" },
//     popPos: { left: "118px", top: "42px" },
//   },
//   {
//     id: 2,
//     label: "Centralized\nInvestment",
//     title: "Centralized Investment",
//     desc: "Streamline portfolio management with our proven solutions.",
//     link: "#",
//     stripes: true,
//     redTop: true,
//     cardStyle: {
//       width: "174px", height: "235px", left: "268px", top: "32px",
//       background: "linear-gradient(148deg,#252525 0%,#181818 50%,#101010 100%)",
//       transform: "perspective(900px) rotateX(27deg) rotateY(-4deg) rotateZ(-3deg)",
//       boxShadow: "-8px 18px 40px rgba(0,0,0,0.65)",
//       border: "1px solid rgba(255,255,255,0.05)",
//       zIndex: 4,
//     },
//     labelColor: "rgba(180,160,155,0.7)",
//     labelPos: { top: "14px", left: "12px" },
//     btnPos: { left: "calc(268px + 110px)", top: "calc(32px + 55px)" },
//     popPos: { left: "240px", top: "-5px" },
//   },
// ];

// export default function VestmarkSection() {
//   const [open, setOpen] = useState(-1);

//   const toggle = (i) => setOpen(open === i ? -1 : i);

//   return (
//     <section
//       id="sec-home"
//       className="min-h-screen flex items-center px-10 py-16 overflow-hidden"
//       style={{ background: "#181818", fontFamily: "'Helvetica Neue', Arial, sans-serif" }}
//     >
//       <div className="max-w-5xl w-full mx-auto grid grid-cols-2 gap-6 items-center">

//         {/* ── LEFT ── */}
//         <div>
//           {/* Heading — white + red accent (Image 2 style) */}
//           <h2
//             className="font-extrabold text-white leading-tight mb-4"
//             style={{ fontSize: "clamp(1.7rem,3vw,2.5rem)", letterSpacing: "-0.01em" }}
//           >
//             Data{" "}
//             <span style={{ color: "#e8402a" }}>Masking &amp;<br />Governance</span>
//           </h2>

//           {/* Description — muted gray */}
//           <p className="text-sm leading-relaxed mb-7" style={{ color: "#a0a0a0", maxWidth: "370px" }}>
//             Protect sensitive data and ensure compliance with our advanced data
//             masking and governance solutions.
//           </p>

//           {/* Image 2 exact button — outlined white, uppercase, arrow */}
//           <a
//             href="#"
//             className="inline-flex items-center gap-3 transition-colors duration-200"
//             style={{
//               border: "1px solid #ffffff",
//               color: "#ffffff",
//               background: "transparent",
//               fontSize: "0.68rem",
//               fontWeight: 700,
//               letterSpacing: "0.14em",
//               textTransform: "uppercase",
//               padding: "0.65rem 1.1rem",
//               textDecoration: "none",
//             }}
//             onMouseEnter={e => { e.currentTarget.style.background="#fff"; e.currentTarget.style.color="#181818"; }}
//             onMouseLeave={e => { e.currentTarget.style.background="transparent"; e.currentTarget.style.color="#fff"; }}
//           >
//             Learn More
//             <svg width="17" height="12" fill="none" viewBox="0 0 17 12">
//               <path fill="currentColor" d="M13.809 5.222 9.058 1.1l1.108-1.1 6.041 6-6.04 6-1.11-1.102 4.752-4.12H.207V5.222h13.602Z" />
//             </svg>
//           </a>

//           {/* Outsourced callout */}
//           <div
//             className="mt-8 rounded-md p-4"
//             style={{
//               background: "rgba(255,255,255,0.04)",
//               border: "1px solid rgba(255,255,255,0.08)",
//               maxWidth: "270px",
//             }}
//           >
//             <h4
//               className="text-xs font-bold uppercase mb-1"
//               style={{ fontSize: "0.58rem", letterSpacing: "0.15em", color: "#e8402a" }}
//             >
//               Outsourced Services
//             </h4>
//             <p className="text-xs leading-relaxed" style={{ color: "#888", fontSize: "0.76rem" }}>
//               In addition to providing software, we can handle operations and
//               trading to let you focus on clients.
//             </p>
//           </div>
//         </div>

//         {/* ── RIGHT — 3D Cards Scene ── */}
//         <div className="flex items-center justify-center">
//           <div className="relative" style={{ width: "430px", height: "410px" }}>

//             {cards.map((c) => (
//               <div key={c.id}>
//                 {/* Card */}
//                 <div
//                   className="absolute rounded-2xl overflow-hidden"
//                   style={c.cardStyle}
//                 >
//                   {/* Red top accent bar */}
//                   {c.redTop && (
//                     <div
//                       className="absolute top-0 left-0 right-0"
//                       style={{ height: "3px", background: "#e8402a", zIndex: 2 }}
//                     />
//                   )}
//                   {/* Vertical stripe texture */}
//                   {c.stripes && (
//                     <div
//                       className="absolute inset-0"
//                       style={{
//                         background:
//                           "repeating-linear-gradient(88deg,transparent 0px,transparent 11px,rgba(255,255,255,0.04) 11px,rgba(255,255,255,0.04) 12px)",
//                       }}
//                     />
//                   )}
//                   {/* Rotated vertical label */}
//                   <span
//                     className="absolute font-black uppercase whitespace-pre"
//                     style={{
//                       ...c.labelPos,
//                       fontSize: "0.48rem",
//                       letterSpacing: "0.1em",
//                       lineHeight: 1.35,
//                       color: c.labelColor,
//                       writingMode: "vertical-rl",
//                       transform: "rotate(180deg)",
//                       zIndex: 3,
//                     }}
//                   >
//                     {c.label}
//                   </span>
//                 </div>

//                 {/* + Button — red */}
//                 <button
//                   onClick={() => toggle(c.id)}
//                   className="absolute rounded-full flex items-center justify-center font-light transition-all duration-200"
//                   style={{
//                     ...c.btnPos,
//                     width: "46px",
//                     height: "46px",
//                     background: "#e8402a",
//                     color: "#fff",
//                     fontSize: "1.5rem",
//                     border: "none",
//                     cursor: "pointer",
//                     boxShadow: "0 4px 20px rgba(232,64,42,0.5)",
//                     zIndex: 30,
//                     lineHeight: 1,
//                   }}
//                   onMouseEnter={e => e.currentTarget.style.background = "#ff5540"}
//                   onMouseLeave={e => e.currentTarget.style.background = "#e8402a"}
//                 >
//                   {open === c.id ? "×" : "+"}
//                 </button>

//                 {/* Popup */}
//                 <div
//                   className="absolute rounded-xl"
//                   style={{
//                     ...c.popPos,
//                     width: "188px",
//                     padding: "1rem 1.1rem 0.9rem",
//                     background: "#1e1e1e",
//                     border: "1px solid rgba(232,64,42,0.45)",
//                     boxShadow: "0 12px 40px rgba(0,0,0,0.8)",
//                     zIndex: 50,
//                     opacity: open === c.id ? 1 : 0,
//                     pointerEvents: open === c.id ? "auto" : "none",
//                     transform: open === c.id
//                       ? "translateY(0) scale(1)"
//                       : "translateY(10px) scale(0.95)",
//                     transition: "opacity 0.22s, transform 0.22s",
//                   }}
//                 >
//                   <button
//                     onClick={() => toggle(c.id)}
//                     style={{
//                       position: "absolute", top: 7, right: 9,
//                       background: "none", border: "none",
//                       color: "#555", cursor: "pointer", fontSize: 12,
//                     }}
//                   >
//                     ✕
//                   </button>
//                   <h3 style={{ fontSize: "0.73rem", fontWeight: 700, color: "#e8402a", marginBottom: "0.3rem" }}>
//                     {c.title}
//                   </h3>
//                   <p style={{ fontSize: "0.69rem", color: "#888", lineHeight: 1.5, marginBottom: "0.5rem" }}>
//                     {c.desc}
//                   </p>
//                   <a href={c.link} style={{ fontSize: "0.67rem", color: "#fff", opacity: 0.8, textDecoration: "none" }}>
//                     Learn more →
//                   </a>
//                 </div>
//               </div>
//             ))}

//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }
import { useState } from "react";

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
  },
];

export default function VestmarkSection() {
  const [open, setOpen] = useState(-1);
  const toggle = (i) => setOpen(open === i ? -1 : i);

  return (
    <>
      <style>{`
        .vs-section {
          background: #181818;
          font-family: 'Helvetica Neue', Arial, sans-serif;
          overflow: hidden;
          padding: 64px 40px;
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

        @media (max-width: 768px) {
          .vs-section {
            padding: 48px 20px 40px;
          }
          .vs-inner {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .vs-left { order: 1; }
          .vs-cards-wrap { order: 2; }

          /* Scale down cards scene on mobile */
          .vs-cards-scene {
            width: 320px;
            height: 300px;
            transform: scale(0.74);
            transform-origin: top center;
          }
          /* Compensate for scale — reduce wrapper height */
          .vs-cards-wrap {
            height: 220px;
          }
        }

        @media (max-width: 400px) {
          .vs-cards-scene {
            transform: scale(0.6);
            transform-origin: top center;
          }
          .vs-cards-wrap {
            height: 180px;
          }
        }
      `}</style>

      <section className="vs-section">
        <div className="vs-inner">

          {/* ── LEFT ── */}
          <div className="vs-left">
            <h2
              className="font-extrabold text-white leading-tight mb-4"
              style={{ fontSize: "clamp(1.7rem,3vw,2.5rem)", letterSpacing: "-0.01em" }}
            >
              Data{" "}
              <span style={{ color: "#e8402a" }}>Masking &amp;<br />Governance</span>
            </h2>

            <p className="text-sm leading-relaxed mb-7" style={{ color: "#a0a0a0", maxWidth: "370px" }}>
              Protect sensitive data and ensure compliance with our advanced data
              masking and governance solutions.
            </p>

            <a
              href="/solutions/data-security"
              className="inline-flex items-center gap-3 transition-colors duration-200"
              style={{
                border: "1px solid #ffffff",
                color: "#ffffff",
                background: "transparent",
                fontSize: "0.68rem",
                fontWeight: 700,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                padding: "0.65rem 1.1rem",
                textDecoration: "none",
              }}
              onMouseEnter={e => { e.currentTarget.style.background="#fff"; e.currentTarget.style.color="#181818"; }}
              onMouseLeave={e => { e.currentTarget.style.background="transparent"; e.currentTarget.style.color="#fff"; }}
            >
              Learn More
              <svg width="17" height="12" fill="none" viewBox="0 0 17 12">
                <path fill="currentColor" d="M13.809 5.222 9.058 1.1l1.108-1.1 6.041 6-6.04 6-1.11-1.102 4.752-4.12H.207V5.222h13.602Z" />
              </svg>
            </a>

            <div
              className="mt-8 rounded-md p-4"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                maxWidth: "270px",
              }}
            >
              <h4
                className="text-xs font-bold uppercase mb-1"
                style={{ fontSize: "0.58rem", letterSpacing: "0.15em", color: "#e8402a" }}
              >
                Outsourced Services
              </h4>
              <p className="text-xs leading-relaxed" style={{ color: "#888", fontSize: "0.76rem" }}>
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
                  <div className="absolute rounded-2xl overflow-hidden" style={c.cardStyle}>
                    {c.redTop && (
                      <div className="absolute top-0 left-0 right-0" style={{ height: "3px", background: "#e8402a", zIndex: 2 }} />
                    )}
                    {c.stripes && (
                      <div
                        className="absolute inset-0"
                        style={{
                          background: "repeating-linear-gradient(88deg,transparent 0px,transparent 11px,rgba(255,255,255,0.04) 11px,rgba(255,255,255,0.04) 12px)",
                        }}
                      />
                    )}
                    <span
                      className="absolute font-black uppercase whitespace-pre"
                      style={{
                        ...c.labelPos,
                        fontSize: "0.48rem",
                        letterSpacing: "0.1em",
                        lineHeight: 1.35,
                        color: c.labelColor,
                        writingMode: "vertical-rl",
                        transform: "rotate(180deg)",
                        zIndex: 3,
                      }}
                    >
                      {c.label}
                    </span>
                  </div>

                  {/* + Button */}
                  <button
                    onClick={() => toggle(c.id)}
                    className="absolute rounded-full flex items-center justify-center font-light transition-all duration-200"
                    style={{
                      ...c.btnPos,
                      width: "46px", height: "46px",
                      background: "#e8402a",
                      color: "#fff",
                      fontSize: "1.5rem",
                      border: "none",
                      cursor: "pointer",
                      boxShadow: "0 4px 20px rgba(232,64,42,0.5)",
                      zIndex: 30,
                      lineHeight: 1,
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
                      width: "188px",
                      padding: "1rem 1.1rem 0.9rem",
                      background: "#1e1e1e",
                      border: "1px solid rgba(232,64,42,0.45)",
                      boxShadow: "0 12px 40px rgba(0,0,0,0.8)",
                      zIndex: 50,
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