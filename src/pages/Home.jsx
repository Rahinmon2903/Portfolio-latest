import { FaGithub, FaLinkedin, FaArrowRight } from "react-icons/fa";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 pt-24">
      <div className="max-w-6xl mx-auto px-6">

        <section className="flex flex-col-reverse md:grid md:grid-cols-2 gap-16 items-center min-h-[70vh]">

          {/* TEXT */}
          <div className="w-full">
            <span className="text-xs tracking-[0.3em] text-slate-400 uppercase">
              Full Stack MERN Developer
            </span>

            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight">
              Rahin <span className="text-slate-400">Mon S</span>
            </h1>

            <p className="mt-6 text-slate-300 max-w-md leading-relaxed">
              I build secure, production-ready MERN applications focused on
              backend architecture, authentication, and RBAC systems.
            </p>

            {/* CTA */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="/projects"
                className="inline-flex items-center gap-3
                           bg-slate-100 text-slate-900
                           px-6 py-3 text-sm font-medium
                           hover:bg-white transition"
              >
                View Projects
                <FaArrowRight size={12} />
              </a>

              <a
                href="https://github.com/Rahinmon2903"
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 hover:text-white transition"
              >
                <FaGithub size={18} />
              </a>

              <a
                href="https://www.linkedin.com/in/rahin-mon-877b2421b/"
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 hover:text-white transition"
              >
                <FaLinkedin size={18} />
              </a>
            </div>
          </div>

          {/* IMAGE */}
          <div className="w-full flex justify-center md:justify-end">
            <img
              src="/profile.jpg"
              alt="Rahin Mon S"
              className="w-44 h-44 sm:w-52 sm:h-52 md:w-60 md:h-60
                         rounded-full border border-slate-800 object-cover"
            />
          </div>

        </section>

      </div>
    </main>
  );
}

