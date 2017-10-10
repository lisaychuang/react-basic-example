import React, { Component } from 'react';
import Clock from './clock';

// Stateful Component (the `class MyThing extends Component {}` )
export default class App extends Component {

    // sets initial state in a Constructor
    constructor() {
        // make sure to call super
        super(); 
        this.state = { clockShowing: true };

        // If we hook functions up to HTML events, 
        //  need to bind them in constructor
        this.toggleThing = this.toggleThing.bind(this);
    }
    toggleThing() {
        // calling setState automatically triggers a re-render
        this.setState({clockShowing: !this.state.clockShowing});
    }
    render() {
        let { name, children } = this.props;
        let interestingThing = this.state.clockShowing ? <Clock /> : <h1>No Clock :(</h1>
        return (
            <div>
                <h3>App: {name}</h3>
                <p>{children}</p>
                {interestingThing}
                <button onClick={this.toggleThing}>Toggle interesting thing</button>
            </div>
        );
    }
}

