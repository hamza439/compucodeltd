import { Link } from "react-router-dom";
import {
  ArrowRight,
  Check,
  Archive,
  Search,
  ShieldCheck,
  Lock,
  Database,
  Clock,
} from "lucide-react";

import InfrastructureUpgrade from "../components/InfrastructureUpgrade";
import Footer from "../components/Footer";

const HERO_BG = "https://www.compucodeltd.com/images/banners/body-bg.jpg";
const ARCH_IMG = "https://compucodeltd.com/images/blobs/business.png";

const ecosystemItems = [
  {
    icon: Archive,
    title: "Email & File Archiving",
    text: "Automatically capture, index, and store every email, file, and record across your organisation — ensuring nothing is ever lost or tampered with.",
  },
  {
    icon: Search,
    title: "Instant eDiscovery",
    text: "Retrieve any archived record in seconds with powerful full-text search — built for legal holds, audits, and compliance investigations.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance & Regulatory Ready",
    text: "Meet GDPR, HIPAA, SEC, and industry-specific retention requirements with automated policies and tamper-proof audit trails.",
  },
];

const features = [
  "Tamper-proof, immutable storage for long-term record retention",
  "Automated retention policies aligned with regulatory requirements",
  "Instant full-text search across millions of archived records",
  "Seamless integration with Exchange, Office 365, and cloud platforms",
];

const stats = [
  { icon: Database, stat: "99.99%",   label: "Data Integrity"     },
  { icon: Clock,     stat: "7+ Yrs",  label: "Retention Support"  },
  { icon: Lock,      stat: "AES-256", label: "Encryption"         },
];

