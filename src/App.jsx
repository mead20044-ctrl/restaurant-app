import './App.css'
import { menuItems } from './menuData'

function App() {
  return (
    <div className="app">
      <main>
        <section className="menu-section">
          <div className="menu-grid">
            {menuItems.map((item) => (
              <article key={item.id} className="menu-card">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <span className="menu-card_price">${item.price}</span>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

export default App