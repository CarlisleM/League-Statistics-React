import React from 'react';
import './index.css';
import { render } from '@testing-library/react';

export class LeagueBar extends React.Component {
    constructor() {
        super();
        this.state = {
            leagues: [],
        };
    }

    changeLeagues(league_id) {
        // this.props.changeLeague(league_id);
        this.setState = {
            leagues: league_id
        }
    }

    componentDidMount() {
        window.fetch('http://localhost:5000/api/leagues')
            .then(response => response.json())
            .then(data => {
                let leagues = data.map((league) => {
                    return (
                        <div
                          key={league.league_id}
                            className='leaguebar-parent'
                        >
                            <div
                                key={league.id}
                                className='leaguebar'
                            >
                                {league.league_name}
                                <img
                                    src={league.league_logo}
                                    className='leaguebar-league-logo'
                                    onClick={() => this.changeLeagues(league.league_id)}
                                    // onClick={() => this.changeLeagues(league.league_id)}
                                    // onClick={() => this.changeTeams(team.team_logo, team.team_name)}
                                />
                            </div>
                        </div>
                    )
                })
                this.setState({ leagues: leagues });
            })
    }

    render() {
        return (
            <div className='leaguebar-parent'>
                <div className='leaguebar-league-logo'>
                    {this.state.leagues}
                </div>
            </div>
        )
    }
}
