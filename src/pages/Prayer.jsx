import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Prayer() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    request: ''
  })

  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    const response = await fetch('https://formspree.io/f/xqeyzgjq', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
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
      <section className="prayer-hero">
        <div className="prayer-hero-content">
          <p className="prayer-label">FORMS</p>
          <h1 className="prayer-title">
            PRAYER <span className="prayer-highlight">REQUEST</span>
          </h1>
        </div>
      </section>

      {/* FORM */}
      <section className="prayer-form-section">
        <div className="prayer-form-card">
          <h2 className="prayer-form-heading">Please provide your details</h2>

          {submitted ? (
            <div style={{ textAlign: 'center', padding: '2rem' }}>
              <h3 style={{ color: '#FFB783', marginBottom: '1rem' }}>🙏 Thank You!</h3>
              <p>Your prayer request has been received. We will intercede for you!</p>
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
                <label className="form-label">Prayer Request <span className="required">(Required)</span></label>
                <textarea name="request" className="form-input form-textarea" placeholder="Share your prayer request here..." value={formData.request} onChange={handleChange} required />
              </div>

              <button type="submit" className="form-submit" disabled={loading}>
                {loading ? 'SENDING...' : 'SUBMIT REQUEST'}
              </button>
            </form>
          )}
        </div>
      </section>

      <Footer />
    </>
  )
}

export default Prayer