import { ShieldCheck, Globe, Cpu } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Scalable & Secure Solutions",
    text: "Our AI-enhanced team delivers scalable, secure, and integrated IT solutions built for enterprise needs.",
  },
  {
    icon: Globe,
    title: "Global Industry Expertise",
    text: "Gained in the global segment of the IT Industry, with a proven ability to deliver strategic industry solutions.",
  },
  {
    icon: Cpu,
    title: "Cutting-Edge Generative AI",
    text: "Now with an added focus on cutting-edge Generative AI to drive innovation and efficiency across your operations.",
  },
];

export default function PartnerSection() {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">

        {/* LEFT — Text content */}
        <div className="flex-1">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
            Your Partner For <br /> the Long Haul
          </h2>

          {/* Description */}
          <p className="text-gray-500 text-sm leading-relaxed mb-8 max-w-2xl">
            Our AI-enhanced team boasts years of service-oriented expertise to
            deliver scalable, secure, integrated IT solutions. Gained in the
            global segment of the IT Industry, with a proven ability to deliver
            strategic industry solutions, now with an added focus on
            cutting-edge Generative AI.
          </p>

          {/* CTA Button */}
          <a
            href="/about"
            className="inline-flex items-center gap-2 border border-[#e53e2d] text-[#e53e2d] font-semibold text-sm px-5 py-2.5 rounded hover:bg-[#e53e2d] hover:text-white transition-colors duration-200"
          >
            Learn More
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>

          {/* Feature list */}
          <div className="mt-12 flex flex-col gap-7">
            {features.map(({ icon: Icon, title, text }) => (
              <div key={title} className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-0.5">
                  <Icon className="w-6 h-6 text-[#e53e2d]" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900 mb-1">{title}</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — Image */}
        <div className="flex-1 flex justify-center md:justify-end">
          <img
            src="https://compucodeltd.com/images/blobs/CompucodeTeam.jpeg"
            alt="Compucode Team"
            className="rounded-2xl object-cover w-full max-w-md max-h-[480px]"
          />
        </div>

      </div>
    </section>
  );
}