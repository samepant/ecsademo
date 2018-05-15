import React from 'react';
import './footer.css'

const Footer = (props) => {
  return (
    <div className='footer'>
      <div className='first'>
        <button className='with-link'><a href='https://medium.com/economic-spacing'>Learn more about the community</a></button>
        <button onClick={props.contactFunction}>Join our work</button>
        <p>© 2018 ECSA</p>
      </div>
      <div className='second'>
        <button className='with-link'><a href='http://library.ecsa.io/index.php?title=Economic_Space_Agency_--_Library'>Library</a></button>
        <button className='with-link'><a href='https://twitter.com/ecsa_team?lang=en'>Twitter</a></button>
        <button className='with-link'><a href='https://t.me/economicspaceagency'>Telegram</a></button>
        <button className='with-link'><a href='https://www.facebook.com/economicspaceagency/'>Facebook</a></button>
        <button className='with-link'><a href='https://medium.com/economic-spacing'>Medium</a></button>
        <button className='with-link'><a href='https://www.youtube.com/channel/UCUYSiFZWVcCnL0YMG7Qmvjg'>Youtube</a></button>
      </div>
    </div>
  )
}

export default Footer;