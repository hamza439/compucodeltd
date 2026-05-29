// import { ArrowRight } from "lucide-react";

// export default function InfrastructureUpgrade() {
//   return (
//     <section className="py-16 bg-black">
//       <div className="max-w-7xl mx-auto px-6">
        
//         <div className="py-12">
//           <div className="grid lg:grid-cols-12 items-center gap-10">

//             {/* Left Side */}
//             <div className="lg:col-span-9">
              
//               <h1 className="text-white text-4xl font-light mb-3">
//                 Infrastructure <span className="text-red-500 font-semibold">Upgrade!</span>
//               </h1>

//               <h3 className="text-gray-400 text-xl mb-6">
//                 Are you planning to upgrade your current IT infrastructure?
//               </h3>

//               <a
//                 href="/contact"
//                 className="inline-flex items-center gap-2 px-5 py-3 border border-white text-white hover:bg-white hover:text-black transition rounded-md"
//               >
//                 Talk to us about it
//                 <ArrowRight size={18} />
//               </a>

//             </div>

//             {/* Right Side Empty (as in design) */}
//             <div className="lg:col-span-3"></div>

//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }

// import { ArrowRight } from "lucide-react";

// export default function InfrastructureUpgrade() {
//   return (
//     <section className="py-16 px-6 bg-[#1a1a1a]">
//       <div className="max-w-7xl mx-auto">
//         <div className="py-8">

//           {/* Heading */}
//           <h2
//             className="text-white text-4xl font-light mb-3"
//             style={{ fontFamily: "'Sora', sans-serif", fontWeight: 300 }}
//           >
//             Infrastructure{" "}
//             <span
//               className="text-[#e53e2d]"
//               style={{ fontFamily: "'Sora', sans-serif", fontWeight: 600 }}
//             >
//               Upgrade!
//             </span>
//           </h2>

//           {/* Subtitle */}
//           <h3
//             className="text-gray-400 text-xl mb-8"
//             style={{ fontFamily: "'Sora', sans-serif", fontWeight: 600 }}
//           >
//             Are you planning to upgrade your current IT infrastructure?
//           </h3>

//           {/* Button */}
//           <a
//             href="/contact"
//             className="inline-flex items-center gap-2 px-6 py-3 border border-white text-white text-xs font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-colors duration-200"
//             style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500 }}
//           >
//             Talk to us about it
//             <ArrowRight size={16} />
//           </a>

//         </div>
//       </div>
//     </section>
//   );
// }


// import { ArrowRight } from "lucide-react";

// export default function InfrastructureUpgrade() {
//   return (
//     <section className="py-10 px-6 ">
//       <div className="max-w-7xl mx-auto">

//         <div className="rounded-2xl px-10 py-12 bg-[#111111]">
//           <div className="py-4">

//             {/* Heading */}
//             <h2
//               className="text-white text-4xl font-light mb-3"
//               style={{ fontFamily: "'Sora', sans-serif", fontWeight: 300 }}
//             >
//               Infrastructure{" "}
//               <span
//                 className="text-[#e53e2d]"
//                 style={{ fontFamily: "'Sora', sans-serif", fontWeight: 600 }}
//               >
//                 Upgrade!
//               </span>
//             </h2>

//             {/* Subtitle */}
//             <h3
//               className="text-gray-400 text-xl mb-8"
//               style={{ fontFamily: "'Sora', sans-serif", fontWeight: 600 }}
//             >
//               Are you planning to upgrade your current IT infrastructure?
//             </h3>

//             {/* Button */}
//             <a
//               href="/contact"
//               className="inline-flex items-center gap-2 px-6 py-3 border border-white text-white text-xs font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-colors duration-200"
//               style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500 }}
//             >
//               Talk to us about it
//               <ArrowRight size={16} />
//             </a>

//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }
import { ArrowRight } from "lucide-react";

export default function InfrastructureUpgrade() {
  return (
    <section className="py-10 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="rounded-2xl px-6 sm:px-10 py-8 bg-black">
          <div className="flex flex-col lg:grid lg:grid-cols-2 items-center gap-8 lg:gap-10">

            {/* Left Side */}
            <div className="w-full">
              {/* Label */}
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 bg-white inline-block flex-shrink-0"></span>
                <p
                  className="text-white text-xs font-bold tracking-widest uppercase"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  Infrastructure Upgrade
                </p>
              </div>

              {/* Heading */}
              <h2
                className="text-white text-3xl sm:text-4xl font-light mb-4"
                style={{ fontFamily: "'Sora', sans-serif", fontWeight: 300 }}
              >
                Infrastructure{" "}
                <span
                  className="text-[#e53e2d]"
                  style={{ fontFamily: "'Sora', sans-serif", fontWeight: 600 }}
                >
                  Upgrade!
                </span>
              </h2>

              {/* Subtitle */}
              <p
                className="text-white/70 text-base sm:text-xl font-semibold"
                style={{ fontFamily: "'Sora', sans-serif" }}
              >
                Are you planning to upgrade your current IT infrastructure?
              </p>
            </div>

            {/* Right Side - Button */}
            <div className="w-full flex lg:justify-center">
              <a
                href="/contact"
                className="w-full sm:w-8/12 lg:ml-8 bg-[#e53e2d] text-white text-xs font-bold tracking-widest uppercase py-5 rounded flex items-center justify-center gap-2 hover:bg-red-700 transition-colors duration-200"
                style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500 }}
              >
                Talk to us about it
                <ArrowRight size={16} />
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}