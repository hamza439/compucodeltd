// import { Link } from "react-router-dom";

// export default function HeroSection() {
//   return (
//     <>
//       <style>{`
//         @import url('src/imgaes/slider-06.jpg');

//         .cc-hero {
//           position: relative;
//           width: 100%;
//           min-height: 100vh;
//           display: flex;
//           align-items: center;
//           background-size: cover;
//           background-position: center;
//           overflow: hidden;
//           font-family: 'Inter', sans-serif;
//         }

//         .cc-hero-overlay {
//           position: absolute;
//           inset: 0;
//           background: rgba(0, 0, 0, 0.55);
//           z-index: 0;
//         }

//         .cc-hero-inner {
//           position: relative;
//           z-index: 1;
//           max-width: 1280px;
//           margin: 0 auto;
//           padding: 68px 48px 48px;
//           width: 100%;
//           display: grid;
//           grid-template-columns: 1fr 1fr;
//           gap: 60px;
//           align-items: center;
//         }

//         /* ── LEFT ── */
//         .cc-hero-left {
//           display: flex;
//           flex-direction: column;
//           align-items: flex-start;
//           animation: fadeLeft 0.8s ease both;
//         }

//         .cc-hero-h3 {
//           font-size: clamp(1.8rem, 3.5vw, 2.8rem);
//           font-weight: 700;
//           line-height: 1.25;
//           color: #ffffff;
//           margin: 0 0 32px;
//           letter-spacing: -0.01em;
//           text-shadow: 0 2px 12px rgba(0,0,0,0.4);
//         }

//         .cc-btn-primary {
//           display: inline-flex;
//           align-items: center;
//           gap: 8px;
//           padding: 14px 28px;
//           background: #e53e2d;
//           color: #fff;
//           border: none;
//           border-radius: 4px;
//           font-size: 13px;
//           font-weight: 700;
//           letter-spacing: 0.06em;
//           text-transform: uppercase;
//           cursor: pointer;
//           text-decoration: none;
//           transition: all 0.22s;
//           box-shadow: 0 4px 20px rgba(229,62,45,0.5);
//         }
//         .cc-btn-primary:hover {
//           background: #c0392b;
//           transform: translateY(-2px);
//           box-shadow: 0 8px 28px rgba(229,62,45,0.6);
//         }

//         /* ── RIGHT ── */
//         .cc-hero-right {
//           position: relative;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           animation: fadeRight 0.8s 0.15s ease both;
//         }

//         .cc-hero-img-wrap {
//           position: relative;
//           width: 100%;
//           max-width: 500px;
//           border-radius: 16px;
//           overflow: visible;
//         }
//         .cc-hero-img-wrap img {
//           width: 100%;
//           height: 400px;
//           object-fit: cover;
//           display: block;
//           border-radius: 16px;
//           box-shadow: 0 24px 80px rgba(0,0,0,0.5);
//         }

//         /* Floating card — top left */
//         .cc-float-top {
//           position: absolute;
//           top: -18px;
//           left: -32px;
//           background: rgba(255,255,255,0.96);
//           border-radius: 12px;
//           padding: 14px 18px;
//           box-shadow: 0 8px 32px rgba(0,0,0,0.2);
//           min-width: 190px;
//           z-index: 3;
//         }
//         .cc-float-top .ft-label {
//           font-size: 11px;
//           color: #999;
//           font-weight: 600;
//           text-transform: uppercase;
//           letter-spacing: 0.08em;
//           margin-bottom: 8px;
//         }
//         .cc-float-top .ft-row {
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//           background: #f7f7f7;
//           border-radius: 6px;
//           padding: 7px 10px;
//           margin-bottom: 5px;
//         }
//         .cc-float-top .ft-row:last-child { margin-bottom: 0; }
//         .cc-float-top .ft-key { font-size: 11px; color: #777; font-weight: 500; }
//         .cc-float-top .ft-val { font-size: 12px; font-weight: 700; color: #111; }

