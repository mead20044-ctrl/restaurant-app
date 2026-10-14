# The Golden Spoon 🍽️

A restaurant ordering website built with React. Browse the menu, add dishes to your cart, and place an order through a simple checkout flow.

🔗 **Live demo:** https://restaurant-app-six-kappa.vercel.app

## Features

- Responsive header with a mobile navigation menu
- Hero section and an "Our story" section
- Menu with category tabs and live search
- Shopping cart drawer: add items, change quantities, remove items
- Cart saved in the browser (localStorage), so it survives page refreshes
- Checkout form with validation and an order summary
- Order confirmation page
- Footer with opening hours and contact details

## Tech Stack

- [React](https://react.dev/)
- [Vite](https://vite.dev/)
- Plain CSS
- JavaScript (ES6+)

## Getting Started

1. Clone the repository:

```bash
   git clone https://github.com/mead20044-ctrl/restaurant-app.git
   cd restaurant-app
```

2. Install dependencies:

```bash
   npm install
```

3. Start the development server:

```bash
   npm run dev
```

4. Open the local address shown in the terminal (usually `http://localhost:5173`).

## Project Structure

```
src/
├── components/
│   ├── Header.jsx
│   ├── Hero.jsx
│   ├── Menu.jsx
│   ├── Cart.jsx
│   ├── Checkout.jsx
│   ├── Confirmation.jsx
│   ├── About.jsx
│   └── Footer.jsx
├── menuData.js
├── App.jsx
├── App.css
└── index.css
```

## What I Learned

- Building a UI from reusable React components
- Managing state with `useState` and side effects with `useEffect`
- Passing data between components with props
- Working with forms and validation
- Version control with Git and GitHub

## Future Improvements

- Connect to a backend to store real orders
- Add user accounts
- Add online payment
- Add Arabic language support (RTL)