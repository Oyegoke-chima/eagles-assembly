import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import useScrollAnimation from '../hooks/useScrollAnimation'

function Home() {
  useScrollAnimation()
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content fade-up">
          <h1 className="hero-tagline">
            RAISING <span className="highlight">PEOPLE</span><br />
            TO <span className="highlight">SOAR</span><br />
            IN<br />
            <span className="highlight">PURPOSE &amp; FAITH</span>
          </h1>
          <a href="https://www.facebook.com/share/v/18Mea2u3h4/?mibextid=wwXIfr" className="hero-cta">WATCH LIVE</a>
        </div>
      </section>

      {/* WELCOME HOME */}
      <section className="about">
        <div className="about-container fade-up">
          <h2 className="about-label">WELCOME HOME</h2>
          <p className="about-text">
            <span className="about-bold">THE EAGLES ASSEMBLY</span> is not just a
            space, it is an experience. It is a series of impactful and
            transformational encounters that bring change to the lives of people.
            It is felt, seen, heard and perceived like fragrance...
          </p>

         
          {/* VALUE CARDS */}
          <div className="about-values">
            <div className="value-card fade-up">
              <span className="value-icon">🙏</span>
              <h4>Prayer</h4>
              <p>We believe in the power of intercession</p>
            </div>
            <div className="value-card fade-up">
              <span className="value-icon">📖</span>
              <h4>The Word</h4>
              <p>Grounded in truth, led by scripture</p>
            </div>
            <div className="value-card fade-up">
              <span className="value-icon">🤝</span>
              <h4>Community</h4>
              <p>A family built on love and faith</p>
            </div>
          </div>

          <a href="#" className="about-cta">READ MORE</a>
        </div>
      </section>

      {/* PRAYER CARDS */}
      <section className="prayer fade-up">
        <div className="prayer-card">
          <div className="prayer-overlay"></div>
          <div className="prayer-content">
            <p className="prayer-label">WE INTERCEDE</p>
            <h3 className="prayer-title">REQUEST<br />PRAYER</h3>
            <a href="/prayers" className="prayer-cta">LET'S PRAY</a>
          </div>
        </div>

        <div className="prayer-card" >
          <div className="prayer-overlay"></div>
          <div className="prayer-content">
            <p className="prayer-label">WE'RE GRATEFUL</p>
            <h3 className="prayer-title">SHARE<br />TESTIMONIES</h3>
            <a href="/testimony" className="prayer-cta">SHARE WITH US</a>
          </div>
        </div>

        <div className="prayer-card">
          <div className="prayer-overlay"></div>
          <div className="prayer-content">
            <p className="prayer-label">WE INTERCEDE</p>
            <h3 className="prayer-title">JOIN OUR<br />FELLOWSHIP </h3>
            <a href="/about#join" className="prayer-cta">JOIN NOW</a>
          </div>
        </div>
      </section>

      {/* PASTOR */}
      <section className="pastor" >
        <div className="pastor-image fade-right">
          <img src="/images/pastor.png" alt="Pastor Segun Oyegoke" />
        </div>
        <div className="pastor-content fade-left">
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

      {/* GIVE */}
      <section className="give">
        <div className="give-card">
          <div className="give-left fade-right">
            <h2 className="give-title">GIVE TO THE EAGLES ASSEMBLY</h2>
            <p className="give-text">Your generosity keeps blessing lives, thank you for giving</p>
            <div className="give-buttons">
              <a href="/give" className="give-btn-outline">GIVE NOW</a>
              <a href="/give" className="give-btn-solid">BUILDING PROJECT</a>
            </div>
          </div>
          <div className="give-right fade-left">
            <img src="/images/give.png" alt="Giving Hands" className="give-illustration" />
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default Home
