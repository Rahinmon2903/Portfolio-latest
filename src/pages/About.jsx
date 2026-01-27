export default function About() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="max-w-4xl mx-auto px-6 py-24">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
          About Me
        </h1>

        <p className="mt-8 text-neutral-400 text-base sm:text-lg leading-relaxed">
          I’m a full-stack developer focused on building scalable, secure web
          applications using the MERN stack.
        </p>

        <p className="mt-4 text-neutral-400 text-base sm:text-lg leading-relaxed">
          I enjoy working on backend logic, authentication systems, and
          designing clean, maintainable architectures. I have built
          production-style applications including role-based systems,
          AI-powered tools, and data-driven dashboards.
        </p>

        <p className="mt-4 text-neutral-400 text-base sm:text-lg leading-relaxed">
          My approach emphasizes clarity, security, and real-world usability
          over unnecessary complexity.
        </p>
      </section>
    </main>
  );
}
