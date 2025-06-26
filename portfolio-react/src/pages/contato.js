import React from 'react';
import { Link } from 'react-router-dom';

function Sobre() {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li><Link className="menu" to="/">Home</Link></li>
            <li><Link className="menu" to="/sobre">Sobre Mim</Link></li>
            <li><Link className="menu" to="/projetos">Projetos</Link></li>
            <li><Link className="menu" to="/contato">Contato</Link></li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="contato">
          <h1>Contato</h1>

          <p>
            <i className="fa-solid fa-envelope"></i>
            <a href="mailto:alexandrac.campos97@gmail.com" target="_blank" rel="noopener noreferrer">
              Email
            </a>
          </p>

          <p>
            <i className="fa-brands fa-linkedin"></i>
            <a href="https://www.linkedin.com/in/alexandra-cordeiro-campos/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </p>

          <p>
            <i className="fa-brands fa-github"></i>
            <a href="https://github.com/AlexadraCampos" target="_blank" rel="noopener noreferrer">
              Github
            </a>
          </p>
        </section>
      </main>

      <div className="particles"></div>

      <footer className="rodape">
        <p>Feito com 💻 e ☕ por Alexandra Cordeiro Campos.</p>
        <p>&copy; 2025 </p>
      </footer>
    </div>
  );
}

export default Sobre;
