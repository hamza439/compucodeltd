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
//           height: 580px;
//           object-fit: cover;
//           display: block;
//           border-radius: 20px;
//           box-shadow: 0 32px 80px rgba(0,0,0,0.18);
//         }

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
//         }

//         /* ── MOBILE (max 768px) ── */
//         @media (max-width: 768px) {
//           .cc-hero {
//             min-height: unset;
//             height: auto;
//             align-items: flex-start;
//           }
//           .cc-hero-inner {
//             grid-template-columns: 1fr;
//             padding: 88px 20px 40px;
//             gap: 16px;
//           }

//           .cc-hero-left { order: 1; align-items: flex-start; text-align: left; }
//           .cc-hero-right { order: 2; justify-content: center; }

//           .cc-hero-h3 {
//             font-size: clamp(1.6rem, 6.5vw, 2.2rem);
//             margin-bottom: 20px;
//           }

//           /* Smaller button on mobile */
//           .cc-btn-primary {
//             font-size: 10px;
//             padding: 10px 16px;
//             letter-spacing: 0.05em;
//             box-shadow: 0 3px 14px rgba(229,62,45,0.3);
//           }

//           /* Enlarged image on mobile */
//           .cc-hero-img-wrap { max-width: 100%; }
//           .cc-hero-img-wrap img {
//             height: 380px;
//             border-radius: 14px;
//           }
//         }

//         /* ── SMALL PHONES (max 400px) ── */
//         @media (max-width: 400px) {
//           .cc-hero-inner { padding: 88px 14px 40px; }
//           .cc-hero-h3 { font-size: 1.45rem; }
//           .cc-btn-primary {
//             font-size: 10px;
//             padding: 10px 14px;
//           }
//           .cc-hero-img-wrap img { height: 300px; }
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
//             <div className="cc-hero-img-wrap">
//               <img
//                 src="https://compucodeltd.com/images/banners/slider-06.jpg"
//                 alt="IT Professional working"
//               />
//             </div>
//           </div>

//         </div>
//       </section>
//     </>
//   );
// }

