import './style.css';
import '../styles/video.css';


function App() {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li><a className="menu" href="/">Home</a></li>
            <li><a className="menu" href="/templates/sobre.html">Sobre Mim</a></li>
            <li><a className="menu" href="/templates/projetos.html">Projetos</a></li>
            <li><a className="menu" href="/templates/contato.html">Contato</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="caixa">
          <div className="tex1">
            <h1>Bem-vindo ao meu portfólio!</h1>
            <p>
              Aqui você encontrará uma seleção dos meus projetos, onde aplico criatividade,
              tecnologia e um olhar atento aos detalhes para desenvolver soluções funcionais e intuitivas.
              Explore meu trabalho e veja como posso contribuir para transformar ideias em realidade. 🚀
            </p>
          </div>
        </section>
      </main>

      <div className="video-container">
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{ pointerEvents: 'none' }}
          className="video-decorativo"
        >
          <source src="public\video\pc.mp4" type="video/mp4" />
          Seu navegador não suporta vídeos HTML5.
        </video>
      </div>
    </div>
  );
}

<div className="particles"></div>

export default App;
