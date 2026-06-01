import { useState } from "react";
import Footer from "../components/Footer";

const fontLink = document.getElementById("compucode-fonts");
if (!fontLink) {
  const link = document.createElement("link");
  link.id = "compucode-fonts";
  link.rel = "stylesheet";
  link.href = "https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=DM+Sans:wght@400;500;600&display=swap";
  document.head.appendChild(link);
}

const sections = [
  { id: "who-we-are", label: "Who We Are" },
  { id: "information-we-collect", label: "Information We Collect" },
  { id: "how-we-use", label: "How We Use & Share" },
  { id: "how-we-protect", label: "How We Protect" },
  { id: "your-rights", label: "Your Rights" },
  { id: "links", label: "Links to Other Websites" },
  { id: "changes", label: "Changes to Policy" },
  { id: "contact", label: "Contact Us" },
];

export default function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState("who-we-are");
  const [tocOpen, setTocOpen] = useState(false);

  const scrollTo = (id) => {
    setActiveSection(id);
    setTocOpen(false);
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="min-h-screen bg-white" style={{ fontFamily: "'DM Sans', sans-serif" }}>

        {/* HERO */}
        <div className="relative overflow-hidden" style={{ background: "#752921" }}>
          <div className="absolute -top-16 -right-16 w-48 sm:w-64 h-48 sm:h-64 rounded-full bg-white opacity-5" />
          <div className="absolute -bottom-8 -left-8 w-32 sm:w-40 h-32 sm:h-40 rounded-full bg-white opacity-5" />
          <div className="absolute top-1/2 left-1/3 w-64 sm:w-96 h-64 sm:h-96 rounded-full bg-red-500 opacity-10 blur-3xl" />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 py-14 sm:py-20 text-center">
            <p className="text-red-200 text-xs sm:text-sm font-semibold uppercase tracking-widest mb-3" style={{ fontFamily: "'Sora', sans-serif" }}>
              Legal &amp; Compliance
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight" style={{ fontFamily: "'Sora', sans-serif" }}>
              Privacy Policy
            </h1>
            <p className="text-red-100 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              We are committed to maintaining robust privacy protections for our users. This policy explains how we collect, use, and safeguard your information.
            </p>
         
          </div>
        </div>

        {/* MOBILE TOC */}
        <div className="lg:hidden sticky top-[64px] z-40 bg-white border-b border-gray-200 px-4 py-3">
          <button
            onClick={() => setTocOpen((o) => !o)}
            className="flex items-center justify-between w-full text-sm font-semibold text-gray-700"
            style={{ fontFamily: "'Sora', sans-serif" }}
          >
            <span>📋 Jump to Section</span>
            <span className="text-[#752921] text-lg leading-none transition-transform" style={{ transform: tocOpen ? "rotate(180deg)" : "rotate(0deg)" }}>▾</span>
          </button>
          {tocOpen && (
            <nav className="mt-3 flex flex-col gap-1 pb-2">
              {sections.map((s) => (
                <button key={s.id} onClick={() => scrollTo(s.id)}
                  className={`text-left text-sm px-3 py-2 rounded-md transition-all ${activeSection === s.id ? "bg-red-50 text-[#752921] font-semibold border-l-2 border-[#752921]" : "text-gray-600 hover:text-[#752921] hover:bg-gray-50"}`}>
                  {s.label}
                </button>
              ))}
            </nav>
          )}
        </div>

        {/* BODY */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-14 flex gap-8 lg:gap-10">

          {/* DESKTOP SIDEBAR */}
          <aside className="hidden lg:block w-60 xl:w-64 shrink-0">
            <div className="sticky top-24">
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4" style={{ fontFamily: "'Sora', sans-serif" }}>
                Table of Contents
              </p>
              <nav className="flex flex-col gap-1">
                {sections.map((s) => (
                  <button key={s.id} onClick={() => scrollTo(s.id)}
                    className={`text-left text-sm px-3 py-2 rounded-md transition-all ${activeSection === s.id ? "bg-red-50 text-[#752921] font-semibold border-l-2 border-[#752921]" : "text-gray-600 hover:text-[#752921] hover:bg-gray-50"}`}>
                    {s.label}
                  </button>
                ))}
              </nav>
              <div className="mt-8 p-4 bg-red-50 border border-red-100 rounded-xl">
                <p className="text-xs font-bold text-[#752921] mb-1" style={{ fontFamily: "'Sora', sans-serif" }}>Questions?</p>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Contact us at{" "}
                  <a href="mailto:contactus@compucodeltd.com" className="text-[#752921] underline break-all">contactus@compucodeltd.com</a>
                </p>
              </div>
            </div>
          </aside>

          {/* MAIN CONTENT */}
          <main className="flex-1 min-w-0 space-y-12 sm:space-y-14">

            <div className="bg-gray-50 border-l-4 border-[#752921] rounded-r-xl p-4 sm:p-6">
              <p className="text-gray-700 leading-relaxed text-sm">
                Compucode LTD (The "Company") is committed to maintaining robust privacy protections for its users. Our Privacy Policy is designed to help you understand how we collect, use and safeguard the information you provide to us and to assist you in making informed decisions when using our Service/site.
              </p>
            </div>

            <Section id="who-we-are" title="Who We Are">
              <p>
                Please visit{" "}
                <a href="https://compucodeltd.com/about.html" className="text-[#752921] underline hover:text-[#752921] break-all">
                  https://compucodeltd.com/about.html
                </a>{" "}
                to read about us.
              </p>
              <h3 className="font-semibold text-gray-800 mt-6 mb-3" style={{ fontFamily: "'Sora', sans-serif" }}>Definitions for this Agreement</h3>
              <ul className="space-y-3">
                {[
                  ['"Site"', "refers to our Company's website, which can be accessed at https://compucodeltd.com/about.html (or through our mobile application)."],
                  ['"Service"', "refers to the Company's services accessible via our website, https://compucodeltd.com."],
                  ['"We," "us," "our," and "the Company"', "refer to Compucode LTD."],
                  ['"You"', "refers to you, as a user of our Site or our Service(s)."],
                ].map(([term, def]) => (
                  <li key={term} className="flex gap-3 text-sm text-gray-700">
                    <span className="shrink-0 w-2 h-2 rounded-full bg-[#752921] mt-1.5" />
                    <span><strong className="text-gray-900">{term}</strong> {def}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-gray-700">
                By accessing our Site or our Service, you accept our Privacy Policy and Terms of Use and you consent to our collection, storage, use and disclosure of your Personal Information as described in this Privacy Policy.
              </p>
            </Section>

            <Section id="information-we-collect" title="Information We Collect">
              <p>We collect <strong>"Non-Personal Information"</strong> and <strong>"Personal Information."</strong></p>
              <SubSection title="Personal Information">
                Personal Information you will be providing if you contact us via our website includes your Name, email, contact information including your telephone number or/and contact address, which you submit to us through the registration process at the Site.
              </SubSection>
              <SubSection title="Non-Personal Information">
                Non-Personal Information includes information that cannot be used to personally identify you, such as anonymous usage data, general demographic information we may collect, referring/exit pages and URLs, platform types, preferences you submit, and number of clicks.
              </SubSection>
              <SubSection title="1. Information Collected via Technology and Cookies">
                {`To activate the service, you do not need to submit any Personal Information other than your email address. However, in an effort to improve the quality of the Service, we track information provided to us by your browser or by our software application when you view or use the Service, such as the website you came from (known as the "referring URL"), the type of browser you use, the device from which you connected to the Service, the time and date of access, and other information that does not personally identify you.\n\nWe track this information using cookies — small text files which include an anonymous unique identifier. For more information, please read our Cookie Policy on our website.`}
              </SubSection>
              <SubSection title="2. Information You Provide by Registering for an Account">
                To become a subscriber to the Service you will need to create a personal profile by registering with the Service and entering your email address, and creating a username and a password. By registering, you are authorizing us to collect, store and use your email address in accordance with this Privacy Policy.
              </SubSection>
              <SubSection title="3. Children's Privacy">
                The Site and the Service are not directed to anyone under the age of 13. The Site does not knowingly collect or solicit information from anyone under the age of 13, or allow anyone under the age of 13 to sign up for the Service. If you believe we have collected such information, please contact us immediately.
              </SubSection>
            </Section>

            <Section id="how-we-use" title="How We Use and Share Information">
              <SubSection title="Personal Information">
                {`Except as otherwise stated in this Privacy Policy, we do not sell, trade, rent or otherwise share for marketing purposes your Personal Information with third parties without your consent. We do share Personal Information with vendors who are performing services for the Company.\n\nWe use Personal Information to contact users in response to questions, solicit feedback, provide technical support, and inform users about promotional offers if you opt in. We may also share Personal Information with outside parties if required by law or to protect our users.`}
              </SubSection>
              <SubSection title="Non-Personal Information">
                We use Non-Personal Information to help us improve the Service and customize the user experience. We also aggregate Non-Personal Information to track trends and analyze use patterns on the Site.
              </SubSection>
              <SubSection title="Business Transactions">
                In the event we undergo a business transaction such as a merger, acquisition, or sale of assets, your Personal Information may be among the assets transferred. You acknowledge and consent that such transfers may occur and are permitted by this Privacy Policy.
              </SubSection>
            </Section>

            <Section id="how-we-protect" title="How We Protect Information">
              <p className="text-sm text-gray-700 leading-relaxed">
                We implement security measures designed to protect your information from unauthorized access. Your account is protected by your account password, and we urge you to take steps to keep your personal information safe by not disclosing your password and by logging out of your account after each use.
              </p>
              <p className="mt-4 text-sm text-gray-700 leading-relaxed">
                We further protect your information from potential security breaches by implementing certain technological security measures including encryption, firewalls, and secure socket layer technology. However, these measures do not guarantee that your information will not be accessed, disclosed, altered or destroyed by breach of such firewalls and secure server software.
              </p>
              <div className="mt-6 grid grid-cols-3 gap-3 sm:gap-4">
                {["Encryption", "Firewalls", "SSL Technology"].map((item) => (
                  <div key={item} className="flex flex-col items-center p-3 sm:p-4 bg-red-50 rounded-xl border border-red-100 text-center">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#752921] flex items-center justify-center mb-2">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-xs font-semibold text-gray-700" style={{ fontFamily: "'Sora', sans-serif" }}>{item}</span>
                  </div>
                ))}
              </div>
            </Section>

            <Section id="your-rights" title="Your Rights Regarding Your Personal Information">
              <p className="text-sm text-gray-700 leading-relaxed">
                You have the right at any time to prevent us from contacting you for marketing purposes. When we send a promotional communication to a user, the user can opt out of further promotional communications by following the unsubscribe instructions provided in each promotional e-mail.
              </p>
              <p className="mt-4 text-sm text-gray-700 leading-relaxed">
                You can also indicate that you do not wish to receive marketing communications from us in the Settings section of the Site. Please note that we may continue to send you administrative emails including, for example, periodic updates to our Privacy Policy.
              </p>
            </Section>

            <Section id="links" title="Links to Other Websites">
              <p className="text-sm text-gray-700 leading-relaxed">
                As part of the Service, we may provide links to or compatibility with other websites or applications. However, we are not responsible for the privacy practices employed by those websites or the information or content they contain. This Privacy Policy applies solely to information collected by us through the Site and the Service.
              </p>
              <p className="mt-4 text-sm text-gray-700 leading-relaxed">
                We encourage our users to read the privacy statements of other websites before proceeding to use them.
              </p>
            </Section>

            <Section id="changes" title="Changes to Our Privacy Policy">
              <p className="text-sm text-gray-700 leading-relaxed">
                The Company reserves the right to change this policy and our Terms of Service at any time. We will notify you of significant changes to our Privacy Policy by sending a notice to the primary email address specified in your account or by placing a prominent notice on our site.
              </p>
              <p className="mt-4 text-sm text-gray-700 leading-relaxed">
                Significant changes will go into effect 30 days following such notification. Non-material changes or clarifications will take effect immediately. You should periodically check the Site and this privacy page for updates.
              </p>
            </Section>

            <Section id="contact" title="Contact Us">
              <p className="text-sm text-gray-700 leading-relaxed">
                If you have any questions regarding this Privacy Policy or the practices of this Site, please contact us by sending an email to:
              </p>
              <a href="mailto:contactus@compucodeltd.com"
                className="inline-flex items-center gap-2 mt-4 bg-[#752921] hover:bg-[#752921] text-white text-sm font-medium px-5 sm:px-6 py-3 rounded-lg transition-colors">
                <span>✉</span>
                contactus@compucodeltd.com
              </a>
            </Section>

            <div className="border-t border-gray-200 pt-8 text-xs text-gray-400 text-center">
              Last Updated: This Privacy Policy was last updated on <strong>30 October 2025</strong>. © Compucode LTD. All rights reserved.
            </div>
          </main>
        </div>
      </div>

      {/* FOOTER — outside the main div, inside the fragment */}
      <Footer />
    </>
  );
}

function Section({ id, title, children }) {
  return (
    <section id={id} className="scroll-mt-24">
      <div className="flex items-center gap-3 mb-4 sm:mb-5">
        <div className="w-1 h-6 sm:h-7 rounded-full bg-[#752921] shrink-0" />
        <h2 className="text-lg sm:text-xl font-bold text-gray-900" style={{ fontFamily: "'Sora', sans-serif" }}>
          {title}
        </h2>
      </div>
      <div className="text-sm text-gray-700 leading-relaxed space-y-2">{children}</div>
    </section>
  );
}

function SubSection({ title, children }) {
  return (
    <div className="mt-5 sm:mt-6">
      <h3 className="font-semibold text-gray-800 mb-2" style={{ fontFamily: "'Sora', sans-serif" }}>
        {title}
      </h3>
      <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-line">{children}</p>
    </div>
  );
}
