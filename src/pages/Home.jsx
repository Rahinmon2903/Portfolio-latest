import { FaGithub, FaLinkedin, FaArrowRight } from "react-icons/fa";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white pt-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* HERO */}
        <section className="grid md:grid-cols-2 gap-24 items-center min-h-[70vh]">

          {/* LEFT */}
          <div>
            <span className="inline-block text-xs tracking-[0.3em] text-neutral-500 uppercase">
              MERN Full Stack Developer
            </span>

            <h1 className="mt-6 text-5xl md:text-6xl font-semibold tracking-tight">
              Rahin <span className="text-neutral-400">Mon S</span>
            </h1>

            <p className="mt-8 text-neutral-400 max-w-md leading-relaxed">
              I design and build secure, production-grade web applications with
              a strong focus on backend architecture, RBAC systems, and
              AI-powered platforms.
            </p>

            {/* CTA */}
            <div className="mt-12 flex flex-wrap items-center gap-5">
              <a
                href="/projects"
                className="group inline-flex items-center gap-3
                           bg-white text-black px-6 py-3 text-sm font-medium
                           hover:bg-neutral-200 transition"
              >
                View Projects
                <FaArrowRight
                  className="group-hover:translate-x-1 transition"
                  size={12}
                />
              </a>

              <a
                href="/Rahin_Mon_S_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 text-sm
                           border border-neutral-700
                           hover:border-white transition"
              >
                Resume
              </a>

              <div className="flex gap-4 ml-1">
                <a
                  href="https://github.com/Rahinmon2903"
                  target="_blank"
                  rel="noreferrer"
                  className="text-neutral-400 hover:text-white transition"
                >
                  <FaGithub size={18} />
                </a>

                <a
                  href="https://www.linkedin.com/in/rahin-mon-877b2421b/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-neutral-400 hover:text-white transition"
                >
                  <FaLinkedin size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex justify-center md:justify-end">
            <div className="relative group">
              <div
                className="absolute -inset-1 rounded-full
                           bg-white/10 blur-2xl opacity-0
                           group-hover:opacity-100 transition"
              />

              <img
                src="/profile.jpg"
                alt="Rahin Mon S"
                className="relative w-60 h-60 rounded-full
                           border border-neutral-800 object-cover
                           group-hover:border-white transition"
              />
            </div>
          </div>

        </section>

        {/* PROOF STRIP */}
        <section className="mt-20 border-t border-neutral-800 pt-10 animate-fadeIn">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm text-neutral-400">

            <div>
              <p className="text-white font-medium text-lg">3+</p>
              <p className="mt-1">Production Projects</p>
            </div>

            <div>
              <p className="text-white font-medium text-lg">RBAC</p>
              <p className="mt-1">Auth & Permissions</p>
            </div>

            <div>
              <p className="text-white font-medium text-lg">AI</p>
              <p className="mt-1">Resume Intelligence</p>
            </div>

            <div>
              <p className="text-white font-medium text-lg">MERN</p>
              <p className="mt-1">End-to-End Systems</p>
            </div>

          </div>
        </section>

      </div>
    </main>
  );
}
