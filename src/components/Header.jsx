function Header({ cartCount, onCartClick }) {
  return (
    <header className="site-header">
      <div className="site-header_inner">
        <a href="#hero" className="brand">
          <svg className="icon brand_mark">
            <use href="/icons.svg#logo-mark" />
          </svg>
          The Golden Spoon
        </a>

        <nav className="main-nav">
          <a href="#hero">Home</a>
          <a href="#menu">Menu</a>
          <a href="#about">About Us</a>
          <a href="#footer">Contact Us</a>
        </nav>

        <button className="icon-btn cart-btn" onClick={onCartClick}>
          <svg className="icon">
            <use href="/icons.svg#cart-icon" />
          </svg>
          <span className="cart-btn_badge">{cartCount}</span>
        </button>

        <button className="icon-btn nav-toggle">
          <svg className="icon">
            <use href="/icons.svg#menu-icon" />
          </svg>
        </button>
      </div>
    </header>
  )
}

export default Header