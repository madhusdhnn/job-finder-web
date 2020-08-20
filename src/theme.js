import {createMuiTheme, responsiveFontSizes} from '@material-ui/core/styles';

let theme = createMuiTheme({
   palette: {
      primary: {
         dark: '#008394',
         main: '#00bcd4',
         light: '#33c9dc',
         contrastText: 'rgb(0, 0, 0)'
      },
      secondary: {
         light: '#ffa733',
         main: '#ff9100',
         dark: '#b26500',
         contrastText: 'rgb(0, 0, 0)'
      },
      background: {
         default: '#ECEDED'
      }
   }
});

theme = responsiveFontSizes(theme);

export default theme;
