import heroImg from '../assets/hero.png';

const About = () => {
  return (
    <div className="page-container">
      {/* Hero */}
      <section className="about-hero">
        <h1>We pioneered the discount broking model in India.</h1>
        <h2>Now, we are breaking ground with our technology.</h2>
      </section>

      {/* Story section */}
      <section className="about-story">
        <div className="about-row">
          <div className="about-col">
            <h2>Our Story</h2>
            <p>
              Zerodha was founded by <strong>Nithin Kamath</strong> in 2010 with
              the mission to break all barriers that traders and investors face in
              India, in terms of cost, support, and technology. We named the
              company Zerodha, a combination of Zero and "Rodha", the Sanskrit
              word for barrier.
            </p>
            <p>
              Today, our disruptive pricing models and in-house technology have
              made us the biggest stock broker in India.
            </p>
            <p>
              Over 1.6+ crore customers place millions of orders every day
              through our powerful ecosystem of investment platforms, contributing
              to over <span className="highlight">15% of all Indian retail trading volumes</span>.
            </p>
          </div>
          <div className="about-col about-col--image">
            <img
              src={heroImg}
              alt="Nithin Kamath"
            />
          </div>
        </div>
      </section>

      {/* Key Numbers */}
      <section className="about-numbers">
        <h2>Key numbers</h2>
        <div className="numbers-grid">
          <div className="number-card">
            <h3>1.6+ Crore</h3>
            <p>Active clients</p>
          </div>
          <div className="number-card">
            <h3>₹6+ Lakh Crore</h3>
            <p>Client assets</p>
          </div>
          <div className="number-card">
            <h3>15%</h3>
            <p>Daily retail exchange volumes</p>
          </div>
          <div className="number-card">
            <h3>2 Crore+</h3>
            <p>Orders per day</p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="about-team">
        <h2>People</h2>
        <div className="team-grid">
          <div className="team-card">
            <img
              src="https://zerodha.com/static/images/nithin-kamath.jpg"
              alt="Nithin Kamath"
            />
            <h4>Nithin Kamath</h4>
            <p>Founder, CEO</p>
          </div>
          <div className="team-card">
            <img
              src="https://zerodha.com/static/images/Nikhil.jpg"
              alt="Nikhil Kamath"
            />
            <h4>Nikhil Kamath</h4>
            <p>Co-founder</p>
          </div>
        </div>
      </section>

      {/* Universe */}
      <section className="about-universe">
        <h2>The Zerodha Universe</h2>
        <p className="about-universe-desc">
          Not just an app, but a whole ecosystem. Our investments in 30+ fintech
          startups offer you tailored services specific to your needs.
        </p>
        <div className="universe-grid">
          <div className="universe-card">
            <h4>🪁 Kite</h4>
            <p>Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more.</p>
          </div>
          <div className="universe-card">
            <h4>🪙 Coin</h4>
            <p>Buy direct mutual funds online, commission-free, delivered directly to your Demat account.</p>
          </div>
          <div className="universe-card">
            <h4>📊 Console</h4>
            <p>The central dashboard for your Zerodha account. Gain insights into your trades and investments.</p>
          </div>
          <div className="universe-card">
            <h4>📚 Varsity</h4>
            <p>An easy-to-grasp collection of stock market lessons with in-depth coverage and illustrations.</p>
          </div>
          <div className="universe-card">
            <h4>⚡ Sentinel</h4>
            <p>Set up market alerts on the cloud based on price, volume, OI, and more.</p>
          </div>
          <div className="universe-card">
            <h4>🔗 Kite Connect</h4>
            <p>Build powerful trading platforms and experiences with our super-simple HTTP/JSON APIs.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;