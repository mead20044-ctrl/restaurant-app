function Footer() {
  return (
    <footer id="footer" className="site-footer">
      <div className="site-footer_grid">
        <div className="footer-col footer-col--brand">
          <a href="#hero" className="brand">
            <svg className="icon brand_mark">
              <use href="/icons.svg#logo-mark" />
            </svg>
            The Golden Spoon
          </a>
          <p>Fresh, local and made with love. Delivered to your door.</p>
          <div className="footer-socials">
            <a href="#footer" aria-label="Instagram">
              <svg className="icon">
                <use href="/icons.svg#instagram-icon" />
              </svg>
            </a>
            <a href="#footer" aria-label="Facebook">
              <svg className="icon">
                <use href="/icons.svg#facebook-icon" />
              </svg>
            </a>
          </div>
        </div>

        <div className="footer-col">
          <h3>Explore</h3>
          <ul>
            <li>
              <a href="#hero">Home</a>
            </li>
            <li>
              <a href="#menu">Menu</a>
            </li>
            <li>
              <a href="#about">About Us</a>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Opening hours</h3>
          <ul className="footer-contact">
            <li>
              <svg className="icon">
                <use href="/icons.svg#clock-icon" />
              </svg>
              Sun – Thu: 11:00 – 23:00
            </li>
            <li>
              <svg className="icon">
                <use href="/icons.svg#clock-icon" />
              </svg>
              Fri – Sat: 13:00 – 00:00
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Contact</h3>
          <ul className="footer-contact">
            <li>
              <svg className="icon">
                <use href="/icons.svg#pin-icon" />
              </svg>
              Riyadh, Saudi Arabia
            </li>
            <li>
              <svg className="icon">
                <use href="/icons.svg#phone-icon" />
              </svg>
              +966 5X XXX XXXX
            </li>
            <li>
              <svg className="icon">
                <use href="/icons.svg#mail-icon" />
              </svg>
              hello@goldenspoon.com
            </li>
          </ul>
        </div>
      </div>

      <div className="site-footer_bottom">
        © 2026 The Golden Spoon. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer