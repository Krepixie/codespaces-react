import styled from "styled-components";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import cart from "../../images/cart.svg"

const ProductStyle = styled(Card)`
  box-shadow: var(--shadow);
`;

export default function ProductCard({ name, description, price, image }) {
  return (
    <li>
      <ProductStyle style={{ width: "18rem" }}>
        <Card.Img variant="top" src={image} />

        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            <p className="product-description">{description}</p>
            <h3 className="product-price">R${price}</h3>
          </Card.Text>

          <Button variant="primary">Adicionar ao Carrinho</Button>
        </Card.Body>
      </ProductStyle>
    </li>
  );
}
