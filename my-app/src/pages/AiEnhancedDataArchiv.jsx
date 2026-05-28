// // import { Link } from "react-router-dom";
// // import {
// //   ArrowRight,
// //   Brain,
// //   Check,
// //   Database,
// //   FileSearch,
// //   ShieldCheck,
// // } from "lucide-react";
// // import InfrastructureUpgrade from "../components/InfrastructureUpgrade";
// // import Footer from "../components/Footer";

// // const HERO_BG = "https://www.compucodeltd.com/images/banners/body-bg.jpg";
// // const ARCHIVE_IMG =
// //   "https://www.compucodeltd.com/images/blobs/CompucodeAITech3.jpg";

// // const keyCapabilities = [
// //   {
// //     icon: Brain,
// //     title: "Automated Classification & Tagging",
// //     text: "Let AI automatically understand and categorize your data. It intelligently applies metadata to both structured database entries and unstructured files like contracts and images, making them instantly discoverable.",
// //   },
// //   {
// //     icon: FileSearch,
// //     title: "Semantic Search & Retrieval",
// //     text: 'Go beyond keyword search. Ask questions in plain English to find the exact information you need—for example, "Find all invoices over $10,000 from last year that are pending approval" across all archived data.',
// //   },
// //   {
// //     icon: ShieldCheck,
// //     title: "Proactive Compliance & Governance",
// //     text: "Our AI continuously scans archives to identify sensitive data (PII, financial records), automatically enforces retention policies, and flags potential compliance risks, ensuring you meet regulatory requirements like GDPR and PCI DSS.",
// //   },
// // ];

// // const archiveFeatures = [
// //   "Automatically classify data and generate metadata",
// //   "Natural language search across your entire archive",
// //   "Unified system for compliance and optimized storage",
// //   "Make historical data accessible and useful",
// // ];

// // const structuredBullets = [
// //   "Seamless integration with existing databases",
// //   "Significant reduction in primary storage costs",
// //   "Maintained data integrity and query performance",
// // ];

// // const unstructuredBullets = [
// //   "AI-powered content and context extraction",
// //   "Facial and object recognition in images/videos",
// //   "Full-text indexing for natural language search",
// // ];

// // export default function AiEnhancedDataArchiving() {
// //   return (
// //     <div className="font-['Inter',sans-serif] bg-white">
// //       {/* Hero — Vestmark layout · CompuCode theme */}
// //       <section className="relative pt-16 overflow-hidden">
// //         <div
// //           className="absolute inset-0 bg-cover bg-top bg-no-repeat"
// //           style={{ backgroundImage: `url(${HERO_BG})` }}
// //         />
// //         <div className="absolute inset-0 bg-black/55" />

// //         <div className="relative z-10 max-w-5xl mx-auto px-6 py-24 md:py-32 text-center">
// //           <p className="text-sm font-semibold tracking-widest uppercase text-white/80 mb-4">
// //             Our Solutions
// //           </p>
// //           <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
// //             GenAI Information Lifecycle Management Suite
// //           </h1>
// //           <p className="text-base md:text-lg text-white/85 leading-relaxed max-w-2xl mx-auto mb-10">
// //             Transforming how you manage, search, and secure your data legacy.
// //           </p>
// //           <Link
// //             to="/contact"
// //             className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-[#e53e2d] text-[#e53e2d] bg-transparent font-bold text-sm tracking-wide uppercase rounded-sm hover:bg-[#e53e2d] hover:text-white transition-colors duration-200"
// //           >
// //             Schedule a Consultation
// //             <ArrowRight size={18} />
// //           </Link>
// //         </div>
// //       </section>

// //       {/* Unlock the Value — CompuCode intro */}
// //       {/* <section className="py-20 md:py-24 px-6 bg-white">
// //         <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
// //           <div className="md:col-span-5 flex justify-center">
// //             <img
// //               src={ARCHIVE_IMG}
// //               alt="Generative AI Data Archiving"
// //               className="w-full max-w-md rounded-2xl shadow-lg object-cover"
// //             />
// //           </div>
// //           <div className="md:col-span-7">
// //             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
// //               Unlock the Value in Your Archives
// //             </h2>
// //             <p className="text-sm text-gray-500 leading-relaxed text-justify mb-5">
// //               With Compucode GenAI Information Lifecycle Management suite, your
// //               archive becomes a secure, searchable, and intelligent asset. We
// //               transform the challenge of managing massive volumes of structured
// //               and unstructured data into a strategic advantage, reducing costs
// //               and unlocking insights.
// //             </p>
// //             <p className="text-sm text-gray-500 leading-relaxed text-justify">
// //               Our AI models automatically classify data, generate metadata, and
// //               enable natural language search across your entire archive. Whether
// //               it&apos;s database records, documents, or multimedia files, we
// //               provide a unified system to ensure compliance, optimize storage,
// //               and make your historical data accessible and useful.
// //             </p>
// //           </div>
// //         </div>
// //       </section> */}

