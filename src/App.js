import React from 'react';
import logo from './logo.svg';
import './App.css';
import { LeagueBar } from './LeagueBar';
import { MatchTable, TeamSelectDropdown, StatisticsDisplay } from './StatisticsDisplay';
import { ScheduleBar } from './ScheduleBar'
import { LocalTimeDisplay } from './LocalTimeDisplay';

import { Button } from 'react-bootstrap';

const teamOne = {
  id: 1,
  name: 'tsm',
  sname: 'Team SoloMid',
  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/TSM_Logo.svg/1200px-TSM_Logo.svg.png',
  games: [
    { game_id: 1, game_date: new Date().toString(), teamOneId: 1, teamTwoId: 2 },
    { game_id: 2, game_date: new Date().toString(), teamOneId: 1, teamTwoId: 2 },
    { game_id: 3, game_date: new Date().toString(), teamOneId: 1, teamTwoId: 2 },
    { game_id: 4, game_date: new Date().toString(), teamOneId: 1, teamTwoId: 2 }
  ]
}

const teamTwo = {
  id: 1,
  name: 'c9',
  sname: 'Cloud9',
  image: 'https://ggscore.com/media/logo/t4639.png',
  games: [
    { game_id: 1, game_date: new Date().toString(), teamOneId: 1, teamTwoId: 2 },
    { game_id: 2, game_date: new Date().toString(), teamOneId: 1, teamTwoId: 2 },
    { game_id: 3, game_date: new Date().toString(), teamOneId: 1, teamTwoId: 2 },
    { game_id: 4, game_date: new Date().toString(), teamOneId: 1, teamTwoId: 2 }
  ]
}

const games = [
  {
    id: 1,
    teamOne,
    teamTwo,
    dateTime: '2020-08-28T05:48:15.704Z'
  },
  {
    id: 2,
    teamOne,
    teamTwo,
    dateTime: '2020-08-28T05:48:15.704Z'
  },
  {
    id: 3,
    teamOne,
    teamTwo,
    dateTime: '2020-08-28T05:48:15.704Z'
  }
];

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      selectedLeagueId: 1,
      teamOne: teamOne,
      teamTwo: teamTwo,
      teams: [],
      games: [],
      leagues: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:5000/api/teams')
      .then(response => response.json())
      .then(data => this.setState({ teams: data }));
    // console.log(team.filter(team => team.league_id == 1))
  }

  get filteredTeams() {
    console.log(this.state.teams)
    console.log(this.state.teams.filter(team => team.league_id == this.state.league_id))
    return this.state.teams.filter(team => team.league_id == this.state.selectedLeagueId)    
  }

  changeLeague(leagueId) {
    // this.props.changeLeague(league_id);
    this.setState({selectedLeagueId: leagueId})
    console.log(leagueId)
  }

  render() {
    return (      
      <div className="App">
        <div className="app-leagues">
          <LeagueBar changeLeague={this.changeLeague.bind(this)} selectedLeagueId={this.state.selectedLeagueId}/>
          {/* {this.state.selectedLeagueId}
          {this.filteredTeams.map(x => <div>{x.team_name}</div>)} */}
        </div>

        <div className="app-main">
          <div className="statisticsdisplay-body-left">
            <StatisticsDisplay teams={this.filteredTeams} team={teamOne} />
          </div>
          <div className="statisticsdisplay-body-right">
            <StatisticsDisplay teams={this.filteredTeams} team={teamTwo} />
          </div>
        </div>

        <div className="app-schedulebar">
          <LocalTimeDisplay />
          <ScheduleBar
            games={games}
          />
        </div>
      </div>
    );
  }
}

export default App;
