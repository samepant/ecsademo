import React, { Component } from 'react'
import {Header} from './header/header.js'
import Footer from './footer/footer.js'
import Contact from './contact.js'

class Layout extends Component {
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
      <div className='App'>
        <Header />
        {this.props.children}
        <Footer contactFunction={this.toggleContact} />
        { this.state.showContact && <Contact contactFunction={this.toggleContact} />}
      </div>
    )
  }
}

export default Layout;