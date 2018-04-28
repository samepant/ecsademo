import React, { Component } from 'react'
import './header.css'

export class Header extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showPopMenu: false
    }

    this.toggleMenu = this.toggleMenu.bind(this)
  }

  toggleMenu () {
    if (this.state.showPopMenu) {
      this.setState({showPopMenu: false})
    } else {
      this.setState({showPopMenu: true})
    }
  }

  render() {
    return (
      <header>
        <div className='logo-box'>
          <Logo isLight={false} />
        </div>
        <div className='nav-box'>
          <ul className='nav'>
            <li><a href='https://t.me/economicspaceagency'>Join us on telegram</a></li>
            <li><a href='https://medium.com/economic-spacing'>Blog</a></li>
          </ul>
          <button className='nav-button' onClick={this.toggleMenu}>Menu</button>
          {this.state.showPopMenu && <PopMenu closeFunction={this.toggleMenu} />}
        </div>
      </header>
    )
  }
}

function Logo(props) {
  return (
    <svg viewBox="0 0 650 275" className={props.isLight ? 'logo light' : 'logo dark'} >
      <path d="M380.14 42.95h-17.57v-13.9h14.49V24.9h-14.49V11.01h17.57V6.86h-21.96v40.23h21.96v-4.14zm39.34-6.7v-1.83h-4.39v2c0 4.8-2.49 7.13-7.61 7.13s-7.61-2.4-7.61-7.13v-18.9c0-4.8 2.49-7.13 7.61-7.13s7.61 2.33 7.61 7.13v2h4.39v-1.87c0-7.46-4.15-11.4-12-11.4s-12 3.94-12 11.4v18.6c0 7.5 4.15 11.47 12 11.47s12-3.97 12-11.47zm26.35-30.01c-7.85 0-12 3.94-12 11.4v18.6c0 7.5 4.15 11.47 12 11.47s12-4 12-11.47V17.65c-.01-7.46-4.15-11.41-12-11.41zm-7.61 11.28c0-4.8 2.49-7.13 7.61-7.13s7.61 2.33 7.61 7.13v18.91c0 4.8-2.49 7.13-7.61 7.13s-7.61-2.4-7.61-7.13zm38.34-.79l16.19 30.18.1.18h3.32V6.86h-4.38v30.37L475.6 7.04l-.1-.18h-3.33v40.23h4.39V16.73zm45.96 30.98c7.85 0 12-4 12-11.47V17.65c0-7.46-4.15-11.4-12-11.4s-12 3.94-12 11.4v18.6c.01 7.5 4.15 11.46 12 11.46zm7.61-11.28c0 4.8-2.49 7.13-7.61 7.13s-7.61-2.4-7.61-7.13V17.52c0-4.8 2.49-7.13 7.61-7.13s7.61 2.33 7.61 7.13zm32.25-6.76l6.1-12.12v29.54h4.39V6.86h-3.27l-8.67 17.67-8.63-17.48-.09-.19h-3.34v40.23h4.39V17.62l6.04 12.05h3.08zm26.51-18.66h8.14v31.94h-8.14v4.14h20.73v-4.14h-8.21V11.01h8.21V6.86h-20.73v4.15zm48.68 36.7c7.85 0 12-4 12-11.47v-1.82h-4.39v2c0 4.8-2.49 7.13-7.61 7.13S630 41.16 630 36.43V17.52c0-4.8 2.49-7.13 7.61-7.13s7.61 2.33 7.61 7.13v2h4.39v-1.87c0-7.46-4.15-11.4-12-11.4s-12 3.94-12 11.4v18.6c-.04 7.5 4.11 11.46 11.96 11.46zM369.13 158.24c7.63 0 12-3.89 12-10.66 0-7.35-5.81-9.81-10.93-12-4.46-1.89-8.68-3.68-8.68-8.35 0-4.08 2.7-6.33 7.61-6.33s7.61 2.48 7.61 7.38v.34h4.39v-.34c0-7.43-4.26-11.53-12-11.53s-12 3.86-12 10.6c0 7.35 5.81 9.81 10.93 12 4.46 1.89 8.68 3.68 8.68 8.35 0 4.12-2.68 6.39-7.55 6.39-5.09 0-7.67-2.48-7.67-7.38v-.34h-4.39v.34c0 7.43 4.26 11.53 12 11.53zm67.11-40.86h-12v40.24h4.39v-18h7.61c7.85 0 12-3.86 12-11.16s-4.15-11.08-12-11.08zm-7.61 4.15h7.61c5.12 0 7.61 2.21 7.61 6.76v.49c0 4.51-2.49 6.7-7.61 6.7h-7.61zm76.89-4.15h-4.34L490.87 153v4.64h4.39v-4.38l2.2-7.8h11.81l2.26 8v4.19h4.39v-4.55l-10.31-35.44zm2.56 23.91h-9.45l4.73-16.8zm74.38 5.48v-1.83h-4.39v2c0 4.8-2.49 7.13-7.61 7.13s-7.61-2.4-7.61-7.13V128c0-4.8 2.49-7.13 7.61-7.13s7.61 2.33 7.61 7.13v2h4.39v-1.89c0-7.46-4.15-11.4-12-11.4s-12 3.94-12 11.4v18.6c0 7.5 4.15 11.47 12 11.47s12-3.91 12-11.41zm66.12-25.24v-4.15h-21.96v40.24h21.96v-4.15h-17.57v-13.9h14.49v-4.14h-14.49v-13.9h17.57zM371.3 227.9H367l-10.35 35.6v4.64H361v-4.38l2.2-7.8H375l2.26 8v4.19h4.39v-4.55l-10.31-35.44zm2.56 23.91h-9.46l4.73-16.8zm48.96-24.52c-7.85 0-12 3.94-12 11.4v18.6c0 7.5 4.15 11.47 12 11.47s12-4 12-11.47v-9.06H423.4v4.15h7v5.09c0 4.8-2.49 7.13-7.61 7.13s-7.61-2.4-7.61-7.13v-18.9c0-4.8 2.49-7.13 7.61-7.13s7.61 2.33 7.61 7.13V240h4.39v-1.27c.03-7.5-4.12-11.44-11.97-11.44zm42.73 40.85h21.97v-4.15h-17.58V250.1h14.49v-4.15h-14.49v-13.9h17.58v-4.15h-21.97v40.24zm72.25-9.87l-16.18-30.18-.1-.19h-3.33v40.24h4.39v-30.36l16.19 30.18.1.18h3.32V227.9h-4.39v30.37zm46.08-30.98c-7.85 0-12 3.94-12 11.4v18.6c0 7.5 4.15 11.47 12 11.47s12-4 12-11.47v-1.83h-4.39v2c0 4.8-2.49 7.13-7.61 7.13s-7.61-2.4-7.61-7.13v-18.89c0-4.8 2.49-7.13 7.61-7.13s7.61 2.33 7.61 7.13v2h4.39v-1.89c0-7.45-4.15-11.39-12-11.39zm61.73.61v4.95l-8.04 14.4-8.04-14.4v-4.95h-4.39v6.13l10.24 17.73v16.38h4.38v-16.38L650 234.03v-6.13h-4.39z"/>
      <circle cx="9.86" cy="18.23" r="9.07"/>
      <circle cx="9.86" cy="77.8" r="9.07"/>
      <circle cx="9.86" cy="137.38" r="9.07"/>
      <circle cx="9.86" cy="196.95" r="9.07"/>
      <circle cx="9.86" cy="256.52" r="9.07"/>
      <circle cx="80.4" cy="18.23" r="9.07"/>
      <circle cx="80.4" cy="77.8" r="9.07"/>
      <circle cx="80.4" cy="137.38" r="9.07"/>
      <circle cx="80.4" cy="196.95" r="9.07"/>
      <circle cx="80.4" cy="256.52" r="9.07"/>
      <circle cx="150.95" cy="18.23" r="9.07"/>
      <circle cx="150.95" cy="77.8" r="9.07"/>
      <circle cx="150.95" cy="137.38" r="9.07"/>
      <circle cx="150.95" cy="196.95" r="9.07"/>
      <circle cx="150.95" cy="256.52" r="9.07"/>
      <circle cx="221.5" cy="18.23" r="9.07"/>
      <circle cx="221.5" cy="77.8" r="9.07"/>
      <circle cx="221.5" cy="137.38" r="9.07"/>
      <circle cx="221.5" cy="196.95" r="9.07"/>
      <circle cx="221.5" cy="256.52" r="9.07"/>
      <circle cx="292.04" cy="18.23" r="9.07"/>
      <circle cx="292.04" cy="77.8" r="9.07"/>
      <circle cx="292.04" cy="137.38" r="9.07"/>
      <circle cx="292.04" cy="196.95" r="9.07"/>
      <circle cx="292.04" cy="256.52" r="9.07"/>
    </svg>
  )
}

class PopMenu extends Component {
  constructor (props) {
    super(props)

    this.state = {
      height: window.innerHeight,
      width: window.innerWidth
    }
  }



  render () {
    return (
      <div className='pop-menu' style={{width: this.state.width, height: this.state.height}}>
        <button className='close nav-button' onClick={this.props.closeFunction}>╳</button>
        <Logo isLight={true} />
        <ul className='nav'>
          <li><button><a href='https://t.me/economicspaceagency'>Join us on telegram</a></button></li>
          <li><button><a href='https://medium.com/economic-spacing'>Blog</a></button></li>
        </ul>
      </div>
    )
  }
}