import React from 'react';
import { render } from 'react-dom';

import Dropdown from 'react-bootstrap/Dropdown'

import TeamLogoDisplay from './TeamLogoDisplay.js'

export class TeamSelectDropdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      teams: [],
      src: 'https://ggscore.com/media/logo/t4639.png'
    };
  }

  componentDidMount() {
    fetch('http://localhost:5000/api/teams')
      .then(response => response.json())
      .then(data => this.setState({ teams: data }));
  }

  changeTeamLogo(team) {
    this.props.changeLogo(this.state.src);
  }

  render() {
    const { teams } = this.state;
    return (
      // <div className='matchdata-team-dropdown'>
      <div>
        {/* <div className='matchdata-team-one-select'> */}
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
        {/* </div> */}

        {/* <div className='matchdata-team-two-select'>
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
        </div> */}
      </div>
    )
  }
}

export default TeamSelectDropdown;