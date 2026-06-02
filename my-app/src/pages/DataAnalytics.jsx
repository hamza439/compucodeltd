
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Check,
  Code2,
  Cpu,
  Layers,
  Sparkles,
} from "lucide-react";
import InfrastructureUpgrade from "../components/InfrastructureUpgrade";
import Footer from "../components/Footer";

/* ─── Google Fonts injected once ─────────────────────────────────────────── */
if (typeof document !== "undefined" && !document.getElementById("app-dev-fonts")) {
  const link = document.createElement("link");
  link.id = "app-dev-fonts";
  link.rel = "stylesheet";
  link.href =
    "https://fonts.googleapis.com/css2?family=Sora:wght@600;700&family=DM+Sans:wght@400;500&display=swap";
  document.head.appendChild(link);
}

/* ─── Font helpers ────────────────────────────────────────────────────────── */
const HEADING = { fontFamily: "'Sora', sans-serif", fontWeight: 600 };
const BODY    = { fontFamily: "'DM Sans', sans-serif", fontWeight: 400 };

const HERO_BG = "https://www.compucodeltd.com/images/banners/body-bg.jpg";
const APP_IMG = "https://compucodeltd.com/images/blobs/analytics.png";

const ecosystemItems = [
  {
    icon: Code2,
    title: "Custom Application Development",
    text: "Build applications tailored to your business—powered by Generative AI for faster delivery and smarter features.",
  },
  {
    icon: Layers,
    title: "Configured Operations",
    text: "Applications execute only on specified operational instructions—delivering precise, accurate, and error-free process execution.",
  },
  {
    icon: Sparkles,
    title: "AI-Powered Innovation",
    text: "Embed Generative AI into your software stack to automate complex workflows and accelerate time to market.",
  },
];

const features = [
  "Precise, accurate, and error-free process execution",
  "Long-term efficiency and cost savings for routine jobs",
  "Application development aligned with business goals",
  "Scalable solutions built for enterprise security",
];

