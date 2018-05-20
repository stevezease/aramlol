import React, { Component } from 'react';
import './index.css';
import { championStaticData } from '../../input/input';

class SearchView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            championNames: new Set(),
            valid: false
        };
    }
    state = {
        dataSource: []
    };
    componentDidMount() {
        const championNames = new Set();
        const championData = championStaticData.data;
        Object.keys(championData).forEach(key => {
            championNames.add(championData[key].name);
        });
        this.setState({
            championNames: championNames
        });
    }
    handleUpdateInput = value => {
        let valid = false;
        if (this.state.championNames.has(value)) {
            valid = true;
        }
        this.setState({
            valid: valid
        });
    };

    handleKeyPress = e => {
        if (e.key === 'Enter') {
            console.log('Enter key pressed');
            // write your functionality here
        }
    };
    executeSearch = e => {
        if (e.key === 'Enter') {
            console.log('Enter key pressed');
            // write your functionality here
        }
    };
    render() {
        return (
            <div className="search-view">
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
                        {/* <AutoComplete
                            onKeyPress={this.handleKeyPress.bind(this)}
                            filter={AutoComplete.caseInsensitiveFilter}
                            hintText="Type a Champion Name"
                            dataSource={Array.from(this.state.championNames)}
                            onUpdateInput={this.handleUpdateInput}
                            floatingLabelText="Search Champion Information"
                            fullWidth={true}
                            menuStyle={{
                                maxHeight: '200px',
                                overflowY: 'auto'
                            }}
                        /> */}
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchView;
