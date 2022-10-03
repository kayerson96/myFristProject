import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import"./Main.css";
import ContactComponent from "../../../../components/redes/Redes";

function Main(){
     return(
     <div className='maincontain'>
          <ContactComponent/>
            <div className='' id='imAnderson'>
            <div className='title'>
               <h2 className='myName'>Hi, I’m Anderson <br></br>
               Frontend Developer
               (Do you want to know <br></br>
               About)=>   Me?</h2>
 </div>
      </div>

    </div>
     )
}
export default Main;