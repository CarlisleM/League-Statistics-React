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
  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/TSM_Logo.svg/1200px-TSM_Logo.svg.png'
}

const teamTwo = {
  id: 1,
  name: 'c9',
  sname: 'Cloud9',
  image: 'https://ggscore.com/media/logo/t4639.png'
}

const games = [
  {
    id: 1,
    teamOne,
    teamTwo,
    dateTime: '2020-08-28T05:48:15.704Z'
  },
  {
    id: 2,
    teamOne,
    teamTwo,
    dateTime: '2020-08-28T05:48:15.704Z'
  },
  {
    id: 3,
    teamOne,
    teamTwo,
    dateTime: '2020-08-28T05:48:15.704Z'
  }
];

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      teams: [],
      games: [],
      leagues: []
    }
  }

  render() {
    return (
      <div className="App">
        <div className="app-leagues">
          <LeagueBar/>
        </div>

        <div className="app-main">
          <div className="statisticsdisplay-body">
            {/* <TeamSelectDropdown/> */}
            <StatisticsDisplay/>
            {/* <StatisticsDisplay/> */}
          </div>
        </div>

        <div className="app-schedulebar">
          <LocalTimeDisplay/>
          <ScheduleBar
            games={games}
          />
        </div>
      </div>
    );
  }
}

export default App;
