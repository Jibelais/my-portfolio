import hero from "./assets/hero.jpg";

export default function App() {
  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="#top">JIEUN PIVARNIK</a>
          <nav className="nav">
            <a href="#about">ABOUT</a>
            <a href="#work">WORK</a>
            <a href="#contact">CONTACT</a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-media fade-in">
              <img src={hero} alt="Maze artwork" />
            </div>
            <div className="hero-copy rise-in">
              <h2>
                Hello, I’m a software engineer
                <br />and creative technologist
                <br />based in Houston, TX.
              </h2>
              <p className="sub">
                Building clean, fast product with
                <br />
                React, Vite, and thoughtful UX
              </p>

              <blockquote className="quote">
                <p>
                  "Real obstacles don't take you in circles.
                  <br />
                  They can be overcome. Invented ones are
                  <br />
                  like a maze."
                </p>
                <cite>Barbara Sher</cite>
              </blockquote>

              <a className="cta" href="#work">See my work</a>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="container narrow">
            <h2>About</h2>
            <p>
              I’m Jieun, a web developer with a CS background and bootcamp training.
              I care about maintainable code, elegant interfaces, and efficient delivery.
            </p>
          </div>
        </section>

        <section id="work" className="section">
          <div className="container">
            <h2>Work</h2>
            <ul className="work-grid">
              <li>
                <h3>Daebak Kitty</h3>
                <p>Breeder site • WordPress + custom code</p>
                <a href="https://daebakkitty.com" target="_blank" rel="noreferrer">Visit</a>
              </li>
              <li>
                <h3>Cleopatra Nails Katy</h3>
                <p>Salon site • Wix + custom integrations</p>
                <a href="https://cleopatranailskaty.com" target="_blank" rel="noreferrer">Visit</a>
              </li>
              {/* Add more items as needed */}
            </ul>
          </div>
        </section>

        <section id="contact" className="section">
          <div className="container narrow">
            <h2>Contact</h2>
            <p><a className="link" href="mailto:youremail@example.com">youremail@example.com</a></p>
            <p><a className="link" href="https://github.com/jibelais" target="_blank" rel="noreferrer">github.com/jibelais</a></p>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">© {new Date().getFullYear()} Jieun Pivarnik</div>
      </footer>
    </>
  );
}
