import React from "react";
import { Carousel } from "react-bootstrap";
import Pic1 from "../images/pic1.jpg";
import Pic3 from "../images/pic3.jpg";
import Pic4 from "../images/pic4.jpg";
import Pic5 from "../images/pic5.jpg";
const CarouselComponent = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="img-fluid" src={Pic1} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="img-fluid" src={Pic3} alt="First slide" />
      </Carousel.Item>{" "}
      <Carousel.Item>
        <img className="img-fluid" src={Pic4} alt="First slide" />
      </Carousel.Item>{" "}
      <Carousel.Item>
        <img className="img-fluid" src={Pic5} alt="First slide" />
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComponent;
