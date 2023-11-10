import styled from "styled-components";
import dogfood from "../../images/dogfood.png";
import { products } from "../Search/dados";

const ProductStyle = styled.div`
  background-color: var(--white);
  height: 14rem;
  width: 10rem;
  box-shadow: var(--shadow);
  border-radius: 10px;
  display: flex;
  flex-direction: column;

  img {
    height: 7rem;
  }
`;

const ProductInfo = styled.div``;

const ProductImage = styled.div``;

export default function ProductCard() {
  return (
    <ProductStyle>
      <ProductImage>
        <img className="product-image" alt="Product" src={dogfood}></img>
      </ProductImage>
      <ProductInfo>
        {products.map((product) => (
          <>
            <h5>{product.name}</h5>
            <p>{product.description}</p>
            <p>R${product.price}</p>
          </>
        ))}
      </ProductInfo>
    </ProductStyle>
  );
}