//         /* Floating card — bottom right */
//         .cc-float-bot {
//           position: absolute;
//           bottom: -18px;
//           right: -32px;
//           background: rgba(255,255,255,0.96);
//           border-radius: 12px;
//           padding: 16px 20px;
//           box-shadow: 0 8px 32px rgba(0,0,0,0.2);
//           min-width: 180px;
//           z-index: 3;
//         }
//         .cc-float-bot .fb-title {
//           font-size: 11px;
//           color: #777;
//           font-weight: 600;
//           text-transform: uppercase;
//           letter-spacing: 0.08em;
//           margin-bottom: 10px;
//         }
//         .cc-float-bot .fb-pill {
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//           background: #e53e2d;
//           border-radius: 8px;
//           padding: 10px 14px;
//         }
//         .cc-float-bot .fb-sym { font-size: 12px; color: rgba(255,255,255,0.8); font-weight: 600; }
//         .cc-float-bot .fb-val { font-size: 16px; font-weight: 800; color: #fff; }

//         /* Animations */
//         @keyframes fadeLeft {
//           from { opacity: 0; transform: translateX(-30px); }
//           to   { opacity: 1; transform: translateX(0); }
//         }
//         @keyframes fadeRight {
//           from { opacity: 0; transform: translateX(30px); }
//           to   { opacity: 1; transform: translateX(0); }
//         }

//         /* ── TABLET (max 1024px) ── */
//         @media (max-width: 1024px) {
//           .cc-hero-inner {
//             gap: 32px;
//             padding: 80px 32px 48px;
//           }
//           .cc-hero-img-wrap img { height: 320px; }
//           .cc-float-top { left: -10px; min-width: 160px; padding: 10px 12px; }
//           .cc-float-bot { right: -10px; min-width: 150px; padding: 10px 12px; }
//         }

//         /* ── MOBILE (max 768px) ── */
//         @media (max-width: 768px) {
//           .cc-hero {
//             min-height: 100svh;
//             align-items: flex-start;
//           }
//           .cc-hero-inner {
//             grid-template-columns: 1fr;
//             padding: 88px 20px 52px;
//             gap: 32px;
//           }

//           /* LEFT */
//           .cc-hero-left { align-items: flex-start; }
//           .cc-hero-h3 {
//             font-size: clamp(1.5rem, 6vw, 2rem);
//             margin-bottom: 24px;
//           }
//           .cc-btn-primary {
//             font-size: 11px;
//             padding: 12px 18px;
//             letter-spacing: 0.04em;
//           }

//           /* RIGHT — show but compact */
//           .cc-hero-right { justify-content: center; }
//           .cc-hero-img-wrap { max-width: 100%; }
//           .cc-hero-img-wrap img {
//             height: 220px;
//             border-radius: 12px;
//           }

//           /* Floating cards — inside image on mobile */
//           .cc-float-top {
//             top: 10px;
//             left: 10px;
//             min-width: 140px;
//             padding: 8px 10px;
//           }
//           .cc-float-top .ft-label { font-size: 9px; margin-bottom: 5px; }
//           .cc-float-top .ft-key,
//           .cc-float-top .ft-val  { font-size: 10px; }
//           .cc-float-top .ft-row  { padding: 5px 8px; }

//           .cc-float-bot {
//             bottom: 10px;
//             right: 10px;
//             min-width: 120px;
//             padding: 8px 10px;
//           }
//           .cc-float-bot .fb-title { font-size: 9px; margin-bottom: 5px; }
//           .cc-float-bot .fb-val   { font-size: 13px; }
//           .cc-float-bot .fb-pill  { padding: 7px 10px; }
//         }

//         /* ── SMALL PHONES (max 400px) ── */
//         @media (max-width: 400px) {
//           .cc-hero-inner { padding: 80px 14px 40px; }
//           .cc-hero-h3 { font-size: 1.4rem; }
//           .cc-btn-primary { width: 100%; justify-content: center; }
//           .cc-float-top, .cc-float-bot { display: none; }
//         }
//       `}</style>

//       <section className="cc-hero">
//         <div className="cc-hero-overlay" />

//         <div className="cc-hero-inner">

//           {/* ── LEFT ── */}
//           <div className="cc-hero-left">
//             <h3 className="cc-hero-h3">
//               Unified array of data solutions <br />
//               powered by Generative AI
//             </h3>
//             <Link to="/solutions/data-archiving" className="cc-btn-primary">
//               Explore Generative AI Data Archiving Solutions
//             </Link>
//           </div>

//           {/* ── RIGHT ── */}
//           <div className="cc-hero-right">

//             <div className="cc-float-top">
//               <div className="ft-label">AI Archiving Stats</div>
//               <div className="ft-row">
//                 <span className="ft-key">Records/day</span>
//                 <span className="ft-val">2.4M</span>
//               </div>
//               <div className="ft-row">
//                 <span className="ft-key">Accuracy</span>
//                 <span className="ft-val">99.97%</span>
//               </div>
//               <div className="ft-row">
//                 <span className="ft-key">Compliance</span>
//                 <span className="ft-val">GDPR ✓</span>
//               </div>
//             </div>

