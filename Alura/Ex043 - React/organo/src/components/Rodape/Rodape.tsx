import "./Rodape.css";

export const Rodape: React.FC = () => {
  return (
    <footer className="footer">
      <section>
        <ul>
          <li>
            <a href="facebook.com" target="_blank">
              <img src="/src/assets/imagens/fb.png" alt="" />
            </a>
          </li>
          <li>
            <a href="twitter.com" target="_blank">
              <img src="/src/assets/imagens/tw.png" alt="" />
            </a>
          </li>
          <li>
            <a href="instagram.com" target="_blank">
              <img src="/src/assets/imagens/ig.png" alt="" />
            </a>
          </li>
        </ul>
      </section>
      <section>
        <img src="/src/assets/imagens/logo.png" alt="" />
      </section>
      <section>
        <p>Desenvolvido por Alura.</p>
      </section>
    </footer>
  );
};

