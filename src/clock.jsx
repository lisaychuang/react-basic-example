import React, { Component } from 'react';

export default class Clock extends Component {
    constructor(){
        super()
        this.state = {currentTime: new Date()}
    }

    componentDidMount() {
        console.log('I mounted!');  

        this.timer = setInterval(() => {
            this.setState({currentTime: new Date()})
        }, 10)
    }

    componentWillUnmount(){
        console.log('I will unmount now!');  

        clearInterval(this.timer);
    }

    render() {
        return(
           <div>
                <p>
                    The current time is:
                    {this.state.currentTime.toISOString()}
                </p>
           </div>
        );
    }
}
