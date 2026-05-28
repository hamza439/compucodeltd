import { useState } from "react";
import { Mail, Building, Facebook, Twitter, Linkedin, MessageCircle } from "lucide-react";

export default function ContactUs() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-white">

      {/* Page Header */}
      <div className="w-full py-20 flex items-center justify-center bg-gradient-to-r from-black via-red-950 to-black">
        <div className="text-center">
          <p className="text-xs uppercase tracking-widest text-red-400 mb-3">
            Get In Touch
          </p>
          <h1 className="text-5xl font-bold text-white">Contact Us</h1>
          <div className="mx-auto mt-4 w-16 h-1 bg-red-600 rounded-full" />
        </div>
      </div>

      {/* Contact Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-12 gap-10">

          {/* FORM */}
          <div className="lg:col-span-7">
            <div className="bg-white shadow-lg p-8">
              <h4 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <Mail size={20} /> Send us a message
              </h4>

              <form
                action="https://docs.google.com/forms/u/2/d/e/1FAIpQLScmF5Pc4tAZgotEd1coUgcZ0EPTONqH607HfsRABsVr5h4uCw/formResponse"
                method="post"
                target="hidden_iframe"
                onSubmit={() => setSubmitted(true)}
                className="space-y-4"
              >
                <input
                  name="entry.509998442"
                  placeholder="Full Name"
                  required
                  className="w-full border p-3 rounded"
                />

                <input
                  name="entry.1917110544"
                  placeholder="Email Address"
                  required
                  className="w-full border p-3 rounded"
                />

                <input
                  name="entry.1436660642"
                  placeholder="Telephone"
                  required
                  className="w-full border p-3 rounded"
                />

                <textarea
                  name="entry.64075593"
                  placeholder="Message"
                  required
                  className="w-full border p-3 rounded h-32"
                />

                <button
                  type="submit"
                  className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded"
                >
                  Send Message
                </button>
              </form>

              <iframe name="hidden_iframe" className="hidden" />

              {submitted && (
                <p className="text-green-600 mt-4">
                  Message sent successfully!
                </p>
              )}
            </div>
          </div>

          {/* INFO */}
          <div className="lg:col-span-5">
            <div className="bg-white shadow-lg p-8">
              <h4 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <Building size={20} /> Corporate Info
              </h4>

              <p className="font-semibold">Offices</p>
              <p className="text-gray-600 mb-3">
                29 Lekki County Estate Road, Lagos, Nigeria
              </p>
              <p className="text-gray-600">
                85 Great Portland Street, London, UK
              </p>

              <hr className="my-4" />

              <p className="font-semibold">Email</p>
              <p className="text-gray-600">contactus@compucodeltd.com</p>

              <hr className="my-4" />

              <p className="font-semibold mb-3">Follow Us</p>
              <div className="flex gap-4 text-gray-500">
                <a href="#" className="hover:text-blue-600"><Facebook /></a>
                <a href="#" className="hover:text-sky-500"><Twitter /></a>
                <a href="#" className="hover:text-blue-700"><Linkedin /></a>
                <a href="#" className="hover:text-green-600"><MessageCircle /></a>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}