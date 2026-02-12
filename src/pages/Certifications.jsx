import PageTransition from "../components/PageTransition";

import cert1 from "../assets/cert1.png"; // your certificate image

export default function Certifications() {
  const certs = [
    {
      title: "Full Stack MERN Development",
      issuer: "GUVI",
      image: cert1
    }
  ];

  return (
    <PageTransition>
      <main className="min-h-screen bg-slate-950 text-slate-100 pt-16">
        <div className="max-w-5xl mx-auto px-6 py-20">

          <h1 className="text-4xl sm:text-5xl font-semibold mb-12">
            Certifications
          </h1>

          <div className="grid sm:grid-cols-2 gap-6">
            {certs.map((cert) => (
              <div
                key={cert.title}
                className="bg-slate-900 border border-slate-800 rounded-xl p-4"
              >
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="rounded-lg mb-4"
                />

                <h3 className="text-lg font-medium">{cert.title}</h3>
                <p className="text-sm text-slate-400">{cert.issuer}</p>
              </div>
            ))}
          </div>

        </div>
      </main>
    </PageTransition>
  );
}
