import {
    API_CALL_IDENTIFY_PHOTO_REQUEST,
    API_CALL_IDENTIFY_PHOTO_SUCCESS,
    API_CALL_IDENTIFY_PHOTO_FAILURE,
    API_CALL_PHOTO_SUCCESS
} from "../constants/action-types";

export function callIdentifyPhoto(photo) {
    return {
        type: API_CALL_IDENTIFY_PHOTO_REQUEST,
        photo: photo
    }
}

export function identifyPhotoSuccess(payload) {
    return {
        type: API_CALL_IDENTIFY_PHOTO_SUCCESS,
        payload: payload
    }
}

export function photoSuccess(payload) {
    return {
        type: API_CALL_PHOTO_SUCCESS,
        payload: payload
    }
}

export function identifyPhotoFailure(payload) {
    return {
        type: API_CALL_IDENTIFY_PHOTO_FAILURE,
        payload: payload
    }
}

