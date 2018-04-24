import React from 'react';
import './project.css'

const Gravity = (props) => {
  return (
    <div className='project-box'>
      <h2>ECSA projects currently incubating:</h2>
      <div className='project full-image-strength'>
        <p><span className='project-name'>ECSA Gravity</span> is a resilient distributed programming language and runtime, with a secure computational model and cryptographically secured persistent state and protocols.</p>
        <ul className='features'>
          <li>
            <img alt='gravity illustration' src='gravity-network.png' />
            <h3>Protocol</h3>
            <p>The Gravity protocol implements a language based on lambda calculus, prototypes and message passing, and object capabilities, programing secure protocols.</p>
          </li>
          <li>
            <img alt='gravity illustration' src='gravity-dapps.png' />
            <h3>Node</h3>
            <p>A Gravity Node is a fully isolated computational process, with private state and only connected to other Gravity nodes through cryptographic capabilities.</p>
          </li>
          <li>
            <img alt='gravity illustration' src='gravity-vmstack.png' />
            <h3>Application</h3>
            <p>A Gravity Application implements protocols and consistent computation that can span across full networks of Gravity nodes.</p>
          </li>
        </ul>
      </div>
      <div className='project'>
        <p><span className='project-name'>ECSA Space</span> is a software development kit for the new economy.</p>
        <ul className='features'>
          <li>
            <img alt='Space illustration' src='space-contract.png' />
            <h3>Programming language for economic abstraction</h3>
            <p>Create and deploy your own smart contracts and governance templates</p>
          </li>
          <li>
            <img alt='Space illustration' src='space-token.png' />
            <h3>Issue your own token</h3>
            <p>Facilitate fully flexible collaboration and liquidity production with modular tokens that can be customized according to the function and value representation you imagine</p>
          </li>
          <li>
            <img alt='Space illustration' src='space-finance.png' />
            <h3>Unleash the power of collaborative finance</h3>
            <p>Design economic spaces that rely on equity-based relations; leverage the unrealized value of risk-taking and speculating as a community</p>
          </li>
        </ul>
      </div>
      <div className='project'>
        <p><span className='project-name'>ECSA Accelerator’s</span> mission is to foster, form, and facilitate economic spaces that form the economic stack: the infrastructure of a new paradigm of economic autonomy.</p>
        <ul className='features'>
          <li>
            <img alt='Space illustration' src='accelerate.png' />
            <h3>Space Accelerator</h3>
            <p>The Accelerator team provide consulting services to spaces that relate to us as external network members and clients. Please inspect our public service book on Github/Dynalist and contact us.</p>
          </li>
          <li>
            <img alt='Space illustration' src='amplify.png' />
            <h3>Signal Amplification</h3>
            <p>Accelerator clients gain access to workshops, courses, curriculum and other media on cryptoeconomics and space invention content, research, and bleeding edge thinking.</p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Gravity;