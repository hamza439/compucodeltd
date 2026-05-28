import React from 'react'

const competencies = [
  {
    emoji: "🏢",
    text: "We offer solutions and services tailored to suit your needs while connecting you to the world of dynamic innovation",
  },
  {
    emoji: "🔗",
    text: "We connect your business initiatives with your IT goals to transform your customer experience",
  },
  {
    emoji: "🤝",
    text: "We empower your success stories through dynamic innovation.",
  },
  {
    emoji: "💻",
    text: "We deliver IT innovative solutions that create a solid foundation to grow your business.",
  },
];

function Aboutuswho() {
  return (
    <div className="min-h-screen bg-white">

      {/* ── PAGE HEADER ── */}
      <div className="relative w-full">
        {/* blank top space for navbar */}
        <div className="h-16" />

        {/* styled bottom — red bar with title */}
        <div
          className="w-full py-20 flex items-center justify-center"
          style={{
            background: "linear-gradient(135deg, #1a0505 0%, #2d0a0a 50%, #1a0505 100%)",
          }}
        >
          {/* subtle grid pattern */}
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(rgba(229,62,45,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(229,62,45,0.4) 1px, transparent 1px)",
              backgroundSize: "50px 50px",
            }}
          />
          <div className="relative text-center">
            <p
              className="text-xs font-semibold tracking-widest uppercase mb-3"
              style={{ color: "rgba(229,62,45,0.8)" }}
            >
              Who We Are
            </p>
            <h1 className="text-5xl font-bold text-white" style={{ fontFamily: "Georgia, serif" }}>
              About Us
            </h1>
            {/* red underline accent */}
            <div
              className="mx-auto mt-4 rounded-full"
              style={{ width: "60px", height: "3px", background: "#e53e2d" }}
            />
          </div>
        </div>
      </div>

      {/* ── INTRO SECTION ── */}
      <div className="py-20 px-4" style={{ background: "#fafafa" }}>
        <div className="max-w-3xl mx-auto text-center">
          <p
            className="text-lg leading-relaxed"
            style={{ color: "#444", lineHeight: "1.9" }}
          >
            Compucode leverages an AI-driven unified technology platform to intelligently simplify IT.
            Our AI-powered, service-centric team delivers an integrated stack of applications, software,
            and system solutions, engineered for predictive scalability and a cognitive enterprise
            security mindset.
          </p>
        </div>
      </div>

      {/* ── CORE COMPETENCIES ── */}
      <div className="py-20 px-4" style={{ background: "#fff" }}>
        <div className="max-w-5xl mx-auto">

          {/* Section heading */}
          <div className="mb-12">
            <h3
              className="text-3xl font-bold"
              style={{ fontFamily: "Georgia, serif", color: "#111" }}
            >
              Core{" "}
              <span style={{ color: "#e53e2d" }}>Competencies</span>
            </h3>
            <div
              className="mt-3 rounded-full"
              style={{ width: "48px", height: "3px", background: "#e53e2d" }}
            />
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {competencies.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-5 p-6 rounded-2xl transition-all duration-300 group cursor-default"
                style={{
                  background: "#fafafa",
                  border: "1px solid rgba(0,0,0,0.07)",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = "rgba(229,62,45,0.35)";
                  e.currentTarget.style.transform = "translateY(-3px)";
                  e.currentTarget.style.boxShadow = "0 8px 32px rgba(229,62,45,0.1)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = "rgba(0,0,0,0.07)";
                  e.currentTarget.style.transform = "none";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {/* Icon box */}
                <div
                  className="flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center text-2xl"
                  style={{ background: "rgba(229,62,45,0.08)" }}
                >
                  {item.emoji}
                </div>

                {/* Text */}
                <p
                  className="text-sm leading-relaxed pt-1"
                  style={{ color: "#555", lineHeight: "1.8" }}
                >
                  {item.text}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>

    </div>
  );
}

export default Aboutuswho
