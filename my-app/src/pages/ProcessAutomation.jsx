
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Check,
  Cpu,
  GitBranch,
  Sparkles,
  Workflow,
} from "lucide-react";

import InfrastructureUpgrade from "../components/InfrastructureUpgrade";
import Footer from "../components/Footer";

const HERO_BG = "https://www.compucodeltd.com/images/banners/body-bg.jpg";
const TECH_IMG = "https://www.compucodeltd.com/images/blobs/tech.png";

const ecosystemItems = [
  {
    icon: Workflow,
    title: "Workflow Automation",
    text: "Automate routine jobs and complex workflows with AI-driven precision, freeing your team for strategic initiatives.",
  },
  {
    icon: GitBranch,
    title: "System Integrations",
    text: "Connect applications, data pipelines, and production environments so processes run seamlessly end to end.",
  },
  {
    icon: Sparkles,
    title: "Generative AI Operations",
    text: "Embed Generative AI into automation to boost performance, meet service levels, and shrink production footprints.",
  },
];

const features = [
  "Boost performance and meet application service levels",
  "Shrink production environments with smart automation",
  "Long-term efficiency and cost savings for routine jobs",
  "Application development aligned with business goals",
];

export default function ProcessAutomation() {
  return (
    <div className="font-['Inter',sans-serif] bg-white">

      {/* ───────── HERO ───────── */}
      <section className="relative pt-16 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-top bg-no-repeat"
          style={{ backgroundImage: `url(${HERO_BG})` }}
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 text-center">

          <p className="text-xs sm:text-sm dm-sans-medium-500 tracking-widest uppercase text-white/80 mb-4">
            Our Solutions
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl sora-semibold-600 text-white mb-6 leading-tight">
            Process Automation
          </h1>

          <p className="text-sm sm:text-base md:text-lg dm-sans-medium-500 text-white/85 leading-relaxed max-w-2xl mx-auto mb-10">
            In today&apos;s fast-growing economy, process automation is a long-term initiative for better efficiency and cost savings—helping you meet growing demand from existing and new customers.
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 bg-[#8B2626] border-2 border-[#8B2626] text-white font-bold text-xs sm:text-sm tracking-wide uppercase rounded-sm hover:bg-white hover:text-[#8B2626] transition-all duration-200"
          >
            Get Started Now
            <ArrowRight size={18} />
          </Link>

        </div>
      </section>

      {/* ───────── ECOSYSTEM ───────── */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-2xl sm:text-3xl md:text-4xl sora-semibold-600 text-gray-900 mb-4">
            Built to Work With Your Ecosystem
          </h2>

          <p className="text-sm sm:text-base dm-sans-medium-500 text-gray-500 leading-relaxed max-w-3xl mb-12 sm:mb-14">
            Compucode process automation connects your business initiatives with IT goals—delivering scalable, secure solutions powered by Generative AI.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {ecosystemItems.map(({ icon: Icon, title, text }) => (
              <div key={title} className="text-center sm:text-left">

                <div className="mb-4 w-12 h-12 mx-auto sm:mx-0 rounded-lg bg-[#e53e2d]/10 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-[#8B2626]" strokeWidth={1.5} />
                </div>

                <h3 className="text-base md:text-lg sora-semibold-600 text-gray-900 mb-3">
                  {title}
                </h3>

                <p className="text-sm dm-sans-medium-500 text-gray-500 leading-relaxed">
                  {text}
                </p>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ───────── FEATURES ───────── */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-[#fafafa]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">

          {/* TEXT SIDE */}
          <div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl sora-semibold-600 text-gray-900 mb-5 leading-tight">
              Process Automation with{" "}
              <span className="text-[#8B2626]">Generative AI</span>
            </h2>

            <p className="text-sm md:text-base dm-sans-medium-500 text-gray-500 leading-relaxed mb-6">
              Establishments have realised that automation is a long-term initiative for efficiency and cost savings.
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#8B2626] text-white text-sm font-semibold rounded-md hover:bg-black transition-colors mb-8"
            >
              Learn More
              <ArrowRight size={16} />
            </Link>

            <ul className="space-y-4">
              {features.map((item) => (
                <li key={item} className="flex items-start gap-3">

                  <span className="flex-shrink-0 mt-0.5 w-6 h-6 rounded-full bg-[#e53e2d]/15 flex items-center justify-center">
                    <Check className="w-4 h-4 text-[#8B2626]" />
                  </span>

                  <span className="text-sm dm-sans-medium-500 text-gray-700 leading-relaxed">
                    {item}
                  </span>

                </li>
              ))}
            </ul>

          </div>

          {/* IMAGE SIDE */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md">

              <div
                className="absolute -inset-4 rounded-2xl opacity-20 blur-2xl"
                style={{
                  background:
                    "linear-gradient(135deg, #e53e2d 0%, #7c3aed 50%, #14b8a6 100%)",
                }}
              />

              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f0f0f] p-6 sm:p-8 min-h-[300px] flex flex-col items-center justify-center">

                <img
                  src={TECH_IMG}
                  alt="Process automation infrastructure"
                  className="w-full max-w-xs object-contain mb-6"
                />

                <div className="flex items-center gap-2 text-white/90">
                  <Cpu className="w-5 h-5 text-[#8B2626]" />
                  <span className="text-sm sora-semibold-600 tracking-wide">
                    Compucode Ltd
                  </span>
                </div>

              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ───────── EXTRA COMPONENTS ───────── */}
      <InfrastructureUpgrade />
      <Footer />

    </div>
  );
}