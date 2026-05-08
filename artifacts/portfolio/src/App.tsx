import { useEffect, useState, useRef } from "react";

function Preloader({ hidden }: { hidden: boolean }) {
  return (
    <div id="preloader" className={hidden ? "hidden" : ""}>
      <div className="preloader-ring" />
      <p className="preloader-text">Cargando...</p>
    </div>
  );
}

function Navbar({ menuOpen, setMenuOpen }: { menuOpen: boolean; setMenuOpen: (v: boolean) => void }) {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <header>
      <nav style={{ position: "relative" }}>
        <div className="logo">
          <a href="https://compuestudio.edu.co/" target="_blank" rel="noreferrer">
            <img
              src="https://compuestudio.edu.co/wp-content/uploads/2025/10/logo.png"
              alt="Logo Compuestudio"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.display = "none";
                const span = document.createElement("span");
                span.textContent = "Compuestudio";
                span.style.cssText = "font-weight:700;color:#002c5f;font-size:1.1rem;";
                e.currentTarget.parentNode?.appendChild(span);
              }}
            />
          </a>
        </div>

        <ul className={`nav-links${menuOpen ? " open" : ""}`}>
          <li><a href="#datos" onClick={(e) => { e.preventDefault(); scrollTo("datos"); }}>Datos</a></li>
          <li><a href="#educacion" onClick={(e) => { e.preventDefault(); scrollTo("educacion"); }}>Educación</a></li>
          <li><a href="#experiencia" onClick={(e) => { e.preventDefault(); scrollTo("experiencia"); }}>Experiencia Laboral</a></li>
        </ul>

        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menú">
          <span />
          <span />
          <span />
        </div>
      </nav>
    </header>
  );
}

function SectionDatos() {
  return (
    <section id="datos" className="hero">
      <div className="hero-content">
        <h2>Estudiante de Media Técnica</h2>
        <h1>Tu Nombre Aquí</h1>

        <div className="contact-info">
          <ul>
            <li>
              <div className="contact-item">
                <i className="fas fa-phone-alt" />
                <a href="https://wa.me/573001234567" target="_blank" rel="noreferrer">
                  +57 300 000 0000
                </a>
              </div>
            </li>
            <li>
              <div className="contact-item">
                <i className="fas fa-envelope" />
                <a href="mailto:tu.correo@compuestudio.edu.co">
                  tu.correo@compuestudio.edu.co
                </a>
              </div>
            </li>
            <li>
              <div className="contact-item">
                <i className="fab fa-instagram" />
                <a href="https://instagram.com/tu_usuario" target="_blank" rel="noreferrer">
                  @tu_usuario
                </a>
              </div>
            </li>
            <li>
              <div className="social-links">
                <a href="https://instagram.com/tu_usuario" target="_blank" rel="noreferrer" aria-label="Instagram">
                  <i className="fab fa-instagram" />
                </a>
                <a href="https://facebook.com/tu_usuario" target="_blank" rel="noreferrer" aria-label="Facebook">
                  <i className="fab fa-facebook-f" />
                </a>
                <a href="https://linkedin.com/in/tu_usuario" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                  <i className="fab fa-linkedin-in" />
                </a>
              </div>
            </li>
          </ul>
        </div>

        <div className="profile-text">
          <p>
            <strong>Perfil Estudiantil</strong><br />
            Estudiante de Media Técnica en Auxiliar de Sistemas en Compuestudio, con interés en el soporte técnico,
            configuración de equipos y redes de cómputo. Comprometido con el aprendizaje práctico y el desarrollo
            de habilidades en tecnologías de la información.
          </p>
        </div>

        <div style={{ marginTop: "1.2rem" }}>
          <span className="badge">Auxiliar de Sistemas</span>
          <span className="badge">Soporte Técnico</span>
          <span className="badge">Redes</span>
          <span className="badge">Ofimática</span>
          <span className="badge">Windows / Linux</span>
        </div>
      </div>

      <div className="hero-image">
        <img
          src="https://ui-avatars.com/api/?name=Tu+Nombre&size=300&background=002c5f&color=ffffff&bold=true&font-size=0.33"
          alt="Foto de perfil"
        />
      </div>
    </section>
  );
}

