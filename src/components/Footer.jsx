import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-col">
          <h4 className="footer-heading">ABOUT US</h4>
          <p className="footer-about">
            <span className="footer-bold">THE EAGLES ASSEMBLY</span> is not just a space,
            it is an experience. It is a series of impactful and transformational
            encounters that bring change to the lives of people. It is felt, seen,
            heard and perceived like fragrance.
          </p>
          <p className="footer-address">
            📍 20 Ogunbiyi Street, Off Akinwowo, Alimosho, Lagos
          </p>
        </div>
    
        <div className="footer-col">
          <h4 className="footer-heading">QUICK LINKS</h4>
          <ul className="footer-links">
            <li><Link to="/prayer">Prayer Request</Link></li>
            <li><Link to="/give">Give</Link></li>
            <li><Link to="/">Online Sermon</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">QUICK LINKS</h4>
          <ul className="footer-links">
            <li><Link to="#">Join Us</Link></li>
            <li><Link to="#">Mixlr</Link></li>
            <li><Link to="#">Services</Link></li>
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
