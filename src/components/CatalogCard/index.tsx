import './styles.css';
import computerImg from '../../assets/computer.png';

function CatalogCard() {

  return (
    <div className="dsc-card">
      <div className="dsc-catalog-top dsc-line-bottom">
        <img src={computerImg} alt="Computador" />
      </div>
      <div className="dsc-catalog-bottom">
        <h3>R$5000,00</h3>
        <h4>Computador Gaymer</h4>
      </div>
    </div>
  );

}

export default CatalogCard
