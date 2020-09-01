import React from 'react';
import { render } from 'react-dom';

import Dropdown from 'react-bootstrap/Dropdown'
import StatisticsDisplay from './StatisticsDisplay.js'

export class TeamSelectDropdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      teams: []
    };
  }

  componentDidMount() {
    fetch('http://localhost:5000/api/teams')
      .then(response => response.json())
      .then(data => this.setState({ teams: data }));
  }

  changeTeams(team_logo, team_name) {
    this.props.changeTeam(team_logo, team_name);
     console.log("This was called")
  }

  render() {
    const { teams } = this.state;
    return (
      <div>
          <Dropdown>
            <Dropdown.Toggle variant='success' id='dropdown-basic'>
              Select Team
              </Dropdown.Toggle>

            <Dropdown.Menu>
              {teams.map(team =>
                <Dropdown.Item key={team.team_id} onClick={() => this.changeTeams(team.team_logo, team.team_name)}>{team.team_name}</Dropdown.Item>
              )}
            </Dropdown.Menu>
          </Dropdown>  
      </div>
    )
  }
}

export default TeamSelectDropdown;
