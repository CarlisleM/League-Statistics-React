import React, { Component } from 'react'

class MatchTable extends Component {
    constructor() {
        super();
        this.state = {
            games: [{}],
        };
    }

    componentDidMount() {
        fetch('http://localhost:5000/api/games')
            .then(response => response.json())
            .then(data => this.setState({ games: data }));
    }

    render() {
        const { games } = this.state;
        return (
            <div>
                <h1 id='title'>Team Data</h1>
                <table id='games'>
                    <tbody>
                        {this.renderTableHeader()}  
                        {games.map(game =>
                            <tr>
                                <td>{game.game_id}</td>
                                <td>{game.game_date}</td>
                                <td>{game.game_team_one}</td>
                                <td>{game.game_team_two}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        )
    }

    renderTableHeader() {
        let header = Object.keys(this.state.games[0])
        return header.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }
}

export default MatchTable