export default function ApplicationDevelop() {
  return (
    <div style={BODY} className="bg-white">
      {/* ── Hero ───────────────────────────────────────────────────────────── */}
      <section className="relative pt-16 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-top bg-no-repeat"
          style={{ backgroundImage: `url(${HERO_BG})` }}
        />
        <div className="absolute inset-0 bg-black/55" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 py-20 sm:py-24 md:py-32 text-center">
          <p
            className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-white/80 mb-4"
            style={BODY}
          >
            Our Solutions
          </p>
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl text-white mb-6"
            style={HEADING}
          >
            Data Analytics
          </h1>
          <p
            className="text-sm sm:text-base md:text-lg text-white/85 leading-relaxed   mb-5"
            style={BODY}
          >
          Data analytics helps you understand your customers and grow your business. Here at Compucode, we can help you discover, interprete and communicate meaningful patterns in data, in other for you to be able to apply it towards effective decision making. Consult us today, we are here to help you.
          </p>
           <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 bg-[#E84A3B] border-2 border-[#E84A3B] text-white font-bold text-xs sm:text-sm tracking-wide uppercase rounded-sm hover:bg-white hover:text-[#E84A3B] transition-all duration-200"
          >
            Get Started Now
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* ── Ecosystem grid ─────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-2xl sm:text-3xl md:text-4xl text-gray-900 mb-4"
            style={HEADING}
          >
            Built to Work With Your Ecosystem
          </h2>
          <p
            className="text-gray-500 text-sm sm:text-base leading-relaxed max-w-3xl mb-10 sm:mb-14"
            style={BODY}
          >
            Compucode application development connects your business initiatives
            with IT goals—delivering scalable, secure solutions powered by
            Generative AI across your technology stack.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12">
            {ecosystemItems.map(({ icon: Icon, title, text }) => (
              <div key={title}>
                <div className="mb-4 w-11 h-11 sm:w-12 sm:h-12 rounded-lg bg-[#e53e2d]/10 flex items-center justify-center">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#E84A3B]" strokeWidth={1.5} />
                </div>
                <h3
                  className="text-base sm:text-lg text-gray-900 mb-3"
                  style={HEADING}
                >
                  {title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed" style={BODY}>
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Feature split ──────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-[#fafafa]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Text side */}
          <div>
            <h2
              className="text-2xl sm:text-3xl md:text-4xl text-gray-900 mb-5 leading-tight"
              style={HEADING}
            >
             Data Analytics{" "}
              <span className="text-[#E84A3B]">Generative AI</span>
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-6" style={BODY}>
           Data analytics helps you understand your customers and grow your business. Here at Compucode, we can help you discover, interprete and communicate meaningful patterns in data, in other for you to be able to apply it towards effective decision making. Consult us today, we are here to help you.


            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#E84A3B] text-white text-xs sm:text-sm rounded-md hover:bg-black transition-colors mb-8 sm:mb-10"
              style={{ ...HEADING, fontWeight: 600 }}
            >
              Learn More
              <ArrowRight size={15} />
            </Link>

            <ul className="space-y-3 sm:space-y-4">
              {features.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-0.5 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#e53e2d]/15 flex items-center justify-center">
                    <Check className="w-3 h-3 sm:w-4 sm:h-4 text-[#E84A3B]" strokeWidth={2.5} />
                  </span>
                  <span className="text-xs sm:text-sm text-gray-700 leading-relaxed" style={BODY}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Image side */}
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
                  src={APP_IMG}
                  alt="Application development"
                  className="w-full max-w-[220px] sm:max-w-xs object-contain mb-5 sm:mb-6"
                />
                <div className="flex items-center gap-2 text-white/90">
                  <Cpu className="w-4 h-4 sm:w-5 sm:h-5 text-[#E84A3B]" />
                  <span
                    className="text-xs sm:text-sm tracking-wide"
                    style={{ ...HEADING, fontWeight: 600 }}
                  >
                    Compucode Ltd
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Main content ───────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-10 items-center">
          {/* Image */}
          <div className="md:col-span-5 flex justify-center">
            <img
              src={APP_IMG}
              alt="App Development"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md object-contain"
            />
          </div>
          {/* Text */}
          <div className="md:col-span-7">
            <p
              className="text-xs sm:text-sm text-gray-500 leading-relaxed text-justify mb-5 sm:mb-6"
              style={BODY}
            >
               Data analytics helps you understand your customers and grow your business. Here at Compucode, we can help you discover, interprete and communicate meaningful patterns in data, in other for you to be able to apply it towards effective decision making. Consult us today, we are here to help you.
            </p>
            <h3
              className="text-lg sm:text-xl md:text-2xl text-gray-900 leading-snug mb-6 sm:mb-8"
              style={HEADING}
            >
              Since the application system is made to execute only on specified
              and configured operational instructions, it results in giving a
              precise, accurate and error free process execution.
            </h3>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 border border-[#E84A3B] text-[#E84A3B] text-xs tracking-widest uppercase hover:bg-[#E84A3B] hover:text-white transition-colors duration-200"
              style={{ ...HEADING, fontWeight: 700 }}
            >
              Get Started Now
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ─────────────────────────────────────────────────────── */}
      {/* <section className="py-14 sm:py-16 md:py-20 px-4 sm:px-6 bg-[#111111]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 items-center">
          <h2
            className="text-2xl sm:text-3xl md:text-4xl text-white leading-tight"
            style={HEADING}
          >
            Learn how Compucode{" "}
            <span className="text-[#e53e2d]">completes</span> your tech stack.
          </h2>
          <div>
            <p
              className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-6 sm:mb-8"
              style={BODY}
            >
              Our AI-enhanced team delivers scalable, secure, integrated IT
              solutions—engineered for predictive scalability and an enterprise
              security mindset.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 border-2 border-[#e53e2d] text-[#e53e2d] text-xs sm:text-sm tracking-wide uppercase rounded-sm hover:bg-[#e53e2d] hover:text-white transition-colors duration-200"
              style={{ ...HEADING, fontWeight: 700 }}
            >
              Contact Us
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section> */}

      <InfrastructureUpgrade />
      <Footer />
    </div>
  );
}