import { Link } from "react-router-dom";
import cartImg from "../../assets/carrinho.svg";
import "./styles.css";

function HeaderClient() {
  return (
    <header className="dsc-header-client">
      <nav className="dsc-container">
        <Link to={"/"} className="dsc-link-h1">
          <h1>DSComerce</h1>
        </Link>
        <div className="dsc-nav-bar-right">
          <div className="dsc-menu-items-container">
            <div className="dsc-menu-item">
              <Link to={"/car"}>
                <img src={cartImg} alt="Carrinho" />
              </Link>
            </div>
          </div>
          <div className="dsc-logged-user">
            <Link className="dsc-link-client" to={"/login"}>
              Entrar
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default HeaderClient;
