import React from 'react';
import { render } from 'react-dom';
import TeamSelectDropdown from './TeamSelectDropdown.js'
import MatchTable from './MatchTable';

export class TeamLogoDisplay extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            urlLink: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/TSM_Logo.svg/1200px-TSM_Logo.svg.png'
        };
    }

    onChangeLogo(newLogoLink) {
        this.setState({
            urlLink: newLogoLink
        });
    }

    render() {
        const { urlLink } = this.state;
        return (
            <div className='center-column'>
                <div className='matchdata-team-dropdown'>
                    <div className='matchdata-team-one-select'>
                        <TeamSelectDropdown
                            changeLogo={this.onChangeLogo.bind(this)}
                        />
                    </div>
                    <div className='matchdata-team-two-select'>
                        <TeamSelectDropdown
                            changeLogo={this.onChangeLogo.bind(this)}
                        />
                    </div>
                </div>

                <div className='team-logo-display' >
                    < div className='matchdata-team-one-logo' >
                        <img
                            // src={urls[0].image_link}
                            src={this.state.urlLink}
                            className='match-data-team-logo'
                        />
                    </div >
                    <div className='matchdata-team-two-logo'>
                        <img
                            // src={urls[1].image_link}
                            src={this.state.urlLink}
                            className='match-data-team-logo'
                        />
                    </div>
                </div>

                <div className='matchdata-data-tables'>
                    <div className='matchdata-first-table'>
                        <MatchTable/>
                    </div>
                    <div className='matchdata-second-table'>
                        <MatchTable/>
                    </div>
                </div>

            </div>
        )
    }
}

export default TeamLogoDisplay;