import React, {Component} from 'react';
import '../../styles/main.scss';
import theme from '../../theme';
import {createGenerateClassName, StylesProvider, ThemeProvider} from '@material-ui/core/styles';
import Spinner from './Spinner';

const generateClassName = createGenerateClassName({disableGlobal: process.env.NODE_ENV === 'production', productionPrefix: 'jbf-ttm'});

const style = {width: '100%', marginBottom: 10};

class Layout extends Component {
   render() {
      return (
         <StylesProvider generateClassName={generateClassName}>
            <ThemeProvider theme={theme}>
               <Spinner />
               <div style={style}>
                  {this.props.children}
               </div>
            </ThemeProvider>
         </StylesProvider>
      );
   }
}

export default Layout;
