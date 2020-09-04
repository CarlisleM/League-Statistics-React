import React from 'react';
import { render } from 'react-dom';
import TeamSelectDropdown from './TeamSelectDropdown.js'
import MatchTable from './MatchTable';

export class StatisticsDisplay extends React.Component {
    
    onChangeTeams(newLogoLink, newTeamData) {
        this.setState({
            teamLogo: newLogoLink,
            displayTeam: newTeamData
        });
    }

    render() {
        const { urlLink, displayTeam } = this.state;
        return (
            <div className='test'>
                <div className='statisticsdisplay-team-dropdown'>
                    <TeamSelectDropdown
                        teams={this.props.teams}
                        changeTeam={this.onChangeTeams.bind(this)}
                    />
                </div>

                <div className='team-logo'>
                    <img
                        src={this.props.teamLogo}
                        // src={this.state.urlLink}
                        className='statisticsdisplay-team-logo'
                    />                   
                </div>

                <div className='statisticsdisplay-data'>
                    <div className='statisticsdisplay-table'>
                        <MatchTable
                            team={this.props.team}
                            changeTeam={this.onChangeTeams.bind(this)}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default StatisticsDisplay;
