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
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="item">
        <img src={slide2} alt="" className="d-block w-100"></img>
        <Carousel.Caption className="caption">
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="item">
        <img src={slide3} alt="" className="d-block w-100"></img>
        <Carousel.Caption className="caption">
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </CarouselStyle>
  );
}
