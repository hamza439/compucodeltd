import { useState, useEffect, useRef } from "react";

const badges = [
  {
    id: 0,
    title: "General Data Protection Regulation",
    desc: "We are fully GDPR compliant, ensuring your data is protected and managed in accordance with EU privacy laws and regulations.",
    img: "https://compucodeltd.com/images/blobs/gdpr-compliant.webp",
    alt: "GDPR Compliant",
    tag: "GDPR",
    tagColor: "#3b5fc0",
  },
  {
    id: 1,
    title: "Payment Card Industry Data Security Standard",
    desc: "Our platform meets PCI DSS standards, protecting cardholder data with strict security protocols and regular audits.",
    img: "https://compucodeltd.com/images/blobs/pci_dss.png",
    alt: "PCI DSS Compliant",
    tag: "PCI DSS",
    tagColor: "#1a7a4a",
  },
  {
    id: 2,
    title: "Nigeria Data Protection Regulation",
    desc: "We comply with the Nigeria Data Protection Commission standards, safeguarding personal data of Nigerian users and clients.",
    img: "https://compucodeltd.com/images/blobs/ndpr_compliant.png",
    alt: "NDPR Compliant",
    tag: "NDPR",
    tagColor: "#2e6b3e",
  },
  {
    id: 3,
    title: "Gramm-Leach-Bliley Act",
    desc: "We adhere to GLBA requirements, protecting consumers' private financial information held by financial institutions.",
    img: "https://compucodeltd.com/images/blobs/glba_compliant.png",
    alt: "GLBA Compliant",
    tag: "GLBA",
    tagColor: "#1b3f6e",
  },
];

const CARDS_PER_SLIDE = 3;
const AUTO_INTERVAL = 5000;

function chunkArray(arr, size) {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    const chunk = arr.slice(i, i + size);
    // Fill incomplete last chunk by repeating from beginning
    let j = 0;
    while (chunk.length < size) {
      chunk.push({ ...arr[j % arr.length], id: `fill-${i}-${j}` });
      j++;
    }
    result.push(chunk);
  }
  return result;
}

export default function ComplianceSection() {
  const slides = chunkArray(badges, CARDS_PER_SLIDE);
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
  }, []);

  const goTo = (n) => {
    setCurrent((n + slides.length) % slides.length);
    startTimer();
  };

  // swipe support
  const touchStartX = useRef(null);
  const handleTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; };
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

        .comp-section {
          background: #fff;
          padding: 24px 16px 32px;
          font-family: 'DM Sans', sans-serif;
        }
        .comp-inner { max-width: 900px; margin: 0 auto; }

        /* Header */
        .comp-header { text-align: center; margin-bottom: 30px; }
        .comp-h2 {
          font-family: 'Sora', sans-serif;
          font-weight: 700;
          font-size: clamp(1.1rem, 3vw, 1.5rem);
          color: #111;
          margin: 0;
        }

        /* Carousel */
        .comp-overflow { overflow: hidden; }
        .comp-track {
          display: flex;
          transition: transform 0.45s cubic-bezier(.4,0,.2,1);
          will-change: transform;
        }
        .comp-slide {
          min-width: 100%;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
          align-items: start;
          box-sizing: border-box;
        }
        @media (max-width: 640px) {
          .comp-slide { grid-template-columns: repeat(3, 1fr); gap: 10px; }
        }

        /* Card — exactly like image: title top, image middle, text bottom */
        .comp-card {
          display: flex;
          flex-direction: column;
          background: #fff;
          border: none;
        }

        /* Title on top — centered, bold */
        .comp-card-title {
          font-family: 'Sora', sans-serif;
          font-weight: 700;
          font-size: clamp(0.65rem, 1vw, 0.85rem);
          color: #111;
          text-align: center;
          line-height: 1.35;
          margin: 0 0 10px;
          min-height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Image — contained and smaller */
        .comp-img-wrap {
          width: 100%;
          height: 120px;
          overflow: hidden;
          flex-shrink: 0;
          margin-bottom: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .comp-img {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
          display: block;
        }

        /* Description */
        .comp-desc {
          font-size: clamp(0.65rem, 1vw, 0.8rem);
          color: #374151;
          line-height: 1.6;
          margin: 0;
        }

        /* Nav */
        .comp-nav {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          margin-top: 32px;
        }
        .comp-arrow {
          width: 32px; height: 32px;
          border-radius: 50%;
          border: 1.5px solid #d1d5db;
          background: none;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; color: #6b7280;
          transition: border-color 0.2s, color 0.2s;
        }
        .comp-arrow:hover { border-color: #e53e2d; color: #e53e2d; }
        .comp-dots { display: flex; gap: 6px; align-items: center; }
        .comp-dot {
          width: 7px; height: 7px;
          border-radius: 50%;
          border: none;
          background: #d1d5db;
          cursor: pointer; padding: 0;
          transition: background 0.25s, transform 0.25s;
        }
        .comp-dot.active { background: #e53e2d; transform: scale(1.35); }
      `}</style>

      <section className="comp-section">
        <div className="comp-inner">

          {/* Header */}
          <div className="comp-header">
            <h2 className="comp-h2">Compliance &amp; Security News</h2>
          </div>

          {/* Carousel */}
          <div
            className="comp-overflow"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="comp-track"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {slides.map((slide, si) => (
                <div key={si} className="comp-slide">
                  {slide.map((card) => (
                    <div key={card.id} className="comp-card">

                      {/* Title on top */}
                      <h3 className="comp-card-title">{card.title}</h3>

                      {/* Image */}
                      <div className="comp-img-wrap">
                        <img
                          src={card.img}
                          alt={card.alt}
                          className="comp-img"
                          loading="lazy"
                        />
                      </div>

                      {/* Description */}
                      <p className="comp-desc">{card.desc}</p>

                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Navigation dots + arrows */}
          <div className="comp-nav">
            <button className="comp-arrow" onClick={() => goTo(current - 1)} aria-label="Previous">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>

            <div className="comp-dots">
              {slides.map((_, i) => (
                <button
                  key={i}
                  className={`comp-dot${i === current ? " active" : ""}`}
                  onClick={() => goTo(i)}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>

            <button className="comp-arrow" onClick={() => goTo(current + 1)} aria-label="Next">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>

        </div>
      </section>
    </>
  );
}
