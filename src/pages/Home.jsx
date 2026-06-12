import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import useScrollAnimation from '../hooks/useScrollAnimation'


function Home() {
  useScrollAnimation()
  return (
    <>
      <Navbar />
      <section className="hero hero-home">
        <div className="hero-content fade-up">
          <div className="hero-eyebrow">Lagos, Nigeria — Est. 2012</div>
          <h1 className="hero-tagline">
            RAISING <span className="highlight">PEOPLE</span><br />
            TO <span className="highlight">SOAR</span><br />
            IN<br />
            <span className="highlight">PURPOSE &amp; FAITH</span>
          </h1>
          <a href="https://www.facebook.com/share/v/18Mea2u3h4/?mibextid=wwXIfr" className="hero-cta" target="_blank" rel="noopener noreferrer">▶ WATCH LIVE</a>
        </div>
      </section>

      {/* ADDRESS STRIP */}
      <section className="home-address-strip">
        <div className="home-address-inner">
          <div className="home-address-item">
            <span className="home-address-icon">📍</span>
            <div>
              <strong>Find Us</strong>
              <p>20 Ogunbiyi Street, Off Akinwowo, Alimosho, Lagos</p>
            </div>
          </div>
          <div className="home-address-divider" />
          <div className="home-address-item">
            <span className="home-address-icon">🕐</span>
            <div>
              <strong>Service Hours</strong>
              <p>Sun 7:30 AM &nbsp;·&nbsp; Wed 5:00 PM &nbsp;·&nbsp; Fri 11:00 PM</p>
            </div>
          </div>
          <div className="home-address-divider" />
          <div className="home-address-item">
            <span className="home-address-icon">✉️</span>
            <div>
              <strong>Get in Touch</strong>
              <p>info@theeaglesassembly.org</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about">
        <div className="about-container">
          <div className="about-left fade-up">
            <p className="about-label">WELCOME HOME</p>
            <h2 className="about-heading">More than a Church.<br />A Family.</h2>
            <blockquote className="about-quote">"It is felt, seen, heard and perceived like fragrance…"</blockquote>
            <p className="about-text"><span className="about-bold">THE EAGLES ASSEMBLY</span> is not just a space, it is an experience. It is a series of impactful and transformational encounters that bring change to the lives of people.</p>
            <a href="/about" className="about-cta">READ MORE</a>
          </div>
          <div className="about-values">
            <div className="value-card fade-up"><span className="value-icon">🙏</span><div><h4>Prayer</h4><p>We believe in the power of intercession. We pray, we believe, we see miracles.</p></div></div>
            <div className="value-card fade-up"><span className="value-icon">📖</span><div><h4>The Word</h4><p>Grounded in truth, led by scripture. Every message transforms and builds.</p></div></div>
            <div className="value-card fade-up"><span className="value-icon">🤝</span><div><h4>Community</h4><p>A family built on love and faith. You belong here from day one.</p></div></div>
            <div className="value-card fade-up"><span className="value-icon">🦅</span><div><h4>Purpose</h4><p>We exist to help you discover and walk in your divine purpose.</p></div></div>
          </div>
        </div>
      </section>

      <section className="prayer fade-up">
        <div className="prayer-card1"><div className="prayer-content"><p className="prayer-label">WE INTERCEDE</p><h3 className="prayer-title">REQUEST<br />PRAYER</h3><a href="/prayer" className="prayer-cta">LET'S PRAY</a></div></div>
        <div className="prayer-card2"><div className="prayer-content"><p className="prayer-label">WE'RE GRATEFUL</p><h3 className="prayer-title">SHARE<br />TESTIMONIES</h3><a href="/testimony" className="prayer-cta">SHARE WITH US</a></div></div>
        <div className="prayer-card3"><div className="prayer-content"><p className="prayer-label">JOIN US</p><h3 className="prayer-title">JOIN OUR<br />FELLOWSHIP</h3><a href="/about#join" className="prayer-cta">JOIN NOW</a></div></div>
      </section>

      <section className="pastor">
        <div className="pastor-image fade-right"><img src="/images/pastor.png" alt="Pastor Segun Oyegoke" loading="lazy" /></div>
        <div className="pastor-content fade-left">
          <p className="pastor-eyebrow">LEADERSHIP</p>
          <h2 className="pastor-title">Pastor Segun Oyegoke</h2>
          <p className="pastor-role">Lead Pastor — The Eagles Assembly</p>
          <p className="pastor-text"><span className="pastor-bold">PASTOR SEGUN OYEGOKE</span> is the lead pastor of The Eagles Assembly, a dynamic teaching ministry dedicated to spreading the gospel and helping people discover their purpose in Christ.</p>
          <p className="pastor-text">With a passion for the Word of God and a heart for mission, he leads with clarity, love, and conviction.</p>
          <p className="pastor-tagline">Join him on mixlr everyday at 6pm!!!</p>
          <a href="https://mixlr.com/segpeter007" className="pastor-cta" target="_blank" rel="noopener noreferrer"><span className="pastor-play-icon">▶</span> THE MOMENT OF TRUTH</a>
        </div>
      </section>

      <section className="give">
        <div className="give-card">
          <div className="give-left fade-right">
            <p className="give-eyebrow">GENEROSITY</p>
            <h2 className="give-title">Give to The Eagles Assembly</h2>
            <p className="give-text">Your generosity keeps blessing lives. Every seed you sow advances the gospel. Thank you for giving.</p>
            <blockquote className="give-verse">
              "Give, and it will be given to you. A good measure, pressed down, shaken together and running over, will be poured into your lap."
              <cite>— Luke 6:38</cite>
            </blockquote>
            <div className="give-buttons">
              <a href="/give" className="give-btn-outline">GIVE NOW</a>
              <a href="/give" className="give-btn-solid">BUILDING PROJECT</a>
            </div>
          </div>
          <div className="give-right fade-left"><img src="/images/give.png" alt="Giving illustration" className="give-illustration" loading="lazy" /></div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default Home