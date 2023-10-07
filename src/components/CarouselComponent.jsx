import React from "react";
import { Carousel } from "react-bootstrap";
import Pic1 from "../images/pic1.jpg";
import Pic3 from "../images/pic3.jpg";
import Pic4 from "../images/pic4.jpg";
import Pic5 from "../images/pic5.jpg";
const CarouselComponent = () => {
  return (
    <Carousel className="mt-1">
      <Carousel.Item style={{ textAlign: "center" }}>
        <img
          className=""
          style={{ maxWidth: "75%" }}
          src={Pic1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item style={{ textAlign: "center" }}>
        <img
          className=""
          style={{ maxWidth: "75%" }}
          src={Pic3}
          alt="First slide"
        />
      </Carousel.Item>{" "}
      <Carousel.Item style={{ textAlign: "center" }}>
        <img
          className=""
          style={{ maxWidth: "75%" }}
          src={Pic4}
          alt="First slide"
        />
      </Carousel.Item>{" "}
      <Carousel.Item style={{ textAlign: "center" }}>
        <img
          className=""
          style={{ maxWidth: "75%" }}
          src={Pic5}
          alt="First slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComponent;
