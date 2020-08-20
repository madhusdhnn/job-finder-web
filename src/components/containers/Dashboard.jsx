import React, {Component} from 'react';
import Copyright from '../layouts/Copyright';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchAllJobs} from '../../actions/job-api-actions';
import PropTypes from 'prop-types';
import PageRefresh from '../layouts/PageRefresh';
import {Typography} from '@material-ui/core';

class Dashboard extends Component {
   constructor(props) {
      super(props);
      this.reload = this.reload.bind(this);
   }

   componentDidMount() {
      this.reload();
   }

   reload() {
      this.props.fetchAllJobs();
   }

   render() {
      const {jobs} = this.props;
      return (
         <div>
            <Typography variant="h3" color="textPrimary" align="center">
               {jobs.isLoading ? '' : `Showing ${jobs.totalResults} results`}
            </Typography>
            <PageRefresh disabled={jobs.isLoading} onClick={this.reload} />
            <Copyright />
         </div>
      );
   }
}

Dashboard.propTypes = {
   fetchAllJobs: PropTypes.func,
   jobs: PropTypes.object,
};

const mapStateToProps = state => {
   const {jobsReducer} = state;
   return {
      jobs: jobsReducer
   };
};

const mapDispatchToProps = (dispatch) => {
   return bindActionCreators({fetchAllJobs}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
