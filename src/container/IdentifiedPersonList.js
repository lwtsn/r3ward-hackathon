import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import {withRouter} from "react-router-dom";

class Identifier extends Component {

    render() {
        let {users} = this.props;

        if (Object.keys(users).length > 0) {
            return (
                <div className="profile-information">
                    {this.renderUsers(users)}
                </div>
            )
        } else {
            return (
                <div>

                </div>
            )
        }
    }

    renderUsers(users) {
        return (
            <div>
                {
                    Object.keys(users).map(function (key) {
                        return (
                            <div key={key}>
                                {this.handleAge(users[key])}
                            </div>
                        );
                    }.bind(this))
                }
            </div>
        )
    }

    handleAge(user) {
        return (
            <div>
                <SnackbarContent
                    className="snackbar"
                    message={user.faceAttributes.age}
                />
                <SnackbarContent
                    className="snackbar"
                    message={user.faceAttributes.gender}
                />
            </div>
        )
    }

    renderSnackBars(user) {
        return (
            Object.keys(user).forEach(function (key) {
                console.log(user[key])
                return (
                    <Fragment>
                        <SnackbarContent
                            message={
                                'I love candy. I love cookies. I love cupcakes. \
                                I love cheesecake. I love chocolate.'
                            }
                        />
                    </Fragment>
                )
            }.bind(this))
        )
    }
}

function mapStateToProps(state) {
    return {
        users: state.userData.users
    }
}

export default withRouter(connect(mapStateToProps)(Identifier));
