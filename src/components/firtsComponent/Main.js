import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import"./Main.css";

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
            <button className='circulogit'></button>
            <button className='circuloinst'></button>
            <button className='circuloface'></button>
            <button className='circulomail'></button>
             <div className='semi-Circulo'></div>
            </div>

    </div>
     )
}
export default Main;