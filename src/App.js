import React from 'react';
import logo from './logo.svg';
import './App.css';
import { LeagueBar } from './LeagueBar';
import { MatchTable, TeamSelectDropdown, StatisticsDisplay } from './StatisticsDisplay';
import { ScheduleBar } from './ScheduleBar'
import { LocalTimeDisplay } from './LocalTimeDisplay';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      selectedLeagueId: 1,
      teamOneLogo: '',
      teamTwoLogo: '',
      teamOneData: [],
      teamTwoData: [],
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

  onChangeTeams(teamId, newLogoLink, newTeamData) {
    const teamOneMatch = this.state.games.filter(game => (game.game_team_one == teamId) || (game.game_team_two == teamId))

    this.setState({
        teamOneLogo: newLogoLink,
        displayTeam: newTeamData,
        teamOneData: teamOneMatch
    });
  }

  onChangeTeams2(teamId, newLogoLink, newTeamData) {
    const teamTwoMatch = this.state.games.filter(game => (game.game_team_one == teamId) || (game.game_team_two == teamId))

    this.setState({
        teamTwoLogo: newLogoLink,
        displayTeam: newTeamData,
        teamTwoData: teamTwoMatch
    });
  }

  changeLeague(leagueId) {

    const gameId = this.state.games.filter(game => game.league_id == leagueId)[0].game_id

    const matchGame = this.state.games.filter(game => game.game_id == gameId)[0]
    const teamOneName = this.state.teams.filter(team => team.team_id == matchGame.game_team_one)[0].team_logo
    const teamTwoName = this.state.teams.filter(team => team.team_id == matchGame.game_team_two)[0].team_logo

    const teamOneId = matchGame.game_team_one
    const teamTwoId = matchGame.game_team_two

    const teamOneMatch = this.state.games.filter(game => (game.game_team_one == teamOneId) || (game.game_team_two == teamOneId))
    const teamTwoMatch = this.state.games.filter(game => (game.game_team_one == teamTwoId) || (game.game_team_two == teamTwoId))

    this.setState({
      selectedLeagueId: leagueId,
      teamOne: '',
      teamTwo: '',
      teamOneLogo: teamOneName,
      teamTwoLogo: teamTwoName,
      teamOneData: teamOneMatch,
      teamTwoData: teamTwoMatch
    })
  }

  changeMatch(gameId) {
    const matchGame = this.state.games.filter(game => game.game_id == gameId)[0]
    const teamOneName = this.state.teams.filter(team => team.team_id == matchGame.game_team_one)[0].team_logo
    const teamTwoName = this.state.teams.filter(team => team.team_id == matchGame.game_team_two)[0].team_logo

    const teamOneId = matchGame.game_team_one
    const teamTwoId = matchGame.game_team_two

    const teamOneMatch = this.state.games.filter(game => (game.game_team_one == teamOneId) || (game.game_team_two == teamOneId))
    const teamTwoMatch = this.state.games.filter(game => (game.game_team_one == teamTwoId) || (game.game_team_two == teamTwoId))
    
    this.setState({
      selectedGameId: gameId,
      teamOneLogo: teamOneName,
      teamTwoLogo: teamTwoName,
      teamOneData: teamOneMatch,
      teamTwoData: teamTwoMatch
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
            <div className='statisticsdisplay-team-dropdown'>
                <TeamSelectDropdown
                    teams={this.filteredTeams}
                    // team={teamOne}
                    changeTeam={this.onChangeTeams.bind(this)}
                />
            </div>

            <div className='team-logo'>
                <img
                    src={this.state.teamOneLogo}
                    className='statisticsdisplay-team-logo'
                />                   
            </div>

            <div className='statisticsdisplay-table'>
                <MatchTable
                    games={this.state.teamOneData}
                    // team={teamOne}
                    changeTeam={this.onChangeTeams.bind(this)}
                />
            </div>
          </div>

          <div className="statisticsdisplay-body-right">
            <div className='statisticsdisplay-team-dropdown'>
                <TeamSelectDropdown
                    teams={this.filteredTeams}
                    changeTeam={this.onChangeTeams2.bind(this)}
                />
            </div>

            <div className='team-logo'>
                <img
                    src={this.state.teamTwoLogo}
                    className='statisticsdisplay-team-logo'
                />                   
            </div>

            <div className='statisticsdisplay-table'>
                <MatchTable
                    games={this.state.teamTwoData}
                    changeTeam={this.onChangeTeams.bind(this)}
                />
            </div>
          </div>
        </div>

        <div className="app-schedulebar">
          <LocalTimeDisplay />
          <ScheduleBar
            teams={this.state.teams}
            games={this.upcomingGames}
            selectedLeagueId={this.state.selectedLeagueId}
            changeMatch={this.changeMatch.bind(this)} selectedGameId={this.state.selectedGameId}
          />
        </div>
      </div>
    );
  }
}

export default App;
