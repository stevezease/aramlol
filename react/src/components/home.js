import React, { Component } from 'react';
import './home.css';
import NavigationBar from './navigationbar';
import PatchView from './patch/index';
import SearchView from './search/index';
import AnalyzerView from './analyzer/index';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displays: {
                showSearch: true,
                showPatch: false,
                showAnalyzer: false
            }
        };
    }
    toggleSearchView() {
        this.setState({
            displays: {
                showSearch: true,
                showPatch: false,
                showAnalyzer: false
            }
        });
    }
    togglePatchView() {
        this.setState({
            displays: {
                showSearch: false,
                showPatch: true,
                showAnalyzer: false
            }
        });
    }
    toggleAnalyzerView() {
        this.setState({
            displays: {
                showSearch: false,
                showPatch: false,
                showAnalyzer: true
            }
        });
    }
    render() {
        return (
            <div className="home">
                <NavigationBar
                    toggleSearchView={this.toggleSearchView.bind(this)}
                    toggleAnalyzerView={this.toggleAnalyzerView.bind(this)}
                    togglePatchView={this.togglePatchView.bind(this)}
                />
                <div className="main-display">
                    {this.state.displays.showPatch ? <PatchView /> : null}
                    {this.state.displays.showSearch ? <SearchView /> : null}
                    {this.state.displays.showAnalyzer ? <AnalyzerView /> : null}
                </div>
            </div>
        );
    }
}

export default Home;
