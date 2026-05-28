// import { Link } from "react-router-dom";
// import {
//   ArrowRight,
//   Check,
//   Code2,
//   Cpu,
//   Layers,
//   Sparkles,
// } from "lucide-react";
// import InfrastructureUpgrade from "../components/InfrastructureUpgrade";
// import Footer from "../components/Footer";

// const HERO_BG = "https://www.compucodeltd.com/images/banners/body-bg.jpg";
// const APP_IMG = "https://compucodeltd.com/images/blobs/analytics.png";

// const ecosystemItems = [
//   {
//     icon: Code2,
//     title: "Custom Application Development",
//     text: "Build applications tailored to your business—powered by Generative AI for faster delivery and smarter features.",
//   },
//   {
//     icon: Layers,
//     title: "Configured Operations",
//     text: "Applications execute only on specified operational instructions—delivering precise, accurate, and error-free process execution.",
//   },
//   {
//     icon: Sparkles,
//     title: "AI-Powered Innovation",
//     text: "Embed Generative AI into your software stack to automate complex workflows and accelerate time to market.",
//   },
// ];

// const features = [
//   "Precise, accurate, and error-free process execution",
//   "Long-term efficiency and cost savings for routine jobs",
//   "Application development aligned with business goals",
//   "Scalable solutions built for enterprise security",
// ];

// export default function ApplicationDevelop() {
//   return (
//     <div className="font-['Inter',sans-serif] bg-white">
//       {/* Hero */}
//       <section className="relative pt-16 overflow-hidden">
//         <div
//           className="absolute inset-0 bg-cover bg-top bg-no-repeat"
//           style={{ backgroundImage: `url(${HERO_BG})` }}
//         />
//         <div className="absolute inset-0 bg-black/55" />

//         <div className="relative z-10 max-w-4xl mx-auto px-6 py-24 md:py-32 text-center">
//           <p className="text-sm font-semibold tracking-widest uppercase text-white/80 mb-4">
//             Our Solutions
//           </p>
//           <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
//             Infrastructure Virtualization

//          </h1>
//           <p className="text-base md:text-lg text-white/85 leading-relaxed max-w-2xl mx-auto mb-10">
//         Compucode provides you with globally tested skill set to virtualize your infrastructure. We derive pleasure in our ability to transform your business practices and ‘simplify IT’ from your end user devices (desktops, Laptops) all the way to your servers in the datacenter.

// We partner with leading global innovators in virtualization to support your business

//           </p>
//           <Link
//             to="/contact"
//             className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-[#e53e2d] text-[#e53e2d] bg-transparent font-bold text-sm tracking-wide uppercase rounded-sm hover:bg-[#e53e2d] hover:text-white transition-colors duration-200"
//           >
//             Get Started Now
//             <ArrowRight size={18} />
//           </Link>
//         </div>
//       </section>

//       {/* Ecosystem grid */}
//       <section className="py-20 md:py-24 px-6 bg-white">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//             Built to Work With Your Ecosystem
//           </h2>
//           <p className="text-gray-500 text-base leading-relaxed max-w-3xl mb-14">
//            Compucode provides you with globally tested skill set to virtualize your infrastructure. We derive pleasure in our ability to transform your business practices and ‘simplify IT’ from your end user devices (desktops, Laptops) all the way to your servers in the datacenter.

// We partner with leading global innovators in virtualization to support your business
//           </p>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
//             {ecosystemItems.map(({ icon: Icon, title, text }) => (
//               <div key={title}>
//                 <div className="mb-4 w-12 h-12 rounded-lg bg-[#e53e2d]/10 flex items-center justify-center">
//                   <Icon className="w-6 h-6 text-[#e53e2d]" strokeWidth={1.5} />
//                 </div>
//                 <h3 className="text-lg font-bold text-gray-900 mb-3">
//                   {title}
//                 </h3>
//                 <p className="text-sm text-gray-500 leading-relaxed">{text}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Feature split */}
//       <section className="py-20 md:py-24 px-6 bg-[#fafafa]">
//         <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
//           <div>
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5 leading-tight">
//               Application Development with{" "}
//               <span className="text-[#e53e2d]">Generative AI</span>
//             </h2>
//             <p className="text-gray-500 text-sm leading-relaxed mb-6">
//               Since the application system is made to execute only on specified
//               and configured operational instructions, it results in giving a
//               precise, accurate and error free process execution.
//             </p>
//             <Link
//               to="/contact"
//               className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-900 text-white text-sm font-semibold rounded-md hover:bg-black transition-colors mb-10"
//             >
//               Learn More
//               <ArrowRight size={16} />
//             </Link>

