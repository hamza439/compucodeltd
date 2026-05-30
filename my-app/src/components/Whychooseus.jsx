
// // ── Inject Google Fonts once ──
// const _fontLink = document.createElement("link");
// _fontLink.rel = "stylesheet";
// _fontLink.href =
//   "https://fonts.googleapis.com/css2?family=Sora:wght@600&family=DM+Sans:wght@400;500&display=swap";
// if (!document.head.querySelector(`link[href="${_fontLink.href}"]`)) {
//   document.head.appendChild(_fontLink);
// }
// const _styleId = "cc-fonts";
// if (!document.getElementById(_styleId)) {
//   const s = document.createElement("style");
//   s.id = _styleId;
//   s.textContent = `
//     .sora-semibold-600   { font-family:'Sora',sans-serif;    font-weight:600; }
//     .dm-sans-regular-400 { font-family:'DM Sans',sans-serif; font-weight:400; }
//   `;
//   document.head.appendChild(s);
// }

// // ── Card data — swap icons/text freely ──
// const cards = [
//   {
//     emoji: "🎯",
//     bg: "bg-red-500",
//     title: "Process Automation with Generative AI",
//     text: "Automate complex workflows end-to-end using Generative AI — eliminating repetitive tasks and accelerating operations across every business unit.",
//   },
//   {
//     emoji: "🧩",
//     bg: "bg-teal-500",
//     title: "Application Development powered by AI",
//     text: "Build smarter, faster applications tailored to your business — powered by Generative AI for intelligent features and accelerated delivery.",
//   },
//   {
//     emoji: "📊",
//     bg: "bg-blue-500",
//     title: "Advanced Analytics with Generative AI",
//     text: "Transform raw data into actionable insights. Our AI-powered analytics surfaces patterns and predictions your team can act on immediately.",
//   },
//   {
//     emoji: "🛡️",
//     bg: "bg-orange-500",
//     title: "AI-driven Data Security, Migration & Integration",
//     text: "Secure your data assets with AI-enhanced threat detection, seamless migration pipelines, and robust system integration frameworks.",
//   },
//   {
//     emoji: "💬",
//     bg: "bg-green-500",
//     title: "Message / Email Solution",
//     text: "Enterprise messaging and email platforms powered by AI — unifying SMS, email, and notifications with automated routing and response workflows.",
//   },
//   {
//     emoji: "🚀",
//     bg: "bg-purple-500",
//     title: "Cloud Services with AI Integration",
//     text: "Deploy scalable cloud infrastructure enriched with AI capabilities — delivering real-time insights and intelligent automation in the cloud.",
//   },
//   {
//     emoji: "🔄",
//     bg: "bg-cyan-500",
//     title: "Hybrid Migration enabled by AI",
//     text: "Seamlessly migrate on-premises workloads to hybrid or full-cloud environments — guided by AI to minimise risk and downtime.",
//   },
//   {
//     emoji: "🏢",
//     bg: "bg-indigo-500",
//     title: "Datacenter Transformation",
//     text: "Modernise your infrastructure with AI-optimised datacenter strategies — cutting costs, improving resilience, and future-proofing your operations.",
//   },
//   {
//     emoji: "💼",
//     bg: "bg-rose-500",
//     title: "Career Support & Placement",
//     text: "Get dedicated career guidance, resume workshops, mock interviews, and access to our hiring partner network. We don't just train you — we help you get hired.",
//   },
// ];

// export default function WhyChooseUs() {
//   return (
//     <section
//       className="w-full py-14 sm:py-20 md:py-24 px-4 sm:px-6"
//       style={{ background: "linear-gradient(160deg,#0d1117 0%,#111827 60%,#0d1117 100%)" }}
//     >
//       <div className="max-w-6xl mx-auto">

//         {/* ── Section header ── */}
//         <div className="text-center mb-10 sm:mb-14">
//           <p className="text-[10px] sm:text-xs tracking-widest uppercase text-white/50 dm-sans-regular-400 mb-2 sm:mb-3">
//             Our Solutions
//           </p>
//           <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl sora-semibold-600 text-white leading-tight">
//             Why Choose{" "}
//             <span style={{ color: "#e53e2d" }}>Compucode</span>?
//           </h2>
//           <p className="mt-3 sm:mt-4 text-sm sm:text-base dm-sans-regular-400 text-white/60 max-w-2xl mx-auto leading-relaxed">
//             From AI-powered automation to enterprise infrastructure — every
//             solution is built to connect your business goals with scalable,
//             secure technology.
//           </p>
//         </div>

//         {/* ── Card grid ── */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
//           {cards.map(({ emoji, bg, title, text }) => (
//             <div
//               key={title}
//               className="group relative rounded-2xl p-5 sm:p-6 border border-white/[0.07] hover:border-white/20 transition-all duration-300 cursor-default"
//               style={{ background: "rgba(255,255,255,0.04)" }}
//             >
//               {/* subtle hover glow */}
//               <div
//                 className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
//                 style={{
//                   background:
//                     "radial-gradient(ellipse at top left, rgba(229,62,45,0.08) 0%, transparent 70%)",
//                 }}
//               />

//               {/* Icon badge */}
//               <div
//                 className={`relative w-10 h-10 sm:w-11 sm:h-11 rounded-xl ${bg} bg-opacity-80 flex items-center justify-center mb-4 text-lg sm:text-xl`}
//               >
//                 {emoji}
//               </div>

//               {/* Title */}
//               <h3 className="relative sora-semibold-600 text-white text-sm sm:text-base leading-snug mb-2 sm:mb-3">
//                 {title}
//               </h3>

//               {/* Body */}
//               <p className="relative dm-sans-regular-400 text-white/55 text-xs sm:text-sm leading-relaxed">
//                 {text}
//               </p>
//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }

// WhyChooseUs.jsx
// Dark card grid section — Image 1 layout, Image 2 color theme (#e53e2d)
// Fonts: Sora 600 (headings) + DM Sans 400 (body)
// Fully responsive: 1 col mobile → 2 col tablet → 3 col desktop

// ── Inject Google Fonts once ──
// WhyChooseUs.jsx — All 14 solutions from the navbar
// Layout: Image 1 dark card grid style | Theme: white/light (#e53e2d accent)
// Fonts: Sora 600 (headings) | DM Sans 400 (body)
// Responsive: 1 col mobile → 2 col tablet → 3 col desktop

