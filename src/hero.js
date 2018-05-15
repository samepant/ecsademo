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
        <h1>Warp economic spacetime</h1>
        <p>Economic Space Agency (ECSA) is a distributed and decentralized research and development organization with satellites in Oakland, Palo Alto, Berlin, Helsinki, Lisbon and Montreal. We are a group of radical economists, finance theorists, software engineers, game designer and cryptotechnologists probing the unbounded frontier of economic spacetime by building a new stack of economic agency: a resilient distributed programming language and runtime, with a secure computational model and cryptographically secured persistent state and protocols, for operating next gen distributed economic-organizational applications (Gravity), a toolkit for enabling not only distributed exchange but distributed value production (Space), a distributed incubator and accelerator of new economic space and agency, new wild financial instruments and intelligent social derivatives (Xcclerator).</p>
        <div className='hero-buttons'>
          <button className='with-link'><a href='https://medium.com/economic-spacing'>Learn more about the community</a></button>
          <button onClick={this.props.contactFunction}>Join our work</button>
        </div>
      </div>
    )
  }
}

export default Hero;