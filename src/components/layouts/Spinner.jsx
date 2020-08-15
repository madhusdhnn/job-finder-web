import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import compose from 'recompose/compose';
import Loader from 'react-loader';
import {withTheme} from '@material-ui/core/styles';

class Spinner extends Component {
   render() {
      const {theme, loading} = this.props;
      if (loading) {
         return (
            <Loader color={theme.palette.secondary.main} />
         );
      }
      return <Fragment />;
   }
}

Spinner.propTypes = {
   loading: PropTypes.bool,
   theme: PropTypes.object
};

const mapStateToProps = state => {
   const {spinner} = state;
   return {
      loading: spinner.loading
   };
};

export default compose(
   withTheme,
   connect(mapStateToProps)
)(Spinner);
