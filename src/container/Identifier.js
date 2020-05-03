import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {withRouter} from "react-router-dom";

import ViewPortal from '../components/ViewPortal/ViewPortal';
import UserImage from "../components/UserImage/UserImage";

import {
    callIdentifyPhoto
} from '../rdx/actions';

class Identifier extends Component {

    renderUserPicture() {
        let {user} = this.props

        if (!user) {
            return (
                <div>
                    <ViewPortal
                        capturePhoto={this.props.dispatchCapturePhoto}
                    />
                </div>
            )
        } else {
            return (
                <div>
                    <UserImage/>
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

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchCapturePhoto: (photo) => {
            dispatch(callIdentifyPhoto(photo));
        }
    };
};

function mapStateToProps(state) {
    return {
        userData: state.userData
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Identifier));
