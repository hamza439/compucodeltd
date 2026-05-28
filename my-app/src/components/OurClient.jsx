// import { useEffect, useRef } from "react";
// import firstbankLogo from "../images/firstbank.png";
// import fidelityLogo from "../images/fidelity.png";
// import faanLogo from "../images/FAAN_Logo.jpg";
// import mtnLogo from "../images/MTN (1).png";
// const clients = [
//   { name: "Access Bank",        href: "https://www.accessbankplc.com/",   src: "https://compucodeltd.com/images/new-partners/access.png" },
//   { name: "FSDH Merchant Bank", href: "https://fsdhgroup.com/",            src: "https://compucodeltd.com/images/new-partners/fsdh.png" },
//   { name: "BetKing",            href: "https://www.betking.com/",          src: "https://compucodeltd.com/images/new-partners/bet.png" },
//   { name: "Titan Trust Bank",   href: "https://www.titantrustbank.com/",   src: "https://compucodeltd.com/images/new-partners/titan.png" },
//   { name: "Lekki FreeZone",     href: "http://lekkizone.com.ng/",          src: "https://compucodeltd.com/images/new-partners/lekki.png" },
//   { name: "Keystone Bank",      href: "https://www.keystonebankng.com/",   src: "https://compucodeltd.com/images/new-partners/keystone.png" },
//   { name: "Zenith Bank",        href: "https://www.zenithbank.com/",       src: "https://compucodeltd.com/images/new-partners/zenith.png" },
//   { name: "First Bank",         href: "https://www.firstbanknigeria.com/", src: firstbankLogo },
//   { name: "Fidelity Bank",      href: "https://www.fidelitybank.ng/",      src: fidelityLogo },
//   { name: "FAAN",               href: "https://www.faannigeria.org/",      src: faanLogo },
//   { name: "MTN",                href: "https://www.mtn.com.ng/",           src: mtnLogo },
// ];

// const doubled = [...clients, ...clients];

// export default function OurClient() {
//   const trackRef  = useRef(null);
//   const animRef   = useRef(null);
//   const posRef    = useRef(0);
//   const pausedRef = useRef(false);

//   useEffect(() => {
//     const track = trackRef.current;
//     if (!track) return;

//     const speed = 0.6;

//     const step = () => {
//       if (!pausedRef.current) {
//         posRef.current += speed;
//         const half = track.scrollWidth / 2;
//         if (posRef.current >= half) posRef.current = 0;
//         track.style.transform = `translateX(-${posRef.current}px)`;
//       }
//       animRef.current = requestAnimationFrame(step);
//     };

//     animRef.current = requestAnimationFrame(step);
//     return () => cancelAnimationFrame(animRef.current);
//   }, []);

//   return (
//     <section className="bg-gray-50 py-10 px-6">
//       <div className="max-w-6xl mx-auto">

//         <h5 className="text-4xl font-bold text-gray-900 mb-8">
//           Our <span className="text-[#e53e2d]">Clients</span>
//         </h5>

//         <div
//           className="overflow-hidden"
//           onMouseEnter={() => (pausedRef.current = true)}
//           onMouseLeave={() => (pausedRef.current = false)}
//         >
//           <div
//             ref={trackRef}
//             className="flex items-center gap-14 will-change-transform"
//             style={{ width: "max-content" }}
//           >
//             {doubled.map(({ name, href, src }, i) => (
//               <a
//                 key={i}
//                 href={href}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex-shrink-0 brightness-0 opacity-60 hover:opacity-100 transition-all duration-300"
//               >
//                 <img
//                   src={src}
//                   alt={name}
//                   className="h-10 w-auto object-contain"
//                 />
//               </a>
//             ))}
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }
import { useEffect, useRef } from "react";
import firstbankLogo from "../images/firstbank.png";
import fidelityLogo from "../images/fidelity.png";
import faanLogo from "../images/FAAN_Logo.jpg";
import mtnLogo from "../images/MTN (1).png";

const clients = [
  { name: "Access Bank",        href: "https://www.accessbankplc.com/",   src: "https://compucodeltd.com/images/new-partners/access.png" },
  { name: "FSDH Merchant Bank", href: "https://fsdhgroup.com/",            src: "https://compucodeltd.com/images/new-partners/fsdh.png" },
  { name: "BetKing",            href: "https://www.betking.com/",          src: "https://compucodeltd.com/images/new-partners/bet.png" },
  { name: "Titan Trust Bank",   href: "https://www.titantrustbank.com/",   src: "https://compucodeltd.com/images/new-partners/titan.png" },
  { name: "Lekki FreeZone",     href: "http://lekkizone.com.ng/",          src: "https://compucodeltd.com/images/new-partners/lekki.png" },
  { name: "Keystone Bank",      href: "https://www.keystonebankng.com/",   src: "https://compucodeltd.com/images/new-partners/keystone.png" },
  { name: "Zenith Bank",        href: "https://www.zenithbank.com/",       src: "https://compucodeltd.com/images/new-partners/zenith.png" },
  { name: "First Bank",         href: "https://www.firstbanknigeria.com/", src: firstbankLogo },
  { name: "Fidelity Bank",      href: "https://www.fidelitybank.ng/",      src: fidelityLogo },
  { name: "FAAN",               href: "https://www.faannigeria.org/",      src: faanLogo },
  { name: "MTN",                href: "https://www.mtn.com.ng/",           src: mtnLogo },
];

const doubled = [...clients, ...clients];

export default function OurClient() {
  const trackRef  = useRef(null);
  const animRef   = useRef(null);
  const posRef    = useRef(0);
  const pausedRef = useRef(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const speed = 0.6;

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
  }, []);

  return (
    <section className="bg-gray-50 py-10 px-6">
      <div className="max-w-6xl mx-auto">

        <h5 className="text-4xl font-bold text-gray-900 mb-8">
          Our <span className="text-[#e53e2d]">Clients</span>
        </h5>

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
            {doubled.map(({ name, href, src }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                // className="flex-shrink-0 brightness-50   opacity-30 hover:opacity-100 transition-opacity duration-300"
                className="flex-shrink-0 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              >
                <img
                  src={src}
                  alt={name}
                  className="h-12 w-auto object-contain"
                />
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}