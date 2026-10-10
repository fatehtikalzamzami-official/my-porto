"use client";
import { useEffect, useRef, useState } from "react";

export default function CvButton() {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const close = (e) => {
      if (!ref.current?.contains(e.target)) setOpen(false);
    };
    const esc = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", close);
    document.addEventListener("keydown", esc);
    return () => {
      document.removeEventListener("pointerdown", close);
      document.removeEventListener("keydown", esc);
    };
  }, []);

  return (
    <div className="cv" ref={ref}>
      <button
        type="button"
        className="act-btn"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
          <path
            d="M12 4v11M7 11l5 5 5-5M5 20h14"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        Download CV
        <svg
          className={open ? "chev up" : "chev"}
          viewBox="0 0 24 24"
          width="16"
          height="16"
          aria-hidden="true"
        >
          <path
            d="M6 9l6 6 6-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      {open && (
        <div className="cv-menu" role="menu">
          <a
            role="menuitem"
            href="/cv-id.pdf"
            download="CV_Fateh_Tikal_Zamzami_ID.pdf"
            onClick={() => setOpen(false)}
          >
            <b>Bahasa Indonesia</b>
            <span>Unduh CV (PDF)</span>
          </a>
          <a
            role="menuitem"
            href="/cv-en.pdf"
            download="CV_Fateh_Tikal_Zamzami_EN.pdf"
            onClick={() => setOpen(false)}
          >
            <b>English</b>
            <span>Download CV (PDF)</span>
          </a>
        </div>
      )}
    </div>
  );
}
