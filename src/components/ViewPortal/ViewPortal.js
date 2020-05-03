import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import Camera, {IMAGE_TYPES} from 'react-html5-camera-photo';
import {Button} from "@material-ui/core";
import Icon from '@material-ui/core/Icon';

import 'react-html5-camera-photo/build/css/index.css';
import {withRouter} from "react-router-dom";


class ViewPortal extends Component {

    constructor(props) {
        super(props);

        this.state = {
            'active': 1,
            'refreshFrequency': 10000
        };

        this.handleClick = this.handleClick.bind(this);
    }

    onTakePhoto(photo) {
        this.props.capturePhoto(photo);
        // setInterval(function () {
        //     let self = this;
        //     self.sendPhoto(photo)
        // }.bind(this), this.state.refreshFrequency)
    }

    sendPhoto(photo) {
        this.props.capturePhoto(photo)
    }

    renderCamera() {
        return (
            <Camera
                onTakePhoto={
                    (photo) => {
                        this.onTakePhoto(photo)
                    }
                }
                idealResolution={{width: 640, height: 480}}
                imageCompression={0.5}
            />
        )
    }

    render() {
        if (this.state.active) {
            return (
                <Fragment>
                    {this.renderCamera()}
                </Fragment>
            )
        } else {
            return (
                <Fragment>
                    <Button
                        variant="fab"
                        color="secondary"
                        aria-label="Edit"
                        onClick={this.handleClick}
                    >
                        <Icon>camera_enhance</Icon>
                    </Button>
                </Fragment>
            )
        }
    }

    handleClick() {
        this.setState(state => ({
            active: !state.active
        }));
    }
}

ViewPortal.propTypes = {
    capturePhoto: PropTypes.func
};

export default ViewPortal