// //       {/* Key Capabilities — Vestmark 3-col grid */}
// //       <section className="py-20 md:py-24 px-6 bg-[#fafafa]">
// //         <div className="max-w-6xl mx-auto">
// //           <div className="text-center mb-14">
// //             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
// //               Key Capabilities
// //             </h2>
// //             <p className="text-gray-500 text-base">
// //               Harnessing AI to solve your most complex archiving challenges.
// //             </p>
// //           </div>

// //           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
// //             {keyCapabilities.map(({ icon: Icon, title, text }) => (
// //               <div
// //                 key={title}
// //                 className="bg-white rounded-xl border border-gray-100 shadow-sm p-8 text-center h-full flex flex-col"
// //               >
// //                 <div className="mb-5 mx-auto w-14 h-14 rounded-xl bg-[#e53e2d]/10 flex items-center justify-center">
// //                   <Icon className="w-7 h-7 text-[#e53e2d]" strokeWidth={1.5} />
// //                 </div>
// //                 <h3 className="text-lg font-bold text-gray-900 mb-3">
// //                   {title}
// //                 </h3>
// //                 <p className="text-sm text-gray-500 leading-relaxed flex-1">
// //                   {text}
// //                 </p>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Feature split — Vestmark 2-col */}
// //       <section className="py-20 md:py-24 px-6 bg-white">
// //         <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
// //           <div>
// //             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5 leading-tight">
// //               Intelligent Archiving with{" "}
// //               <span className="text-[#e53e2d]">Generative AI</span>
// //             </h2>
// //             <p className="text-gray-500 text-sm leading-relaxed mb-6">
// //               Your archive becomes a secure, searchable, and intelligent asset—
// //               reducing costs and unlocking insights from structured and
// //               unstructured data alike.
// //             </p>
// //             <Link
// //               to="/contact"
// //               className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-900 text-white text-sm font-semibold rounded-md hover:bg-black transition-colors mb-10"
// //             >
// //               Learn More
// //               <ArrowRight size={16} />
// //             </Link>

// //             <ul className="space-y-4">
// //               {archiveFeatures.map((item) => (
// //                 <li key={item} className="flex items-start gap-3">
// //                   <span className="flex-shrink-0 mt-0.5 w-6 h-6 rounded-full bg-[#e53e2d]/15 flex items-center justify-center">
// //                     <Check className="w-4 h-4 text-[#e53e2d]" strokeWidth={2.5} />
// //                   </span>
// //                   <span className="text-sm text-gray-700 leading-relaxed">
// //                     {item}
// //                   </span>
// //                 </li>
// //               ))}
// //             </ul>
// //           </div>

// //           <div className="flex justify-center lg:justify-end">
// //             <div className="relative w-full max-w-md">
// //               <div
// //                 className="absolute -inset-4 rounded-2xl opacity-20 blur-2xl"
// //                 style={{
// //                   background:
// //                     "linear-gradient(135deg, #e53e2d 0%, #7c3aed 50%, #14b8a6 100%)",
// //                 }}
// //               />
// //               <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f0f0f] p-4 min-h-[320px] flex items-center justify-center">
// //                 <img
// //                   src={ARCHIVE_IMG}
// //                   alt="AI data archiving"
// //                   className="w-full rounded-xl object-cover"
// //                 />
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Structured & Unstructured — CompuCode 2-col */}
// //       <section className="py-20 md:py-24 px-6 bg-[#fafafa]">
// //         <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
// //           <div>
// //             <div className="flex items-center gap-2 mb-4">
// //               <Database className="w-6 h-6 text-[#e53e2d]" />
// //               <h3 className="text-2xl font-bold text-gray-900">
// //                 Structured Data Archiving
// //               </h3>
// //             </div>
// //             <p className="text-sm text-gray-500 leading-relaxed mb-6">
// //               Efficiently archive data from your production databases (SQL,
// //               NoSQL), ERPs, and other structured systems. Our solution optimizes
// //               storage costs by moving inactive data to a secure, low-cost tier
// //               without sacrificing accessibility. AI ensures that archived data
// //               remains queryable for analytics and reporting, turning your
// //               database archives into valuable historical repositories.
// //             </p>
// //             <ul className="space-y-3">
// //               {structuredBullets.map((item) => (
// //                 <li key={item} className="flex items-start gap-3">
// //                   <Check className="w-5 h-5 text-[#e53e2d] flex-shrink-0 mt-0.5" />
// //                   <span className="text-sm text-gray-700">{item}</span>
// //                 </li>
// //               ))}
// //             </ul>
// //           </div>

