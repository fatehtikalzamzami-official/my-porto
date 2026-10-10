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

        <section className="wrap spot">
          <div>
            <p className="spot-label">Pengalaman terbaru</p>
            <h2>Magang Web Developer di Kantor Bupati Bangka.</h2>
            <p>
              Membangun sistem manajemen aset berbasis web untuk 12 pengguna,
              lalu melatih 10 Kepala Bagian menggunakannya.
            </p>
          </div>
          <aside>
            <p className="spot-big">
              3.85 <small>IPK</small>
            </p>
            <ul>
              <li>D4 Rekayasa Perangkat Lunak</li>
              <li>76 Smart TV terpasang di sekolah</li>
              <li>Finalis Elektro Expo 2024</li>
            </ul>
            <a className="btn primary" href="#projects">
              Lihat proyek
            </a>
          </aside>
        </section>

        <section id="about" className="wrap section">
          <h2>About</h2>
          <p className="about-sum">{profile.summary}</p>
          <div className="skills">
            {skills.map((s) => (
              <div key={s.g}>
                <h3>{s.g}</h3>
                <ul className="tags">
                  {s.i.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </div>
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
