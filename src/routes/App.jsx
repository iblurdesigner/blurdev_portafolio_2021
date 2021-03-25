import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// import Router from '../components/router'

import AppContext from '../context/AppContext'
import useInitialState from '../hooks/useInitialState'

import Home from '../containers/Home'
import NotFound from '../containers/NotFound'
import About from '../containers/About'
import Contact from '../containers/Contact'
import Portfolio from '../containers/Portfolio'
import Webapps from '../containers/Webapps'
import WebSites from '../containers/WebSites'
import GraphicDesign from '../containers/GraphicDesign'
import ReactView from '../containers/ReactView'
import Flutter from '../containers/Flutter'
import JSView from '../containers/JsView'

// Layouts
import AppLayout from '../components/AppLayout'
import PortfolioLayout from '../components/PortfolioLayout'

// Routear varios layouts
const AppRoute = ({ component: Component, layout: Layout, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (
      <Layout>
        <Component {...props} />
      </Layout>
    )}
  />
)

const App = () => {
  const initialState = useInitialState()
  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <Switch>
          <AppRoute exact path="/" layout={AppLayout} component={Home} />
          <AppRoute exact path="/about" layout={AppLayout} component={About} />
          <AppRoute
            exact
            path="/contact"
            layout={AppLayout}
            component={Contact}
          />

          <AppRoute
            exact
            path="/portfolio"
            layout={PortfolioLayout}
            component={Portfolio}
          />
          <AppRoute
            exact
            path="/portfolio/webapps"
            layout={PortfolioLayout}
            component={Webapps}
          />
          <AppRoute
            exact
            path="/portfolio/websites"
            layout={PortfolioLayout}
            component={WebSites}
          />
          <AppRoute
            exact
            path="/portfolio/graphicdesign"
            layout={PortfolioLayout}
            component={GraphicDesign}
          />
          <AppRoute
            exact
            path="/portfolio/reactjs"
            layout={PortfolioLayout}
            component={ReactView}
          />
          <AppRoute
            exact
            path="/portfolio/flutter"
            layout={PortfolioLayout}
            component={Flutter}
          />
          <AppRoute
            exact
            path="/portfolio/js"
            layout={PortfolioLayout}
            component={JSView}
          />

          <AppRoute layout={AppLayout} component={NotFound} />
        </Switch>
      </BrowserRouter>
    </AppContext.Provider>
  )
}

export default App
