import React, { Component } from 'react'

class MatchTable extends Component {
    
    render() {
        return (
            <div>
                {/* <h1 id='title'>Team Name</h1> */}
                <table id='games'>
                    {this.renderTableHeader()}  
                    <tbody>
                        {this.props.games.map(game =>
                            <tr key={game.game_id}>
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
        const gamesExist = this.props.games[0];
        if (gamesExist) {
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
            // let header = Object.keys(this.props.games[0])
            // return header.map((key, index) => {
            //     return <th key={index}>{key.toUpperCase()}</th>
            // })
        }        
    }
}

export default MatchTable
