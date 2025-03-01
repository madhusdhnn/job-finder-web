import Store from '../store';
import axios from './axios-instance';
import {debounce} from 'lodash';
import {hideSpinner, showSpinner} from '../actions/spinner-actions';
import {snackbarError} from '../actions/snackbar-actions';

export const initApiInterceptor = () => {
   let pendingRequestCount = 0;

   const showLoader = debounce(() => Store.dispatch(showSpinner()), 100);

   const hideLoader = () => {
      if (pendingRequestCount === 0) {
         showLoader.cancel();
         Store.dispatch(hideSpinner());
      }
   };

   axios.interceptors.request.use(
      config => {
         if (!config.spinnerDisabled) {
            pendingRequestCount++;
            showLoader();
         }
         return config;
      },
      error => {
         if (!error.config.spinnerDisabled) {
            pendingRequestCount--;
            hideLoader();
         }
         return Promise.reject(error);
      }
   );

   axios.interceptors.response.use(
      response => {
         if (!response.config.spinnerDisabled) {
            pendingRequestCount--;
            hideLoader();
         }
         return response;
      },
      err => {
         if (!err.config.spinnerDisabled) {
            pendingRequestCount--;
            hideLoader();
         }

         const response = err.response;
         if (response && response.status === 500) {
            Store.dispatch(snackbarError('Something went wrong! Please try again'));
         }
         return Promise.reject(err);
      }
   );
};
