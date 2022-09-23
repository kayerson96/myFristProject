import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';
import"./Header.css";
import { Link } from 'react-router-dom';

function Header(){
    return (
      <>
      <nav>
        <ul>
          <li><Link to="/contact">contacta me</Link></li>
        </ul>
      </nav>

        <div>
            <nav class="navbar navbar-expand-lg ">
  <div class="container-fluid">
    <a class="nav-link" href="Home.js">Home</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="Works.js">Works</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="Aboutme.js">About Me</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="Contact.js">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </div>
        </>   
    )
}
export default Header;