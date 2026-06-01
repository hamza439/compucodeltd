
import { useState, useEffect, useRef } from "react";

const cards = [
  {
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    title: "On Line 24/7 Global Configuration and Deployment",
    bullets: [
      "Enterprise Email Archive Suite",
      "Enterprise Archive Search & Discovery",
      "Cloud Archive eDiscovery Content Security",
      "Global Partners Network",
      "On Microsoft Exchange & Office 365",
    ],
  },
  {
    img: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&q=80",
    title: "Compliance Archiving eDiscovery DLP Protecting IP & PII",
    bullets: [
      "Case Management & Litigation Support",
      "Regulatory Compliance Module",
      "HIPAA Compliance Solution",
      "Compliance – Regulatory Overviews",
      "Supervisory Review Discovery",
    ],
  },
  {
    img: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80",
    title: "Cloud Storage Archiving eDiscovery & Backup",
    bullets: [
      "Comparable Value for Office 365",
      "Protecting PII in Files & OneDrive",
      "SharePoint Archive & Management",
      "Advanced eDiscovery for Google G-Suite",
    ],
  },
  {
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    title: "Process Automation with Generative AI",
    bullets: [
      "Automate complex workflows end-to-end",
      "Eliminate repetitive manual tasks",
      "Accelerate operations across business units",
      "AI-driven process optimization",
    ],
  },
  {
    img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80",
    title: "Application Development powered by AI",
    bullets: [
      "Smarter, faster custom applications",
      "Generative AI for intelligent features",
      "Accelerated delivery pipelines",
      "Business-tailored AI solutions",
    ],
  },
  {
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
    title: "AI-enhanced Data Archiving",
    bullets: [
      "Intelligent data storage solutions",
      "Auto-classify and compress data",
      "Smart retention policies",
      "AI-powered data lifecycle management",
    ],
  },
  {
    img: "https://images.unsplash.com/photo-1568992688065-536aad8a12f6?w=800&q=80",
    title: "Smart Document Archiving with AI",
    bullets: [
      "AI-driven document management",
      "Captures, indexes, and retrieves instantly",
      "Reduce manual filing and human error",
      "Critical document retrieval in seconds",
    ],
  },
  {
    img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
    title: "AI-driven Data Security, Migration & Integration",
    bullets: [
      "AI-enhanced threat detection",
      "Seamless migration pipelines",
      "Robust system integration frameworks",
      "Secure data assets end-to-end",
    ],
  },
  {
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    title: "Advanced Analytics with Generative AI",
    bullets: [
      "Transform raw data into insights",
      "AI-powered pattern recognition",
      "Actionable real-time predictions",
      "Surfaces trends your team can act on",
    ],
  },
  {
    img: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80",
    title: "AI-optimized Business Continuity",
    bullets: [
      "AI-monitored continuity plans",
      "Proactive risk detection",
      "Automated failover triggers",
      "Zero-disruption operations",
    ],
  },
  {
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    title: "Datacenter Transformation",
    bullets: [
      "AI-optimised datacenter strategies",
      "Cut costs and improve resilience",
      "Future-proof infrastructure",
      "Modern datacenter modernisation",
    ],
  },
  {
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
    title: "eDiscovery & Compliance Archiving",
    bullets: [
      "Scalable cloud infrastructure",
      "Enriched with AI capabilities",
      "Real-time insights and automation",
      "Intelligent cloud deployment",
    ],
  },
];

const CARDS_PER_SLIDE = 3;
const AUTO_INTERVAL = 4000;

function chunkArray(arr, size) {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
}

