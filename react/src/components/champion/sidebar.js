import React, { Component } from 'react';
import './sidebar.css';
import spellsImg from '../../res/images/sidebar/spells_icon.png';
import startImg from '../../res/images/sidebar/start_icon.png';
import itemImg from '../../res/images/sidebar/items_icon.png';
import statImg from '../../res/images/sidebar/stats_icon2.png';
import { connect } from 'react-redux';
import { setSidebarState } from '../../reducers/sidebar';

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: 'start'
        };
        this.props.setSidebarState('start');
    }

    setActiveTab(tab) {
        this.setState({
            activeTab: tab
        });
        this.props.setSidebarState(tab);
    }

    tabGenerator(id, src, alt, label) {
        return (
            <div
                onClick={() => this.setActiveTab(id)}
                className={
                    this.state.activeTab === id
                        ? 'sidebar-icon-active sidebar-icon'
                        : 'sidebar-icon'
                }
            >
                <img src={src} alt={alt} className="sidebar-icon-image" />
                <p className="sidebar-icon-label">{label}</p>
            </div>
        );
    }

    render() {
        return (
            <div className="sidebar">
                {this.tabGenerator('start', startImg, 'sidebar-start', 'START')}
                {this.tabGenerator('items', itemImg, 'sidebar-items', 'ITEMS')}
                {this.tabGenerator(
                    'runes',
                    spellsImg,
                    'sidebar-spells',
                    'RUNES'
                )}
                {this.tabGenerator('stats', statImg, 'sidebar-stats', 'STATS')}
            </div>
        );
    }
}
const mapStateToProps = state => ({});

const mapActionsToProps = {
    setSidebarState: setSidebarState
};

export default connect(mapStateToProps, mapActionsToProps)(Sidebar);