// const _fontLink = document.createElement("link");
// _fontLink.rel = "stylesheet";
// _fontLink.href =
//   "https://fonts.googleapis.com/css2?family=Sora:wght@600&family=DM+Sans:wght@400;500&display=swap";
// if (!document.head.querySelector(`link[href="${_fontLink.href}"]`)) {
//   document.head.appendChild(_fontLink);
// }
// const _styleId = "cc-fonts";
// if (!document.getElementById(_styleId)) {
//   const s = document.createElement("style");
//   s.id = _styleId;
//   s.textContent = `
//     .sora-semibold-600   { font-family:'Sora',sans-serif;    font-weight:600; }
//     .dm-sans-regular-400 { font-family:'DM Sans',sans-serif; font-weight:400; }
//   `;
//   document.head.appendChild(s);
// }

// // ── All 14 solutions ──
// const cards = [
//   {
//     emoji: "🎯",
//     bg: "bg-red-500",
//     title: "Process Automation with Generative AI",
//     text: "Automate complex workflows end-to-end using Generative AI — eliminating repetitive tasks and accelerating operations across every business unit.",
//   },
//   {
//     emoji: "🧩",
//     bg: "bg-teal-500",
//     title: "Application Development powered by AI",
//     text: "Build smarter, faster applications tailored to your business — powered by Generative AI for intelligent features and accelerated delivery.",
//   },
//   {
//     emoji: "🗄️",
//     bg: "bg-sky-500",
//     title: "AI-enhanced Data Archiving",
//     text: "Intelligent data storage solutions powered by AI — automatically classify, compress, and archive your data with smart retention policies.",
//   },
//   {
//     emoji: "📄",
//     bg: "bg-violet-500",
//     title: "Smart Document Archiving with AI",
//     text: "AI-driven document management that captures, indexes, and retrieves critical documents instantly — reducing manual filing and human error.",
//   },
//   {
//     emoji: "🛡️",
//     bg: "bg-orange-500",
//     title: "AI-driven Data Security, Migration & Integration",
//     text: "Secure your data assets with AI-enhanced threat detection, seamless migration pipelines, and robust system integration frameworks.",
//   },
//   {
//     emoji: "📊",
//     bg: "bg-blue-500",
//     title: "Advanced Analytics with Generative AI",
//     text: "Transform raw data into actionable insights. Our AI-powered analytics surfaces patterns and predictions your team can act on immediately.",
//   },
//   {
//     emoji: "🔁",
//     bg: "bg-amber-500",
//     title: "AI-optimized Business Continuity",
//     text: "Keep operations running with AI-monitored continuity plans — proactively detecting risks and triggering automated failover before disruptions occur.",
//   },
//   {
//     emoji: "🏢",
//     bg: "bg-indigo-500",
//     title: "Datacenter Transformation",
//     text: "Modernise your infrastructure with AI-optimised datacenter strategies — cutting costs, improving resilience, and future-proofing your operations.",
//   },
//   {
//     emoji: "☁️",
//     bg: "bg-purple-500",
//     title: "Cloud Services with AI Integration",
//     text: "Deploy scalable cloud infrastructure enriched with AI capabilities — delivering real-time insights and intelligent automation in the cloud.",
//   },
//   {
//     emoji: "🔄",
//     bg: "bg-cyan-500",
//     title: "Hybrid Migration enabled by AI",
//     text: "Seamlessly migrate on-premises workloads to hybrid or full-cloud environments — guided by AI to minimise risk and downtime.",
//   },
//   {
//     emoji: "🖧",
//     bg: "bg-lime-600",
//     title: "Infrastructure Virtualisation",
//     text: "Virtual infrastructure solutions that consolidate physical hardware into flexible, scalable virtual environments — reducing cost and complexity.",
//   },
 
//   {
//     emoji: "💬",
//     bg: "bg-green-500",
//     title: " eDiscovery &amp; Compliance Archiving",
//     text: "Enterprise messaging and email platforms powered by AI — unifying SMS, email, and notifications with automated routing and response workflows.",
//   },

// ];

// export default function WhyChooseUs() {
//   return (
//     <section className="w-full py-14 sm:py-20 md:py-24 px-4 sm:px-6 bg-white">
//       <div className="max-w-6xl mx-auto">

//         {/* ── Section header ── */}
//         <div className="text-center mb-10 sm:mb-14">
          
//           <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl sora-semibold-600 text-gray-900 leading-tight">
//           Our Solutions{" "}
//           </h2>
//           <p className="mt-3 sm:mt-4 text-sm sm:text-base dm-sans-regular-400 text-gray-500 max-w-2xl mx-auto leading-relaxed">
//             From AI-powered automation to enterprise infrastructure — every
//             solution is built to connect your business goals with scalable,
//             secure technology.
//           </p>
//         </div>

//         {/* ── Card grid — 14 cards ── */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
//           {cards.map(({ emoji, bg, title, text }) => (
//             <div
//               key={title}
//               className="group relative rounded-2xl p-5 sm:p-6 border border-gray-100 hover:border-[#e53e2d]/30 hover:shadow-md transition-all duration-300 cursor-default bg-[#fafafa]"
//             >
//               {/* hover glow */}
//               <div
//                 className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
//                 style={{
//                   background:
//                     "radial-gradient(ellipse at top left, rgba(229,62,45,0.07) 0%, transparent 70%)",
//                 }}
//               />

//               {/* Icon badge */}
//               <div
//                 className={`relative w-10 h-10 sm:w-11 sm:h-11 rounded-xl ${bg} bg-opacity-80 flex items-center justify-center mb-4 text-lg sm:text-xl`}
//               >
//                 {emoji}
//               </div>

//               {/* Title */}
//               <h3 className="relative sora-semibold-600 text-gray-900 text-sm sm:text-base leading-snug mb-2 sm:mb-3">
//                 {title}
//               </h3>

//               {/* Body */}
//               <p className="relative dm-sans-regular-400 text-gray-500 text-xs sm:text-sm leading-relaxed">
//                 {text}
//               </p>
//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }

// import { useState, useEffect, useRef } from "react";

