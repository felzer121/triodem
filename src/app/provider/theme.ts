import { ThemeOptions } from '@mui/material/styles';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

export const themeOptions: ThemeOptions = createTheme({
  typography: {
    fontFamily: [
      'inherit',
      'Roboto',
    ].join(','),
  },
  palette: {
    primary: {
      main: '#FFD400',
    },
    secondary: {
      main: '#f50057',
    },
  },
});

export default themeOptions
