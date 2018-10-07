import React, { Component } from 'react';
import './items.css';
import { versions } from '../../../../input/input';
import { Tooltip } from 'react-tippy';
import { connect } from 'react-redux';

class TopItemsDataPanel extends Component {
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
        return <div className="all-items-panel sub-items-panel">lollol</div>;
    }
}
const mapStateToProps = state => ({ static: state.staticdata });
export default connect(mapStateToProps)(TopItemsDataPanel);
