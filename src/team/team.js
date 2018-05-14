import React from 'react';

export class Team extends React.Component {
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


export function TeamMember(props) {
  return (
    <div className='team-member'>
      <div className='headshot'>
        <Headshot headshot={props.info.headshot} name={props.info.name} />
      </div>
      <div className='info'>
        <p className='name'>{props.info.name}</p>
        <p>{props.info.job}</p>
      </div>
    </div>
  )
}

export function Headshot (props) {
  let srcURL = '/headshots/Blank_Male.png'
  if (props.headshot !== '') {
    srcURL = '/headshots/' + props.headshot
  }
  return (
    <img src={srcURL} alt={props.name + ' headshot'} />
  )
}