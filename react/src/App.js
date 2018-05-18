import React, { Component } from 'react';
import './App.css';
import Search from './components/search';
import NavigationBar from './components/navigationbar';
import PatchView from './components/patch';
import Analyzer from './components/analyzer';
import { connect } from 'react-redux';
import { setChampionNames } from './reducers/championnames';
import { bindActionCreators } from 'redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import loader from './utils/loader';
import Loading from './components/loading/loading';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false
        };
        this.completeLoading = this.completeLoading.bind(this);
    }

    componentDidMount() {
        this.setState({
            loading: true
        });
        loader(this.completeLoading);
    }

    completeLoading() {
        this.setState({
            loading: false
        });
    }

    render() {
        return (
            <Router>
                <div>
                    {this.state.loading ? <Loading /> : null}
                    <NavigationBar />
                    <Switch>
                        <Route exact path="/" component={Search} />
                        <Route path="/Search" component={Search} />
                        <Route path="/Patch" component={PatchView} />
                        <Route path="/Analyzer" component={Analyzer} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {
            callSetChampionNames: setChampionNames
        },
        dispatch
    );
};
export default connect(mapDispatchToProps)(App);
