import React from 'react';
import './footer.css'

const Footer = (props) => {
  return (
    <div className='footer'>
      <div className='first'>
        <button>Learn more about the community</button>
        <button>Join our work</button>
        <p>© 2018 ECSA</p>
      </div>
      <div className='second'>
        <button>Library</button>
        <button>Twitter</button>
        <button>Telegram</button>
        <button>Facebook</button>
        <button>Medium</button>
        <button>Youtube</button>
      </div>
    </div>
  )
}

export default Footer;