export default function EnterpriseArchive() {
  return (
    <div className="bg-white">

      {/* ───────── HERO ───────── */}
      <section className="relative min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] flex items-center pt-14 sm:pt-16 overflow-hidden">

        <div
          className="absolute inset-0 bg-cover bg-top bg-no-repeat"
          style={{ backgroundImage: `url(${HERO_BG})` }}
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 text-center py-16 sm:py-20">

          <p className="text-[10px] sm:text-xs tracking-widest uppercase text-white/80 dm-sans-regular-400 mb-3 sm:mb-4">
            Our Solutions
          </p>

          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl sora-semibold-600 text-white mb-4 sm:mb-6 leading-tight">
            Enterprise Archive
          </h1>

          <p className="text-sm sm:text-base md:text-lg dm-sans-regular-400 text-white/85 leading-relaxed max-w-2xl mx-auto mb-6 sm:mb-8">
            Compucode's Enterprise Archive delivers a comprehensive, tamper-proof
            archiving platform for email, files, and business records — fully
            compliant, instantly searchable, and built for long-term retention
            at enterprise scale.
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-5 sm:px-8 py-2.5 sm:py-3.5 bg-[#e53e2d] border-2 border-[#e53e2d] text-white font-bold text-xs sm:text-sm tracking-wide uppercase rounded-sm hover:bg-white hover:text-[#e53e2d] transition-all duration-200"
          >
            Get Started Now
            <ArrowRight size={16} className="sm:w-[18px] sm:h-[18px]" />
          </Link>

        </div>
      </section>

      {/* ───────── ECOSYSTEM ───────── */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl sora-semibold-600 text-gray-900 mb-3 sm:mb-4">
            Built to Work With Your Ecosystem
          </h2>

          <p className="text-sm sm:text-base dm-sans-regular-400 text-gray-500 max-w-3xl mb-10 sm:mb-14 leading-relaxed">
            Compucode Enterprise Archive integrates seamlessly with your existing
            infrastructure — connecting email servers, cloud storage, and
            compliance tools into one unified, auditable repository.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {ecosystemItems.map(({ icon: Icon, title, text }) => (
              <div key={title}>
                <div className="w-11 h-11 sm:w-12 sm:h-12 mb-3 sm:mb-4 rounded-lg bg-[#e53e2d]/10 flex items-center justify-center">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#e53e2d]" strokeWidth={1.5} />
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

          {/* LEFT */}
          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl sora-semibold-600 text-gray-900 mb-4 sm:mb-5 leading-snug">
              Enterprise Archiving Powered by{" "}
              <span className="text-[#e53e2d]">Intelligent Automation</span>
            </h2>

            <p className="text-sm md:text-base dm-sans-regular-400 text-gray-500 mb-5 sm:mb-6 leading-relaxed">
              Our archive platform automatically applies retention policies,
              enforces legal holds, and indexes every record — so your
              compliance team always has the evidence they need, exactly when
              they need it.
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-900 text-white text-sm font-semibold rounded-md hover:bg-black mb-7 sm:mb-8 transition-colors"
            >
              Learn More
              <ArrowRight size={16} />
            </Link>

            <ul className="space-y-3 sm:space-y-4">
              {features.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#e53e2d]/15 flex items-center justify-center mt-0.5 flex-shrink-0">
                    <Check className="w-3 h-3 sm:w-4 sm:h-4 text-[#e53e2d]" strokeWidth={2.5} />
                  </span>
                  <span className="text-sm dm-sans-regular-400 text-gray-700 leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT IMAGE CARD */}
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
                  src={ARCH_IMG}
                  alt="Enterprise Archive"
                  className="w-full max-w-[200px] sm:max-w-xs object-contain mb-5 sm:mb-6"
                />
                <div className="flex items-center gap-2 text-white/90">
                  <Archive className="w-4 h-4 sm:w-5 sm:h-5 text-[#e53e2d]" />
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

          {/* LEFT image — hidden mobile */}
          <div className="hidden md:flex md:col-span-5 justify-center">
            <img
              src={ARCH_IMG}
              alt="Enterprise Archive Platform"
              className="w-full max-w-md object-contain"
            />
          </div>

          {/* RIGHT text */}
          <div className="md:col-span-7">

            <p className="text-sm text-gray-500 leading-relaxed text-justify mb-5 sm:mb-6 dm-sans-regular-400">
              Compucode's Enterprise Archive is purpose-built for organisations
              that must retain, protect, and produce records on demand. Whether
              you're facing an audit, legal discovery request, or simply need
              to meet data retention regulations — our platform handles the
              full lifecycle automatically.
              <br /><br />
              We support archiving for Microsoft Exchange, Office 365, Google
              Workspace, file shares, SharePoint, and custom data sources.
              Every archived item is stored in immutable, write-once format
              with cryptographic integrity checks — making tampering or
              accidental deletion impossible. Administrators can configure
              retention schedules, legal hold policies, and access controls
              from a single management console.
            </p>

            <h3 className="text-lg sm:text-xl md:text-2xl sora-semibold-600 text-gray-900 leading-snug mb-6 sm:mb-8">
              Every record preserved, every audit passed — compliance
              built in from day one, not bolted on later.
            </h3>

            {/* STAT CARDS */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-7 sm:mb-8">
              {stats.map(({ icon: Icon, stat, label }) => (
                <div
                  key={label}
                  className="flex flex-col items-center text-center p-3 sm:p-4 rounded-lg border border-gray-100 bg-[#fafafa]"
                >
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#e53e2d] mb-1.5 sm:mb-2" strokeWidth={1.5} />
                  <span className="text-base sm:text-lg sora-semibold-600 text-gray-900">{stat}</span>
                  <span className="text-[10px] sm:text-xs dm-sans-regular-400 text-gray-400 mt-0.5">{label}</span>
                </div>
              ))}
            </div>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 border border-[#e53e2d] text-[#e53e2d] font-bold text-xs tracking-widest uppercase hover:bg-[#e53e2d] hover:text-white transition-colors duration-200"
            >
              Get Started Now
              <ArrowRight size={15} />
            </Link>

          </div>
        </div>
      </section>

      {/* ───────── BOTTOM CTA ───────── */}
      {/* <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-[#111111]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 items-center">

          <h2 className="text-2xl sm:text-3xl md:text-4xl sora-semibold-600 text-white leading-tight">
            See how Compucode{" "}
            <span className="text-[#e53e2d]">safeguards</span> your
            critical business records.
          </h2>

          <div>
            <p className="text-gray-400 text-sm dm-sans-regular-400 leading-relaxed mb-6 sm:mb-8">
              From email archiving to full enterprise records management —
              our team delivers secure, compliant, and instantly searchable
              archive solutions built for the demands of modern business.
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 border-2 border-[#e53e2d] text-[#e53e2d] font-bold text-xs sm:text-sm tracking-wide uppercase rounded-sm hover:bg-[#e53e2d] hover:text-white transition-colors duration-200"
            >
              Contact Us
              <ArrowRight size={16} className="sm:w-[18px] sm:h-[18px]" />
            </Link>
          </div>

        </div>
      </section> */}

      <InfrastructureUpgrade />
      <Footer />

    </div>
  );
}