// const cards = [
//   {
//     img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
//     title: "On Line 24/7 Global Configuration and Deployment",
//     bullets: [
//       "Enterprise Email Archive Suite",
//       "Enterprise Archive Search & Discovery",
//       "Cloud Archive eDiscovery Content Security",
//       "Global Partners Network",
//       "On Microsoft Exchange & Office 365",
//     ],
//   },
//   {
//     img: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&q=80",
//     title: "Compliance Archiving eDiscovery DLP Protecting IP & PII",
//     bullets: [
//       "Case Management & Litigation Support",
//       "Regulatory Compliance Module",
//       "HIPAA Compliance Solution",
//       "Compliance – Regulatory Overviews",
//       "Supervisory Review Discovery",
//     ],
//   },
//   {
//     img: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80",
//     title: "Cloud Storage Archiving eDiscovery & Backup",
//     bullets: [
//       "Comparable Value for Office 365",
//       "Protecting PII in Files & OneDrive",
//       "SharePoint Archive & Management",
//       "Advanced eDiscovery for Google G-Suite",
//     ],
//   },
//   {
//     img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
//     title: "Process Automation with Generative AI",
//     bullets: [
//       "Automate complex workflows end-to-end",
//       "Eliminate repetitive manual tasks",
//       "Accelerate operations across business units",
//       "AI-driven process optimization",
//     ],
//   },
//   {
//     img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80",
//     title: "Application Development powered by AI",
//     bullets: [
//       "Smarter, faster custom applications",
//       "Generative AI for intelligent features",
//       "Accelerated delivery pipelines",
//       "Business-tailored AI solutions",
//     ],
//   },
//   {
//     img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
//     title: "AI-enhanced Data Archiving",
//     bullets: [
//       "Intelligent data storage solutions",
//       "Auto-classify and compress data",
//       "Smart retention policies",
//       "AI-powered data lifecycle management",
//     ],
//   },
//   {
//     img: "https://images.unsplash.com/photo-1568992688065-536aad8a12f6?w=800&q=80",
//     title: "Smart Document Archiving with AI",
//     bullets: [
//       "AI-driven document management",
//       "Captures, indexes, and retrieves instantly",
//       "Reduce manual filing and human error",
//       "Critical document retrieval in seconds",
//     ],
//   },
//   {
//     img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
//     title: "AI-driven Data Security, Migration & Integration",
//     bullets: [
//       "AI-enhanced threat detection",
//       "Seamless migration pipelines",
//       "Robust system integration frameworks",
//       "Secure data assets end-to-end",
//     ],
//   },
//   {
//     img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
//     title: "Advanced Analytics with Generative AI",
//     bullets: [
//       "Transform raw data into insights",
//       "AI-powered pattern recognition",
//       "Actionable real-time predictions",
//       "Surfaces trends your team can act on",
//     ],
//   },
//   {
//     img: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80",
//     title: "AI-optimized Business Continuity",
//     bullets: [
//       "AI-monitored continuity plans",
//       "Proactive risk detection",
//       "Automated failover triggers",
//       "Zero-disruption operations",
//     ],
//   },
//   {
//     img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
//     title: "Datacenter Transformation",
//     bullets: [
//       "AI-optimised datacenter strategies",
//       "Cut costs and improve resilience",
//       "Future-proof infrastructure",
//       "Modern datacenter modernisation",
//     ],
//   },
//   {
//     img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
//     title: "eDiscovery & Compliance Archiving",
//     bullets: [
//       "Scalable cloud infrastructure",
//       "Enriched with AI capabilities",
//       "Real-time insights and automation",
//       "Intelligent cloud deployment",
//     ],
//   },
// ];

// const CARDS_PER_SLIDE = 3;
// const AUTO_INTERVAL = 4000;

// function chunkArray(arr, size) {
//   const chunks = [];
//   for (let i = 0; i < arr.length; i += size) {
//     chunks.push(arr.slice(i, i + size));
//   }
//   return chunks;
// }

// export default function SolutionsCarousel() {
//   const slides = chunkArray(cards, CARDS_PER_SLIDE);
//   const [current, setCurrent] = useState(0);
//   const timerRef = useRef(null);

//   const goTo = (n) => setCurrent((n + slides.length) % slides.length);
//   const prev = () => goTo(current - 1);
//   const next = () => goTo(current + 1);

//   // Auto-play
//   useEffect(() => {
//     timerRef.current = setInterval(() => {
//       setCurrent((c) => (c + 1) % slides.length);
//     }, AUTO_INTERVAL);
//     return () => clearInterval(timerRef.current);
//   }, [slides.length]);

//   // Reset timer on manual nav
//   const manualNav = (fn) => {
//     clearInterval(timerRef.current);
//     fn();
//     timerRef.current = setInterval(() => {
//       setCurrent((c) => (c + 1) % slides.length);
//     }, AUTO_INTERVAL);
//   };

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Sora:wght@600;700&family=DM+Sans:wght@400;500&display=swap');
//         .sol-section { font-family: 'DM Sans', sans-serif; background: #fff; padding: 56px 16px 64px; }
//         .sol-inner { max-width: 1100px; margin: 0 auto; }
//         .sol-header { text-align: center; margin-bottom: 48px; }
//         .sol-h2 { font-family: 'Sora', sans-serif; font-size: clamp(1.6rem, 4vw, 2.6rem); font-weight: 700; color: #111; margin: 0 0 12px; }
//         .sol-sub { font-size: clamp(0.8rem, 1.5vw, 0.95rem); color: #6b7280; max-width: 540px; margin: 0 auto; line-height: 1.65; }
//         .sol-overflow { overflow: hidden; }
//         .sol-track { display: flex; transition: transform 0.5s cubic-bezier(.4,0,.2,1); will-change: transform; }
//         .sol-slide { min-width: 100%; display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; align-items: stretch; }
//         @media (max-width: 767px) { .sol-slide { grid-template-columns: 1fr; } }
//         @media (min-width: 768px) and (max-width: 1023px) { .sol-slide { grid-template-columns: repeat(3, 1fr); gap: 14px; } }
//         .sol-card { display: flex; flex-direction: column; border: 1px solid #e5e7eb; background: #fff; }
//         .sol-card-title-wrap { padding: 14px 16px 10px; text-align: center; border-bottom: 1px solid #f0f0f0; }
//         .sol-card-title { font-family: 'Sora', sans-serif; font-weight: 700; font-size: clamp(0.72rem, 1.1vw, 0.85rem); color: #111; line-height: 1.35; margin: 0; }
//         .sol-img-wrap { width: 100%; aspect-ratio: 16/9; overflow: hidden; flex-shrink: 0; }
//         .sol-img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform 0.4s ease; }
//         .sol-card:hover .sol-img { transform: scale(1.04); }
//         .sol-body { padding: 16px 18px 18px; display: flex; flex-direction: column; flex: 1; }
//         .sol-list { list-style: none; margin: 0 0 18px; padding: 0; flex: 1; }
//         .sol-list li { display: flex; align-items: flex-start; gap: 8px; font-size: clamp(0.7rem, 1vw, 0.78rem); color: #374151; line-height: 1.5; margin-bottom: 6px; }
//         .sol-bullet { color: #e53e2d; font-size: 1.1rem; line-height: 1.1; flex-shrink: 0; margin-top: 1px; }
//         .sol-btn { display: block; width: 100%; padding: 10px 0; background: #e53e2d; color: #fff; font-family: 'Sora', sans-serif; font-weight: 700; font-size: 0.7rem; letter-spacing: 0.12em; text-align: center; border: none; cursor: pointer; transition: background 0.2s; }
//         .sol-btn:hover { background: #c0291b; }
//         .sol-nav { display: flex; align-items: center; justify-content: center; gap: 14px; margin-top: 32px; }
//         .sol-arrow { width: 36px; height: 36px; border-radius: 50%; border: 1.5px solid #d1d5db; background: none; display: flex; align-items: center; justify-content: center; cursor: pointer; color: #6b7280; transition: border-color 0.2s, color 0.2s; flex-shrink: 0; }
//         .sol-arrow:hover { border-color: #e53e2d; color: #e53e2d; }
//         .sol-dots { display: flex; gap: 8px; align-items: center; }
//         .sol-dot { width: 8px; height: 8px; border-radius: 50%; border: none; background: #d1d5db; cursor: pointer; padding: 0; transition: background 0.25s, transform 0.25s; }
//         .sol-dot.active { background: #e53e2d; transform: scale(1.35); }
//       `}</style>

