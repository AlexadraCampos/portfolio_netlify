import React from 'react';
import { Link } from 'react-router-dom';

function Sobre() {
  return (
    <div>
      {/* Fundo de partículas */}
      <div className="particles"></div>

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
        <section className="tex2">
          <h1>Olá, Muito Prazer!</h1>

          <p>
            Meu nome é <strong>Alexandra Cordeiro</strong>, e sou uma <strong>estudante de Análise e Desenvolvimento de Sistemas (ADS)</strong> no segundo período.
          </p>

          <p>
            Desde cedo, me apaixonei por tecnologia e programação e minhas habilidades incluem:
          </p>

          <ul>
            <li><strong>Linguagens de programação:</strong> Python, Java, C, JavaScript</li>
            <li><strong>Desenvolvimento web:</strong> HTML, CSS, Flask, Django</li>
            <li><strong>Ferramentas:</strong> Git, GitHub, Visual Studio Code</li>
          </ul>
        </section>
      </main>

      <footer className="rodape">
        <p>Feito com 💻 e ☕ por Alexandra Cordeiro Campos.</p>
        <p>&copy; 2025 </p>
      </footer>
    </div>
  );
}

export default Sobre;
