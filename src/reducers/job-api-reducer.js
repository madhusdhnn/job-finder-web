import {CLEAR_ALL_JOBS, COMPLETE_REQUEST, RECEIVE_ALL_JOBS, REQUEST_ALL_JOBS} from '../actions/action-types';

const dataByPage = (state = {}, action) => {
   switch (action.type) {
   case RECEIVE_ALL_JOBS:
      return {...state, items: action.jobs, total: action.jobs.length || 0};
   default:
      return state;
   }
};

const deepSize = (state) => {
   return Object.keys(state)
      .filter(key => state.pagesLoaded.has(parseInt(key)))
      .map(page => state[page].total)
      .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
};

const defaultState = {isLoading: false, pagesLoaded: new Set(), totalResults: -1};
const jobApiReducer = (state = defaultState, action) => {
   switch (action.type) {
   case REQUEST_ALL_JOBS:
      return {...state, isLoading: true};
   case RECEIVE_ALL_JOBS:
      return {
         ...state,
         pagesLoaded: state.pagesLoaded.add(action.pageIndex),
         [action.pageIndex]: dataByPage(state[action.pageIndex], action),
         totalPages: action.pageIndex + 1 // zero based
      };
   case COMPLETE_REQUEST:
      return {...state, isLoading: false, totalResults: deepSize(state)};
   case CLEAR_ALL_JOBS:
      return defaultState;
   default:
      return state;
   }
};

export default jobApiReducer;
