import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import"./Main.css";
import Button from 'react-bootstrap/Button';

function Main(){
     return(
     <div className='maincontain'>
            <div className='' id='imAnderson'>
            <div className='title'>
               <h2 className='myName'>Hi, I’m Anderson <br></br>
               Frontend Developer
               (Do you want to know <br></br>
               About)=>   Me?</h2>
 </div>
      </div>

           <div className='' id='socialMedia'>
            <Button href="" className='semi-Circulo'></Button>
            <Button href="https://github.com/kayerson96" className ='circulogit' ></Button>
            <Button href="" className='circuloinst'></Button>
            <Button href="" className='circuloface'></Button>
            <Button href="" className='circulomail'></Button>
             
          </div>

    </div>
     )
}
export default Main;