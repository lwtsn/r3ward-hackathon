import React, {Component, PropTypes} from 'react';
import Identifier from '../container/Identifier';
import {Link, Route} from 'react-router-dom'
import IdentifiedPersonList from "../container/IdentifiedPersonList";

export default class Homepage extends Component {
    render() {
        return (
            <div className="homepage">
                <Identifier/>

                <Link className="hiddenLink" to="/profile">.</Link>
            </div>
        );
    }
};
