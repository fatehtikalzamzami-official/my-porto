"use client";
import { useRef } from "react";

export default function Tilt({ children }) {
  const ref = useRef(null);
  const move = (e) => {
    const r = ref.current.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    ref.current.style.setProperty("--ry", `${-26 + x * 30}deg`);
    ref.current.style.setProperty("--rx", `${14 - y * 30}deg`);
  };
  const leave = () => {
    ref.current.style.removeProperty("--ry");
    ref.current.style.removeProperty("--rx");
  };
  return (
    <div className="tilt" ref={ref} onPointerMove={move} onPointerLeave={leave}>
      <div className="stage">{children}</div>
    </div>
  );
}
