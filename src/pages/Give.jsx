import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import useScrollAnimation from '../hooks/useScrollAnimation'

function Give() {
  useScrollAnimation()
  const [copiedIndex, setCopiedIndex] = useState(null)
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const el = document.querySelector(location.hash)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    }
  }, [location])

  const handleCopy = (number, index) => {
    navigator.clipboard.writeText(number)
    setCopiedIndex(index)
    setTimeout(() => setCopiedIndex(null), 1500)
  }

  const accounts = [
    { label: 'OFFERING / TITHE', bank: 'Fidelity Bank PLC', number: '4110022096', logo: '/images/fidelity.png' },
    { label: 'BUILDING ACCOUNT', bank: 'Jubilee Mortgage Bank', number: '0001291548', logo: '/images/jubilee.png' },
    { label: 'BUILDING ACCOUNT', bank: 'Haggai Mortgage Bank', number: '02030186957', logo: '/images/haggai.png' },
    { label: 'OFFERING / TITHE', bank: 'Union Bank PLC', number: '0108728838', logo: '/images/union.png' },
  ]

  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="hero hero-give">
        <div className="hero-overlay"></div>
        <div className="hero-content fade-up">
          <h1 className="hero-tagline">
            GIVE TO THE <br />
            <span className="highlight">KINGDOM</span><br />
            OF GOD
          </h1>
          <p className="hero-verse">"Honour the Lord with your wealth." — Proverbs 3:9</p>
          <div className="hero-buttons">
            <a href="#ways-to-give" className="hero-cta-outline">GIVE NOW</a>
          </div>
        </div>
      </section>

      {/* WAYS TO GIVE */}
      <section id="ways-to-give" className="ways-to-give">
        <div className="container">
          <div className="section-header fade-up">
            <span className="badge">GIVE TO THE EAGLES ASSEMBLY</span>
            <h2 className='badge-text'>Ways To Give</h2>
            <p>Join us as we put our money right where our faith is,
              partnering with God for the spread of the gospel in our day.</p>
          </div>

          {/* CHURCH ACCOUNTS CARD */}
          <div className="primary-card fade-up">
            <div className="bank-header">
              <span className="church-accounts-title">CHURCH ACCOUNTS</span>
              <img src="/images/flag.jpg" alt="Nigeria Flag" className="flag" />
            </div>

            <div className="account-grid">
              {accounts.map((account, index) => (
                <div className="account-box" key={index}>
                  <small>{account.label}</small>

                  {/* Bank logo + name */}
                  <div className="bank-identity">
                    <img src={account.logo} alt={account.bank} className="bank-logo-sm" />
                    <span className="bank-name">{account.bank}</span>
                  </div>

                  {/* Account number + copy button */}
                  <div className="account-number">
                    <span className="account-text">{account.number}</span>
                    <button
                      className="copy-btn"
                      onClick={() => handleCopy(account.number, index)}
                      style={{ opacity: copiedIndex === index ? 0.5 : 1 }}
                      title="Copy account number"
                    >
                      {copiedIndex === index
                        ? <span className="copied-label">Copied!</span>
                        : <img src="/images/copy.png" alt="Copy" className="copy-icon" />
                      }
                    </button>
                  </div>

                </div>
              ))}
            </div>
          </div>

          {/* THANK YOU */}
          <div className="give-thankyou fade-up">
            <div className="give-thankyou-illustration">🙌</div>
            <h3 className="give-thankyou-title">Thank You for Giving!</h3>
            <p className="give-thankyou-text">
              Your generosity is a seed sown into the Kingdom of God.
              Heaven records every act of giving, and you will not go unrewarded.
              God bless you abundantly.
            </p>
          </div>

        </div>
      </section>

      <Footer />
    </>
  )
}

export default Give