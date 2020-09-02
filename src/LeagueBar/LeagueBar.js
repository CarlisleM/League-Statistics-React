import React from 'react';
import './index.css';
import { render } from '@testing-library/react';

export class LeagueBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            leagues: [],
        };
        console.log(props)
    }

    componentDidMount() {
        window.fetch('http://localhost:5000/api/leagues')
            .then(response => response.json())
            .then(data => {
                this.setState({ leagues: data });
            })
    }

    render() {
        return (
            <div className='leaguebar-parent'>
                <div className='leaguebar-league-logo'>
                    {this.state.leagues.map((league) => {
                        return (
                            <div
                                key={league.league_id}
                                className='leaguebar-parent'
                                onClick={() => this.props.changeLeague(league.league_id)}
                            >
                                <div
                                    key={league.id}
                                    className='leaguebar'
                                >
                                    {league.league_name}
                                    <img
                                        src={league.league_logo}
                                        className='leaguebar-league-logo'
                                        
                                    // onClick={() => this.changeLeagues(league.league_id)}
                                    // onClick={() => this.changeTeams(team.team_logo, team.team_name)}
                                    />
                                </div>
                            </div>
                        )
                    })
                    }
                </div>
            </div>

        )
    }
}
