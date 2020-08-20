import React, {Component} from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import PropTypes from 'prop-types';
import {Link as RouterLink} from 'react-router-dom';
import {IconButton} from '@material-ui/core';

class AppBarLinkItem extends Component {
   render() {
      return (
         <Tooltip title={this.props.title} aria-label={this.props.title}>
            <IconButton
               component={RouterLink}
               href={this.props.path}
               to={this.props.path}
               aria-label={this.props.label}
               color="inherit"
            >
               {this.props.icon}
            </IconButton>
         </Tooltip>
      );
   }
}

AppBarLinkItem.propTypes = {
   title: PropTypes.string.isRequired,
   icon: PropTypes.element.isRequired,
   path: PropTypes.string.isRequired,
   label: PropTypes.string.isRequired,
};

export default AppBarLinkItem;
