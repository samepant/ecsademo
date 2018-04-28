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
      'extra': '',
      'interest': ''
    }

    this.submitForm = this.submitForm.bind(this)
  }

  componentDidMount() {
    const form = document.getElementById('mc_embed_signup')
    const height = window.innerHeight

    form.style.maxHeight = (height - 90) + 'px'
  }

  submitForm(e) {
    const thank = document.getElementById('thank')
    thank.style.display = 'flex'
    setTimeout(() => {
      this.props.contactFunction()
    }, 500)
  }

  render() {
    return (
      <div className='contact'>
          <div id="mc_embed_signup">
           <button className='close' onClick={this.props.contactFunction}>╳</button>
            <form onSubmit={this.submitForm}  action="https://agency.us16.list-manage.com/subscribe/post?u=c669cb7717a6e816f390971fc&amp;id=3b6b6d8f03"  method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" >
              <div id="mc_embed_signup_scroll">
              <h2>Thanks for your interest!</h2>
              <div className="mc-field-group">
                <label htmlFor="mce-EMAIL" className='required'>Email Address </label>
                <input required type="email" value={this.state.email} name="EMAIL" className="required email" id="mce-EMAIL"  onChange={ (e)=>{this.setState({email: e.target.value});} } />
              </div>
              <div className="mc-field-group">
                <label htmlFor="mce-FNAME">First Name </label>
                <input type="text" value={this.state.fname} name="FNAME" className="" id="mce-FNAME"  onChange={ (e)=>{this.setState({fname: e.target.value});} } />
              </div>
              <div className="mc-field-group">
                <label htmlFor="mce-LNAME">Last Name </label>
                <input type="text" value={this.state.lname} name="LNAME" className="" id="mce-LNAME"  onChange={ (e)=>{this.setState({lname: e.target.value});} } />
              </div>
              <div className="mc-field-group">
                <label htmlFor="mce-MMERGE3">Anything else you want us to know? </label>
                <input type="text" value={this.state.extra} name="MMERGE3" id="mce-MMERGE3" onChange={ (e)=>{this.setState({extra: e.target.value});} } />
              </div>
              <div className="mc-field-group input-group">
                <h3>Member categories</h3>
                <ul>
                  <li><label className='check-group' htmlFor="mce-group[4133]-4133-0">Hacker: I can help incubating projects ship product
                        <input type="checkbox" value="1" name="group[4133][1]" id="mce-group[4133]-4133-0" onChange={ (e)=>{this.setState({interest: e.target.value});} } />
                        <span className="checkmark"></span>
                      </label>
                  </li>
                  <li><label className='check-group' htmlFor="mce-group[4133]-4133-1">Econaut: I have economic space(s) I want help designing
                      <input type="checkbox" value="2" name="group[4133][2]" id="mce-group[4133]-4133-1" onChange={ (e)=>{this.setState({interest: e.target.value});} } />
                      <span className="checkmark"></span>
                      </label>
                  </li>
                  <li><label className='check-group' htmlFor="mce-group[4133]-4133-2">Investor: I can nurture the growth of the network by participating in an initial coin offering
                      <input type="checkbox" value="4" name="group[4133][4]" id="mce-group[4133]-4133-2" onChange={ (e)=>{this.setState({interest: e.target.value});} } />
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

            <div id='thank'>
              <h3>Thank you!</h3>
            </div>
          </div>
      </div>
    );
  }
}