export default function SolutionsCarousel() {
  const slides = chunkArray(cards, CARDS_PER_SLIDE);
  const [current, setCurrent] = useState(0);
  const timerRef = useRef(null);

  const startTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length);
    }, AUTO_INTERVAL);
  };

  useEffect(() => {
    startTimer();
    return () => clearInterval(timerRef.current);
  }, [slides.length]);

  const goTo = (n) => {
    setCurrent((n + slides.length) % slides.length);
    startTimer();
  };

  // Touch
  const touchStartX = useRef(null);
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) goTo(current + (diff > 0 ? 1 : -1));
    touchStartX.current = null;
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@600;700&family=DM+Sans:wght@400;500&display=swap');

        .sol-section {
          font-family: 'DM Sans', sans-serif;
          background: #fff;
          padding: 30px 9px 45px;
          width: 100%;
        }

        .sol-inner {
          max-width: 1100px;
          margin: 0 auto;
        }

        .sol-header {
          text-align: center;
          margin-bottom: 32px;
        }

        .sol-h2 {
          font-family: 'Sora', sans-serif;
          font-size: clamp(1.3rem, 4vw, 2.4rem);
          font-weight: 700;
          margin: 0 0 10px;
        }

        .sol-sub {
          font-size: clamp(0.72rem, 1.5vw, 0.92rem);
          color: #6b7280;
          max-width: 520px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .sol-overflow {
          overflow: hidden;
          touch-action: pan-y;
        }

        .sol-track {
          display: flex;
          transition: transform 0.45s ease;
        }

        .sol-slide {
          min-width: 100%;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
        }

        .sol-card {
          display: flex;
          flex-direction: column;
          border: 1px solid #e5e7eb;
          background: #fff;
          overflow: hidden;
        }

        .sol-card-title-wrap {
          padding: 8px;
          text-align: center;
          border-bottom: 1px solid #f0f0f0;
          min-height: 42px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .sol-card-title {
          font-family: 'Sora', sans-serif;
          font-weight: 700;
          font-size: clamp(0.52rem, 1.1vw, 0.82rem);
          margin: 0;
        }

        .sol-img-wrap {
          aspect-ratio: 4/3;
          overflow: hidden;
        }

        .sol-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }

        .sol-card:hover .sol-img {
          transform: scale(1.05);
        }

        /* 🔥 FIXED BODY SPACING */
        .sol-body {
          padding: 6px 8px 6px;
          display: flex;
          flex-direction: column;
          flex: 1;
          gap: 4px;
        }

        .sol-list {
          margin: 0 0 4px;
          padding: 0;
          list-style: none;
          flex: 1;
        }

        .sol-list li {
          display: flex;
          gap: 4px;
          font-size: clamp(0.52rem, 1vw, 0.72rem);
          margin-bottom: 2px;
          color: #374151;
        }

        .sol-bullet {
          color: #e53e2d;
        }

        .sol-btn {
          margin-top: auto;
          padding: 6px 0;
          background: #8B2626;
          color: #fff;
          border: none;
          font-weight: 700;
          font-family: 'Sora', sans-serif;
          cursor: pointer;
        }

        .sol-btn:hover {
          background: #c0291b;
        }

        /* 📱 MOBILE FIX */
        @media (max-width: 640px) {
          .sol-body {
            padding: 5px 6px;
            gap: 3px;
          }

          .sol-list li {
            margin-bottom: 1px;
          }

          .sol-btn {
            font-size: 0.6rem;
            padding: 5px 0;
          }
        }
      `}</style>

      <section className="sol-section">
        <div className="sol-inner">
          <div className="sol-header">
            <h2 className="sol-h2">Our Solutions</h2>
            <p className="sol-sub">
              From AI-powered automation to enterprise infrastructure — every solution is built to connect your business goals with scalable, secure technology.
            </p>
          </div>

          <div
            className="sol-overflow"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="sol-track"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {slides.map((slide, si) => (
                <div key={si} className="sol-slide">
                  {slide.map((card, ci) => (
                    <div key={ci} className="sol-card">
                      <div className="sol-card-title-wrap">
                        <h3 className="sol-card-title">{card.title}</h3>
                      </div>

                      <div className="sol-img-wrap">
                        <img src={card.img} alt={card.title} className="sol-img" />
                      </div>

                      <div className="sol-body">
                        <ul className="sol-list">
                          {card.bullets.map((b, bi) => (
                            <li key={bi}>
                              <span className="sol-bullet">•</span> {b}
                            </li>
                          ))}
                        </ul>

                        <button className="sol-btn">READ MORE</button>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}