// //           <div>
// //             <div className="flex items-center gap-2 mb-4">
// //               <FileSearch className="w-6 h-6 text-[#e53e2d]" />
// //               <h3 className="text-2xl font-bold text-gray-900">
// //                 Unstructured Data Archiving
// //               </h3>
// //             </div>
// //             <p className="text-sm text-gray-500 leading-relaxed mb-6">
// //               Tackle the complexity of unstructured data from sources like emails,
// //               Microsoft Office files, PDFs, images, and videos. Generative AI
// //               excels at extracting context and meaning from these files. It can
// //               summarize long documents, identify faces in photos for easier
// //               search, and transcribe audio from video files, making your entire
// //               unstructured data archive searchable and intelligent.
// //             </p>
// //             <ul className="space-y-3">
// //               {unstructuredBullets.map((item) => (
// //                 <li key={item} className="flex items-start gap-3">
// //                   <Check className="w-5 h-5 text-[#e53e2d] flex-shrink-0 mt-0.5" />
// //                   <span className="text-sm text-gray-700">{item}</span>
// //                 </li>
// //               ))}
// //             </ul>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Bottom CTA — Vestmark split · CompuCode dark */}
// //       {/* <section className="py-16 md:py-20 px-6 bg-[#111111]">
// //         <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
// //           <div>
// //             <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
// //               Ready to Modernize Your{" "}
// //               <span className="text-[#e53e2d]">Archive?</span>
// //             </h2>
// //             <p className="text-gray-400 text-sm leading-relaxed">
// //               Let us show you how Generative AI can transform your data
// //               management strategy.
// //             </p>
// //           </div>
// //           <div className="lg:text-right">
// //             <Link
// //               to="/contact"
// //               className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-white text-white font-bold text-sm tracking-wide uppercase rounded-sm hover:bg-white hover:text-black transition-colors duration-200"
// //             >
// //               Schedule a Consultation
// //               <ArrowRight size={18} />
// //             </Link>
// //           </div>
// //         </div>
// //       </section> */}

// //       <InfrastructureUpgrade />
// //       <Footer />
// //     </div>
// //   );
// // }
// import { Link } from "react-router-dom";
// import {
//   ArrowRight,
//   Brain,
//   Check,
//   Database,
//   FileSearch,
//   ShieldCheck,
// } from "lucide-react";
// import InfrastructureUpgrade from "../components/InfrastructureUpgrade";
// import Footer from "../components/Footer";

// const HERO_BG = "https://www.compucodeltd.com/images/banners/body-bg.jpg";
// const ARCHIVE_IMG =
//   "https://www.compucodeltd.com/images/blobs/CompucodeAITech3.jpg";

// const keyCapabilities = [
//   {
//     icon: Brain,
//     title: "Automated Classification & Tagging",
//     text: "Let AI automatically understand and categorize your data. It intelligently applies metadata to both structured database entries and unstructured files like contracts and images, making them instantly discoverable.",
//   },
//   {
//     icon: FileSearch,
//     title: "Semantic Search & Retrieval",
//     text: 'Go beyond keyword search. Ask questions in plain English to find the exact information you need—for example, "Find all invoices over $10,000 from last year that are pending approval" across all archived data.',
//   },
//   {
//     icon: ShieldCheck,
//     title: "Proactive Compliance & Governance",
//     text: "Our AI continuously scans archives to identify sensitive data (PII, financial records), automatically enforces retention policies, and flags potential compliance risks, ensuring you meet regulatory requirements like GDPR and PCI DSS.",
//   },
// ];

