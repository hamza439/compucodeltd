import { useState } from "react";
import Footer from "../components/Footer";

if (!document.getElementById("compucode-fonts")) {
  const link = document.createElement("link");
  link.id = "compucode-fonts";
  link.rel = "stylesheet";
  link.href = "https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=DM+Sans:wght@400;500;600&display=swap";
  document.head.appendChild(link);
}

const cookieCategories = [
  {
    id: "necessary", label: "Necessary Cookies", color: "#991b1b",
    description: "Necessary cookies are required to enable the basic features of this site, such as providing secure log-in or adjusting your consent preferences. These cookies do not store any personally identifiable data.",
    cookies: [
      { name: "_GRECAPTCHA", duration: "6 months", description: "Google Recaptcha service sets this cookie to identify bots to protect the website against malicious spam attacks." },
      { name: "ajs_anonymous_id", duration: "Never Expires", description: "This cookie is set by Segment to count the number of people who visit a certain site by tracking if they have visited before." },
      { name: "ajs_user_id", duration: "Never Expires", description: "This cookie is set by Segment to help track visitor usage, events, target marketing, and also measure application performance and stability." },
      { name: "m", duration: "1 year 1 month 4 days", description: "Stripe sets this cookie for fraud prevention purposes. It identifies the device used to access the website, allowing the website to be formatted accordingly." },
      { name: "cookieyes_privacy_policy_generator_session", duration: "2 hours", description: "Description is currently not available." },
      { name: "XSRF-TOKEN", duration: "2 hours", description: "This cookie enhances visitor browsing security by preventing cross-site request forgery." },
      { name: "cookieyes_cookie_policy_generator_session", duration: "2 hours", description: "Description is currently not available." },
      { name: "__cf_bm", duration: "1 hour", description: "This cookie, set by Cloudflare, is used to support Cloudflare Bot Management." },
      { name: "cookieyes-consent", duration: "1 year", description: "CookieYes sets this cookie to remember users' consent preferences so that their preferences are respected on subsequent visits to this site." },
      { name: "_calendly_session", duration: "21 days", description: "Calendly sets this cookie to allow the meeting scheduler to function within the website and to add events into the visitor's calendar." },
      { name: "_cfuvid", duration: "session", description: "Calendly sets this cookie to track users across sessions to optimize user experience by maintaining session consistency." },
      { name: "rc::a", duration: "Never Expires", description: "This cookie is set by the Google recaptcha service to identify bots to protect the website against malicious spam attacks." },
      { name: "rc::f", duration: "Never Expires", description: "This cookie is set by the Google recaptcha service to identify bots to protect the website against malicious spam attacks." },
      { name: "rc::c", duration: "session", description: "This cookie is set by the Google recaptcha service to identify bots to protect the website against malicious spam attacks." },
      { name: "rc::b", duration: "session", description: "This cookie is set by the Google recaptcha service to identify bots to protect the website against malicious spam attacks." },
      { name: "__Secure-ENID", duration: "1 year 1 month", description: "The __Secure-ENID cookie is a type of secure cookie used for authentication and to ensure the security of user sessions." },
      { name: "csrf_token", duration: "session", description: "This cookie is set by Reddit and is used to help prevent cross-site request forgery (CSRF) attacks." },
      { name: "irclickid", duration: "30 days", description: "The Impact platform sets this cookie to securely store referral information for accurately processing and attributing user referrals made through affiliate links." },
      { name: "tpclickid", duration: "30 days", description: "The Tapfiliate platform sets this cookie to securely store referral information for accurately processing and attributing user referrals made through affiliate links." },
    ],
  },
  {
    id: "functional", label: "Functional Cookies", color: "#b45309",
    description: "Functional cookies help perform certain functionalities like sharing the content of the website on social media platforms, collecting feedback, and other third-party features.",
    cookies: [
      { name: "lang", duration: "Never Expires", description: "LinkedIn sets this cookie to remember a user's language setting." },
      { name: "ytidb::LAST_RESULT_ENTRY_KEY", duration: "Never Expires", description: "Used by YouTube to store the last search result entry that was clicked by the user." },
      { name: "yt-player-bandwidth", duration: "Never Expires", description: "Used to store the user's video player preferences and settings, particularly related to bandwidth and streaming quality on YouTube." },
      { name: "yt-remote-session-app", duration: "session", description: "Used by YouTube to store user preferences and information about the interface of the embedded YouTube video player." },
      { name: "yt-remote-cast-installed", duration: "session", description: "Used to store the user's video player preferences using embedded YouTube video." },
      { name: "yt-remote-session-name", duration: "session", description: "Used by YouTube to store the user's video player preferences using embedded YouTube video." },
      { name: "yt-remote-cast-available", duration: "session", description: "Used to store the user's preferences regarding whether casting is available on their YouTube video player." },
      { name: "yt-remote-fast-check-period", duration: "session", description: "Used by YouTube to store the user's video player preferences for embedded YouTube videos." },
      { name: "intercom-id-*", duration: "8 months 26 days 1 hour", description: "Intercom sets this cookie that allows visitors to see any conversations they've had on Intercom websites." },
      { name: "intercom-session-*", duration: "7 days", description: "Intercom sets this cookie that allows visitors to see any conversations they've had on Intercom websites." },
      { name: "intercom-device-id-*", duration: "8 months 26 days 1 hour", description: "Intercom sets this cookie that allows visitors to see any conversations they've had on Intercom websites." },
      { name: "__Secure-ROLLOUT_TOKEN", duration: "6 months", description: "YouTube sets this cookie to manage the phased rollout of new features and updates." },
      { name: "loid", duration: "2 years", description: "This cookie is set by Reddit. The cookie enables the sharing of content from the website onto the social media platform." },
      { name: "__cmpcc", duration: "1 year 1 month", description: "The Consent Manager sets this cookie for website options and services." },
    ],
  },
  {
    id: "analytical", label: "Analytical Cookies", color: "#1d4ed8",
    description: "Analytical cookies are used to understand how visitors interact with the website. These cookies help provide information on metrics such as the number of visitors, bounce rate, traffic source, etc.",
    cookies: [
      { name: "_ga", duration: "1 year 1 month 4 days", description: "Google Analytics sets this cookie to calculate visitor, session and campaign data and track site usage for the site's analytics report." },
      { name: "_hjTLDTest", duration: "session", description: "To determine the most generic cookie path that has to be used instead of the page hostname, Hotjar sets the _hjTLDTest cookie." },
      { name: "_gcl_au", duration: "3 months", description: "Google Tag Manager sets the cookie to experiment advertisement efficiency of websites using their services." },
      { name: "_clck", duration: "1 year", description: "Microsoft Clarity sets this cookie to retain the browser's Clarity User ID and settings exclusive to that website." },
      { name: "_clsk", duration: "1 day", description: "Microsoft Clarity sets this cookie to store and consolidate a user's pageviews into a single session recording." },
      { name: "_ga_*", duration: "1 year 1 month 4 days", description: "Google Analytics sets this cookie to store and count page views." },
      { name: "_hjSessionUser_*", duration: "1 year", description: "Hotjar sets this cookie to ensure data from subsequent visits to the same site is attributed to the same user ID." },
      { name: "_hjSession_*", duration: "1 hour", description: "Hotjar sets this cookie to ensure data from subsequent visits to the same site is attributed to the same user ID." },
      { name: "_cltk", duration: "session", description: "Description is currently not available." },
      { name: "_hjAbsoluteSessionInProgress", duration: "1 day", description: "Hotjar sets this cookie to detect a user's first pageview session." },
      { name: "VISITOR_PRIVACY_METADATA", duration: "6 months", description: "YouTube sets this cookie to store the user's cookie consent state for the current domain." },
      { name: "mp_*_mixpanel", duration: "Never Expires", description: "Mixpanel sets this cookie to determine how users use the website so that a good user experience can be provided." },
      { name: "ajs_group_id", duration: "Never Expires", description: "This cookie is set by Segment to track visitor usage and events within the website." },
      { name: "_pendo_visitorId.*", duration: "Never Expires", description: "Pendo sets this cookie to identify and record the visitor's Account ID that will be used in Pendo, like Guide delivery and analytics." },
      { name: "_pendo_guides_blocked.*", duration: "Never Expires", description: "Pendo sets this cookie to identify and record the visitor's Account ID that will be used in Pendo, like Guide delivery and analytics." },
      { name: "cky_flowId", duration: "Login session", description: "CookieYes sets this cookie for analytics purposes, helping us understand user interactions with the website." },
    ],
  },
  {
    id: "performance", label: "Performance Cookies", color: "#065f46",
    description: "Performance cookies are used to understand and analyse the key performance indexes of the website which helps in delivering a better user experience for the visitors.",
    cookies: [
      { name: "_uetsid", duration: "1 day", description: "Bing Ads sets this cookie to engage with a user that has previously visited the website." },
      { name: "_uetvid", duration: "1 year 24 days", description: "Bing Ads sets this cookie to engage with a user that has previously visited the website." },
    ],
  },
  {
    id: "advertisement", label: "Advertisement Cookies", color: "#6b21a8",
    description: "Advertisement cookies are used to provide visitors with customised advertisements based on the pages you visited previously and to analyse the effectiveness of the ad campaigns.",
    cookies: [
      { name: "YSC", duration: "session", description: "Youtube sets this cookie to track the views of embedded videos on Youtube pages." },
      { name: "VISITOR_INFO1_LIVE", duration: "6 months", description: "YouTube sets this cookie to measure bandwidth, determining whether the user gets the new or old player interface." },
      { name: "test_cookie", duration: "15 minutes", description: "doubleclick.net sets this cookie to determine if the user's browser supports cookies." },
      { name: "yt-remote-device-id", duration: "Never Expires", description: "YouTube sets this cookie to store the user's video preferences using embedded YouTube videos." },
      { name: "yt-remote-connected-devices", duration: "Never Expires", description: "YouTube sets this cookie to store the user's video preferences using embedded YouTube videos." },
      { name: "MUID", duration: "1 year 24 days", description: "Bing sets this cookie to recognise unique web browsers visiting Microsoft sites. This cookie is used for advertising, site analytics, and other operations." },
      { name: "IDE", duration: "1 year 24 days", description: "Google DoubleClick IDE cookies store information about how the user uses the website to present them with relevant ads according to the user profile." },
      { name: "yt.innertube::requests", duration: "Never Expires", description: "YouTube sets this cookie to register a unique ID to store data on what videos from YouTube the user has seen." },
      { name: "yt.innertube::nextId", duration: "Never Expires", description: "YouTube sets this cookie to register a unique ID to store data on what videos from YouTube the user has seen." },
      { name: "token_v2", duration: "1 day", description: "Reddit sets this cookie to track the usage of its services and support personalised ads." },
      { name: "session_tracker", duration: "session", description: "This cookie is set by Reddit. This cookie is used to identify trusted web traffic. It also helps in advertising on the website." },
    ],
  },
];

