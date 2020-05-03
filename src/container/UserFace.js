import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {withRouter} from "react-router-dom";

class UserFace extends Component {

    renderUserPicture() {
        let {user} = this.props

        if (!user) {
            return (
                <div>
                    loading
                </div>
            )
        } else {
            return (
                <div>
                    <img className="profile-image" src={user.user.image}/>
                </div>
            )
        }
    }

    render() {
        return (
            <Fragment>
                {this.renderUserPicture()}
            </Fragment>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.userData
    }
}

export default withRouter(connect(mapStateToProps)(UserFace));
