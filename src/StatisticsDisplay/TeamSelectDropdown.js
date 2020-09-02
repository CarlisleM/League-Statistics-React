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
  constructor(props) {
    super(props);

    this.state = {
      teams: [],
      league_id: 1
    };
  }

  componentDidMount() {
    fetch('http://localhost:5000/api/teams')
      .then(response => response.json())
      .then(data => this.setState({ teams: data }));
    // console.log(team.filter(team => team.league_id == 1))
  }


  onChangeLeagues(id) {
    this.setState({
      league_id: id
    });
  }

  changeTeams(team_logo, team_name) {
    this.props.changeTeam(team_logo, team_name);
  }

  render() {
    const { teams, league_id } = this.state;
    return (
      <div>
        {/* <LeagueBar
          changeLeague={this.onChangeLeagues.bind(this)}
        //league_id = {this.state.league_id} 
        /> */}
        <Dropdown onSelect={select}>
          <Dropdown.Toggle variant='success' id='dropdown-basic'>
            Select Team
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {teams.filter(team => team.league_id == this.state.league_id).map(team =>
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
