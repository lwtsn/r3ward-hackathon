import {combineReducers} from 'redux';
import { connectRouter } from 'connected-react-router'
import UserReducer from './user';

export default (history) => combineReducers({
    router: connectRouter(history),
    userData: UserReducer
})

