import { Link } from "react-router-dom";
import { useState } from "react";
import { PiCookingPot } from "react-icons/pi";
import { FiMenu, FiX } from "react-icons/fi";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo" onClick={closeMenu}>
        <PiCookingPot size={32} style={{ marginRight: "10px", color: "#ff6b6b" }} />
        PatrykGotuje
      </Link>

      <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
      </div>
      
      <div className={`nav-links ${isOpen ? "active" : ""}`}>
        <Link to="/" onClick={closeMenu}>Przepisy</Link>
        <Link to="/add" onClick={closeMenu}>Dodaj</Link>
        <Link to="/profile" onClick={closeMenu}>Profil</Link>
      </div>
    </nav>
  );
}

export default Navbar;