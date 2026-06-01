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
                  className="text-[#752921]"
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
                className="w-full sm:w-8/12 lg:ml-8 bg-[#752921] text-white text-xs font-bold tracking-widest uppercase py-5 rounded flex items-center justify-center gap-2 hover:bg-[#752921] transition-colors duration-200"
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