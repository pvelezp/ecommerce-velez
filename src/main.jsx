import React from 'react'
import App from './App'
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from "react-router-dom";
import {ErrorBoundary} from '@/utils'
import { CartProvider, QueryProvider } from '@/context'
import { MainLayout } from '@/components';
import './index.css'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryProvider>
        <Router>
          <ErrorBoundary> 
            <CartProvider>
              <MainLayout>
                <App />
              </MainLayout>
            </CartProvider>
          </ErrorBoundary>
        </Router>
    </QueryProvider>
  </React.StrictMode>
)
