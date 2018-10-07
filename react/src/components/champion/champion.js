import React, { Component } from 'react';
import './champion.css';
import { getChampionSplashURL } from '../../utils/loader';
import Sidebar from './sidebar';
import { connect } from 'react-redux';
import DataPanel from './datapanel/datapanel';
import { championStaticData } from '../../input/input';
import ornament from '../../res/images/landing-hero-ornament.png';
import spinner from '../../res/images/spinner.png';

class Champion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            champion: this.props.match.params.champion,
            overlayhidden: false,
            loaded: false
        };
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                overlayhidden: true
            });
        }, 500);
    }
    championStyle() {
        return {
            position: 'absolute',
            objectFit: 'cover',
            height: '100%',
            width: '100%',
            zIndex: -10,
            transform: 'scale(1.00)',
            objectPosition: '50% 0px',
            boxSizing: 'border-box'
        };
    }
    overlayStyle() {
        return {
            opacity: this.state.loaded ? 0 : 1
        };
    }
    render() {
        return (
            <div className="champion">
                <img className="spinner" alt="spinner" src={spinner} />
                <div className="champion-img">
                    <img
                        alt={`${this.state.champion}`}
                        src={getChampionSplashURL(this.state.champion)}
                        style={this.championStyle()}
                        onLoad={() => this.setState({ loaded: true })}
                    />
                </div>
                <div style={this.overlayStyle()} className="champion-overlay" />
                <Sidebar />
                <DataPanel />
                <div className="champion-header">
                    <h1 className="champion-name">
                        {
                            this.props.static.champion.data[this.state.champion]
                                .name
                        }
                    </h1>
                    <h3 className="champion-title">
                        {
                            this.props.static.champion.data[this.state.champion]
                                .title
                        }
                    </h3>
                    <img src={ornament} alt="ornament" />
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => ({ static: state.staticdata });
export default connect(mapStateToProps)(Champion);
