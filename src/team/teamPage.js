import React from 'react'
import Layout from '../Layout'
import {Team} from './team'
import Advisors from './advisors'
import './team.css'

import teamData from '../assets/team.json'

export default class teamPage extends React.Component {
  render() {
    return (
      <Layout>
        <div className='team-page-container'>
          <div className='intro'>
            <h1>Our team</h1>
            <p>We are a group of radical economists, finance theorists, software architects, game designers, artists, lawyers, peer production experts and decentralized application engineers - exactly what is needed to reimagine what economy can be.</p>
          </div>
          <Team teamData={teamData.ecsaTeam} />
          <h2>Advisors</h2>
          <Advisors advisorData={teamData.advisors} />
        </div>
      </Layout>
    );
  }
}