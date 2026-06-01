import { useState } from "react";

const features = [
  {
    title: "Intelligent\nAutomation",
    desc: "Automate mundane tasks and complex workflows with AI-driven precision, freeing up your team for strategic initiatives.",
    gradient: "from-red-400 to-orange-400",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" className="w-8 h-8">
        <rect x="4" y="6" width="16" height="12" rx="2" />
        <circle cx="9" cy="12" r="1.2" fill="white" stroke="none" />
        <circle cx="15" cy="12" r="1.2" fill="white" stroke="none" />
        <path d="M9 15.5c1 .8 5 .8 6 0" strokeLinecap="round" />
        <path d="M8 6V4M16 6V4" strokeLinecap="round" />
        <path d="M2 10h2M20 10h2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Enhanced\nEfficiency",
    desc: "Optimize operations, reduce costs, and accelerate project delivery through AI-powered insights and predictions.",
    gradient: "from-red-500 to-rose-400",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" className="w-8 h-8">
        <circle cx="12" cy="12" r="3" />
        <circle cx="19" cy="9" r="2" />
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3" strokeLinecap="round" />
        <path d="M5.6 5.6l2 2M16.4 16.4l2 2M5.6 18.4l2-2M16.4 7.6l2-2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Structured &\nData Archiving",
    desc: "Leverage AI to efficiently archive and retrieve both structured and unstructured data, ensuring compliance and easy access.",
    gradient: "from-orange-400 to-red-500",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" className="w-8 h-8">
        <ellipse cx="12" cy="8" rx="7" ry="3" />
        <path d="M5 8v4c0 1.66 3.13 3 7 3s7-1.34 7-3V8" />
        <path d="M5 12v4c0 1.66 3.13 3 7 3s7-1.34 7-3v-4" />
      </svg>
    ),
  },
];

export default function FeaturesSection() {
  const [active, setActive] = useState(1);

  return (
    <section className="py-16 px-4">
      {/* Heading */}
      <div className="text-center mb-3">
        <h2 className="text-3xl font-light text-gray-900">
          Unlocking Potential with{" "}
          <span className="font-bold text-red-500">Generative AI</span>
        </h2>
      </div>

      {/* Subtext */}
      <p className="text-center text-gray-400 text-sm max-w-2xl mx-auto mb-12 leading-relaxed">
        At Compucode, we are at the forefront of integrating Generative AI into
        our comprehensive IT solutions. By harnessing the power of advanced AI
        models, we enable your business to innovate faster and create
        unprecedented value.
      </p>

      {/* Cards — same width as image */}
      <div className="flex flex-col sm:flex-row justify-center items-stretch gap-4 max-w-3xl mx-auto">
        {features.map((feature, index) => {
          const isActive = active === index;
          return (
            <div
              key={index}
              onClick={() => setActive(index)}
              style={{
                border: isActive
                  ? "2px solid #e53e2d"
                  : "1px solid #e5e7eb",
                margin: "-0.5px",
              }}
              className={`bg-white flex-1 flex flex-col items-center text-center cursor-pointer transition-all duration-300 py-10 px-6 ${
                isActive ? "shadow-lg z-10 relative" : "hover:shadow-md"
              }`}
            >
              {/* Gradient Icon Box */}
              <div
                className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6`}
              >
                {feature.icon}
              </div>

              {/* Title — two lines like image */}
              <h3 className="text-sm font-bold text-gray-800 mb-4 leading-snug whitespace-pre-line">
                {feature.title}
              </h3>

              {/* Gap pushes desc + arrow to bottom */}
              <div className="flex-1" />

              {/* Description */}
              <p className="text-xs text-gray-400 leading-relaxed mb-6">
                {feature.desc}
              </p>

              {/* Arrow — plain like image */}
              <svg
                className={`w-5 h-5 ${
                  isActive ? "text-red-500" : "text-gray-400"
                }`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  d="M5 12h14M13 6l6 6-6 6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          );
        })}
      </div>
    </section>
  );
}