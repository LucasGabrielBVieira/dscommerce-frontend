import './styles.css';
import { ProductDTO } from '../../models/product';

type Props = {
  product: ProductDTO
}

function CatalogCard({ product }: Props) {

  return (
    <div className="dsc-card">
      <div className="dsc-catalog-top dsc-line-bottom">
        <img src={product.imgUrl} alt={product.name} />
      </div>
      <div className="dsc-catalog-bottom">
        <h3>R$ {product.price.toFixed(2)}</h3>
        <h4>{product.name}</h4>
      </div>
    </div>
  );

}

export default CatalogCard
