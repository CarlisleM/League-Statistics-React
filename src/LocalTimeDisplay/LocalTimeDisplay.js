import React from 'react';
import './index.css';
import moment from 'moment';

export class LocalTimeDisplay extends React.Component {

    constructor(props) {
        super(props);
        this.state = { time: moment().format('HH:MM:ss') };
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({ time: moment().format('HH:MM:ss') });
        }, 1000);   
    }
    
    render() {        
        return(
            <div className="localtimedisplay-time">
                {this.state.time}
            </div>
        )
    }
}
