// import { useState, useEffect } from "react";

// const badges = [
//   {
//     id: 0,
//     type: "Compliance",
//     date: "Always Active",
//     readTime: "GDPR Ready",
//     title: "General Data Protection Regulation",
//     desc: "We are fully GDPR compliant, ensuring your data is protected and managed in accordance with EU privacy laws and regulations.",
//     img: "https://compucodeltd.com/images/blobs/gdpr-compliant.webp",
//     alt: "GDPR Compliant",
//     tag: "GDPR",
//     tagColor: "bg-[#3b5fc0] text-white",
//   },
//   {
//     id: 1,
//     type: "Compliance",
//     date: "Certified",
//     readTime: "PCI DSS Compliant",
//     title: "Payment Card Industry Data Security Standard",
//     desc: "Our platform meets PCI DSS standards, protecting cardholder data with strict security protocols and regular audits.",
//     img: "https://compucodeltd.com/images/blobs/pci_dss.png",
//     alt: "PCI DSS Compliant",
//     tag: "PCI DSS",
//     tagColor: "bg-[#1a7a4a] text-white",
//   },
//   {
//     id: 2,
//     type: "Compliance",
//     date: "Certified",
//     readTime: "NDPR Compliant",
//     title: "Nigeria Data Protection Regulation",
//     desc: "We comply with the Nigeria Data Protection Commission standards, safeguarding personal data of Nigerian users and clients.",
//     img: "https://compucodeltd.com/images/blobs/ndpr_compliant.png",
//     alt: "NDPR Compliant",
//     tag: "NDPR",
//     tagColor: "bg-[#2e6b3e] text-white",
//   },
//   {
//     id: 3,
//     type: "Compliance",
//     date: "Certified",
//     readTime: "GLBA Compliant",
//     title: "Gramm-Leach-Bliley Act",
//     desc: "We adhere to GLBA requirements, protecting consumers' private financial information held by financial institutions.",
//     img: "https://compucodeltd.com/images/blobs/glba_compliant.png",
//     alt: "GLBA Compliant",
//     tag: "GLBA",
//     tagColor: "bg-[#1b3f6e] text-white",
//   },
// ];

// export default function ComplianceSection() {
//   const [current, setCurrent] = useState(0);

//   const visible = 3;
//   const maxIndex = badges.length - visible;

//   const canPrev = current > 0;
//   const canNext = current < maxIndex;

//   // Auto slide (optional but premium feel)
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrent((c) => (c < maxIndex ? c + 1 : 0));
//     }, 5000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="bg-white py-14 px-6 overflow-hidden">
//       <div className="max-w-6xl mx-auto">

//         {/* Header */}
//         <div className="mb-8">
//           <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-1">
//             Resources
//           </p>

//           <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
//             <h2 className="text-3xl font-extrabold leading-tight text-gray-900">
//               Our Commitment to <br />
//               <span className="text-[#1b3f6e]">
//                 Data Security & Compliance
//               </span>
//             </h2>

//             <a
//               href="#"
//               className="flex items-center gap-2 text-sm font-semibold text-gray-700 border border-gray-300 px-4 py-2 rounded hover:bg-gray-50 transition w-fit"
//             >
//               View All
//               <svg width="17" height="12" fill="none" viewBox="0 0 17 12">
//                 <path
//                   fill="currentColor"
//                   d="M13.809 5.222 9.058 1.1l1.108-1.1 6.041 6-6.04 6-1.11-1.102 4.752-4.12H.207V5.222h13.602Z"
//                 />
//               </svg>
//             </a>
//           </div>
//         </div>

//         {/* Slider */}
//         <div className="relative">

//           {/* Track */}
//           <div className="overflow-hidden">
//             <div
//               className="flex gap-6 transition-transform duration-500 ease-in-out"
//               style={{
//                 transform: `translateX(-${current * (100 / visible)}%)`,
//               }}
//             >
//               {badges.map((b) => (
//                 <a
//                   key={b.id}
//                   href="#"
//                   className="min-w-[calc(100%/3)] bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-lg transition group"
//                 >
//                   {/* Image */}
//                   <div className="aspect-video bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
//                     <img
//                       src={b.img}
//                       alt={b.alt}
//                       className="max-h-24 object-contain group-hover:scale-105 transition-transform duration-300"
//                     />
//                   </div>

