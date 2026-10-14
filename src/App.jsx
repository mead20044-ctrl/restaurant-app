import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Menu from './components/Menu'
import Cart from './components/Cart'

function App() {
  const [cart, setCart] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  const addToCart = (id) => {
    setCart((prev) => {
      const existing = prev.find((line) => line.id === id)
      if (existing) {
        return prev.map((line) =>
          line.id === id ? { ...line, qty: line.qty + 1 } : line
        )
      }
      return [...prev, { id, qty: 1 }]
    })
  }

  const changeQty = (id, delta) => {
    setCart((prev) =>
      prev
        .map((line) =>
          line.id === id ? { ...line, qty: line.qty + delta } : line
        )
        .filter((line) => line.qty > 0)
    )
  }

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((line) => line.id !== id))
  }

  const cartCount = cart.reduce((sum, line) => sum + line.qty, 0)

  return (
    <div className="app">
      <Header
        cartCount={cartCount}
        onCartClick={() => setIsCartOpen(true)}
      />
      <main>
        <Hero />
        <Menu onAdd={addToCart} />
      </main>
      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onChangeQty={changeQty}
        onRemove={removeFromCart}
      />
    </div>
  )
}

export default App