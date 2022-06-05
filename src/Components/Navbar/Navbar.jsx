import React from 'react';
import { Link,Outlet } from 'react-router-dom';
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark ">
    <Link class="navbar-brand"  to="/">DisneyFlix</Link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item dropdown">
          <Link to="/tv" class="nav-link dropdown-toggle"  to ="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Movies
          </Link>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <Link class="dropdown-item" to="/movies/othershows">Other Shows</Link>
            <Link class="dropdown-item" to="/movies/watchifyspecials">Watchify Specials</Link>
            <Link class="dropdown-item" to="/movies/">More...</Link>
            <Outlet/>
          </div>
        </li>
        <li class="nav-item dropdown">
          <Link to="/movies" class="nav-link dropdown-toggle" to ="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            TV
          </Link>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <Link class="dropdown-item" to="/tv/english">English</Link>
            <Link class="dropdown-item" to="/tv/hindi">Hindi</Link>
            <Link class="dropdown-item" to="/tv/spanish">More...</Link>
            <Outlet/>
          </div>
        </li>
        <li class="nav-item dropdown">
          <Link to="/sports"  class="nav-link dropdown-toggle" to ="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Sports
          </Link>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <Link class="dropdown-item" to="/sports/cricket">Cricket</Link>
            <Link class="dropdown-item" to="/sports/formulaone">F1</Link>
            <Link class="dropdown-item" to="/sports/">More...</Link>
            <Outlet/>
          </div>
        </li>
        <li class="nav-item active">
          <Link to="/disneyplus"  class="nav-link" >Disney+ <span class="sr-only">(current)</span></Link>
        </li>
        <li class="nav-item active">
          <Link to="/kids"  class="nav-link" >Kids <span class="sr-only">(current)</span></Link>
        </li>
       
      </ul>
      <form class="form-inline my-2 my-lg-0">
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
  </nav></div>
  )
}

export default Navbar