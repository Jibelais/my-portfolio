export default function App() {
  return (
    <>
      <header className="site-header">
        <a className="logo" href="#home">Jieun Pivarnik</a>
        <nav>
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="home">
        <section className="hero" aria-labelledby="home-title">
          <div className="container">
            <h1 id="home-title">Frontend Developer & Creative Technologist</h1>
            <p>Building clean, fast sites with React, Vite, and thoughtful UX.</p>
            <a className="btn" href="#work">See my work</a>
          </div>
        </section>

        <section id="work" className="section" aria-labelledby="work-title">
          <div className="container">
            <h2 id="work-title">Selected Work</h2>
            <ul className="cards">
              <li className="card">
                <h3>Daebak Kitty</h3>
                <p>Breeder site • WordPress + custom code</p>
                <a href="https://daebakkitty.com" target="_blank">Visit</a>
              </li>
              <li className="card">
                <h3>Cleopatra Nails Katy</h3>
                <p>Salon site • Wix + custom integrations</p>
                <a href="https://cleopatranailskaty.com" target="_blank">Visit</a>
              </li>
              {/* Add more projects here */}
            </ul>
          </div>
        </section>

        <section id="about" className="section" aria-labelledby="about-title">
          <div className="container">
            <h2 id="about-title">About</h2>
            <p>
              Entry-level developer with CS background and bootcamp training.
              I love ship-ready, maintainable code and elegant UI.
            </p>
          </div>
        </section>

        <section id="contact" className="section" aria-labelledby="contact-title">
          <div className="container">
            <h2 id="contact-title">Contact</h2>
            <p><a href="mailto:youremail@example.com">youremail@example.com</a></p>
            <p><a href="https://github.com/jibelais" target="_blank">github.com/jibelais</a></p>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">© {new Date().getFullYear()} Jieun Pivarnik</div>
      </footer>
    </>
  );
}
