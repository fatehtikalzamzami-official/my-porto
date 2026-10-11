import Tilt from "../components/Tilt";
import {
  profile,
  panes,
  stats,
  projects,
  timeline,
  skills,
  education,
} from "../lib/data";

import CvButton from "../components/CvButton";

const di = (s) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/${s}/${s}-original.svg`;

const langs = [
  { n: "HTML", i: "html5" },
  { n: "CSS", i: "css3" },
  { n: "JavaScript", i: "javascript" },
  { n: "TypeScript", i: "typescript" },
  { n: "PHP", i: "php" },
  { n: "Python", i: "python" },
  { n: "Dart", i: "dart" },
  { n: "C#", i: "csharp" },
  { n: "C++", i: "cplusplus" },
  { n: "Next.js", i: "nextjs" },
  { n: "React", i: "react" },
  { n: "Node.js", i: "nodejs" },
  { n: "Laravel", i: "laravel" },
  { n: "Flutter", i: "flutter" },
  { n: "Tailwind CSS", i: "tailwindcss" },
  { n: "Bootstrap", i: "bootstrap" },
  { n: "Unity", i: "unity" },
  { n: "Blender", i: "blender" },
  { n: "WebXR" },
  { n: "OpenXR" },
  { n: "XR Interaction Toolkit" },
  { n: "MySQL", i: "mysql" },
  { n: "REST API" },
  { n: "Git", i: "git" },
  { n: "GitHub", i: "github" },
  { n: "Figma", i: "figma" },
];
const interests = [
  "Software Development",
  "UI/UX Design",
  "Game Development",
  "AI",
  "Cyber Security",
];

const aboutCards = [
  {
    k: "Gelar (S.Tr. Kom.)",
    v: "Sarjana Terapan (D4)",
    s: "In progress",
    icon: (
      <>
        <path d="M22 10L12 5 2 10l10 5 10-5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </>
    ),
  },
  {
    k: "Bidang studi",
    v: "Teknologi Rekayasa Perangkat Lunak",
    icon: <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />,
  },
  {
    k: "Fokus utama",
    v: "Software Engineering",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="12" cy="12" r="1" />
      </>
    ),
  },
  {
    k: "Spesialisasi",
    v: "Web, Mobile, UI/UX, VR",
    icon: (
      <>
        <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z" />
        <path d="M19 15l.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7z" />
      </>
    ),
  },
];

const skillGroups = [
  {
    t: "Web & Mobile Development",
    d: "Membangun aplikasi web dan mobile yang responsif dan mudah dikembangkan.",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" />
      </>
    ),
    items: [
      { n: "HTML", i: "html5" },
      { n: "CSS", i: "css3" },
      { n: "JavaScript", i: "javascript" },
      { n: "PHP", i: "php" },
      { n: "Dart", i: "dart" },
      { n: "Laravel", i: "laravel" },
      { n: "Next.js", i: "nextjs" },
      { n: "React", i: "react" },
      { n: "Flutter", i: "flutter" },
      { n: "MySQL", i: "mysql" },
      { n: "REST API" },
      { n: "Git", i: "git" },
      { n: "GitHub", i: "github" },
    ],
  },
  {
    t: "Game & VR Development",
    d: "Membuat simulasi dan pengalaman interaktif berbasis Virtual Reality.",
    icon: <path d="M3 9h18v7a2 2 0 0 1-2 2h-3l-2-3h-4l-2 3H5a2 2 0 0 1-2-2z" />,
    items: [
      { n: "Unity", i: "unity" },
      { n: "C#", i: "csharp" },
      { n: "C++", i: "cplusplus" },
      { n: "Blender", i: "blender" },
      { n: "Virtual Reality" },
    ],
  },
  {
    t: "UI/UX Design",
    d: "Merancang antarmuka yang nyaman digunakan, dari wireframe sampai prototype.",
    icon: (
      <>
        <path d="M12 19l7-7 3 3-7 7z" />
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18z" />
        <path d="M2 2l7.6 7.6" />
        <circle cx="11" cy="11" r="2" />
      </>
    ),
    items: [
      { n: "Figma", i: "figma" },
      { n: "Wireframing" },
      { n: "Prototyping" },
      { n: "UI Design" },
      { n: "UX Design" },
    ],
  },
  {
    t: "Soft Skills",
    d: "Kemampuan yang mendukung saya bekerja mandiri maupun dalam tim.",
    icon: (
      <>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8" />
      </>
    ),
    items: [
      { n: "Komunikasi" },
      { n: "Kerja sama tim" },
      { n: "Kepemimpinan" },
      { n: "Pemecahan masalah" },
      { n: "Berpikir analitis" },
      { n: "Manajemen waktu" },
      { n: "Adaptasi" },
    ],
  },
];

export default function Home() {
  return (
    <>
      <header className="island">
        <a href="#top" className="island-brand">
          <svg
            className="logo"
            width="28"
            height="28"
            viewBox="0 0 32 32"
            aria-hidden="true"
          >
            <path
              d="M5 4 L12 9 Q16 8 20 9 L27 4 L27 16 Q27 27 16 27 Q5 27 5 16 Z"
              fill="currentColor"
            />
            <ellipse cx="12" cy="16" rx="1.8" ry="2.4" fill="#fbf8f3" />
            <ellipse cx="20" cy="16" rx="1.8" ry="2.4" fill="#fbf8f3" />
          </svg>
          PORTOFOLIO<span></span>
        </a>
        <nav>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </nav>
        <a href="#contact" className="island-ava" aria-label="Kontak">
          <img src="/mini.jpeg" alt="" />
        </a>
      </header>

      <main id="top">
        <section className="intro">
          <figure className="polaroid left">
            <img src="/profil_diri.jpeg" alt={`Foto ${profile.name}`} />
            <figcaption>Bangka Belitung, ID</figcaption>
          </figure>

          <figure className="polaroid right">
            <img src="/foto_3.jpeg" alt="Foto kegiatan" />
            <div className="tag-card">
              <p className="tc-label">Software Developer</p>
              <h3>Turning Ideas Into Digital Reality.</h3>
              <p className="tc-desc">
                Building digital solutions across web, mobile, and immersive
                experiences.
              </p>
              <div className="marquee">
                <ul className="track">
                  {[...langs, ...langs].map((l, i) => (
                    <li key={i}>
                      {l.i && <img src={di(l.i)} alt="" loading="lazy" />}
                      {l.n}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </figure>

          <div className="intro-center">
            <p className="badge">
              <i />
              Hai, saya
            </p>
            <h1>{profile.name}</h1>
            <p className="role-line">Software Engineer</p>
            <p className="intro-sub">{profile.tagline}</p>
            <ul className="trust" aria-label="Minat">
              {interests.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>

            <div className="act">
              <a className="act-btn solid" href="#projects">
                Lihat Projects
                <svg
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  aria-hidden="true"
                >
                  <path
                    d="M5 12h14M13 6l6 6-6 6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <CvButton />
              <a className="act-btn plain" href="#contact">
                <svg
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  aria-hidden="true"
                >
                  <path
                    d="M21 15a2 2 0 0 1-2 2H8l-5 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Hubungi Saya
              </a>
            </div>
          </div>
        </section>

        <section id="about" className="wrap section">
          <div className="about">
            <div className="about-photo">
              <img src="/about.png" alt={`Foto ${profile.name}`} />
              <span className="chip c1">Web Developer</span>
              <span className="chip c2">UI/UX Designer</span>
            </div>

            <div className="about-body">
              <h2>About</h2>
              <p className="about-lead">
                Saya merupakan mahasiswa Sarjana Terapan Teknologi Rekayasa
                Perangkat Lunak di Politeknik Manufaktur Negeri Bangka Belitung
                yang berfokus pada pengembangan perangkat lunak dan solusi
                digital. Saya memiliki ketertarikan pada Software Engineering,
                Full-Stack Development, UI/UX Design, Internet of Things (IoT),
                Artificial Intelligence (AI), dan Virtual Reality (VR).
              </p>
              <p className="about-lead">
                Saya memiliki pengalaman dalam pengembangan aplikasi web dan
                sistem informasi di lingkungan pemerintahan, serta pengalaman
                sebagai teknisi pemasangan Interactive Flat Panel (IFP) di
                sekolah. Selain itu, saya mengembangkan berbagai proyek akademik
                yang mencakup aplikasi web dan mobile, API, serta perancangan
                antarmuka dan prototype UI/UX. Dalam setiap proyek, saya
                mengutamakan pemecahan masalah, penulisan kode yang terstruktur,
                dan pengembangan solusi yang berorientasi pada kebutuhan
                pengguna. Saya juga memiliki kemampuan komunikasi, kerja sama
                tim, manajemen waktu, adaptabilitas, dan kemauan belajar yang
                mendukung saya dalam bekerja secara efektif, baik secara mandiri
                maupun kolaboratif.
              </p>

              <div className="about-cards">
                {aboutCards.map((c) => (
                  <div className="a-card" key={c.k}>
                    <span className="a-ico">
                      <svg
                        viewBox="0 0 24 24"
                        width="20"
                        height="20"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        {c.icon}
                      </svg>
                    </span>
                    <div>
                      <small>{c.k}</small>
                      <b>{c.v}</b>
                      {c.s && <em>{c.s}</em>}
                    </div>
                  </div>
                ))}
              </div>

              <CvButton />
            </div>
          </div>
        </section>

        <section id="skills" className="wrap section">
          <div className="sk-head">
            <h2>Skills</h2>
            <p>
              Teknologi dan kemampuan yang saya gunakan untuk membangun solusi
              digital.
            </p>
          </div>
          <div className="sk-grid">
            {skillGroups.map((g, idx) => (
              <article className="sk-card" key={g.t}>
                <header>
                  <span className="a-ico">
                    <svg
                      viewBox="0 0 24 24"
                      width="20"
                      height="20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      {g.icon}
                    </svg>
                  </span>
                  <h3>{g.t}</h3>
                  <span className="sk-no">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                </header>
                <p>{g.d}</p>
                <ul className="sk-chips">
                  {g.items.map((x) => (
                    <li key={x.n}>
                      {x.i && <img src={di(x.i)} alt="" loading="lazy" />}
                      {x.n}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="wrap section">
          <h2>Projects</h2>
          <div className="bento">
            {projects.map((p) => (
              <article
                key={p.title}
                className={`card${p.featured ? " featured" : ""}`}
                style={{ "--span": p.span }}
              >
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <ul className="tags">
                  {p.stack.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="wrap section">
          <h2>Experience</h2>
          <ol className="timeline">
            {timeline.map((t) => (
              <li key={t.title + t.when}>
                <time>{t.when}</time>
                <h3>{t.title}</h3>
                <p className="org">{t.org}</p>
                <ul>
                  {t.pts.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </section>

        <section id="education" className="wrap section">
          <h2>Education</h2>
          <div className="edu">
            <time>{education.when}</time>
            <h3>{education.school}</h3>
            <p className="meta">
              {education.degree}, {education.dept}
            </p>
            <p className="meta">IPK {education.gpa}</p>
            <ul className="tags">
              {education.courses.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
            <p className="meta">{education.award}</p>
          </div>
        </section>

        <section id="contact" className="wrap section contact">
          <h2>Mari berkolaborasi</h2>
          <a className="mail" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
          <div className="actions">
            <a className="btn" href={profile.linkedin}>
              LinkedIn
            </a>
            <a className="btn" href={profile.github}>
              GitHub
            </a>
          </div>
        </section>
      </main>

      <footer className="wrap footer">
        © {new Date().getFullYear()} {profile.name}
      </footer>
    </>
  );
}