function SectionEducacion() {
  return (
    <section id="educacion" style={{ background: "var(--light-gray)" }}>
      <div className="section-container">
        <div className="section-title">
          <h2>Educación</h2>
          <div className="underline" />
        </div>
        <div className="info-grid">
          <div className="info-card">
            <h3>Media Técnica — Auxiliar de Sistemas</h3>
            <div className="meta">Compuestudio | 2024 - En curso</div>
            <p>
              Formación técnica integral orientada al soporte, mantenimiento y configuración de
              dispositivos de cómputo, administración básica de redes e infraestructura tecnológica.
              Programa alineado con los estándares de competencias laborales del SENA.
            </p>
            <ul className="course-list">
              <li><strong>Auxiliar en Sistemas</strong> — Configurar dispositivos de cómputo (NSCL 220501106)</li>
              <li><strong>Mantenimiento a la conectividad</strong> (NSCL 220501104)</li>
              <li><strong>Diseño de sitios web</strong> (NSCL 220501121)</li>
              <li><strong>Ofimática</strong> — Excel Básico, Intermedio y Avanzado</li>
            </ul>
            <div className="skills-grid" style={{ marginTop: "1rem" }}>
              <span className="badge">Hardware</span>
              <span className="badge">Redes TCP/IP</span>
              <span className="badge">Windows Server</span>
              <span className="badge">Excel Avanzado</span>
              <span className="badge">Diseño Web</span>
              <span className="badge">Seguridad Informática</span>
            </div>
          </div>

          <div className="info-card">
            <h3>Bachillerato Académico</h3>
            <div className="meta">Institución Educativa | 2019 - 2024</div>
            <p>
              Culminación de estudios de educación básica y media con énfasis en ciencias exactas
              y tecnología. Participación activa en actividades de informática y olimpiadas
              matemáticas a nivel institucional.
            </p>
            <ul className="course-list">
              <li>Énfasis en Matemáticas e Informática</li>
              <li>Participación en proyectos tecnológicos escolares</li>
              <li>Monitor de sala de informática (2023-2024)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionExperiencia() {
  return (
    <section id="experiencia" className="section-container">
      <div className="section-title">
        <h2>Experiencia Laboral</h2>
        <div className="underline" />
      </div>
      <div className="info-grid">
        <div className="info-card">
          <h3>Practicante de Sistemas</h3>
          <div className="meta">Jumbo S.A.S. | 2024 - Actualidad</div>
          <p>
            Apoyo al área de tecnología e infraestructura de la empresa en actividades de
            soporte técnico, mantenimiento preventivo y correctivo de equipos de cómputo,
            y gestión de conectividad de red.
          </p>
          <ul className="course-list">
            <li>Instalación y configuración de software empresarial y sistemas operativos</li>
            <li>Soporte técnico de primer nivel a usuarios internos</li>
            <li>Mantenimiento preventivo y correctivo de hardware (PC, impresoras, periféricos)</li>
            <li>Gestión y diagnóstico de fallas en la red local (LAN/WLAN)</li>
            <li>Registro y seguimiento de incidencias en mesa de ayuda</li>
            <li>Inventario y control de activos tecnológicos de la compañía</li>
          </ul>
          <p style={{ marginTop: "0.8rem" }}>
            Adquisición de experiencia práctica en entorno corporativo real, aplicando conocimientos
            técnicos y desarrollando habilidades de comunicación y atención al cliente interno.
          </p>
          <div className="skills-grid">
            <span className="badge">Soporte N1</span>
            <span className="badge">Active Directory</span>
            <span className="badge">Mantenimiento de Redes</span>
            <span className="badge">Hardware</span>
            <span className="badge">Mesa de Ayuda</span>
          </div>
        </div>

        <div className="info-card">
          <h3>Habilidades Técnicas Adquiridas</h3>
          <div className="meta">Resumen de competencias</div>
          <p>
            A lo largo de la formación técnica y la experiencia práctica en Jumbo S.A.S.,
            se han desarrollado competencias en las siguientes áreas:
          </p>
          <ul className="course-list">
            <li>Diagnóstico y reparación de equipos de cómputo</li>
            <li>Configuración de redes domésticas y empresariales</li>
            <li>Instalación de sistemas operativos Windows y distribuciones Linux</li>
            <li>Manejo de herramientas ofimáticas (Suite Microsoft Office)</li>
            <li>Creación y mantenimiento de sitios web básicos (HTML, CSS)</li>
            <li>Conceptos de ciberseguridad y buenas prácticas digitales</li>
          </ul>
          <div className="skills-grid">
            <span className="badge">Windows 10/11</span>
            <span className="badge">Linux Ubuntu</span>
            <span className="badge">HTML / CSS</span>
            <span className="badge">Microsoft Office</span>
            <span className="badge">Ciberseguridad</span>
            <span className="badge">VirtualBox</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <img
        src="https://compuestudio.edu.co/wp-content/uploads/2025/10/logo.png"
        alt="Logo Compuestudio"
        className="footer-logo"
        onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
      />
      <p>© 2025 Portafolio Estudiantil — Compuestudio</p>
      <div className="footer-links">
        <a href="https://compuestudio.edu.co/" target="_blank" rel="noreferrer">Sitio Institucional</a>
        <a href="#datos" onClick={(e) => { e.preventDefault(); document.getElementById("datos")?.scrollIntoView({ behavior: "smooth" }); }}>Datos de contacto</a>
        <a href="#educacion" onClick={(e) => { e.preventDefault(); document.getElementById("educacion")?.scrollIntoView({ behavior: "smooth" }); }}>Educación</a>
        <a href="#experiencia" onClick={(e) => { e.preventDefault(); document.getElementById("experiencia")?.scrollIntoView({ behavior: "smooth" }); }}>Experiencia</a>
      </div>
      <p style={{ marginTop: "0.5rem" }}>
        Estudiante de Media Técnica en Auxiliar de Sistemas &nbsp;|&nbsp; Practicante en Jumbo S.A.S.
      </p>
    </footer>
  );
}

export default function App() {
  const [preloaderHidden, setPreloaderHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const fontsLoaded = useRef(false);

  useEffect(() => {
    if (fontsLoaded.current) return;
    fontsLoaded.current = true;

    const faLink = document.createElement("link");
    faLink.rel = "stylesheet";
    faLink.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css";
    document.head.appendChild(faLink);

    const timer = setTimeout(() => setPreloaderHidden(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const close = () => setMenuOpen(false);
    window.addEventListener("scroll", close);
    return () => window.removeEventListener("scroll", close);
  }, []);

  return (
    <>
      <Preloader hidden={preloaderHidden} />
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main>
        <SectionDatos />
        <SectionEducacion />
        <SectionExperiencia />
      </main>
      <Footer />
    </>
  );
}
