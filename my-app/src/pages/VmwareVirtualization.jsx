import { Link } from "react-router-dom";
import {
  ArrowRight,
  Check,
  Server,
  Cloud,
  Database,
  Cpu,
} from "lucide-react";
import Footer from "../components/Footer";
import InfrastructureUpgrade from "../components/InfrastructureUpgrade";

const HERO_BG = "https://www.compucodeltd.com/images/banners/body-bg.jpg";
const APP_IMG = "https://compucodeltd.com/images/blobs/data.png";

const ecosystemItems = [
  {
    icon: Server,
    title: "Infrastructure Managers",
    text: "We work with IT and infrastructure teams, giving them tools to manage virtualized workloads, reduce hardware costs, and scale compute resources on demand.",
  },
  {
    icon: Cloud,
    title: "Cloud Integrations",
    text: "Seamlessly connect on-premise VMware environments with public cloud providers — ensuring flexibility across hybrid and multi-cloud platforms.",
  },
  {
    icon: Database,
    title: "Data & Process Integrations",
    text: "Streamline operations by connecting virtualized infrastructure to data workflows and a broad range of business solution providers for end-to-end automation.",
  },
];

const features = [
  "Consolidate physical servers up to 15:1 ratio",
  "Live VM migration with vMotion — zero downtime",
  "High availability & fault tolerance built-in",
  "Dedicated VMware certified engineers on call",
];

const partnerBlocks = [
  {
    label: "VMware vSphere & vCenter Solutions",
    desc: "Compucode partners with VMware to deliver enterprise virtualization using vSphere and vCenter. Combining advanced hypervisor capabilities with centralized management, businesses achieve unparalleled efficiency across their entire data center.",
    points: [
      "Consolidate Physical Servers Up to 15:1",
      "Live VM Migration with vMotion",
      "High Availability & Fault Tolerance",
      "Dedicated VMware Certified Engineers",
    ],
    bgFrom: "#1B5C95",
    bgTo: "#0F3A6E",
    logoMain: "vm",
    logoSub: "ware",
    reverse: false,
  },
  {
    label: "Microsoft Hyper-V & Azure Stack HCI",
    desc: "Leverage Microsoft's robust Hyper-V hypervisor and Azure Stack HCI to build a software-defined data center. Compucode configures hybrid environments that seamlessly bridge on-premises workloads with Microsoft Azure cloud services.",
    points: [
      "Hyper-V Cluster Configuration",
      "Azure Arc-Enabled Infrastructure",
      "Storage Spaces Direct (S2D)",
      "Windows Admin Center Integration",
    ],
    bgFrom: "#0078D4",
    bgTo: "#004C99",
    logoMain: "Hyper",
    logoSub: "-V",
    reverse: true,
  },
  {
    label: "Nutanix Hyper-Converged Infrastructure",
    desc: "Deliver a true cloud-like experience on-premises with Nutanix HCI. Compucode designs and deploys Nutanix AOS and AHV solutions that simplify data center operations, eliminate silos, and offer one-click infrastructure management.",
    points: [
      "Nutanix AOS & AHV Deployment",
      "Prism Central Management Console",
      "Intelligent Storage Tiering",
      "Nutanix Flow Network Security",
    ],
    bgFrom: "#024DA1",
    bgTo: "#01336B",
    logoMain: "Nuta",
    logoSub: "nix",
    reverse: false,
  },
];

const stats = [
  { num: "500+", label: "VMs Deployed" },
  { num: "15:1", label: "Server Consolidation" },
  { num: "99.9%", label: "Uptime Guarantee" },
  { num: "10+", label: "Years of Expertise" },
];

