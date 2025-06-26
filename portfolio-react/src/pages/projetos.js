import React from 'react';
import { Link } from 'react-router-dom';

function Projetos() {
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
        <section className="projetos-cards">
          <h1>Meus Projetos</h1>

          <div className="card-grid">
            <div className="card">
              <img className="card__img" src="/image/Capa_ID.png" alt="IDGC" />
              <div className="card__content">
                <h1 className="card__header">Validador de Identificação 🔍</h1>
                <div className="card__text-wrapper">
                  <p className="card__text">
                    Classe IDGC para validar documentos do Nacional e Internacional
                    <strong> CPF, CNPJ, DNI e CUIL, Etc.</strong> Garantindo autenticidade e conformidade com as regras oficiais. ✅
                  </p>
                  <p style={{ color: 'red' }}>Obs: pode demorar um pouco pra carregar</p>
                </div>
                <button className="card__btn">
                  <a href="https://paginaidge.onrender.com" target="_blank" rel="noopener noreferrer">
                    Explore <span>&rarr;</span>
                  </a>
                </button>
              </div>
            </div>

            <div className="card">
              <img className="card__img" src="/image/Capa Projeto clinica.png" alt="clinica" />
              <div className="card__content">
                <h1 className="card__header">Frontend de uma clínica 🏥</h1>
                <div className="card__text-wrapper">
                  <p className="card__text">
                    Frontend desenvolvido com <strong>Python e Flask,</strong> oferecendo navegação moderna e intuitiva.
                    <br /> 🔹 Quem Somos | 🔹 Tratamentos 🔹 Antes e Depois | 🔹 Novidades 🔹 Agenda de Consultas 📅
                  </p>
                  <p style={{ color: 'red' }}>Obs: pode demorar um pouco pra carregar</p>
                </div>
                <button className="card__btn">
                  <a href="https://ecommerce-y4n5.onrender.com" target="_blank" rel="noopener noreferrer">
                    Explore <span>&rarr;</span>
                  </a>
                </button>
              </div>
            </div>

            <div className="card">
              <img className="card__img" src="/image/capa site_luxo.png" alt="clima" />
              <div className="card__content">
                <h1 className="card__header"><strong>Ponto de Luxo</strong> — Frontend desenvolvido com <strong>Django</strong></h1>
                <div className="card__text-wrapper">
                  <p className="card__text">
                    🔹 Home | 🔹 Produtos | 🔹 Serviços<br />
                    🔹 Novidades | 🔹 Atendimento
                  </p>
                  <p style={{ color: 'red' }}>Obs: pode demorar um pouco pra carregar</p>
                </div>
                <button className="card__btn">
                  <a href="https://ponto-de-luxo.onrender.com" target="_blank" rel="noopener noreferrer">
                    Explore <span>&rarr;</span>
                  </a>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Projetos;
