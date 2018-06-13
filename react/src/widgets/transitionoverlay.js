import React, { Component } from 'react';
import './transitionoverlay.css';

class TransitionOverlay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            zIndex: this.props.zIndex,
            opacity: this.props.opacity
        };
    }
    overlayStyle() {
        return {
            zIndex: this.props.zIndex,
            opacity: this.props.opacity
        };
    }
    render() {
        console.log('rerendering transition');

        return (
            <div style={this.overlayStyle()} className="transition-overlay" />
        );
    }
}

export default TransitionOverlay;
