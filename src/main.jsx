import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter as Router } from "react-router-dom";
import ErrorBoundary from '@/utils/error-boundary'
import { CartProvider } from '@/context/cart-context'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
            <Router>
		<ErrorBoundary>
			<CartProvider>
        <App />
      </CartProvider>
    </ErrorBoundary>
            </Router>
  </React.StrictMode> || document.createElement("div"),
)
