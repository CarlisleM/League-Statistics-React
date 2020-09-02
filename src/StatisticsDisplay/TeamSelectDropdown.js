import React from 'react';
import { render } from 'react-dom';

import Dropdown from 'react-bootstrap/Dropdown'
import StatisticsDisplay from './StatisticsDisplay.js'
import { LeagueBar } from '../LeagueBar/index.js';

// Gets the team_id when clicked on dropdown
const select = (e) => {
  console.log(e);
}

export class TeamSelectDropdown extends React.Component {
  onChangeLeagues(id) {
    this.setState({
      league_id: id
    });
  }

  changeTeams(team_logo, team_name) {
    this.props.changeTeam(team_logo, team_name);
  }

  render() {
    return (
      <div>
        <Dropdown onSelect={select}>
          <Dropdown.Toggle variant='success' id='dropdown-basic'>
            Select Team
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {this.props.teams.map(team =>
              <Dropdown.Item
                eventKey={team.team_id}
                key={team.team_id}
                onClick={() => this.changeTeams(team.team_logo, team.team_name)}
              >
                {team.team_name}
              </Dropdown.Item>
            )}
          </Dropdown.Menu>
        </Dropdown>
      </div>
    )
  }
}

export default TeamSelectDropdown;
