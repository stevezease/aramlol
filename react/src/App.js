import React, { Component } from 'react';
import './App.css';
import Search from './components/search';
import NavigationBar from './components/navigationbar';
import PatchView from './components/patch';
import Analyzer from './components/analyzer';
import Champion from './components/champion/champion';
import { connect } from 'react-redux';
import { setStaticData } from './reducers/staticdata';
import { bindActionCreators } from 'redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import loader from './utils/loader';
import Loading from './components/loading/loading';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            data: {}
        };

        this.completeLoading = this.completeLoading.bind(this);
    }

    componentDidMount() {
        this.setState({
            loading: true
        });
        loader(this.completeLoading);
    }

    completeLoading(data) {
        this.props.setStaticData(data);
        let checkStore = setInterval(() => {
            if (Object.keys(this.props.static).length !== 0) {
                clearInterval(checkStore);
                this.setState({
                    loading: false,
                    data: data
                });
            }
        }, 250);
        console.log('completed loading');
    }

    render() {
        return this.state.loading === true ? (
            <Loading />
        ) : (
            <Router>
                <div>
                    <NavigationBar />
                    <Switch>
                        <Route exact path="/" component={Search} />
                        <Route path="/aramlol" component={Search} />
                        <Route path="/Search" component={Search} />
                        <Route path="/Patch" component={PatchView} />
                        <Route path="/Analyzer" component={Analyzer} />
                        <Route
                            path="/Champion/:champion"
                            component={Champion}
                        />
                    </Switch>
                </div>
            </Router>
        );
    }
}

const mapStateToProps = state => ({ static: state.staticdata });

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ setStaticData: setStaticData }, dispatch);
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
