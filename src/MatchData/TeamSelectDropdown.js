import React from 'react';
import { render } from 'react-dom';

import DropdownButton from 'react-bootstrap/DropdownButton'
import MenuItem from 'react-bootstrap-dropdown-menu';
import Dropdown from 'react-bootstrap/Dropdown'

import TeamLogoDisplay from './TeamLogoDisplay.js'

export class TeamSelectDropdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      teams: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:5000/api/teams')
      .then(response => response.json())
      .then(data => this.setState({ teams: data }));
  }

  changeTeamLogo(team) {
    console.log('test')
    // TeamLogoDisplay.setState({ url: 'https://ggscore.com/media/logo/t4639.png' })
  }

  render() {
    const { teams } = this.state;
    return (
      <div className='matchdata-team-dropdown'>

        <div className='matchdata-team-one-select'>
          <Dropdown>
            <Dropdown.Toggle variant='success' id='dropdown-basic'>
              Select Team 1
              </Dropdown.Toggle>

            <Dropdown.Menu>
              {teams.map(team =>
                <Dropdown.Item onClick={() => this.changeTeamLogo(team.team_name)}>{team.team_name}</Dropdown.Item>
              )}
            </Dropdown.Menu>
          </Dropdown>
        </div>

        <div className='matchdata-team-two-select'>
          <Dropdown>
            <Dropdown.Toggle variant='success' id='dropdown-basic'>
              Select Team 2
              </Dropdown.Toggle>
            <Dropdown.Menu>
              {teams.map(team =>
                <Dropdown.Item href='#/action-2'>{team.team_name}</Dropdown.Item>
              )}
            </Dropdown.Menu>
          </Dropdown>
        </div>

      </div>
    )
  }
}

export default TeamSelectDropdown;