export default function VMwareVirtualization() {
  return (
    <div className="bg-white" style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400 }}>

      {/* ───────── HERO ───────── */}
      <section className="relative pt-16 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-top bg-no-repeat"
          style={{ backgroundImage: `url(${HERO_BG})` }}
        />
        <div className="absolute inset-0 bg-black/55" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-28 text-center">
          <p
            className="text-xs sm:text-sm tracking-widest uppercase text-white/75 mb-4"
            style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400 }}
          >
            Our Solutions
          </p>

          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl text-white mb-6 leading-tight"
            style={{ fontFamily: "'Sora', sans-serif", fontWeight: 600 }}
          >
            VMWare Virtualisation
          </h1>

          <p
            className="text-sm sm:text-base md:text-lg text-white/85 leading-relaxed max-w-xl mx-auto mb-8"
            style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400 }}
          >
            Compucode LTD partners with industry-leading virtualisation vendors to deliver
            enterprise-grade solutions that transform how you manage compute, storage, and
            networking resources. We consolidate your physical infrastructure, reduce costs,
            and unlock the full power of a virtualised data centre.
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 bg-[#e53e2d] border-2 border-[#e53e2d] text-white font-bold text-xs sm:text-sm tracking-wide uppercase rounded-sm hover:bg-white hover:text-[#e53e2d] transition-all duration-200"
          >
            Get Started Now
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* ───────── ECOSYSTEM GRID ───────── */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-2xl sm:text-3xl md:text-4xl text-gray-900 mb-4"
            style={{ fontFamily: "'Sora', sans-serif", fontWeight: 600 }}
          >
            Built to Work With Your Ecosystem
          </h2>
          <p
            className="text-sm sm:text-base text-gray-500 leading-relaxed max-w-3xl mb-10 sm:mb-14"
            style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400 }}
          >
            By fostering technology partnerships, we extend platform capabilities — helping
            businesses embrace new opportunities and stay ahead with future-ready
            virtualisation solutions across your entire technology stack.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {ecosystemItems.map(({ icon: Icon, title, text }) => (
              <div key={title} className="text-center sm:text-left">
                <div className="mb-4 w-12 h-12 mx-auto sm:mx-0 rounded-lg bg-[#e53e2d]/10 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-[#e53e2d]" strokeWidth={1.5} />
                </div>
                <h3
                  className="text-base sm:text-lg text-gray-900 mb-3"
                  style={{ fontFamily: "'Sora', sans-serif", fontWeight: 600 }}
                >
                  {title}
                </h3>
                <p
                  className="text-sm text-gray-500 leading-relaxed"
                  style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400 }}
                >
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── FEATURE SPLIT ───────── */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-[#fafafa]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <h2
              className="text-2xl sm:text-3xl md:text-4xl text-gray-900 mb-5 leading-tight"
              style={{ fontFamily: "'Sora', sans-serif", fontWeight: 600 }}
            >
              VMWare Virtualisation with{" "}
              <span className="text-[#e53e2d]">Enterprise Confidence</span>
            </h2>
            <p
              className="text-sm sm:text-base text-gray-500 leading-relaxed mb-6"
              style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400 }}
            >
              Since the virtualised environment is configured to execute only on specified
              operational parameters, it delivers precise, reliable, and error-free
              infrastructure performance — every time.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-900 text-white text-sm font-semibold rounded-md hover:bg-black transition-colors mb-8 sm:mb-10"
            >
              Learn More
              <ArrowRight size={16} />
            </Link>
            <ul className="space-y-4">
              {features.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-0.5 w-6 h-6 rounded-full bg-[#e53e2d]/15 flex items-center justify-center">
                    <Check className="w-4 h-4 text-[#e53e2d]" strokeWidth={2.5} />
                  </span>
                  <span
                    className="text-sm text-gray-700 leading-relaxed"
                    style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400 }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md">
              <div
                className="absolute -inset-4 rounded-2xl opacity-20 blur-2xl"
                style={{ background: "linear-gradient(135deg, #e53e2d 0%, #1B5C95 50%, #0F3A6E 100%)" }}
              />
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f0f0f] p-6 sm:p-8 min-h-[260px] sm:min-h-[320px] flex flex-col items-center justify-center">
                <img
                  src={APP_IMG}
                  alt="VMware Virtualisation"
                  className="w-full max-w-xs object-contain mb-6"
                />
                <div className="flex items-center gap-2 text-white/90">
                  <Cpu className="w-5 h-5 text-[#e53e2d]" />
                  <span style={{ fontFamily: "'Sora', sans-serif", fontWeight: 600 }} className="text-sm tracking-wide">
                    Compucode Ltd
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── PARTNER BLOCKS ───────── */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto space-y-6">
          {partnerBlocks.map((b) => (
            <div
              key={b.logoMain}
              className="bg-[#fafafa] border border-gray-200 rounded-2xl p-8 sm:p-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
            >
             <div
  className={`relative rounded-xl h-52 sm:h-64 flex items-center justify-center overflow-hidden
  ${b.reverse ? "lg:order-first" : "lg:order-last"}`}
  style={{
    background: `
      linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)),
      linear-gradient(135deg, ${b.bgFrom} 0%, ${b.bgTo} 100%)
    `,
  }}
>
                <div
                  className="absolute inset-0 opacity-10"
                  style={{ background: "radial-gradient(circle at 70% 30%, rgba(255,255,255,0.5) 0%, transparent 60%)" }}
                />
                <p
                  className="text-3xl sm:text-4xl text-white relative z-10 tracking-tight"
                  style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700 }}
                >
                  {b.logoMain}
                  <span className="text-white/40">{b.logoSub}</span>
                </p>
              </div>

              <div>
                <h2
                  className="text-xl sm:text-2xl text-gray-900 leading-snug mb-4"
                  style={{ fontFamily: "'Sora', sans-serif", fontWeight: 600 }}
                >
                  {b.label}
                </h2>
                <p
                  className="text-sm text-gray-500 leading-relaxed mb-5"
                  style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400 }}
                >
                  {b.desc}
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#e53e2d] text-white text-xs sm:text-sm font-semibold rounded-md hover:bg-[#c0392b] transition-colors mb-6"
                >
                  Learn More →
                </Link>
                <ul className="space-y-2.5">
                  {b.points.map((pt) => (
                    <li key={pt} className="flex items-center gap-2.5">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#e53e2d]/15 flex items-center justify-center">
                        <Check className="w-3 h-3 text-[#e53e2d]" strokeWidth={2.5} />
                      </span>
                      <span
                        className="text-sm text-gray-700"
                        style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400 }}
                      >
                        {pt}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ───────── STATS BAND ───────── */}
      <section className="bg-[#e53e2d]  sm:py-5  sm:px-3">
        <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 text-center text-white">
          {stats.map((s) => (
            <div key={s.label}>
              <p
                className="text-3xl sm:text-4xl md:text-5xl"
                style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700 }}
              >
                {s.num}
              </p>
              <p
                className="text-xs sm:text-sm text-white/70 mt-2"
                style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400 }}
              >
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ───────── MAIN CONTENT ───────── */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-10 items-center">
          <div className="md:col-span-5 flex justify-center">
            <img
              src={APP_IMG}
              alt="VMware Virtualisation"
              className="w-full max-w-xs sm:max-w-md object-contain"
            />
          </div>
          <div className="md:col-span-7">
            <p
              className="text-sm text-gray-500 leading-relaxed text-justify mb-6"
              style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400 }}
            >
              In today's fast-growing economy, virtualisation gives organisations a cost-effective
              and powerful way to address the growing demands of existing and new customers.
              Businesses have come to realise that server virtualisation and process automation
              for routine infrastructure tasks is a long-term initiative — delivering better
              efficiency, flexibility, and significant cost savings.
            </p>
            <h3
              className="text-lg sm:text-xl md:text-2xl text-gray-900 leading-snug mb-8"
              style={{ fontFamily: "'Sora', sans-serif", fontWeight: 600 }}
            >
              Since the virtualised environment executes only on specified and configured
              operational parameters, it delivers a precise, accurate, and error-free
              infrastructure performance.
            </h3>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 border border-[#e53e2d] text-[#e53e2d] font-bold text-xs tracking-widest uppercase hover:bg-[#e53e2d] hover:text-white transition-colors duration-200"
            >
              Get Started Now
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ───────── BOTTOM CTA ───────── */}
      {/* <section className="py-14 sm:py-16 md:py-20 px-4 sm:px-6 bg-[#111111]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 items-center">
          <h2
            className="text-2xl sm:text-3xl md:text-4xl text-white leading-tight"
            style={{ fontFamily: "'Sora', sans-serif", fontWeight: 600 }}
          >
            Learn how Compucode{" "}
            <span className="text-[#e53e2d]">completes</span> your tech stack.
          </h2>
          <div>
            <p
              className="text-sm text-gray-400 leading-relaxed mb-8"
              style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400 }}
            >
              Our certified VMware team delivers scalable, secure, integrated virtualisation
              solutions — engineered for predictive scalability and an enterprise security mindset.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 border-2 border-[#e53e2d] text-[#e53e2d] font-bold text-xs sm:text-sm tracking-wide uppercase rounded-sm hover:bg-[#e53e2d] hover:text-white transition-colors duration-200"
            >
              Contact Us
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section> */}
      <InfrastructureUpgrade/>
      <Footer/>
    </div>
  );
}