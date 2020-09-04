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

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      selectedLeagueId: 1,
      teammOne: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/TSM_Logo.svg/1200px-TSM_Logo.svg.png',
      teammTwo: 'https://ggscore.com/media/logo/t4639.png',
      teamOne: teamOne,
      teamTwo: teamTwo,
      teams: [],
      games: [],
      leagues: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:5000/api/leagues')
      .then(response => response.json())
      .then(data => this.setState({ leagues: data }));

    fetch('http://localhost:5000/api/teams')
      .then(response => response.json())
      .then(data => this.setState({ teams: data }));

    fetch('http://localhost:5000/api/games')
      .then(response => response.json())
      .then(data => this.setState({ games: data }));
  }

  get filteredTeams() {
    return this.state.teams.filter(team => team.league_id == this.state.selectedLeagueId)    
  }

  get upcomingGames() {
    return this.state.games.filter(game => game.league_id == this.state.selectedLeagueId)    
  }

  get specifiedGame() {
    return this.state.games.filter(game => game.game_id == this.state.selectedGameId)[0]
  }

  changeLeague(leagueId) {
    this.setState({
      selectedLeagueId: leagueId,
      teammOne: '',
      teammTwo: '',
      teamOne: '',
      teamTwo: ''
    })
    // Here we got the league_id
  }

  changeMatch(gameId) {
    // console.log(this.specifiedGame)
    const matchGame = this.state.games.filter(game => game.game_id == gameId)[0]
    const teamOneName = this.state.teams.filter(team => team.team_id == matchGame.game_team_one)[0].team_logo
    const teamTwoName = this.state.teams.filter(team => team.team_id == matchGame.game_team_two)[0].team_logo
    
    this.setState({
      selectedGameId: gameId,
      teammOne: teamOneName,
      teammTwo: teamTwoName
    })
  }

  render() {
    return (
      <div className="App">
        <div className="app-leagues">
          <LeagueBar 
            changeLeague={this.changeLeague.bind(this)} 
            selectedLeagueId={this.state.selectedLeagueId}
          />
        </div>

        <div className="app-main">
          <div className="statisticsdisplay-body-left">
            <StatisticsDisplay 
              teams={this.filteredTeams}
              team={teamOne}
              games={this.state.games}
              teamLogo={this.state.teammOne}
              selectedGameId={this.state.selectedGameId}
            />
          </div>
          <div className="statisticsdisplay-body-right">
            <StatisticsDisplay 
              teams={this.filteredTeams} 
              team={teamTwo} 
              games={this.state.games}
              teamLogo={this.state.teammTwo}
              selectedGameId={this.state.selectedGameId}  
            />
          </div>
        </div>

        <div className="app-schedulebar">
          <LocalTimeDisplay />
          <ScheduleBar
            teams={this.state.teams}
            games={this.upcomingGames}
            // match={this.specifiedGame}
            selectedLeagueId={this.state.selectedLeagueId}
            // selectedGameId={this.state.selectedGameId}
            changeMatch={this.changeMatch.bind(this)} selectedGameId={this.state.selectedGameId}
          />
        </div>
      </div>
    );
  }
}

export default App;
