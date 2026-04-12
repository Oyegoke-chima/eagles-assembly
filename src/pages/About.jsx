import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const collageSets = [
  ['/images/DSI-8.jpg', '/images/DSI-6.jpg', '/images/DSI-9.jpg'],
  ['/images/DSI-11.jpg', '/images/DSI-7.jpeg', '/images/DSI-5.jpeg'],
]

function About() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    address: '',
    howYouHeard: ''
  })

  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [collageSet, setCollageSet] = useState(0)

  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const el = document.querySelector(location.hash)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    }
  }, [location])

  useEffect(() => {
    const interval = setInterval(() => {
      setCollageSet((prev) => (prev + 1) % collageSets.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    const response = await fetch('https://formspree.io/f/xqeyzgjq', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...formData, formType: 'New Member Registration' })
    })
    if (response.ok) {
      setSubmitted(true)
      setLoading(false)
    }
  }

  const current = collageSets[collageSet]

  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="hero hero-about">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <p className="about-hero-label">WHO WE ARE</p>
          <h1 className="about-hero-title">
            ABOUT <span className="about-hero-highlight">US</span>
          </h1>
        </div>
      </section>

      {/* ABOUT THE CHURCH */}
      <section className="church-about" data-aos="fade-up">
        <div className="church-about-container">

          {/* LEFT — Text */}
          <div className="church-about-text">
            <p className="church-about-label">OUR STORY</p>
            <h2 className="church-about-title">The Eagles Assembly</h2>
            <p className="church-about-body">
              <strong>THE EAGLES ASSEMBLY</strong> is not just a space, it is an experience.
              The Parish of the Redeemed Christian Church of God, named (The Eagles Assembly),
              was inaugurated on the 29th of January, 2012. The then Zonal Pastor of the
              Abule Egba Zone of RCCG, Lagos Province 2, Pastor Osai Odigie, planted the parish.
            </p>
            <p className="church-about-body">
              We are a dynamic teaching ministry dedicated to spreading the gospel and
              helping people discover their purpose in Christ. With a passion for the
              Word of God and a heart for mission, we are raising people to soar in
              purpose and faith.
            </p>
          </div>

          {/* RIGHT — Collage Slideshow */}
          <div className="church-collage" key={collageSet}>
            <div className="collage-top">
              <img src={current[0]} alt="Eagles Assembly" className="collage-img" />
              <img src={current[1]} alt="Eagles Assembly" className="collage-img" />
            </div>
            <div className="collage-bottom">
              <img src={current[2]} alt="Eagles Assembly" className="collage-img collage-wide" />
            </div>
            <div className="collage-dots">
              {collageSets.map((_, i) => (
                <span
                  key={i}
                  className={`collage-dot ${i === collageSet ? 'active' : ''}`}
                  onClick={() => setCollageSet(i)}
                />
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* LEAD PASTOR */}
      <section className="pastor" data-aos="fade-up">
        <div className="pastor-image">
          <img src="/images/pastor.png" alt="Pastor Segun Oyegoke" />
        </div>
        <div className="pastor-content">
          <h2 className="pastor-title">OUR LEAD PASTOR</h2>
          <p className="pastor-text">
            <span className="pastor-bold">PASTOR SEGUN OYEGOKE</span> is the lead pastor
            of The Eagles Assembly, a dynamic teaching ministry dedicated to spreading
            the gospel and helping people discover their purpose in Christ. With a
            passion for the Word of God and a heart for mission.
          </p>
          <p className="pastor-tagline">Join him on mixlr everyday at 6pm!!!</p>
          <a href="https://mixlr.com/segpeter007" className="pastor-cta">
            <span className="pastor-play-icon">▶</span> THE MOMENT OF TRUTH
          </a>
        </div>
      </section>

      {/* SERVICE TIMES */}
      <section className="services-section" data-aos="fade-up">
        <div className="services-container">
          <p className="services-label">JOIN US</p>
          <h2 className="services-title">Days of Service</h2>
          <div className="services-grid">
            <div className="service-box" data-aos="fade-up" data-aos-delay="0">
              <span className="service-box-icon">🌅</span>
              <h4>Sunday Service</h4>
              <p>Sunday School — 8:00 AM - 9:00 AM.</p>
              <p>Sunday Glorious Service — 9:00 AM.</p>
              <p>Communion Service 1st Sundays — 5:30 PM.</p>
            </div>
            <div className="service-box" data-aos="fade-up" data-aos-delay="150">
              <span className="service-box-icon">📖</span>
              <h4>Midweek Service</h4>
              <p>Digging Deep (Every Tuesday) — 6:30 PM.</p>
              <p>Faith Clinic (Every Thursday) — 6:30 PM.</p>
            </div>
            <div className="service-box" data-aos="fade-up" data-aos-delay="300">
              <span className="service-box-icon">✨</span>
              <h4>SPECIAL SERVICES</h4>
              <p>Monthly Vigil (Every 2nd Fridays) — 11:00 PM.</p>
              <p>Revival Services (2nd & Last Wednesdays) — 6:00 PM - 8:00 PM.</p>
              <p>Annual Revival Month</p>
            </div>
          </div>
        </div>
      </section>

      {/* ADDRESS */}
      <section className="address-section" data-aos="fade-up">
        <div className="address-container">
          <p className="address-label">FIND US</p>
          <h2 className="address-title">Our Location</h2>

          <div className="address-card main-address">
            <span className="address-icon">📍</span>
            <p className="address-main-tag">HEADQUARTERS</p>
            <p>20 Ogunbiyi Street, Off Akinwowo,</p>
            <p>Alimosho, Lagos</p>
          </div>

          <h3 className="fellowship-heading">House Fellowship Centres</h3>
          <div className="fellowship-grid">
            <div className="fellowship-card">
              <span className="fellowship-number">1</span>
              <div className="fellowship-info">
                <h4>Divine Grace Centre</h4>
                <p>16, Segun Marekobosi Street, Off Folarin Street, Egbeda/Alimosho, Lagos</p>
                <p className="fellowship-host">Host: Sis. Amarachi Nwaorgu</p>
                <a href="tel:08034406279" className="fellowship-call">📞 08034406279</a>
              </div>
            </div>
            <div className="fellowship-card">
              <span className="fellowship-number">2</span>
              <div className="fellowship-info">
                <h4>House of Prayer Centre <span className="fellowship-axis">(Agbelekale Area)</span></h4>
                <p>8, Isua Street, Agbelekale, Abule Egba</p>
                <p className="fellowship-host">Host: Bro. & Sis. Taiwo Rokosu</p>
                <a href="tel:08033448926" className="fellowship-call">📞 08033448926</a>
              </div>
            </div>
            <div className="fellowship-card">
              <span className="fellowship-number">3</span>
              <div className="fellowship-info">
                <h4>Holiness Centre <span className="fellowship-axis">(Salolo/Meiran Axis)</span></h4>
                <p>Flat 5, Block 130, Ojokoro Housing Estate, Meiran-Ijaye, Meiran B/Stop, Off Lagos/Abeokuta E/way</p>
                <p className="fellowship-host">Host: Bro. & Sis. Demola Ekundayo</p>
                <a href="tel:08061185051" className="fellowship-call">📞 08061185051</a>
              </div>
            </div>
            <div className="fellowship-card">
              <span className="fellowship-number">4</span>
              <div className="fellowship-info">
                <h4>Salvation Centre <span className="fellowship-axis">(Akiwowo/Egbeda Axis)</span></h4>
                <p>2, Jimoh Akinremi Street Adjacent Akiwowo Street, Egbeda</p>
                <p className="fellowship-host">Host: Mama Fatoki</p>
                <a href="tel:07039738055" className="fellowship-call">📞 07039738055</a>
              </div>
            </div>
            <div className="fellowship-card">
              <span className="fellowship-number">5</span>
              <div className="fellowship-info">
                <h4>Victory Centre <span className="fellowship-axis">(Ogunbiyi/Akiwowo Axis)</span></h4>
                <p>6, Ogunbiyi Street, Off Akiwowo Street</p>
                <p className="fellowship-host">Host: Bro. & Sis. Ik/Nkem Okonmah</p>
                <a href="tel:07031884354" className="fellowship-call">📞 07031884354</a>
              </div>
            </div>
            <div className="fellowship-card">
              <span className="fellowship-number">6</span>
              <div className="fellowship-info">
                <h4>Jesus Haven Centre <span className="fellowship-axis">(Abesan/Ipaja Axis)</span></h4>
                <p>4, Ighodoula Street Abusede, Aro Abesan Estate, Ipaja, Lagos</p>
                <p className="fellowship-host">Host: Pst. & Sst. Dolamu/Damilola Akinremi</p>
                <a href="tel:08031567268" className="fellowship-call">📞 08031567268</a>
              </div>
            </div>
          </div>

          <div className="address-call-card">
            <span>📞</span>
            <div>
              <p className="address-call-title">Need Directions?</p>
              <p className="address-call-sub">Call us and we'll guide you right to our door</p>
              <a href="tel:08033448926" className="address-call-btn">CALL FOR DIRECTIONS</a>
            </div>
          </div>
        </div>
      </section>

      {/* NEW MEMBER FORM */}
      <section className="new-member-section" id="join" data-aos="fade-up">
        <div className="new-member-container">
          <p className="new-member-label">GET CONNECTED</p>
          <h2 className="new-member-title">Join The Eagles Assembly</h2>
          <p className="new-member-subtitle">
            We'd love to welcome you into our family. Fill the form below and
            we'll reach out to you shortly.
          </p>
          <div className="new-member-card">
            {submitted ? (
              <div className="new-member-success">
                <span>🎉</span>
                <h3>Welcome to the Family!</h3>
                <p>We've received your details and will be in touch soon. God bless you!</p>
              </div>
            ) : (
              <form className="prayer-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-label">Name <span className="required">(Required)</span></label>
                  <div className="form-row">
                    <div className="form-col">
                      <input type="text" name="firstName" className="form-input" value={formData.firstName} onChange={handleChange} required />
                      <span className="form-hint">First Name</span>
                    </div>
                    <div className="form-col">
                      <input type="text" name="lastName" className="form-input" value={formData.lastName} onChange={handleChange} required />
                      <span className="form-hint">Last Name</span>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label">Phone <span className="required">(Required)</span></label>
                  <input type="tel" name="phone" className="form-input" placeholder="Phone number" value={formData.phone} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label className="form-label">Email <span className="required">(Required)</span></label>
                  <input type="email" name="email" className="form-input" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label className="form-label">Address</label>
                  <input type="text" name="address" className="form-input" placeholder="Your residential address" value={formData.address} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label className="form-label">How did you hear about us?</label>
                  <select name="howYouHeard" className="form-input" value={formData.howYouHeard} onChange={handleChange}>
                    <option value="">Select an option</option>
                    <option value="Friend/Family">Friend or Family</option>
                    <option value="Social Media">Social Media</option>
                    <option value="Online Search">Online Search</option>
                    <option value="Church Event">Church Event</option>
                    <option value="Mixlr">Mixlr</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <button type="submit" className="form-submit" disabled={loading}>
                  {loading ? 'SUBMITTING...' : 'JOIN THE FAMILY'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default About