import React, { Component } from 'react';
import './allitems.css';
import { versions } from '../../../../input/input';
import { Tooltip } from 'react-tippy';
import { connect } from 'react-redux';

class AllItemsDataPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {};
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

    render() {
        return (
            <div className="top-items-panel sub-items-panel">
                <div className="item-filter-row">
                    <input
                        className="item-search"
                        type="text"
                        placeholder="Search.."
                        name="search"
                    />
                    <select className="item-dropdown">
                        <option value="All">All</option>
                        <option value="Armor">Armor</option>
                        <option value="Health">Health</option>
                        <option value="Health Regen">Health Regen</option>
                        <option value="Magic Resist">Magic Resist</option>
                        <option value="Attack Speed">Attack Speed</option>
                    </select>
                    <select className="item-dropdown">
                        <option value="Name Asec">Name ▲</option>
                        <option value="Armor">Armor</option>
                        <option value="Health">Health</option>
                        <option value="Health Regen">Health Regen</option>
                        <option value="Magic Resist">Magic Resist</option>
                        <option value="Attack Speed">Attack Speed</option>
                    </select>
                </div>
                <div className="item-header-row ">
                    <div className="item-image" />

                    <div className="item-name">Items</div>
                    <div className="item-winrate">Win Rate</div>
                    <div className="item-frequency">Frequency</div>
                </div>
                {Object.values(this.props.static.item.data).map(itemInfo => {
                    return (
                        <div
                            className="item-row"
                            key={itemInfo.name + Math.random(599)}
                        >
                            <Tooltip
                                // options
                                html={this.tooltipGenerator(itemInfo)}
                                position="right"
                                trigger="mouseenter"
                                arrow="true"
                            >
                                <img
                                    className="item-image"
                                    src={`http://ddragon.leagueoflegends.com/cdn/${
                                        versions[0]
                                    }/img/item/${itemInfo.image.full}`}
                                    alt={itemInfo.name}
                                />
                            </Tooltip>
                            <div className="item-name">{itemInfo.name}</div>
                            <div className="item-winrate">52%</div>
                            <div className="item-frequency">22%</div>
                        </div>
                    );
                })}
            </div>
        );
    }
}
const mapStateToProps = state => ({ static: state.staticdata });
export default connect(mapStateToProps)(AllItemsDataPanel);
