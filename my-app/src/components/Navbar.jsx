import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

const LOGO_URL = "https://www.compucodeltd.com/images/logo/compucode.png";

const NAV_LINKS = [
  { label: "Home", to: "/" },
  {
    label: "About Us",
    dropdownType: "simple",
    dropdown: [
      { label: "Company Profile", to: "/about", desc: "Overview of Compucode" },
      // { label: "Who We Are", to: "/about#who-we-are", desc: "Our identity & values" },
      // { label: "Our Mission", to: "/about#our-mission", desc: "What drives us forward" },
    ],
  },
  {
    label: "Our Solutions",
    dropdownType: "mega",
    isButton: true,
    dropdown: [
      { label: "Process Automation with Generative AI", to: "/solutions/process-automation", desc: "Automate workflows with AI" },
      { label: "Application Development powered by AI", to: "/solutions/application-development", desc: "Build smarter applications" },
      { label: "AI-enhanced Data Archiving", to: "/solutions/data-archiving", desc: "Intelligent data storage" },
      { label: "Smart Document Archiving with AI", to: "/solutions/document-archiving", desc: "AI-driven document management" },
      { label: "AI-driven Data Security, Migration & Integration", to: "/solutions/data-security", desc: "Secure your data assets" },
      { label: "Advanced Analytics with Generative AI", to: "/solutions/data-analytics", desc: "Insights from your data" },
      { label: "AI-optimized Business Continuity", to: "/solutions/business-continuity", desc: "Keep operations running" },
      { label: "Datacenter Transformation", to: "/solutions/datacenter-transformation", desc: "Modernize your infrastructure" },
      { label: "Cloud Services with AI Integration", to: "/solutions/cloud-services", desc: "Scalable cloud solutions" },
      { label: "Hybrid Migration enabled by AI", to: "/solutions/hybrid-migration", desc: "Seamless cloud migration" },
      { label: "Infrastructure Virtualisation", to: "/solutions/infrastructure-virtualisation", desc: "Virtual infrastructure solutions" },
      { label: "eDiscovery & Compliance Archiving", to: "/solutions/eDiscovery-Compliancearchiving", desc: "eDiscovery & Compliance Archiving" },
    ],
  },
  { label: "Contact Us", to: "/contact" },
];

const isActiveRoute = (pathname, to) =>
  pathname === to || pathname.startsWith(`${to}/`);