// const archiveFeatures = [
//   "Automatically classify data and generate metadata",
//   "Natural language search across your entire archive",
//   "Unified system for compliance and optimized storage",
//   "Make historical data accessible and useful",
// ];

// const structuredBullets = [
//   "Seamless integration with existing databases",
//   "Significant reduction in primary storage costs",
//   "Maintained data integrity and query performance",
// ];

// const unstructuredBullets = [
//   "AI-powered content and context extraction",
//   "Facial and object recognition in images/videos",
//   "Full-text indexing for natural language search",
// ];

// export default function AiEnhancedDataArchiving() {
//   return (
//     <div className="font-['Inter',sans-serif] bg-white">

//       {/* ───────── HERO ───────── */}
//       <section className="relative pt-16 overflow-hidden">
//         <div
//           className="absolute inset-0 bg-cover bg-top bg-no-repeat"
//           style={{ backgroundImage: `url(${HERO_BG})` }}
//         />
//         <div className="absolute inset-0 bg-black/55" />

//         <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 text-center">

//           <p
//             className="text-xs sm:text-sm tracking-widest uppercase text-white/80 mb-4"
//             style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400 }}
//           >
//             Our Solutions
//           </p>

//           <h1
//             className="text-3xl sm:text-4xl md:text-5xl text-white mb-6 leading-tight"
//             style={{ fontFamily: "'Sora', sans-serif", fontWeight: 600 }}
//           >
//             GenAI Information Lifecycle Management Suite
//           </h1>

//           <p
//             className="text-sm sm:text-base md:text-lg text-white/85 leading-relaxed max-w-2xl mx-auto mb-10"
//             style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400 }}
//           >
//             Transforming how you manage, search, and secure your data legacy.
//           </p>

//           <Link
//             to="/contact"
//             className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 border-2 border-[#e53e2d] text-[#e53e2d] bg-transparent font-bold text-xs sm:text-sm tracking-wide uppercase rounded-sm hover:bg-[#e53e2d] hover:text-white transition-colors duration-200"
//           >
//             Schedule a Consultation
//             <ArrowRight size={18} />
//           </Link>

//         </div>
//       </section>

//       {/* ───────── KEY CAPABILITIES ───────── */}
//       <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-[#fafafa]">
//         <div className="max-w-6xl mx-auto">

//           <div className="text-center mb-10 sm:mb-14">
//             <h2
//               className="text-2xl sm:text-3xl md:text-4xl text-gray-900 mb-3"
//               style={{ fontFamily: "'Sora', sans-serif", fontWeight: 600 }}
//             >
//               Key Capabilities
//             </h2>
//             <p
//               className="text-sm sm:text-base text-gray-500"
//               style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400 }}
//             >
//               Harnessing AI to solve your most complex archiving challenges.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
//             {keyCapabilities.map(({ icon: Icon, title, text }) => (
//               <div
//                 key={title}
//                 className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 sm:p-8 text-center flex flex-col"
//               >
//                 <div className="mb-5 mx-auto w-14 h-14 rounded-xl bg-[#e53e2d]/10 flex items-center justify-center">
//                   <Icon className="w-7 h-7 text-[#e53e2d]" strokeWidth={1.5} />
//                 </div>
//                 <h3
//                   className="text-base sm:text-lg text-gray-900 mb-3"
//                   style={{ fontFamily: "'Sora', sans-serif", fontWeight: 600 }}
//                 >
//                   {title}
//                 </h3>
//                 <p
//                   className="text-sm text-gray-500 leading-relaxed flex-1"
//                   style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400 }}
//                 >
//                   {text}
//                 </p>
//               </div>
//             ))}
//           </div>

//         </div>
//       </section>

//       {/* ───────── FEATURE SPLIT ───────── */}
//       <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-white">
//         <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

//           {/* Text Side */}
//           <div>
//             <h2
//               className="text-2xl sm:text-3xl md:text-4xl text-gray-900 mb-5 leading-tight"
//               style={{ fontFamily: "'Sora', sans-serif", fontWeight: 600 }}
//             >
//               Intelligent Archiving with{" "}
//               <span className="text-[#e53e2d]">Generative AI</span>
//             </h2>

