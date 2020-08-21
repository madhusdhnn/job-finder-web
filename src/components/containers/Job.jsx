import React, {Component} from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {Avatar, Box, Link, Typography} from '@material-ui/core';
import {Event, LocationOn, Work} from '@material-ui/icons';
import moment from 'moment';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

const styles = theme => ({
   paper: {
      padding: theme.spacing(3),
      margin: theme.spacing(2, 1),
      width: '48%'
   },
   avatarSmall: {
      border: '1px solid #d3d3d3',
      width: theme.spacing(5),
      height: theme.spacing(5)
   },
   company: {
      marginLeft: theme.spacing(2),
      fontSize: theme.spacing(2.3),
      fontWeight: 500,
      cursor: 'pointer'
   },
   jobTitle: {
      margin: theme.spacing(1),
      textTransform: 'capitalize'
   },
   tinyInfo: {
      display: 'flex',
      justifyContent: 'flex-start',
      margin: theme.spacing(1, 0)
   },
   flexBox: {
      display: 'flex',
      alignItems: 'flex-end',
      flexBasis: '100%',
      flexGrow: 1,
      margin: theme.spacing(1, 4, 1, 0),
      '& > .MuiTypography-root': {
         marginLeft: theme.spacing(1)
      }
   },
   jobLocation: {
      wordBreak: 'break-word'
   },
   jobApplyButton: {
      marginTop: theme.spacing(5)
   }

});

class Job extends Component {
   render() {
      const {classes, job} = this.props;
      return (
         <Paper id={job.id} className={classes.paper}>
            <Grid container spacing={1} alignItems="center">
               <Grid item xs={1} lg="auto">
                  <Avatar
                     alt={`${job.company} logo`}
                     className={classes.avatarSmall}
                     src={job.company_logo}
                  />
               </Grid>
               <Grid item xs={6}>
                  <Link
                     color="textPrimary"
                     href={job.company_url}
                     target="_blank"
                     rel="noopener noreferrer"
                     className={classes.company}
                  >{job.company}
                  </Link>
               </Grid>
            </Grid>
            <Typography
               color="secondary"
               variant="h6"
               className={classes.jobTitle}
            >
               {job.title.toLowerCase()}
            </Typography>
            <Box component="div" className={classes.tinyInfo}>
               <Box component="div" className={classes.flexBox}>
                  <LocationOn color="secondary" />
                  <Typography
                     color="textSecondary"
                     variant="subtitle2"
                     className={classes.jobLocation}
                  >
                     {job.location}
                  </Typography>
               </Box>
               <Box component="div" className={classes.flexBox}>
                  <Work color="secondary" />
                  <Typography color="textSecondary" variant="subtitle2">{job.type}</Typography>
               </Box>
               <Box component="div" className={classes.flexBox}>
                  <Event color="secondary" />
                  <Typography color="textSecondary" variant="subtitle2">
                     {moment(new Date(job.created_at).toISOString()).calendar()}
                  </Typography>
               </Box>
            </Box>
            <Button
               color="secondary"
               variant="contained"
               href={job.url}
               target="_blank"
               className={classes.jobApplyButton}
               rel="noopener noreferrer"
            >
               apply now
            </Button>
         </Paper>
      );
   }
}

Job.propTypes = {
   job: PropTypes.object.isRequired
};

export default withStyles(styles, {
   name: 'Job'
})(Job);
