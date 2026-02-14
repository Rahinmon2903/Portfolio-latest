import { FaGithub, FaLinkedin } from "react-icons/fa";
import PageTransition from "../components/PageTransition";

import profileImage from "../assets/profile1.png";

export default function Home() {
  return (
    <PageTransition>
      <section
    id="home"
    className="min-h-screen bg-slate-950 text-slate-100 pt-16"
  >
        <div className="page-container">

          <section className="flex flex-col-reverse md:grid md:grid-cols-2 gap-20 items-center min-h-[70vh]">

            {/* LEFT — TEXT */}
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
              <div className="mt-10 flex items-center gap-6">
                <a
                  href="/Rahin_Mon_S_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3
                             bg-slate-100 text-slate-900
                             px-6 py-3 text-sm font-medium
                             hover:bg-white transition"
                >
                  View Resume
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

            {/* RIGHT — IMAGE */}
            <div className="w-full flex justify-center md:justify-end">
              <div
                className="
                  w-80 h-80
                  sm:w-96 sm:h-96
                  rounded-full overflow-hidden
                  border border-slate-700
                  bg-white
                "
              >
                <img
                  src={profileImage}
                  alt="Rahin Mon S"
                  className="
                    w-full h-full
                    object-cover
                    object-[50%_16%]
                  "
                />
              </div>
            </div>

          </section>

        </div>
      </section>
    </PageTransition>
  );
}
