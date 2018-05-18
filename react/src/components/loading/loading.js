import React, { Component } from 'react';
import './loading.css';
import LoadingPNG from '../../res/images/loading.gif';

class Loading extends Component {
    constructor(props) {
        super(props);
        this.state = {
            finished: false
        };
    }
    componentWillUnmount() {
        this.setState({
            finished: true
        });
    }

    render() {
        return (
            <div
                className={
                    this.state.finshed
                        ? 'loading-overlay loading-completed'
                        : 'loading-overlay'
                }
            >
                <div className="loading-div">
                    <img
                        className="loading-img"
                        src={LoadingPNG}
                        alt="loading"
                    />
                    <h3 className="loading-text">Loading . . .</h3>
                </div>
            </div>
        );
    }
}

export default Loading;
