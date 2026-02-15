import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import PageTransition from "../components/PageTransition";

import cert1 from "../assets/cert1.png";
import cert2 from "../assets/cert2.png";
import cert3 from "../assets/cert3.png";
import cert4 from "../assets/cert4.png";
import cert5 from "../assets/cert5.png";

export default function Certifications() {
  const [selectedImage, setSelectedImage] = useState(null);

  const certs = [
    {
      title: "Full Stack MERN Development",
      issuer: "GUVI",
      description:
        "Comprehensive full-stack training focused on building scalable MERN applications. Covered frontend architecture, backend API development, authentication systems, database modeling, RESTful design patterns, and production deployment workflows.",
      image: cert1
    },
    {
      title: "Web Development Training",
      issuer: "CodeBind Technologies",
      description:
        "Hands-on training program covering core web technologies, UI development principles, responsive design practices, and practical implementation of real-world web application workflows.",
      image: cert2
    },
    {
      title: "Data Analytics Internship",
      issuer: "TANSAM / Siemens",
      description:
        "Project-driven internship centered on applied data analytics using Power BI. Focused on data visualization, dashboard design, analytical thinking, and transforming raw datasets into structured insights.",
      image: cert3
    },
    {
      title: "Android Workshop",
      issuer: "CodeBind Technologies",
      description:
        "Workshop-based training exploring Android application fundamentals, mobile UI concepts, event-driven architecture, and practical development workflows.",
      image: cert4
    },
    {
      title: "Corporate Training Test",
      issuer: "CodeBind Technologies",
      description:
        "Assessment-based certification validating analytical reasoning, problem-solving ability, and technical aptitude through structured evaluation exercises.",
      image: cert5
    }
  ];

  return (
    <PageTransition>
      <section
        id="certifications"
        className="min-h-screen bg-slate-950 text-slate-100 pt-16"
      >
        <div className="page-container">

          {/* HEADER */}
          <header className="mb-16">
            <h1 className="text-4xl sm:text-5xl font-semibold">
              Certifications
            </h1>
            <p className="text-slate-400 mt-3">
              Professional training & credentials
            </p>
          </header>

          {/* CERTIFICATES */}
          <div className="space-y-10">
            {certs.map((cert) => (
              <div key={cert.title} className="cert-card">

                <div
                  className="cert-image"
                  onClick={() => setSelectedImage(cert.image)}
                >
                  <img src={cert.image} alt={cert.title} />
                </div>

                <div className="cert-content">
                  <h3>{cert.title}</h3>
                  <p className="issuer">{cert.issuer}</p>
                  <p className="description">{cert.description}</p>
                </div>

              </div>
            ))}
          </div>

        </div>

        {/* MODAL */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="cert-modal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
            >
              <motion.img
                src={selectedImage}
                alt="Certificate Preview"
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </PageTransition>
  );
}
