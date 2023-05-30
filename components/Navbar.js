import Link from 'next/link';
import React from 'react';
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className='nav-header'>
     <nav class="navbar navbar-light  justify-content-between">
  <a class="navbar-brand">Next</a>
  <form class="form-inline">
  <nav class="navbar navbar-expand-lg">
  <a class="navbar-brand" href="#"></a>
  
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <Link href="/" legacyBehavior>
        <a class="nav-link nav-home">Home <span class="sr-only"></span></a>
        </Link>
      </li>
      <li class="nav-item">
       <Link href="/about"><a className="nav-link nav-about">About</a> </Link>

      </li>
      <li class="nav-item">
       <Link href="contact"> <a class="nav-link nav-contact">Contact</a> </Link>
      </li>
    
    </ul>
  </div>
</nav>
  </form>
</nav>
    </div>
  )
}

export default Navbar;
