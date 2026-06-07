import React, { useState, useEffect } from "react";

const features = [
  {
    title: "AI Powered EDiscovery Solution",
    image: "/icon_ediscovery.png",
  },
  {
    title: "AI Powered Compliance Archiving And Content Preserve",
    image: "/icon_compliance.png",
  },
  {
    title: "Enterprise Knowledge Base Built With AI",
    image: "/icon_database.png",
  },
];

export default function HeroCards() {
  const [active, setActive] = useState(1);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(t);
  }, []);

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -12; // Max 12 deg
    const rotateY = ((x - centerX) / centerX) * 12;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.03, 1.03, 1.03)`;
    card.style.boxShadow = `${-rotateY * 1.5}px ${rotateX * 1.5 + 25}px 40px rgba(0,0,0,0.15)`;
  };

  const handleMouseLeave = (e) => {
    const card = e.currentTarget;
    card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    card.style.boxShadow = ``; // Reverts to CSS class shadow
  };

  return (
    <>
      <style>{`
        @keyframes cardRise {
          from { opacity: 0; transform: translateY(40px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        .hero-card-item {
          opacity: 0;
        }
        .mounted .hero-card-item {
          animation: cardRise 0.6s cubic-bezier(.22,.68,0,1.2) var(--delay) forwards;
        }
        .hero-card-hover {
          transition: transform 0.2s ease-out, box-shadow 0.2s ease-out, border-color 0.3s ease;
          transform-style: preserve-3d;
        }
        .hero-card-active {
          border-color: #E84A3B;
          box-shadow: 0 15px 35px rgba(232,74,59,0.15);
        }
        .arrow-icon-wrapper {
          transition: transform 0.3s ease;
        }
        .hero-card-hover:hover .arrow-icon-wrapper,
        .hero-card-active .arrow-icon-wrapper {
          transform: translateX(4px);
        }
      `}</style>

      <section className={`relative z-30 px-6 lg:px-14 py-16 bg-gray-50 font-sans ${mounted ? "mounted" : ""}`}>
        <div
          className="flex flex-col md:flex-row justify-center gap-6 items-stretch max-w-6xl mx-auto"
        >
          {features.map((feature, index) => {
            const isActive = active === index;
            return (
              <div
                key={index}
                onClick={() => setActive(index)}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                  minWidth: 0,
                  "--delay": `${0.75 + index * 0.12}s`,
                }}
                className={`w-full md:flex-1 hero-card-item hero-card-hover bg-white rounded-2xl flex flex-col cursor-pointer border-2 overflow-hidden
                  ${isActive ? "hero-card-active border-[#E84A3B]" : "border-gray-100"}`}
              >
                <div className="w-full h-44 relative overflow-hidden bg-gray-100 border-b border-gray-100">
                  <img src={feature.image} alt={feature.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                
                <div className="p-6 md:p-8 flex flex-col flex-1 justify-between">
                  <h3 className="text-[18px] font-bold text-gray-800 leading-snug mb-4">
                    {feature.title}
                  </h3>
                  
                  <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-100">
                    <span className="text-sm font-semibold text-[#E84A3B]">
                      Learn more
                    </span>
                    <div className="arrow-icon-wrapper flex items-center justify-center w-8 h-8 rounded-full bg-[#e53e2d15] text-[#E84A3B]">
                      <svg
                        className="w-4 h-4"
                        fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
