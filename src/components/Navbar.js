import { useRef } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import './components.css'

function Navbar() {
  const navRef = useRef();

  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav");
  }

  return (
    <header>
      <h3>Tarkov App</h3>
      <nav ref={navRef}>
        <a href="/home">Home</a>
        <a href="/login">Login</a>
        <a href="/register">Register</a>
        <a href="/protected">Entry</a>

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
