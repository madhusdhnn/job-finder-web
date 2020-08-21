import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import {Grid} from '@material-ui/core';
import CheckBox from '../layouts/CheckBox';

const styles = theme => ({
   root: {
      display: 'flex',
      flexGrow: 1
   }
});

class Filters extends Component {
   constructor(props) {
      super(props);
      this.state = {
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
         ]
      };
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
         jobTypes: jobTypes
      });
   }

   render() {
      const {classes} = this.props;
      return (
         <div className={classes.root}>
            <Grid container spacing={1}>
               <Grid item xs={12}>
                  <CheckBox
                     title="Type"
                     changeState={this.changeJobType}
                     checkboxData={this.state.jobTypes}
                  />
               </Grid>
            </Grid>
         </div>
      );
   }
}

export default withStyles(styles, {
   name: 'Filters'
})(Filters);