//             <div className="cc-hero-img-wrap">
//               <img
//                 src="https://compucodeltd.com/images/banners/slider-06.jpg"
//                 alt="IT Professional working"
//               />
//             </div>

//             <div className="cc-float-bot">
//               <div className="fb-title">Uptime Guarantee</div>
//               <div className="fb-pill">
//                 <span className="fb-sym">SLA</span>
//                 <span className="fb-val">99.9%</span>
//               </div>
//             </div>

//           </div>
//         </div>
//       </section>
//     </>
//   );
// }
// import { Link } from "react-router-dom";

// export default function HeroSection() {
//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

//         .cc-hero {
//           position: relative;
//           width: 100%;
//           min-height: 100vh;
//           display: flex;
//           align-items: center;
//           background: #dfe4f0;
//           overflow: hidden;
//           font-family: 'Inter', sans-serif;
//         }

//         .cc-hero-inner {
//           position: relative;
//           z-index: 1;
//           max-width: 1280px;
//           margin: 0 auto;
//           padding: 100px 48px 64px;
//           width: 100%;
//           display: grid;
//           grid-template-columns: 1fr 1fr;
//           gap: 60px;
//           align-items: center;
//         }

//         /* ── LEFT ── */
//         .cc-hero-left {
//           display: flex;
//           flex-direction: column;
//           align-items: flex-start;
//           animation: fadeLeft 0.8s ease both;
//         }

//         .cc-hero-h3 {
//           font-size: clamp(2rem, 3.8vw, 3.2rem);
//           font-weight: 800;
//           line-height: 1.2;
//           color: #111827;
//           margin: 0 0 36px;
//           letter-spacing: -0.02em;
//         }

//         .cc-hero-h3 span {
//           color: #e53e2d;
//         }

//         .cc-btn-primary {
//           display: inline-flex;
//           align-items: center;
//           gap: 8px;
//           padding: 15px 30px;
//           background: #e53e2d;
//           color: #fff;
//           border: none;
//           border-radius: 4px;
//           font-size: 13px;
//           font-weight: 700;
//           letter-spacing: 0.06em;
//           text-transform: uppercase;
//           cursor: pointer;
//           text-decoration: none;
//           transition: all 0.22s;
//           box-shadow: 0 4px 20px rgba(229,62,45,0.35);
//         }
//         .cc-btn-primary:hover {
//           background: #c0392b;
//           transform: translateY(-2px);
//           box-shadow: 0 8px 28px rgba(229,62,45,0.5);
//         }

//         /* ── RIGHT ── */
//         .cc-hero-right {
//           position: relative;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           animation: fadeRight 0.8s 0.15s ease both;
//         }

//         .cc-hero-img-wrap {
//           position: relative;
//           width: 100%;
//           max-width: 540px;
//           border-radius: 20px;
//           overflow: visible;
//         }
//         .cc-hero-img-wrap img {
//           width: 100%;
//           height: 460px;
//           object-fit: cover;
//           display: block;
//           border-radius: 20px;
//           box-shadow: 0 32px 80px rgba(0,0,0,0.18);
//         }

//         /* Floating card — top left */
//         .cc-float-top {
//           position: absolute;
//           top: -18px;
//           left: -32px;
//           background: rgba(255,255,255,0.97);
//           border-radius: 14px;
//           padding: 14px 18px;
//           box-shadow: 0 8px 32px rgba(0,0,0,0.12);
//           min-width: 190px;
//           z-index: 3;
//         }
//         .cc-float-top .ft-label {
//           font-size: 11px;
//           color: #999;
//           font-weight: 600;
//           text-transform: uppercase;
//           letter-spacing: 0.08em;
//           margin-bottom: 8px;
//         }
//         .cc-float-top .ft-row {
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//           background: #f5f7fb;
//           border-radius: 6px;
//           padding: 7px 10px;
//           margin-bottom: 5px;
//         }
//         .cc-float-top .ft-row:last-child { margin-bottom: 0; }
//         .cc-float-top .ft-key { font-size: 11px; color: #777; font-weight: 500; }
//         .cc-float-top .ft-val { font-size: 12px; font-weight: 700; color: #111; }

