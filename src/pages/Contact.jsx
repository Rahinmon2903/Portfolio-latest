import { useState } from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import PageTransition from "../components/PageTransition";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <PageTransition>
     <section
  id="contact"
  className="min-h-screen bg-slate-950 text-slate-100 pt-16"
>

        <div className="page-container">

          {/* HEADER */}
          <header className="mb-16">
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">
              Get In Touch
            </h1>
            <div className="mt-3 w-16 h-[2px] bg-slate-600" />
          </header>

          {/* TWO COLUMN LAYOUT */}
          <section className="grid md:grid-cols-2 gap-16">

            {/* LEFT PANEL */}
            <div className="space-y-8">

              <div>
                <h2 className="text-xl font-medium mb-2">
                  Let’s Work Together
                </h2>
                <p className="text-slate-400 leading-relaxed">
                  I'm always interested in meaningful projects, backend-heavy
                  systems, and engineering-focused opportunities.
                </p>
              </div>

              {/* CONTACT ITEMS */}
              <div className="space-y-4 text-sm">

                <div className="flex items-center gap-3">
                  <FaEnvelope className="text-slate-500" />
                  <a
                    href="mailto:rahin2903@gmail.com"
                    className="text-slate-300 hover:text-white transition"
                  >
                    rahin2903@gmail.com
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <FaGithub className="text-slate-500" />
                  <a
                    href="https://github.com/Rahinmon2903"
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-300 hover:text-white transition"
                  >
                    github.com/Rahinmon2903
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <FaLinkedin className="text-slate-500" />
                  <a
                    href="https://www.linkedin.com/in/rahin-mon-877b2421b/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-300 hover:text-white transition"
                  >
                    linkedin.com/in/rahin-mon
                  </a>
                </div>

              </div>
            </div>

            {/* RIGHT PANEL – FORM CARD */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">

              <h3 className="text-lg font-medium mb-6">
                Send Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">

                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full bg-slate-950 border border-slate-800 rounded px-4 py-3 text-sm focus:outline-none focus:border-slate-600"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full bg-slate-950 border border-slate-800 rounded px-4 py-3 text-sm focus:outline-none focus:border-slate-600"
                />

                <textarea
                  rows="4"
                  name="message"
                  placeholder="Message"
                  value={form.message}
                  onChange={handleChange}
                  className="w-full bg-slate-950 border border-slate-800 rounded px-4 py-3 text-sm focus:outline-none focus:border-slate-600"
                />

                <button
                  type="submit"
                  className="w-full bg-slate-100 text-slate-900 py-3 text-sm font-medium hover:bg-white transition"
                >
                  Send Message
                </button>

              </form>
            </div>

          </section>
        </div>
      </section>
    </PageTransition>
  );
}
