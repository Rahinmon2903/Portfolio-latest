import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import PageTransition from "../components/PageTransition";
import cert1 from "../assets/cert1.png";

export default function Certifications() {
  const [selectedImage, setSelectedImage] = useState(null);

  const certs = [
    {
      title: "Full Stack MERN Development",
      issuer: "GUVI",
      description:
        "Comprehensive full-stack training covering frontend architecture, backend API design, authentication systems, database modeling, and production deployment workflows.",
      image: cert1
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

          {/* CERTIFICATE CARD */}
          <div className="cert-card">

            <div
              className="cert-image"
              onClick={() => setSelectedImage(certs[0].image)}
            >
              <img src={certs[0].image} alt={certs[0].title} />
            </div>

            <div className="cert-content">
              <h3>{certs[0].title}</h3>
              <p className="issuer">{certs[0].issuer}</p>
              <p className="description">{certs[0].description}</p>
            </div>

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

