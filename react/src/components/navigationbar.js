import React, { Component } from 'react';
//import { Router, Link } from 'react-router-dom';
import './navigationbar.css';
import logo from '../res/images/logo.png';
import logoActive from '../res/images/logo-active.png';
import { Link } from 'react-router-dom';
import colors from '../styles/colors';
import { versions } from '../input/input';
import notification from '../input/notifications';

class NavigationBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: 'Search',
            notificationActive: false,
            dropdownActive: false,
            active: false,
            logoSrc: logo
        };
    }
    toggleDropdown() {
        this.setState({
            dropdownActive: !this.state.dropdownActive
        });
    }
    toggleNotification() {
        this.setState({
            notificationActive: !this.state.notificationActive
        });
    }
    setActiveTab(tab) {
        this.setState({
            activeTab: tab
        });
    }
    addNavigationTab = (link, label, id) => {
        return (
            <Link
                to={link}
                style={{ textDecoration: 'none' }}
                onClick={() => this.setActiveTab(id)}
            >
                <div
                    className={
                        this.state.activeTab === id
                            ? 'navigation-item  navigation-item-active'
                            : 'navigation-item '
                    }
                >
                    {label}
                </div>
            </Link>
        );
    };
    render() {
        const navbarStyle = {
            zIndex: '10',
            backgroundColor: 'hsla(0, 0%, 0%, 0.95)',
            height: '60px',
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            borderTop: `1px solid ${colors.blue}`,
            borderBottom: `1px solid hsla(0, 0%, 100%, 0.5)`
        };
        return (
            <div className="navigation-bar" style={navbarStyle}>
                <div className="navigation-bar-left">
                    <img
                        onClick={() => {
                            this.setState({
                                active: !this.state.active
                            });
                        }}
                        src={
                            this.state.active ? logoActive : this.state.logoSrc
                        }
                        className="logo"
                        alt="AramLol logo"
                        onMouseOver={() => {
                            this.setState({
                                logoSrc: logoActive
                            });
                        }}
                        onMouseOut={() => {
                            this.setState({
                                logoSrc: logo
                            });
                        }}
                    />
                </div>
                <div className="navigation-bar-right">
                    <div className="notification-container">
                        <div
                            className={
                                this.state.notificationActive
                                    ? 'notification-box visible'
                                    : 'notification-box'
                            }
                        >
                            <h4 className="notification-header">
                                {notification.heading}
                            </h4>
                            <p className="notification-body">
                                {notification.body}
                            </p>
                        </div>
                        <div
                            onClick={this.toggleNotification.bind(this)}
                            className={
                                this.state.notificationActive
                                    ? 'navigation-notification active'
                                    : 'navigation-notification'
                            }
                        />
                    </div>
                    <div
                        onClick={this.toggleDropdown.bind(this)}
                        className={
                            this.state.dropdownActive
                                ? 'notification-collapse notification-collapse-active'
                                : 'notification-collapse'
                        }
                    >
                        <i className="fa fa-bars" />
                        <div
                            className={
                                this.state.dropdownActive
                                    ? 'navigation-dropdown navigation-dropdown-active'
                                    : 'navigation-dropdown'
                            }
                        >
                            {this.addNavigationTab(
                                '/Search',
                                'SEARCH',
                                'Search'
                            )}
                            {this.addNavigationTab(
                                '/Patch',
                                `PATCH ${versions[0]}`,
                                'Patch'
                            )}
                            {this.addNavigationTab(
                                '/Analyzer',
                                'ANALYSIS',
                                'Analyzer'
                            )}
                        </div>
                    </div>
                    <div className="navigation-tabs">
                        {this.addNavigationTab('/Search', 'SEARCH', 'Search')}
                        {this.addNavigationTab(
                            '/Patch',
                            `PATCH ${versions[0]}`,
                            'Patch'
                        )}
                        {this.addNavigationTab(
                            '/Analyzer',
                            'ANALYSIS',
                            'Analyzer'
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

export default NavigationBar;
