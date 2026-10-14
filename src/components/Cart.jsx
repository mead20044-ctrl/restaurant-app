import { menuItems } from '../menuData'

function Cart({ isOpen, onClose, cart, onChangeQty, onRemove }) {
  const lines = cart.map((line) => {
    const item = menuItems.find((m) => m.id === line.id)
    return { ...item, qty: line.qty }
  })

  const subtotal = lines.reduce((sum, l) => sum + l.price * l.qty, 0)

  return (
    <>
      <div
        className={isOpen ? 'cart-backdrop is-visible' : 'cart-backdrop'}
        onClick={onClose}
      />

      <aside className={isOpen ? 'cart-drawer is-open' : 'cart-drawer'}>
        <div className="cart-drawer_header">
          <h2>
            <svg className="icon">
              <use href="/icons.svg#cart-icon" />
            </svg>
            Your order
          </h2>
          <button className="icon-btn" onClick={onClose}>
            <svg className="icon">
              <use href="/icons.svg#close-icon" />
            </svg>
          </button>
        </div>

        {lines.length === 0 ? (
          <div className="cart-empty">
            <svg className="icon">
              <use href="/icons.svg#cart-icon" />
            </svg>
            <p>Your cart is empty</p>
            <span>Add a dish from the menu to get started.</span>
          </div>
        ) : (
          <>
            <ul className="cart-lines">
              {lines.map((l) => (
                <li key={l.id} className="cart-line">
                  <div className={`cart-line_image cat-${l.category}`}>
                    <svg className="dish-icon">
                      <use href={`/icons.svg#dish-${l.icon}`} />
                    </svg>
                  </div>

                  <div className="cart-line_info">
                    <div className="cart-line_heading">
                      <h4>{l.name}</h4>
                      <button
                        className="cart-line_remove"
                        onClick={() => onRemove(l.id)}
                      >
                        <svg className="icon">
                          <use href="/icons.svg#trash-icon" />
                        </svg>
                      </button>
                    </div>

                    <p className="cart-line_unit">${l.price.toFixed(2)} each</p>

                    <div className="cart-line_footer">
                      <div className="stepper stepper--sm">
                        <button onClick={() => onChangeQty(l.id, -1)}>
                          <svg className="icon">
                            <use href="/icons.svg#minus-icon" />
                          </svg>
                        </button>
                        <span>{l.qty}</span>
                        <button onClick={() => onChangeQty(l.id, 1)}>
                          <svg className="icon">
                            <use href="/icons.svg#plus-icon" />
                          </svg>
                        </button>
                      </div>
                      <span className="cart-line_total">
                        ${(l.price * l.qty).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="cart-drawer_footer">
              <div className="cart-drawer_subtotal">
                <span>Subtotal</span>
                <strong>${subtotal.toFixed(2)}</strong>
              </div>
              <button className="btn btn--primary btn--full">Checkout</button>
              <p className="cart-drawer_hint">
                Delivery fee is calculated at checkout.
              </p>
            </div>
          </>
        )}
      </aside>
    </>
  )
}

export default Cart