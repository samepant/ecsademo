import React from 'react';

export default class team extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const team = this.props.teamData.map(member => {
      return <TeamMember info={member} key={member.name} />
    })
    return (
      <div className='team-container'>
        {team}
      </div>
    );
  }
}


function TeamMember(props) {
  return (
    <div className='team-member'>
      <div className='headshot'>
        <Headshot headshot={props.info.headshot} name={props.info.name} />
      </div>
      <div className='info'>
        <p className='name'>{props.info.name}</p>
        <p>{props.info.ecsaRole}</p>
        <p>{props.info.job}</p>
      </div>
    </div>
  )
}

function Headshot (props) {
  let srcURL = '/headshots/team/Blank_Male.png'
  if (props.headshot !== '') {
    srcURL = '/headshots/team/' + props.headshot
  }
  return (
    <img src={srcURL} alt={props.name + ' headshot'} />
  )
}