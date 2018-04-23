import React from 'react';
import './footer.css'

const Footer = (props) => {
  return (
    <div className='footer'>
      <div className='first'>
        <button><a href='https://medium.com/economic-spacing'>Learn more about the community</a></button>
        <button><a href='#contact' onClick={props.contactFunction}>Join our work</a></button>
        <p>© 2018 ECSA</p>
      </div>
      <div className='second'>
        <button><a href='http://library.ecsa.io/index.php?title=Economic_Space_Agency_--_Library'>Library</a></button>
        <button><a href='https://twitter.com/ecsa_team?lang=en'>Twitter</a></button>
        <button><a href='https://t.me/economicspaceagency'>Telegram</a></button>
        <button><a href='https://www.facebook.com/economicspaceagency/'>Facebook</a></button>
        <button><a href='https://medium.com/economic-spacing'>Medium</a></button>
        <button><a href='https://www.youtube.com/channel/UCUYSiFZWVcCnL0YMG7Qmvjg'>Youtube</a></button>
      </div>
    </div>
  )
}

export default Footer;