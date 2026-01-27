export default function Skills() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* HEADER */}
      <section className="border-b border-neutral-800">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <p className="text-xs tracking-[0.3em] uppercase text-neutral-500">
            Skills
          </p>

          <h1 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight">
            Technical Expertise
          </h1>

          <p className="mt-6 text-lg text-neutral-400 max-w-2xl">
            Technologies and systems I use to build scalable, secure,
            production-ready web applications.
          </p>
        </div>
      </section>

      {/* SKILLS GRID */}
      <section>
        <div className="max-w-6xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">
          
          {/* FRONTEND */}
          <div>
            <h2 className="text-lg font-medium mb-6">
              Frontend Development
            </h2>

            <ul className="space-y-3 text-sm text-neutral-400">
              <li>React (Hooks, SPA Architecture)</li>
              <li>Tailwind CSS (Responsive UI)</li>
              <li>React Router (Client-side Routing)</li>
              <li>Axios (API Integration)</li>
              <li>Reusable Component Design</li>
            </ul>
          </div>

          {/* BACKEND */}
          <div>
            <h2 className="text-lg font-medium mb-6">
              Backend Development
            </h2>

            <ul className="space-y-3 text-sm text-neutral-400">
              <li>Node.js</li>
              <li>Express.js</li>
              <li>REST API Design</li>
              <li>JWT Authentication</li>
              <li>bcrypt Password Hashing</li>
              <li>Middleware-based Architecture</li>
            </ul>
          </div>

          {/* DATABASE */}
          <div>
            <h2 className="text-lg font-medium mb-6">
              Database & Storage
            </h2>

            <ul className="space-y-3 text-sm text-neutral-400">
              <li>MongoDB</li>
              <li>Mongoose ODM</li>
              <li>Schema Design</li>
              <li>Indexing & Query Optimization</li>
              <li>Data Relationships</li>
            </ul>
          </div>

          {/* AUTH & SECURITY */}
          <div>
            <h2 className="text-lg font-medium mb-6">
              Authentication & Security
            </h2>

            <ul className="space-y-3 text-sm text-neutral-400">
              <li>Role-Based Access Control (RBAC)</li>
              <li>Protected Routes</li>
              <li>Secure Password Reset Flow</li>
              <li>Token-based Authorization</li>
              <li>Secure API Access</li>
            </ul>
          </div>

          {/* AI & AUTOMATION */}
          <div>
            <h2 className="text-lg font-medium mb-6">
              AI & Automation
            </h2>

            <ul className="space-y-3 text-sm text-neutral-400">
              <li>LLM Integration (Groq / LLaMA)</li>
              <li>Resume Parsing & Skill Extraction</li>
              <li>Job Description Analysis</li>
              <li>Match Scoring Logic</li>
              <li>Insight Generation</li>
            </ul>
          </div>

          {/* TOOLS */}
          <div>
            <h2 className="text-lg font-medium mb-6">
              Tools & Workflow
            </h2>

            <ul className="space-y-3 text-sm text-neutral-400">
              <li>Git & GitHub</li>
              <li>Vite</li>
              <li>Postman</li>
              <li>Environment Variables</li>
              <li>Deployment (Vercel / Render)</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
