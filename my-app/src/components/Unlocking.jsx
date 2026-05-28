import { Bot, Settings2, Lightbulb } from "lucide-react";

const cards = [
  {
    icon: Bot,
    title: "Intelligent Automation",
    text: "Automate mundane tasks and complex workflows with AI-driven precision, freeing up your team for strategic initiatives.",
  },
  {
    icon: Settings2,
    title: "Enhanced Efficiency",
    text: "Optimize operations, reduce costs, and accelerate project delivery through AI-powered insights and predictions.",
  },
  {
    icon: Lightbulb,
    title: "Structured and Unstructured Data Archiving with AI",
    text: "Leverage AI to efficiently archive and retrieve both structured and unstructured data, ensuring compliance and easy access. Integrate facial recognition using generative AI to easily locate archived pictures, videos and files.",
  },
];

export default function GenerativeAISection() {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Top — Heading + description (left-aligned) */}
        <div className="max-w-xl mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
            Unlocking Potential with{" "}
            <span className="text-[#e53e2d]">Generative AI</span>
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed">
            At Compucode, we are at the forefront of integrating Generative AI
            into our comprehensive IT solutions. By harnessing the power of
            advanced AI models, we enable your business to innovate faster,
            automate complex processes, enhance decision-making, and create
            unprecedented value. From intelligent automation to predictive
            analytics and custom application development, Generative AI is
            embedded in the core of what we do.
          </p>
        </div>

        {/* Bottom — 3 horizontal cards with vertical dividers */}
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200 border border-gray-200 rounded-sm">
          {cards.map(({ icon: Icon, title, text }) => (
            <div key={title} className="flex flex-col items-start px-8 py-8">
              {/* Icon at top */}
              <div className="mb-6">
                <Icon className="w-9 h-9 text-[#e53e2d]" strokeWidth={1.5} />
              </div>

              {/* Title */}
              <h3 className="text-base font-bold text-gray-900 mb-2">
                {title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-500 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
