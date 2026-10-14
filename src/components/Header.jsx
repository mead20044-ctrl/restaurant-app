import { useState } from 'react'

function Header({ cartCount, onCartClick }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="site-header">
      <div className="site-header_inner">
        <a href="#hero" className="brand">
          <svg className="icon brand_mark">
            <use href="/icons.svg#logo-mark" />
          </svg>
          The Golden Spoon
        </a>

        <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'}>
          <a href="#hero" onClick={closeMenu}>
            Home
          </a>
          <a href="#menu" onClick={closeMenu}>
            Menu
          </a>
          <a href="#about" onClick={closeMenu}>
            About Us
          </a>
          <a href="#footer" onClick={closeMenu}>
            Contact Us
          </a>
        </nav>

        <button className="icon-btn cart-btn" onClick={onCartClick}>
          <svg className="icon">
            <use href="/icons.svg#cart-icon" />
          </svg>
          <span className="cart-btn_badge">{cartCount}</span>
        </button>

        <button
          className="icon-btn nav-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="icon">
            <use
              href={menuOpen ? '/icons.svg#close-icon' : '/icons.svg#menu-icon'}
            />
          </svg>
        </button>
      </div>
    </header>
  )
}

export default Header