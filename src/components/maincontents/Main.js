import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import"./Main.css";

function Main(){
     return(
     <div className='row'>
            <div className='col-md-3' id='imAnderson'>
            <h2>Hi, I’m Anderson <br></br>
Frontend Developer
(Do you want to know <br></br>
 About)=>   Me?</h2>
            </div>
            <div className='col-md-3' id='socialMedia'>
            <div className='circulogit'></div>
            <div className='circuloinst'></div>
            <div className='circuloface'></div>
            <div className='circulomail'></div>
                    <div className='semi-Circulo'></div>
            </div>

    </div>
     )
}
export default Main;