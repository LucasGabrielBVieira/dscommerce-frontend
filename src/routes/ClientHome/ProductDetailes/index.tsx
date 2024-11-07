import "./styles.css";
import ButtonInverse from "../../../components/ButtonInverse";
import ButtonPrimary from "../../../components/ButtonPrimary";
import ProductDetailsCard from "../../../components/ProductDetailesCard";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { ProductDTO } from "../../../models/product.ts";
import { useEffect, useState } from "react";
import * as cartService from "../../../services/cart-service.ts";
import * as productService from "../../../services/product-service.ts";

function ProductDetails() {
  const params = useParams();

  const [product, setProduct] = useState<ProductDTO>();

  const navigate = useNavigate();

  useEffect(() => {
    productService.findById(Number(params.productId))
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.log(error.response.data);
        navigate("/");
      });
  }, []);

  function handleBuyClick() {
    if (product) cartService.addProductToCart(product);
    navigate("/cart");
  }

  return (
    <main>
      <section id="product-details-section" className="dsc-container">
        {product && <ProductDetailsCard product={product} />}
        <div className="dsc-btn-page-container">
          <div onClick={handleBuyClick} className="dsc-btn-pointer">
            <ButtonPrimary name="Comprar" />
          </div>
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <ButtonInverse name="Início" />
          </Link>
        </div>
      </section>
    </main>
  );
}

export default ProductDetails;
