import React, {Component} from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';
import {FormControlLabel, FormGroup} from '@material-ui/core';
import Switch from '@material-ui/core/Switch';
import Tooltip from '@material-ui/core/Tooltip';

const styles = theme => ({
   root: {
      display: 'flex'
   },
   switchLabel: {
      '& > .MuiFormControlLabel-label': {
         fontSize: theme.spacing(1)
      }
   }
});

class TooltippedSwitch extends Component {
   constructor(props) {
      super(props);
      this.onChange = this.onChange.bind(this);
   }

   onChange(e) {
      this.props.changeState(e);
   }

   render() {
      const that = this;
      const {classes, switchElem} = that.props;
      return (
         <div className={classes.root}>
            <Tooltip title={this.props.tooltip} placement="bottom">
               <FormGroup row>
                  <FormControlLabel
                     key={switchElem.name}
                     className={classes.switchLabel}
                     control={
                        <Switch
                           name={switchElem.name.toLowerCase()}
                           checked={switchElem.checked}
                           onChange={that.onChange}
                        />
                     }
                     label={switchElem.label}
                     labelPlacement="start"
                  />
               </FormGroup>
            </Tooltip>
         </div>
      );
   }
}

TooltippedSwitch.propTypes = {
   tooltip: PropTypes.string.isRequired,
   switchElem: PropTypes.object.isRequired,
   changeState: PropTypes.func.isRequired
};

export default withStyles(styles, {
   name: 'TooltippedSwitch'
})(TooltippedSwitch);
