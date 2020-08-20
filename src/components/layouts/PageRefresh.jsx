import React from 'react';
import Refresh from '@material-ui/icons/Refresh';
import Fab from '@material-ui/core/Fab';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import {withWidth} from '@material-ui/core';
import compose from 'recompose/compose';
import {Dimensions} from '../../utils';

const styles = theme => ({
   fabIcon: {
      position: 'fixed',
      bottom: theme.spacing(10),
      right: theme.spacing(10),
      [theme.breakpoints.down('md')]: {
         bottom: theme.spacing(7),
         right: theme.spacing(4)
      }
   }
});

class PageRefresh extends React.Component {
   render() {
      const {classes, width} = this.props;
      return (
         <Fab
            size={Dimensions.isSmallScreen(width) ? 'medium' : 'small'}
            disabled={this.props.disabled || false}
            color="secondary"
            aria-label="refresh"
            className={classes.fabIcon}
            onClick={this.props.onClick}
         >
            <Refresh />
         </Fab>
      );
   }
}

PageRefresh.propTypes = {
   onClick: PropTypes.func.isRequired,
   disabled: PropTypes.bool
};

export default compose(
   withStyles(styles, {
      name: 'PageRefresh'
   }),
   withWidth()
)(PageRefresh);