//         /* Floating card — bottom right */
//         .cc-float-bot {
//           position: absolute;
//           bottom: -18px;
//           right: -32px;
//           background: rgba(255,255,255,0.97);
//           border-radius: 14px;
//           padding: 16px 20px;
//           box-shadow: 0 8px 32px rgba(0,0,0,0.12);
//           min-width: 180px;
//           z-index: 3;
//         }
//         .cc-float-bot .fb-title {
//           font-size: 11px;
//           color: #777;
//           font-weight: 600;
//           text-transform: uppercase;
//           letter-spacing: 0.08em;
//           margin-bottom: 10px;
//         }
//         .cc-float-bot .fb-pill {
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//           background: #e53e2d;
//           border-radius: 8px;
//           padding: 10px 14px;
//         }
//         .cc-float-bot .fb-sym { font-size: 12px; color: rgba(255,255,255,0.8); font-weight: 600; }
//         .cc-float-bot .fb-val { font-size: 16px; font-weight: 800; color: #fff; }

//         /* Animations */
//         @keyframes fadeLeft {
//           from { opacity: 0; transform: translateX(-30px); }
//           to   { opacity: 1; transform: translateX(0); }
//         }
//         @keyframes fadeRight {
//           from { opacity: 0; transform: translateX(30px); }
//           to   { opacity: 1; transform: translateX(0); }
//         }

//         /* ── TABLET (max 1024px) ── */
//         @media (max-width: 1024px) {
//           .cc-hero-inner {
//             gap: 32px;
//             padding: 100px 32px 64px;
//           }
//           .cc-hero-img-wrap img { height: 380px; }
//           .cc-float-top { left: -10px; min-width: 160px; padding: 10px 12px; }
//           .cc-float-bot { right: -10px; min-width: 150px; padding: 10px 12px; }
//         }

//         /* ── MOBILE (max 768px) ── */
//         @media (max-width: 768px) {
//           .cc-hero {
//             min-height: 100svh;
//             align-items: flex-start;
//           }
//           .cc-hero-inner {
//             grid-template-columns: 1fr;
//             padding: 100px 20px 52px;
//             gap: 36px;
//           }

//           /* Text first, image below */
//           .cc-hero-left { order: 1; align-items: flex-start; }
//           .cc-hero-right { order: 2; justify-content: center; }

//           .cc-hero-h3 {
//             font-size: clamp(1.6rem, 6.5vw, 2.2rem);
//             margin-bottom: 24px;
//           }
//           .cc-btn-primary {
//             font-size: 11px;
//             padding: 12px 18px;
//           }

//           /* Bigger image on mobile */
//           .cc-hero-img-wrap { max-width: 100%; }
//           .cc-hero-img-wrap img {
//             height: 300px;
//             border-radius: 14px;
//           }

//           .cc-float-top {
//             top: 10px;
//             left: 10px;
//             min-width: 145px;
//             padding: 9px 11px;
//           }
//           .cc-float-top .ft-label { font-size: 9px; margin-bottom: 5px; }
//           .cc-float-top .ft-key,
//           .cc-float-top .ft-val  { font-size: 10px; }
//           .cc-float-top .ft-row  { padding: 5px 8px; }

//           .cc-float-bot {
//             bottom: 10px;
//             right: 10px;
//             min-width: 125px;
//             padding: 9px 11px;
//           }
//           .cc-float-bot .fb-title { font-size: 9px; margin-bottom: 5px; }
//           .cc-float-bot .fb-val   { font-size: 13px; }
//           .cc-float-bot .fb-pill  { padding: 7px 10px; }
//         }

//         /* ── SMALL PHONES (max 400px) ── */
//         @media (max-width: 400px) {
//           .cc-hero-inner { padding: 88px 14px 40px; }
//           .cc-hero-h3 { font-size: 1.45rem; }
//           .cc-btn-primary { width: 100%; justify-content: center; }
//           .cc-float-top, .cc-float-bot { display: none; }
//         }
//       `}</style>

//       <section className="cc-hero">
//         <div className="cc-hero-inner">

//           {/* ── LEFT ── */}
//           <div className="cc-hero-left">
//             <h3 className="cc-hero-h3">
//               Unified array of data solutions <br />
//               powered by <span>Generative AI</span>
//             </h3>
//             <Link to="/solutions/data-archiving" className="cc-btn-primary">
//               Explore Generative AI Data Archiving Solutions
//             </Link>
//           </div>

//           {/* ── RIGHT ── */}
//           <div className="cc-hero-right">

