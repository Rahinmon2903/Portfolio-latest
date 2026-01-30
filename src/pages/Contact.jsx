import { FaChevronRight, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 pt-16">
      <div className="max-w-4xl mx-auto px-6 py-20">

        {/* TITLE */}
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-12">
          Contact
        </h1>

        {/* TERMINAL BLOCK */}
        <div className="border border-slate-800 rounded-xl p-8 bg-slate-900/40 font-mono text-sm">

          {/* AVAILABILITY */}
          <div className="flex gap-3 mb-6">
            <FaChevronRight className="text-slate-500 mt-1" />
            <div>
              <p className="text-slate-400">availability</p>
              <p className="text-white">
                open to full-time · freelance · contract
              </p>
            </div>
          </div>

          {/* EMAIL */}
          <div className="flex gap-3 mb-6">
            <FaEnvelope className="text-slate-500 mt-1" />
            <div>
              <p className="text-slate-400">email</p>
              <a
                href="mailto:rahin2903@gmail.com"
                className="text-white hover:underline"
              >
                rahin2903@gmail.com
              </a>
            </div>
          </div>

          {/* GITHUB */}
          <div className="flex gap-3 mb-6">
            <FaGithub className="text-slate-500 mt-1" />
            <div>
              <p className="text-slate-400">github</p>
              <a
                href="https://github.com/Rahinmon2903"
                target="_blank"
                rel="noreferrer"
                className="text-white hover:underline"
              >
               https://github.com/Rahinmon2903
              </a>
            </div>
          </div>

          {/* LINKEDIN */}
          <div className="flex gap-3">
            <FaLinkedin className="text-slate-500 mt-1" />
            <div>
              <p className="text-slate-400">linkedin</p>
              <a
                href="https://www.linkedin.com/in/rahin-mon-877b2421b/"
                target="_blank"
                rel="noreferrer"
                className="text-white hover:underline"
              >
                https://www.linkedin.com/in/rahin-mon-877b2421b/
              </a>
            </div>
          </div>

        </div>

      </div>
    </main>
  );
}
