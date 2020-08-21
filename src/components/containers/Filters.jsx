import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import {Grid} from '@material-ui/core';
import CheckBox from '../layouts/CheckBox';
import TooltippedSwitch from '../layouts/TooltippedSwitch';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

const styles = theme => ({
   root: {
      display: 'flex',
      flexDirection: 'column',
      flexGrow: 1,
      padding: theme.spacing(2, 3)
   },
   clearFilterButton: {
      display: 'flex',
      fontWeight: 600,
      margin: theme.spacing(1, 2)
   },
   disappear: {
      display: 'none !important'
   }
});

const defaultState = {
   filterApplied: false,
   switchElem: {
      name: 'show recent jobs',
      label: 'Show recent jobs',
      checked: false
   },
   jobTypes: [
      {
         name: 'full time',
         label: 'Full Time',
         checked: false
      },
      {
         name: 'part time',
         label: 'Part Time',
         checked: false
      }
   ],
   roleTypes: [
      {
         name: 'frontend',
         label: 'Frontend',
         checked: false
      },
      {
         name: 'backend',
         label: 'Backend',
         checked: false
      },
      {
         name: 'lead',
         label: 'Lead',
         checked: false
      },
      {
         name: 'mobile',
         label: 'Mobile (Android / iOS)',
         checked: false
      },
      {
         name: 'product manager',
         label: 'Product Manager',
         checked: false
      }
   ]
};

class Filters extends Component {
   constructor(props) {
      super(props);
      this.state = defaultState;
      this.clearFilters = this.clearFilters.bind(this);
      this.isFilterApplied = this.isFilterApplied.bind(this);
   }

   clearFilters() {
      this.setState({...defaultState}, () => this.props.clear());
   }

   changeSwitch = () => {
      const that = this;
      that.setState(prevState => ({
         filterApplied: true,
         switchElem: {
            ...prevState.switchElem,
            checked: !prevState.switchElem.checked
         }
      }));
   }

   changeJobRole = (e) => {
      const that = this;
      const roleTypes = that.state.roleTypes.map(roleType => {
         if (roleType.name.toLowerCase() === e.target.name.toLowerCase()) {
            return {
               ...roleType,
               checked: !roleType.checked
            };
         }
         return roleType;
      });
      that.setState({
         filterApplied: true,
         roleTypes: roleTypes
      });
   }

   changeJobType = (e) => {
      const that = this;
      const jobTypes = that.state.jobTypes.map(jobType => {
         if (jobType.name.toLowerCase() === e.target.name.toLowerCase()) {
            return {
               ...jobType,
               checked: !jobType.checked
            };
         }
         return jobType;
      });

      that.setState({
         filterApplied: true,
         jobTypes: jobTypes
      });
   }

   isFilterApplied() {
      return this.state.filterApplied;
   }

   render() {
      const {classes} = this.props;
      return (
         <div className={classes.root}>
            <Grid container spacing={1}>
               <Grid item xs={12} className={this.isFilterApplied() ? '' : classes.disappear}>
                  <Button
                     className={classes.clearFilterButton}
                     aria-label="clear all"
                     color="secondary"
                     size="medium"
                     onClick={this.clearFilters}
                  >
                     clear all
                  </Button>
               </Grid>
               <Grid item xs={12}>
                  <CheckBox
                     title="Role"
                     changeState={this.changeJobRole}
                     checkboxData={this.state.roleTypes}
                  />
               </Grid>
               <Grid item xs={12}>
                  <CheckBox
                     title="Type"
                     changeState={this.changeJobType}
                     checkboxData={this.state.jobTypes}
                  />
               </Grid>
               <Grid item xs={12}>
                  <TooltippedSwitch
                     tooltip="Shows only the jobs created within 5 days"
                     changeState={this.changeSwitch}
                     switchElem={this.state.switchElem}
                  />
               </Grid>
            </Grid>
         </div>
      );
   }
}

Filters.propTypes = {
   clear: PropTypes.func.isRequired
};

export default withStyles(styles, {
   name: 'Filters'
})(Filters);
