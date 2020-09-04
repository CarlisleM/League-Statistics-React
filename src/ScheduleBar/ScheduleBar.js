import React from 'react';
import './index.css';
import moment from 'moment';

export class ScheduleBar extends React.Component {
    constructor(props) {
        super(props);
    }

    displayDate(dateTime) {
        const date = moment(dateTime)
        return date.format('ddd DD/MM/YYYY')
    }

    displayTime(dateTime) {
        const date = moment(dateTime)
        return date.format('HH:MM')
    }

    render() {
        return (
            <div className='schedularbar-parent'>
                {
                    this.props.games.map(game =>
                        <div
                            className='schedulebar-game'
                            key={game.id}
                            onClick={() => this.props.changeMatch(game.game_id)}
                        >
                            <img
                                className='schedulebar-team-logo'
                                src={this.props.teams.filter(team => team.team_id == game.game_team_one)[0].team_logo}
                            />
                            
                            <div className='schedulebar-date-time'>
                                <div>
                                    {this.displayDate(game.dateTime)}
                                </div>
                                <div>
                                    {this.displayTime(game.dateTime)}
                                </div>
                            </div>

                            <img
                                className='schedulebar-team-logo'
                                src={this.props.teams.filter(team => team.team_id == game.game_team_two)[0].team_logo}
                            />
                        </div>
                    )
                }
            </div>
        );
    }
}
