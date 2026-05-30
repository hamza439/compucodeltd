// import { useState } from "react";
// import { Mail, Building2 } from "lucide-react";
// import Footer from "../components/Footer";
// import { Link } from "react-router-dom";

// export default function ContactUs() {
//   const [submitted, setSubmitted] = useState(false);
// const HERO_BG = "https://www.compucodeltd.com/images/banners/body-bg.jpg";

//   return (
//     <div className="min-h-screen bg-white">

//       {/* Page Header */}
//        <div
//           className="absolute inset-0 bg-cover bg-top bg-no-repeat"
//           style={{ backgroundImage: `url(${HERO_BG})` }}
//         />
//       <div className="w-full py-20 flex items-center justify-center bg-gradient-to-r from-black via-red-950 to-black">
//         <div className="text-center">
//           <p className="text-xs uppercase tracking-widest text-red-400 mb-3">Get In Touch</p>
//           <h1 className="text-5xl font-bold text-white">Contact Us</h1>
//           <div className="mx-auto mt-4 w-16 h-1 bg-red-600 rounded-full" />
//         </div>
//       </div>

//       <section className="py-16 bg-gray-100">
//         <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-12 gap-10">

//           {/* FORM */}
//           <div className="lg:col-span-7">
//             <div className="bg-white shadow-lg p-8">
//               <h4 className="text-xl font-semibold mb-6 flex items-center gap-2">
//                 <Mail size={20} /> Send us a message
//               </h4>
//               <form
//                 action="https://docs.google.com/forms/u/2/d/e/1FAIpQLScmF5Pc4tAZgotEd1coUgcZ0EPTONqH607HfsRABsVr5h4uCw/formResponse"
//                 method="post"
//                 target="hidden_iframe"
//                 onSubmit={() => setSubmitted(true)}
//                 className="space-y-4"
//               >
//                 <input name="entry.509998442" placeholder="Full Name" required className="w-full border p-3 rounded focus:outline-none focus:border-red-500" />
//                 <input name="entry.1917110544" placeholder="Email Address" required className="w-full border p-3 rounded focus:outline-none focus:border-red-500" />
//                 <input name="entry.1436660642" placeholder="Telephone" required className="w-full border p-3 rounded focus:outline-none focus:border-red-500" />
//                 <textarea name="entry.64075593" placeholder="Message" required className="w-full border p-3 rounded h-32 focus:outline-none focus:border-red-500" />
//                 <button type="submit" className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded font-semibold transition">
//                   Send Message
//                 </button>
//               </form>
//               <iframe name="hidden_iframe" className="hidden" />
//               {submitted && <p className="text-green-600 mt-4 font-medium">✅ Message sent successfully!</p>}
//             </div>
//           </div>

//           {/* INFO */}
//           <div className="lg:col-span-5">
//             <div className="bg-white shadow-lg p-8">
//               <h4 className="text-xl font-semibold mb-6 flex items-center gap-2">
//                 <Building2 size={20} /> Corporate Info
//               </h4>

//               <p className="font-semibold">Offices</p>
//               <p className="text-gray-600 mb-3">29 Lekki County Estate Road, Lagos, Nigeria</p>
//               <p className="text-gray-600">85 Great Portland Street, London, W1W 7LT, UK</p>

//               <hr className="my-4" />

//               <p className="font-semibold">Email</p>
//               <p className="text-gray-600">contactus@compucodeltd.com</p>

//               <hr className="my-4" />

//               <p className="font-semibold mb-3">Follow Us</p>
//               <div className="flex gap-4">
//                 {/* Facebook */}
//                 <a href="https://web.facebook.com/Compucode-Limited-105862577839700" target="_blank" rel="noreferrer"
//                   className="w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-bold transition hover:scale-110"
//                   style={{ background: "#1877F2" }}>f</a>
//                 {/* Twitter / X */}
//                 <a href="https://twitter.com/CompucodeL" target="_blank" rel="noreferrer"
//                   className="w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-bold transition hover:scale-110"
//                   style={{ background: "#000" }}>𝕏</a>
//                 {/* LinkedIn */}
//                 <a href="https://www.linkedin.com/mwlite/company/compucode" target="_blank" rel="noreferrer"
//                   className="w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-bold transition hover:scale-110"
//                   style={{ background: "#0A66C2" }}>in</a>
//                 {/* WhatsApp */}
//                 <a href="https://chat.whatsapp.com/HN3BQ95oLIEF1HBZfkRBJ1" target="_blank" rel="noreferrer"
//                   className="w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-bold transition hover:scale-110"
//                   style={{ background: "#25D366" }}>W</a>
//               </div>
//             </div>
//           </div>