//                   {/* Meta */}
//                   <div className="px-4 pt-4 flex items-center gap-2 text-xs text-gray-500 flex-wrap">
//                     <span className={`px-2 py-0.5 rounded font-bold ${b.tagColor}`}>
//                       {b.tag}
//                     </span>
//                     <span>{b.date}</span>
//                     <span>•</span>
//                     <span>{b.readTime}</span>
//                   </div>

//                   {/* Title */}
//                   <div className="px-4 pt-2">
//                     <h3 className="font-bold text-sm text-gray-900 group-hover:text-[#1b3f6e] transition">
//                       {b.title}
//                     </h3>
//                   </div>

//                   {/* Description */}
//                   <div className="px-4 pb-5 pt-1">
//                     <p className="text-xs text-gray-500 leading-relaxed">
//                       {b.desc}
//                     </p>
//                   </div>
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* Navigation */}
//           {/* <div className="flex justify-end gap-3 mt-6">
//             <button
//               onClick={() => setCurrent((c) => Math.max(0, c - 1))}
//               disabled={!canPrev}
//               className="w-9 h-9 rounded-full border flex items-center justify-center disabled:opacity-30 hover:bg-gray-100"
//             >
//               ◀
//             </button>

//             <button
//               onClick={() =>
//                 setCurrent((c) => Math.min(maxIndex, c + 1))
//               }
//               disabled={!canNext}
//               className="w-9 h-9 rounded-full border flex items-center justify-center disabled:opacity-30 hover:bg-gray-100"
//             >
//               ▶
//             </button>
//           </div> */}

//         </div>
//       </div>
//     </section>
//   );
// }













// import { useState, useEffect } from "react";

// const badges = [
//   {
//     id: 0,
//     type: "Compliance",
//     date: "Always Active",
//     readTime: "GDPR Ready",
//     title: "General Data Protection Regulation",
//     desc: "We are fully GDPR compliant, ensuring your data is protected and managed in accordance with EU privacy laws and regulations.",
//     img: "https://compucodeltd.com/images/blobs/gdpr-compliant.webp",
//     alt: "GDPR Compliant",
//     tag: "GDPR",
//     tagColor: "bg-[#3b5fc0] text-white",
//   },
//   {
//     id: 1,
//     type: "Compliance",
//     date: "Certified",
//     readTime: "PCI DSS Compliant",
//     title: "Payment Card Industry Data Security Standard",
//     desc: "Our platform meets PCI DSS standards, protecting cardholder data with strict security protocols and regular audits.",
//     img: "https://compucodeltd.com/images/blobs/pci_dss.png",
//     alt: "PCI DSS Compliant",
//     tag: "PCI DSS",
//     tagColor: "bg-[#1a7a4a] text-white",
//   },
//   {
//     id: 2,
//     type: "Compliance",
//     date: "Certified",
//     readTime: "NDPR Compliant",
//     title: "Nigeria Data Protection Regulation",
//     desc: "We comply with the Nigeria Data Protection Commission standards, safeguarding personal data of Nigerian users and clients.",
//     img: "https://compucodeltd.com/images/blobs/ndpr_compliant.png",
//     alt: "NDPR Compliant",
//     tag: "NDPR",
//     tagColor: "bg-[#2e6b3e] text-white",
//   },
//   {
//     id: 3,
//     type: "Compliance",
//     date: "Certified",
//     readTime: "GLBA Compliant",
//     title: "Gramm-Leach-Bliley Act",
//     desc: "We adhere to GLBA requirements, protecting consumers' private financial information held by financial institutions.",
//     img: "https://compucodeltd.com/images/blobs/glba_compliant.png",
//     alt: "GLBA Compliant",
//     tag: "GLBA",
//     tagColor: "bg-[#1b3f6e] text-white",
//   },
// ];

// export default function ComplianceSection() {
//   const [current, setCurrent] = useState(0);
//   const [mobileCurrent, setMobileCurrent] = useState(0);

//   const desktopVisible = 3;
//   const desktopMax = badges.length - desktopVisible;

//   const mobileVisible = 2;
//   const mobileMax = badges.length - mobileVisible;

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrent((c) => (c < desktopMax ? c + 1 : 0));
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setMobileCurrent((c) => (c < mobileMax ? c + 1 : 0));
//     }, 4000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="bg-white py-10 sm:py-14 px-4 sm:px-6 overflow-hidden">
//       <div className="max-w-6xl mx-auto">