export default function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const navRef = useRef(null);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    handler();
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, [location.pathname]);

  useEffect(() => {
    setOpenDropdown(null);
    setMobileOpen(false);
    setMobileExpanded(null);
  }, [location.pathname]);

  const [pinnedDropdown, setPinnedDropdown] = useState(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenDropdown(null);
        setPinnedDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMouseEnter = (i) => {
    if (pinnedDropdown === null) {
      setOpenDropdown(i);
    }
  };

  const handleMouseLeave = () => {
    if (pinnedDropdown === null) {
      setOpenDropdown(null);
    }
  };

  const handleClickNav = (i) => {
    if (pinnedDropdown === i) {
      setPinnedDropdown(null);
      setOpenDropdown(null);
    } else {
      setPinnedDropdown(i);
      setOpenDropdown(i);
    }
  };

  const ChevronIcon = ({ className }) => (
    <svg className={className} viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
    </svg>
  );

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

        .cc-nav {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 1000;
          font-family: 'Inter', sans-serif;
          background: transparent;
          transition: box-shadow 0.3s ease, backdrop-filter 0.3s ease;
        }
        .cc-nav.scrolled {
          background: rgba(255,255,255,0.15);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          box-shadow: 0 2px 24px rgba(0,0,0,0.08);
          border-bottom: 1.5px solid rgba(229,62,45,0.2);
        }

        .cc-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 32px;
          height: 68px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: relative;
        }

        .cc-logo { display: flex; align-items: center; text-decoration: none; flex-shrink: 0; }
        .cc-logo img { width: 54px; height: 54px; object-fit: contain; transition: transform 0.3s ease; }
        .cc-logo:hover img { transform: scale(1.05); }

        .cc-links {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 8px;
          margin-left: 28px;
          margin-right: 24px;
          flex: 1;
        }

        /* Regular nav link & Desktop button */
        .cc-link, .cc-nav-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 8px 16px;
          font-size: 15px;
          font-weight: 700;
          border-radius: 4px;
          cursor: pointer;
          text-decoration: none;
          background: transparent;
          color: #555;
          border: none !important;
          outline: none !important;
          box-shadow: none !important;
          transition: all 0.25s ease;
          white-space: nowrap;
        }
        .cc-link:hover, .cc-nav-btn:hover {
          color: #e53e2d;
        }
        .cc-link.active, .cc-nav-btn.active {
          background: #e53e2d;
          color: #fff !important;
        }
        .cc-link.open, .cc-nav-btn.open {
          color: #e53e2d;
        }
        .cc-link.open .cc-chevron, .cc-nav-btn.open .cc-chevron {
          transform: rotate(180deg);
          opacity: 1;
        }

        /* Chevron */
        .cc-chevron {
          width: 14px;
          height: 14px;
          transition: transform 0.22s ease;
          opacity: 0.8;
          flex-shrink: 0;
        }
        .cc-link.open .cc-chevron {
          transform: rotate(180deg);
          opacity: 1;
        }

        /* Get in Touch CTA */
        .cc-right { display: flex; align-items: center; flex-shrink: 0; }
        .cc-cta {
          padding: 9px 22px;
          border-radius: 100px;
          font-size: 13.5px;
          font-weight: 600;
          cursor: pointer;
          text-decoration: none;
          background:#E84A3B;
          color: #fff;
          border: none;
          box-shadow: 0 2px 12px rgba(229,62,45,0.35);
          transition: all 0.2s;
          white-space: nowrap;
        }
        .cc-cta:hover {
          background:#fff ;
          color:#E84A3B;
          transform: translateY(-1px);
          box-shadow: 0 4px 18px rgba(229,62,45,0.45);
        }

        /* Simple dropdown */
        .cc-drop-simple {
          position: absolute;
          top: calc(100% + 6px);
          left: 0;
          min-width: 260px;
          background: #fff;
          border-radius: 14px;
          box-shadow: 0 8px 40px rgba(0,0,0,0.13), 0 2px 8px rgba(0,0,0,0.07);
          border: 1px solid rgba(229,62,45,0.12);
          overflow: hidden;
          animation: dropIn 0.18s ease;
          z-index: 999;
        }
        .cc-drop-simple-header {
          padding: 10px 18px 6px;
          font-size: 10px;
          font-weight: 700;
          color: #aaa;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }
        .cc-drop-simple a {
          display: block;
          padding: 10px 18px 12px;
          text-decoration: none;
          transition: background 0.15s;
        }
        .cc-drop-simple a:hover { background: rgba(229,62,45,0.05); }
        .cc-drop-simple a .ds-label {
          font-size: 14px;
          font-weight: 600;
          color: #111;
          display: block;
          margin-bottom: 2px;
        }
        .cc-drop-simple a:hover .ds-label { color: #e53e2d; }
        .cc-drop-simple a .ds-desc { font-size: 12px; color: #888; }

        /* Mega dropdown */
        .cc-drop-mega {
          position: fixed;
          top: 68px;
          left: 50%;
          transform: translateX(-50%);
          width: min(900px, 94vw);
          background: #fff;
          border-radius: 16px;
          box-shadow: 0 12px 60px rgba(0,0,0,0.15), 0 2px 12px rgba(0,0,0,0.08);
          border: 1px solid rgba(229,62,45,0.12);
          overflow: hidden;
          z-index: 999;
          animation: dropInCenter 0.2s ease;
        }
        .cc-drop-mega-header {
          padding: 16px 24px 10px;
          font-size: 10px;
          font-weight: 700;
          color: #aaa;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          border-bottom: 1px solid #f0f0f0;
        }
        .cc-drop-mega-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0;
          padding: 8px 0 12px;
        }
        .cc-drop-mega-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          padding: 10px 24px;
          text-decoration: none;
          transition: background 0.15s;
        }
        .cc-drop-mega-item:hover { background: rgba(229,62,45,0.05); }
        .cc-drop-mega-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background:#E84A3B ;
          flex-shrink: 0;
          margin-top: 6px;
        }
        .cc-drop-mega-item .dm-label {
          font-size: 13px;
          font-weight: 500;
          color: #111;
          display: block;
          line-height: 1.35;
          margin-bottom: 2px;
        }
        .cc-drop-mega-item:hover .dm-label { color: #e53e2d; }
        .cc-drop-mega-item .dm-desc { font-size: 11.5px; color: #999; }

        @keyframes dropIn {
          from { opacity: 0; transform: translateY(-8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes dropInCenter {
          from { opacity: 0; transform: translateX(-50%) translateY(-8px); }
          to   { opacity: 1; transform: translateX(-50%) translateY(0); }
        }

        /* Hamburger */
        .cc-hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          cursor: pointer;
          padding: 6px;
          background: transparent;
          border: none;
        }
        .cc-hamburger span {
          display: block;
          width: 22px; height: 2px;
          border-radius: 2px;
          background: #fff;
          transition: background 0.2s;
        }

        /* Mobile menu */
        .cc-mobile-menu {
          display: none;
          flex-direction: column;
          background: rgba(255,255,255,0.98);
          backdrop-filter: blur(16px);
          border-top: 2px solid #e53e2d;
          max-height: 80vh;
          overflow-y: auto;
        }
        .cc-mobile-link {
          padding: 13px 20px;
          font-size: 14px;
          font-weight: 500;
          color: #222;
          text-decoration: none;
          border-bottom: 1px solid #f0f0f0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
          background: none;
          border-left: none;
          border-right: none;
          border-top: none;
          width: 100%;
          text-align: left;
          transition: color 0.15s;
        }
        .cc-mobile-link:hover { color: #e53e2d; }

        /* Our Solutions — mobile button */
        .cc-mobile-solutions-btn {
          margin: 10px 16px 4px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: #e53e2d;
          color: #fff;
          padding: 13px 16px;
          border-radius: 10px;
          font-weight: 600;
          font-size: 14px;
          cursor: pointer;
          border: none;
          width: calc(100% - 32px);
          text-align: left;
          transition: background 0.2s;
        }
        .cc-mobile-solutions-btn:hover { background: #c0392b; }

        .cc-mobile-chevron {
          width: 14px; height: 14px;
          transition: transform 0.22s;
          opacity: 0.5;
          flex-shrink: 0;
        }
        .cc-mobile-chevron.open { transform: rotate(180deg); opacity: 1; }

        /* white chevron inside red button */
        .cc-mobile-solutions-btn .cc-mobile-chevron { opacity: 0.9; }

        .cc-mobile-sub {
          background: #fafafa;
          border-bottom: 1px solid #f0f0f0;
          overflow: hidden;
        }
        .cc-mobile-sub a {
          display: block;
          padding: 10px 20px 10px 32px;
          font-size: 13px;
          color: #555;
          text-decoration: none;
          border-bottom: 1px solid #f5f5f5;
          transition: color 0.15s, background 0.15s;
        }
        .cc-mobile-sub a:last-child { border-bottom: none; }
        .cc-mobile-sub a:hover,
        .cc-mobile-sub a.active { color: #e53e2d; background: rgba(229,62,45,0.04); font-weight: 600; }

        .cc-mobile-cta {
          margin: 10px 16px 16px;
          display: block;
          text-align: center;
          background: #e53e2d;
          color: #fff;
          padding: 13px;
          border-radius: 10px;
          font-weight: 600;
          font-size: 14px;
          text-decoration: none;
          transition: background 0.2s;
        }
        .cc-mobile-cta:hover { background: #c0392b; }

        @media (max-width: 900px) {
          .cc-links { display: none; }
          .cc-cta { display: none; }
          .cc-hamburger { display: flex; }
          .cc-mobile-menu.open { display: flex; }
        }
      `}</style>

      <nav ref={navRef} className={`cc-nav ${scrolled ? "scrolled" : ""}`}>
        <div className="cc-inner">

          {/* Logo */}
          <Link to="/" className="cc-logo">
            <img src={LOGO_URL} alt="Compucode Limited" />
          </Link>

          {/* Desktop nav links */}
          <div className="cc-links">
            {NAV_LINKS.map((link, i) =>
              link.dropdown ? (
                <div 
                  key={i} 
                  style={{ position: "relative" }}
                  onMouseEnter={() => handleMouseEnter(i)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    className={`${link.isButton ? "cc-nav-btn" : "cc-link"} ${openDropdown === i ? "open" : ""} ${
                      link.dropdown.some((item) => isActiveRoute(location.pathname, item.to)) ? "active" : ""
                    }`}
                    onClick={() => handleClickNav(i)}
                  >
                    {link.label}
                    <ChevronIcon className="cc-chevron" />
                  </button>

                  {openDropdown === i && link.dropdownType === "simple" && (
                    <div className="cc-drop-simple">
                      <div className="cc-drop-simple-header">About</div>
                      {link.dropdown.map((item, j) => (
                        <Link key={j} to={item.to} onClick={() => { setOpenDropdown(null); setPinnedDropdown(null); }}>
                          <span className="ds-label">{item.label}</span>
                          {item.desc && <span className="ds-desc">{item.desc}</span>}
                        </Link>
                      ))}
                    </div>
                  )}

                  {openDropdown === i && link.dropdownType === "mega" && (
                    <div className="cc-drop-mega">
                      <div className="cc-drop-mega-header">Our Solutions</div>
                      <div className="cc-drop-mega-grid">
                        {link.dropdown.map((item, j) => (
                          <Link key={j} to={item.to} className="cc-drop-mega-item" onClick={() => { setOpenDropdown(null); setPinnedDropdown(null); }}>
                            <div className="cc-drop-mega-dot" />
                            <div>
                              <span className="dm-label">{item.label}</span>
                              {item.desc && <span className="dm-desc">{item.desc}</span>}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={i}
                  to={link.to}
                  className={`cc-link ${isActiveRoute(location.pathname, link.to) ? "active" : ""}`}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* Get in Touch CTA */}
          {/* <div className="cc-right">
            <Link to="/contact" className="cc-cta">Get in Touch →</Link>
          </div> */}

          {/* Hamburger */}
          <button
            className="cc-hamburger"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>

        {/* Mobile menu */}
        <div className={`cc-mobile-menu ${mobileOpen ? "open" : ""}`}>
          {NAV_LINKS.map((link, i) =>
            link.dropdown ? (
              <div key={i}>
                {link.isButton ? (
                  /* Our Solutions — red button in mobile */
                  <button
                    className="cc-mobile-solutions-btn"
                    onClick={() => setMobileExpanded(mobileExpanded === i ? null : i)}
                  >
                    {link.label}
                    <ChevronIcon className={`cc-mobile-chevron ${mobileExpanded === i ? "open" : ""}`} />
                  </button>
                ) : (
                  /* About Us — normal link style */
                  <button
                    className="cc-mobile-link"
                    onClick={() => setMobileExpanded(mobileExpanded === i ? null : i)}
                  >
                    {link.label}
                    <ChevronIcon className={`cc-mobile-chevron ${mobileExpanded === i ? "open" : ""}`} />
                  </button>
                )}

                {mobileExpanded === i && (
                  <div className="cc-mobile-sub">
                    {link.dropdown.map((item, j) => (
                      <Link
                        key={j}
                        to={item.to}
                        className={isActiveRoute(location.pathname, item.to) ? "active" : ""}
                        onClick={() => { setMobileOpen(false); setMobileExpanded(null); }}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={i}
                to={link.to}
                className="cc-mobile-link"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            )
          )}

          {/* Get in Touch — mobile */}
          {/* <Link
            to="/contact"
            className="cc-mobile-cta"
            onClick={() => setMobileOpen(false)}
          >
            Get in Touch →
          </Link> */}
        </div>
      </nav>
    </>
  );
}