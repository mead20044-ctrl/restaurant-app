function Confirmation({ order, onBackToMenu }) {
  const { customer, lines, deliveryFee, total } = order

  const paymentLabel =
    customer.payment === 'card' ? 'credit card' : 'cash on delivery'

  return (
    <section className="confirmation">
      <div className="confirmation_icon">
        <svg className="icon">
          <use href="/icons.svg#check-circle-icon" />
        </svg>
      </div>

      <h2>Thank you, {customer.name}!</h2>
      <p className="confirmation_lead">
        Your order has been placed and is being prepared. You chose to pay by{' '}
        {paymentLabel}, and we will deliver to {customer.address}.
      </p>

      <div className="confirmation_summary">
        <ul>
          {lines.map((l) => (
            <li key={l.id}>
              <span>
                {l.qty} × {l.name}
              </span>
              <span>${(l.price * l.qty).toFixed(2)}</span>
            </li>
          ))}
          <li>
            <span>Delivery</span>
            <span>${deliveryFee.toFixed(2)}</span>
          </li>
        </ul>

        <div className="confirmation_total">
          <span>Total</span>
          <strong>${total.toFixed(2)}</strong>
        </div>
      </div>

      <button className="btn btn--primary" onClick={onBackToMenu}>
        Back to menu
      </button>
    </section>
  )
}

export default Confirmation