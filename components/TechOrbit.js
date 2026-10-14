"use client";
import { useEffect, useRef } from "react";

const di = (s) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/${s}/${s}-original.svg`;

const icons = [
  ["Next.js", "nextjs"],
  ["React", "react"],
  ["TypeScript", "typescript"],
  ["JavaScript", "javascript"],
  ["Tailwind CSS", "tailwindcss"],
  ["Node.js", "nodejs"],
  ["PHP", "php"],
  ["Laravel", "laravel"],
  ["Flutter", "flutter"],
  ["Kotlin", "kotlin"],
  ["Firebase", "firebase"],
  ["Postman", "postman"],
  ["MySQL", "mysql"],
  ["PostgreSQL", "postgresql"],
  ["MongoDB", "mongodb"],
  ["SQLite", "sqlite"],
  ["GitLab", "gitlab"],
  ["VS Code", "vscode"],
  ["Python", "python"],
  ["NumPy", "numpy"],
  ["Pandas", "pandas"],
  ["TensorFlow", "tensorflow"],
  ["OpenCV", "opencv"],
  ["Unity", "unity"],
  ["C#", "csharp"],
  ["Blender", "blender"],
  ["Figma", "figma"],
  ["Arduino", "arduino"],
  ["Raspberry Pi", "raspberrypi"],
];

// Sebar titik merata di permukaan bola (Fibonacci sphere)
const N = icons.length;
const pts = icons.map(([n, s], i) => {
  const y = 1 - (2 * (i + 0.5)) / N;
  const r = Math.sqrt(1 - y * y);
  const th = i * Math.PI * (3 - Math.sqrt(5));
  return { n, s, x: r * Math.cos(th), y, z: r * Math.sin(th) };
});

const D = 6;
const R = 34;
const TILE = 12; // sebelumnya 8
const AUTO = 0.35; // kecepatan putar otomatis (rad/detik)

export default function TechOrbit() {
  const root = useRef(null);
  const tiles = useRef([]);

  useEffect(() => {
    const el = root.current;
    if (!el) return;

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const auto = reduce ? 0 : AUTO;
    const st = {
      yaw: 0.4,
      pitch: 0.35,
      vy: auto,
      vp: 0,
      drag: false,
      lx: 0,
      ly: 0,
      visible: true,
    };

    const render = () => {
      const cy = Math.cos(st.yaw);
      const sy = Math.sin(st.yaw);
      const cp = Math.cos(st.pitch);
      const sp = Math.sin(st.pitch);
      pts.forEach((p, i) => {
        const x1 = p.x * cy + p.z * sy;
        const z1 = -p.x * sy + p.z * cy;
        const y2 = p.y * cp + z1 * sp;
        const z2 = -p.y * sp + z1 * cp;
        const f = D / (D - z2);
        const depth = (z2 + 1) / 2;
        const node = tiles.current[i];
        if (!node) return;
        node.style.left = `${(50 + x1 * f * R).toFixed(2)}%`;
        node.style.top = `${(50 + y2 * f * R).toFixed(2)}%`;
        node.style.transform = `translate(-50%, -50%) scale(${(0.85 + 0.3 * depth).toFixed(3)})`;
        node.style.opacity = (0.8 + 0.2 * depth).toFixed(2);
        node.style.zIndex = 10 + Math.round(depth * 100);
      });
    };

    let raf;
    let last = performance.now();
    const tick = (now) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      if (st.visible) {
        if (!st.drag) {
          st.yaw += st.vy * dt;
          st.pitch += st.vp * dt;
          st.vy += (auto - st.vy) * Math.min(1, dt * 1.5);
          st.vp *= Math.max(0, 1 - dt * 3);
        }
        render();
      }
      raf = requestAnimationFrame(tick);
    };
    render();
    raf = requestAnimationFrame(tick);

    const down = (e) => {
      st.drag = true;
      st.lx = e.clientX;
      st.ly = e.clientY;
      el.setPointerCapture?.(e.pointerId);
      el.classList.add("grabbing");
    };
    const move = (e) => {
      if (!st.drag) return;
      const dx = e.clientX - st.lx;
      const dy = e.clientY - st.ly;
      st.lx = e.clientX;
      st.ly = e.clientY;
      st.yaw += dx * 0.008;
      st.pitch += dy * 0.008;
      st.vy = dx * 0.008 * 60;
      st.vp = dy * 0.008 * 60;
    };
    const up = () => {
      st.drag = false;
      el.classList.remove("grabbing");
    };

    el.addEventListener("pointerdown", down);
    el.addEventListener("pointermove", move);
    el.addEventListener("pointerup", up);
    el.addEventListener("pointercancel", up);

    const io = new IntersectionObserver(
      ([entry]) => {
        st.visible = entry.isIntersecting;
        last = performance.now();
      },
      { threshold: 0 },
    );
    io.observe(el);

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      el.removeEventListener("pointerdown", down);
      el.removeEventListener("pointermove", move);
      el.removeEventListener("pointerup", up);
      el.removeEventListener("pointercancel", up);
    };
  }, []);

  return (
    <div className="orb" ref={root}>
      <div className="orb-bar"></div>
      <div className="orb-stage">
        <i className="orb-ring r1" aria-hidden="true" />
        <i className="orb-ring r2" aria-hidden="true" />
        {pts.map((p, i) => (
          <div
            key={p.n}
            ref={(n) => (tiles.current[i] = n)}
            className="orb-tile"
            style={{ width: `${TILE}%` }}
            title={p.n}
          >
            <img src={di(p.s)} alt={p.n} draggable={false} />
          </div>
        ))}
      </div>
    </div>
  );
}