//       <section className="sol-section">
//         <div className="sol-inner">

//           {/* Header */}
//           <div className="sol-header">
//             <h2 className="sol-h2">Our Solutions</h2>
//             <p className="sol-sub">
//               From AI-powered automation to enterprise infrastructure — every
//               solution is built to connect your business goals with scalable,
//               secure technology.
//             </p>
//           </div>

//           {/* Carousel */}
//           <div className="sol-overflow">
//             <div
//               className="sol-track"
//               style={{ transform: `translateX(-${current * 100}%)` }}
//             >
//               {slides.map((slide, si) => (
//                 <div key={si} className="sol-slide">
//                   {slide.map((card, ci) => (
//                     <div key={ci} className="sol-card">

//                       {/* Title on top */}
//                       <div className="sol-card-title-wrap">
//                         <h3 className="sol-card-title">{card.title}</h3>
//                       </div>

//                       {/* Image */}
//                       <div className="sol-img-wrap">
//                         <img
//                           src={card.img}
//                           alt={card.title}
//                           className="sol-img"
//                           loading="lazy"
//                         />
//                       </div>

//                       {/* Body */}
//                       <div className="sol-body">
//                         <ul className="sol-list">
//                           {card.bullets.map((b, bi) => (
//                             <li key={bi}>
//                               <span className="sol-bullet">•</span>
//                               {b}
//                             </li>
//                           ))}
//                         </ul>
//                         <button className="sol-btn">READ MORE</button>
//                       </div>

//                     </div>
//                   ))}
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Navigation */}
//           <div className="sol-nav">
//             <button className="sol-arrow" onClick={() => manualNav(prev)} aria-label="Previous">
//               <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
//                 <polyline points="15 18 9 12 15 6" />
//               </svg>
//             </button>

//             <div className="sol-dots">
//               {slides.map((_, i) => (
//                 <button
//                   key={i}
//                   className={`sol-dot${i === current ? " active" : ""}`}
//                   onClick={() => manualNav(() => goTo(i))}
//                   aria-label={`Slide ${i + 1}`}
//                 />
//               ))}
//             </div>

//             <button className="sol-arrow" onClick={() => manualNav(next)} aria-label="Next">
//               <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
//                 <polyline points="9 18 15 12 9 6" />
//               </svg>
//             </button>
//           </div>

//         </div>
//       </section>
//     </>
//   );
// }
// import { useState, useEffect, useRef } from "react";

// const cards = [
//   {
//     img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
//     title: "On Line 24/7 Global Configuration and Deployment",
//     bullets: [
//       "Enterprise Email Archive Suite",
//       "Enterprise Archive Search & Discovery",
//       "Cloud Archive eDiscovery Content Security",
//       "Global Partners Network",
//       "On Microsoft Exchange & Office 365",
//     ],
//   },
//   {
//     img: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&q=80",
//     title: "Compliance Archiving eDiscovery DLP Protecting IP & PII",
//     bullets: [
//       "Case Management & Litigation Support",
//       "Regulatory Compliance Module",
//       "HIPAA Compliance Solution",
//       "Compliance – Regulatory Overviews",
//       "Supervisory Review Discovery",
//     ],
//   },
//   {
//     img: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80",
//     title: "Cloud Storage Archiving eDiscovery & Backup",
//     bullets: [
//       "Comparable Value for Office 365",
//       "Protecting PII in Files & OneDrive",
//       "SharePoint Archive & Management",
//       "Advanced eDiscovery for Google G-Suite",
//     ],
//   },
//   {
//     img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
//     title: "Process Automation with Generative AI",
//     bullets: [
//       "Automate complex workflows end-to-end",
//       "Eliminate repetitive manual tasks",
//       "Accelerate operations across business units",
//       "AI-driven process optimization",
//     ],
//   },
//   {
//     img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80",
//     title: "Application Development powered by AI",
//     bullets: [
//       "Smarter, faster custom applications",
//       "Generative AI for intelligent features",
//       "Accelerated delivery pipelines",
//       "Business-tailored AI solutions",
//     ],
//   },
//   {
//     img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
//     title: "AI-enhanced Data Archiving",
//     bullets: [
//       "Intelligent data storage solutions",
//       "Auto-classify and compress data",
//       "Smart retention policies",
//       "AI-powered data lifecycle management",
//     ],
//   },
//   {
//     img: "https://images.unsplash.com/photo-1568992688065-536aad8a12f6?w=800&q=80",
//     title: "Smart Document Archiving with AI",
//     bullets: [
//       "AI-driven document management",
//       "Captures, indexes, and retrieves instantly",
//       "Reduce manual filing and human error",
//       "Critical document retrieval in seconds",
//     ],
//   },
//   {
//     img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
//     title: "AI-driven Data Security, Migration & Integration",
//     bullets: [
//       "AI-enhanced threat detection",
//       "Seamless migration pipelines",
//       "Robust system integration frameworks",
//       "Secure data assets end-to-end",
//     ],
//   },
//   {
//     img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
//     title: "Advanced Analytics with Generative AI",
//     bullets: [
//       "Transform raw data into insights",
//       "AI-powered pattern recognition",
//       "Actionable real-time predictions",
//       "Surfaces trends your team can act on",
//     ],
//   },
//   {
//     img: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80",
//     title: "AI-optimized Business Continuity",
//     bullets: [
//       "AI-monitored continuity plans",
//       "Proactive risk detection",
//       "Automated failover triggers",
//       "Zero-disruption operations",
//     ],
//   },
//   {
//     img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
//     title: "Datacenter Transformation",
//     bullets: [
//       "AI-optimised datacenter strategies",
//       "Cut costs and improve resilience",
//       "Future-proof infrastructure",
//       "Modern datacenter modernisation",
//     ],
//   },
//   {
//     img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
//     title: "eDiscovery & Compliance Archiving",
//     bullets: [
//       "Scalable cloud infrastructure",
//       "Enriched with AI capabilities",
//       "Real-time insights and automation",
//       "Intelligent cloud deployment",
//     ],
//   },
// ];

