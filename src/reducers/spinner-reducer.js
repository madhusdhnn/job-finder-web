import {HIDE_SPINNER, SHOW_SPINNER} from '../actions/action-types';

const jobsReducer = (state = {loading: false}, action) => {
   switch (action.type) {
   case SHOW_SPINNER:
      return {loading: true};
   case HIDE_SPINNER:
      return {loading: false};
   default:
      return state;
   }
};

export default jobsReducer;
