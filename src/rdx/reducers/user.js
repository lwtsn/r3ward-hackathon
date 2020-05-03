import {
    API_CALL_IDENTIFY_PHOTO_SUCCESS,
    API_CALL_PHOTO_SUCCESS
} from "../constants/action-types";

const initialState = {
    user: {
        image: '',
    },
    users: {
        
    }
};

export default function UserReducer(state = initialState, action) {
    switch (action.type) {
        case API_CALL_PHOTO_SUCCESS:
            return {
                user: {
                    image: action.payload
                },
                users: {...state.users}
            };
        case API_CALL_IDENTIFY_PHOTO_SUCCESS:
            return {
                fetching: false,
                error: null,
                user: {...state.user},
                users: {...action.payload}
            };
        default:
            return state;
    }
}
