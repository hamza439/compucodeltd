import { Link } from "react-router-dom";
import {
  ArrowRight,
  Archive,
  Check,
  Cpu,
  FileText,
  Shield,
} from "lucide-react";
import InfrastructureUpgrade from "../components/InfrastructureUpgrade";
import Footer from "../components/Footer";

const HERO_BG = "https://www.compucodeltd.com/images/banners/body-bg.jpg";
const ARCHIVE_IMG = "https://www.compucodeltd.com/images/blobs/archive.png";

const ecosystemItems = [
  {
    icon: Archive,
    title: "Secure Long-Term Storage",
    text: "Store documents no longer in day-to-day use for extended periods—with managed, protected archives you can trust.",
  },
  {
    icon: Shield,
    title: "Data Protection",
    text: "Reduce risks of mistakes and improve data protection with enterprise-grade document management practices.",
  },
  {
    icon: FileText,
    title: "Smart Document Access",
    text: "Retrieve and manage archived documents efficiently with AI-enhanced organization and search capabilities.",
  },
];

const features = [
  "Secure storage for documents outside daily operations",
  "Managed document lifecycle with reduced operational risk",
  "Improved data protection and compliance readiness",
  "Peace of mind for long-term business records",
];

const sora = { fontFamily: "'Sora', sans-serif", fontWeight: 600 };
const dm   = { fontFamily: "'DM Sans', sans-serif", fontWeight: 400 };

export default function SmartDocumentArchiving() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@600&family=DM+Sans:wght@400&display=swap');
      `}</style>

      <div style={dm} className="bg-white">

        {/* ── Hero ─────────────────────────────────────────── */}
        <section className="relative pt-16 overflow-hidden">
          <div
            className="absolute inset-0  bg-cover bg-top bg-no-repeat"
            style={{ backgroundImage: `url(${HERO_BG})` }}
          />
          <div className="absolute inset-0 bg-black/55" />

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 py-20 sm:py-28 md:py-32 text-center">
            <p
              style={{ ...dm, letterSpacing: "0.12em" }}
              className="text-xs sm:text-sm uppercase text-white/80 mb-4"
            >
              Our Solutions
            </p>

            <h1
              style={sora}
              className="text-3xl text-nowrap  sm:text-4xl md:text-5xl lg:text-5xl text-white mb-3 leading-tight"
            >
                Document Archiving
            </h1>

            <p
              style={dm}
              className="text-sm sm:text-base md:text-lg text-white/85 leading-relaxed mx-auto mb-5"
            >
              We take joy in helping you securely store documents that are no longer
              in your day-to-day activities. We manage your documents, reduce risks,
              and improve your data protection—you will be happy to do business with
              us.
            </p>

                    <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 bg-[#752921] border-2 border-[#752921] text-white font-bold text-xs sm:text-sm tracking-wide uppercase rounded-sm hover:bg-white hover:text-[#752921] transition-all duration-200"
          >

              Get Started Now
              <ArrowRight size={18} />
            </Link>
          </div>
        </section>

        {/* ── Ecosystem grid ───────────────────────────────── */}
        <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2
              style={sora}
              className="text-2xl sm:text-3xl md:text-4xl text-gray-900 mb-4"
            >
              Built to Work With Your Ecosystem
            </h2>
            <p
              style={dm}
              className="text-gray-500 text-sm sm:text-base leading-relaxed max-w-3xl mb-10 sm:mb-14"
            >
              Compucode document archiving integrates with your existing systems—
              delivering secure, intelligent storage powered by Generative AI across
              your organization.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12">
              {ecosystemItems.map(({ icon: Icon, title, text }) => (
                <div key={title}>
                  <div className="mb-4 w-12 h-12 rounded-lg bg-[#e53e2d]/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-[#752921]" strokeWidth={1.5} />
                  </div>
                  <h3 style={sora} className="text-base sm:text-lg text-gray-900 mb-3">
                    {title}
                  </h3>
                  <p style={dm} className="text-sm text-gray-500 leading-relaxed">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Feature split ────────────────────────────────── */}
        <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-[#fafafa]">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            {/* Text */}
            <div>
              <h2
                style={sora}
                className="text-2xl sm:text-3xl md:text-4xl text-gray-900 mb-5 leading-tight"
              >
                Document Archiving with{" "}
                <span className="text-[#752921]">Generative AI</span>
              </h2>
              <p style={dm} className="text-gray-500 text-sm leading-relaxed mb-6">
                We will manage your documents for you, reduce risks of mistakes and
                help in improving your data protection for records that matter to
                your business long term.
              </p>
              <Link
                to="/contact"
                style={sora}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-900 text-white text-xs sm:text-sm rounded-md hover:bg-black transition-colors mb-8 sm:mb-10"
              >
                Learn More
                <ArrowRight size={16} />
              </Link>

              <ul className="space-y-3 sm:space-y-4">
                {features.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="flex-shrink-0 mt-0.5 w-6 h-6 rounded-full bg-[#e53e2d]/15 flex items-center justify-center">
                      <Check className="w-4 h-4 text-[#752921]" strokeWidth={2.5} />
                    </span>
                    <span style={dm} className="text-sm text-gray-700 leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Image card */}
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
                    src={ARCHIVE_IMG}
                    alt="Document archiving"
                    className="w-full max-w-[200px] sm:max-w-xs object-contain mb-6"
                  />
                  <div className="flex items-center gap-2 text-white/90">
                    <Cpu className="w-5 h-5 text-[#752921]" />
                    <span style={sora} className="text-sm tracking-wide">
                      Compucode Ltd
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Main content ─────────────────────────────────── */}
        <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-white">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 items-center">

            <div className="md:col-span-5 flex justify-center">
              <img
                src={ARCHIVE_IMG}
                alt="Document Archiving"
                className="w-full max-w-xs sm:max-w-sm md:max-w-md object-contain"
              />
            </div>

            <div className="md:col-span-7">
              <p style={dm} className="text-sm text-gray-500 leading-relaxed text-justify mb-8">
                We take joy in helping you securely store documents that are no
                longer in your day-to-day activities for extended periods of time.
                We will manage your documents for you, reduce risks of mistakes and
                help in improving your data protection. You will be happy to do
                business with us.
              </p>
              <Link
                to="/contact"
                style={sora}
                className="inline-flex items-center gap-2 px-5 sm:px-6 py-3 border border-[#752921] text-[#752921] text-xs tracking-widest uppercase hover:bg-[#752921] hover:text-white transition-colors duration-200"
              >
                Get Started Now
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        {/* ── Bottom CTA ───────────────────────────────────── */}
        {/* <section className="py-14 sm:py-16 md:py-20 px-4 sm:px-6 bg-[#111111]">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">
            <h2
              style={sora}
              className="text-2xl sm:text-3xl md:text-4xl text-white leading-tight"
            >
              Learn how Compucode{" "}
              <span className="text-[#e53e2d]">completes</span> your tech stack.
            </h2>
            <div>
              <p style={dm} className="text-gray-400 text-sm leading-relaxed mb-6 sm:mb-8">
                Our AI-enhanced team delivers scalable, secure, integrated IT
                solutions—engineered for predictive scalability and an enterprise
                security mindset.
              </p>
              <Link
                to="/contact"
                style={sora}
                className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 border-2 border-[#e53e2d] text-[#e53e2d] text-xs sm:text-sm tracking-wide uppercase rounded-sm hover:bg-[#e53e2d] hover:text-white transition-colors duration-200"
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