import React, {Component, PropTypes} from 'react';
import CardMedia from '@material-ui/core/CardMedia';
import {withRouter} from "react-router-dom";

class UserImage extends Component {
    render() {
        return (
            <CardMedia
                src=""
            >
            </CardMedia>
        );
    }
};

export default withRouter(UserImage)