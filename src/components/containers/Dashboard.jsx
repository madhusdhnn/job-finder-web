import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchAllJobs} from '../../actions/job-api-actions';
import PropTypes from 'prop-types';
import PageRefresh from '../layouts/PageRefresh';
import {Box, Grid, Typography} from '@material-ui/core';
import compose from 'recompose/compose';
import withStyles from '@material-ui/core/styles/withStyles';
import Container from '@material-ui/core/Container';
import Filters from './Filters';
import DashboardToolbar from './DashboardToolbar';
import Job from './Job';
import {Arrays} from '../../utils';

const styles = theme => ({
   root: {
      marginTop: theme.spacing(3)
   },
   jobRoot: {
      display: 'flex',
      width: '100%',
      justifyContent: 'space-between'
   }
});

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

   clearFilters = () => {
      const that = this;
      that.reload();
   }

   containerSupplier = (key, jobs, classes) => {
      return (
         <Box key={key} component="div" className={classes.jobRoot}>
            {jobs.map(job => job)}
         </Box>
      );
   }

   jobMapper = (pages, classes) => {
      let jobComponents = [];
      let results = [];

      for (let i = 1; i < pages.length; i++) {
         const job = pages[i];
         if (i % 3 === 0) {
            results = [...results, this.containerSupplier(i, jobComponents, classes)];
            jobComponents = [];
         } else {
            jobComponents.push((<Job key={job.id} job={job} />));
         }
      }

      return results;
   }

   render() {
      const {classes, jobs, pages, totalUniqueJobs} = this.props;
      return (
         <Container component="div" maxWidth="xl" className={classes.root}>
            <Grid container spacing={1}>
               <Grid item xs={12} md={2}>
                  <Filters clear={this.clearFilters} />
               </Grid>
               <Grid item xs={12} md={10} xl={8}>
                  <DashboardToolbar />
                  <Typography paragraph variant="body1" color="textSecondary">
                     {jobs.isLoading ? '' : `Showing ${totalUniqueJobs} results`}
                  </Typography>
                  {pages.length > 0 && this.jobMapper(pages, classes)}
               </Grid>
            </Grid>
            <PageRefresh disabled={jobs.isLoading} onClick={this.reload} />
         </Container>
      );
   }
}

Dashboard.propTypes = {
   fetchAllJobs: PropTypes.func,
   jobs: PropTypes.object,
   pages: PropTypes.array,
   totalUniqueJobs: PropTypes.number
};

const mapStateToProps = state => {
   const {jobsReducer} = state;

   const uniqueJobs = Arrays.uniqBy(Object.keys(jobsReducer)
      .filter(key => jobsReducer.pagesLoaded.has(parseInt(key)))
      .flatMap(page => jobsReducer[page].items), 'id');

   return {
      jobs: jobsReducer,
      pages: uniqueJobs,
      totalUniqueJobs: uniqueJobs.length
   };
};

const mapDispatchToProps = (dispatch) => {
   return bindActionCreators({fetchAllJobs}, dispatch);
};

export default compose(
   withStyles(styles, {
      name: 'Dashboard'
   }),
   connect(mapStateToProps, mapDispatchToProps)
)(Dashboard);
