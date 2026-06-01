import { Link } from "react-router-dom";
import {
  ArrowRight,
  Check,
  Archive,
  Search,
  FileText,
  Lock,
  ShieldCheck,
  BarChart2,
  Clock,
} from "lucide-react";

import InfrastructureUpgrade from "../components/InfrastructureUpgrade";
import Footer from "../components/Footer";

// ── Google Fonts injected once at runtime ──
const fontLink = document.createElement("link");
fontLink.rel = "stylesheet";
fontLink.href =
  "https://fonts.googleapis.com/css2?family=Sora:wght@600&family=DM+Sans:wght@400&display=swap";
if (!document.head.querySelector(`link[href="${fontLink.href}"]`)) {
  document.head.appendChild(fontLink);
}

// ── Font utility styles injected into <head> once ──
const styleId = "compucode-fonts";
if (!document.getElementById(styleId)) {
  const style = document.createElement("style");
  style.id = styleId;
  style.textContent = `
    .sora-semibold-600  { font-family: 'Sora', sans-serif;    font-weight: 600; }
    .dm-sans-regular-400 { font-family: 'DM Sans', sans-serif; font-weight: 400; }
  `;
  document.head.appendChild(style);
}

const HERO_BG = "https://www.compucodeltd.com/images/banners/body-bg.jpg";
const APP_IMG = "https://compucodeltd.com/images/blobs/hybrid.png";

const ecosystemItems = [
  {
    icon: Archive,
    title: "Automated Compliance Archiving",
    text: "Capture, index, and retain emails, messages, and documents automatically — ensuring your organisation meets regulatory retention mandates with tamper-proof, audit-ready archives.",
  },
  {
    icon: Search,
    title: "AI-Powered eDiscovery Search",
    text: "Rapidly surface relevant evidence across millions of records using intelligent search, keyword filtering, and AI-assisted relevance ranking — cutting legal review time dramatically.",
  },
  {
    icon: FileText,
    title: "Legal Hold & Case Management",
    text: "Instantly place custodian data on legal hold, manage multiple matters in parallel, and export production-ready document sets in standard formats for counsel and courts.",
  },
];

const features = [
  "AI-driven document classification and privilege detection",
  "Immutable, tamper-evident archiving for GDPR, HIPAA, SEC, and FINRA",
  "Seamless connectors for email, Teams, Slack, SharePoint, and cloud storage",
  "Scalable ingestion processing billions of records with sub-second search",
];