//         </div>
//       </section>
//         <Footer/>
//     </div>
   
//   );
// }
// import { useState } from "react";
// import { Mail, Building2, MapPin, Phone } from "lucide-react";
// import Footer from "../components/Footer";

// const HERO_BG = "https://www.compucodeltd.com/images/banners/body-bg.jpg";
// const LOGO_URL = "https://www.compucodeltd.com/images/logo/compucode.png";

// export default function ContactUs() {
//   const [submitted, setSubmitted] = useState(false);

//   return (
//     <div className="min-h-screen bg-white">

//       {/* ── Hero Banner ── */}
//       <div className="relative w-full h-[420px] flex items-center justify-center overflow-hidden">
//         <div
//   className="absolute inset-0 bg-cover bg-center bg-no-repeat"
//   style={{
//     backgroundImage: `url(${HERO_BG})`,
//   }}
// />
//         {/* dark overlay */}
//         <div className="absolute inset-0  bg-black/55" />
//         <div className="relative z-10 text-center">
//           <p className="text-xs uppercase tracking-widest text-red-400 mb-3">Get In Touch</p>
//           <h1 className="text-5xl font-bold text-white">Contact Us</h1>
//           <div className="mx-auto mt-4 w-16 h-1 bg-red-600 rounded-full" />
//         </div>
//       </div>

//       {/* ── Main Section ── */}
//       <section className="py-16 bg-gray-100">
//         <div className="max-w-6xl mx-auto px-6">
//           <div className="grid lg:grid-cols-12 gap-8 items-stretch">

//             {/* ── LEFT: Form ── */}
//             <div className="lg:col-span-7">
//               <div className="bg-white shadow-lg p-8 h-full">
//                 <h4 className="text-xl font-semibold mb-6 flex items-center gap-2 text-gray-800">
//                   <Mail size={20} className="text-red-600" /> Send us a message
//                 </h4>
//                 <form
//                   action="https://docs.google.com/forms/u/2/d/e/1FAIpQLScmF5Pc4tAZgotEd1coUgcZ0EPTONqH607HfsRABsVr5h4uCw/formResponse"
//                   method="post"
//                   target="hidden_iframe"
//                   onSubmit={() => setSubmitted(true)}
//                   className="space-y-4"
//                 >
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">Full Name*</label>
//                     <input
//                       name="entry.509998442"
//                       placeholder="e.g. John Smith"
//                       required
//                       className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 text-sm"
//                     />
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">Email Address*</label>
//                     <input
//                       name="entry.1917110544"
//                       placeholder="e.g. john@company.com"
//                       required
//                       type="email"
//                       className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 text-sm"
//                     />
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">Telephone*</label>
//                     <input
//                       name="entry.1436660642"
//                       placeholder="e.g. +44 7000 000000"
//                       required
//                       className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 text-sm"
//                     />
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">Primary Reason for Contacting Us*</label>
//                     <select
//                       required
//                       className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 text-sm text-gray-500 appearance-none bg-white"
//                     >
//                       <option value="">Select Primary Reason</option>
//                       <option>Cloud Services</option>
//                       <option>Generative AI Solutions</option>
//                       <option>Software Development</option>
//                       <option>IT Consulting</option>
//                       <option>General Enquiry</option>
//                     </select>
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">Message*</label>
//                     <textarea
//                       name="entry.64075593"
//                       placeholder="Tell us how we can help..."
//                       required
//                       className="w-full border border-gray-300 p-3 rounded h-32 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 text-sm resize-none"
//                     />
//                   </div>

//                   <div className="flex items-start gap-2">
//                     <input type="checkbox" id="updates" className="mt-1 accent-red-600" />
//                     <label htmlFor="updates" className="text-sm text-gray-500">
//                       Please include me in email updates on products, services, and special offers from Compucode.
//                     </label>
//                   </div>

//                   <button
//                     type="submit"
//                     className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded font-semibold transition text-sm"
//                   >
//                     Send Request
//                   </button>
//                 </form>
//                 <iframe name="hidden_iframe" className="hidden" />
//                 {submitted && (
//                   <p className="text-green-600 mt-4 font-medium">✅ Message sent successfully!</p>
//                 )}
//               </div>
//             </div>

