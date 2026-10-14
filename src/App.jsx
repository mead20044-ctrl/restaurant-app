import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Menu from './components/Menu'
import About from './components/About'
import Footer from './components/Footer'
import Cart from './components/Cart'
import Checkout from './components/Checkout'
import Confirmation from './components/Confirmation'

function App() {
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem('cart')
      const parsed = saved ? JSON.parse(saved) : []
      return Array.isArray(parsed) ? parsed : []
    } catch {
      return []
    }
  })
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [view, setView] = useState('shop')
  const [order, setOrder] = useState(null)

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

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

  const goToCheckout = () => {
    setIsCartOpen(false)
    setView('checkout')
    window.scrollTo(0, 0)
  }

  const placeOrder = (details) => {
    setOrder(details)
    setCart([])
    setView('confirmation')
    window.scrollTo(0, 0)
  }

  const cartCount = cart.reduce((sum, line) => sum + line.qty, 0)

  return (
    <div className="app">
      <Header
        cartCount={cartCount}
        onCartClick={() => setIsCartOpen(true)}
      />

      {view === 'shop' && (
        <main>
          <Hero />
          <Menu onAdd={addToCart} />
          <About />
        </main>
      )}

      {view === 'checkout' && (
        <Checkout
          cart={cart}
          onBack={() => setView('shop')}
          onPlaceOrder={placeOrder}
        />
      )}

      {view === 'confirmation' && (
        <Confirmation order={order} onBackToMenu={() => setView('shop')} />
      )}

      <Footer />

      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onChangeQty={changeQty}
        onRemove={removeFromCart}
        onCheckout={goToCheckout}
      />
    </div>
  )
}

export default App