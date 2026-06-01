
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FiMail, FiMapPin } from "react-icons/fi";
import { FaFacebookF, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const LOGO_URL = "https://www.compucodeltd.com/images/logo/compucode.png";

/* ─── animation CSS (injected once) ─── */
const ANIM_CSS = `
@keyframes _fadeUp {
  from { opacity: 0; transform: translateY(28px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes _fadeIn {
  from { opacity: 0; }
  to   { opacity: 1; }
}
@keyframes _slideLeft {
  from { opacity: 0; transform: translateX(24px); }
  to   { opacity: 1; transform: translateX(0); }
}
@keyframes _scaleIn {
  from { opacity: 0; transform: scale(0.8); }
  to   { opacity: 1; transform: scale(1); }
}
@keyframes _divider {
  from { transform: scaleX(0); }
  to   { transform: scaleX(1); }
}
.footer-anim          { opacity: 0; }
.footer-anim.fu       { animation: _fadeUp   0.65s cubic-bezier(.22,.68,0,1.1) both; }
.footer-anim.fi       { animation: _fadeIn   0.6s  ease both; }
.footer-anim.sl       { animation: _slideLeft 0.6s cubic-bezier(.22,.68,0,1.1) both; }
.footer-anim.sc       { animation: _scaleIn  0.55s cubic-bezier(.22,.68,0,1.1) both; }
.footer-divider-anim  { transform: scaleX(0); transform-origin: left;
                        transition: transform 1.2s cubic-bezier(.22,.68,0,1.1) 0.2s; }
.footer-divider-anim.visible { transform: scaleX(1); }
`;

function useReveal() {
  const refs = useRef([]);
  const dividerRef = useRef(null);

  useEffect(() => {
    /* inject CSS once */
    if (!document.getElementById("footer-anim-css")) {
      const tag = document.createElement("style");
      tag.id = "footer-anim-css";
      tag.textContent = ANIM_CSS;
      document.head.appendChild(tag);
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          if (el === dividerRef.current) {
            el.classList.add("visible");
          } else {
            const delay = el.dataset.delay || "0s";
            el.style.animationDelay = delay;
            el.classList.add(el.dataset.anim || "fu");
          }
          io.unobserve(el);
        });
      },
      { threshold: 0.12 }
    );

    refs.current.forEach((el) => el && io.observe(el));
    if (dividerRef.current) io.observe(dividerRef.current);

    return () => io.disconnect();
  }, []);

  const addRef = (el) => {
    if (el && !refs.current.includes(el)) refs.current.push(el);
  };

  return { addRef, dividerRef };
}

