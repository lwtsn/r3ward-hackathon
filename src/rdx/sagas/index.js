import {takeLatest, call, put} from "redux-saga/effects";
import axios from "axios";
import {Buffer} from "buffer";
import { push } from 'connected-react-router'

import {
    API_CALL_IDENTIFY_PHOTO_REQUEST,
    GO_TO_PAGE
} from '../constants/action-types'

import {identifyPhotoSuccess, identifyPhotoFailure} from "../actions";
import {takeEvery} from "redux-saga";
import {goToPageAction, photoSuccess} from "../actions/index";


const API_URL = 'https://westcentralus.api.cognitive.microsoft.com/face/v1.0/';
const API_KEY = 'a05f1af374604ee88a991b55553156bc';

export default function* root(context) {
    yield takeLatest(
        API_CALL_IDENTIFY_PHOTO_REQUEST,
        identifyPhotoSaga
    );

}
// /detect?returnFaceId=true&returnFaceAttributes=age,gender,smile,emotion

function fetchIdentifyPhoto(photo) {
    const queryString = 'detect?returnFaceId=true&returnFaceAttributes=age,gender,smile,emotion';

    return axios({
        method: "POST",
        url: API_URL + queryString,
        headers: {
            "Ocp-Apim-Subscription-Key": API_KEY,
            'Content-Type': "application/octet-stream"
        },
        data: photo
    });
}

function* identifyPhotoSaga(payload) {
    let photo = payload.photo;

    try {
        let buff = new Buffer(photo.replace(/^data:image\/(png|gif|jpeg);base64,/, ''), 'base64');

        const response = yield call(
            fetchIdentifyPhoto,
            buff
        );

        const peopleDetected = response.data;

        yield put(identifyPhotoSuccess(peopleDetected));
        yield put(photoSuccess(photo));

        yield put(push('/profile'));



    } catch (error) {
        // dispatch a failure action to the store with the error
        yield put(identifyPhotoFailure(error));
    }
}
