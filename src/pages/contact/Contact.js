import React from 'react';
import "./Contact.css";
import Button from 'react-bootstrap/Button';


function Contact() {
    return (
      <>
        <div className='containerContacto row'>
          <h1>Anderson Jose Castillo Muñoz</h1>
          <h4>Correo: anderson.castillo196@gmail.com</h4>
          <h4>Telefono: 3017707943</h4>
          <h4>Redes Sociales: <br></br>
          <Button href="https://github.com/kayerson96" className ='circulogit1' ></Button>
            <Button href="" className='circuloinst1'></Button>
            <Button href="" className='circuloface1'></Button>
            <Button href="" className='circulomail1'></Button>
            </h4>
          
        </div>
      </>
    );
  }
  
  export default Contact;