//             {/* ── RIGHT: Info Box ── */}
//             <div className="lg:col-span-5">
//               <div
//                 className="relative h-full rounded overflow-hidden shadow-lg flex flex-col justify-between"
//                 style={{ minHeight: "100%" }}
//               >
//                 {/* Background image */}
//                 <div
//                   className="absolute inset-0 bg-cover bg-center"
//                   style={{ backgroundImage: `url(${HERO_BG})` }}
//                 />
//                 {/* Dark overlay */}
//                 <div className="absolute inset-0 bg-black/70" />

//                 {/* Content */}
//                 <div className="relative z-10 p-8 flex flex-col justify-between h-full">

//                   {/* Top: heading */}
//                   <div>
//                     <img src={LOGO_URL} alt="Compucode" className="w-12 h-12 object-contain mb-6" />
//                     <h2 className="text-3xl font-bold text-white leading-tight mb-3">
//                       Let's Talk<br />Solutions
//                     </h2>
//                     <p className="text-gray-300 text-sm leading-6">
//                       Discover how Compucode solutions help your organisation simplify IT, integrate Generative AI, and solve unique business challenges.
//                     </p>
//                   </div>

//                   {/* Divider */}
//                   <div className="my-6 border-t border-white/20" />

//                   {/* Contact details */}
//                   <div className="space-y-5">
//                     <div className="flex items-start gap-3">
//                       <MapPin size={16} className="text-red-400 mt-1 shrink-0" />
//                       <div>
//                         <p className="text-white text-sm font-semibold mb-1">Offices</p>
//                         <p className="text-gray-300 text-xs leading-5">29 Lekki County Estate Road, Lagos, Nigeria</p>
//                         <p className="text-gray-300 text-xs leading-5">85 Great Portland Street, London, W1W 7LT, UK</p>
//                       </div>
//                     </div>

//                     <div className="flex items-start gap-3">
//                       <Mail size={16} className="text-red-400 mt-1 shrink-0" />
//                       <div>
//                         <p className="text-white text-sm font-semibold mb-1">Email</p>
//                         <a href="mailto:contactus@compucodeltd.com" className="text-gray-300 text-xs hover:text-red-400 transition-colors">
//                           contactus@compucodeltd.com
//                         </a>
//                       </div>
//                     </div>

//                     {/* Social */}
//                     {/* <div>
//                       <p className="text-white text-sm font-semibold mb-3">Follow Us</p>
//                       <div className="flex gap-3">
//                         <a href="https://web.facebook.com/Compucode-Limited-105862577839700" target="_blank" rel="noreferrer"
//                           className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold hover:scale-110 transition-transform"
//                           style={{ background: "#1877F2" }}>f</a>
//                         <a href="https://twitter.com/CompucodeL" target="_blank" rel="noreferrer"
//                           className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold hover:scale-110 transition-transform"
//                           style={{ background: "#000" }}>𝕏</a>
//                         <a href="https://www.linkedin.com/mwlite/company/compucode" target="_blank" rel="noreferrer"
//                           className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold hover:scale-110 transition-transform"
//                           style={{ background: "#0A66C2" }}>in</a>
//                         <a href="https://chat.whatsapp.com/HN3BQ95oLIEF1HBZfkRBJ1" target="_blank" rel="noreferrer"
//                           className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold hover:scale-110 transition-transform"
//                           style={{ background: "#25D366" }}>W</a>
//                       </div>
//                     </div> */}
//                   </div>

//                   {/* Bottom label */}
//                   <div className="mt-8 pt-6 border-t border-white/20">
//                     <p className="text-gray-400 text-[11px] uppercase tracking-widest">POWERING GROWTH FOR BUSINESSES WORLDWIDE</p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// }

// import { useState } from "react";
// import { Mail, MapPin } from "lucide-react";
// import Footer from "../components/Footer";

// const HERO_BG = "https://www.compucodeltd.com/images/banners/body-bg.jpg";
// const LOGO_URL = "https://www.compucodeltd.com/images/logo/compucode.png";

// export default function ContactUs() {
//   const [submitted, setSubmitted] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = (e) => {
//     setLoading(true);
//     // Let the form submit naturally to hidden iframe
//     // then show success after short delay
//     setTimeout(() => {
//       setLoading(false);
//       setSubmitted(true);
//       e.target.reset();
//     }, 1500);
//   };

//   return (
//     <div className="min-h-screen bg-white">

