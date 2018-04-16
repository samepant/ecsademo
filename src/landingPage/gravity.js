import React from 'react';
import './project.css'

const Gravity = (props) => {
  return (
    <div className='project-box'>
      <h2>Our projects</h2>
      <div className='project'>
        <p><span className='project-name'>Gravity</span> is a distributed smart contracts protocol. It empowers decentralized governance and value exchange, allowing for the creation of both public and private contracts while maintaining full interoperability among networked constellations of autonomous agents.</p>
        <ul className='features'>
          <li>
            <img alt='gravity illustration' src='/gravity-network.png' />
            <h3>Network of agents and contracts: </h3>
            <p>Gravity enables autonomous agents to define and agree to the protocols that govern their economic interactions.</p>
          </li>
          <li>
            <img alt='gravity illustration' src='/gravity-dapps.png' />
            <h3>Scalable and private decentralized apps:</h3>
            <p>The Gravity protocol connects networks of interoperable VMs to foster decentralized, resilient, secure and private applications.</p>
          </li>
          <li>
            <img alt='gravity illustration' src='/gravity-vmstack.png' />
            <h3>Powerful VM stack:</h3>
            <p>The virtual machines that execute the contract code are autonomous and self-governed while retaining interoperability.</p>
          </li>
        </ul>
      </div>
      <div className='project'>
        <p><span className='project-name'>ECSA Space</span> is a software development kit for the new economy.</p>
        <ul className='features'>
          <li>
            <img alt='Space illustration' src='/space-contract.png' />
            <h3>Programming language for economic abstraction</h3>
            <p>Create and deploy your own smart contracts and governance templates</p>
          </li>
          <li>
            <img alt='Space illustration' src='/space-token.png' />
            <h3>Issue your own token</h3>
            <p>Facilitate fully flexible collaboration and liquidity production with modular tokens that can be customized according to the function and value representation you imagine</p>
          </li>
          <li>
            <img alt='Space illustration' src='/space-finance.png' />
            <h3>Unleash the power of collaborative finance</h3>
            <p>Design economic spaces that rely on equity-based relations; leverage the unrealized value of risk-taking and speculating as a community</p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Gravity;