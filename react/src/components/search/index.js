import React, { Component } from 'react';
import './index.css';
// import rightpanel from '../../res/images/right-panel.png';
// import leftpanel from '../../res/images/left-panel.png';
import AutoComplete from 'material-ui/AutoComplete';

class SearchView extends Component {
    state = {
        dataSource: []
    };
    componentDidMount() {}
    handleUpdateInput = value => {
        this.setState({
            dataSource: [value, value + value, value + value + value]
        });
    };
    render() {
        return (
            <div className="search-view">
                {/* <div className="image-overlay">
                    <img
                        src={rightpanel}
                        className="right-panel"
                        alt="right panel"
                    />
                    <img
                        src={leftpanel}
                        className="left-panel"
                        alt="left panel"
                    />
                </div> */}
                <div className="howling-abyss-img" alt="howling-abyss-img" />
                <div>
                    <div className="search-banner">
                        <h1>
                            ARAM<span className="search-banner-lol">LOL</span>
                        </h1>
                        <h4 className="search-banner-caption">
                            <span className="conspiracy">ARAM</span> IS
                            <span className="conspiracy"> LO</span>VE. ARAM IS
                            <span className="conspiracy"> L</span>IFE.
                        </h4>
                    </div>
                    <div className="search-bar">
                        <AutoComplete
                            hintText="Type a Champion Name"
                            dataSource={this.state.dataSource}
                            onUpdateInput={this.handleUpdateInput}
                            floatingLabelText="Search Champion Information"
                            fullWidth={true}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchView;
