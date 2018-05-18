import React, { Component } from 'react';
//import { Router, Link } from 'react-router-dom';
import './navigationbar.css';
import { AppBar, Tabs, Tab } from 'material-ui';
import logo from '../res/images/logo.png';
import { Link } from 'react-router-dom';

class NavigationBar extends Component {
    render() {
        // const MyNavLinks = () => (
        //     <ToolbarGroup>
        //         <FlatButton label="Dashboard" />
        //         <FlatButton label="Settings" />
        //         <FlatButton label="Profile" />
        //     </ToolbarGroup>
        // );
        var styles = {
            appBar: {
                flexWrap: 'wrap'
            },
            tabs: {
                width: '300px',
                marginLeft: '-25px'
            },
            iconStyleRight: {
                marginRight: '0px',
                marginLeft: '25px',
                marginTop: '0px'
            }
        };

        return (
            <div className="navigation-bar">
                <AppBar
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
                />
            </div>
        );
    }
}

export default NavigationBar;
