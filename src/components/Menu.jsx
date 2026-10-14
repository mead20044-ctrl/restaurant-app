import { useState } from 'react'
import { categories, menuItems } from '../menuData'

function Menu({ onAdd }) {  const [activeCategory, setActiveCategory] = useState('all')
  const [search, setSearch] = useState('')

  const visibleItems = menuItems.filter((item) => {
    const matchesCategory =
      activeCategory === 'all' || item.category === activeCategory

    const text = (item.name + ' ' + item.description).toLowerCase()
    const matchesSearch = text.includes(search.trim().toLowerCase())

    return matchesCategory && matchesSearch
  })

  return (
    <section id="menu" className="menu-section">
      <div className="section-heading">
        <p className="eyebrow">OUR MENU</p>
        <h2>Pick Your Favorites</h2>
      </div>

      <div className="menu-controls">
        <div className="category-tabs">
          <button
            className={
              activeCategory === 'all'
                ? 'category-tab is-active'
                : 'category-tab'
            }
            onClick={() => setActiveCategory('all')}
          >
            All
          </button>

          {categories.map((cat) => (
            <button
              key={cat.id}
              className={
                activeCategory === cat.id
                  ? 'category-tab is-active'
                  : 'category-tab'
              }
              style={{ '--tab-color': cat.color }}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <label className="search-field">
          <svg className="icon search-field_icon">
            <use href="/icons.svg#search-icon" />
          </svg>

          <input
            type="text"
            placeholder="Search for a dish..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </label>
      </div>

      {visibleItems.length === 0 ? (
        <p className="menu-empty">
          No dishes match your search.
        </p>
      ) : (
        <div className="menu-grid">
          {visibleItems.map((item) => (
            <article key={item.id} className="menu-card">
              <div className={`menu-card_image cat-${item.category}`}>
                <svg className="dish-icon">
                  <use href={`/icons.svg#dish-${item.icon}`} />
                </svg>

                {item.tags.includes('popular') && (
                  <span className="badge badge--popular">
                    <svg className="icon">
                      <use href="/icons.svg#flame-icon" />
                    </svg>
                    Popular
                  </span>
                )}

                {item.tags.includes('veg') && (
                  <span className="badge badge--veg">
                    <svg className="icon">
                      <use href="/icons.svg#leaf-icon" />
                    </svg>
                    Vegetarian
                  </span>
                )}
              </div>

              <div className="menu-card_body">
                <div className="menu-card_heading">
                  <h3>{item.name}</h3>
                  <span className="menu-card_price">
                    ${item.price.toFixed(2)}
                  </span>
                </div>

                <p>{item.description}</p>
              </div>

              <div className="menu-card_footer">
               <button className="btn btn--add" onClick={() => onAdd(item.id)}>
                  <svg className="icon">
                    <use href="/icons.svg#plus-icon" />
                  </svg>
                  Add to Cart
                </button>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  )
}

export default Menu