export default function Contact() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 pt-16">
      <div className="max-w-3xl mx-auto px-6 py-24">

        {/* HEADER */}
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">
          Contact
        </h1>

        <p className="mt-6 text-slate-400 text-lg leading-relaxed max-w-xl">
          If you’d like to discuss an opportunity, collaboration, or project,
          feel free to reach out directly.
        </p>

        {/* CONTACT INFO */}
        <div className="mt-12 space-y-4 text-base">
          <p>
            <span className="text-slate-500">Email</span><br />
            <a
              href="mailto:rahinmon@gmail.com"
              className="text-white hover:underline"
            >
              rahinmon@gmail.com
            </a>
          </p>

          <p>
            <span className="text-slate-500">GitHub</span><br />
            <a
              href="https://github.com/your-github"
              target="_blank"
              rel="noreferrer"
              className="text-white hover:underline"
            >
              github.com/your-github
            </a>
          </p>

          <p>
            <span className="text-slate-500">LinkedIn</span><br />
            <a
              href="https://linkedin.com/in/your-linkedin"
              target="_blank"
              rel="noreferrer"
              className="text-white hover:underline"
            >
              linkedin.com/in/your-linkedin
            </a>
          </p>
        </div>

      </div>
    </main>
  );
}
