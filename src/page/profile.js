import React, {Component, PropTypes} from 'react';
import UserFace from "../container/UserFace";
import {Route} from "react-router-dom";
import IdentifiedPersonList from "../container/IdentifiedPersonList";

class Profile extends Component {
    render() {
        return (
            <div className="profile">
                <UserFace/>
                <IdentifiedPersonList/>

            </div>
        );
    }
}

export default Profile