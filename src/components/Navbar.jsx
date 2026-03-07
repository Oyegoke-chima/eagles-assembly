import { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header>
      <nav className="navbar">
        <div className="container nav-container">

          <Link to="/" className="logo">
            <img src="/images/LOGO.png" alt="logo" />
            <span>The Eagles Assembly</span>
          </Link>

          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? '✕' : '☰'}
          </button>

          <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
            <li><Link to="/">Online</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/give">Giving</Link></li>
            <li><Link to="/prayer">Prayers</Link></li>
          </ul>

        </div>
      </nav>
    </header>
  )
}

export default Navbar
