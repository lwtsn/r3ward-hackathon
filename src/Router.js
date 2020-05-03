import React, {Component, Fragment} from 'react';
import {Route, Switch, withRouter} from 'react-router-dom'
import Homepage from './page/index';
import Profile from './page/profile';
import {connect} from "react-redux";

class Router extends Component {
    render() {
        let {pathname} = this.props;

        if (pathname == '/profile') {
            return (
                <Fragment>
                    <Profile/>
                </Fragment>
            )
        } else {
            return (
                <Fragment>
                    <Homepage/>
                </Fragment>
            )
        }
    }
    componentDidMount() {
        this._isMounted = true;
    }
    componentWillUnmount() {
        this._isMounted = false;
        this.setState({});
    }
}

const mapStateToProps = state => ({
    pathname: state.router.location.pathname,
    search: state.router.location.search,
    hash: state.router.location.hash,
});

export default withRouter(connect(mapStateToProps)(Router))
