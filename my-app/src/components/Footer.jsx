// import { Link } from "react-router-dom";
// import { FiMail, FiMapPin } from "react-icons/fi";
// import { FaFacebookF, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
// import { FaXTwitter } from "react-icons/fa6";

// const LOGO_URL = "https://www.compucodeltd.com/images/logo/compucode.png";

// const Footer = () => {
//   return (
//     <footer className="bg-white text-gray-600 border-t border-gray-200">
//       <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14">

//         {/* ── Top Section: Logo+Text Left | Contact Right ── */}
//         <div className="grid lg:grid-cols-2 gap-12 border-b border-gray-200 pb-12">

//           {/* LEFT: Logo + Paragraph + Learn More */}
//           <div className="flex flex-col">
//             <Link to="/" className="inline-block mb-5">
//               <img
//                 src={LOGO_URL}
//                 alt="Compucode Limited"
//                 className="w-14 h-14 object-contain"
//               />
//             </Link>

//             <p className="text-sm leading-7 text-gray-600 text-justify">
//               Compucode offers a unified array of technology solutions to
//               simplify IT, with a strong focus on integrating Generative AI. Our
//               technology services oriented team delivers an integrated stack of
//               cloud, IT applications, software, systems solutions with advanced
//               scalability and enterprise security mindset. We are a services
//               oriented team with several years of experience in the global
//               segment of the IT Industry, proven ability to deliver strategic
//               industry solutions.
//             </p>

//             <Link
//               to="/about"
//               className="mt-5 text-[#e53e2d] text-sm font-medium hover:text-[#c0392b] transition-colors w-fit"
//             >
//               Learn More
//             </Link>
//           </div>

//           {/* RIGHT: Email + Offices + Social */}
//           <div className="flex flex-col gap-7 lg:pl-10">

//             {/* Email */}
//             <div className="flex items-start gap-4">
//               <div className="w-9 h-9 rounded-md border border-gray-200 flex items-center justify-center shrink-0 text-[#e53e2d]">
//                 <FiMail size={16} />
//               </div>
//               <a
//                 href="mailto:contactus@compucodeltd.com"
//                 className="text-sm text-gray-700 hover:text-[#e53e2d] transition-colors pt-2"
//               >
//                 contactus@compucodeltd.com
//               </a>
//             </div>

//             {/* Offices */}
//             <div className="flex items-start gap-4">
//               <div className="w-9 h-9 rounded-md border border-gray-200 flex items-center justify-center shrink-0 text-[#e53e2d]">
//                 <FiMapPin size={16} />
//               </div>
//               <div>
//                 <p className="text-sm font-semibold text-gray-800 mb-1">
//                   Registered Offices:
//                 </p>
//                 <p className="text-sm leading-6 text-gray-600">
//                   29, Lekki County Estate Road, Lekki, Lagos, Nigeria
//                 </p>
//                 <p className="text-sm leading-6 text-gray-600 mt-1">
//                   85, Great Portland Street, First Floor, London, W1W 7LT,
//                   United Kingdom
//                 </p>
//               </div>
//             </div>

//             {/* Social Icons */}
//             <div className="flex items-end gap-4 mt-1 ml-auto">
//               {[
//                 { href: "https://www.facebook.com/", icon: <FaFacebookF size={15} />, label: "Facebook" },
//                 { href: "https://twitter.com/CompucodeL", icon: <FaXTwitter size={14} />, label: "Twitter" },
//                 { href: "https://www.linkedin.com/company/compucode", icon: <FaLinkedinIn size={15} />, label: "LinkedIn" },
//                 { href: "https://wa.me/", icon: <FaWhatsapp size={17} />, label: "WhatsApp" },
//               ].map(({ href, icon, label }) => (
//                 <a
//                   key={label}
//                   href={href}
//                   target="_blank"
//                   rel="noreferrer"
//                   aria-label={label}
//                   className="text-gray-400 hover:text-[#e53e2d] transition-colors"
//                 >
//                   {icon}
//                 </a>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* ── Bottom Bar: Copyright left | Nav links right ── */}
//         <div className="flex flex-wrap items-center justify-between gap-4 py-6 border-b border-gray-200">
//           <p className="text-sm text-gray-500">
//             © 2025 | Compucode Limited | All rights reserved.
//           </p>

