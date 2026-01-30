import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import "swiper/css";
import "swiper/css/pagination";

import PageTransition from "../components/PageTransition";

const projects = [
  {
    title: "AI Job Application Intelligence Platform",
    image:
      "https://dummyimage.com/2400x1400/0f172a/ffffff&text=AI+Resume+Intelligence",
    description:
      "A full-stack AI-driven platform that analyzes resumes against job descriptions, performs skill-gap detection, and generates match scores.",
    tech:
      "React, Tailwind CSS, Node.js, Express, MongoDB, JWT, LLM Integration",
    live: "https://ai-job-intel-frontend.vercel.app/",
    frontend: "https://github.com/Rahinmon2903/ai-job-intel-frontend",
    backend: "https://github.com/Rahinmon2903/AI-Job-Application-BackEnd"
  },
  {
    title: "RBAC Management Dashboard",
    image:
      "https://dummyimage.com/2400x1400/020617/ffffff&text=RBAC+Dashboard",
    description:
      "Enterprise-style role-based access control system with protected routes.",
    tech:
      "React, Node.js, Express, MongoDB, JWT, RBAC",
    live: "https://saas-role-front-b3o9y2fsp-rahin-mon-ss-projects.vercel.app/",
    frontend: "https://github.com/Rahinmon2903/saas-role-front-end",
    backend: "https://github.com/Rahinmon2903/saas-role-backend"
  },
  {
    title: "MERN E-Commerce Platform",
    image:
      "https://dummyimage.com/2400x1400/020617/ffffff&text=MERN+E-Commerce",
    description:
      "Production-ready e-commerce app with cart, orders, and admin control.",
    tech:
      "React, Node.js, Express, MongoDB, JWT",
    live: "https://ecommerce-front-end-rtyf.vercel.app/",
    frontend: "https://github.com/Rahinmon2903/ecommerce_frontEnd",
    backend: "https://github.com/Rahinmon2903/ecommerce-backEnd"
  },
  {
    title: "CineVerse (Frontend)",
    image:
      "https://dummyimage.com/2400x1400/0f172a/ffffff&text=CineVerse",
    description:
      "Movie discovery app with real-time search and filtering.",
    tech:
      "React, Tailwind CSS, Axios, OMDb API",
    live: "https://moviereview-project.vercel.app/",
    frontend: "https://github.com/Rahinmon2903/Moviereview-project"
  },
  {
    title: "Invoice Management System",
    image:
      "https://dummyimage.com/2400x1400/020617/ffffff&text=Invoice+Builder",
    description:
      "Invoice system with PDF export and local persistence.",
    tech:
      "React, Vite, Tailwind CSS, html2pdf.js",
    live: "https://invoice-builder-project.vercel.app/",
    frontend: "https://github.com/Rahinmon2903/invoice-builder-project"
  }
];

export default function Projects() {
  const openLink = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <PageTransition>
      <main className="min-h-screen bg-slate-950 text-slate-100 pt-16">
        <div className="max-w-7xl mx-auto px-6 py-20">

          {/* HEADER */}
          <header className="mb-12 max-w-2xl">
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">
              Projects
            </h1>
            <p className="mt-4 text-slate-400 text-lg">
              Selected work — swipe to explore.
            </p>
          </header>

          {/* SWIPER */}
          <Swiper
            modules={[Pagination]}
            slidesPerView="auto"
            spaceBetween={32}
            pagination={{ clickable: true }}
            className="!overflow-visible"
          >
            {projects.map((p, i) => (
              <SwiperSlide
                key={i}
                className="!w-[320px] sm:!w-[380px] lg:!w-[420px]"
              >
                <article className="flex flex-col gap-5
                                    bg-slate-900 border border-slate-800
                                    rounded-2xl p-5">

                  <div className="aspect-[16/9] rounded-xl overflow-hidden bg-slate-800">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold">
                      {p.title}
                    </h3>

                    <p className="text-slate-400 text-sm">
                      {p.description}
                    </p>

                    <p className="text-xs text-slate-500">
                      {p.tech}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-2">
                      <button
                        onClick={() => openLink(p.live)}
                        className="inline-flex items-center gap-2 text-sm
                                   px-3 py-2 rounded-full
                                   border border-slate-700
                                   hover:border-white hover:text-white"
                      >
                        <FaExternalLinkAlt size={12} />
                        Live
                      </button>

                      {p.frontend && (
                        <button
                          onClick={() => openLink(p.frontend)}
                          className="inline-flex items-center gap-2 text-sm
                                     px-3 py-2 rounded-full
                                     border border-slate-700
                                     hover:border-white hover:text-white"
                        >
                          <FaGithub size={12} />
                          Frontend
                        </button>
                      )}

                      {p.backend && (
                        <button
                          onClick={() => openLink(p.backend)}
                          className="inline-flex items-center gap-2 text-sm
                                     px-3 py-2 rounded-full
                                     border border-slate-700
                                     hover:border-white hover:text-white"
                        >
                          <FaGithub size={12} />
                          Backend
                        </button>
                      )}
                    </div>
                  </div>

                </article>
              </SwiperSlide>
            ))}
          </Swiper>

        </div>
      </main>
    </PageTransition>
  );
}
