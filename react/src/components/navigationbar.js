import React, { Component } from 'react';
//import { Router, Link } from 'react-router-dom';
import './navigationbar.css';
import logo from '../res/images/logo.png';
import { Link } from 'react-router-dom';
import colors from '../styles/colors';

class NavigationBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: 'Search'
        };
    }
    setActiveTab(tab) {
        this.setState({
            activeTab: tab
        });
    }
    render() {
        const navbarStyle = {
            position: 'absolute',
            zIndex: '10',
            backgroundColor: 'hsla(0, 0%, 0%, 0.8)',
            height: '60px',
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            borderTop: `1px solid ${colors.gold}`,
            borderBottom: `1px solid hsla(0, 0%, 100%, 0.5)`
        };
        return (
            <div className="navigation-bar" style={navbarStyle}>
                <div className="navigation-bar-left">
                    <img src={logo} className="logo" alt="AramLol logo" />
                </div>
                <div className="navigation-bar-right">
                    <Link
                        to="/Search"
                        style={{ textDecoration: 'none' }}
                        onClick={() => this.setActiveTab('Search')}
                    >
                        <div
                            className={
                                this.state.activeTab === 'Search'
                                    ? 'navigation-item  navigation-item-active'
                                    : 'navigation-item '
                            }
                        >
                            SEARCH
                        </div>
                    </Link>
                    <Link
                        to="/Patch"
                        style={{ textDecoration: 'none' }}
                        onClick={() => this.setActiveTab('Patch')}
                    >
                        <div
                            className={
                                this.state.activeTab === 'Patch'
                                    ? 'navigation-item  navigation-item-active'
                                    : 'navigation-item '
                            }
                        >
                            PATCH 8.9.2
                        </div>
                    </Link>
                    <Link
                        to="/Analyzer"
                        style={{ textDecoration: 'none' }}
                        onClick={() => this.setActiveTab('Analyzer')}
                    >
                        <div
                            className={
                                this.state.activeTab === 'Analyzer'
                                    ? 'navigation-item  navigation-item-active'
                                    : 'navigation-item '
                            }
                        >
                            ANALYSIS
                        </div>
                    </Link>
                </div>
                {/* <AppBar
                    iconElementRight={
                        <Tabs style={styles.tabs}>
                            <Tab
                                className="nav-tabs"
                                onActive={this.props.toggleSearchView}
                                label="Search"
                                containerElement={<Link to="/Search" />}
                            />
                            <Tab
                                className="nav-tabs"
                                onActive={this.props.togglePatchView}
                                label="Patch 8.9.2"
                                containerElement={<Link to="/Patch" />}
                            />
                            <Tab
                                className="nav-tabs"
                                onActive={this.props.toggleAnalyzerView}
                                label="Analysis"
                                containerElement={<Link to="/Analyzer" />}
                            />
                        </Tabs>
                    }
                    iconElementLeft={
                        <img src={logo} className="logo" alt="AramLol logo" />
                    }
                    style={styles.appBar}
                    iconStyleRight={styles.iconStyleRight}
                /> */}
            </div>
        );
    }
}

export default NavigationBar;
