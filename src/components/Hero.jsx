function Hero() {
  return (
    <section id="hero" className="hero">
      <div>
        <p className="eyebrow">FRESH · LOCAL · MADE WITH LOVE</p>

        <h1>Good food, good mood.</h1>

        <p className="hero_lead">
          From wood-fired pizza to hand-tossed pasta, every dish on our
          menu is freshly prepared to order and delivered straight to your
          door.
        </p>

        <div className="hero_actions">
          <a href="#menu" className="btn btn--primary">
            Order Now
          </a>

          <a href="#about" className="btn btn--ghost">
            Our Story
          </a>
        </div>
      </div>

      <div className="hero_art">
        <div className="hero_plate hero_plate--lg cat-mains">
          <svg className="dish-icon">
            <use href="/icons.svg#dish-pizza" />
          </svg>
        </div>

        <div className="hero_plate hero_plate--md cat-desserts">
          <svg className="dish-icon">
            <use href="/icons.svg#dish-cupcake" />
          </svg>
        </div>

        <div className="hero_plate hero_plate--sm cat-drinks">
          <svg className="dish-icon">
            <use href="/icons.svg#dish-mojito" />
          </svg>
        </div>
      </div>
    </section>
  );
}

export default Hero;