import React, { Component } from 'react'
import Layout from './Layout.js'
import Hero from './hero.js'
import Gravity from './landingPage/gravity.js'
import Contact from './contact.js'

class LandingPage extends Component {
  constructor () {
    super()

    this.state = {
      showContact: false
    }

    this.toggleContact = this.toggleContact.bind(this)
  }

  toggleContact() {
    if (this.state.showContact) {
      this.setState({showContact: false})
    } else {
      this.setState({showContact: true})
    }
  }

  render() {
    return (
      <Layout>
        <Hero contactFunction={this.toggleContact} />
        <Gravity />
        { this.state.showContact && <Contact contactFunction={this.toggleContact} />}
      </Layout>
    )
  }
}

export default LandingPage;