//             <ul className="space-y-4">
//               {features.map((item) => (
//                 <li key={item} className="flex items-start gap-3">
//                   <span className="flex-shrink-0 mt-0.5 w-6 h-6 rounded-full bg-[#e53e2d]/15 flex items-center justify-center">
//                     <Check className="w-4 h-4 text-[#e53e2d]" strokeWidth={2.5} />
//                   </span>
//                   <span className="text-sm text-gray-700 leading-relaxed">
//                     {item}
//                   </span>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <div className="flex justify-center lg:justify-end">
//             <div className="relative w-full max-w-md">
//               <div
//                 className="absolute -inset-4 rounded-2xl opacity-20 blur-2xl"
//                 style={{
//                   background:
//                     "linear-gradient(135deg, #e53e2d 0%, #7c3aed 50%, #14b8a6 100%)",
//                 }}
//               />
//               <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f0f0f] p-8 min-h-[320px] flex flex-col items-center justify-center">
//                 <img
//                   src={APP_IMG}
//                   alt="Application development"
//                   className="w-full max-w-xs object-contain mb-6"
//                 />
//                 <div className="flex items-center gap-2 text-white/90">
//                   <Cpu className="w-5 h-5 text-[#e53e2d]" />
//                   <span className="text-sm font-semibold tracking-wide">
//                     Compucode Ltd
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Main content */}
//       <section className="py-20 md:py-24 px-6 bg-white">
//         <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
//           <div className="md:col-span-5 flex justify-center">
//             <img
//               src={APP_IMG}
//               alt="App Development"
//               className="w-full max-w-md object-contain"
//             />
//           </div>
//           <div className="md:col-span-7">
//             <p className="text-sm text-gray-500 leading-relaxed text-justify mb-6">
//               In today&apos;s fast-growing economy, industrial processes upgrade
//               gives the sector a cheap and more effective way of attending to
//               the growing demand of existing and new customers. Establishments
//               have come to realise that application development and process
//               automation for routine jobs is a long-term initiative with a view
//               of better efficiency and cost savings.
//             </p>
//             <h3 className="text-xl md:text-2xl font-bold text-gray-900 leading-snug mb-8">
//               Since the application system is made to execute only on specified
//               and configured operational instructions, it results in giving a
//               precise, accurate and error free process execution.
//             </h3>
//             <Link
//               to="/contact"
//               className="inline-flex items-center gap-2 px-6 py-3 border border-[#e53e2d] text-[#e53e2d] font-bold text-xs tracking-widest uppercase hover:bg-[#e53e2d] hover:text-white transition-colors duration-200"
//             >
//               Get Started Now
//               <ArrowRight size={16} />
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* Bottom CTA */}
//       <section className="py-16 md:py-20 px-6 bg-[#111111]">
//         <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
//           <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
//             Learn how Compucode{" "}
//             <span className="text-[#e53e2d]">completes</span> your tech stack.
//           </h2>
//           <div>
//             <p className="text-gray-400 text-sm leading-relaxed mb-8">
//               Our AI-enhanced team delivers scalable, secure, integrated IT
//               solutions—engineered for predictive scalability and an enterprise
//               security mindset.
//             </p>
//             <Link
//               to="/contact"
//               className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-[#e53e2d] text-[#e53e2d] font-bold text-sm tracking-wide uppercase rounded-sm hover:bg-[#e53e2d] hover:text-white transition-colors duration-200"
//             >
//               Contact Us
//               <ArrowRight size={18} />
//             </Link>
//           </div>
//         </div>
//       </section>

//       <InfrastructureUpgrade />
//       <Footer />
//     </div>
//   );
// }

import { Link } from "react-router-dom";
import {
  ArrowRight,
  Check,
  Code2,
  Cpu,
  Layers,
  Sparkles,
} from "lucide-react";
import InfrastructureUpgrade from "../components/InfrastructureUpgrade";
import Footer from "../components/Footer";

// Google Fonts import — add this once in your index.html or global CSS:
// <link href="https://fonts.googleapis.com/css2?family=Sora:wght@600&family=DM+Sans:wght@400&display=swap" rel="stylesheet">

const HERO_BG = "https://www.compucodeltd.com/images/banners/body-bg.jpg";
const APP_IMG = "https://compucodeltd.com/images/blobs/analytics.png";

