import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-col">
          <h4 className="footer-heading">ADDRESS</h4>
          <p className="footer-about">
            <span className="footer-bold">20 Ogunbiyi Street, Off Akinwowo, Alimosho, Lagos. </span>
          </p>
        </div>
    
        <div className="footer-col">
          <h4 className="footer-heading">QUICK LINKS</h4>
          <ul className="footer-links">
            <li><Link to="/prayer#prayer-form">Prayer Request</Link></li>
            <li><Link to="/give#ways-to-give">Give</Link></li>
            <li><a href="https://www.facebook.com/share/v/18Mea2u3h4/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">Online Sermon</a></li>
            
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">QUICK LINKS</h4>
          <ul className="footer-links">
            <li><Link to="/about#join">Join Us</Link></li>
            <li><a href="https://mixlr.com/segpeter007">Mixlr</a></li>
            <li><Link to="#">Services</Link></li>
            <li><Link to="/testimony#testimony-form">Testimony</Link></li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 The Eagles Assembly. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
