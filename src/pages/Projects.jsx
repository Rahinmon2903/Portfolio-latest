import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import "swiper/css";
import "swiper/css/navigation";

import PageTransition from "../components/PageTransition";

const projects = [
  {
    title: "Resume Intelligence Platform",
    image:
      "https://dummyimage.com/2400x1400/020617/ffffff&text=Resume+Intelligence",
    description:
      "A full-stack AI-powered platform designed to analyze resume compatibility with job descriptions. The system performs resume parsing (PDF/Text), AI-driven skill extraction, structured requirement analysis, match score computation, and missing skill detection. It includes secure JWT authentication, protected dashboards, analysis history tracking, and skill gap insights. The backend integrates Groq AI to transform resume and job data into structured JSON for consistent comparison workflows.",
    tech:
      "React, Node.js, Express, MongoDB, JWT, Groq AI,pdfParse",
    live:
      "https://ai-job-intel-frontend.vercel.app/",
    frontend:
      "https://github.com/Rahinmon2903/ai-job-intel-frontend",
    backend:
      "https://github.com/Rahinmon2903/AI-Job-Application-BackEnd"
  },

  {
    title: "Enterprise Access Management Platform",
    image:
      "https://dummyimage.com/2400x1400/020617/ffffff&text=Access+Management",
    description:
      "A full-stack SaaS-style request and approval system built with JWT authentication and Role-Based Access Control (RBAC). The platform models real-world organizational workflows by enabling users to generate requests, managers to process role-scoped approvals, and admins to control assignments, roles, and workload balancing. The system maintains request history for auditability and delivers contextual feedback through in-app notifications. Backend-enforced authorization safeguards business rules, access boundaries, and cross-role data isolation.",
    tech:
      "React, Node.js, Express, MongoDB, JWT,recharts,sib-api-v3-sdk,bcrypt, RBAC",
    live:
      "https://saas-role-front-cwjui0fmc-rahin-mon-ss-projects.vercel.app/",
    frontend:
      "https://github.com/Rahinmon2903/saas-role-front-end",
    backend:
      "https://github.com/Rahinmon2903/saas-role-backend"
  },

  {
    title: "MERN E-Commerce Platform",
    image:
      "https://dummyimage.com/2400x1400/020617/ffffff&text=E-Commerce",
    description:
      "A full-stack e-commerce platform supporting buyer and seller roles, secure authentication, product lifecycle management, cart persistence, wishlist handling, order processing, and Razorpay payment integration. Sellers manage products with Cloudinary-based image uploads, while buyers interact with cart workflows, checkout logic, and order tracking. The backend API handles product CRUD operations, cart management, payment verification, and order lifecycle logic.",
    tech:
      "React, Node.js, Express, MongoDB, JWT, Razorpay, Cloudinary,multer",
    live:
      "https://ecommerce-front-end-rtyf.vercel.app/",
    frontend:
      "https://github.com/Rahinmon2903/ecommerce_frontEnd",
    backend:
      "https://github.com/Rahinmon2903/ecommerce-backEnd"
  },

  /* ✅ UPDATED FROM README */
  {
    title: "CineVerse",
    image:
      "https://dummyimage.com/2400x1400/0f172a/ffffff&text=CineVerse",
    description:
      "A React-based movie discovery and review application powered by the OMDb API. The application supports real-time movie search, dynamic filtering, infinite scrolling, and immersive movie detail views. Users can rate movies using an interactive star-based system with persistent storage via LocalStorage. The UI emphasizes a cinematic visual experience using modern layout patterns, responsive design, and smooth state-driven updates.",
    tech:
      "React, Tailwind CSS, Axios, React Router, OMDb API, LocalStorage",
    live:
      "https://moviereview-project.vercel.app/",
    frontend:
      "https://github.com/Rahinmon2903/Moviereview-project"
  },

  /* ✅ UPDATED FROM README */
  {
    title: "Invoice Management System",
    image:
      "https://dummyimage.com/2400x1400/020617/ffffff&text=Invoice+System",
    description:
      "A modern React-based invoice management application enabling users to create, edit, view, and export professional invoices. The system performs automatic financial calculations including subtotal, tax, fees, and grand total. Invoices are persisted locally using LocalStorage, allowing seamless session continuity. The application also supports PDF generation through html2pdf.js with layouts optimized for printable A4 formats.",
    tech:
      "React, React Router, Vite, Tailwind CSS, html2pdf.js, LocalStorage",
    live:
      "https://invoice-builder-project.vercel.app/",
    frontend:
      "https://github.com/Rahinmon2903/invoice-builder-project"
  }
];

export default function Projects() {
  const openLink = (url) =>
    window.open(url, "_blank", "noopener,noreferrer");

  return (
    <PageTransition>
      <section
        id="projects"
        className="min-h-screen bg-slate-950 text-slate-100 pt-16"
      >
        <div className="page-container">

          <header className="mb-16 max-w-2xl">
            <h1 className="text-4xl sm:text-5xl font-semibold">
              Projects
            </h1>
            <p className="mt-4 text-slate-400 text-lg">
              Selected full-stack and frontend engineering work.
            </p>
          </header>

          <div className="relative">

            <button className="nav-arrow left custom-prev">
              <FiChevronLeft size={22} />
            </button>

            <button className="nav-arrow right custom-next">
              <FiChevronRight size={22} />
            </button>

            <Swiper
              modules={[Navigation]}
              spaceBetween={36}
              slidesPerView={1}
              navigation={{
                prevEl: ".custom-prev",
                nextEl: ".custom-next"
              }}
              breakpoints={{
                640: { slidesPerView: 1.2 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 }
              }}
            >
              {projects.map((p, i) => (
                <SwiperSlide key={i}>
                  <article className="project-card">

                    <div className="project-image">
                      <img src={p.image} alt={p.title} />
                    </div>

                    <h3 className="project-title">{p.title}</h3>

                    <p className="project-description">
                      {p.description}
                    </p>

                    <div className="tech-stack">
                      {p.tech.split(",").map((tech) => (
                        <span key={tech}>{tech.trim()}</span>
                      ))}
                    </div>

                    <div className="project-actions">
                      {p.live && (
                        <button onClick={() => openLink(p.live)}>
                          <FaExternalLinkAlt size={12} />
                          Live
                        </button>
                      )}

                      {p.frontend && (
                        <button onClick={() => openLink(p.frontend)}>
                          <FaGithub size={12} />
                          Frontend
                        </button>
                      )}

                      {p.backend && (
                        <button onClick={() => openLink(p.backend)}>
                          <FaGithub size={12} />
                          Backend
                        </button>
                      )}
                    </div>

                  </article>
                </SwiperSlide>
              ))}
            </Swiper>

          </div>
        </div>
      </section>
    </PageTransition>
  );
}


