import React from 'react';
import './contact.css'

export default class contact extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      'submitted': false,
      'fname': '',
      'lname': '',
      'email': '',
      'interest': ''
    }
  }

  render() {
    return (
      <div className='contact'>
          <div id="mc_embed_signup">
            <form action="https://agency.us16.list-manage.com/subscribe/post?u=c669cb7717a6e816f390971fc&amp;id=3b6b6d8f03" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
              <div id="mc_embed_signup_scroll">
              <h2>Thanks for your interest!</h2>
              <div className="mc-field-group">
                <label htmlFor="mce-EMAIL" className='required'>Email Address </label>
                <input type="email" value={this.state.email} name="EMAIL" className="required email" id="mce-EMAIL"  onChange={ (e)=>{this.setState({email: e.target.value});} } />
              </div>
              <div className="mc-field-group">
                <label htmlFor="mce-FNAME">First Name </label>
                <input type="text" value={this.state.fname} name="FNAME" className="" id="mce-FNAME"  onChange={ (e)=>{this.setState({fname: e.target.value});} } />
              </div>
              <div className="mc-field-group">
                <label htmlFor="mce-LNAME">Last Name </label>
                <input type="text" value={this.state.lname} name="LNAME" className="" id="mce-LNAME"  onChange={ (e)=>{this.setState({lname: e.target.value});} } />
              </div>
              <div className="mc-field-group input-group">
                <h3>Support I can offer</h3>
                <ul>
                  <li><label className='radio-group' htmlFor="mce-MMERGE4-0">Hacker
                        <input type="radio" value="Hacker" name="MMERGE4" id="mce-MMERGE4-0" onChange={ (e)=>{this.setState({interest: e.target.value});} } />
                        <span className="checkmark"></span>
                      </label>
                  </li>
                  <li><label className='radio-group' htmlFor="mce-MMERGE4-1">Econaut
                      <input type="radio" value="Econaut" name="MMERGE4" id="mce-MMERGE4-1" onChange={ (e)=>{this.setState({interest: e.target.value});} } />
                      <span className="checkmark"></span>
                      </label>
                  </li>
                  <li><label className='radio-group' htmlFor="mce-MMERGE4-2">Investor
                      <input type="radio" value="Investor" name="MMERGE4" id="mce-MMERGE4-2" onChange={ (e)=>{this.setState({interest: e.target.value});} } />
                      <span className="checkmark"></span>
                    </label>
                  </li>
                </ul>
              </div>
              <div id="mce-responses" className="clear">
                <div className="response" id="mce-error-response" style={{display: 'none'}}></div>
                <div className="response" id="mce-success-response" style={{display: 'none'}}></div>
              </div>  
                <div style={{position: 'absolute', left: '-5000px'}} aria-hidden="true"><input type="text" name="b_c669cb7717a6e816f390971fc_3b6b6d8f03" tabIndex="-1" value="" /></div>
                <div className="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button" /></div>
              </div>
            </form>
          </div>
      </div>
    );
  }
}