export default function eDiscoveryComplianceArcheiving() {
  return (
    <div className="bg-white">

      {/* ───────── HERO ───────── */}
      <section className="relative min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] flex items-center pt-14 sm:pt-16 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-top bg-no-repeat"
          style={{ backgroundImage: `url(${HERO_BG})` }}
        />
        <div className="absolute inset-0 bg-black/55" />

        <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 text-center py-16 sm:py-20">
          <p className="text-[10px] sm:text-xs tracking-widest uppercase text-white/80 dm-sans-regular-400 mb-3 sm:mb-4">
            Our Solutions
          </p>
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl sora-semibold-600 font-bold text-white mb-4 sm:mb-6 leading-tight">
            eDiscovery &amp; Compliance Archiving
          </h1>
          <p className="text-sm sm:text-base md:text-lg dm-sans-regular-400 text-white/85 leading-relaxed max-w-2xl mx-auto mb-6 sm:mb-8">
            Compucode delivers enterprise-grade eDiscovery and compliance
            archiving platforms powered by AI — helping legal, compliance, and
            IT teams preserve evidence, meet regulatory obligations, and respond
            to litigation with speed and confidence.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-5 sm:px-8 py-2.5 sm:py-3.5 bg-[#752921] border-2 border-[#752921] text-white font-bold text-xs sm:text-sm tracking-wide uppercase rounded-sm hover:bg-white hover:text-[#752921] transition-all duration-200"
          >
            Get Started Now
            <ArrowRight size={16} className="sm:w-[18px] sm:h-[18px]" />
          </Link>
        </div>
      </section>

      {/* ───────── ECOSYSTEM ───────── */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl sora-semibold-600 text-gray-900 mb-3 sm:mb-4">
            Built to Work With Your Ecosystem
          </h2>
          <p className="text-sm sm:text-base dm-sans-regular-400 text-gray-500 max-w-3xl mb-10 sm:mb-12 md:mb-14 leading-relaxed">
            Our eDiscovery and archiving solutions integrate seamlessly with
            your existing technology stack — capturing data across every
            communication channel, cloud platform, and enterprise application
            through AI-enhanced automation and intelligent preservation policies.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {ecosystemItems.map(({ icon: Icon, title, text }) => (
              <div key={title}>
                <div className="w-11 h-11 sm:w-12 sm:h-12 mb-3 sm:mb-4 rounded-lg bg-[#e53e2d]/10 flex items-center justify-center">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#752921]" strokeWidth={1.5} />
                </div>
                <h3 className="text-base md:text-lg sora-semibold-600 text-gray-900 mb-2 sm:mb-3">
                  {title}
                </h3>
                <p className="text-sm dm-sans-regular-400 text-gray-500 leading-relaxed">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── FEATURES ───────── */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-[#fafafa]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 items-center">
          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl sora-semibold-600 text-gray-900 mb-4 sm:mb-5 leading-snug">
              Intelligent eDiscovery Powered by{" "}
              <span className="text-[#752921]">Generative AI</span>
            </h2>
            <p className="text-sm md:text-base dm-sans-regular-400 text-gray-500 mb-5 sm:mb-6 leading-relaxed">
              Compucode's eDiscovery platform leverages AI to automate
              document review, accelerate privilege logging, and ensure every
              piece of responsive data is identified and produced on time —
              reducing legal costs and compliance risk across the board.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#752921] text-white text-sm font-semibold rounded-md hover:bg-black mb-7 sm:mb-8 transition-colors"
            >
              Learn More
              <ArrowRight size={16} />
            </Link>
            <ul className="space-y-3 sm:space-y-4">
              {features.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#e53e2d]/15 flex items-center justify-center mt-0.5 flex-shrink-0">
                    <Check className="w-3 h-3 sm:w-4 sm:h-4 text-[#752921]" strokeWidth={2.5} />
                  </span>
                  <span className="text-sm dm-sans-regular-400 text-gray-700 leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex justify-center lg:justify-end mt-6 lg:mt-0">
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md">
              <div
                className="absolute -inset-4 rounded-2xl opacity-20 blur-2xl"
                style={{
                  background:
                    "linear-gradient(135deg, #e53e2d 0%, #7c3aed 50%, #14b8a6 100%)",
                }}
              />
              <div className="relative rounded-2xl bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f0f0f] p-6 md:p-8 flex flex-col items-center justify-center min-h-[260px] sm:min-h-[300px]">
                <img
                  src={APP_IMG}
                  alt="eDiscovery solution"
                  className="w-full max-w-[200px] sm:max-w-xs object-contain mb-5 sm:mb-6"
                />
                <div className="flex items-center gap-2 text-white/90">
                  <Archive className="w-4 h-4 sm:w-5 sm:h-5 text-[#752921]" />
                  <span className="text-xs sm:text-sm sora-semibold-600">Compucode Ltd</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── DETAIL / STATS ───────── */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          <div className="hidden md:flex md:col-span-5 justify-center">
            <img
              src={APP_IMG}
              alt="eDiscovery Platform"
              className="w-full max-w-md object-contain"
            />
          </div>
          <div className="md:col-span-7">
            <p className="text-sm text-gray-500 leading-relaxed text-justify mb-5 sm:mb-6 dm-sans-regular-400">
              Compucode's eDiscovery &amp; Compliance Archiving solution is built
              for enterprises that face litigation, regulatory audits, and strict
              data retention obligations. Whether you're responding to an
              urgent legal hold, implementing a long-term archiving strategy, or
              demonstrating compliance to regulators — our team manages the full
              lifecycle.
              <br /><br />
              Our solution covers data ingestion &amp; preservation across email,
              chat, and cloud storage; intelligent search and early case
              assessment; custodian hold notifications; redaction and privilege
              review workflows; and fully auditable chain-of-custody export for
              courts and regulators. Every deployment is hardened with
              immutable storage and compliance controls for GDPR, HIPAA, SEC
              17a-4, FINRA, and industry-specific regulations.
            </p>
            <h3 className="text-lg sm:text-xl md:text-2xl sora-semibold-600 text-gray-900 leading-snug mb-6 sm:mb-8">
              Every record preserved, every obligation met —
              powered by AI so your legal and compliance teams focus on what
              matters most.
            </h3>
            <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-7 sm:mb-8">
              {[
                { icon: Clock,       stat: "7+ Yrs",   label: "Retention Policy"  },
                { icon: ShieldCheck, stat: "256-bit",  label: "Encryption"        },
                { icon: BarChart2,   stat: "1B+",      label: "Records Indexed"   },
              ].map(({ icon: Icon, stat, label }) => (
                <div
                  key={label}
                  className="flex flex-col items-center text-center p-3 sm:p-4 rounded-lg border border-gray-100 bg-[#fafafa]"
                >
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#752921] mb-1.5 sm:mb-2" strokeWidth={1.5} />
                  <span className="text-base sm:text-lg sora-semibold-600 text-gray-900">{stat}</span>
                  <span className="text-[10px] sm:text-xs dm-sans-regular-400 text-gray-400 mt-0.5">{label}</span>
                </div>
              ))}
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 border border-[#752921] text-[#752921] font-bold text-xs tracking-widest uppercase hover:bg-[#752921] hover:text-white transition-colors duration-200"
            >
              Get Started Now
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      <InfrastructureUpgrade />
      <Footer />

    </div>
  );
}