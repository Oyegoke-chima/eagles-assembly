import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const testimonies = [
  {
    stars: '★★★★★',
    title: 'Set Free From Prison Miraculously',
    body: 'I was imprisoned for 2 years as an armed robber, watching co-criminals die daily. I gave my life to God, led a church in prison, and one day I was miraculously named for release by the Chief Justice. Today I live to praise Him!',
    author: 'Bro. Isaiah Adeyemi',
    campus: 'Eagles Assembly',
  },
  {
    stars: '★★★★★',
    title: 'God Restored Him & Brought Him Home',
    body: 'My brother left home on July 25, 2024 and lost his sanity. We searched everywhere and committed it to God. On August 17th, he regained consciousness at Redemption City and a Good Samaritan brought him back to us at exactly 11:26 PM. Praise the Lord!',
    author: 'Bro. Olaniyi Jatto',
    campus: 'Eagles Assembly',
  },
  {
    stars: '★★★★★',
    title: 'My Son Was Foaming — God Restored Him',
    body: 'My son became motionless and was foaming from the mouth. I applied the anointed oil and water the Pastor had prayed over, and kept praying. By the time we got to the hospital, he was hale and hearty as if nothing happened. Praaaaise the Lord!',
    author: 'Sst. Elizabeth Adesina',
    campus: 'Eagles Assembly',
  },
  {
    stars: '★★★★★',
    title: 'Jinx of Hatred for Vigils Broken',
    body: 'I had a phobia for Vigils — every time I attended one I suffered severe migraine. But during the 76 Hours With God programme in December 2024, I attended all the Vigils and experienced no migraine or headache whatsoever. God did it!',
    author: 'Sst. Lilian Francis',
    campus: 'Eagles Assembly',
  },
  {
    stars: '★★★★★',
    title: "God's Faithfulness to My Family",
    body: "Since joining The Eagles Assembly, I have lost count of God's goodness to me and my family. His faithfulness has been awesome and I am out this morning to testify of yet another miracle. To God be all the glory forever!",
    author: 'Eagles Assembly Member',
    campus: 'Eagles Assembly',
  },
]

function TestimonySlider() {
  const [current, setCurrent] = useState(0)
  const [animating, setAnimating] = useState(false)
  const [direction, setDirection] = useState('next')

  const visible = [
    testimonies[current % testimonies.length],
    testimonies[(current + 1) % testimonies.length],
    testimonies[(current + 2) % testimonies.length],
  ]

  const go = (dir) => {
    if (animating) return
    setDirection(dir)
    setAnimating(true)
    setTimeout(() => {
      setCurrent((prev) =>
        dir === 'next'
          ? (prev + 1) % testimonies.length
          : (prev - 1 + testimonies.length) % testimonies.length
      )
      setAnimating(false)
    }, 400)
  }

  useEffect(() => {
    const timer = setInterval(() => go('next'), 5000)
    return () => clearInterval(timer)
  }, [current, animating])

  return (
    <div className="testimony-slider">
      <div className={`testimony-cards-grid ${animating ? `slide-${direction}` : ''}`}>
        {visible.map((t, i) => (
          <div className="testimony-card" key={`${current}-${i}`}>
            <div className="testimony-stars">{t.stars}</div>
            <h4 className="testimony-card-title">{t.title}</h4>
            <p className="testimony-card-body">{t.body}</p>
            <p className="testimony-card-author">{t.author}</p>
            <span className="testimony-card-campus">{t.campus}</span>
          </div>
        ))}
      </div>

      <div className="testimony-controls">
        <button className="testimony-arrow" onClick={() => go('prev')}>&#8592;</button>
        <div className="testimony-dots">
          {testimonies.map((_, i) => (
            <span
              key={i}
              className={`testimony-dot ${i === current % testimonies.length ? 'active' : ''}`}
              onClick={() => {
                if (animating) return
                setDirection(i > current ? 'next' : 'prev')
                setAnimating(true)
                setTimeout(() => { setCurrent(i); setAnimating(false) }, 400)
              }}
            />
          ))}
        </div>
        <button className="testimony-arrow" onClick={() => go('next')}>&#8594;</button>
      </div>
    </div>
  )
}

function Testimony() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const el = document.querySelector(location.hash)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    }
  }, [location])

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    testimony: ''
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
      body: JSON.stringify({ ...formData, formType: 'Testimony' })
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
            SHARE YOUR <span className="prayer-highlight">TESTIMONY</span>
          </h1>
        </div>
      </section>

      {/* FORM */}
      <section className="prayer-form-section" id="testimony-form">
        <div className="prayer-form-card">
          <h2 className="prayer-form-heading">Please provide your details</h2>

          {submitted ? (
            <div style={{ textAlign: 'center', padding: '2rem' }}>
              <h3 style={{ color: '#FFB783', marginBottom: '1rem' }}>🙌 Thank You!</h3>
              <p>Your testimony has been received. To God be the glory!</p>
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
                <label className="form-label">Your Testimony <span className="required">(Required)</span></label>
                <textarea name="testimony" className="form-input form-textarea" placeholder="Share what God has done for you..." value={formData.testimony} onChange={handleChange} required />
              </div>

              <button type="submit" className="form-submit" disabled={loading}>
                {loading ? 'SENDING...' : 'SHARE TESTIMONY'}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* FEATURED TESTIMONIES SLIDESHOW */}
      <section className="featured-testimonies">
        <div className="featured-testimonies-header">
          <h2 className="featured-testimonies-title">God has been faithful.</h2>
          <p className="featured-testimonies-sub">He has been working overtime on our behalf.</p>
        </div>
        <TestimonySlider />
      </section>

      <Footer />
    </>
  )
}

export default Testimony