//             <div className="cc-float-top">
//               <div className="ft-label">AI Archiving Stats</div>
//               <div className="ft-row">
//                 <span className="ft-key">Records/day</span>
//                 <span className="ft-val">2.4M</span>
//               </div>
//               <div className="ft-row">
//                 <span className="ft-key">Accuracy</span>
//                 <span className="ft-val">99.97%</span>
//               </div>
//               <div className="ft-row">
//                 <span className="ft-key">Compliance</span>
//                 <span className="ft-val">GDPR ✓</span>
//               </div>
//             </div>

//             <div className="cc-hero-img-wrap">
//               <img
//                 src="https://compucodeltd.com/images/banners/slider-06.jpg"
//                 alt="IT Professional working"
//               />
//             </div>

//             <div className="cc-float-bot">
//               <div className="fb-title">Uptime Guarantee</div>
//               <div className="fb-pill">
//                 <span className="fb-sym">SLA</span>
//                 <span className="fb-val">99.9%</span>
//               </div>
//             </div>

//           </div>
//         </div>
//       </section>
//     </>
//   );
// }
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

        .cc-hero {
          position: relative;
          width: 100%;
          min-height: 100vh;
          display: flex;
          align-items: center;
          background: #dfe4f0;
          overflow: hidden;
          font-family: 'Inter', sans-serif;
        }

        .cc-hero-inner {
          position: relative;
          z-index: 1;
          max-width: 1280px;
          margin: 0 auto;
          padding: 100px 48px 64px;
          width: 100%;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        /* ── LEFT ── */
        .cc-hero-left {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          animation: fadeLeft 0.8s ease both;
        }

        .cc-hero-h3 {
          font-size: clamp(2rem, 3.8vw, 3.2rem);
          font-weight: 800;
          line-height: 1.2;
          color: #111827;
          margin: 0 0 36px;
          letter-spacing: -0.02em;
        }

        .cc-hero-h3 span {
          color: #e53e2d;
        }

        .cc-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 15px 30px;
          background: #e53e2d;
          color: #fff;
          border: none;
          border-radius: 4px;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          cursor: pointer;
          text-decoration: none;
          transition: all 0.22s;
          box-shadow: 0 4px 20px rgba(229,62,45,0.35);
        }
        .cc-btn-primary:hover {
          background: #c0392b;
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(229,62,45,0.5);
        }

        /* ── RIGHT ── */
        .cc-hero-right {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: fadeRight 0.8s 0.15s ease both;
        }

        .cc-hero-img-wrap {
          position: relative;
          width: 100%;
          max-width: 540px;
          border-radius: 20px;
          overflow: visible;
        }
        .cc-hero-img-wrap img {
          width: 100%;
          height: 460px;
          object-fit: cover;
          display: block;
          border-radius: 20px;
          box-shadow: 0 32px 80px rgba(0,0,0,0.18);
        }

        /* Floating card — top left */
        .cc-float-top {
          position: absolute;
          top: -18px;
          left: -32px;
          background: rgba(255,255,255,0.97);
          border-radius: 14px;
          padding: 14px 18px;
          box-shadow: 0 8px 32px rgba(0,0,0,0.12);
          min-width: 190px;
          z-index: 3;
        }
        .cc-float-top .ft-label {
          font-size: 11px;
          color: #999;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-bottom: 8px;
        }
        .cc-float-top .ft-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: #f5f7fb;
          border-radius: 6px;
          padding: 7px 10px;
          margin-bottom: 5px;
        }
        .cc-float-top .ft-row:last-child { margin-bottom: 0; }
        .cc-float-top .ft-key { font-size: 11px; color: #777; font-weight: 500; }
        .cc-float-top .ft-val { font-size: 12px; font-weight: 700; color: #111; }

        /* Floating card — bottom right */
        .cc-float-bot {
          position: absolute;
          bottom: -18px;
          right: -32px;
          background: rgba(255,255,255,0.97);
          border-radius: 14px;
          padding: 16px 20px;
          box-shadow: 0 8px 32px rgba(0,0,0,0.12);
          min-width: 180px;
          z-index: 3;
        }
        .cc-float-bot .fb-title {
          font-size: 11px;
          color: #777;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-bottom: 10px;
        }
        .cc-float-bot .fb-pill {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: #e53e2d;
          border-radius: 8px;
          padding: 10px 14px;
        }
        .cc-float-bot .fb-sym { font-size: 12px; color: rgba(255,255,255,0.8); font-weight: 600; }
        .cc-float-bot .fb-val { font-size: 16px; font-weight: 800; color: #fff; }

        /* Animations */
        @keyframes fadeLeft {
          from { opacity: 0; transform: translateX(-30px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeRight {
          from { opacity: 0; transform: translateX(30px); }
          to   { opacity: 1; transform: translateX(0); }
        }

        /* ── TABLET (max 1024px) ── */
        @media (max-width: 1024px) {
          .cc-hero-inner {
            gap: 32px;
            padding: 100px 32px 64px;
          }
          .cc-hero-img-wrap img { height: 380px; }
          .cc-float-top { left: -10px; min-width: 160px; padding: 10px 12px; }
          .cc-float-bot { right: -10px; min-width: 150px; padding: 10px 12px; }
        }

        /* ── MOBILE (max 768px) ── */
        @media (max-width: 768px) {
          .cc-hero {
            min-height: unset;
            height: auto;
            align-items: flex-start;
            padding-bottom: 0;
          }
          .cc-hero-inner {
            grid-template-columns: 1fr;
            padding: 88px 20px 16px;
            gap: 16px;
          }

          /* Text first, image below */
          .cc-hero-left { order: 1; align-items: flex-start; text-align: left; }
          .cc-hero-right { order: 2; justify-content: center; }

          .cc-hero-h3 {
            font-size: clamp(1.6rem, 6.5vw, 2.2rem);
            margin-bottom: 24px;
          }
          .cc-btn-primary {
            font-size: 11px;
            padding: 12px 18px;
          }

          /* Bigger image on mobile */
          .cc-hero-img-wrap { max-width: 100%; }
          .cc-hero-img-wrap img {
            height: 260px;
            border-radius: 14px;
          }

          .cc-float-top {
            top: 10px;
            left: 10px;
            min-width: 145px;
            padding: 9px 11px;
          }
          .cc-float-top .ft-label { font-size: 9px; margin-bottom: 5px; }
          .cc-float-top .ft-key,
          .cc-float-top .ft-val  { font-size: 10px; }
          .cc-float-top .ft-row  { padding: 5px 8px; }

          .cc-float-bot {
            bottom: 10px;
            right: 10px;
            min-width: 125px;
            padding: 9px 11px;
          }
          .cc-float-bot .fb-title { font-size: 9px; margin-bottom: 5px; }
          .cc-float-bot .fb-val   { font-size: 13px; }
          .cc-float-bot .fb-pill  { padding: 7px 10px; }
        }

        /* ── SMALL PHONES (max 400px) ── */
        @media (max-width: 400px) {
          .cc-hero-inner { padding: 88px 14px 40px; }
          .cc-hero-h3 { font-size: 1.45rem; }
          .cc-btn-primary { width: 100%; justify-content: center; }
          .cc-float-top, .cc-float-bot { display: none; }
        }
      `}</style>

      <section className="cc-hero">
        <div className="cc-hero-inner">

          {/* ── LEFT ── */}
          <div className="cc-hero-left">
            <h3 className="cc-hero-h3">
              Unified array of data solutions <br />
              powered by <span>Generative AI</span>
            </h3>
            <Link to="/solutions/data-archiving" className="cc-btn-primary">
              Explore Generative AI Data Archiving Solutions
            </Link>
          </div>

          {/* ── RIGHT ── */}
          <div className="cc-hero-right">

            {/* <div className="cc-float-top">
              <div className="ft-label">AI Archiving Stats</div>
              <div className="ft-row">
                <span className="ft-key">Records/day</span>
                <span className="ft-val">2.4M</span>
              </div>
              <div className="ft-row">
                <span className="ft-key">Accuracy</span>
                <span className="ft-val">99.97%</span>
              </div>
              <div className="ft-row">
                <span className="ft-key">Compliance</span>
                <span className="ft-val">GDPR ✓</span>
              </div>
            </div> */}

            <div className="cc-hero-img-wrap">
              <img
                src="https://compucodeltd.com/images/banners/slider-06.jpg"
                alt="IT Professional working"
              />
            </div>

            {/* <div className="cc-float-bot">
              <div className="fb-title">Uptime Guarantee</div>
              <div className="fb-pill">
                <span className="fb-sym">SLA</span>
                <span className="fb-val">99.9%</span>
              </div>
            </div> */}

          </div>
        </div>
      </section>
    </>
  );
}