//           <ul className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-gray-500">
//             {[
//               { label: "Privacy Policy", to: "/privacy" },
//               { label: "Cookie Policy", to: "/cookie" },
//               { label: "Contact Us", to: "/contact" },
//               { label: "About Us", to: "/about" },
//             ].map(({ label, to }) => (
//               <li key={label}>
//                 <Link to={to} className="hover:text-[#e53e2d] transition-colors">
//                   {label}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* ── Legal Text ── */}
//         <p className="text-[11px] leading-6 text-gray-400 pt-6 pb-2">
//           Reproduction in whole or in part in any form or medium without express
//           written permission is prohibited. Compucode and the Compucode icon are
//           registered trademarks. Other trademarks contained herein are the
//           property of their respective owners. Compucode believes that the
//           information in this publication is accurate as of its publication
//           date; such information is subject to change without notice.
//         </p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
// import { Link } from "react-router-dom";
// import { FiMail, FiMapPin } from "react-icons/fi";
// import { FaFacebookF, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
// import { FaXTwitter } from "react-icons/fa6";

// const LOGO_URL = "https://www.compucodeltd.com/images/logo/compucode.png";

// const Footer = () => {
//   return (
//     <footer className="bg-white text-gray-600 border-t border-gray-200">
//       <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14">

//         {/* ── Top Section: Logo+Text Left | Contact Right ── */}
//         <div className="grid lg:grid-cols-2 gap-12 border-b border-gray-200 pb-12">

//           {/* LEFT: Logo + Paragraph + Learn More */}
//           <div className="flex flex-col">
//             <Link to="/" className="inline-block mb-5">
//               <img
//                 src={LOGO_URL}
//                 alt="Compucode Limited"
//                 className="w-14 h-14 object-contain"
//               />
//             </Link>

//             <p className="text-sm leading-7 text-gray-600 text-justify">
//               Compucode offers a unified array of technology solutions to
//               simplify IT, with a strong focus on integrating Generative AI. Our
//               technology services oriented team delivers an integrated stack of
//               cloud, IT applications, software, systems solutions with advanced
//               scalability and enterprise security mindset. We are a services
//               oriented team with several years of experience in the global
//               segment of the IT Industry, proven ability to deliver strategic
//               industry solutions.
//             </p>

//             <Link
//               to="/about"
//               className="mt-5 text-[#e53e2d] text-sm font-medium hover:text-[#c0392b] transition-colors w-fit"
//             >
//               Learn More
//             </Link>
//           </div>

//           {/* RIGHT: Email + Offices + Social */}
//           <div className="flex flex-col gap-7 lg:pl-10">

//             {/* Email */}
//             <div className="flex items-start gap-4">
//               <div className="w-9 h-9 rounded-md border border-gray-200 flex items-center justify-center shrink-0 text-[#e53e2d]">
//                 <FiMail size={16} />
//               </div>
//               <a
//                 href="mailto:contactus@compucodeltd.com"
//                 className="text-sm text-gray-700 hover:text-[#e53e2d] transition-colors pt-2"
//               >
//                 contactus@compucodeltd.com
//               </a>
//             </div>

//             {/* Offices */}
//             <div className="flex items-start gap-4">
//               <div className="w-9 h-9 rounded-md border border-gray-200 flex items-center justify-center shrink-0 text-[#e53e2d]">
//                 <FiMapPin size={16} />
//               </div>
//               <div>
//                 <p className="text-sm font-semibold text-gray-800 mb-1">
//                   Registered Offices:
//                 </p>
//                 <p className="text-sm leading-6 text-gray-600">
//                   29, Lekki County Estate Road, Lekki, Lagos, Nigeria
//                 </p>
//                 <p className="text-sm leading-6 text-gray-600 mt-1">
//                   85, Great Portland Street, First Floor, London, W1W 7LT,
//                   United Kingdom
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* ── Bottom Bar: Nav Links LEFT | Social Icons RIGHT ── */}
//         <div className="flex flex-wrap items-center justify-between gap-4 py-6 border-b border-gray-200">
//           <ul className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-gray-500">
//             {[
//               { label: "Privacy Policy", to: "/privacy" },
//               { label: "Cookie Policy", to: "/cookie" },
//               { label: "Contact Us", to: "/contact" },
//               { label: "About Us", to: "/about" },
//             ].map(({ label, to }) => (
//               <li key={label}>
//                 <Link to={to} className="hover:text-[#e53e2d] transition-colors">
//                   {label}
//                 </Link>
//               </li>
//             ))}
//           </ul>