// const CARDS_PER_SLIDE = 3;
// const AUTO_INTERVAL = 4000;

// function chunkArray(arr, size) {
//   const chunks = [];
//   for (let i = 0; i < arr.length; i += size) {
//     chunks.push(arr.slice(i, i + size));
//   }
//   return chunks;
// }

// export default function SolutionsCarousel() {
//   const slides = chunkArray(cards, CARDS_PER_SLIDE);
//   const [current, setCurrent] = useState(0);
//   const timerRef = useRef(null);

//   const startTimer = () => {
//     clearInterval(timerRef.current);
//     timerRef.current = setInterval(() => {
//       setCurrent((c) => (c + 1) % slides.length);
//     }, AUTO_INTERVAL);
//   };

//   useEffect(() => {
//     startTimer();
//     return () => clearInterval(timerRef.current);
//   }, [slides.length]);

//   const goTo = (n) => {
//     setCurrent((n + slides.length) % slides.length);
//     startTimer();
//   };

//   // Touch/swipe support
//   const touchStartX = useRef(null);
//   const handleTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; };
//   const handleTouchEnd = (e) => {
//     if (touchStartX.current === null) return;
//     const diff = touchStartX.current - e.changedTouches[0].clientX;
//     if (Math.abs(diff) > 40) goTo(current + (diff > 0 ? 1 : -1));
//     touchStartX.current = null;
//   };

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Sora:wght@600;700&family=DM+Sans:wght@400;500&display=swap');

//         .sol-section {
//           font-family: 'DM Sans', sans-serif;
//           background: #fff;
//           padding: 30px 9px 45px;
//           box-sizing: border-box;
//           width: 100%;
//         }
//         .sol-inner { max-width: 1100px; margin: 0 auto; }

//         /* Header */
//         .sol-header { text-align: center; margin-bottom: 32px; }
//         .sol-h2 {
//           font-family: 'Sora', sans-serif;
//           font-size: clamp(1.3rem, 4vw, 2.4rem);
//           font-weight: 700; color: #111; margin: 0 0 10px;
//         }
//         .sol-sub {
//           font-size: clamp(0.72rem, 1.5vw, 0.92rem);
//           color: #6b7280; max-width: 520px;
//           margin: 0 auto; line-height: 1.6;
//         }

//         /* Carousel track */
//         .sol-overflow { overflow: hidden; touch-action: pan-y; }
//         .sol-track {
//           display: flex;
//           transition: transform 0.45s cubic-bezier(.4,0,.2,1);
//           will-change: transform;
//         }

//         /* Slide — always 3 cols */
//         .sol-slide {
//           min-width: 100%;
//           display: grid;
//           grid-template-columns: repeat(3, 1fr);
//           gap: 10px;
//           align-items: stretch;
//           box-sizing: border-box;
//         }

//         /* Card */
//         .sol-card {
//           display: flex;
//           flex-direction: column;
//           border: 1px solid #e5e7eb;
//           background: #fff;
//           overflow: hidden;
//           min-width: 0;
//         }

//         /* Title on top */
//         .sol-card-title-wrap {
//           padding: 8px 8px 7px;
//           text-align: center;
//           border-bottom: 1px solid #f0f0f0;
//           min-height: 42px;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//         }
//         .sol-card-title {
//           font-family: 'Sora', sans-serif;
//           font-weight: 700;
//           font-size: clamp(0.52rem, 1.1vw, 0.82rem);
//           color: #111;
//           line-height: 1.3;
//           margin: 0;
//         }

//         /* Image */
//         .sol-img-wrap {
//           width: 100%;
//           aspect-ratio: 4/3;
//           overflow: hidden;
//           flex-shrink: 0;
//         }
//         .sol-img {
//           width: 100%; height: 100%;
//           object-fit: cover; display: block;
//           transition: transform 0.4s ease;
//         }
//         .sol-card:hover .sol-img { transform: scale(1.04); }

//         /* Body */
//         .sol-body {
//           padding: 8px 8px 10px;
//           display: flex; flex-direction: column; flex: 1;
//         }
//         .sol-list {
//           list-style: none; margin: 0 0 8px; padding: 0; flex: 1;
//         }
//         .sol-list li {
//           display: flex; align-items: flex-start; gap: 4px;
//           font-size: clamp(0.52rem, 1vw, 0.72rem);
//           color: #374151; line-height: 1.4; margin-bottom: 4px;
//         }
//         .sol-bullet {
//           color: #e53e2d; font-size: 0.9rem;
//           line-height: 1.1; flex-shrink: 0; margin-top: 1px;
//         }

//         /* Button */
//         .sol-btn {
//           display: block; width: 100%;
//           padding: 7px 0;
//           background: #e53e2d; color: #fff;
//           font-family: 'Sora', sans-serif; font-weight: 700;
//           font-size: clamp(0.5rem, 1vw, 0.65rem);
//           letter-spacing: 0.1em; text-align: center;
//           border: none; cursor: pointer;
//           transition: background 0.2s;
//         }
//         .sol-btn:hover { background: #c0291b; }

//         /* Nav */
//         .sol-nav {
//           display: flex; align-items: center;
//           justify-content: center; gap: 12px; margin-top: 24px;
//         }
//         .sol-arrow {
//           width: 30px; height: 30px; border-radius: 50%;
//           border: 1.5px solid #d1d5db; background: none;
//           display: flex; align-items: center; justify-content: center;
//           cursor: pointer; color: #6b7280;
//           transition: border-color 0.2s, color 0.2s; flex-shrink: 0;
//         }
//         .sol-arrow:hover { border-color: #e53e2d; color: #e53e2d; }
//         .sol-dots { display: flex; gap: 6px; align-items: center; }
//         .sol-dot {
//           width: 7px; height: 7px; border-radius: 50%;
//           border: none; background: #d1d5db;
//           cursor: pointer; padding: 0;
//           transition: background 0.25s, transform 0.25s;
//         }
//         .sol-dot.active { background: #e53e2d; transform: scale(1.35); }
//       `}</style>

//       <section className="sol-section">
//         <div className="sol-inner">

//           {/* Header */}
//           <div className="sol-header">
//             <h2 className="sol-h2">Our Solutions</h2>
//             <p className="sol-sub">
//               From AI-powered automation to enterprise infrastructure — every
//               solution is built to connect your business goals with scalable,
//               secure technology.
//             </p>
//           </div>

