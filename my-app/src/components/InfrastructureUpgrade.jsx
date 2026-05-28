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


import { ArrowRight } from "lucide-react";

export default function InfrastructureUpgrade() {
  return (
    <section className="py-10 px-6 ">
      <div className="max-w-7xl mx-auto">

        <div className="rounded-2xl px-10 py-12 bg-[#111111]">
          <div className="py-4">

            {/* Heading */}
            <h2
              className="text-white text-4xl font-light mb-3"
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
            <h3
              className="text-gray-400 text-xl mb-8"
              style={{ fontFamily: "'Sora', sans-serif", fontWeight: 600 }}
            >
              Are you planning to upgrade your current IT infrastructure?
            </h3>

            {/* Button */}
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 border border-white text-white text-xs font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-colors duration-200"
              style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500 }}
            >
              Talk to us about it
              <ArrowRight size={16} />
            </a>

          </div>
        </div>

      </div>
    </section>
  );
}