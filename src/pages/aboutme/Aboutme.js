import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../home/componente_home/firtsComponent/Main.css";
import ContactComponent from "../../components/redes/Redes";
import "./Aboutme.css";

function AboutMe() {
  return (
    <div className=" row firstContain">
      <div className="marcoFoto">
        <div className="photoMe"></div>
      </div>
      <div className="myBio">
        <h2 className="text-center">Anderson jose castillo muñoz</h2>
        <p className="text-center">
          My name is = Anderson but You can tell me Kayerson and I'm learning to
          do this. If you want to know more about me, I invite you to see my
          resume but if You want to know my project, GO AHEAD.
        </p>
      </div>

      <div>
        <ContactComponent />
      </div>

      <div className="container-About">

                <div className="hojadeVida"> 
                <h3>CV</h3>
                    <div className="imagcv"></div> 
                 </div>

                <div className="projects"> 
                    <h3>Projects</h3>
                    <div className="imagpj"></div>
                    </div>
      </div>
    </div>
  );
}
export default AboutMe;