const Footer = () => {
  const { addRef, dividerRef } = useReveal();

  return (
    <footer className="relative bg-white text-gray-600 border-t border-gray-200 overflow-hidden">

      {/* ── Watermark logo ── */}
      <div className="absolute left-[-20px] top-1/2 -translate-y-1/2 pointer-events-none select-none hidden lg:block">
        <img
          src={LOGO_URL}
          alt=""
          className="w-[400px] h-[400px] object-contain opacity-[0.06]"
          style={{ filter: "grayscale(1)" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-14">

        {/* ── Animated accent divider ── */}
        <div
          ref={dividerRef}
          className="footer-divider-anim h-px mb-10"
          style={{ background: "linear-gradient(90deg, transparent, #e53e2d66, transparent)" }}
        />

        {/* ── Top Section ── */}
        <div className="grid lg:grid-cols-12 gap-12 border-b border-gray-200 pb-12">

          {/* LEFT */}
          <div
            ref={addRef}
            className="footer-anim lg:col-span-5 flex flex-col"
            data-anim="fu"
            data-delay="0s"
          >
            <Link to="/" className="inline-block mb-5 group">
              <img
                src={LOGO_URL}
                alt="Compucode Limited"
                className="w-14 h-14 object-contain opacity-50 transition-all duration-500 group-hover:opacity-80 group-hover:scale-110 group-hover:rotate-6"
              />
            </Link>

            <p className="text-sm leading-7 text-gray-600 text-justify">
              Compucode offers a unified array of technology solutions to simplify IT,
              with a strong focus on integrating Generative AI. Our technology services
              oriented team delivers an integrated stack of cloud, IT applications,
              software, systems solutions with advanced scalability and enterprise
              security mindset. We are a services oriented team with several years of
              experience in the global segment of the IT Industry, proven ability to
              deliver strategic industry solutions.
            </p>

            <Link
              to="/about"
              className="mt-5 text-[#8B2626] text-sm font-medium w-fit relative group/link"
            >
              Learn More
              <span
                className="absolute left-0 -bottom-0.5 h-px bg-[#8B2626] w-0 transition-all duration-300 group-hover/link:w-full"
              />
            </Link>
          </div>

          {/* RIGHT: Contact Info */}
          <div className="lg:col-span-5 lg:col-start-8 flex flex-col">

            {/* Email */}
            <div
              ref={addRef}
              className="footer-anim flex items-start gap-4 py-5 border-b border-gray-100"
              data-anim="sl"
              data-delay="0.1s"
            >
              <div className="w-9 h-9 rounded-md border border-gray-200 flex items-center justify-center shrink-0 text-[#8B2626] transition-all duration-300 hover:border-[#8B2626] hover:bg-[#8B2626] hover:scale-110">
                <FiMail size={16} />
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">Email</p>
                <a
                  href="mailto:contactus@compucodeltd.com"
                  className="text-sm text-gray-700 hover:text-[#8B2626] transition-colors duration-200"
                >
                  contactus@compucodeltd.com
                </a>
              </div>
            </div>

            {/* Nigeria */}
            <div
              ref={addRef}
              className="footer-anim flex items-start gap-4 py-5 border-b border-gray-100"
              data-anim="sl"
              data-delay="0.2s"
            >
              <div className="w-9 h-9 rounded-md border border-gray-200 flex items-center justify-center shrink-0 text-[#8B2626] transition-all duration-300 hover:border-[#8B2626] hover:bg-[#e53e2d0f] hover:scale-110">
                <FiMapPin size={16} />
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">Nigeria Office</p>
                <p className="text-sm text-gray-600 leading-6">
                  29, Lekki County Estate Road,<br />Lekki, Lagos, Nigeria
                </p>
              </div>
            </div>

            {/* UK */}
            <div
              ref={addRef}
              className="footer-anim flex items-start gap-4 py-5"
              data-anim="sl"
              data-delay="0.3s"
            >
              <div className="w-9 h-9 rounded-md border border-gray-200 flex items-center justify-center shrink-0 text-[#8B2626] transition-all duration-300 hover:border-[#8B2626] hover:bg-[#e53e2d0f] hover:scale-110">
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
        <div
          ref={addRef}
          className="footer-anim flex flex-wrap items-center justify-between gap-4 py-6 border-b border-gray-200"
          data-anim="fu"
          data-delay="0.35s"
        >
          <ul className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-gray-500">
            {[
              { label: "Privacy Policy", to: "/privacy-policy" },
              { label: "Cookie Policy",  to: "/cookie-policy"  },
              { label: "Contact Us",     to: "/contact"        },
              { label: "About Us",       to: "/about"          },
            ].map(({ label, to }) => (
              <li key={label}>
                <Link
                  to={to}
                  className="relative group/nav hover:text-[#8B2626] transition-colors duration-200"
                >
                  {label}
                  <span className="absolute left-0 -bottom-0.5 h-px bg-[#8B2626] w-0 transition-all duration-300 group-hover/nav:w-full" />
                </Link>
              </li>
            ))}
          </ul>

          {/* Social Icons */}
          <div className="flex items-center gap-2">
            {[
              { href: "https://www.linkedin.com/company/compucode", icon: <FaLinkedinIn size={15} />, label: "LinkedIn",  delay: "0.4s"  },
              { href: "https://www.facebook.com/",                  icon: <FaFacebookF  size={14} />, label: "Facebook",  delay: "0.47s" },
              { href: "https://twitter.com/CompucodeL",             icon: <FaXTwitter   size={14} />, label: "Twitter",   delay: "0.54s" },
              { href: "https://chat.whatsapp.com/HN3BQ95oLIEF1HBZfkRBJ1",                             icon: <FaWhatsapp   size={16} />, label: "WhatsApp",  delay: "0.61s" },
            ].map(({ href, icon, label, delay }) => (
              <a
                key={label}
                ref={addRef}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="footer-anim w-9 h-9 rounded-md border border-gray-200 flex items-center justify-center text-gray-500 hover:border-[#8B2626] hover:text-[#8B2626] hover:-translate-y-1 hover:scale-110 hover:bg-[#e53e2d08] transition-all duration-300"
                data-anim="sc"
                data-delay={delay}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* ── Copyright ── */}
        <p
          ref={addRef}
          className="footer-anim text-sm text-gray-500 mt-5 mb-3"
          data-anim="fi"
          data-delay="0.55s"
        >
          © 2026 All rights reserved
        </p>

        {/* ── Legal ── */}
        <p
          ref={addRef}
          className="footer-anim text-[11px] leading-6 text-gray-400 pb-2"
          data-anim="fi"
          data-delay="0.65s"
        >
          Reproduction in whole or in part in any form or medium without express
          written permission is prohibited. Compucode and the Compucode icon are
          registered trademarks. Other trademarks contained herein are the property
          of their respective owners. Compucode believes that the information in this
          publication is accurate as of its publication date; such information is
          subject to change without notice.
        </p>
      </div>
    </footer>
  );
};

export default Footer;