//             <p
//               className="text-sm sm:text-base text-gray-500 leading-relaxed mb-6"
//               style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400 }}
//             >
//               Your archive becomes a secure, searchable, and intelligent asset—
//               reducing costs and unlocking insights from structured and
//               unstructured data alike.
//             </p>

//             <Link
//               to="/contact"
//               className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-900 text-white text-sm font-semibold rounded-md hover:bg-black transition-colors mb-8 sm:mb-10"
//             >
//               Learn More
//               <ArrowRight size={16} />
//             </Link>

//             <ul className="space-y-4">
//               {archiveFeatures.map((item) => (
//                 <li key={item} className="flex items-start gap-3">
//                   <span className="flex-shrink-0 mt-0.5 w-6 h-6 rounded-full bg-[#e53e2d]/15 flex items-center justify-center">
//                     <Check className="w-4 h-4 text-[#e53e2d]" strokeWidth={2.5} />
//                   </span>
//                   <span
//                     className="text-sm text-gray-700 leading-relaxed"
//                     style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400 }}
//                   >
//                     {item}
//                   </span>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Image Side */}
//           <div className="flex justify-center lg:justify-end">
//             <div className="relative w-full max-w-sm sm:max-w-md">
//               <div
//                 className="absolute -inset-4 rounded-2xl opacity-20 blur-2xl"
//                 style={{
//                   background:
//                     "linear-gradient(135deg, #e53e2d 0%, #7c3aed 50%, #14b8a6 100%)",
//                 }}
//               />
//               <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f0f0f] p-4 min-h-[260px] sm:min-h-[320px] flex items-center justify-center">
//                 <img
//                   src={ARCHIVE_IMG}
//                   alt="AI data archiving"
//                   className="w-full rounded-xl object-cover"
//                 />
//               </div>
//             </div>
//           </div>

//         </div>
//       </section>

//       {/* ───────── STRUCTURED & UNSTRUCTURED ───────── */}
//       <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-[#fafafa]">
//         <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">

//           {/* Structured */}
//           <div>
//             <div className="flex items-center gap-2 mb-4">
//               <Database className="w-6 h-6 text-[#e53e2d] flex-shrink-0" />
//               <h3
//                 className="text-xl sm:text-2xl text-gray-900"
//                 style={{ fontFamily: "'Sora', sans-serif", fontWeight: 600 }}
//               >
//                 Structured Data Archiving
//               </h3>
//             </div>
//             <p
//               className="text-sm text-gray-500 leading-relaxed mb-6"
//               style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400 }}
//             >
//               Efficiently archive data from your production databases (SQL,
//               NoSQL), ERPs, and other structured systems. Our solution optimizes
//               storage costs by moving inactive data to a secure, low-cost tier
//               without sacrificing accessibility. AI ensures that archived data
//               remains queryable for analytics and reporting, turning your
//               database archives into valuable historical repositories.
//             </p>
//             <ul className="space-y-3">
//               {structuredBullets.map((item) => (
//                 <li key={item} className="flex items-start gap-3">
//                   <Check className="w-5 h-5 text-[#e53e2d] flex-shrink-0 mt-0.5" />
//                   <span
//                     className="text-sm text-gray-700"
//                     style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400 }}
//                   >
//                     {item}
//                   </span>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Unstructured */}
//           <div>
//             <div className="flex items-center gap-2 mb-4">
//               <FileSearch className="w-6 h-6 text-[#e53e2d] flex-shrink-0" />
//               <h3
//                 className="text-xl sm:text-2xl text-gray-900"
//                 style={{ fontFamily: "'Sora', sans-serif", fontWeight: 600 }}
//               >
//                 Unstructured Data Archiving
//               </h3>
//             </div>
//             <p
//               className="text-sm text-gray-500 leading-relaxed mb-6"
//               style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400 }}
//             >
//               Tackle the complexity of unstructured data from sources like emails,
//               Microsoft Office files, PDFs, images, and videos. Generative AI
//               excels at extracting context and meaning from these files. It can
//               summarize long documents, identify faces in photos for easier
//               search, and transcribe audio from video files, making your entire
//               unstructured data archive searchable and intelligent.
//             </p>
//             <ul className="space-y-3">
//               {unstructuredBullets.map((item) => (
//                 <li key={item} className="flex items-start gap-3">
//                   <Check className="w-5 h-5 text-[#e53e2d] flex-shrink-0 mt-0.5" />
//                   <span
//                     className="text-sm text-gray-700"
//                     style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400 }}
//                   >
//                     {item}
//                   </span>
//                 </li>
//               ))}
//             </ul>
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
  Brain,
  Check,
  Database,
  FileSearch,
  ShieldCheck,
} from "lucide-react";
import InfrastructureUpgrade from "../components/InfrastructureUpgrade";
import Footer from "../components/Footer";

