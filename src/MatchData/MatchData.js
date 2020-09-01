import React from 'react';
import './index.css';
import TeamSelectDropdown from './TeamSelectDropdown.js';

import DropdownButton from 'react-bootstrap/DropdownButton'
import MenuItem from 'react-bootstrap-dropdown-menu';
import Dropdown from 'react-bootstrap/Dropdown'

import Table from './MatchTable';

export class MatchData extends React.Component {
    changeTeam() {
        console.log('Display the team clicked here')
    }

    render() {
        return (
            <div className='matchdata-data-tables'>
                <div className='matchdata-first-table'>
                    <Table></Table>
                    {/* Team 1 Data */}
                </div>
                <div className='matchdata-second-table'>
                    <Table></Table>
                </div>
            </div>
        )
    }
}
