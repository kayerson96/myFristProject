import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Second.css";
import imagen1 from "../../../../images/Imagen1.png"
import forja from "../../../../images/forja.png"
import makeup from "../../../../images/makeup.png"
import Carousel from 'react-bootstrap/Carousel';

function Second(){
     return(

<div className='second-contain'>
      <div className='bio-Text'>
        <h2 className='text-second'>Tecnologias Usadas</h2>
        <h4 className='text-second'>#Html <br></br>#Css <br></br> JavaScript<br></br> React<br></br>Bootstrap</h4>
        <h2 className='text-second'>Diseños</h2>
        <h4 className='text-second'>#Figma<br></br>Photoshop</h4>
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