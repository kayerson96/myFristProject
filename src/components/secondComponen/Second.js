import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import"./Second.css";
import imagen1 from "../../images/Imagen1.png"
import forja from "../../images/forja.png"
import makeup from "../../images/forja.png"
import Carousel from 'react-bootstrap/Carousel';

function Second(){
     return(
      <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={makeup}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={imagen1}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={forja}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
     )
}
export default Second;