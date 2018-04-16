import React, { Component } from 'react'
import {Header} from './header/header.js'
import Hero from './hero.js'
import Gravity from './landingPage/gravity.js'
import Footer from './footer/footer.js'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Hero />
        <Gravity />
        <Footer />
      </div>
    )
  }
}

export default App;
