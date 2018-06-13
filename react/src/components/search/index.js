import React, { Component } from 'react';
import './index.css';
import colors from '../../styles/colors';
import { championStaticData } from '../../input/input';
import Autocomplete from 'react-autocomplete';
import TransitionOverlay from '../../widgets/transitionoverlay';

class SearchView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            championNames: new Set(),
            valid: false,
            value: '',
            searchActive: false,
            nameToIdMap: new Map(),
            championNamesArray: [],
            leaving: false
        };
    }
    state = {
        dataSource: []
    };
    componentDidMount() {
        const championNames = new Set();
        const nameToId = new Map();
        const championData = championStaticData.data;
        Object.keys(championData).forEach(key => {
            championNames.add(championData[key].name);
            nameToId.set(championData[key].name, key);
        });
        let championNamesArray = Array.from(championNames).map(name => ({
            id: name,
            label: name
        }));
        championNamesArray.sort((a, b) => {
            return a.label.localeCompare(b.label);
        });
        this.setState({
            championNames: championNames,
            nameToIdMap: nameToId,
            championNamesArray: championNamesArray
        });
    }

    handleKeyPress = e => {
        console.log('entered');
        if (e.key === 'Enter') {
            this.executeSearch();
        }
    };
    executeSearch = () => {
        if (this.state.valid)
            this.props.history.push(
                `/Champion/${this.state.nameToIdMap.get(this.state.value)}`
            );
    };

    autocompleteStyle = {
        width: '100%',
        position: 'absolute',
        height: '60px',
        borderRadius: '5px',
        fontSize: '24px',
        padding: '0px 10px',
        fontFamily: 'beaufort',
        backgroundColor: 'black',
        border: 'solid 2px #757575',
        color: 'hsla(210, 27%, 68%, 1)',
        outline: 'none'
    };

    menuStyle = {
        background: 'black',
        border: 'solid 2px #757575',
        color: 'hsla(210, 27%, 68%, 1)',
        borderRadius: '5px',
        boxShadow: '0 2px 12px rgba(0, 0, 0, 0.1)',
        padding: '4px 0px',
        fontSize: '24px',
        position: 'fixed',
        overflow: 'auto',
        maxHeight: '20%'
    };
    handleSearchChange = e => {
        const value = e.target.value;

        let valid = false;
        if (this.state.championNames.has(value)) {
            valid = true;
        }
        this.setState({
            value: e.target.value,
            valid: valid
        });
    };
    handleSelection = value => {
        this.setState({
            value: value,
            leaving: true
        });
        setTimeout(() => {
            this.props.history.push(
                `/Champion/${this.state.nameToIdMap.get(value)}`
            );
        }, 500);
    };
    render() {
        return (
            <div className="search-view">
                <TransitionOverlay
                    zIndex={this.state.leaving ? '5' : '-5'}
                    opacity={this.state.leaving ? '5' : '0'}
                />
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
                        <Autocomplete
                            inputProps={{
                                style: this.autocompleteStyle,
                                placeholder: 'Enter a Champion Name',
                                onKeyPress: this.handleKeyPress.bind(this)
                            }}
                            style={this.autocompleteStyle}
                            menuStyle={this.menuStyle}
                            items={this.state.championNamesArray}
                            shouldItemRender={(item, value) =>
                                item.label
                                    .toLowerCase()
                                    .indexOf(value.toLowerCase()) > -1
                            }
                            getItemValue={item => item.label}
                            renderItem={(item, highlighted) => (
                                <div
                                    key={item.id}
                                    style={{
                                        backgroundColor: highlighted
                                            ? 'rgba(255,255,255,.3)'
                                            : 'transparent'
                                    }}
                                >
                                    {item.label}
                                </div>
                            )}
                            value={this.state.value}
                            onChange={this.handleSearchChange.bind(this)}
                            onSelect={this.handleSelection.bind(this)}
                        />
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
