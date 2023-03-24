import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import About from './pages/About'
import Restaurants from './pages/Restaurants'
import Restaurant from './pages/Restaurant'
import Cart from './pages/Cart'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import Success from './pages/Success'
import Cancel from './pages/Cancel'

const stripePromise = loadStripe('pk_test_51McD8vHoDJ3E1I0xEcFEfemASQuck5jNMX2w4fs1isBsVUCtebarYhSM4bCTjMzuoy1bX5nSdsLCvGK495qlmOxC00nEWh7OkF')

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <App />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/cart',
        element: <Cart />
      },
      {
        path: '/success',
        element: <Success />
      },
      {
        path: '/cancel',
        element: <Cancel />
      },
      {
        path: '/restaurants',
        children: [
          {
            path: '',
            element: <Restaurants />
          },
          {
            path: ':id', // Route = /restaurants/<id_du_restaurant>
            element: <Restaurant />
          }
        ]
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Elements stripe={stripePromise}>
      <RouterProvider router={router} />
    </Elements>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
