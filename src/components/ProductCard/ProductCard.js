import styled from "styled-components";
import dogfood from "../../images/dogfood.png";
import { products } from "../Search/dados";

const ProductStyle = styled.li`
  background-color: var(--white);
  height: 20rem;
  width: 15rem;
  box-shadow: var(--shadow);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  img {
    height: 7rem;
    align-self: center;
  }
`;

const ProductInfo = styled.div`
  h5 {
    font-size: 20px;
    color: var(--dark-gray);
  }

  .product-description {
    font-size: 14px;
    color: var(--light-gray);
  }

  .product-price {
  }
`;

const ProductImage = styled.div``;

export default function ProductCard() {
  return (
    <>
      {products.map((product) => (
        <ProductStyle>
          <ProductImage>
            <img className="product-image" alt="Product" src={dogfood}></img>
          </ProductImage>
          <ProductInfo>
            <h5>{product.name}</h5>
            <p className="product-description">{product.description}</p>
            <p className="product-price">R${product.price}</p>
          </ProductInfo>
        </ProductStyle>
      ))}
    </>
  );
}
