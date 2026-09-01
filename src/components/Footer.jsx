function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-container">
        <div className="footer-brand">
          <span className="footer-logo">LITTLE LEMON</span>
          <p>© 2026 Little Lemon. All rights reserved.</p>
        </div>

        {/* <div className="footer-nav">
          <h3>Navigation</h3>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#menu">Menu</a>
            </li>
            <li>
              <Link to="/reservations">Reservations</Link>
            </li>
            <li>
              <a href="#order">Order Online</a>
            </li>
          </ul>
        </div> */}

        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>123 Main St, Chicago, IL</p>
          <p>Phone: 418 888 3291</p>
          <p>Email: info@littlelemon.com</p>
        </div>

        <div className="footer-social">
          <h3>Social Media</h3>
          <ul>
            <li>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
