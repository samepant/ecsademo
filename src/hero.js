import './hero.css'
import React, { Component } from 'react';

export class Hero extends Component {
  render() {
    return (
      <div className='hero' id='hero'>
        <div className='illo' >
          <div className='big-star' />
          <div className='little-star' />
          <div className='perspective-box' />
        </div>
        <h1>Forge new economic space</h1>
        <p>Economic Space Agency (ECSA)  is a distributed and decentralized research and development company with satellites in Oakland, CA, Lisbon, Portugal. Our community of radical economists, artists, and cryptotechnologists are probing the unbounded frontier of economic spacetime by providing partnership, resources and team members to emerging crypto projects.</p>
        <div className='hero-buttons'>
          <button><a href='https://medium.com/economic-spacing'>Learn more about the community</a></button>
          <button><a href='#contact' onClick={this.props.contactFunction}>Join our work</a></button>
        </div>
      </div>
    )
  }
}

export default Hero;