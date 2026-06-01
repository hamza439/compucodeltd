
import { Link } from "react-router-dom";
import { ArrowRight, Check, Cpu } from "lucide-react";
import InfrastructureUpgrade from "../components/InfrastructureUpgrade";
import Footer from "../components/Footer";

const HERO_BG = "https://www.compucodeltd.com/images/banners/body-bg.jpg";
const SECURITY_IMG = "https://compucodeltd.com/images/blobs/security.png";
const MIGRATE_IMG = "https://compucodeltd.com/images/blobs/migrate.png";
const INTEGRATION_IMG = "https://compucodeltd.com/images/blobs/it.png";

const ecosystemItems = [
  {
    image: SECURITY_IMG,
    title: "Data Security",
    accent: "Security",
    text: "We specialize in protecting data from rival and destructive forces. Our technology includes data encryption, data masking, data erasure, and data resilience.",
  },
  {
    image: MIGRATE_IMG,
    title: "Data Migration",
    accent: "Migration",
    text: "Securely move your data from one storage to another, transfer between applications, or change organisational data formats—without risk.",
  },
  {
    image: INTEGRATION_IMG,
    title: "Data Integration",
    accent: "Integration",
    text: "Combine data from several sources into a simple, single unified view through proven data integration techniques.",
  },
];

const securityFeatures = [
  "Data encryption, masking, erasure, and resilience",
  "Protection from unauthorized access and modification",
  "Secure databases from destruction and disclosure",
  "Expert support from Compucode specialists",
];

const serviceSections = [
  {
    image: SECURITY_IMG,
    accent: "Security",
    paragraphs: [
      "We specialize in protecting data from rival and destructive forces. Our technology includes: Data encryption, Data masking, Data erasure, Data resilience.",
      "Are you seeking to secure your data from unwelcomed actions of unauthorized intruders? You just got to the right stop! Here at Compucode, we can help secure your data or database from destruction, disclosure or modification by unauthorized users. Why not contact us today.",
    ],
  },
  {
    image: MIGRATE_IMG,
    accent: "Migration",
    paragraphs: [
      "Do you plan moving your data from one storage to another? Are changing core applications and you are seeking help to securely transfer your company data from the previous to the current application? Perhaps, you need someone to wholly change the format of your Organisational data to a new one? You don't need to risk the job, give it to us and you will be grateful you did!",
    ],
  },
  {
    image: INTEGRATION_IMG,
    accent: "Integration",
    paragraphs: [
      "Are you experiencing frequent rise in data volume and increasing need to share them? Would you combine data from several sources with an aim of providing users with a simple, single unified view? Here at Compucode Limited we can help you achieve this through a variety of data integration techniques. We will be happy to help you achieve this.",
    ],
  },
];

const ctaClass =
  "inline-flex items-center gap-2 px-6 py-3 border border-[#752921] text-[#752921] font-bold text-xs tracking-widest uppercase hover:bg-[#752921] hover:text-white transition-colors duration-200";