//           {/* Carousel */}
//           <div
//             className="sol-overflow"
//             onTouchStart={handleTouchStart}
//             onTouchEnd={handleTouchEnd}
//           >
//             <div
//               className="sol-track"
//               style={{ transform: `translateX(-${current * 100}%)` }}
//             >
//               {slides.map((slide, si) => (
//                 <div key={si} className="sol-slide">
//                   {slide.map((card, ci) => (
//                     <div key={ci} className="sol-card">

//                       {/* Title on top */}
//                       <div className="sol-card-title-wrap">
//                         <h3 className="sol-card-title">{card.title}</h3>
//                       </div>

//                       {/* Image */}
//                       <div className="sol-img-wrap">
//                         <img
//                           src={card.img}
//                           alt={card.title}
//                           className="sol-img"
//                           loading="lazy"
//                         />
//                       </div>

//                       {/* Body */}
//                       <div className="sol-body mb-2">
//                         <ul className="sol-list">
//                           {card.bullets.map((b, bi) => (
//                             <li key={bi}>
//                               <span className="sol-bullet">•</span>
//                               {b}
//                             </li>
//                           ))}
//                         </ul>
//                         <button className="sol-btn">READ MORE</button>
//                       </div>

//                     </div>
//                   ))}
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Navigation */}
//           <div className="sol-nav">
//             <button className="sol-arrow" onClick={() => goTo(current - 1)} aria-label="Previous">
//               <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
//                 <polyline points="15 18 9 12 15 6" />
//               </svg>
//             </button>

//             <div className="sol-dots">
//               {slides.map((_, i) => (
//                 <button
//                   key={i}
//                   className={`sol-dot${i === current ? " active" : ""}`}
//                   onClick={() => goTo(i)}
//                   aria-label={`Slide ${i + 1}`}
//                 />
//               ))}
//             </div>

//             <button className="sol-arrow" onClick={() => goTo(current + 1)} aria-label="Next">
//               <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
//                 <polyline points="9 18 15 12 9 6" />
//               </svg>
//             </button>
//           </div>
 
//         </div>
//       </section>
//     </>
//   );
// }
// import { useState, useEffect, useRef } from "react";

// const cards = [
//   {
//     img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
//     title: "On Line 24/7 Global Configuration and Deployment",
//     bullets: [
//       "Enterprise Email Archive Suite",
//       "Enterprise Archive Search & Discovery",
//       "Cloud Archive eDiscovery Content Security",
//       "Global Partners Network",
//       "On Microsoft Exchange & Office 365",
//     ],
//   },
//   {
//     img: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&q=80",
//     title: "Compliance Archiving eDiscovery DLP Protecting IP & PII",
//     bullets: [
//       "Case Management & Litigation Support",
//       "Regulatory Compliance Module",
//       "HIPAA Compliance Solution",
//       "Compliance – Regulatory Overviews",
//       "Supervisory Review Discovery",
//     ],
//   },
//   {
//     img: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80",
//     title: "Cloud Storage Archiving eDiscovery & Backup",
//     bullets: [
//       "Comparable Value for Office 365",
//       "Protecting PII in Files & OneDrive",
//       "SharePoint Archive & Management",
//       "Advanced eDiscovery for Google G-Suite",
//     ],
//   },
//   {
//     img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
//     title: "Process Automation with Generative AI",
//     bullets: [
//       "Automate complex workflows end-to-end",
//       "Eliminate repetitive manual tasks",
//       "Accelerate operations across business units",
//       "AI-driven process optimization",
//     ],
//   },
//   {
//     img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80",
//     title: "Application Development powered by AI",
//     bullets: [
//       "Smarter, faster custom applications",
//       "Generative AI for intelligent features",
//       "Accelerated delivery pipelines",
//       "Business-tailored AI solutions",
//     ],
//   },
//   {
//     img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
//     title: "AI-enhanced Data Archiving",
//     bullets: [
//       "Intelligent data storage solutions",
//       "Auto-classify and compress data",
//       "Smart retention policies",
//       "AI-powered data lifecycle management",
//     ],
//   },
//   {
//     img: "https://images.unsplash.com/photo-1568992688065-536aad8a12f6?w=800&q=80",
//     title: "Smart Document Archiving with AI",
//     bullets: [
//       "AI-driven document management",
//       "Captures, indexes, and retrieves instantly",
//       "Reduce manual filing and human error",
//       "Critical document retrieval in seconds",
//     ],
//   },
//   {
//     img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
//     title: "AI-driven Data Security, Migration & Integration",
//     bullets: [
//       "AI-enhanced threat detection",
//       "Seamless migration pipelines",
//       "Robust system integration frameworks",
//       "Secure data assets end-to-end",
//     ],
//   },
//   {
//     img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
//     title: "Advanced Analytics with Generative AI",
//     bullets: [
//       "Transform raw data into insights",
//       "AI-powered pattern recognition",
//       "Actionable real-time predictions",
//       "Surfaces trends your team can act on",
//     ],
//   },
//   {
//     img: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80",
//     title: "AI-optimized Business Continuity",
//     bullets: [
//       "AI-monitored continuity plans",
//       "Proactive risk detection",
//       "Automated failover triggers",
//       "Zero-disruption operations",
//     ],
//   },
//   {
//     img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
//     title: "Datacenter Transformation",
//     bullets: [
//       "AI-optimised datacenter strategies",
//       "Cut costs and improve resilience",
//       "Future-proof infrastructure",
//       "Modern datacenter modernisation",
//     ],
//   },
//   {
//     img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
//     title: "eDiscovery & Compliance Archiving",
//     bullets: [
//       "Scalable cloud infrastructure",
//       "Enriched with AI capabilities",
//       "Real-time insights and automation",
//       "Intelligent cloud deployment",
//     ],
//   },
// ];

// const CARDS_PER_SLIDE = 3;
// const AUTO_INTERVAL = 4000;

// function chunkArray(arr, size) {
//   const chunks = [];
//   for (let i = 0; i < arr.length; i += size) {
//     chunks.push(arr.slice(i, i + size));
//   }
//   return chunks;
// }

// export default function SolutionsCarousel() {
//   const slides = chunkArray(cards, CARDS_PER_SLIDE);
//   const [current, setCurrent] = useState(0);
//   const timerRef = useRef(null);

//   const startTimer = () => {
//     clearInterval(timerRef.current);
//     timerRef.current = setInterval(() => {
//       setCurrent((c) => (c + 1) % slides.length);
//     }, AUTO_INTERVAL);
//   };

//   useEffect(() => {
//     startTimer();
//     return () => clearInterval(timerRef.current);
//   }, [slides.length]);

