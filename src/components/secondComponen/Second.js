import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Second.css";
import imagen1 from "../../images/Imagen1.png"
import forja from "../../images/forja.png"
import makeup from "../../images/forja.png"
import Carousel from 'react-bootstrap/Carousel';

function Second(){
     return(
      <div className='container'>
      <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={makeup}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>makeup</h3>
          <p>Una pagina para maquillaje.</p>
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
    </div>
     )
}
export default Second;