//           {/* Social Icons — right side, bordered squares like Vestmark */}
//           <div className="flex items-center gap-2">
//             {[
//               { href: "https://www.linkedin.com/company/compucode", icon: <FaLinkedinIn size={15} />, label: "LinkedIn" },
//               { href: "https://www.facebook.com/", icon: <FaFacebookF size={14} />, label: "Facebook" },
//               { href: "https://twitter.com/CompucodeL", icon: <FaXTwitter size={14} />, label: "Twitter" },
//               { href: "https://wa.me/", icon: <FaWhatsapp size={16} />, label: "WhatsApp" },
//             ].map(({ href, icon, label }) => (
//               <a
//                 key={label}
//                 href={href}
//                 target="_blank"
//                 rel="noreferrer"
//                 aria-label={label}
//                 className="w-9 h-9 rounded-md border border-gray-200 flex items-center justify-center
//                            text-gray-500 hover:border-[#e53e2d] hover:text-[#e53e2d] transition-all duration-200"
//               >
//                 {icon}
//               </a>
//             ))}
//           </div>
//         </div>

//         {/* ── Copyright ── */}
//         <p className="text-sm text-gray-500 mt-5 mb-3">
//           © 2025 All rights reserved
//         </p>

//         {/* ── Legal Text ── */}
//         <p className="text-[11px] leading-6 text-gray-400 pb-2">
//           Reproduction in whole or in part in any form or medium without express
//           written permission is prohibited. Compucode and the Compucode icon are
//           registered trademarks. Other trademarks contained herein are the
//           property of their respective owners. Compucode believes that the
//           information in this publication is accurate as of its publication
//           date; such information is subject to change without notice.
//         </p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
// import { Link } from "react-router-dom";
// import { FiMail, FiMapPin } from "react-icons/fi";
// import { FaFacebookF, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
// import { FaXTwitter } from "react-icons/fa6";

// const LOGO_URL = "https://www.compucodeltd.com/images/logo/compucode.png";

// const Footer = () => {
//   return (
//     <footer className="relative bg-white text-gray-600 border-t border-gray-200 overflow-hidden">

//       {/* ── Faded watermark logo — left side ── */}
//       <div className="absolute left-[-60px] top-1/2 -translate-y-1/2 pointer-events-none select-none hidden lg:block">
//         <img
//           src={LOGO_URL}
//           alt=""
//           className="w-[340px] h-[340px] object-contain opacity-[0.06]"
//         />
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-14">

//         {/* ── Top Section: Logo+Text Left | Contact Right ── */}
//         <div className="grid lg:grid-cols-12 gap-12 border-b border-gray-200 pb-12">

//           {/* LEFT: Logo + Paragraph + Learn More */}
//           <div className="lg:col-span-5 flex flex-col">
//             <Link to="/" className="inline-block mb-5">
//               <img
//                 src={LOGO_URL}
//                 alt="Compucode Limited"
//                 className="w-14 h-14 object-contain opacity-50"
//               />
//             </Link>

//             <p className="text-sm leading-7 text-gray-600 text-justify">
//               Compucode offers a unified array of technology solutions to
//               simplify IT, with a strong focus on integrating Generative AI. Our
//               technology services oriented team delivers an integrated stack of
//               cloud, IT applications, software, systems solutions with advanced
//               scalability and enterprise security mindset. We are a services
//               oriented team with several years of experience in the global
//               segment of the IT Industry, proven ability to deliver strategic
//               industry solutions.
//             </p>

//             <Link
//               to="/about"
//               className="mt-5 text-[#e53e2d] text-sm font-medium hover:text-[#c0392b] transition-colors w-fit"
//             >
//               Learn More
//             </Link>
//           </div>

//           {/* RIGHT: Stacked contact info — Vestmark style */}
//           <div className="lg:col-span-5 lg:col-start-8 flex flex-col">

//             {/* Email row */}
//             <div className="flex items-start gap-4 py-5 ">
//               <div className="w-9 h-9 rounded-md border border-gray-200 flex items-center justify-center shrink-0 text-[#e53e2d]">
//                 <FiMail size={16} />
//               </div>
//               <div>
//                 <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">Email</p>
//                 <a
//                   href="mailto:contactus@compucodeltd.com"
//                   className="text-sm text-gray-700 hover:text-[#e53e2d] transition-colors"
//                 >
//                   contactus@compucodeltd.com
//                 </a>
//               </div>
//             </div>