export default function DataSecurity() {
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
            Data Security, Migration and Integration
          </h1>
 <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 bg-[#752921] border-2 border-[#752921] text-white font-bold text-xs sm:text-sm tracking-wide uppercase rounded-sm hover:bg-white hover:text-[#752921] transition-all duration-200"
          >
            Get Started Now
            <ArrowRight size={18} />
          </Link>

        </div>
      </section>

      {/* ───────── ECOSYSTEM GRID ───────── */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">

          <h2
            className="text-2xl sm:text-3xl md:text-4xl text-gray-900 mb-4"
            style={{ fontFamily: "'Sora', sans-serif", fontWeight: 600 }}
          >
            Built to Work With Your Ecosystem
          </h2>

          <p
            className="text-sm sm:text-base text-gray-500 leading-relaxed max-w-3xl mb-10 sm:mb-14"
            style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400 }}
          >
            Compucode helps you protect, move, and unify your data—delivering
            secure, AI-enhanced solutions across security, migration, and
            integration.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-0">
            {ecosystemItems.map((item, index) => (
              <div
                key={item.title}
                className={`px-0 sm:px-6 py-6 lg:py-0 ${
                  index < 2 ? "lg:border-r lg:border-gray-200" : ""
                } ${index > 0 ? "border-t sm:border-t-0 border-gray-100 lg:border-t-0" : ""}`}
              >
                <div className="mb-6 flex justify-center sm:justify-start h-36 sm:h-44">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full max-w-[180px] sm:max-w-[220px] object-contain"
                  />
                </div>

                <h3
                  className="text-base sm:text-lg text-gray-900 mb-3"
                  style={{ fontFamily: "'Sora', sans-serif", fontWeight: 600 }}
                >
                  Data{" "}
                  <span className="text-[#752921]">{item.accent}</span>
                </h3>

                <p
                  className="text-sm text-gray-500 leading-relaxed mb-6"
                  style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400 }}
                >
                  {item.text}
                </p>

                <Link to="/contact" className={ctaClass}>
                  Get Started Now
                  <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ───────── FEATURE SPLIT ───────── */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-[#fafafa]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Text Side */}
          <div>
            <h2
              className="text-2xl sm:text-3xl md:text-4xl text-gray-900 mb-5 leading-tight"
              style={{ fontFamily: "'Sora', sans-serif", fontWeight: 600 }}
            >
              AI-Driven Data{" "}
              <span className="text-[#752921]">Security</span>
            </h2>

            <p
              className="text-sm sm:text-base text-gray-500 leading-relaxed mb-6 text-justify"
              style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400 }}
            >
              Protect data from destruction, disclosure, or modification by
              unauthorized users—with encryption, masking, erasure, and
              resilience built in.
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#752921] text-white text-sm font-semibold rounded-md hover:bg-black transition-colors mb-8 sm:mb-10"
            >
              Learn More
              <ArrowRight size={16} />
            </Link>

            <ul className="space-y-4">
              {securityFeatures.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-0.5 w-6 h-6 rounded-full bg-[#e53e2d]/15 flex items-center justify-center">
                    <Check className="w-4 h-4 text-[#752921]" strokeWidth={2.5} />
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
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f0f0f] p-6 sm:p-8 min-h-[260px] sm:min-h-[320px] flex flex-col items-center justify-center">
                <img
                  src={SECURITY_IMG}
                  alt="Data Security"
                  className="w-full max-w-xs object-contain mb-6"
                />
                <div className="flex items-center gap-2 text-white/90">
                  <Cpu className="w-5 h-5 text-[#752921]" />
                  <span
                    className="text-sm tracking-wide"
                    style={{ fontFamily: "'Sora', sans-serif", fontWeight: 600 }}
                  >
                    Compucode Ltd
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ───────── SERVICE DETAIL ROWS ───────── */}
      {serviceSections.map((section, index) => (
        <section
          key={section.accent}
          className={`py-16 sm:py-20 md:py-24 px-4 sm:px-6 ${
            index % 2 === 0 ? "bg-white" : "bg-[#fafafa]"
          }`}
        >
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-10 items-center">

            <div className="md:col-span-5 flex justify-center">
              <img
                src={section.image}
                alt={`Data ${section.accent}`}
                className="w-full max-w-xs sm:max-w-md object-contain"
              />
            </div>

            <div className="md:col-span-7">
              <h3
                className="text-xl sm:text-2xl md:text-3xl text-gray-900 mb-5"
                style={{ fontFamily: "'Sora', sans-serif", fontWeight: 600 }}
              >
                Data <span className="text-[#752921]">{section.accent}</span>
              </h3>

              {section.paragraphs.map((para) => (
                <p
                  key={para.slice(0, 40)}
                  className="text-sm text-gray-500 leading-relaxed text-justify mb-5"
                  style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400 }}
                >
                  {para}
                </p>
              ))}

              <Link to="/contact" className={ctaClass}>
                Get Started Now
                <ArrowRight size={16} />
              </Link>
            </div>

          </div>
        </section>
      ))}

      {/* ───────── BOTTOM CTA ───────── */}
      {/* <section className="py-14 sm:py-16 md:py-20 px-4 sm:px-6 bg-[#111111]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 items-center">

          <h2
            className="text-2xl sm:text-3xl md:text-4xl text-white leading-tight"
            style={{ fontFamily: "'Sora', sans-serif", fontWeight: 600 }}
          >
            Learn how Compucode{" "}
            <span className="text-[#e53e2d]">completes</span> your tech stack.
          </h2>

          <div>
            <p
              className="text-sm text-gray-400 leading-relaxed mb-8"
              style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400 }}
            >
              Our AI-enhanced team delivers scalable, secure, integrated IT
              solutions—engineered for predictive scalability and an enterprise
              security mindset.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 border-2 border-[#e53e2d] text-[#e53e2d] font-bold text-xs sm:text-sm tracking-wide uppercase rounded-sm hover:bg-[#e53e2d] hover:text-white transition-colors duration-200"
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
  );
}