//         {/* Header */}
//         <div className="mb-5 sm:mb-8">
//           <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-1">
//             Resources
//           </p>
//           <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 sm:gap-4">
//             <h2 className="text-xl sm:text-3xl font-extrabold leading-tight text-gray-900">
//               Our Commitment to{" "}
//               <span className="text-[#e53e2d]">Data Security &amp; Compliance</span>
//             </h2>
          
//           </div>
//         </div>

//         {/* ── MOBILE SLIDER ── */}
//         <div className="sm:hidden">
//           <div className="overflow-hidden">
//             <div
//               className="flex gap-2 transition-transform duration-500 ease-in-out"
//               style={{ transform: `translateX(-${mobileCurrent * (100 / mobileVisible)}%)` }}
//             >
//               {badges.map((b) => (
//                 <a
//                   key={b.id}
//                   href="#"
//                   className="flex-shrink-0 bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition group"
//                   style={{ width: "calc(50% - 4px)" }}
//                 >
//                   {/* Image box — fixed small height */}
//                   <div className="flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-3" style={{ height: "80px" }}>
//                     <img
//                       src={b.img}
//                       alt={b.alt}
//                       className="max-h-10 max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
//                     />
//                   </div>
//                   {/* Body */}
//                   <div className="p-2 pb-3">
//                     <span className={`inline-block px-1.5 py-0.5 rounded text-[9px] font-bold mb-1 ${b.tagColor}`}>
//                       {b.tag}
//                     </span>
//                     <h3 className="font-bold text-[11px] leading-snug text-gray-900 mb-1 group-hover:text-[#1b3f6e] transition line-clamp-2">
//                       {b.title}
//                     </h3>
//                     <p className="text-[10px] text-gray-400 leading-relaxed line-clamp-3">
//                       {b.desc}
//                     </p>
//                   </div>
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* Dots */}
//           <div className="flex justify-center gap-1.5 mt-3">
//             {Array.from({ length: mobileMax + 1 }).map((_, i) => (
//               <button
//                 key={i}
//                 onClick={() => setMobileCurrent(i)}
//                 className={`h-1.5 rounded-full transition-all duration-300 ${
//                   mobileCurrent === i ? "w-5 bg-[#1b3f6e]" : "w-1.5 bg-gray-300"
//                 }`}
//               />
//             ))}
//           </div>
//         </div>

//         {/* ── DESKTOP SLIDER — unchanged ── */}
//         <div className="relative hidden sm:block">
//           <div className="overflow-hidden">
//             <div
//               className="flex gap-6 transition-transform duration-500 ease-in-out"
//               style={{ transform: `translateX(-${current * (100 / desktopVisible)}%)` }}
//             >
//               {badges.map((b) => (
//                 <a
//                   key={b.id}
//                   href="#"
//                   className="min-w-[calc(100%/3)] bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-lg transition group"
//                 >
//                   <div className="aspect-video bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
//                     <img
//                       src={b.img}
//                       alt={b.alt}
//                       className="max-h-24 object-contain group-hover:scale-105 transition-transform duration-300"
//                     />
//                   </div>
//                   <div className="px-4 pt-4 flex items-center gap-2 text-xs text-gray-500 flex-wrap">
//                     <span className={`px-2 py-0.5 rounded font-bold ${b.tagColor}`}>
//                       {b.tag}
//                     </span>
//                     <span>{b.date}</span>
//                     <span>•</span>
//                     <span>{b.readTime}</span>
//                   </div>
//                   <div className="px-4 pt-2">
//                     <h3 className="font-bold text-sm text-gray-900 group-hover:text-[#1b3f6e] transition">
//                       {b.title}
//                     </h3>
//                   </div>
//                   <div className="px-4 pb-5 pt-1">
//                     <p className="text-xs text-gray-500 leading-relaxed">
//                       {b.desc}
//                     </p>
//                   </div>
//                 </a>
//               ))}
//             </div>
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }

// import { useState, useEffect, useRef } from "react";

