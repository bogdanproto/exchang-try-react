import { outlinedInputClasses } from '@mui/material/OutlinedInput';
import { createTheme, Theme } from '@mui/material/styles';
import { theme } from '../../const/theme';
import { cyan } from '@mui/material/colors';

import PlayRegularWoff2 from '../../fonts/fonts/play-regular.woff2';
import PlayBoldWoff2 from '../../fonts/fonts/play-bold.woff2';

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: cyan[800],
    },
    // secondary: {
    //   main: cyan[800],
    // },
  },

  typography: {
    fontFamily: 'Play',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Play';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('Play Regular'), local('Play Regular'), url(${PlayRegularWoff2}) format('woff2');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
        @font-face {
          font-family: 'Play';
          font-style: normal;
          font-display: swap;
          font-weight: 700;
          src: local('Play Bold'), local('Play Bold'), url(${PlayBoldWoff2}) format('woff2');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `,
    },

    //-----------Styles BottomNavigation----------
    MuiBottomNavigationAction: {
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            color: cyan[800],
            fontSize: '24',
            transform: 'scale(1)',
          },
        },
      },
    },

    //---------------------------------
    // MuiInput: {
    //   styleOverrides: {
    //     root: {
    //       '&:before': {
    //         borderBottom: '2px solid red',
    //         color: 'red',
    //       },
    //       '&:hover:not(.Mui-disabled, .Mui-error):before': {
    //         borderBottom: '2px solid var(--TextField-brandBorderHoverColor)',
    //         color: theme.colorFocusText,
    //       },
    //       '&.Mui-focused:after': {
    //         borderBottom: '2px solid var(--TextField-brandBorderFocusedColor)',
    //         color: theme.colorFocusText,
    //       },
    //     },
    //   },
    // },
  },
});

export const formAuthTheme = (outerTheme: Theme) =>
  createTheme({
    palette: {
      mode: outerTheme.palette.mode,
    },
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            '--TextField-brandBorderColor': theme.colorInputBorder,
            '--TextField-brandBorderHoverColor': theme.colorInputBorderHover,
            '--TextField-brandBorderFocusedColor': theme.colorInputBorderHover,
            '& label': {
              color: 'var(--TextField-brandBorderColor)',
            },
            '& label.Mui-focused': {
              color: 'var(--TextField-brandBorderFocusedColor)',
            },
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          notchedOutline: {
            borderColor: 'var(--TextField-brandBorderColor)',
          },

          root: {
            [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: 'var(--TextField-brandBorderHoverColor)',
            },
            [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: 'var(--TextField-brandBorderFocusedColor)',
            },
          },
        },
      },
      MuiFilledInput: {
        styleOverrides: {
          root: {
            '&:before, &:after': {
              borderBottom: '2px solid var(--TextField-brandBorderColor)',
            },
            '&:hover:not(.Mui-disabled, .Mui-error):before': {
              borderBottom: '2px solid var(--TextField-brandBorderHoverColor)',
            },
            '&.Mui-focused:after': {
              borderBottom:
                '2px solid var(--TextField-brandBorderFocusedColor)',
            },
          },
        },
      },
      MuiInput: {
        styleOverrides: {
          root: {
            color: theme.colorInputText,
            '&:before': {
              borderBottom: '2px solid var(--TextField-brandBorderColor)',
              color: theme.colorFocusText,
            },
            '&:hover:not(.Mui-disabled, .Mui-error):before': {
              borderBottom: '2px solid var(--TextField-brandBorderHoverColor)',
              color: theme.colorFocusText,
            },
            '&.Mui-focused:after': {
              borderBottom:
                '2px solid var(--TextField-brandBorderFocusedColor)',
              color: theme.colorFocusText,
            },
          },
        },
      },
    },
  });