import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Second.css";
import imagen1 from "../../images/Imagen1.png"
import forja from "../../images/forja.png"
import makeup from "../../images/forja.png"
import Carousel from 'react-bootstrap/Carousel';

function Second(){
     return(

<div className='second-contain'>
      <div className='bio-Text'>
        <h4 className='text-second'>lorem   fnvo fff lorem loremlo remlorem loremlorem lorem  loremloremlorem  lorem</h4>
       </div>

{/* aqui va el corarusel */}

      <div className='carusel'>
      <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={makeup}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={imagen1}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={forja}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
</div>
     )
}
export default Second;