// const badges = [
//   {
//     id: 0,
//     title: "General Data Protection Regulation",
//     desc: "We are fully GDPR compliant, ensuring your data is protected and managed in accordance with EU privacy laws and regulations.",
//     img: "https://compucodeltd.com/images/blobs/gdpr-compliant.webp",
//     alt: "GDPR Compliant",
//     tag: "GDPR",
//     tagColor: "#3b5fc0",
//   },
//   {
//     id: 1,
//     title: "Payment Card Industry Data Security Standard",
//     desc: "Our platform meets PCI DSS standards, protecting cardholder data with strict security protocols and regular audits.",
//     img: "https://compucodeltd.com/images/blobs/pci_dss.png",
//     alt: "PCI DSS Compliant",
//     tag: "PCI DSS",
//     tagColor: "#1a7a4a",
//   },
//   {
//     id: 2,
//     title: "Nigeria Data Protection Regulation",
//     desc: "We comply with the Nigeria Data Protection Commission standards, safeguarding personal data of Nigerian users and clients.",
//     img: "https://compucodeltd.com/images/blobs/ndpr_compliant.png",
//     alt: "NDPR Compliant",
//     tag: "NDPR",
//     tagColor: "#2e6b3e",
//   },
//   {
//     id: 3,
//     title: "Gramm-Leach-Bliley Act",
//     desc: "We adhere to GLBA requirements, protecting consumers' private financial information held by financial institutions.",
//     img: "https://compucodeltd.com/images/blobs/glba_compliant.png",
//     alt: "GLBA Compliant",
//     tag: "GLBA",
//     tagColor: "#1b3f6e",
//   },
// ];

// const CARDS_PER_SLIDE = 3;
// const AUTO_INTERVAL = 5000;

// function chunkArray(arr, size) {
//   const result = [];
//   for (let i = 0; i < arr.length; i += size) result.push(arr.slice(i, i + size));
//   return result;
// }

// export default function ComplianceSection() {
//   const slides = chunkArray(badges, CARDS_PER_SLIDE);
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
//   }, []);

//   const goTo = (n) => {
//     setCurrent((n + slides.length) % slides.length);
//     startTimer();
//   };

//   // swipe support
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

//         .comp-section {
//           background: #fff;
//           padding: 56px 16px 64px;
//           font-family: 'DM Sans', sans-serif;
//         }
//         .comp-inner { max-width: 1100px; margin: 0 auto; }

//         /* Header */
//         .comp-header { text-align: center; margin-bottom: 40px; }
//         .comp-h2 {
//           font-family: 'Sora', sans-serif;
//           font-weight: 700;
//           font-size: clamp(1.4rem, 4vw, 2.2rem);
//           color: #111;
//           margin: 0;
//         }

//         /* Carousel */
//         .comp-overflow { overflow: hidden; }
//         .comp-track {
//           display: flex;
//           transition: transform 0.45s cubic-bezier(.4,0,.2,1);
//           will-change: transform;
//         }
//         .comp-slide {
//           min-width: 100%;
//           display: grid;
//           grid-template-columns: repeat(3, 1fr);
//           gap: 28px;
//           align-items: start;
//           box-sizing: border-box;
//         }
//         @media (max-width: 640px) {
//           .comp-slide { grid-template-columns: repeat(3, 1fr); gap: 10px; }
//         }

//         /* Card — exactly like image: title top, image middle, text bottom */
//         .comp-card {
//           display: flex;
//           flex-direction: column;
//           background: #fff;
//           border: none;
//         }

//         /* Title on top — centered, bold */
//         .comp-card-title {
//           font-family: 'Sora', sans-serif;
//           font-weight: 700;
//           font-size: clamp(0.7rem, 1.1vw, 0.95rem);
//           color: #111;
//           text-align: center;
//           line-height: 1.35;
//           margin: 0 0 14px;
//           min-height: 48px;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//         }

//         /* Image — full width, proportional */
//         .comp-img-wrap {
//           width: 100%;
//           aspect-ratio: 4/3;
//           overflow: hidden;
//           flex-shrink: 0;
//           margin-bottom: 14px;
//         }
//         .comp-img {
//           width: 100%;
//           height: 100%;
//           object-fit: cover;
//           display: block;
//         }

//         /* Description */
//         .comp-desc {
//           font-size: clamp(0.65rem, 1vw, 0.8rem);
//           color: #374151;
//           line-height: 1.6;
//           margin: 0;
//         }

