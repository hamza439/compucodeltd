import { Link } from "react-router-dom";
import { ArrowRight, Star, Zap, Shield, Users, TrendingUp, Globe, Cpu, CheckCircle } from "lucide-react";
import InfrastructureUpgrade from "../components/InfrastructureUpgrade";
import Footer from "../components/Footer";

const HERO_BG = "https://www.compucodeltd.com/images/banners/body-bg.jpg";

const sections = [
  {
    img: "https://compucodeltd.com/images/blobs/connect.png",
    imgSide: "right",
    tag: "Who We Are",
    heading: "We Connect",
    headingHighlight: "Your Business to Innovation",
    desc: "We offer solutions and services tailored to suit your needs while connecting you to the world of dynamic innovation. Compucode bridges the gap between your business vision and cutting-edge technology.",
    points: [
      { icon: Globe, title: "Global Connectivity", text: "We link your business to world-class technology ecosystems and innovation networks." },
      { icon: TrendingUp, title: "Dynamic Innovation", text: "Our solutions evolve with your needs, keeping you ahead of the curve in a fast-changing industry." },
      { icon: CheckCircle, title: "Tailored Solutions", text: "Every solution is built around your unique business requirements—no off-the-shelf compromise." },
    ],
  },
  {
    img: "https://compucodeltd.com/images/blobs/business.png",
    imgSide: "left",
    tag: "What We Do",
    heading: "We Transform",
    headingHighlight: "Your Customer Experience",
    desc: "We connect your business initiatives with your IT goals to transform your customer experience. Our AI-powered platform delivers integrated solutions engineered for predictive scalability.",
    points: [
      { icon: Cpu, title: "AI-Powered Platform", text: "Leverage generative AI to automate workflows and accelerate time to market." },
      { icon: Shield, title: "Enterprise Security", text: "Built-in cognitive enterprise security mindset across every solution we deliver." },
      { icon: Star, title: "20+ Years Experience", text: "Real-world-tested solutions supporting millions of accounts for the industry's top firms." },
    ],
  },
  {
    img: "https://compucodeltd.com/images/blobs/partner.png",
    imgSide: "right",
    tag: "Our Culture",
    heading: "Building Better",
    headingHighlight: "Solutions Together",
    desc: "At Compucode, we foster a culture of commitment, partnerships and growth—holding ourselves to the same high standards our clients expect in a fast-changing industry.",
    points: [
      { icon: TrendingUp, title: "Partner for Smarter Growth", text: "We combine key principles and transform them into clear ideas—helping you grow smarter." },
      { icon: Shield, title: "Solutions Built Around You", text: "Our thinking centres on your goals, delivering scalable solutions without sacrificing personalisation." },
      { icon: Users, title: "Driving Client Success Together", text: "Through collaboration we ensure well-thought-out strategies and sustained long-term performance." },
    ],
  },
  {
    img: "https://compucodeltd.com/images/blobs/it.png",
    imgSide: "left",
    tag: "Our Delivery",
    heading: "We Deliver",
    headingHighlight: "IT Solutions That Grow With You",
    desc: "We deliver IT innovative solutions that create a solid foundation to grow your business. From application development to infrastructure management, our end-to-end approach ensures reliable, scalable outcomes.",
    points: [
      { icon: Zap, title: "Able to Move Fast", text: "With proven solutions at hand, we adapt, innovate, and customize at the client's pace." },
      { icon: TrendingUp, title: "Long-Term Efficiency", text: "Process automation for routine jobs delivers long-term cost savings and better efficiency." },
      { icon: Star, title: "Trusted, Long-Term Clients", text: "Our team provides stability, perspective and experience across all firm types and sizes." },
    ],
  },
];

// Font styles
const soraFont = { fontFamily: "'Sora', sans-serif", fontWeight: 600 };
const dmSansFont = { fontFamily: "'DM Sans', sans-serif", fontWeight: 400 };

