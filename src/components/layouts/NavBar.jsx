import React, {Component} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = {
   root: {
      flexGrow: 1
   },
   title: {
      flexGrow: 1
   }
};

class NavBar extends Component {
   render() {
      const {classes} = this.props;
      return (
         <div className={classes.root}>
            <CssBaseline />
            <AppBar elevation={2}>
               <Toolbar>
                  <Typography variant="h6" className={classes.title}>
                     Job Finder
                  </Typography>
               </Toolbar>
            </AppBar>
            <Toolbar />
         </div>
      );
   }
}

export default withStyles(styles, {
   name: 'NavBar'
})(NavBar);
