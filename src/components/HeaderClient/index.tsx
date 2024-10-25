import cartImg from "../../assets/carrinho.svg";
import "./styles.css";

function HeaderClient() {
  return (
    <header className="dsc-header-client">
      <nav className="dsc-container">
        <h1>DSComerce</h1>
        <div className="dsc-nav-bar-right">
          <div className="dsc-menu-items-container">
            <div className="dsc-menu-item">
              <img src={cartImg} alt="Carrinho" />
            </div>
          </div>
          <div className="dsc-logged-user">
            <a className="dsc-link-client" href="http://">
              Entrar
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default HeaderClient;
