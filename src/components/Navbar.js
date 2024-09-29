import { useRef } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import './components.css'
import { FaHome, FaUserCog, FaUserPlus, FaWpforms } from "react-icons/fa";


function Navbar() {
  const navRef = useRef();

  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav");
  }

  return (
    <header>
      <h3>Tarkov App</h3>
      <nav ref={navRef}>
        <a href="/home"><FaHome /> Home</a>
        <a href="/profile"><FaUserCog /> Profile</a>
        <a href="/register"><FaUserPlus /> Register</a>
        <a href="/protected"><FaWpforms /> Entries</a>

        <button className="nav-btn nav-close-btn" onClick={showNavBar}>
          <FaTimes/>
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavBar}>
        <FaBars/>
      </button>
    </header>
  );
}

export default Navbar
