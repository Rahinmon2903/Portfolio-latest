import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* LEFT — CONTENT */}
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
              Rahin Mon S
            </h1>

            <p className="mt-4 text-neutral-400 text-base sm:text-lg leading-relaxed max-w-md">
              Full-Stack MERN Developer building secure, scalable web
              applications with authentication, RBAC, and AI integrations.
            </p>

            {/* LINKS */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="https://github.com/your-github-username"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition"
              >
                <FaGithub size={18} />
                GitHub
              </a>

              <a
                href="https://linkedin.com/in/your-linkedin"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition"
              >
                <FaLinkedin size={18} />
                LinkedIn
              </a>

              <a
                href="/Rahin_Mon_S_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="text-sm border border-neutral-700 px-4 py-2
                           hover:border-white transition"
              >
                View Resume
              </a>
            </div>
          </div>

          {/* RIGHT — PHOTO */}
          <div className="flex justify-center md:justify-end">
            <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full overflow-hidden border border-neutral-800">
              <img
                src="/profile.png"
                alt="Rahin Mon S"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
