import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaLock,
  FaTools,
  FaServer
} from "react-icons/fa";

export default function Skills() {
  const skills = [
    {
      title: "Frontend Development",
      icon: <FaReact />,
      items: [
        "HTML",
        "CSS",
        "JavaScript (ES6+)",
        "React",
        "Tailwind CSS",
        "Responsive UI"
      ]
    },
    {
      title: "Backend Development",
      icon: <FaServer />,
      items: [
        "Node.js",
        "Express.js",
        "REST APIs",
        "Middleware Design"
      ]
    },
    {
      title: "Authentication & Security",
      icon: <FaLock />,
      items: [
        "JWT Authentication",
        "Role-Based Access Control (RBAC)",
        "bcrypt",
        "Protected Routes"
      ]
    },
    {
      title: "Database & Data",
      icon: <FaDatabase />,
      items: [
        "MongoDB",
        "Mongoose",
        "MySQL",
        "Schema Design",
        "Indexing"
      ]
    },
    {
      title: "System Architecture",
      icon: <FaTools />,
      items: [
        "MVC Pattern",
        "API Design",
        "Scalable Structure"
      ]
    },
    {
      title: "Tooling & Data Visualization",
      icon: <FaNodeJs />,
      items: [
        "Git & GitHub",
        "Vercel",
        "Render",
        "Power BI",
        "Environment Management"
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 pt-16">
      <div className="max-w-7xl mx-auto px-6 py-20">

        {/* HEADER */}
        <header className="text-center max-w-2xl mx-auto mb-20">
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">
            What I Do
          </h1>
          <p className="mt-4 text-slate-400 text-lg leading-relaxed">
            My technical skill set and focus areas for building secure,
            scalable full-stack applications and working with data-driven tools.
          </p>
        </header>

        {/* SKILLS GRID */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className="group rounded-2xl p-8
                         bg-slate-900/60
                         border border-slate-800
                         hover:border-slate-600
                         transition-colors"
            >
              {/* ICON */}
              <div className="mb-5 text-slate-300 group-hover:text-white transition-colors">
                <div className="w-12 h-12 rounded-xl
                                bg-slate-800
                                flex items-center justify-center
                                text-xl">
                  {skill.icon}
                </div>
              </div>

              {/* TITLE */}
              <h3 className="text-lg font-medium mb-4 tracking-tight">
                {skill.title}
              </h3>

              {/* ITEMS */}
              <ul className="space-y-2 text-sm text-slate-400">
                {skill.items.map((item) => (
                  <li key={item} className="leading-relaxed">
                    • {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

      </div>
    </main>
  );
}
