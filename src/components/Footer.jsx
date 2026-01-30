export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div
        className="max-w-7xl mx-auto px-6 py-4
                   flex flex-col sm:flex-row
                   justify-between items-center gap-1"
      >
        <p className="text-xs text-slate-500">
          © {new Date().getFullYear()} Rahin Mon S
        </p>

        <p className="text-xs text-slate-500">
          Full Stack MERN Developer
        </p>
      </div>
    </footer>
  );
}
