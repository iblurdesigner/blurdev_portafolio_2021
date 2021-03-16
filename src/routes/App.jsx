import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from '../containers/Home'
import Checkout from '../containers/Checkout'
import Information from '../containers/Information'
import NotFound from '../containers/NotFound'
import AppContext from '../context/AppContext'
import useInitialState from '../hooks/useInitialState'
import About from '../containers/About'
import Portfolio from '../containers/Portfolio'
import Contact from '../containers/Contact'
import AppLayout from '../components/AppLayout'

const App = () => {
  const initialState = useInitialState()
  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <AppLayout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/checkout" component={Checkout} />
            <Route exact path="/checkout/information" component={Information} />
            <Route component={NotFound} />
          </Switch>
        </AppLayout>
      </BrowserRouter>
    </AppContext.Provider>
  )
}

export default App