//             {/* Nigeria Office row */}
//             <div className="flex items-start gap-4 py-5 ">
//               <div className="w-9 h-9 rounded-md border border-gray-200 flex items-center justify-center shrink-0 text-[#e53e2d]">
//                 <FiMapPin size={16} />
//               </div>
//               <div>
//                 <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">Nigeria Office</p>
//                 <p className="text-sm text-gray-600 leading-6">
//                   29, Lekki County Estate Road,<br />Lekki, Lagos, Nigeria
//                 </p>
//               </div>
//             </div>

//             {/* UK Office row */}
//             <div className="flex items-start gap-4 py-5">
//               <div className="w-9 h-9 rounded-md border border-gray-200 flex items-center justify-center shrink-0 text-[#e53e2d]">
//                 <FiMapPin size={16} />
//               </div>
//               <div>
//                 <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">United Kingdom Office</p>
//                 <p className="text-sm text-gray-600 leading-6">
//                   85, Great Portland Street, First Floor,<br />London, W1W 7LT, United Kingdom
//                 </p>
//               </div>
//             </div>

//           </div>
//         </div>

//         {/* ── Bottom Bar: Nav Links LEFT | Social Icons RIGHT ── */}
//         <div className="flex flex-wrap items-center justify-between gap-4 py-6 border-b border-gray-200">
//           <ul className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-gray-500">
//             {[
//               { label: "Privacy Policy", to: "/privacy" },
//               { label: "Cookie Policy", to: "/cookie" },
//               { label: "Contact Us", to: "/contact" },
//               { label: "About Us", to: "/about" },
//             ].map(({ label, to }) => (
//               <li key={label}>
//                 <Link to={to} className="hover:text-[#e53e2d] transition-colors">
//                   {label}
//                 </Link>
//               </li>
//             ))}
//           </ul>

//           {/* Social Icons — right side */}
//           <div className="flex items-center gap-2">
//             {[
//               { href: "https://www.linkedin.com/company/compucode", icon: <FaLinkedinIn size={15} />, label: "LinkedIn" },
//               { href: "https://www.facebook.com/", icon: <FaFacebookF size={14} />, label: "Facebook" },
//               { href: "https://twitter.com/CompucodeL", icon: <FaXTwitter size={14} />, label: "Twitter" },
//               { href: "https://wa.me/", icon: <FaWhatsapp size={16} />, label: "WhatsApp" },
//             ].map(({ href, icon, label }) => (
//               <a
//                 key={label}
//                 href={href}
//                 target="_blank"
//                 rel="noreferrer"
//                 aria-label={label}
//                 className="w-9 h-9 rounded-md border border-gray-200 flex items-center justify-center
//                            text-gray-500 hover:border-[#e53e2d] hover:text-[#e53e2d] transition-all duration-200"
//               >
//                 {icon}
//               </a>
//             ))}
//           </div>
//         </div>

//         {/* ── Copyright ── */}
//         <p className="text-sm text-gray-500 mt-5 mb-3">
//           © 2025 All rights reserved
//         </p>

