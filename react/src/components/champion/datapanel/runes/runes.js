import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Tooltip } from 'react-tippy';
import './runes.css';

class RunesDataPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            primaryStyle: '8100',
            perk0: '8112',
            perk1: '8126',
            perk2: '8136',
            perk3: '8135',
            subStyle: '8000',
            perk4: '9111',
            perk5: '8014'
        };
    }
    runeConversions = {
        '8000': 'precision',
        '8100': 'domination',
        '8200': 'sorcery',
        '8300': 'inspiration',
        '8400': 'resolve'
    };

    tooltipGenerator(rune) {
        return (
            <div
                style={{
                    maxWidth: 250,
                    backgroundColor: 'black',
                    borderRadius: 0
                }}
            >
                <h3>{rune.name}</h3>
                <p dangerouslySetInnerHTML={{ __html: rune.shortDesc }} />
            </div>
        );
    }

    subperkGenerator(perk, isPrimary) {
        return (
            <Tooltip
                // options
                html={this.tooltipGenerator(
                    this.props.static.runesLookUp[perk]
                )}
                position="right"
                trigger="mouseenter"
                arrow="true"
                touchHold="true"
            >
                <div className="perk">
                    <div
                        className={
                            'subperk ' +
                            this.runeConversions[
                                isPrimary
                                    ? this.state.primaryStyle
                                    : this.state.subStyle
                            ] +
                            '-hover'
                        }
                    >
                        <img
                            className={
                                'subperk-image ' +
                                this.runeConversions[
                                    isPrimary
                                        ? this.state.primaryStyle
                                        : this.state.subStyle
                                ]
                            }
                            alt={perk}
                            src={this.getRuneImage(perk)}
                        />
                    </div>
                </div>
            </Tooltip>
        );
    }
    render() {
        return (
            <div className="runes-panel" style={{ color: 'white' }}>
                <div className="runes-container">
                    <div className="runes-column runes-primary">
                        <div className="perk-emblem">
                            <img
                                className="perk-ring"
                                src={require(`../../../../res/images/perk/perkRing/${
                                    this.state.primaryStyle
                                }.png`)}
                                alt="perk-ring"
                            />
                            <img
                                className="perk-icon"
                                src={require(`../../../../res/images/perk/perkStyle/${
                                    this.state.primaryStyle
                                }.png`)}
                                alt="perk-icon"
                            />
                        </div>
                        <div
                            className={
                                this.runeConversions[this.state.primaryStyle] +
                                '-flow rune-flow-outer rune-flow-primary'
                            }
                        />
                        <div
                            className={
                                this.runeConversions[this.state.primaryStyle] +
                                '-flow rune-flow-inner rune-flow-primary'
                            }
                        />
                        <Tooltip
                            // options
                            html={this.tooltipGenerator(
                                this.props.static.runesLookUp[this.state.perk0]
                            )}
                            position="right"
                            trigger="mouseenter"
                            arrow="true"
                        >
                            <div className="perk  perk-keystone ">
                                <div
                                    className={
                                        this.runeConversions[
                                            this.state.primaryStyle
                                        ] + '-light keystone-hover'
                                    }
                                />
                                <div
                                    className={
                                        this.runeConversions[
                                            this.state.primaryStyle
                                        ] + ' keystone-hover-inner'
                                    }
                                />
                                <img
                                    className="keystone"
                                    src={this.getRuneImage(this.state.perk0)}
                                    alt="keystone"
                                />
                            </div>
                        </Tooltip>
                        {this.subperkGenerator(this.state.perk1, true)}
                        {this.subperkGenerator(this.state.perk2, true)}
                        {this.subperkGenerator(this.state.perk3, true)}
                    </div>
                    <div className="runes-column runes-secondary">
                        <div className="perk-emblem">
                            <img
                                className="perk-ring"
                                src={require(`../../../../res/images/perk/perkRing/${
                                    this.state.subStyle
                                }.png`)}
                                alt="sub-perk-ring"
                            />
                            <img
                                className="perk-icon"
                                src={require(`../../../../res/images/perk/perkStyle/${
                                    this.state.subStyle
                                }.png`)}
                                alt="sub-perk-icon"
                            />
                        </div>
                        <div
                            className={
                                this.runeConversions[this.state.subStyle] +
                                '-flow rune-flow-outer rune-flow-sub'
                            }
                        />
                        <div
                            className={
                                this.runeConversions[this.state.subStyle] +
                                '-flow rune-flow-inner rune-flow-sub'
                            }
                        />
                        {this.subperkGenerator(this.state.perk4, false)}
                        {this.subperkGenerator(this.state.perk5, false)}
                    </div>
                </div>
            </div>
        );
    }
    getRuneImage(perk) {
        console.log(perk);
        return (
            this.props.static.dataDragonBase +
            '/cdn/img/' +
            this.props.static.runesLookUp[perk].icon
        );
    }
}
const mapStateToProps = state => ({ static: state.staticdata });
export default connect(mapStateToProps)(RunesDataPanel);
