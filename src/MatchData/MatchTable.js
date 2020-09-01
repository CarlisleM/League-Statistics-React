import React, { Component } from 'react'

class MatchTable extends Component {
    constructor() {
        super();
        this.state = {
            games: [],
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

    // renderTableHeader() {
    //     let header = ['id', 'date', 'team one', 'team two']
    //     return header.map((key, index) => {
    //         return <th key={index}>{key.toUpperCase()}</th>
    //     })
    // }

    // renderTableData() {
    //     return this.state.games.map((game, index) => {
    //         const { game_id, game_date, game_team_one, game_team_two } = game //destructuring
    //         return (
    //             <tr key={game_id}>
    //                 {this.state.games.game_date}
    //             </tr>
    //         )
    //     })
    // }

    // render() {
    //     return (
    //         <div>
    //             <h1 id='title'>Team Data</h1>
    //             <table id='games'>
    //                 <tbody>
    //                     <th> test </th>
    //                     {/* <tr>{this.renderTableHeader()}</tr> */}
    //                     {this.renderTableData()}
    //                 </tbody>
    //             </table>
    //         </div>
    //     )
    // }
}

export default MatchTable