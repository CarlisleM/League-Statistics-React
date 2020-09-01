import React from 'react';
import { render } from 'react-dom';
import TeamSelectDropdown from './TeamSelectDropdown.js'
import MatchTable from './MatchTable';

export class StatisticsDisplay extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            urlLink: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/TSM_Logo.svg/1200px-TSM_Logo.svg.png',
            displayTeam: 'TSM'
        };
    }

    onChangeTeams(newLogoLink, newTeamData) {
        this.setState({
            urlLink: newLogoLink,
            displayTeam: newTeamData
        });
    }

    render() {
        const { urlLink, displayTeam } = this.state;
        return (
            <div className='center-column'>
                <div className='statisticsdisplay-team-dropdown'>
                    <div className='statisticsdisplay-team-one-select'>
                        <TeamSelectDropdown
                            changeTeam={this.onChangeTeams.bind(this)}
                        />
                    </div>
                </div>

                <div className='team-logo-display' >
                    < div className='statisticsdisplay-team-one-logo' >
                      {/*
                        <img
                            src={this.state.urlLink}
                            className='match-data-team-logo'
                        />
                        */}
                    </div >
                </div>

                <div className='statisticsdisplay-data-tables'>
                    <div className='statisticsdisplay-first-table'>
                        <MatchTable
                            team={this.props.team}
                            changeTeam={this.onChangeTeams.bind(this)}
                        />
                    </div>
                </div>
                {this.state.displayTeam}
            </div>
        )
    }
}

export default StatisticsDisplay;
