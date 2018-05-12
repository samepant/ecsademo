import React from 'react'
import Layout from '../Layout'
import Team from './team'
import './team.css'

import teamData from '../assets/team.json'

export default class teamPage extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Layout>
        <div className='team-page-container'>
          <div className='intro'>
            <p>We are a group of radical economists, finance theorists, software architects, game designers, artists, lawyers, peer production experts and decentralized application engineers - exactly what is needed to reimagine what economy can be.</p>
          </div>
          <Team teamData={teamData.ecsaTeam} />
        </div>
      </Layout>
    );
  }
}