const tocSections = [
  { id: "what-are-cookies", label: "What are cookies?" },
  { id: "how-we-use", label: "How do we use cookies?" },
  { id: "types", label: "Types of Cookies" },
  { id: "necessary", label: "↳ Necessary" },
  { id: "functional", label: "↳ Functional" },
  { id: "analytical", label: "↳ Analytical" },
  { id: "performance", label: "↳ Performance" },
  { id: "advertisement", label: "↳ Advertisement" },
  { id: "manage", label: "Manage Preferences" },
];

function CookieTable({ cookies }) {
  return (
    <>
      <div className="hidden sm:block overflow-x-auto rounded-xl border border-gray-200 mt-4">
        <table className="w-full text-xs" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              <th className="text-left px-4 py-3 font-semibold text-gray-600 w-1/4">Cookie</th>
              <th className="text-left px-4 py-3 font-semibold text-gray-600 w-1/6">Duration</th>
              <th className="text-left px-4 py-3 font-semibold text-gray-600">Description</th>
            </tr>
          </thead>
          <tbody>
            {cookies.map((c, i) => (
              <tr key={c.name} className={`border-b border-gray-100 last:border-0 ${i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}`}>
                <td className="px-4 py-3 font-mono text-[11px] text-red-800 font-semibold break-all align-top">{c.name}</td>
                <td className="px-4 py-3 text-gray-500 whitespace-nowrap align-top">{c.duration}</td>
                <td className="px-4 py-3 text-gray-600 leading-relaxed align-top">{c.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="sm:hidden mt-4 space-y-3">
        {cookies.map((c) => (
          <div key={c.name} className="bg-gray-50 border border-gray-200 rounded-xl p-4">
            <p className="font-mono text-[11px] text-red-800 font-semibold break-all mb-1">{c.name}</p>
            <span className="inline-block text-[10px] bg-red-100 text-red-700 px-2 py-0.5 rounded-full mb-2">{c.duration}</span>
            <p className="text-xs text-gray-600 leading-relaxed">{c.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}

function CookieCategory({ category }) {
  const [open, setOpen] = useState(true);
  return (
    <div id={category.id} className="scroll-mt-24">
      <button onClick={() => setOpen((o) => !o)} className="w-full flex items-center justify-between text-left">
        <h3 className="text-base font-semibold text-gray-800 flex items-center gap-2" style={{ fontFamily: "'Sora', sans-serif" }}>
          <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ background: category.color }} />
          {category.label}
          <span className="text-xs font-normal text-gray-400 ml-1">({category.cookies.length} cookies)</span>
        </h3>
        <span className="text-gray-400 text-lg transition-transform duration-200" style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}>▾</span>
      </button>
      {open && (
        <div className="mt-3">
          <p className="text-sm text-gray-600 leading-relaxed mb-2">{category.description}</p>
          <CookieTable cookies={category.cookies} />
        </div>
      )}
    </div>
  );
}

export default function CookiePolicy() {
  const [activeSection, setActiveSection] = useState("what-are-cookies");
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
        <div className="relative overflow-hidden" style={{ background: "#8B2626" }}>
          <div className="absolute -top-16 -right-16 w-48 sm:w-72 h-48 sm:h-72 rounded-full bg-white opacity-5" />
          <div className="absolute -bottom-10 -left-10 w-36 sm:w-52 h-36 sm:h-52 rounded-full bg-white opacity-5" />
          <div className="absolute top-1/2 left-1/4 w-64 sm:w-[28rem] h-64 sm:h-[28rem] rounded-full bg-red-400 opacity-10 blur-3xl" />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 py-14 sm:py-20 text-center">
            <p className="text-red-200 text-xs sm:text-sm font-semibold uppercase tracking-widest mb-3" style={{ fontFamily: "'Sora', sans-serif" }}>
              Legal &amp; Compliance
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight" style={{ fontFamily: "'Sora', sans-serif" }}>
              Cookie Policy
            </h1>
            <p className="text-red-100 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              This Cookie Policy explains what cookies are, how we use them, and how you can manage your cookie preferences.
            </p>
        
          </div>
        </div>

        {/* MOBILE TOC */}
        <div className="lg:hidden sticky top-[64px] z-40 bg-white border-b border-gray-200 px-4 py-3">
          <button onClick={() => setTocOpen((o) => !o)} className="flex items-center justify-between w-full text-sm font-semibold text-gray-700" style={{ fontFamily: "'Sora', sans-serif" }}>
            <span>🍪 Jump to Section</span>
            <span className="text-[#8B2626] text-lg leading-none transition-transform duration-200" style={{ transform: tocOpen ? "rotate(180deg)" : "rotate(0deg)" }}>▾</span>
          </button>
          {tocOpen && (
            <nav className="mt-3 flex flex-col gap-1 pb-2">
              {tocSections.map((s) => (
                <button key={s.id} onClick={() => scrollTo(s.id)}
                  className={`text-left text-sm px-3 py-2 rounded-md transition-all ${activeSection === s.id ? "bg-red-50 text-[#8B2626] font-semibold border-l-2 border-[#8B2626]" : "text-gray-600 hover:text-[#8B2626] hover:bg-gray-50"}`}>
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
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4" style={{ fontFamily: "'Sora', sans-serif" }}>Table of Contents</p>
              <nav className="flex flex-col gap-1">
                {tocSections.map((s) => (
                  <button key={s.id} onClick={() => scrollTo(s.id)}
                    className={`text-left text-sm px-3 py-2 rounded-md transition-all ${s.label.startsWith("↳") ? "pl-6" : ""} ${activeSection === s.id ? "bg-red-50 text-[#8B2626] font-semibold border-l-2 border-[#8B2626]" : "text-gray-600 hover:text-[#8B2626] hover:bg-gray-50"}`}>
                    {s.label}
                  </button>
                ))}
              </nav>
              <div className="mt-8 p-4 bg-red-50 border border-red-100 rounded-xl">
                <p className="text-xs font-bold text-[#8B2626] mb-1" style={{ fontFamily: "'Sora', sans-serif" }}>Questions?</p>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Email us at{" "}
                  <a href="mailto:contactus@compucodeltd.com" className="text-[#8B2626] underline break-all">contactus@compucodeltd.com</a>
                </p>
              </div>
            </div>
          </aside>

          {/* MAIN CONTENT */}
          <main className="flex-1 min-w-0 space-y-12 sm:space-y-14">

            <div className="bg-gray-50 border-l-4 border-[#8B2626] rounded-r-xl p-4 sm:p-6">
              <p className="text-gray-700 leading-relaxed text-sm">
                This Cookie Policy explains what cookies are and how we use them, the types of cookies we use, the information we collect using cookies and how that information is used, and how to manage the cookie settings.
              </p>
            </div>

            <PageSection id="what-are-cookies" title="What are cookies?">
              <p className="text-sm text-gray-700 leading-relaxed">
                Cookies are small text files that are used to store small pieces of information. They are stored on your device when the website is loaded on your browser. These cookies help us make the website function properly, make it more secure, provide better user experience, and understand how the website performs and to analyze what works and where it needs improvement.
              </p>
            </PageSection>

            <PageSection id="how-we-use" title="How do we use cookies?">
              <p className="text-sm text-gray-700 leading-relaxed">
                As most of the online services, our website uses first-party and third-party cookies for several purposes. First-party cookies are mostly necessary for the website to function the right way, and they do not collect any of your personally identifiable data.
              </p>
              <p className="mt-3 text-sm text-gray-700 leading-relaxed">
                The third-party cookies used on our website are mainly for understanding how the website performs, how you interact with our website, keeping our services secure, providing advertisements that are relevant to you, and all in all providing you with a better and improved user experience and help speed up your future interactions with our website.
              </p>
            </PageSection>

            <PageSection id="types" title="Types of Cookies we use">
              <div className="flex flex-wrap gap-2 mb-8">
                {cookieCategories.map((cat) => (
                  <button key={cat.id} onClick={() => scrollTo(cat.id)}
                    className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full border transition-all hover:shadow-sm"
                    style={{ borderColor: cat.color + "44", color: cat.color, background: cat.color + "11" }}>
                    <span className="w-2 h-2 rounded-full" style={{ background: cat.color }} />
                    {cat.label}
                    <span className="opacity-60">({cat.cookies.length})</span>
                  </button>
                ))}
              </div>
              <div className="space-y-8">
                {cookieCategories.map((cat) => (
                  <div key={cat.id} className="border border-gray-200 rounded-2xl p-4 sm:p-6">
                    <CookieCategory category={cat} />
                  </div>
                ))}
              </div>
            </PageSection>

            <PageSection id="manage" title="Manage Cookie Preferences">
              <p className="text-sm text-gray-700 leading-relaxed">
                You can change your cookie preferences any time by clicking the button below. This will let you revisit the cookie consent banner and change your preferences or withdraw your consent right away.
              </p>
              <button className="mt-4 inline-flex items-center gap-2 bg-[#8B2626] hover:bg-[#8B2626] text-white text-sm font-medium px-5 py-3 rounded-lg transition-colors">
                🍪 Manage Cookie Preferences
              </button>
              <p className="mt-6 text-sm text-gray-700 leading-relaxed">
                In addition to this, different browsers provide different methods to block and delete cookies. Listed below are the links to the support documents on how to manage and delete cookies from the major web browsers:
              </p>
              <ul className="mt-4 space-y-2">
                {[
                  ["Chrome", "https://support.google.com/accounts/answer/32050"],
                  ["Safari", "https://support.apple.com/en-in/guide/safari/sfri11471/mac"],
                  ["Firefox", "https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox"],
                  ["Internet Explorer", "https://support.microsoft.com/en-us/topic/how-to-delete-cookie-files-in-internet-explorer-bca9446f-d873-78de-77ba-d42645fa52fc"],
                ].map(([name, url]) => (
                  <li key={name} className="flex items-start gap-2 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8B2626] shrink-0 mt-1.5" />
                    <span className="text-gray-700 font-medium w-32 shrink-0">{name}:</span>
                    <a href={url} target="_blank" rel="noreferrer" className="text-[#8B2626] underline hover:text-red-800 break-all text-xs">{url}</a>
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-sm text-gray-500">
                If you are using any other web browser, please visit your browser's official support documents.
              </p>
            </PageSection>

            <div className="border-t border-gray-200 pt-8 text-xs text-gray-400 text-center">
              Cookie Policy Generated By <span className="text-[#8B2626] font-semibold">CookieYes</span> Cookie Policy Generator. © Compucode LTD. All rights reserved.
            </div>
          </main>
        </div>
      </div>

      {/* FOOTER — outside main div, inside fragment */}
      <Footer />
    </>
  );
}

function PageSection({ id, title, children }) {
  return (
    <section id={id} className="scroll-mt-24">
      <div className="flex items-center gap-3 mb-4 sm:mb-5">
        <div className="w-1 h-6 sm:h-7 rounded-full bg-[#8B2626] shrink-0" />
        <h2 className="text-lg sm:text-xl font-bold text-gray-900" style={{ fontFamily: "'Sora', sans-serif" }}>
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
}
