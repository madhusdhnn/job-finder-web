import {combineReducers} from 'redux';
import spinnerReducer from './spinner-reducer';

const rootReducer = combineReducers({
   spinner: spinnerReducer
});

export default rootReducer;
