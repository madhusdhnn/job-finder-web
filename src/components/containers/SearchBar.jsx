import React, {Component} from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button';
import {Divider} from '@material-ui/core';

const styles = theme => ({
   root: {
      padding: '2px 4px',
      display: 'flex',
      width: '100%',
      alignItems: 'center',
      marginBottom: theme.spacing(2)
   },
   input: {
      marginLeft: theme.spacing(3),
      flex: 1
   },
   divider: {
      height: 40,
      margin: theme.spacing(1.1, 0)
   },
   submitButton: {
      margin: theme.spacing(0, 2)
   }
});

class SearchBar extends Component {
   constructor(props) {
      super(props);
      this.state = {
         jobSearch: '',
         location: ''
      };
      this.changeJobSearchTerm = this.changeJobSearchTerm.bind(this);
      this.changeLocation = this.changeLocation.bind(this);
      this.searchJobs = this.searchJobs.bind(this);
   }

   changeJobSearchTerm(e) {
      this.setState({
         jobSearch: e.target.value
      });
   }

   changeLocation(e) {
      this.setState({
         location: e.target.value
      });
   }

   searchJobs(e) {
      e.preventDefault();
      if (this.state.jobSearch || this.state.location) {
         console.log(this.state);
         this.setState({
            jobSearch: '',
            location: ''
         });
      }
   }

   render() {
      const {classes} = this.props;
      return (
         <Paper component="form" className={classes.root} onSubmit={this.searchJobs}>
            <InputBase
               value={this.state.jobSearch}
               className={classes.input}
               placeholder="Search for job term such as Java, Node.."
               inputProps={{'aria-label': 'search for job term such as java, node'}}
               onChange={this.changeJobSearchTerm}
            />
            <Divider orientation="vertical" className={classes.divider} />
            <InputBase
               value={this.state.location}
               className={classes.input}
               placeholder="City, zip code.."
               inputProps={{'aria-label': 'city, zip code'}}
               onChange={this.changeLocation}
            />
            <Button
               disableElevation
               className={classes.submitButton}
               variant="contained"
               aria-label="search"
               color="secondary"
               type="submit"
               size="small"
               onSubmit={this.searchJobs}
            >
               search
            </Button>
         </Paper>
      );
   }
}

export default withStyles(styles, {
   name: 'SearchBar'
})(SearchBar);
