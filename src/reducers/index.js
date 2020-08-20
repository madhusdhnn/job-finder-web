import {combineReducers} from 'redux';
import spinnerReducer from './spinner-reducer';
import jobApiReducer from './job-api-reducer';
import snackbarReducer from './snackbar-reducer';

const rootReducer = combineReducers({
   spinner: spinnerReducer,
   snackbar: snackbarReducer,
   jobsReducer: jobApiReducer
});

export default rootReducer;
