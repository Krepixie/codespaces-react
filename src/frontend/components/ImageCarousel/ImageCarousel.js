import { Carousel } from "react-bootstrap";
import styled from "styled-components";
import slide1 from "../../images/slide-1.jpg";
import slide2 from "../../images/slide-2.jpg";
import slide3 from "../../images/slide-3.jpg";

const CarouselStyle = styled(Carousel)`
  height: 30rem;
  width: 100%;
  overflow: hidden;
  position: relative;

  .item img {
    aspect-ratio: 3 / 2;
    object-fit: cover;
  }

  .caption {
    position: absolute;
    top: 10px;
  }
`;

export default function ImageCarousel() {
  return (
    <CarouselStyle>
      <Carousel.Item className="item">
        <img src={slide1} alt="" className="d-block w-100"></img>
        <Carousel.Caption className="caption">
          <h3>Guia do cuidado pet</h3>
          <p>
            Dicas essenciais para criar laços fortes e duradouros com seu pet.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="item">
        <img src={slide2} alt="" className="d-block w-100"></img>
        <Carousel.Caption className="caption">
          <h3>Mimos para pets felizes</h3>
          <p>
            Encontre tudo o que seu pet precisa para uma vida saudável e feliz!
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="item">
        <img src={slide3} alt="" className="d-block w-100"></img>
        <Carousel.Caption className="caption">
          <h3>Brinquedos divertidos para animais felizes</h3>
          <p>
            Explore nossa seleção de brinquedos para entreter seu bichinho de
            estimação!
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </CarouselStyle>
  );
}