const HERO_BG = "https://www.compucodeltd.com/images/banners/body-bg.jpg";
const ARCHIVE_IMG =
  "https://www.compucodeltd.com/images/blobs/CompucodeAITech3.jpg";

const keyCapabilities = [
  {
    icon: Brain,
    title: "Automated Classification & Tagging",
    text: "Let AI automatically understand and categorize your data. It intelligently applies metadata to both structured database entries and unstructured files like contracts and images, making them instantly discoverable.",
  },
  {
    icon: FileSearch,
    title: "Semantic Search & Retrieval",
    text: 'Go beyond keyword search. Ask questions in plain English to find the exact information you need—for example, "Find all invoices over $10,000 from last year that are pending approval" across all archived data.',
  },
  {
    icon: ShieldCheck,
    title: "Proactive Compliance & Governance",
    text: "Our AI continuously scans archives to identify sensitive data (PII, financial records), automatically enforces retention policies, and flags potential compliance risks, ensuring you meet regulatory requirements like GDPR and PCI DSS.",
  },
];

const archiveFeatures = [
  "Automatically classify data and generate metadata",
  "Natural language search across your entire archive",
  "Unified system for compliance and optimized storage",
  "Make historical data accessible and useful",
];

const structuredBullets = [
  "Seamless integration with existing databases",
  "Significant reduction in primary storage costs",
  "Maintained data integrity and query performance",
];

const unstructuredBullets = [
  "AI-powered content and context extraction",
  "Facial and object recognition in images/videos",
  "Full-text indexing for natural language search",
];

