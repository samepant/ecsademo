import React from 'react'
import {Collapse} from 'react-collapse'
import {TeamMember} from './team'

export default class advisors extends React.Component {
  render() {
    const allAdvisors = this.props.advisorData.map((advisorGroup, index) => {
      return <AdvisorGroup advisorType={advisorGroup.advisorType} key={advisorGroup.name + ' ' + index} advisors={advisorGroup.advisors} />
    })
    return (
      <div className='advisor-container'>
        {allAdvisors}
      </div>
    );
  }
}


class AdvisorGroup extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isOpen: false,
      isSmall: false
    }

    this.toggleOpen = this.toggleOpen.bind(this)
  }

  componentDidMount() {
    this.setSmallState()
    window.addEventListener('resize', e => {
      this.setSmallState()
    })
  }

  setSmallState () {
    if (window.innerWidth < 601) {
      this.setState({isSmall: true});
    } else {
      this.setState({isSmall: false});
    }
  }

  toggleOpen() {
    if (this.state.isOpen) {
      this.setState({isOpen: false})
    } else {
      this.setState({isOpen: true})
    }
  }

  render() {
    const advisors = this.props.advisors.map(advisor => {
      return <TeamMember info={advisor} key={advisor.name} />
    })
    if (this.state.isSmall) {
      return (
        <div className='advisor-group' onClick={this.toggleOpen}>
          {this.state.isOpen && <div className='collapse-icon'>↑</div>}
          {!this.state.isOpen && <div className='collapse-icon'>↓</div>}
          <div className='label'>
            <h3>{this.props.advisorType}</h3>
          </div>
          <Collapse isOpened={this.state.isOpen}>
            <div className='advisors'>
              {advisors}
            </div>
          </Collapse>
        </div>
      )
    } else {
      return (
        <div className='advisor-group'>
          <div className='label'>
            <h3>{this.props.advisorType}</h3>
          </div>
          <div className='advisors'>
            {advisors}
          </div>
        </div>
      )
    }
  }
}
