import { useEffect, useRef, useState } from "react";
import { ShieldCheck, Globe, Cpu } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Scalable & Secure Solutions",
    text: "Our AI-enhanced team delivers scalable, secure, and integrated IT solutions built for enterprise needs.",
    delay: "delay-[500ms]",
  },
  {
    icon: Globe,
    title: "Global Industry Expertise",
    text: "Gained in the global segment of the IT Industry, with a proven ability to deliver strategic industry solutions.",
    delay: "delay-[620ms]",
  },
  {
    icon: Cpu,
    title: "Cutting-Edge Generative AI",
    text: "Now with an added focus on cutting-edge Generative AI to drive innovation and efficiency across your operations.",
    delay: "delay-[740ms]",
  },
];

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

export default function AboutSection() {
  const [sectionRef, sectionVisible] = useInView(0.1);

  const animBase = "transition-all duration-500 ease-out";
  const hidden = "opacity-0";
  const shown = "opacity-100";

  return (
    <>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Sora:wght@600;700&family=DM+Sans:wght@400;500&display=swap');`}</style>

      <section
        ref={sectionRef}
        style={{ fontFamily: "'DM Sans', sans-serif" }}
        className="bg-white py-16 px-4 md:px-10"
      >
        <div className="max-w-6xl mx-auto border border-gray-200 rounded-2xl overflow-hidden">
          <div className="flex flex-col md:flex-row min-h-[480px]">

            {/* ── LEFT: Image with slide-in ── */}
            <div
              className={`md:w-[48%] relative min-h-[320px] md:min-h-0 overflow-hidden
                ${animBase} duration-700
                ${sectionVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}
              `}
            >
              <div
                className="absolute top-0 left-0 w-28 h-28 z-10 pointer-events-none opacity-40"
                style={{ backgroundImage: "radial-gradient(circle, #bbb 1px, transparent 1px)", backgroundSize: "8px 8px" }}
              />
              <img
                src="https://compucodeltd.com/images/blobs/CompucodeTeam.jpeg"
                alt="Compucode Team"
                className="w-full h-full object-cover absolute inset-0 transition-transform duration-700 ease-out hover:scale-105"
              />
              <div
                className="absolute bottom-0 right-0 w-28 h-28 z-10 pointer-events-none opacity-25"
                style={{ backgroundImage: "radial-gradient(circle, #bbb 1px, transparent 1px)", backgroundSize: "8px 8px" }}
              />
            </div>

            {/* ── RIGHT: Content ── */}
            <div className="md:w-[52%] py-12 px-8 md:px-12 flex flex-col justify-center bg-white relative overflow-hidden">

              {/* Hex watermark */}
              <div className="absolute bottom-2 right-4 opacity-[0.04] text-[180px] select-none pointer-events-none leading-none">⬡</div>

              {/* Badge */}
              <div className={`flex items-center gap-2 mb-4 ${animBase} delay-100 ${sectionVisible ? `${shown} translate-y-0` : `${hidden} translate-y-4`}`}>
                <div className="w-3 h-3 rounded-sm bg-[#752921]" />
                <span className="text-xs font-semibold tracking-widest text-gray-400 uppercase" style={{ fontFamily: "'Sora', sans-serif" }}>
                  About Us
                </span>
              </div>

              {/* Heading */}
              <h2
                className={`text-2xl md:text-3xl text-gray-900 leading-snug mb-4
                  ${animBase} delay-200
                  ${sectionVisible ? `${shown} translate-y-0` : `${hidden} translate-y-4`}`}
                style={{ fontFamily: "'Sora', sans-serif", fontWeight: 600 }}
              >
                Your Partner For<br />the Long Haul
              </h2>

              {/* Paragraph */}
              <p className={`text-gray-500 text-sm leading-relaxed mb-6 ${animBase} delay-300 ${sectionVisible ? `${shown} translate-y-0` : `${hidden} translate-y-4`}`}>
                Our AI-enhanced team boasts years of service-oriented expertise to deliver
                scalable, secure, integrated IT solutions. Gained in the global segment of
                the IT Industry, with a proven ability to deliver strategic industry
                solutions, now with an added focus on cutting-edge Generative AI.
              </p>

              {/* CTA Button */}
              <div className={`mb-8 ${animBase} delay-[400ms] ${sectionVisible ? `${shown} translate-y-0` : `${hidden} translate-y-4`}`}>
                <a
                  href="/contact"
                  className="group inline-flex items-center gap-2 border border-[#752921] text-[#752921] text-sm px-5 py-2.5 font-medium hover:bg-[#752921] hover:text-white transition-all duration-200"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  Learn More
                  <svg
                    className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>

              {/* Features */}
              <div className="flex flex-col gap-6">
                {features.map(({ icon: Icon, title, text, delay }) => (
                  <div
                    key={title}
                    className={`group flex items-start gap-4
                      ${animBase} ${delay}
                      ${sectionVisible ? `${shown} translate-y-0` : `${hidden} translate-y-4`}
                      hover:translate-x-1 cursor-default`}
                  >
                    <div className="flex-shrink-0 mt-0.5 transition-transform duration-200 group-hover:scale-110">
                      <Icon className="w-5 h-5 text-[#752921]" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4
                        className="text-sm text-gray-900 mb-1"
                        style={{ fontFamily: "'Sora', sans-serif", fontWeight: 600 }}
                      >
                        {title}
                      </h4>
                      <p className="text-xs text-gray-500 leading-relaxed">{text}</p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}