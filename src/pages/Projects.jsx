import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel } from "swiper/modules";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import "swiper/css";
import "swiper/css/pagination";

const projects = [
  {
    title: "AI Job Application Intelligence Platform",
    image:
      "https://dummyimage.com/2400x1400/0f172a/ffffff&text=AI+Resume+Intelligence",
    description:
      "A full-stack AI-driven platform that analyzes resumes against job descriptions, performs skill-gap detection, generates match scores, and provides actionable insights. Designed with secure authentication, scalable APIs, and modular backend logic.",
    tech:
      "React, Tailwind CSS, Node.js, Express, MongoDB, JWT Authentication, LLM Integration, REST APIs",
    live: "https://ai-job-intel-frontend.vercel.app/",
    frontend: "https://github.com/Rahinmon2903/ai-job-intel-frontend",
    backend: "https://github.com/Rahinmon2903/AI-Job-Application-BackEnd"
  },
  {
    title: "RBAC Management Dashboard",
    image:
      "https://dummyimage.com/2400x1400/020617/ffffff&text=RBAC+Dashboard",
    description:
      "An enterprise-style role-based access control system supporting multi-role dashboards, protected routes, approval workflows, and permission-driven feature access with a strong emphasis on authorization logic.",
    tech:
      "React, Tailwind CSS, Node.js, Express, MongoDB, JWT, Role-Based Access Control, Middleware",
    live: "https://saas-role-front-b3o9y2fsp-rahin-mon-ss-projects.vercel.app/",
    frontend: "https://github.com/Rahinmon2903/saas-role-front-end",
    backend: "https://github.com/Rahinmon2903/saas-role-backend"
  },
  {
    title: "MERN E-Commerce Platform",
    image:
      "https://dummyimage.com/2400x1400/020617/ffffff&text=MERN+E-Commerce",
    description:
      "A production-ready e-commerce application featuring secure authentication, product and category management, cart workflows, order tracking, and admin-level controls built on scalable backend APIs.",
    tech:
      "React, Node.js, Express, MongoDB, JWT Authentication, REST APIs, MVC Architecture",
    live: "https://ecommerce-front-end-rtyf.vercel.app/",
    frontend: "https://github.com/Rahinmon2903/ecommerce_frontEnd",
    backend: "https://github.com/Rahinmon2903/ecommerce-backEnd"
  },
  {
    title: "CineVerse (Frontend)",
    image:
      "https://dummyimage.com/2400x1400/0f172a/ffffff&text=CineVerse+Movie+App",
    description:
      "A modern movie discovery and review application with real-time search, dynamic filtering, detailed movie pages, and persistent user ratings focused on responsive UI and smooth interactions.",
    tech:
      "React, Tailwind CSS, Axios, React Router, OMDb API, LocalStorage",
    live: "https://moviereview-project.vercel.app/",
    frontend: "https://github.com/Rahinmon2903/Moviereview-project"
  },
  {
    title: "Invoice Management System",
    image:
      "https://dummyimage.com/2400x1400/020617/ffffff&text=Invoice+Builder",
    description:
      "A clean invoice management system allowing users to create, edit, view, and export invoices as PDFs with automatic calculations and browser-based persistent storage.",
    tech:
      "React, Vite, Tailwind CSS, html2pdf.js, LocalStorage, Component-Based Architecture",
    live: "https://invoice-builder-project.vercel.app/",
    frontend: "https://github.com/Rahinmon2903/invoice-builder-project"
  }
];

export default function Projects() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 pt-16">
      <div className="max-w-7xl mx-auto px-6 py-20">

        {/* HEADER */}
        <header className="mb-12 max-w-2xl">
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">
            Projects
          </h1>
          <p className="mt-4 text-slate-400 text-lg leading-relaxed">
            Selected projects showcasing full-stack system design and frontend
            architecture. Swipe to explore.
          </p>
        </header>

        {/* SWIPER */}
        <Swiper
          modules={[Pagination, Mousewheel]}
          spaceBetween={36}
          slidesPerView={1.05}
          pagination={{ clickable: true }}
          mousewheel={{ forceToAxis: true }}
          breakpoints={{
            640: { slidesPerView: 1.25 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 2.6 }
          }}
        >
          {projects.map((p, i) => (
            <SwiperSlide key={i}>
              <article className="flex flex-col gap-5">

                {/* IMAGE */}
                <div className="aspect-[16/9] rounded-xl overflow-hidden bg-slate-800">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* CONTENT */}
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold tracking-tight">
                    {p.title}
                  </h3>

                  <p className="text-slate-400 text-sm leading-relaxed max-w-md">
                    {p.description}
                  </p>

                  <p className="text-xs text-slate-500 leading-relaxed">
                    {p.tech}
                  </p>

                  {/* ACTIONS */}
                  <div className="flex flex-wrap gap-3 pt-2">
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm
                                 px-4 py-2 rounded-full
                                 border border-slate-700
                                 hover:border-white hover:text-white
                                 transition-colors"
                    >
                      <FaExternalLinkAlt size={12} />
                      Live
                    </a>

                    {p.frontend && (
                      <a
                        href={p.frontend}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-sm
                                   px-4 py-2 rounded-full
                                   border border-slate-700
                                   hover:border-white hover:text-white
                                   transition-colors"
                      >
                        <FaGithub size={12} />
                        Frontend
                      </a>
                    )}

                    {p.backend && (
                      <a
                        href={p.backend}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-sm
                                   px-4 py-2 rounded-full
                                   border border-slate-700
                                   hover:border-white hover:text-white
                                   transition-colors"
                      >
                        <FaGithub size={12} />
                        Backend
                      </a>
                    )}
                  </div>
                </div>

              </article>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </main>
  );
}
