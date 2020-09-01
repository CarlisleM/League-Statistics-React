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
                        >
                            <img
                                className='schedulebar-team-logo'
                                src={game.teamOne.image}
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
                                src={game.teamTwo.image}
                            />
                        </div>
                    )
                }
            </div>
        );
    }
}
