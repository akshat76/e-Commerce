import React, { Component } from 'react';
import createHistory from 'history/createBrowserHistory';
import App from './containers/AppContainer';

const history = createHistory();

class Router extends Component {

    static Route() {
        return <span />
    }

    constructor() {
        super();

        this.state = {
            activeContainer: <h1>containers</h1>
        };

        this._def = {};

        this.unlisten = history.listen((location) => {
            const ActiveContainer = this._def[location.hash];
            this.setState({
                activeContainer: <ActiveContainer />
            })
        })
    }

    componentDidMount() {
        this._def = this.props.children.reduce((obj, { props }) => {
            obj[props.path] = props.component;
            return obj;
        }, {});
    }

    componentWillUnmount() {
        this.unlisten();
    }

    render() {
        return this.state.activeContainer;
    }
}

Router.propTypes = {};
Router.defaultProps = {};

export default Router;
