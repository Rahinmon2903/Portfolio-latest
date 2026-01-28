export default function Contact() {
  return (
    <main className="min-h-screen bg-black text-white pt-24 animate-fadeIn">
      <div className="max-w-3xl mx-auto px-6 py-24">
        <h1 className="text-4xl font-semibold">Contact</h1>

        <p className="mt-4 text-neutral-400">
          Interested in working together or have an opportunity?
          Reach out directly.
        </p>

        <div className="mt-10 space-y-4 text-sm">
          <p>
            <span className="text-neutral-500">Email:</span>{" "}
            rahinmon@gmail.com
          </p>

          <p>
            <span className="text-neutral-500">LinkedIn:</span>{" "}
            linkedin.com/in/your-linkedin
          </p>

          <p>
            <span className="text-neutral-500">GitHub:</span>{" "}
            github.com/your-github
          </p>
        </div>
      </div>
    </main>
  );
}
