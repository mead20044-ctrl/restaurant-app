function About() {
  return (
    <section id="about" className="about">
      <div className="about_text">
        <p className="eyebrow">Our story</p>
        <h2>Cooked with care, served with a smile</h2>
        <p>
          The Golden Spoon started as a small family kitchen with one simple
          idea: good ingredients, cooked fresh, make everyone happier. Today
          we still prepare every dish to order, using local produce and
          recipes passed down through the years.
        </p>
      </div>

      <ul className="about_stats">
        <li>
          <strong>12</strong>
          <span>Years cooking</span>
        </li>
        <li>
          <strong>10</strong>
          <span>Signature dishes</span>
        </li>
        <li>
          <strong>4.9</strong>
          <span>Average rating</span>
        </li>
      </ul>
    </section>
  )
}

export default About