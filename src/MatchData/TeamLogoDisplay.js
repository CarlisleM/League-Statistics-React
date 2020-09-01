import React from 'react';
import { render } from 'react-dom';
import { TeamSelectDropdown } from './TeamSelectDropdown.js'

export class TeamLogoDisplay extends React.Component {

    // constructor() {
    //     super();

    //     this.changeTeamLogo.bind(this)
    // }

    // changeTeamLogo() {

    // }


    constructor(props) {
        super(props);

        this.state = { //Initialize state properties to empty strings
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/TSM_Logo.svg/1200px-TSM_Logo.svg.png'
        }
        //Bind both methods to be defined later
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({ name: e.target.value })
    }

    handleSubmit(e) {
        // e.preventDefault();
        // alert(this.state.url);
        this.setState({ url: 'https://ggscore.com/media/logo/t4639.png' })
    }

    // render() {
    //     return (
    //         <form onSubmit={ this.handleSubmit }>
    //         <h2>Hello, { this.state.name } </h2>
    //         <input 
    //         type="text" 
    //         onChange={ this.handleChange } 
    //         value={ this.state.name } 
    //         />

    //         <button onClick={ this.handleSubmit }>Greet</button>
    //     </form>   
    //     )
    // }




    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         urls: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/TSM_Logo.svg/1200px-TSM_Logo.svg.png'
    //         // urls: [
    //         //     { image_link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/TSM_Logo.svg/1200px-TSM_Logo.svg.png' },
    //         //     { image_link: 'https://ggscore.com/media/logo/t4639.png' }
    //         // ],
    //     };
    //     TeamSelectDropdown.updateState = (TeamSelectDropdown.updateState).bind(this)
    // }

    render() {
        console.log(this.props.data)
        var test = 'this'
        const { url } = this.state;
        return (
            <div className='team-logo-display'>
                {/* <button onClick={ this.handleSubmit }>XD</button> */}
                <div className='matchdata-team-one-logo'>
                    <img
                        // src={urls[0].image_link}
                        src={url}
                        className='match-data-team-logo'
                    />
                </div>
                <div className='matchdata-team-two-logo'>
                    <img
                        // src={urls[1].image_link}
                        src={url}
                        className='match-data-team-logo'
                    />
                </div>
            </div>
        )
    }
}

export default TeamLogoDisplay;