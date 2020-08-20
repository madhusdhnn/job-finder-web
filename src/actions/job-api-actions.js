import {CLEAR_ALL_JOBS, COMPLETE_REQUEST, RECEIVE_ALL_JOBS, REQUEST_ALL_JOBS} from './action-types';
import axios from '../config/axios-instance';

const receiveAllJobs = (pageIndex, data) => {
   return {
      type: RECEIVE_ALL_JOBS,
      pageIndex: pageIndex,
      jobs: data
   };
};

const clearAllJobs = () => {
   return {
      type: CLEAR_ALL_JOBS
   };
};

const requestAllJobs = () => {
   return {
      type: REQUEST_ALL_JOBS
   };
};

const completeRequest = () => {
   return {
      type: COMPLETE_REQUEST
   };
};

const shouldFetchMoreData = (data = []) => {
   return data.length !== 0;
};

const fetchAllJobsPaged = (pageIndex) => {
   return dispatch => {
      return axios.get(`positions.json?markdown=true&page=${pageIndex}`)
         .then(response => {
            const results = response.data;
            const shouldFetch = shouldFetchMoreData(results);
            if (shouldFetch) {
               dispatch(receiveAllJobs(pageIndex, results));
               dispatch(fetchAllJobsPaged(pageIndex + 1));
            } else {
               dispatch(completeRequest());
            }
         })
         .catch(err => {
            console.error(err);
            dispatch(clearAllJobs());
         });
   };
};

const fetchAllJobs = () => {
   return dispatch => {
      dispatch(requestAllJobs());
      return dispatch(fetchAllJobsPaged(0));
   };
};

export {fetchAllJobs};