//   const goTo = (n) => {
//     setCurrent((n + slides.length) % slides.length);
//     startTimer();
//   };

//   // Touch
//   const touchStartX = useRef(null);
//   const handleTouchStart = (e) => {
//     touchStartX.current = e.touches[0].clientX;
//   };

//   const handleTouchEnd = (e) => {
//     if (touchStartX.current === null) return;
//     const diff = touchStartX.current - e.changedTouches[0].clientX;
//     if (Math.abs(diff) > 40) goTo(current + (diff > 0 ? 1 : -1));
//     touchStartX.current = null;
//   };

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Sora:wght@600;700&family=DM+Sans:wght@400;500&display=swap');

//         .sol-section {
//           font-family: 'DM Sans', sans-serif;
//           background: #fff;
//           padding: 30px 9px 45px;
//           width: 100%;
//         }

//         .sol-inner {
//           max-width: 1100px;
//           margin: 0 auto;
//         }

//         .sol-header {
//           text-align: center;
//           margin-bottom: 32px;
//         }

//         .sol-h2 {
//           font-family: 'Sora', sans-serif;
//           font-size: clamp(1.3rem, 4vw, 2.4rem);
//           font-weight: 700;
//           margin: 0 0 10px;
//         }

//         .sol-sub {
//           font-size: clamp(0.72rem, 1.5vw, 0.92rem);
//           color: #6b7280;
//           max-width: 520px;
//           margin: 0 auto;
//           line-height: 1.6;
//         }

//         .sol-overflow {
//           overflow: hidden;
//           touch-action: pan-y;
//         }

//         .sol-track {
//           display: flex;
//           transition: transform 0.45s ease;
//         }

//         .sol-slide {
//           min-width: 100%;
//           display: grid;
//           grid-template-columns: repeat(3, 1fr);
//           gap: 10px;
//         }

//         .sol-card {
//           display: flex;
//           flex-direction: column;
//           border: 1px solid #e5e7eb;
//           background: #fff;
//           overflow: hidden;
//         }

//         .sol-card-title-wrap {
//           padding: 8px;
//           text-align: center;
//           border-bottom: 1px solid #f0f0f0;
//           min-height: 42px;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//         }

//         .sol-card-title {
//           font-family: 'Sora', sans-serif;
//           font-weight: 700;
//           font-size: clamp(0.52rem, 1.1vw, 0.82rem);
//           margin: 0;
//         }

//         .sol-img-wrap {
//           aspect-ratio: 4/3;
//           overflow: hidden;
//         }

//         .sol-img {
//           width: 100%;
//           height: 100%;
//           object-fit: cover;
//           transition: transform 0.4s ease;
//         }

//         .sol-card:hover .sol-img {
//           transform: scale(1.05);
//         }

//         /* 🔥 FIXED BODY SPACING */
//         .sol-body {
//           padding: 6px 8px 6px;
//           display: flex;
//           flex-direction: column;
//           flex: 1;
//           gap: 4px;
//         }

//         .sol-list {
//           margin: 0 0 4px;
//           padding: 0;
//           list-style: none;
//           flex: 1;
//         }

//         .sol-list li {
//           display: flex;
//           gap: 4px;
//           font-size: clamp(0.52rem, 1vw, 0.72rem);
//           margin-bottom: 2px;
//           color: #374151;
//         }

//         .sol-bullet {
//           color: #e53e2d;
//         }

//         .sol-btn {
//           margin-top: auto;
//           padding: 6px 0;
//           background: #e53e2d;
//           color: #fff;
//           border: none;
//           font-weight: 700;
//           font-family: 'Sora', sans-serif;
//           cursor: pointer;
//         }

//         .sol-btn:hover {
//           background: #c0291b;
//         }

//         /* 📱 MOBILE FIX */
//         @media (max-width: 640px) {
//           .sol-body {
//             padding: 5px 6px;
//             gap: 3px;
//           }

//           .sol-list li {
//             margin-bottom: 1px;
//           }

//           .sol-btn {
//             font-size: 0.6rem;
//             padding: 5px 0;
//           }
//         }
//       `}</style>

//       <section className="sol-section">
//         <div className="sol-inner">
//           <div className="sol-header">
//             <h2 className="sol-h2">Our Solutions</h2>
//             <p className="sol-sub">
//               From AI-powered automation to enterprise infrastructure — every solution is built to connect your business goals with scalable, secure technology.
//             </p>
//           </div>

//           <div
//             className="sol-overflow"
//             onTouchStart={handleTouchStart}
//             onTouchEnd={handleTouchEnd}
//           >
//             <div
//               className="sol-track"
//               style={{ transform: `translateX(-${current * 100}%)` }}
//             >
//               {slides.map((slide, si) => (
//                 <div key={si} className="sol-slide">
//                   {slide.map((card, ci) => (
//                     <div key={ci} className="sol-card">
//                       <div className="sol-card-title-wrap">
//                         <h3 className="sol-card-title">{card.title}</h3>
//                       </div>

//                       <div className="sol-img-wrap">
//                         <img src={card.img} alt={card.title} className="sol-img" />
//                       </div>

//                       <div className="sol-body">
//                         <ul className="sol-list">
//                           {card.bullets.map((b, bi) => (
//                             <li key={bi}>
//                               <span className="sol-bullet">•</span> {b}
//                             </li>
//                           ))}
//                         </ul>

//                         <button className="sol-btn">READ MORE</button>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }
import { useState, useEffect, useRef } from "react";

