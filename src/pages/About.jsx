import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function About() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 pt-24">
      <div className="max-w-6xl mx-auto px-6 py-20">

        {/* HEADER */}
        <header className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">
            About
          </h1>
          <div className="mt-3 w-12 h-[2px] bg-slate-600" />
        </header>

        {/* CONTENT */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-14 items-start">

          {/* LEFT — TEXT */}
          <div className="max-w-lg space-y-6 text-slate-300 leading-relaxed text-base">
            <p>
              I build production-ready MERN applications with a strong focus on
              backend architecture, authentication flows, and system reliability.
            </p>

            <p>
              My work centers around role-based access control, API design, and
              predictable data flows that scale cleanly as complexity increases.
            </p>

            <p>
              I value clarity, structure, and long-term maintainability over
              shortcuts or visually impressive but fragile implementations.
            </p>
          </div>

          {/* RIGHT — PROFILE CARD */}
          <aside className="w-full max-w-sm bg-slate-900 border border-slate-800 rounded-xl p-6 self-start">
            <div className="space-y-6 text-sm">

              <div>
                <p className="text-slate-500">Name</p>
                <p className="text-white font-medium">Rahin Mon S</p>
              </div>

              <div>
                <p className="text-slate-500">Email</p>
                <p className="text-white break-all">
                  rahin903@gmail.com
                </p>
              </div>

              <div>
                <p className="text-slate-500 mb-3">Profiles</p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://github.com/Rahinmon2903"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-4 py-2
                               border border-slate-700 rounded
                               text-slate-300 hover:text-white
                               hover:border-white transition"
                  >
                    <FaGithub size={14} />
                    GitHub
                  </a>

                  <a
                    href="https://www.linkedin.com/in/rahin-mon-877b2421b/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-4 py-2
                               border border-slate-700 rounded
                               text-slate-300 hover:text-white
                               hover:border-white transition"
                  >
                    <FaLinkedin size={14} />
                    LinkedIn
                  </a>
                </div>
              </div>

            </div>
          </aside>

        </section>

      </div>
    </main>
  );
}