//         /* Nav */
//         .comp-nav {
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           gap: 12px;
//           margin-top: 32px;
//         }
//         .comp-arrow {
//           width: 32px; height: 32px;
//           border-radius: 50%;
//           border: 1.5px solid #d1d5db;
//           background: none;
//           display: flex; align-items: center; justify-content: center;
//           cursor: pointer; color: #6b7280;
//           transition: border-color 0.2s, color 0.2s;
//         }
//         .comp-arrow:hover { border-color: #e53e2d; color: #e53e2d; }
//         .comp-dots { display: flex; gap: 6px; align-items: center; }
//         .comp-dot {
//           width: 7px; height: 7px;
//           border-radius: 50%;
//           border: none;
//           background: #d1d5db;
//           cursor: pointer; padding: 0;
//           transition: background 0.25s, transform 0.25s;
//         }
//         .comp-dot.active { background: #e53e2d; transform: scale(1.35); }
//       `}</style>

//       <section className="comp-section">
//         <div className="comp-inner">

//           {/* Header */}
//           <div className="comp-header">
//             <h2 className="comp-h2">Compliance &amp; Security News</h2>
//           </div>

//           {/* Carousel */}
//           <div
//             className="comp-overflow"
//             onTouchStart={handleTouchStart}
//             onTouchEnd={handleTouchEnd}
//           >
//             <div
//               className="comp-track"
//               style={{ transform: `translateX(-${current * 100}%)` }}
//             >
//               {slides.map((slide, si) => (
//                 <div key={si} className="comp-slide">
//                   {slide.map((card) => (
//                     <div key={card.id} className="comp-card">

//                       {/* Title on top */}
//                       <h3 className="comp-card-title">{card.title}</h3>

//                       {/* Image */}
//                       <div className="comp-img-wrap">
//                         <img
//                           src={card.img}
//                           alt={card.alt}
//                           className="comp-img"
//                           loading="lazy"
//                         />
//                       </div>

//                       {/* Description */}
//                       <p className="comp-desc">{card.desc}</p>

//                     </div>
//                   ))}
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Navigation dots + arrows */}
//           <div className="comp-nav">
//             <button className="comp-arrow" onClick={() => goTo(current - 1)} aria-label="Previous">
//               <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
//                 <polyline points="15 18 9 12 15 6" />
//               </svg>
//             </button>

//             <div className="comp-dots">
//               {slides.map((_, i) => (
//                 <button
//                   key={i}
//                   className={`comp-dot${i === current ? " active" : ""}`}
//                   onClick={() => goTo(i)}
//                   aria-label={`Slide ${i + 1}`}
//                 />
//               ))}
//             </div>

//             <button className="comp-arrow" onClick={() => goTo(current + 1)} aria-label="Next">
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
import { useState, useEffect, useRef } from "react";

const badges = [
  {
    id: 0,
    title: "General Data Protection Regulation",
    desc: "We are fully GDPR compliant, ensuring your data is protected and managed in accordance with EU privacy laws and regulations.",
    img: "https://compucodeltd.com/images/blobs/gdpr-compliant.webp",
    alt: "GDPR Compliant",
    tag: "GDPR",
    tagColor: "#3b5fc0",
  },
  {
    id: 1,
    title: "Payment Card Industry Data Security Standard",
    desc: "Our platform meets PCI DSS standards, protecting cardholder data with strict security protocols and regular audits.",
    img: "https://compucodeltd.com/images/blobs/pci_dss.png",
    alt: "PCI DSS Compliant",
    tag: "PCI DSS",
    tagColor: "#1a7a4a",
  },
  {
    id: 2,
    title: "Nigeria Data Protection Regulation",
    desc: "We comply with the Nigeria Data Protection Commission standards, safeguarding personal data of Nigerian users and clients.",
    img: "https://compucodeltd.com/images/blobs/ndpr_compliant.png",
    alt: "NDPR Compliant",
    tag: "NDPR",
    tagColor: "#2e6b3e",
  },
  {
    id: 3,
    title: "Gramm-Leach-Bliley Act",
    desc: "We adhere to GLBA requirements, protecting consumers' private financial information held by financial institutions.",
    img: "https://compucodeltd.com/images/blobs/glba_compliant.png",
    alt: "GLBA Compliant",
    tag: "GLBA",
    tagColor: "#1b3f6e",
  },
];

const CARDS_PER_SLIDE = 3;
const AUTO_INTERVAL = 5000;

function chunkArray(arr, size) {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    const chunk = arr.slice(i, i + size);
    // Fill incomplete last chunk by repeating from beginning
    let j = 0;
    while (chunk.length < size) {
      chunk.push({ ...arr[j % arr.length], id: `fill-${i}-${j}` });
      j++;
    }
    result.push(chunk);
  }
  return result;
}

