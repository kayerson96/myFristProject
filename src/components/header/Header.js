import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import  Button from 'react-bootstrap/Button';
import './Header.css';
import labial04 from '../images/labial04.png'
import { AiFillAlipayCircle } from "react-icons/ai";

function Header(){
    return (
        <div className='header'>
            <p>Hola anderson jose</p>
            <img src={labial04}/>
            <AiFillAlipayCircle/>
        </div>
        
    )
}
export default Header;