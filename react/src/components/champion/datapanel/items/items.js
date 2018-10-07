import React, { Component } from 'react';
import './items.css';
import { CSSTransition, transit } from 'react-css-transition';
import { Tooltip } from 'react-tippy';
import { connect } from 'react-redux';
import TopItemsDataPanel from './topitems';
import AllItemsDataPanel from './allitems';

class ItemsDataPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: 'Top'
        };
    }
    tooltipGenerator(itemInfo) {
        return (
            <div style={{ maxWidth: 250 }}>
                <h3>{itemInfo.name}</h3>
                <p dangerouslySetInnerHTML={{ __html: itemInfo.description }} />
                <p>Cost: {itemInfo.gold.total}</p>
            </div>
        );
    }
    setActiveTab(tab) {
        this.setState({
            activeTab: tab
        });
    }
    render() {
        const transitionStyle = {
            defaultStyle: {
                opacity: 0
            },
            enterStyle: {
                opacity: transit(1.0, 500, 'ease-in-out')
            },
            leaveStyle: {
                opacity: transit(0, 500, 'ease-in-out')
            },
            activeStyle: {
                opacity: 1
            }
        };

        CSSTransition.childContextTypes = {
            // this can be empty
        };

        return (
            <div className="items-panel">
                <div className="item-nav">
                    <div
                        onClick={() => this.setActiveTab('Top')}
                        className={
                            'item-tab ' +
                            (this.state.activeTab === 'Top' ? 'active-tab' : '')
                        }
                    >
                        Top
                    </div>
                    <div
                        onClick={() => this.setActiveTab('All')}
                        className={
                            'item-tab ' +
                            (this.state.activeTab === 'All' ? 'active-tab' : '')
                        }
                    >
                        All
                    </div>
                </div>
                <CSSTransition
                    {...transitionStyle}
                    active={true}
                    transitionAppear
                >
                    {this.state.activeTab === 'Top' ? (
                        <TopItemsDataPanel />
                    ) : (
                        <AllItemsDataPanel />
                    )}
                </CSSTransition>
            </div>
        );
    }
}
const mapStateToProps = state => ({ static: state.staticdata });
export default connect(mapStateToProps)(ItemsDataPanel);
