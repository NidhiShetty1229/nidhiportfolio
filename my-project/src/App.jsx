import './App.css'
import heroImg from './assets/hero.png'

function Section({ title, children }) {
  return (
    <section className="section">
      <h2>{title}</h2>
      {children}
    </section>
  )
}

export default function App() {
  return (
    <div className="portfolio">
      <header className="header">
        <div className="header-inner">
          <div className="profile">
            <img src={heroImg} alt="Nidhi Shetty" className="avatar" />
            <div>
              <h1>Nidhi V Shetty</h1>
              <p className="tag">B.Tech Information Science — Aspiring Software Engineer</p>
              <p className="meta">Udupi, Padubelle · 9019756855 · <a href="mailto:nidhishetty2912@gmail.com">nidhishetty2912@gmail.com</a></p>
              <p className="meta"><a href="https://www.linkedin.com/in/nidhi-shetty-2a063a314" target="_blank">linkedin.com/in/nidhi-shetty-2a063a314</a></p>
            </div>
          </div>
          <nav className="nav">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#education">Education</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main className="main">
        <Section title="About" id="about">
          <p>
            Results-focused Information Science student with hands-on experience in database management, Python, SQL, and software development. Passionate about building data-driven applications and improving IT workflows.
          </p>
        </Section>

        <Section title="Technical Skills">
          <div className="skills">
            <span>SQL</span>
            <span>Python</span>
            <span>DBMS</span>
            <span>HTML/CSS</span>
            <span>TypeScript</span>
            <span>React / Vite</span>
            <span>Git</span>
          </div>
        </Section>

        <Section title="Projects" id="projects">
          <div className="cards">
            <article className="card">
              <h3>Diamond Price Prediction Web App</h3>
              <p>Cleaned a large Kaggle dataset, analyzed features, and trained an ML model to predict diamond prices (Manipal Institute of Technology project).</p>
            </article>
            <article className="card">
              <h3>Library Book Reservation System</h3>
              <p>Developed a reservation system using Python and MS SQL Server with stored procedures and triggers to ensure accurate availability and operations.</p>
            </article>
          </div>
        </Section>

        <Section title="Experience" id="experience">
          <div className="experience">
            <div className="exp-item">
              <h4>IT Support — Onshore Constructions Pvt. Ltd., Mumbai</h4>
              <p className="small">June 1 — July 1, 2025</p>
              <p>Observed and assisted with IT workflows, using tools such as SAP B1, AutoCAD LT, Primavera, QGIS, Oracle Aconex, and SQL Server for centralized database management and reporting.</p>
            </div>
          </div>
        </Section>

        <Section title="Education" id="education">
          <div className="edu">
            <div>
              <strong>NMAM Institute of Technology</strong>
              <p>B.Tech — Information Science and Engineering (July 2023 — May 2027)</p>
            </div>
            <div>
              <strong>Poorna Prajna Pre-University College</strong>
              <p>PCMB (July 2021 — May 2023)</p>
            </div>
          </div>
        </Section>

        <Section title="Certifications & Learning">
          <ul>
            <li>Infosys Springboard — TypeScript & Web Development</li>
            <li>Microsoft — Azure Learning Challenge (Annovation 2025)</li>
            <li>Software Engineering Fundamentals — Testing & Development</li>
          </ul>
        </Section>

        <Section title="Contact" id="contact">
          <p>I'm available for internships and entry-level roles. Email me at <a href="mailto:nidhishetty2912@gmail.com">nidhishetty2912@gmail.com</a> or connect on LinkedIn.</p>
        </Section>
      </main>

      <footer className="footer">
        <div>© {new Date().getFullYear()} Nidhi V Shetty — Built with React & Vite</div>
      </footer>
    </div>
  )
}
