import BigNumber from 'bignumber.js'
import { createBrowserHistory } from 'history'
import React, { Fragment } from 'react'
import { Route, Routes } from "react-router-dom"
import Home from 'views/Home'
import Register from 'views/Register'
import Invoices from 'views/Invoices'

// Route-based code splitting
// Only pool is included in the main bundle because of it's the most visited page
// This config is required for number formatting Membership   
BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
})

const App: React.FC = () => {
  return (
    <Fragment>
      <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="register" element={ <Register/> } />
          <Route path="invoice" element={ <Invoices/> } />
      </Routes>
    </Fragment>
    
  )
}

export default React.memo(App)