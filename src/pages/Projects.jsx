import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
  return (
    <main className="min-h-screen bg-black text-white pt-24 animate-fadeIn">
      <div className="max-w-6xl mx-auto px-6 py-24">

        {/* HEADER */}
        <header className="max-w-2xl">
          <h1 className="text-4xl font-semibold tracking-tight">
            Projects
          </h1>
          <p className="mt-4 text-neutral-400 text-lg">
            Real-world, production-style applications focused on backend
            architecture, authentication, and scalable system design.
          </p>
        </header>

        {/* PROJECT LIST */}
        <div className="mt-20 space-y-24">

          {/* PROJECT 1 */}
          <section
            className="border-t border-neutral-800 pt-12 animate-fadeIn"
            style={{ animationDelay: "0.05s" }}
          >
            <h2 className="text-2xl font-medium">
              AI Job Application Intelligence Platform
            </h2>

            <p className="mt-3 text-neutral-400 max-w-2xl">
              An AI-powered system that evaluates resumes against job
              descriptions, generates match scores, and highlights missing
              skills with actionable insights.
            </p>

            <div className="mt-6 grid md:grid-cols-2 gap-10">
              {/* FEATURES */}
              <div>
                <h3 className="text-sm font-medium text-neutral-300 mb-3">
                  Key Features
                </h3>
                <ul className="space-y-2 text-sm text-neutral-400">
                  <li>• Resume text & PDF upload</li>
                  <li>• Job description parsing</li>
                  <li>• AI-based match scoring</li>
                  <li>• Missing skill detection</li>
                  <li>• Analysis history & insights</li>
                </ul>
              </div>

              {/* TECH */}
              <div>
                <h3 className="text-sm font-medium text-neutral-300 mb-3">
                  Tech Stack
                </h3>
                <p className="text-sm text-neutral-400">
                  React, Tailwind CSS, Node.js, Express, MongoDB, JWT,
                  LLM Integration
                </p>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-6">
              <a
                href="https://your-live-link"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-sm underline underline-offset-4"
              >
                <FaExternalLinkAlt size={14} />
                Live Demo
              </a>

              <a
                href="https://github.com/your-repo"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-sm underline underline-offset-4"
              >
                <FaGithub size={14} />
                GitHub
              </a>
            </div>
          </section>

          {/* PROJECT 2 */}
          <section
            className="border-t border-neutral-800 pt-12 animate-fadeIn"
            style={{ animationDelay: "0.1s" }}
          >
            <h2 className="text-2xl font-medium">
              RBAC Management Dashboard
            </h2>

            <p className="mt-3 text-neutral-400 max-w-2xl">
              A role-based access control system designed for enterprise
              workflows, featuring approval pipelines, permissions, and
              secure dashboards.
            </p>

            <div className="mt-6 grid md:grid-cols-2 gap-10">
              <div>
                <h3 className="text-sm font-medium text-neutral-300 mb-3">
                  Key Features
                </h3>
                <ul className="space-y-2 text-sm text-neutral-400">
                  <li>• JWT authentication</li>
                  <li>• Role-based protected routes</li>
                  <li>• Admin / Manager / User dashboards</li>
                  <li>• Request approval workflows</li>
                  <li>• Notification system</li>
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-medium text-neutral-300 mb-3">
                  Tech Stack
                </h3>
                <p className="text-sm text-neutral-400">
                  React, Tailwind CSS, Node.js, Express, MongoDB, JWT
                </p>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-6">
              <a
                href="https://your-live-link"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-sm underline underline-offset-4"
              >
                <FaExternalLinkAlt size={14} />
                Live Demo
              </a>

              <a
                href="https://github.com/your-repo"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-sm underline underline-offset-4"
              >
                <FaGithub size={14} />
                GitHub
              </a>
            </div>
          </section>

          {/* PROJECT 3 */}
          <section
            className="border-t border-neutral-800 pt-12 animate-fadeIn"
            style={{ animationDelay: "0.15s" }}
          >
            <h2 className="text-2xl font-medium">
              MERN E-Commerce Platform
            </h2>

            <p className="mt-3 text-neutral-400 max-w-2xl">
              A full-featured e-commerce application with secure authentication,
              cart workflows, and admin-level product management.
            </p>

            <div className="mt-6 grid md:grid-cols-2 gap-10">
              <div>
                <h3 className="text-sm font-medium text-neutral-300 mb-3">
                  Key Features
                </h3>
                <ul className="space-y-2 text-sm text-neutral-400">
                  <li>• Product & category management</li>
                  <li>• Cart & checkout flow</li>
                  <li>• User authentication</li>
                  <li>• Order history</li>
                  <li>• Admin controls</li>
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-medium text-neutral-300 mb-3">
                  Tech Stack
                </h3>
                <p className="text-sm text-neutral-400">
                  React, Node.js, Express, MongoDB, JWT
                </p>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-6">
              <a
                href="https://your-live-link"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-sm underline underline-offset-4"
              >
                <FaExternalLinkAlt size={14} />
                Live Demo
              </a>

              <a
                href="https://github.com/your-repo"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-sm underline underline-offset-4"
              >
                <FaGithub size={14} />
                GitHub
              </a>
            </div>
          </section>

        </div>
      </div>
    </main>
  );
}
