import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Give() {
  const [copiedIndex, setCopiedIndex] = useState(null)

  const handleCopy = (number, index) => {
    navigator.clipboard.writeText(number)
    setCopiedIndex(index)
    setTimeout(() => setCopiedIndex(null), 1000)
  }

  const fidelityAccounts = [
    { label: 'OFFERING / TITHE', number: '0702817549' },
    { label: 'OFFERING / TITHE', number: '0702817549' },
    { label: 'OFFERING / TITHE', number: '0702817549' },
    { label: 'OFFERING / TITHE', number: '0702817549' },
  ]

  const otherAccounts = [
    { bank: 'Stanbic Bank', logo: '/images/stanbic.png', number: '0702817549' },
    { bank: 'Moniepoint Microfinance Bank', logo: '/images/moniepoint.png', number: '0702817549' },
    { bank: 'Moniepoint Microfinance Bank', logo: '/images/moniepoint.png', number: '0702817549' },
  ]

  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-tagline">
            RAISING <span className="highlight">PEOPLE</span><br />
            TO <span className="highlight">SOAR</span><br />
            IN<br />
            <span className="highlight">PURPOSE &amp; FAITH</span>
          </h1>
          <div className="hero-buttons">
            <a href="#ways-to-give" className="hero-cta-outline">GIVE NOW</a>
          </div>
        </div>
      </section>

      {/* WAYS TO GIVE */}
      <section id="ways-to-give" className="ways-to-give">
        <div className="container">
          <div className="section-header">
            <span className="badge">GIVE TO THE EAGLES ASSEMBLY</span>
            <h2>Ways To Give</h2>
            <p>Join us as we put our money right where our faith is,
              partnering with God for the spread of the gospel in our day.</p>
          </div>

          {/* Fidelity Card */}
          <div className="primary-card">
            <div className="bank-header">
              <div className="bank-left">
                <img src="/images/fidelity.png" alt="Fidelity Bank" />
              </div>
              <img src="/images/flag.jpg" alt="Nigeria Flag" className="flag" />
            </div>

            <div className="account-grid">
              {fidelityAccounts.map((account, index) => (
                <div className="account-box" key={index}>
                  <small>{account.label}</small>
                  <div className="account-number">
                    <span className="account-text">{account.number}</span>
                    <button
                      className="copy-btn"
                      onClick={() => handleCopy(account.number, index)}
                      style={{ opacity: copiedIndex === index ? 0.5 : 1 }}
                    >
                      <img src="/images/copy.png" alt="Copy" className="copy-icon" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Other Accounts */}
          <div className="other-accounts">
            <h3>Other Accounts</h3>
            {otherAccounts.map((account, index) => (
              <div className="other-card" key={index}>
                <div className="other-left">
                  <img src={account.logo} alt={account.bank} className="bank-logo" />
                </div>
                <span className="bank-name">{account.bank}</span>
                <div className="account-number">
                  <span className="account-text">{account.number}</span>
                  <button
                    className="copy-btn"
                    onClick={() => handleCopy(account.number, `other-${index}`)}
                    style={{ opacity: copiedIndex === `other-${index}` ? 0.5 : 1 }}
                  >
                    <img src="/images/copy.png" alt="Copy" className="copy-icon" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      <Footer />
    </>
  )
}

export default Give
