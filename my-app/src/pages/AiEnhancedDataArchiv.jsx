
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
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 bg-[#8B2626] border-2 border-[#8B2626] text-white font-bold text-xs sm:text-sm tracking-wide uppercase rounded-sm hover:bg-white hover:text-[#8B2626] transition-all duration-200"
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
                  <Icon className="w-7 h-7 text-[#8B2626]" strokeWidth={1.5} />
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
              <span className="text-[#8B2626]">Generative AI</span>
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
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#8B2626] text-white text-sm font-semibold rounded-md hover:bg-black transition-colors mb-8 sm:mb-10"
            >
              Learn More
              <ArrowRight size={16} />
            </Link>

            <ul className="space-y-4">
              {archiveFeatures.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-0.5 w-6 h-6 rounded-full bg-[#e53e2d]/15 flex items-center justify-center">
                    <Check className="w-4 h-4 text-[#8B2626]" strokeWidth={2.5} />
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
              <Database className="w-6 h-6 text-[#8B2626] flex-shrink-0" />
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
                  <Check className="w-5 h-5 text-[#8B2626] flex-shrink-0 mt-0.5" />
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
              <FileSearch className="w-6 h-6 text-[#8B2626] flex-shrink-0" />
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
                  <Check className="w-5 h-5 text-[#8B2626] flex-shrink-0 mt-0.5" />
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