export default function AiEnhancedDataArchiving() {
  return (
    <div className="font-['Inter',sans-serif] bg-white">

      {/* ───────── HERO ───────── */}
      <section className="relative pt-16 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-top bg-no-repeat"
          style={{ backgroundImage: `url(${HERO_BG})` }}
        />
        <div className="absolute inset-0 bg-black/55" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 text-center">

          <p
            className="text-xs sm:text-sm tracking-widest uppercase text-white/80 mb-4"
            style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400 }}
          >
            Our Solutions
          </p>

          <h1
            className="text-3xl sm:text-4xl md:text-5xl text-white mb-6 leading-tight"
            style={{ fontFamily: "'Sora', sans-serif", fontWeight: 600 }}
          >
            GenAI Information Lifecycle Management Suite
          </h1>

          <p
            className="text-sm sm:text-base md:text-lg text-white/85 leading-relaxed max-w-2xl mx-auto mb-10"
            style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400 }}
          >
            Transforming how you manage, search, and secure your data legacy.
          </p>

          {/* <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 border-2 border-[#e53e2d] text-[#e53e2d] bg-transparent font-bold text-xs sm:text-sm tracking-wide uppercase rounded-sm hover:bg-[#e53e2d] hover:text-white transition-colors duration-200"
          > */}
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 bg-[#e53e2d] border-2 border-[#e53e2d] text-white font-bold text-xs sm:text-sm tracking-wide uppercase rounded-sm hover:bg-white hover:text-[#e53e2d] transition-all duration-200"
          >
            Schedule a Consultation
            <ArrowRight size={18} />
          </Link>

        </div>
      </section>

      {/* ───────── KEY CAPABILITIES ───────── */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-[#fafafa]">
        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-10 sm:mb-14">
            <h2
              className="text-2xl sm:text-3xl md:text-4xl text-gray-900 mb-3"
              style={{ fontFamily: "'Sora', sans-serif", fontWeight: 600 }}
            >
              Key Capabilities
            </h2>
            <p
              className="text-sm sm:text-base text-gray-500"
              style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400 }}
            >
              Harnessing AI to solve your most complex archiving challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {keyCapabilities.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 sm:p-8 text-center flex flex-col"
              >
                <div className="mb-5 mx-auto w-14 h-14 rounded-xl bg-[#e53e2d]/10 flex items-center justify-center">
                  <Icon className="w-7 h-7 text-[#e53e2d]" strokeWidth={1.5} />
                </div>
                <h3
                  className="text-base sm:text-lg text-gray-900 mb-3"
                  style={{ fontFamily: "'Sora', sans-serif", fontWeight: 600 }}
                >
                  {title}
                </h3>
                <p
                  className="text-sm text-gray-500 leading-relaxed flex-1"
                  style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400 }}
                >
                  {text}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ───────── FEATURE SPLIT ───────── */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Text Side */}
          <div>
            <h2
              className="text-2xl sm:text-3xl md:text-4xl text-gray-900 mb-5 leading-tight"
              style={{ fontFamily: "'Sora', sans-serif", fontWeight: 600 }}
            >
              Intelligent Archiving with{" "}
              <span className="text-[#e53e2d]">Generative AI</span>
            </h2>

            <p
              className="text-sm sm:text-base text-gray-500 leading-relaxed mb-6"
              style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400 }}
            >
              Your archive becomes a secure, searchable, and intelligent asset—
              reducing costs and unlocking insights from structured and
              unstructured data alike.
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-900 text-white text-sm font-semibold rounded-md hover:bg-black transition-colors mb-8 sm:mb-10"
            >
              Learn More
              <ArrowRight size={16} />
            </Link>

            <ul className="space-y-4">
              {archiveFeatures.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-0.5 w-6 h-6 rounded-full bg-[#e53e2d]/15 flex items-center justify-center">
                    <Check className="w-4 h-4 text-[#e53e2d]" strokeWidth={2.5} />
                  </span>
                  <span
                    className="text-sm text-gray-700 leading-relaxed"
                    style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400 }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Image Side */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md">
              <div
                className="absolute -inset-4 rounded-2xl opacity-20 blur-2xl"
                style={{
                  background:
                    "linear-gradient(135deg, #e53e2d 0%, #7c3aed 50%, #14b8a6 100%)",
                }}
              />
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f0f0f] p-4 min-h-[260px] sm:min-h-[320px] flex items-center justify-center">
                <img
                  src={ARCHIVE_IMG}
                  alt="AI data archiving"
                  className="w-full rounded-xl object-cover"
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ───────── STRUCTURED & UNSTRUCTURED ───────── */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-[#fafafa]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">

          {/* Structured */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Database className="w-6 h-6 text-[#e53e2d] flex-shrink-0" />
              <h3
                className="text-xl sm:text-2xl text-gray-900"
                style={{ fontFamily: "'Sora', sans-serif", fontWeight: 600 }}
              >
                Structured Data Archiving
              </h3>
            </div>
            <p
              className="text-sm text-gray-500 leading-relaxed mb-6"
              style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400 }}
            >
              Efficiently archive data from your production databases (SQL,
              NoSQL), ERPs, and other structured systems. Our solution optimizes
              storage costs by moving inactive data to a secure, low-cost tier
              without sacrificing accessibility. AI ensures that archived data
              remains queryable for analytics and reporting, turning your
              database archives into valuable historical repositories.
            </p>
            <ul className="space-y-3">
              {structuredBullets.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#e53e2d] flex-shrink-0 mt-0.5" />
                  <span
                    className="text-sm text-gray-700"
                    style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400 }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Unstructured */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <FileSearch className="w-6 h-6 text-[#e53e2d] flex-shrink-0" />
              <h3
                className="text-xl sm:text-2xl text-gray-900"
                style={{ fontFamily: "'Sora', sans-serif", fontWeight: 600 }}
              >
                Unstructured Data Archiving
              </h3>
            </div>
            <p
              className="text-sm text-gray-500 leading-relaxed mb-6"
              style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400 }}
            >
              Tackle the complexity of unstructured data from sources like emails,
              Microsoft Office files, PDFs, images, and videos. Generative AI
              excels at extracting context and meaning from these files. It can
              summarize long documents, identify faces in photos for easier
              search, and transcribe audio from video files, making your entire
              unstructured data archive searchable and intelligent.
            </p>
            <ul className="space-y-3">
              {unstructuredBullets.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#e53e2d] flex-shrink-0 mt-0.5" />
                  <span
                    className="text-sm text-gray-700"
                    style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400 }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      <InfrastructureUpgrade />
      <Footer />

    </div>
  );
}