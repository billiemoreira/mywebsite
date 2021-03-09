import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import Main from './screens/Main'
import About from './screens/About'
import Contact from './screens/Contact'
import Juriswed from './screens/Main/Projects/Juriswed'
import Heroic from './screens/Main/Projects/Heroic'
import Beparty from './screens/Main/Projects/Beparty'
import Redesign from './screens/Main/Projects/Redesign'
import TradeBook from './screens/Main/Projects/TradeBook'

function App() {
  return (
    <div className="container is-fullhd">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/projects/heroic" component={Heroic} />
          <Route path="/projects/juriswed" component={Juriswed} />
          <Route path="/projects/beparty" component={Beparty} />
          <Route path="/projects/redesign" component={Redesign} />
          <Route path="/projects/tradebook" component={TradeBook} />
        </Switch>
        <Footer />
      </Router>
    </div>
  )
}

export default App
