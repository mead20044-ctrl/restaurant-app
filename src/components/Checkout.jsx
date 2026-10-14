import { useState } from 'react'
import { menuItems } from '../menuData'

const DELIVERY_FEE = 3.5

function Checkout({ cart, onBack, onPlaceOrder }) {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    address: '',
    notes: '',
    payment: 'card',
  })
  const [errors, setErrors] = useState({})

  const lines = cart.map((line) => {
    const item = menuItems.find((m) => m.id === line.id)
    return { ...item, qty: line.qty }
  })
  const subtotal = lines.reduce((sum, l) => sum + l.price * l.qty, 0)
  const total = subtotal + DELIVERY_FEE

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const validate = () => {
    const newErrors = {}
    if (!form.name.trim()) {
      newErrors.name = 'Please enter your name.'
    }
    if (!/^[0-9+\s-]{8,15}$/.test(form.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number.'
    }
    if (!form.address.trim()) {
      newErrors.address = 'Please enter your delivery address.'
    }
    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = validate()
    setErrors(newErrors)
    if (Object.keys(newErrors).length > 0) return

    onPlaceOrder({
      customer: form,
      lines,
      subtotal,
      deliveryFee: DELIVERY_FEE,
      total,
    })
  }

  const choosePayment = (value) => {
    setForm((prev) => ({ ...prev, payment: value }))
  }

  return (
    <section className="checkout">
      <button className="btn btn--back" onClick={onBack}>
        <svg className="icon">
          <use href="/icons.svg#arrow-left-icon" />
        </svg>
        Back to menu
      </button>

      <h1>Checkout</h1>

      <div className="checkout_layout">
        <form className="checkout-form" onSubmit={handleSubmit} noValidate>
          <fieldset>
            <legend>Contact details</legend>

            <label>
              Full name
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
              />
              {errors.name && <span className="field-error">{errors.name}</span>}
            </label>

            <label>
              Phone number
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="05xxxxxxxx"
              />
              {errors.phone && (
                <span className="field-error">{errors.phone}</span>
              )}
            </label>
          </fieldset>

          <fieldset>
            <legend>Delivery address</legend>

            <label>
              Address
              <textarea
                name="address"
                rows="3"
                value={form.address}
                onChange={handleChange}
                placeholder="Street, building, area"
              />
              {errors.address && (
                <span className="field-error">{errors.address}</span>
              )}
            </label>

            <label>
              Notes (optional)
              <textarea
                name="notes"
                rows="2"
                value={form.notes}
                onChange={handleChange}
                placeholder="Anything we should know?"
              />
            </label>
          </fieldset>

          <fieldset>
            <legend>Payment method</legend>

            <div className="radio-group">
              <div
                className={
                  form.payment === 'card'
                    ? 'radio-card is-selected'
                    : 'radio-card'
                }
                onClick={() => choosePayment('card')}
              >
                <input
                  type="radio"
                  name="payment"
                  value="card"
                  checked={form.payment === 'card'}
                  onChange={handleChange}
                />
                Credit card
              </div>

              <div
                className={
                  form.payment === 'cash'
                    ? 'radio-card is-selected'
                    : 'radio-card'
                }
                onClick={() => choosePayment('cash')}
              >
                <input
                  type="radio"
                  name="payment"
                  value="cash"
                  checked={form.payment === 'cash'}
                  onChange={handleChange}
                />
                Cash on delivery
              </div>
            </div>
          </fieldset>

          <button type="submit" className="btn btn--primary btn--full">
            Place order · ${total.toFixed(2)}
          </button>
        </form>

        <aside className="order-summary">
          <h3>Order summary</h3>

          <ul className="order-summary_lines">
            {lines.map((l) => (
              <li key={l.id}>
                <div className={`order-summary_image cat-${l.category}`}>
                  <svg className="dish-icon">
                    <use href={`/icons.svg#dish-${l.icon}`} />
                  </svg>
                </div>
                <div className="order-summary_info">
                  <p>{l.name}</p>
                  <span className="order-summary_qty">Qty {l.qty}</span>
                </div>
                <strong>${(l.price * l.qty).toFixed(2)}</strong>
              </li>
            ))}
          </ul>

          <div className="order-summary_totals">
            <div>
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div>
              <span>Delivery</span>
              <span>${DELIVERY_FEE.toFixed(2)}</span>
            </div>
            <div className="order-summary_total">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
        </aside>
      </div>
    </section>
  )
}

export default Checkout