const ecosystemItems = [
  {
    icon: Code2,
    title: "Custom Application Development",
    text: "Build applications tailored to your business—powered by Generative AI for faster delivery and smarter features.",
  },
  {
    icon: Layers,
    title: "Configured Operations",
    text: "Applications execute only on specified operational instructions—delivering precise, accurate, and error-free process execution.",
  },
  {
    icon: Sparkles,
    title: "AI-Powered Innovation",
    text: "Embed Generative AI into your software stack to automate complex workflows and accelerate time to market.",
  },
];

const features = [
  "Precise, accurate, and error-free process execution",
  "Long-term efficiency and cost savings for routine jobs",
  "Application development aligned with business goals",
  "Scalable solutions built for enterprise security",
];

/* Inline style helpers so fonts work without touching index.html */
const soraHeading = {
  fontFamily: "'Sora', sans-serif",
  fontWeight: 600,
};

const dmSansBody = {
  fontFamily: "'DM Sans', sans-serif",
  fontWeight: 400,
};

export default function infrastructureVirtualisation() {
  return (
    <>
      {/* Font loader — injected once via a <style> tag */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@600&family=DM+Sans:wght@400;500&display=swap');

        /* Reset & base */
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        /* Utility: clamp fluid type */
        .ad-hero-title  { font-size: clamp(1.75rem, 5vw, 3.75rem); }
        .ad-section-title { font-size: clamp(1.5rem, 3.5vw, 2.5rem); }
        .ad-sub-title   { font-size: clamp(1.1rem, 2.5vw, 1.5rem); }
      `}</style>

      <div style={dmSansBody} className="bg-white">

        {/* ── Hero ─────────────────────────────────────────────── */}
        <section className="relative pt-16 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-top bg-no-repeat"
            style={{ backgroundImage: `url(${HERO_BG})` }}
          />
          <div className="absolute inset-0 bg-black/55" />

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 py-20 sm:py-28 md:py-32 text-center">
            <p
              style={{ ...dmSansBody, letterSpacing: "0.12em" }}
              className="text-xs sm:text-sm font-medium uppercase text-white/80 mb-4"
            >
              Our Solutions
            </p>

            <h1
              style={soraHeading}
              className="ad-hero-title text-white mb-6 text-nowrap leading-tight"
            >
              Infrastructure Virtualization
            </h1>

            <p
              style={dmSansBody}
              className="text-sm sm:text-base md:text-lg text-white/85 leading-relaxed   mb-5"
            >
              Compucode provides you with globally tested skill set to virtualize
              your infrastructure. We derive pleasure in our ability to transform
              your business practices and &lsquo;simplify IT&rsquo; from your end
              user devices (desktops, Laptops) all the way to your servers in the
              datacenter. We partner with leading global innovators in
              virtualization to support your business.
            </p>

            <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 bg-[#e53e2d] border-2 border-[#e53e2d] text-white font-bold text-xs sm:text-sm tracking-wide uppercase rounded-sm hover:bg-white hover:text-[#e53e2d] transition-all duration-200"
          >
              Get Started Now
              <ArrowRight size={18} />
            </Link>
          </div>
        </section>

        {/* ── Ecosystem grid ───────────────────────────────────── */}
        <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 style={soraHeading} className="ad-section-title text-gray-900 mb-4">
              Built to Work With Your Ecosystem
            </h2>
            <p
              style={dmSansBody}
              className="text-gray-500 text-sm sm:text-base leading-relaxed max-w-3xl mb-10 sm:mb-14"
            >
              Compucode provides you with globally tested skill set to virtualize
              your infrastructure. We derive pleasure in our ability to transform
              your business practices and &lsquo;simplify IT&rsquo; from your end
              user devices (desktops, Laptops) all the way to your servers in the
              datacenter. We partner with leading global innovators in
              virtualization to support your business.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12">
              {ecosystemItems.map(({ icon: Icon, title, text }) => (
                <div key={title}>
                  <div className="mb-4 w-12 h-12 rounded-lg bg-[#e53e2d]/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-[#e53e2d]" strokeWidth={1.5} />
                  </div>
                  <h3 style={soraHeading} className="text-base sm:text-lg text-gray-900 mb-3">
                    {title}
                  </h3>
                  <p style={dmSansBody} className="text-sm text-gray-500 leading-relaxed">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Feature split ────────────────────────────────────── */}
        <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-[#fafafa]">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            {/* Text side */}
            <div>
              <h2
                style={soraHeading}
                className="ad-section-title  text-gray-900 mb-5 leading-tight"
              >
               Infrastructure Virtualization{" "}
                <span className="text-[#e53e2d]">Generative AI</span>
              </h2>
              <p style={dmSansBody} className="text-gray-500 text-sm leading-relaxed mb-6">
                Since the application system is made to execute only on specified
                and configured operational instructions, it results in giving a
                precise, accurate and error free process execution.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-900 text-white text-xs sm:text-sm font-semibold rounded-md hover:bg-black transition-colors mb-8 sm:mb-10"
                style={soraHeading}
              >
                Learn More
                <ArrowRight size={16} />
              </Link>

              <ul className="space-y-3 sm:space-y-4">
                {features.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="flex-shrink-0 mt-0.5 w-6 h-6 rounded-full bg-[#e53e2d]/15 flex items-center justify-center">
                      <Check className="w-4 h-4 text-[#e53e2d]" strokeWidth={2.5} />
                    </span>
                    <span style={dmSansBody} className="text-sm text-gray-700 leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Image side */}
            <div className="flex justify-center lg:justify-end mt-8 lg:mt-0">
              <div className="relative w-full max-w-sm sm:max-w-md">
                <div
                  className="absolute -inset-4 rounded-2xl opacity-20 blur-2xl"
                  style={{
                    background:
                      "linear-gradient(135deg, #e53e2d 0%, #7c3aed 50%, #14b8a6 100%)",
                  }}
                />
                <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f0f0f] p-6 sm:p-8 min-h-[260px] sm:min-h-[320px] flex flex-col items-center justify-center">
                  <img
                    src={APP_IMG}
                    alt="Application development"
                    className="w-full max-w-[200px] sm:max-w-xs object-contain mb-6"
                  />
                  <div className="flex items-center gap-2 text-white/90">
                    <Cpu className="w-5 h-5 text-[#e53e2d]" />
                    <span style={soraHeading} className="text-sm tracking-wide">
                      Compucode Ltd
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Main content ─────────────────────────────────────── */}
        <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-white">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 items-center">

            {/* Image */}
            <div className="md:col-span-5 flex justify-center">
              <img
                src={APP_IMG}
                alt="App Development"
                className="w-full max-w-xs sm:max-w-sm md:max-w-md object-contain"
              />
            </div>

            {/* Text */}
            <div className="md:col-span-7">
              <p style={dmSansBody} className="text-sm text-gray-500 leading-relaxed text-justify mb-6">
                In today&apos;s fast-growing economy, industrial processes upgrade
                gives the sector a cheap and more effective way of attending to
                the growing demand of existing and new customers. Establishments
                have come to realise that application development and process
                automation for routine jobs is a long-term initiative with a view
                of better efficiency and cost savings.
              </p>
              <h3
                style={soraHeading}
                className="ad-sub-title text-gray-900 leading-snug mb-8"
              >
                Since the application system is made to execute only on specified
                and configured operational instructions, it results in giving a
                precise, accurate and error free process execution.
              </h3>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-5 sm:px-6 py-3 border border-[#e53e2d] text-[#e53e2d] font-bold text-xs tracking-widest uppercase hover:bg-[#e53e2d] hover:text-white transition-colors duration-200"
                style={soraHeading}
              >
                Get Started Now
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        {/* ── Bottom CTA ───────────────────────────────────────── */}
        {/* <section className="py-14 sm:py-16 md:py-20 px-4 sm:px-6 bg-[#111111]">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">
            <h2
              style={soraHeading}
              className="ad-section-title text-white leading-tight"
            >
              Learn how Compucode{" "}
              <span className="text-[#e53e2d]">completes</span> your tech stack.
            </h2>
            <div>
              <p style={dmSansBody} className="text-gray-400 text-sm leading-relaxed mb-6 sm:mb-8">
                Our AI-enhanced team delivers scalable, secure, integrated IT
                solutions—engineered for predictive scalability and an enterprise
                security mindset.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 border-2 border-[#e53e2d] text-[#e53e2d] font-bold text-xs sm:text-sm tracking-wide uppercase rounded-sm hover:bg-[#e53e2d] hover:text-white transition-colors duration-200"
                style={soraHeading}
              >
                Contact Us
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section> */}

        <InfrastructureUpgrade />
        <Footer />
      </div>
    </>
  );
}