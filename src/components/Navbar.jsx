import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaHome, FaUserCog, FaUserPlus, FaWpforms } from 'react-icons/fa';
import { TbWorld } from "react-icons/tb";
import { } from "react-icons/fa";
import './components.css';

function Navbar() {
  const navRef = useRef();

  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <h3 className='app-title'>Tarkov App</h3>
      <nav className='nav-bar' ref={navRef}>
        <Link to="/portfolio">
          <TbWorld alt="" /> Portfolio
        </Link>
        <Link to="/home">
          <FaHome alt="" /> Home
        </Link>
        <Link to="/profile">
          <FaUserCog alt="" /> Profile
        </Link>
        <Link to="/register">
          <FaUserPlus alt="" /> Register
        </Link>
        <Link to="/protected">
          <FaWpforms alt="" /> Storage
        </Link>
        <button className="nav-btn nav-close-btn" onClick={showNavBar}>
          <FaBars />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavBar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar
