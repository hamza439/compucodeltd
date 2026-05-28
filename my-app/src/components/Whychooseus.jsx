
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

const _fontLink = document.createElement("link");
_fontLink.rel = "stylesheet";
_fontLink.href =
  "https://fonts.googleapis.com/css2?family=Sora:wght@600&family=DM+Sans:wght@400;500&display=swap";
if (!document.head.querySelector(`link[href="${_fontLink.href}"]`)) {
  document.head.appendChild(_fontLink);
}
const _styleId = "cc-fonts";
if (!document.getElementById(_styleId)) {
  const s = document.createElement("style");
  s.id = _styleId;
  s.textContent = `
    .sora-semibold-600   { font-family:'Sora',sans-serif;    font-weight:600; }
    .dm-sans-regular-400 { font-family:'DM Sans',sans-serif; font-weight:400; }
  `;
  document.head.appendChild(s);
}

// ── All 14 solutions ──
const cards = [
  {
    emoji: "🎯",
    bg: "bg-red-500",
    title: "Process Automation with Generative AI",
    text: "Automate complex workflows end-to-end using Generative AI — eliminating repetitive tasks and accelerating operations across every business unit.",
  },
  {
    emoji: "🧩",
    bg: "bg-teal-500",
    title: "Application Development powered by AI",
    text: "Build smarter, faster applications tailored to your business — powered by Generative AI for intelligent features and accelerated delivery.",
  },
  {
    emoji: "🗄️",
    bg: "bg-sky-500",
    title: "AI-enhanced Data Archiving",
    text: "Intelligent data storage solutions powered by AI — automatically classify, compress, and archive your data with smart retention policies.",
  },
  {
    emoji: "📄",
    bg: "bg-violet-500",
    title: "Smart Document Archiving with AI",
    text: "AI-driven document management that captures, indexes, and retrieves critical documents instantly — reducing manual filing and human error.",
  },
  {
    emoji: "🛡️",
    bg: "bg-orange-500",
    title: "AI-driven Data Security, Migration & Integration",
    text: "Secure your data assets with AI-enhanced threat detection, seamless migration pipelines, and robust system integration frameworks.",
  },
  {
    emoji: "📊",
    bg: "bg-blue-500",
    title: "Advanced Analytics with Generative AI",
    text: "Transform raw data into actionable insights. Our AI-powered analytics surfaces patterns and predictions your team can act on immediately.",
  },
  {
    emoji: "🔁",
    bg: "bg-amber-500",
    title: "AI-optimized Business Continuity",
    text: "Keep operations running with AI-monitored continuity plans — proactively detecting risks and triggering automated failover before disruptions occur.",
  },
  {
    emoji: "🏢",
    bg: "bg-indigo-500",
    title: "Datacenter Transformation",
    text: "Modernise your infrastructure with AI-optimised datacenter strategies — cutting costs, improving resilience, and future-proofing your operations.",
  },
  {
    emoji: "☁️",
    bg: "bg-purple-500",
    title: "Cloud Services with AI Integration",
    text: "Deploy scalable cloud infrastructure enriched with AI capabilities — delivering real-time insights and intelligent automation in the cloud.",
  },
  {
    emoji: "🔄",
    bg: "bg-cyan-500",
    title: "Hybrid Migration enabled by AI",
    text: "Seamlessly migrate on-premises workloads to hybrid or full-cloud environments — guided by AI to minimise risk and downtime.",
  },
  {
    emoji: "🖧",
    bg: "bg-lime-600",
    title: "Infrastructure Virtualisation",
    text: "Virtual infrastructure solutions that consolidate physical hardware into flexible, scalable virtual environments — reducing cost and complexity.",
  },
  {
    emoji: "⚙️",
    bg: "bg-emerald-500",
    title: "VMware Virtualization",
    text: "End-to-end VMware virtualization solutions — from initial deployment and configuration to ongoing management and performance optimisation.",
  },
  {
    emoji: "💬",
    bg: "bg-green-500",
    title: "Message / Email Solution",
    text: "Enterprise messaging and email platforms powered by AI — unifying SMS, email, and notifications with automated routing and response workflows.",
  },
  {
    emoji: "🗃️",
    bg: "bg-rose-500",
    title: "Enterprise Archive",
    text: "Comprehensive enterprise archiving for email, files, and records — fully compliant, instantly searchable, and built for long-term retention.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="w-full py-14 sm:py-20 md:py-24 px-4 sm:px-6 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* ── Section header ── */}
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-[10px] sm:text-xs tracking-widest uppercase text-gray-400 dm-sans-regular-400 mb-2 sm:mb-3">
            Our Solutions
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl sora-semibold-600 text-gray-900 leading-tight">
            Why Choose{" "}
            <span style={{ color: "#e53e2d" }}>Compucode</span>?
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base dm-sans-regular-400 text-gray-500 max-w-2xl mx-auto leading-relaxed">
            From AI-powered automation to enterprise infrastructure — every
            solution is built to connect your business goals with scalable,
            secure technology.
          </p>
        </div>

        {/* ── Card grid — 14 cards ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {cards.map(({ emoji, bg, title, text }) => (
            <div
              key={title}
              className="group relative rounded-2xl p-5 sm:p-6 border border-gray-100 hover:border-[#e53e2d]/30 hover:shadow-md transition-all duration-300 cursor-default bg-[#fafafa]"
            >
              {/* hover glow */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse at top left, rgba(229,62,45,0.07) 0%, transparent 70%)",
                }}
              />

              {/* Icon badge */}
              <div
                className={`relative w-10 h-10 sm:w-11 sm:h-11 rounded-xl ${bg} bg-opacity-80 flex items-center justify-center mb-4 text-lg sm:text-xl`}
              >
                {emoji}
              </div>

              {/* Title */}
              <h3 className="relative sora-semibold-600 text-gray-900 text-sm sm:text-base leading-snug mb-2 sm:mb-3">
                {title}
              </h3>

              {/* Body */}
              <p className="relative dm-sans-regular-400 text-gray-500 text-xs sm:text-sm leading-relaxed">
                {text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
