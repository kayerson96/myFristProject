import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Redes from "../../components/redes/Redes";
import "./Works.css"

function Works() {
  return (

    <div className="">
      <Redes />
      <div className="projetc-Works">
        <br></br>
        <br></br>
        <h2 className="text-center">Projets</h2>
      </div>

        <div className="second-Works">

                <div className="first-Works">
                    <div className="pOne"></div>
                    <div className="tOne"><h4>This is a page about Makeup
</h4></div>
                </div>
        </div>

        <div className="second-Works">

        <div className="first-Works">
        <div className="pTwo"></div>
        <div className="tTwo"><h4>This page is about Medicine appointment</h4>
        </div>
            </div>

<br></br><br></br>
            <div className="first-Works">
        <div className="pThree"></div>
        <div className="tThree"><h4>This page is about BarberShop </h4>
        </div>
            </div>


            </div>

            


    </div>
  );
}
export default Works;
