import React, { Component } from 'react';
import './datapanel.css';
import { connect } from 'react-redux';
import ItemsDataPanel from './items/items';
import StartDataPanel from './start/start';
import StatsDataPanel from './stats/stats';
import RunesDataPanel from './runes/runes';

class DataPanel extends Component {
    constructor(props) {
        super(props);
    }
    getDataPanel() {
        switch (this.props.sidebar) {
            case 'start':
                return <StartDataPanel />;
            case 'items':
                return <ItemsDataPanel />;
            case 'stats':
                return <StatsDataPanel />;
            case 'runes':
                return <RunesDataPanel />;
        }
    }
    render() {
        return <div className="data-panel"> {this.getDataPanel()} </div>;
    }
}

const mapStateToProps = state => ({
    sidebar: state.sidebar
});

export default connect(mapStateToProps)(DataPanel);