const cards = [
  {
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    title: "On Line 24/7 Global Configuration and Deployment",
    bullets: [
      "Enterprise Email Archive Suite",
      "Enterprise Archive Search & Discovery",
      "Cloud Archive eDiscovery Content Security",
      "Global Partners Network",
      "On Microsoft Exchange & Office 365",
    ],
  },
  {
    img: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&q=80",
    title: "Compliance Archiving eDiscovery DLP Protecting IP & PII",
    bullets: [
      "Case Management & Litigation Support",
      "Regulatory Compliance Module",
      "HIPAA Compliance Solution",
      "Compliance – Regulatory Overviews",
      "Supervisory Review Discovery",
    ],
  },
  {
    img: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80",
    title: "Cloud Storage Archiving eDiscovery & Backup",
    bullets: [
      "Comparable Value for Office 365",
      "Protecting PII in Files & OneDrive",
      "SharePoint Archive & Management",
      "Advanced eDiscovery for Google G-Suite",
    ],
  },
  {
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    title: "Process Automation with Generative AI",
    bullets: [
      "Automate complex workflows end-to-end",
      "Eliminate repetitive manual tasks",
      "Accelerate operations across business units",
      "AI-driven process optimization",
    ],
  },
  {
    img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80",
    title: "Application Development powered by AI",
    bullets: [
      "Smarter, faster custom applications",
      "Generative AI for intelligent features",
      "Accelerated delivery pipelines",
      "Business-tailored AI solutions",
    ],
  },
  {
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
    title: "AI-enhanced Data Archiving",
    bullets: [
      "Intelligent data storage solutions",
      "Auto-classify and compress data",
      "Smart retention policies",
      "AI-powered data lifecycle management",
    ],
  },
  {
    img: "https://images.unsplash.com/photo-1568992688065-536aad8a12f6?w=800&q=80",
    title: "Smart Document Archiving with AI",
    bullets: [
      "AI-driven document management",
      "Captures, indexes, and retrieves instantly",
      "Reduce manual filing and human error",
      "Critical document retrieval in seconds",
    ],
  },
  {
    img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
    title: "AI-driven Data Security, Migration & Integration",
    bullets: [
      "AI-enhanced threat detection",
      "Seamless migration pipelines",
      "Robust system integration frameworks",
      "Secure data assets end-to-end",
    ],
  },
  {
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    title: "Advanced Analytics with Generative AI",
    bullets: [
      "Transform raw data into insights",
      "AI-powered pattern recognition",
      "Actionable real-time predictions",
      "Surfaces trends your team can act on",
    ],
  },
  {
    img: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80",
    title: "AI-optimized Business Continuity",
    bullets: [
      "AI-monitored continuity plans",
      "Proactive risk detection",
      "Automated failover triggers",
      "Zero-disruption operations",
    ],
  },
  {
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    title: "Datacenter Transformation",
    bullets: [
      "AI-optimised datacenter strategies",
      "Cut costs and improve resilience",
      "Future-proof infrastructure",
      "Modern datacenter modernisation",
    ],
  },
  {
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
    title: "eDiscovery & Compliance Archiving",
    bullets: [
      "Scalable cloud infrastructure",
      "Enriched with AI capabilities",
      "Real-time insights and automation",
      "Intelligent cloud deployment",
    ],
  },
];

const CARDS_PER_SLIDE = 3;
const AUTO_INTERVAL = 4000;

function chunkArray(arr, size) {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
}

export default function SolutionsCarousel() {
  const slides = chunkArray(cards, CARDS_PER_SLIDE);
  const [current, setCurrent] = useState(0);
  const timerRef = useRef(null);

  const startTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length);
    }, AUTO_INTERVAL);
  };

  useEffect(() => {
    startTimer();
    return () => clearInterval(timerRef.current);
  }, [slides.length]);

  const goTo = (n) => {
    setCurrent((n + slides.length) % slides.length);
    startTimer();
  };

  // Touch
  const touchStartX = useRef(null);
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) goTo(current + (diff > 0 ? 1 : -1));
    touchStartX.current = null;
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@600;700&family=DM+Sans:wght@400;500&display=swap');

        .sol-section {
          font-family: 'DM Sans', sans-serif;
          background: #fff;
          padding: 30px 9px 45px;
          width: 100%;
        }

        .sol-inner {
          max-width: 1100px;
          margin: 0 auto;
        }

        .sol-header {
          text-align: center;
          margin-bottom: 32px;
        }

        .sol-h2 {
          font-family: 'Sora', sans-serif;
          font-size: clamp(1.3rem, 4vw, 2.4rem);
          font-weight: 700;
          margin: 0 0 10px;
        }

        .sol-sub {
          font-size: clamp(0.72rem, 1.5vw, 0.92rem);
          color: #6b7280;
          max-width: 520px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .sol-overflow {
          overflow: hidden;
          touch-action: pan-y;
        }

        .sol-track {
          display: flex;
          transition: transform 0.45s ease;
        }

        .sol-slide {
          min-width: 100%;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
        }

        .sol-card {
          display: flex;
          flex-direction: column;
          border: 1px solid #e5e7eb;
          background: #fff;
          overflow: hidden;
        }

        .sol-card-title-wrap {
          padding: 8px;
          text-align: center;
          border-bottom: 1px solid #f0f0f0;
          min-height: 42px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .sol-card-title {
          font-family: 'Sora', sans-serif;
          font-weight: 700;
          font-size: clamp(0.52rem, 1.1vw, 0.82rem);
          margin: 0;
        }

        .sol-img-wrap {
          aspect-ratio: 4/3;
          overflow: hidden;
        }

        .sol-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }

        .sol-card:hover .sol-img {
          transform: scale(1.05);
        }

        /* 🔥 FIXED BODY SPACING */
        .sol-body {
          padding: 6px 8px 6px;
          display: flex;
          flex-direction: column;
          flex: 1;
          gap: 4px;
        }

        .sol-list {
          margin: 0 0 4px;
          padding: 0;
          list-style: none;
          flex: 1;
        }

        .sol-list li {
          display: flex;
          gap: 4px;
          font-size: clamp(0.52rem, 1vw, 0.72rem);
          margin-bottom: 2px;
          color: #374151;
        }

        .sol-bullet {
          color: #e53e2d;
        }

        .sol-btn {
          margin-top: auto;
          padding: 6px 0;
          background: #e53e2d;
          color: #fff;
          border: none;
          font-weight: 700;
          font-family: 'Sora', sans-serif;
          cursor: pointer;
        }

        .sol-btn:hover {
          background: #c0291b;
        }

        /* 📱 MOBILE FIX */
        @media (max-width: 640px) {
          .sol-body {
            padding: 5px 6px;
            gap: 3px;
          }

          .sol-list li {
            margin-bottom: 1px;
          }

          .sol-btn {
            font-size: 0.6rem;
            padding: 5px 0;
          }
        }
      `}</style>

      <section className="sol-section">
        <div className="sol-inner">
          <div className="sol-header">
            <h2 className="sol-h2">Our Solutions</h2>
            <p className="sol-sub">
              From AI-powered automation to enterprise infrastructure — every solution is built to connect your business goals with scalable, secure technology.
            </p>
          </div>

          <div
            className="sol-overflow"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="sol-track"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {slides.map((slide, si) => (
                <div key={si} className="sol-slide">
                  {slide.map((card, ci) => (
                    <div key={ci} className="sol-card">
                      <div className="sol-card-title-wrap">
                        <h3 className="sol-card-title">{card.title}</h3>
                      </div>

                      <div className="sol-img-wrap">
                        <img src={card.img} alt={card.title} className="sol-img" />
                      </div>

                      <div className="sol-body">
                        <ul className="sol-list">
                          {card.bullets.map((b, bi) => (
                            <li key={bi}>
                              <span className="sol-bullet">•</span> {b}
                            </li>
                          ))}
                        </ul>

                        <button className="sol-btn">READ MORE</button>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}