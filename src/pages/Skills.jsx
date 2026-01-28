export default function Skills() {
  const sections = [
    {
      title: "Frontend",
      skills: [
        "React",
        "JavaScript (ES6+)",
        "Tailwind CSS",
        "Responsive UI",
        "Component Architecture"
      ]
    },
    {
      title: "Backend",
      skills: [
        "Node.js",
        "Express.js",
        "REST APIs",
        "MVC Architecture",
        "Middleware Design"
      ]
    },
    {
      title: "Database",
      skills: [
        "MongoDB",
        "Mongoose",
        "Schema Design",
        "Indexing",
        "Data Validation"
      ]
    },
    {
      title: "Authentication & Security",
      skills: [
        "JWT Authentication",
        "Role-Based Access Control (RBAC)",
        "Password Hashing (bcrypt)",
        "Protected Routes",
        "Secure Token Flows"
      ]
    },
    {
      title: "Tools & Deployment",
      skills: [
        "Git & GitHub",
        "Vercel",
        "Render",
        "Environment Variables",
        "API Testing"
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-black text-white pt-24 animate-fadeIn">
      <div className="max-w-6xl mx-auto px-6 py-24">

        {/* HEADER */}
        <header className="max-w-2xl">
          <h1 className="text-4xl font-semibold tracking-tight">
            Skills & Expertise
          </h1>
          <p className="mt-4 text-neutral-400 text-lg">
            Technologies and engineering practices I use to build
            production-ready web applications.
          </p>
        </header>

        {/* SKILL SECTIONS */}
        <div className="mt-20 space-y-16">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-xl font-medium mb-6">
                {section.title}
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {section.skills.map((skill) => (
                  <div
                    key={skill}
                    className="border border-neutral-800 px-4 py-3 text-sm
                               hover:border-white transition"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

      </div>
    </main>
  );
}