//         {/* ── Legal Text ── */}
//         <p className="text-[11px] leading-6 text-gray-400 pb-2">
//           Reproduction in whole or in part in any form or medium without express
//           written permission is prohibited. Compucode and the Compucode icon are
//           registered trademarks. Other trademarks contained herein are the
//           property of their respective owners. Compucode believes that the
//           information in this publication is accurate as of its publication
//           date; such information is subject to change without notice.
//         </p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import { Link } from "react-router-dom";
import { FiMail, FiMapPin } from "react-icons/fi";
import { FaFacebookF, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const LOGO_URL = "https://www.compucodeltd.com/images/logo/compucode.png";

const Footer = () => {
  return (
    <footer className="relative bg-white text-gray-600 border-t border-gray-200 overflow-hidden">

      {/* ── Prominent watermark logo — left side ── */}
      <div className="absolute left-[-20px] top-1/2 -translate-y-1/2 pointer-events-none select-none hidden lg:block">
        <img
          src={LOGO_URL}
          alt=""
          className="w-[400px] h-[400px] object-contain opacity-[0.15]"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-14">

        {/* ── Top Section ── */}
        <div className="grid lg:grid-cols-12 gap-12 border-b border-gray-200 pb-12">

          {/* LEFT: Logo + Paragraph + Learn More */}
          <div className="lg:col-span-5 flex flex-col">
            <Link to="/" className="inline-block mb-5">
              <img
                src={LOGO_URL}
                alt="Compucode Limited"
                className="w-14 h-14 object-contain opacity-50"
              />
            </Link>

            <p className="text-sm leading-7 text-gray-600 text-justify">
              Compucode offers a unified array of technology solutions to
              simplify IT, with a strong focus on integrating Generative AI. Our
              technology services oriented team delivers an integrated stack of
              cloud, IT applications, software, systems solutions with advanced
              scalability and enterprise security mindset. We are a services
              oriented team with several years of experience in the global
              segment of the IT Industry, proven ability to deliver strategic
              industry solutions.
            </p>

            <Link
              to="/about"
              className="mt-5 text-[#e53e2d] text-sm font-medium hover:text-[#c0392b] transition-colors w-fit"
            >
              Learn More
            </Link>
          </div>

          {/* RIGHT: Contact Info */}
          <div className="lg:col-span-5 lg:col-start-8 flex flex-col">

            {/* Email row */}
            <div className="flex items-start gap-4 py-5">
              <div className="w-9 h-9 rounded-md border border-gray-200 flex items-center justify-center shrink-0 text-[#e53e2d]">
                <FiMail size={16} />
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">Email</p>
                
                 <a href="mailto:contactus@compucodeltd.com"
                  className="text-sm text-gray-700 hover:text-[#e53e2d] transition-colors"
                >
                  contactus@compucodeltd.com
                </a>
              </div>
            </div>

            {/* Nigeria Office row */}
            <div className="flex items-start gap-4 py-5">
              <div className="w-9 h-9 rounded-md border border-gray-200 flex items-center justify-center shrink-0 text-[#e53e2d]">
                <FiMapPin size={16} />
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">Nigeria Office</p>
                <p className="text-sm text-gray-600 leading-6">
                  29, Lekki County Estate Road,<br />Lekki, Lagos, Nigeria
                </p>
              </div>
            </div>

            {/* UK Office row */}
            <div className="flex items-start gap-4 py-5">
              <div className="w-9 h-9 rounded-md border border-gray-200 flex items-center justify-center shrink-0 text-[#e53e2d]">
                <FiMapPin size={16} />
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">United Kingdom Office</p>
                <p className="text-sm text-gray-600 leading-6">
                  85, Great Portland Street, First Floor,<br />London, W1W 7LT, United Kingdom
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* ── Bottom Bar ── */}
        <div className="flex flex-wrap items-center justify-between gap-4 py-6 border-b border-gray-200">
          <ul className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-gray-500">
            {[
              { label: "Privacy Policy", to: "/privacy-policy" },
              { label: "Cookie Policy", to: "/cookie-policy" },
              { label: "Contact Us", to: "/contact" },
              { label: "About Us", to: "/about" },
            ].map(({ label, to }) => (
              <li key={label}>
                <Link to={to} className="hover:text-[#e53e2d] transition-colors">
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Social Icons */}
          <div className="flex items-center gap-2">
            {[
              { href: "https://www.linkedin.com/company/compucode", icon: <FaLinkedinIn size={15} />, label: "LinkedIn" },
              { href: "https://www.facebook.com/", icon: <FaFacebookF size={14} />, label: "Facebook" },
              { href: "https://twitter.com/CompucodeL", icon: <FaXTwitter size={14} />, label: "Twitter" },
              { href: "https://wa.me/", icon: <FaWhatsapp size={16} />, label: "WhatsApp" },
            ].map(({ href, icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="w-9 h-9 rounded-md border border-gray-200 flex items-center justify-center text-gray-500 hover:border-[#e53e2d] hover:text-[#e53e2d] transition-all duration-200"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* ── Copyright ── */}
        <p className="text-sm text-gray-500 mt-5 mb-3">
          © 2025 All rights reserved
        </p>

        {/* ── Legal Text ── */}
        <p className="text-[11px] leading-6 text-gray-400 pb-2">
          Reproduction in whole or in part in any form or medium without express
          written permission is prohibited. Compucode and the Compucode icon are
          registered trademarks. Other trademarks contained herein are the
          property of their respective owners. Compucode believes that the
          information in this publication is accurate as of its publication
          date; such information is subject to change without notice.
        </p>
      </div>
    </footer>
  );
};

export default Footer;