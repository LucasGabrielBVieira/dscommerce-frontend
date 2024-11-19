import "./styles.css";
import homeSvg from '../../assets/home.svg';
import productsSvg from '../../assets/products.svg';

function HeaderAdmin() {
  return (
        <header className="dsc-header-admin">
        <nav className="dsc-container">
            <h1>DSC Admin</h1>
            <div className="dsc-nav-bar-right">
                <div className="dsc-menu-items-container">
                    <div className="dsc-menu-item">
                        <img src={homeSvg} alt="Início"/>
                        <p>Início</p>
                    </div>
                    <div className="dsc-menu-item">
                        <img src={productsSvg} alt="Cadastro de Produtos" />
                        <p className="dsc-menu-item-active">Produtos</p>
                    </div>
                </div>
                <div className="dsc-logged-user">
                    <p>Maria Silva</p>
                    <a className="dsc-link-admin" href="#">Sair</a>
                </div>
            </div>
        </nav>
    </header>
  );
}

export default HeaderAdmin;
