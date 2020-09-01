import React, { Component } from 'react'

class MatchTable extends Component {
    constructor() {
        super();
    }

    componentDidMount() {
        fetch('http://localhost:5000/api/games')
            .then(response => response.json())
            .then(data => this.setState({ games: data }));
    }

    render() {
        return (
            <div>
                <h1 id='title'>Team Data</h1>
                <table id='games'>
                    {this.renderTableHeader()}  
                    <tbody>
                        {this.props.team.games.map(game =>
                            <tr key={game.game_id}>
                                <td>{game.game_id}</td>
                                <td>{game.game_date}</td>
                                <td>{game.teamOneId}</td>
                                <td>{game.teamTwoId}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        )
    }

    renderTableHeader() {
      return (
        <thead>
          <tr>
            <td>ID</td>
            <td>Date</td>
            <td>Team 1</td>
            <td>Team 2</td>
          </tr>
        </thead>
      )
    }
}

export default MatchTable
