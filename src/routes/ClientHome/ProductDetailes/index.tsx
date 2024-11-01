import "./styles.css";
import ButtonInverse from "../../../components/ButtonInverse";
import ButtonPrimary from "../../../components/ButtonPrimary";
import ProductDetailsCard from "../../../components/ProductDetailesCard";
import * as productService from "../../../services/product-service.ts";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { ProductDTO } from "../../../models/product.ts";
import { useEffect, useState } from "react";

function ProductDetails() {
  const params = useParams();

  const [product, setProduct] = useState<ProductDTO>();

  useEffect(() => {
    productService.findById(Number(params.productId))
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <main>
      <section id="product-details-section" className="dsc-container">
        {product && <ProductDetailsCard product={product} />}
        <div className="dsc-btn-page-container">
          <ButtonPrimary name="Comprar" />
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <ButtonInverse name="Início" />
          </Link>
        </div>
      </section>
    </main>
  );
}

export default ProductDetails;
