import "./styles.css";
import computerImg from "../../assets/computer.png";
import ProductCategory from "../ProductCategory";

function ProductDetailsCard() {

  return (
    <div className="dsc-card dsc-mb20">
      <div className="dsc-product-details-top dsc-line-bottom">
        <img src={computerImg} alt="Computer" />
      </div>
      <div className="dsc-product-details-bottom">
        <h3>R$5000,00</h3>
        <h4>Computador</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti
          perferendis culpa architecto libero quod nostrum, quibusdam voluptate
          reiciendis minima? Nostrum officia voluptate accusamus laborum libero.
          Odio labore aspernatur blanditiis voluptatibus?
        </p>
        <div className="dsc-category-container">
            <ProductCategory />
            <ProductCategory />
        </div>
      </div>
    </div>
  );

}

export default ProductDetailsCard