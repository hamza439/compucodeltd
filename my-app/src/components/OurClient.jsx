import { useEffect, useRef } from "react";

const logos = [
  { name: "Access Bank",        src: "https://compucodeltd.com/images/new-partners/access.png" },
  { name: "FSDH Merchant Bank", src: "https://compucodeltd.com/images/new-partners/fsdh.png" },
  { name: "BetKing",            src: "https://compucodeltd.com/images/new-partners/bet.png" },
  { name: "Lekki FreeZone",     src: "https://compucodeltd.com/images/new-partners/lekki.png" },
  { name: "Keystone Bank",      src: "https://compucodeltd.com/images/new-partners/keystone.png" },
  { name: "Zenith Bank",        src: "https://compucodeltd.com/images/new-partners/zenith.png" },
  { name: "Fidelity Bank",      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQziN52SNzHDv67V_eo8TjPv1IJjGlq0IuVDw&s" },
  { name: "MTN",                src: "https://upload.wikimedia.org/wikipedia/commons/9/93/New-mtn-logo.jpg" },
];

function MarqueeRow({ items, speed = 0.6 }) {
  const trackRef  = useRef(null);
  const animRef   = useRef(null);
  const posRef    = useRef(0);
  const pausedRef = useRef(false);

  const doubled = [...items, ...items];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const step = () => {
      if (!pausedRef.current) {
        posRef.current += speed;
        const half = track.scrollWidth / 2;
        if (posRef.current >= half) posRef.current = 0;
        track.style.transform = `translateX(-${posRef.current}px)`;
      }
      animRef.current = requestAnimationFrame(step);
    };

    animRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animRef.current);
  }, [speed]);

  return (
    <div
      className="overflow-hidden"
      onMouseEnter={() => (pausedRef.current = true)}
      onMouseLeave={() => (pausedRef.current = false)}
    >
      <div
        ref={trackRef}
        className="flex items-center gap-14 will-change-transform"
        style={{ width: "max-content" }}
      >
        {doubled.map(({ name, src }, i) => (
          <div key={i} className="flex-shrink-0 flex items-center justify-center">
            <img src={src} alt={name} className="h-16 w-auto object-contain" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function AwardsSection() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@600;700&family=DM+Sans:wght@400;500&display=swap');
      `}</style>

      <section className="bg-white py-14 px-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2
              className="text-gray-900 mb-3"
              style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: "clamp(1.4rem, 4vw, 2.2rem)" }}
            >
              Our clients
            </h2>
            <p
              className="text-gray-500 mx-auto"
              style={{ fontSize: "clamp(0.78rem, 1.5vw, 0.9rem)", maxWidth: "540px", lineHeight: 1.65 }}
            >
              MessageSolution's innovative and customer-focused engineering and
              support staff have made us a trusted partner of customers and
              channels around the world.
            </p>
          </div>

          {/* Single row with all logos */}
          <MarqueeRow items={logos} speed={0.6} />
        </div>
      </section>
    </>
  );
}