//       {/* ── Hero Banner ── */}
//       <div className="relative w-full h-[420px] flex items-center justify-center overflow-hidden">
//         <div
//           className="absolute inset-0 bg-cover bg-center bg-no-repeat"
//           style={{ backgroundImage: `url(${HERO_BG})` }}
//         />
//         <div className="absolute inset-0 bg-black/55" />
//         <div className="relative z-10 text-center">
//           <p className="text-xs uppercase tracking-widest text-red-400 mb-3">Get In Touch</p>
//           <h1 className="text-5xl font-bold text-white">Contact Us</h1>
//           <div className="mx-auto mt-4 w-16 h-1 bg-red-600 rounded-full" />
//         </div>
//       </div>

//       {/* ── Main Section ── */}
//       <section className="py-16 bg-gray-100">
//         <div className="max-w-6xl mx-auto px-6">
//           <div className="grid lg:grid-cols-12 gap-8 items-stretch">

//             {/* ── LEFT: Form ── */}
//             <div className="lg:col-span-7">
//               <div className="bg-white shadow-lg p-8 h-full">
//                 <h4 className="text-xl font-semibold mb-6 flex items-center gap-2 text-gray-800">
//                   <Mail size={20} className="text-red-600" /> Send us a message
//                 </h4>

//                 {submitted ? (
//                   /* ── SUCCESS STATE ── */
//                   <div className="flex flex-col items-center justify-center py-16 text-center">
//                     <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
//                       <span className="text-3xl">✅</span>
//                     </div>
//                     <h3 className="text-xl font-bold text-gray-800 mb-2">Message Sent!</h3>
//                     <p className="text-gray-500 text-sm max-w-xs leading-relaxed">
//                       Thank you for reaching out. Our team will get back to you within 1–2 business days.
//                     </p>
//                     <button
//                       onClick={() => setSubmitted(false)}
//                       className="mt-6 text-sm text-red-600 hover:text-red-700 underline font-medium"
//                     >
//                       Send another message
//                     </button>
//                   </div>
//                 ) : (
//                   /* ── FORM ── */
//                   <form
//                     action="https://docs.google.com/forms/u/2/d/e/1FAIpQLScmF5Pc4tAZgotEd1coUgcZ0EPTONqH607HfsRABsVr5h4uCw/formResponse"
//                     method="post"
//                     target="hidden_iframe"
//                     onSubmit={handleSubmit}
//                     className="space-y-4"
//                   >
//                     {/* Full Name */}
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-1">
//                         Full Name <span className="text-red-500">*</span>
//                       </label>
//                       <input
//                         name="entry.509998442"
//                         placeholder="e.g. John Smith"
//                         required
//                         className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 text-sm"
//                       />
//                     </div>

//                     {/* Email */}
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-1">
//                         Email Address <span className="text-red-500">*</span>
//                       </label>
//                       <input
//                         name="entry.1917110544"
//                         placeholder="e.g. john@company.com"
//                         required
//                         type="email"
//                         className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 text-sm"
//                       />
//                     </div>

//                     {/* Telephone */}
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-1">
//                         Telephone <span className="text-red-500">*</span>
//                       </label>
//                       <input
//                         name="entry.1436660642"
//                         placeholder="e.g. +44 7000 000000"
//                         required
//                         className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 text-sm"
//                       />
//                     </div>

//                     {/* Reason — name attribute added */}
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-1">
//                         Primary Reason for Contacting Us <span className="text-red-500">*</span>
//                       </label>
//                       <select
//                         name="entry.123456789"
//                         required
//                         className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 text-sm text-gray-700 appearance-none bg-white"
//                       >
//                         <option value="">Select Primary Reason</option>
//                         <option>Cloud Services</option>
//                         <option>Generative AI Solutions</option>
//                         <option>Software Development</option>
//                         <option>IT Consulting</option>
//                         <option>General Enquiry</option>
//                       </select>
//                     </div>

//                     {/* Message */}
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-1">
//                         Message <span className="text-red-500">*</span>
//                       </label>
//                       <textarea
//                         name="entry.64075593"
//                         placeholder="Tell us how we can help..."
//                         required
//                         className="w-full border border-gray-300 p-3 rounded h-32 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 text-sm resize-none"
//                       />
//                     </div>

//                     {/* Checkbox */}
//                     <div className="flex items-start gap-2">
//                       <input type="checkbox" id="updates" className="mt-1 accent-red-600" />
//                       <label htmlFor="updates" className="text-sm text-gray-500">
//                         Please include me in email updates on products, services, and special offers from Compucode.
//                       </label>
//                     </div>

