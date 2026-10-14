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
import TechOrbit from "../components/TechOrbit";
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

const softSkills = [
  { n: "Komunikasi", g: "chat" },
  { n: "Kerja sama tim", g: "team" },
  { n: "Kepemimpinan", g: "flag" },
  { n: "Pemecahan masalah", g: "bulb" },
  { n: "Berpikir analitis", g: "chart" },
  { n: "Manajemen waktu", g: "clock" },
  { n: "Adaptasi", g: "loop" },
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

const Svg = ({ children, size = 14 }) => (
  <svg
    className="gi"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {children}
  </svg>
);

const ic = {
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" />
    </>
  ),
  pen: (
    <>
      <path d="M12 19l7-7 3 3-7 7z" />
      <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18z" />
      <path d="M2 2l7.6 7.6" />
      <circle cx="11" cy="11" r="2" />
    </>
  ),

  db: (
    <>
      <ellipse cx="12" cy="5" rx="8" ry="3" />
      <path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" />
    </>
  ),

  api: <path d="M7 7h10l-3-3M17 17H7l3 3" />,
  vr: <path d="M3 9h18v7a2 2 0 0 1-2 2h-3l-2-3h-4l-2 3H5a2 2 0 0 1-2-2z" />,
  wire: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 9h18M9 9v11" />
    </>
  ),
  proto: <path d="M5 3l14 8-6 2-2 6z" />,
  ui: (
    <>
      <path d="M12 3l9 5-9 5-9-5z" />
      <path d="M3 13l9 5 9-5" />
    </>
  ),
  ux: (
    <>
      <circle cx="12" cy="8" r="3.5" />
      <path d="M5 20c0-4 3-6 7-6s7 2 7 6" />
    </>
  ),
  chip: (
    <>
      <rect x="6" y="6" width="12" height="12" rx="2" />
      <path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4" />
    </>
  ),
  sensor: (
    <>
      <circle cx="12" cy="12" r="2" />
      <path d="M16.2 7.8a6 6 0 0 1 0 8.4M7.8 16.2a6 6 0 0 1 0-8.4M19 5a10 10 0 0 1 0 14M5 19a10 10 0 0 1 0-14" />
    </>
  ),
  embedded: (
    <>
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <rect x="9" y="9" width="6" height="6" />
    </>
  ),
  eye: (
    <>
      <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  ml: <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z" />,
  chat: (
    <path d="M21 15a2 2 0 0 1-2 2H8l-5 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  ),
  team: (
    <>
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8" />
    </>
  ),
  flag: <path d="M5 21V4M5 4h11l-2 4 2 4H5" />,
  bulb: (
    <path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-4 10.5c.7.7 1 1.5 1 2.5h6c0-1 .3-1.8 1-2.5A6 6 0 0 0 12 3z" />
  ),
  chart: <path d="M4 20V10M10 20V4M16 20v-8M2 20h20" />,
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  loop: (
    <path d="M20 11a8 8 0 0 0-14-4M4 4v4h4M4 13a8 8 0 0 0 14 4M20 20v-4h-4" />
  ),
};

const skillGroups = [
  {
    t: "Web & Mobile",
    icon: ic.globe,
    items: [
      { n: "HTML", i: "html5" },
      { n: "CSS", i: "css3" },
      { n: "Tailwind CSS", i: "tailwindcss" },
      { n: "JavaScript", i: "javascript" },
      { n: "PHP", i: "php" },
      { n: "Dart", i: "dart" },
      { n: "Kotlin", i: "kotlin" },
      { n: "Laravel", i: "laravel" },
      { n: "Next.js", i: "nextjs" },
      { n: "React", i: "react" },
      { n: "Node.js", i: "nodejs" },
      { n: "Flutter", i: "flutter" },
      { n: "Firebase", i: "firebase" },
      { n: "REST API", g: "api" },
      { n: "Postman", i: "postman" },
    ],
  },
  {
    t: "Game & VR",
    icon: ic.vr,
    items: [
      { n: "Unity", i: "unity" },
      { n: "C#", i: "csharp" },
      { n: "C++", i: "cplusplus" },
      { n: "Blender", i: "blender" },
      { n: "Virtual Reality", g: "vr" },
      { n: "Meta Quest", g: "vr" },
    ],
  },

  {
    t: "Database & Tools",
    icon: ic.db,
    items: [
      { n: "MySQL", i: "mysql" },
      { n: "MariaDB", i: "mariadb" },
      { n: "PostgreSQL", i: "postgresql" },
      { n: "SQLite", i: "sqlite" },
      { n: "MongoDB", i: "mongodb" },
      { n: "Git", i: "git" },
      { n: "GitHub", i: "github" },
      { n: "GitLab", i: "gitlab" },
      { n: "VS Code", i: "vscode" },
    ],
  },
  {
    t: "UI/UX Design",
    icon: ic.pen,
    items: [
      { n: "Figma", i: "figma" },
      { n: "Wireframing", g: "wire" },
      { n: "Prototyping", g: "proto" },
      { n: "UI Design", g: "ui" },
      { n: "UX Design", g: "ux" },
    ],
  },
  {
    t: "IoT & Embedded",
    icon: ic.chip,
    items: [
      { n: "Arduino", i: "arduino" },
      { n: "Raspberry Pi", i: "raspberrypi" },
      { n: "ESP32", g: "chip" },
      { n: "Sensor", g: "sensor" },
      { n: "Embedded System", g: "embedded" },
    ],
  },
  {
    t: "AI & Computer Vision",
    icon: ic.ml,
    items: [
      { n: "Python", i: "python" },
      { n: "TensorFlow", i: "tensorflow" },
      { n: "OpenCV", i: "opencv" },
      { n: "Jupyter", i: "jupyter" },
      { n: "Computer Vision", g: "eye" },
      { n: "Machine Learning", g: "ml" },
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
          <a href="#skills">Tech Stack</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </nav>
        <a href="#contact" className="island-ava" aria-label="Kontak">
          <img src="/mini.jpeg" alt="" />
        </a>
      </header>

      <main>
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
              <h2>About Me - Fateh Tikal Zamzami</h2>
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

              <div className="soft">
                <h3>Soft Skills</h3>
                <ul className="sx-chips">
                  {softSkills.map((x) => (
                    <li key={x.n}>
                      <Svg>{ic[x.g]}</Svg>
                      {x.n}
                    </li>
                  ))}
                </ul>
              </div>
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
          <div className="sx-head">
            <h2>Tech Stack</h2>
          </div>

          <div className="sx-layout">
            <div className="sx-list">
              {skillGroups.map((g) => (
                <div className="sx-row" key={g.t}>
                  <div className="sx-title">
                    <span className="a-ico">
                      <Svg size={20}>{g.icon}</Svg>
                    </span>
                    <h3>{g.t}</h3>
                  </div>
                  <ul className="sx-chips">
                    {g.items.map((x) => (
                      <li key={x.n}>
                        {x.i ? (
                          <img src={di(x.i)} alt="" loading="lazy" />
                        ) : (
                          <Svg>{ic[x.g]}</Svg>
                        )}
                        {x.n}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <TechOrbit />
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
