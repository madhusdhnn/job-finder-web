import React, {Component} from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import {Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel} from '@material-ui/core';
import PropTypes from 'prop-types';

const styles = theme => ({
   root: {
      display: 'flex'
   },
   formControl: {
      margin: theme.spacing(3),
   },
   formLabel: {
      fontSize: theme.spacing(2),
      color: 'rgb(0, 0, 0)',
      fontWeight: 500,
      marginBottom: theme.spacing(1)
   },
   checkBoxLabel: {
      '& > .MuiFormControlLabel-label': {
         fontSize: theme.spacing(1)
      }
   }
});

class CheckBox extends Component {
   constructor(props) {
      super(props);
      this.onChange = this.onChange.bind(this);
   }

   onChange(e) {
      this.props.changeState(e);
   }

   render() {
      const that = this;
      const {classes} = that.props;
      return (
         <div className={classes.root}>
            <FormControl component="fieldset" className={classes.formControl}>
               <FormLabel component="legend" className={classes.formLabel} focused={false}>{that.props.title}</FormLabel>
               <FormGroup>
                  {that.props.checkboxData.map(checkBox => (
                     <FormControlLabel
                        key={checkBox.name}
                        className={classes.checkBoxLabel}
                        control={
                           <Checkbox
                              name={checkBox.name.toLowerCase()}
                              checked={checkBox.checked}
                              onChange={that.onChange}
                           />}
                        label={checkBox.label}
                        labelPlacement="end"
                     />
                  ))}
               </FormGroup>
            </FormControl>
         </div>
      );
   }
}

CheckBox.propTypes = {
   title: PropTypes.string.isRequired,
   changeState: PropTypes.func.isRequired,
   checkboxData: PropTypes.array.isRequired
};

export default withStyles(styles, {
   name: 'Checkbox'
})(CheckBox);
