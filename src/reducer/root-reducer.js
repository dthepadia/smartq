import {combineReducers} from 'redux';
import counterReducer from './counter-reducer';

const rootReducer = combineReducers({
    counterData: counterReducer
});

export default rootReducer;