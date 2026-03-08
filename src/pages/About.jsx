import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

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

  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const el = document.querySelector(location.hash)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    }
  }, [location])

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

  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="about-hero">
        <div className="about-hero-overlay"></div>
        <div className="about-hero-content">
          <p className="about-hero-label">WHO WE ARE</p>
          <h1 className="about-hero-title">
            ABOUT <span className="about-hero-highlight">US</span>
          </h1>
        </div>
      </section>

      {/* ABOUT THE CHURCH */}
      <section className="church-about">
        <div className="church-about-container">
          <div className="church-about-text">
            <p className="church-about-label">OUR STORY</p>
            <h2 className="church-about-title">The Eagles Assembly</h2>
            <p className="church-about-body">
              <strong>THE EAGLES ASSEMBLY</strong> is not just a space, it is an experience.
              It is a series of impactful and transformational encounters that bring change
              to the lives of people. It is felt, seen, heard and perceived like fragrance.
            </p>
            <p className="church-about-body">
              We are a dynamic teaching ministry dedicated to spreading the gospel and
              helping people discover their purpose in Christ. With a passion for the
              Word of God and a heart for mission, we are raising people to soar in
              purpose and faith.
            </p>
          </div>
          <div className="church-about-image">
            <img src="/images/mainIMG.png" alt="The Eagles Assembly" />
          </div>
        </div>
      </section>

      {/* LEAD PASTOR */}
      <section className="pastor">
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
      <section className="services-section">
        <div className="services-container">
          <p className="services-label">JOIN US</p>
          <h2 className="services-title">Days of Service</h2>
          <div className="services-grid">
            <div className="service-box">
              <span className="service-box-icon">🌅</span>
              <h4>Sunday Service</h4>
              <p>First Service — 8:00 AM</p>
              <p>Second Service — 10:30 AM</p>
            </div>
            <div className="service-box">
              <span className="service-box-icon">📖</span>
              <h4>Midweek Service</h4>
              <p>Wednesday — 6:00 PM</p>
              <p>Bible Study & Prayer</p>
            </div>
            <div className="service-box">
              <span className="service-box-icon">🎙️</span>
              <h4>Online — Mixlr</h4>
              <p>Daily — 6:00 PM</p>
              <p>The Moment of Truth</p>
            </div>
          </div>
        </div>
      </section>
      {/* ADDRESS */}
      <section className="address-section">
        <div className="address-container">
          <p className="address-label">FIND US</p>
          <h2 className="address-title">Our Location</h2>
          <div className="address-card">
            <span className="address-icon">📍</span>
            <p>20 Ogunbiyi Street, Off Akinwowo,</p>
            <p>Alimosho, Lagos</p>
          </div>
        </div>
      </section>

      {/* NEW MEMBER FORM */}
      <section className="new-member-section" id="join">
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

                {/* Name */}
                <div className="form-group">
                  <label className="form-label">
                    Name <span className="required">(Required)</span>
                  </label>
                  <div className="form-row">
                    <div className="form-col">
                      <input
                        type="text"
                        name="firstName"
                        className="form-input"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                      />
                      <span className="form-hint">First Name</span>
                    </div>
                    <div className="form-col">
                      <input
                        type="text"
                        name="lastName"
                        className="form-input"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                      />
                      <span className="form-hint">Last Name</span>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="form-group">
                  <label className="form-label">
                    Phone <span className="required">(Required)</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    className="form-input"
                    placeholder="Phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Email */}
                <div className="form-group">
                  <label className="form-label">
                    Email <span className="required">(Required)</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="form-input"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Address */}
                <div className="form-group">
                  <label className="form-label">Address</label>
                  <input
                    type="text"
                    name="address"
                    className="form-input"
                    placeholder="Your residential address"
                    value={formData.address}
                    onChange={handleChange}
                  />
                </div>

                {/* How did you hear */}
                <div className="form-group">
                  <label className="form-label">How did you hear about us?</label>
                  <select
                    name="howYouHeard"
                    className="form-input"
                    value={formData.howYouHeard}
                    onChange={handleChange}
                  >
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
