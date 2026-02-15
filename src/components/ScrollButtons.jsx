import { FiChevronUp, FiChevronDown } from "react-icons/fi";

export default function ScrollButtons() {
  const scrollTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  const scrollBottom = () =>
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });

  const base =
    "fixed right-8 z-50 text-slate-400 hover:text-white transition";

  return (
    <>
      <button
        onClick={scrollTop}
        className={`${base} top-24`}
      >
        <FiChevronUp size={28} />
      </button>

      <button
        onClick={scrollBottom}
        className={`${base} bottom-10`}
      >
        <FiChevronDown size={28} />
      </button>
    </>
  );
}