export default function ComplianceSection() {
  const slides = chunkArray(badges, CARDS_PER_SLIDE);
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
  }, []);

  const goTo = (n) => {
    setCurrent((n + slides.length) % slides.length);
    startTimer();
  };

  // swipe support
  const touchStartX = useRef(null);
  const handleTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; };
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

        .comp-section {
          background: #fff;
          padding: 56px 16px 64px;
          font-family: 'DM Sans', sans-serif;
        }
        .comp-inner { max-width: 1100px; margin: 0 auto; }

        /* Header */
        .comp-header { text-align: center; margin-bottom: 40px; }
        .comp-h2 {
          font-family: 'Sora', sans-serif;
          font-weight: 700;
          font-size: clamp(1.4rem, 4vw, 2.2rem);
          color: #111;
          margin: 0;
        }

        /* Carousel */
        .comp-overflow { overflow: hidden; }
        .comp-track {
          display: flex;
          transition: transform 0.45s cubic-bezier(.4,0,.2,1);
          will-change: transform;
        }
        .comp-slide {
          min-width: 100%;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
          align-items: start;
          box-sizing: border-box;
        }
        @media (max-width: 640px) {
          .comp-slide { grid-template-columns: repeat(3, 1fr); gap: 10px; }
        }

        /* Card — exactly like image: title top, image middle, text bottom */
        .comp-card {
          display: flex;
          flex-direction: column;
          background: #fff;
          border: none;
        }

        /* Title on top — centered, bold */
        .comp-card-title {
          font-family: 'Sora', sans-serif;
          font-weight: 700;
          font-size: clamp(0.7rem, 1.1vw, 0.95rem);
          color: #111;
          text-align: center;
          line-height: 1.35;
          margin: 0 0 14px;
          min-height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Image — full width, proportional */
        .comp-img-wrap {
          width: 100%;
          aspect-ratio: 4/3;
          overflow: hidden;
          flex-shrink: 0;
          margin-bottom: 14px;
        }
        .comp-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        /* Description */
        .comp-desc {
          font-size: clamp(0.65rem, 1vw, 0.8rem);
          color: #374151;
          line-height: 1.6;
          margin: 0;
        }

        /* Nav */
        .comp-nav {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          margin-top: 32px;
        }
        .comp-arrow {
          width: 32px; height: 32px;
          border-radius: 50%;
          border: 1.5px solid #d1d5db;
          background: none;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; color: #6b7280;
          transition: border-color 0.2s, color 0.2s;
        }
        .comp-arrow:hover { border-color: #e53e2d; color: #e53e2d; }
        .comp-dots { display: flex; gap: 6px; align-items: center; }
        .comp-dot {
          width: 7px; height: 7px;
          border-radius: 50%;
          border: none;
          background: #d1d5db;
          cursor: pointer; padding: 0;
          transition: background 0.25s, transform 0.25s;
        }
        .comp-dot.active { background: #e53e2d; transform: scale(1.35); }
      `}</style>

      <section className="comp-section">
        <div className="comp-inner">

          {/* Header */}
          <div className="comp-header">
            <h2 className="comp-h2">Compliance &amp; Security News</h2>
          </div>

          {/* Carousel */}
          <div
            className="comp-overflow"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="comp-track"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {slides.map((slide, si) => (
                <div key={si} className="comp-slide">
                  {slide.map((card) => (
                    <div key={card.id} className="comp-card">

                      {/* Title on top */}
                      <h3 className="comp-card-title">{card.title}</h3>

                      {/* Image */}
                      <div className="comp-img-wrap">
                        <img
                          src={card.img}
                          alt={card.alt}
                          className="comp-img"
                          loading="lazy"
                        />
                      </div>

                      {/* Description */}
                      <p className="comp-desc">{card.desc}</p>

                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Navigation dots + arrows */}
          <div className="comp-nav">
            <button className="comp-arrow" onClick={() => goTo(current - 1)} aria-label="Previous">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>

            <div className="comp-dots">
              {slides.map((_, i) => (
                <button
                  key={i}
                  className={`comp-dot${i === current ? " active" : ""}`}
                  onClick={() => goTo(i)}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>

            <button className="comp-arrow" onClick={() => goTo(current + 1)} aria-label="Next">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>

        </div>
      </section>
    </>
  );
}
