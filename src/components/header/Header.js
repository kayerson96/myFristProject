import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';
import"./Header.css";
import { Link } from 'react-router-dom';

function Header(){
    return (
        <div>
            <nav class="navbar navbar-expand-lg ">
  <div class="container-fluid">
  <li className='nav-link'><Link to="/">Home</Link></li>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
        <li className='nav-link' aria-current="page"><Link to="/works">Works</Link></li>
        </li>
        <li class="nav-item">
        <li className='nav-link' aria-current="page"><Link to="/aboutme">About Me</Link></li>
        </li>
        <li class="nav-item">
        <li className='nav-link' aria-current="page"><Link to="/contact">Contact</Link></li>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </div> 
    )
}
export default Header;