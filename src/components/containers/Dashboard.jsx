import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchAllJobs} from '../../actions/job-api-actions';
import PropTypes from 'prop-types';
import PageRefresh from '../layouts/PageRefresh';
import {Typography} from '@material-ui/core';
import compose from 'recompose/compose';
import withStyles from '@material-ui/core/styles/withStyles';
import Container from '@material-ui/core/Container';

const styles = theme => ({
   root: {
      [theme.breakpoints.up('md')]: {
         display: 'flex'
      },
      marginTop: theme.spacing(2)
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

   render() {
      const {classes, jobs} = this.props;
      return (
         <Container component="div" maxWidth="lg" className={classes.root}>
            <Typography variant="h3" color="textPrimary" align="center">
               {jobs.isLoading ? '' : `Showing ${jobs.totalResults} results`}
            </Typography>
            <PageRefresh disabled={jobs.isLoading} onClick={this.reload} />
         </Container>
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

export default compose(
   withStyles(styles, {
      name: 'Dashboard'
   }),
   connect(mapStateToProps, mapDispatchToProps)
)(Dashboard);
