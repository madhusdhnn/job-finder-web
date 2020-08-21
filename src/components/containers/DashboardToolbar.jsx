import React, {Component} from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import SearchBar from './SearchBar';

const styles = theme => ({
   root: {
      display: 'flex',
      width: '100%',
      padding: theme.spacing(2, 0)
   }
});

class DashboardToolbar extends Component {
   render() {
      const {classes} = this.props;
      return (
         <div className={classes.root}>
            <SearchBar />
         </div>
      );
   }
}

export default withStyles(styles, {
   name: 'DashboardToolbar'
})(DashboardToolbar);