//                     {/* Submit */}
//                     <button
//                       type="submit"
//                       disabled={loading}
//                       className="bg-red-600 hover:bg-red-700 disabled:bg-red-400 text-white px-8 py-3 rounded font-semibold transition text-sm flex items-center gap-2"
//                     >
//                       {loading ? (
//                         <>
//                           <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
//                             <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
//                             <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
//                           </svg>
//                           Sending...
//                         </>
//                       ) : "Send Request"}
//                     </button>
//                   </form>
//                 )}

//                 {/* Hidden iframe for Google Forms */}
//                 <iframe name="hidden_iframe" className="hidden" />
//               </div>
//             </div>

//             {/* ── RIGHT: Info Box ── */}
//             <div className="lg:col-span-5">
//               <div className="relative h-full rounded overflow-hidden shadow-lg flex flex-col justify-between" style={{ minHeight: "100%" }}>
//                 <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${HERO_BG})` }} />
//                 <div className="absolute inset-0 bg-black/70" />
//                 <div className="relative z-10 p-8 flex flex-col justify-between h-full">
//                   <div>
//                     <img src={LOGO_URL} alt="Compucode" className="w-12 h-12 object-contain mb-6" />
//                     <h2 className="text-3xl font-bold text-white leading-tight mb-3">
//                       Let's Talk<br />Solutions
//                     </h2>
//                     <p className="text-gray-300 text-sm leading-6">
//                       Discover how Compucode solutions help your organisation simplify IT, integrate Generative AI, and solve unique business challenges.
//                     </p>
//                   </div>
//                   <div className="my-6 border-t border-white/20" />
//                   <div className="space-y-5">
//                     <div className="flex items-start gap-3">
//                       <MapPin size={16} className="text-red-400 mt-1 shrink-0" />
//                       <div>
//                         <p className="text-white text-sm font-semibold mb-1">Offices</p>
//                         <p className="text-gray-300 text-xs leading-5">29 Lekki County Estate Road, Lagos, Nigeria</p>
//                         <p className="text-gray-300 text-xs leading-5">85 Great Portland Street, London, W1W 7LT, UK</p>
//                       </div>
//                     </div>
//                     <div className="flex items-start gap-3">
//                       <Mail size={16} className="text-red-400 mt-1 shrink-0" />
//                       <div>
//                         <p className="text-white text-sm font-semibold mb-1">Email</p>
//                         <a href="mailto:contactus@compucodeltd.com" className="text-gray-300 text-xs hover:text-red-400 transition-colors">
//                           contactus@compucodeltd.com
//                         </a>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="mt-8 pt-6 border-t border-white/20">
//                     <p className="text-gray-400 text-[11px] uppercase tracking-widest">POWERING GROWTH FOR BUSINESSES WORLDWIDE</p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// }












import { useState } from "react";
import { Mail, MapPin } from "lucide-react";
import emailjs from "@emailjs/browser";
import Footer from "../components/Footer";

const HERO_BG = "https://www.compucodeltd.com/images/banners/body-bg.jpg";
const LOGO_URL = "https://www.compucodeltd.com/images/logo/compucode.png";

const EMAILJS_SERVICE_ID  = "service_z59kd3u";
const EMAILJS_TEMPLATE_ID = "template_6kl6s7k";
const EMAILJS_PUBLIC_KEY  = "EAeHUI1ebUPhDt0sT";