export default function AboutUs() {
  return (
    <div style={dmSansFont} className="bg-white">

      {/* ── HERO ── */}
      <section className="relative pt-16 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-top bg-no-repeat"
          style={{ backgroundImage: `url(${HERO_BG})` }}
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 py-14 md:py-20 text-center">
          <p style={dmSansFont} className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-white/70 mb-3">
            Who We Are
          </p>
          <h1 style={soraFont} className="text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            About Us
          </h1>
          <p style={dmSansFont} className="text-sm md:text-base text-white/80 leading-relaxed max-w-2xl mx-auto mb-8">
            Compucode leverages an AI-driven unified technology platform to intelligently simplify IT.
            Our AI-powered, service-centric team delivers an integrated stack of applications, software,
            and system solutions, engineered for predictive scalability and a cognitive enterprise security mindset.
          </p>
          <Link
            to="/contact"
            style={dmSansFont}
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#6E221A] text-white font-bold text-sm tracking-wide uppercase rounded-sm hover:bg-[#6E221A] transition-colors duration-200"
          >
            Contact Us
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* ── 4 ALTERNATING SECTIONS ── */}
      {sections.map((sec, idx) => {
        const isImgRight = sec.imgSide === "right";
        const bg = idx % 2 === 0 ? "bg-white" : "bg-[#fafafa]";

        const TextBlock = (
          <div className="flex flex-col justify-center">
            <p style={dmSansFont} className="text-xs font-semibold text-[#752921] uppercase tracking-widest mb-2">
              {sec.tag}
            </p>
            <h2 style={soraFont} className="text-xl sm:text-2xl md:text-3xl text-gray-900 mb-1 leading-snug">
              {sec.heading}
            </h2>
            <h2 style={soraFont} className="text-xl sm:text-2xl md:text-3xl text-[#752921] mb-4 leading-snug">
              {sec.headingHighlight}
            </h2>
            <p style={dmSansFont} className="text-gray-500 text-sm leading-relaxed mb-6">
              {sec.desc}
            </p>
            <Link
              to="/contact"
              style={dmSansFont}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#6E221A] text-white text-sm font-semibold rounded-md hover:bg-[#162456] transition-colors mb-7 w-fit"
            >
              Contact Us
              <ArrowRight size={16} />
            </Link>
            <ul className="space-y-4">
              {sec.points.map(({ icon: Icon, title, text }) => (
                <li key={title} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[#e53e2d]/10 flex items-center justify-center mt-0.5">
                    <Icon className="w-4 h-4 text-[#6E221A]" strokeWidth={2} />
                  </div>
                  <div>
                    <p style={soraFont} className="text-sm text-gray-900 mb-0.5">{title}</p>
                    <p style={dmSansFont} className="text-xs text-gray-500 leading-relaxed">{text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        );

        const ImageBlock = (
          <div className="flex justify-center items-center">
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md rounded-2xl overflow-hidden bg-[#181818] p-6 sm:p-10 min-h-[260px] sm:min-h-[320px] flex items-center justify-center">
              <div
                className="absolute -inset-4 rounded-2xl opacity-25 blur-2xl"
                style={{ background: "linear-gradient(135deg, #e53e2d 0%, #0d1b4b 60%)" }}
              />
              <img
                src={sec.img}
                alt={sec.heading}
                className="relative w-full max-w-[200px] sm:max-w-xs object-contain drop-shadow-xl"
              />
            </div>
          </div>
        );

        return (
          <section key={idx} className={`py-14 md:py-20 px-4 sm:px-6 ${bg}`}>
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              {isImgRight ? (
                <>
                  {TextBlock}
                  {ImageBlock}
                </>
              ) : (
                <>
                  <div className="order-2 lg:order-1">{ImageBlock}</div>
                  <div className="order-1 lg:order-2">{TextBlock}</div>
                </>
              )}
            </div>
          </section>
        );
      })}

      {/* ── BOTTOM CTA ── */}
      <section className="py-14 md:py-20 px-4 sm:px-6 bg-[#f3e0e0]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">
          <h2 style={soraFont} className="text-2xl sm:text-3xl md:text-4xl text-white leading-tight">
            Learn how Compucode{" "}
            <span className="text-[#752921]">completes</span> your tech stack.
          </h2>
          <div>
            <p style={dmSansFont} className="text-black/60 text-sm leading-relaxed mb-6">
              Our AI-enhanced team delivers scalable, secure, integrated IT solutions—engineered
              for predictive scalability and an enterprise security mindset.
            </p>
            <Link
              to="/contact"
              style={dmSansFont}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#752921] text-black font-bold text-sm tracking-wide uppercase rounded-sm hover:bg-[#752921] transition-colors duration-200"
            >
              Contact Us
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <InfrastructureUpgrade />
      <Footer />
    </div>
  );
}