import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function HeroSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const animItems = sectionRef.current?.querySelectorAll(".cc-anim");
    if (!animItems) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Find index of this element among all cc-anim siblings
            const allItems = [...(sectionRef.current?.querySelectorAll(".cc-anim") || [])];
            const idx = allItems.indexOf(entry.target);
            setTimeout(() => {
              entry.target.style.opacity = "1";
              entry.target.style.transform = "translateY(0)";
            }, idx * 160);
            observer.unobserve(entry.target); // fire only once
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -60px 0px", // trigger slightly before fully in view
      }
    );

    // Observe each cc-anim element individually
    animItems.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@600;700&family=DM+Sans:wght@400;500&display=swap');

        .cc-hero {
          position: relative;
          width: 100%;
          height: 520px;
          overflow: hidden;
          font-family: 'DM Sans', sans-serif;
          display: block;
        }

        .cc-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
        }
        .cc-bg img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 30%;
          display: block;
        }
        .cc-bg::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(
            105deg,
            rgba(0,0,0,0.65) 50%,
            rgba(0,0,0,0.10) 100%
          );
        }

        .cc-triangle {
          position: absolute;
          bottom: 0;
          left: 0;
          z-index: 2;
          width: 220px;
          height: 330px;
          pointer-events: none;
        }

        .cc-wave {
          position: absolute;
          bottom: -1px;
          left: 0;
          width: 100%;
          z-index: 3;
          line-height: 0;
          pointer-events: none;
        }
        .cc-wave svg {
          display: block;
          width: 100%;
          height: 58px;
        }

        .cc-play-wrap {
          position: absolute;
          bottom: -36px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 10;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          pointer-events: all;
        }
        .cc-play-ring {
          width: 82px;
          height: 82px;
          border-radius: 50%;
          border: 2px dashed rgba(229,62,45,0.75);
          display: flex;
          align-items: center;
          justify-content: center;
          animation: ccSpin 13s linear infinite;
          flex-shrink: 0;
        }
        .cc-play-btn {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: #e53e2d;
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          transition: background 0.22s, transform 0.22s;
          cursor: pointer;
        }
        .cc-play-btn:hover {
          background: #c0392b;
          transform: scale(1.08);
        }
        .cc-play-text {
          font-family: 'DM Sans', sans-serif;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #ffffff;
          white-space: nowrap;
          margin-top: 2px;
        }

        @keyframes ccSpin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }

        .cc-content {
          position: relative;
          z-index: 2;
          padding: 64px 52px 100px;
          max-width: 600px;
        }

        /* ── SCROLL ANIM — start hidden, JS reveals ── */
        .cc-anim {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.75s cubic-bezier(0.22, 1, 0.36, 1),
                      transform 0.75s cubic-bezier(0.22, 1, 0.36, 1);
          will-change: opacity, transform;
        }

        .cc-over {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #e53e2d;
          margin-bottom: 14px;
          
        }
        .cc-over::before {
          content: '';
          width: 30px;
          height: 2px;
          background: #e53e2d;
          flex-shrink: 0;
          display: block;
        }

        .cc-h1 {
          font-family: 'Sora', sans-serif;
          font-size: clamp(1.6rem, 3.2vw, 2.6rem);
          font-weight: 600;
          line-height: 1.18;
          color: #ffffff;
          margin: 0 0 16px;
          letter-spacing: -0.015em;
        }
        .cc-h1 span { color: #e53e2d; }

        .cc-para {
          font-family: 'DM Sans', sans-serif;
          font-size: 15px;
          font-weight: 400;
          line-height: 1.72;
          color: rgba(255,255,255,0.65);
          margin: 0 0 28px;
          max-width: 460px;
        }

        .cc-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 14px 26px;
          background: #e53e2d;
          color: #ffffff;
          border-radius: 4px;
          font-family: 'DM Sans', sans-serif;
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.07em;
          text-transform: uppercase;
          text-decoration: none;
          border: none;
          cursor: pointer;
          box-shadow: 0 4px 20px rgba(229,62,45,0.45);
          transition: background 0.22s, transform 0.22s, box-shadow 0.22s;
        }
        .cc-btn:hover {
          background: #c0392b;
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(229,62,45,0.60);
        }
        .cc-btn-arrow {
          display: inline-flex;
          align-items: center;
          transition: transform 0.2s;
        }
        .cc-btn:hover .cc-btn-arrow {
          transform: translateX(4px);
        }

        @media (max-width: 1024px) {
          .cc-hero { height: 480px; }
          .cc-content { padding: 56px 36px 96px; }
          .cc-triangle { width: 175px; height: 265px; }
          .cc-h1 { font-size: clamp(1.5rem, 3vw, 2.2rem); }
        }

        @media (max-width: 768px) {
          .cc-hero { height: auto; min-height: 420px; }
          .cc-content { padding: 52px 22px 100px; max-width: 100%; }
          .cc-h1 { font-size: clamp(1.4rem, 6vw, 1.9rem); }
          .cc-para { font-size: 14px; }
          .cc-triangle { width: 140px; height: 200px; opacity: 0.45; }
          .cc-btn { font-size: 10.5px; padding: 12px 16px; }
          .cc-play-ring { width: 70px; height: 70px; }
          .cc-play-btn { width: 52px; height: 52px; }
        }

        @media (max-width: 400px) {
          .cc-content { padding: 48px 14px 96px; }
          .cc-h1 { font-size: 1.35rem; }
          .cc-btn { font-size: 10px; padding: 11px 13px; }
        }
      `}</style>

      <section className="cc-hero" ref={sectionRef}>

        <div className="cc-bg">
          <img
            src="https://compucodeltd.com/images/banners/slider-06.jpg"
            alt="IT Professional working"
          />
        </div>

        <svg
          className="cc-triangle"
          viewBox="0 0 220 330"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon points="0,330 0,0 220,330" fill="#e53e2d" opacity="0.50" />
          <polygon points="0,330 0,115 125,330" fill="rgba(0,0,0,0.28)" />
        </svg>

        <div className="cc-content">

          <p className="cc-over cc-anim">
            Data Intelligence Solutions
          </p>

          <h1 className="cc-h1 cc-anim w-80">
            Unified array of data solutions<br />
            powered by <span>Generative AI</span>
          </h1>

          <p className="cc-para cc-anim">
            Harness next-generation AI to transform how your organisation
            archives, retrieves, and acts on critical data — at enterprise scale.
          </p>

          <div className="cc-anim">
            <Link to="/solutions/data-archiving" className="cc-btn">
              Explore Generative AI Data Archiving Solutions
              <span className="cc-btn-arrow">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2.5"
                  strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </span>
            </Link>
          </div>

        </div>

        <div className="cc-wave">
          <svg viewBox="0 0 1440 58" preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M0,58 C480,0 960,0 1440,58 L1440,58 L0,58 Z" fill="#ffffff" />
          </svg>
        </div>

        <div className="cc-play-wrap mb-5">
          <div className="cc-play-ring">
            <a
              className="cc-play-btn"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Play video"
            >
             
            </a>
          </div>
          <span className="cc-play-text">Play</span>
        </div>

      </section>
    </>
  );
}