export default function ContactUs() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading]     = useState(false);
  const [error, setError]         = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = e.target;

    const templateParams = {
      from_name:  form.fullName.value,
      from_email: form.email.value,
      phone:      form.phone.value,
      reason:     form.reason.value,
      message:    form.message.value,
      updates:    form.updates.checked ? "Yes" : "No",
    };

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );
      setSubmitted(true);
      form.reset();
    } catch (err) {
      console.error("EmailJS error:", err);
      setError("Something went wrong. Please try again or email us directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">

      {/* ── Hero Banner ── */}
      <div className="relative w-full h-[420px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${HERO_BG})` }}
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 text-center">
          <p className="text-xs uppercase tracking-widest text-red-400 mb-3">Get In Touch</p>
          <h1 className="text-5xl font-bold text-white">Contact Us</h1>
          <div className="mx-auto mt-4 w-16 h-1 bg-red-600 rounded-full" />
        </div>
      </div>

      {/* ── Main Section ── */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-8 items-stretch">

            {/* ── LEFT: Form ── */}
            <div className="lg:col-span-7">
              <div className="bg-white shadow-lg p-8 h-full">
                <h4 className="text-xl font-semibold mb-6 flex items-center gap-2 text-gray-800">
                  <Mail size={20} className="text-red-600" /> Send us a message
                </h4>

                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-16 text-center">
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                      <span className="text-3xl">✅</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Message Sent!</h3>
                    <p className="text-gray-500 text-sm max-w-xs leading-relaxed">
                      Thank you for reaching out. Our team will get back to you within 1–2 business days.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-6 text-sm text-red-600 hover:text-red-700 underline font-medium"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">

                    {error && (
                      <div className="bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3 rounded">
                        {error}
                      </div>
                    )}

                    {/* Full Name */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        name="fullName"
                        placeholder="e.g. John Smith"
                        required
                        className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 text-sm"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        name="email"
                        placeholder="e.g. john@company.com"
                        required
                        type="email"
                        className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 text-sm"
                      />
                    </div>

                    {/* Telephone */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Telephone <span className="text-red-500">*</span>
                      </label>
                      <input
                        name="phone"
                        placeholder="e.g. +44 7000 000000"
                        required
                        className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 text-sm"
                      />
                    </div>

                    {/* Reason */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Primary Reason for Contacting Us <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="reason"
                        required
                        className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 text-sm text-gray-700 appearance-none bg-white"
                      >
                        <option value="">Select Primary Reason</option>
                        <option>Cloud Services</option>
                        <option>Generative AI Solutions</option>
                        <option>Software Development</option>
                        <option>IT Consulting</option>
                        <option>General Enquiry</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        name="message"
                        placeholder="Tell us how we can help..."
                        required
                        className="w-full border border-gray-300 p-3 rounded h-32 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 text-sm resize-none"
                      />
                    </div>

                    {/* Checkbox */}
                    <div className="flex items-start gap-2">
                      <input
                        type="checkbox"
                        name="updates"
                        id="updates"
                        className="mt-1 accent-red-600"
                      />
                      <label htmlFor="updates" className="text-sm text-gray-500">
                        Please include me in email updates on products, services, and special offers from Compucode.
                      </label>
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="bg-red-600 hover:bg-red-700 disabled:bg-red-400 text-white px-8 py-3 rounded font-semibold transition text-sm flex items-center gap-2"
                    >
                      {loading ? (
                        <>
                          <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                          </svg>
                          Sending...
                        </>
                      ) : "Send Request"}
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* ── RIGHT: Info Box ── */}
            <div className="lg:col-span-5">
              <div
                className="relative h-full rounded overflow-hidden shadow-lg flex flex-col justify-between"
                style={{ minHeight: "100%" }}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${HERO_BG})` }}
                />
                <div className="absolute inset-0 bg-black/70" />
                <div className="relative z-10 p-8 flex flex-col justify-between h-full">
                  <div>
                    <img src={LOGO_URL} alt="Compucode" className="w-12 h-12 object-contain mb-6" />
                    <h2 className="text-3xl font-bold text-white leading-tight mb-3">
                      Let's Talk<br />Solutions
                    </h2>
                    <p className="text-gray-300 text-sm leading-6">
                      Discover how Compucode solutions help your organisation simplify IT, integrate Generative AI, and solve unique business challenges.
                    </p>
                  </div>

                  <div className="my-6 border-t border-white/20" />

                  <div className="space-y-5">
                    <div className="flex items-start gap-3">
                      <MapPin size={16} className="text-red-400 mt-1 shrink-0" />
                      <div>
                        <p className="text-white text-sm font-semibold mb-1">Offices</p>
                        <p className="text-gray-300 text-xs leading-5">29 Lekki County Estate Road, Lagos, Nigeria</p>
                        <p className="text-gray-300 text-xs leading-5">85 Great Portland Street, London, W1W 7LT, UK</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Mail size={16} className="text-red-400 mt-1 shrink-0" />
                      <div>
                        <p className="text-white text-sm font-semibold mb-1">Email</p>
                        <a
                          href="mailto:contactus@compucodeltd.com"
                          className="text-gray-300 text-xs hover:text-red-400 transition-colors"
                        >
                          contactus@compucodeltd.com
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/20">
                    <p className="text-gray-400 text-[11px] uppercase tracking-widest">
                      POWERING GROWTH FOR BUSINESSES WORLDWIDE
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}