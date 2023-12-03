import { createTheme } from '@mui/material/styles';

export const lightTheme = deriveTheme(createTheme({
  palette: {
    mode: 'light',
    contrastThreshold: 2,
  },
}));
export const darkTheme = deriveTheme(createTheme({
  palette: {
    mode: 'dark',
    contrastThreshold: 2,
  },
}));
export const lightThemeHighContrast = createTheme({
  palette: {
    mode: 'light',
    contrastThreshold: 4.5,
  }
});
export const darkThemeHighContrast = createTheme({
  palette: {
    mode: 'dark',
    contrastThreshold: 4.5,
  }
});


function deriveTheme(theme) {
  return createTheme({
    ...theme,
    typography: {
      h1: {
        fontSize: '2.5rem',
      },
      h2: {
        fontSize: '2rem',
      },
      h3: {
        fontSize: '1.5rem',
      },
      h4: {
        fontSize: '1.25rem',
      },
      h5: {
        fontSize: '1rem',
      },
      h6: {
        fontSize: '0.75rem',
      },
      body1: {
        borderSpacing: 3,
        marginBottom: '1em',
      }
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: `
          /* width */
          ::-webkit-scrollbar {
            width: 10px;
          }
    
          /* Track */
          ::-webkit-scrollbar-track {
            background: ${theme.palette.background.default};
          }
    
          /* Handle */
          ::-webkit-scrollbar-thumb {
            background: ${theme.palette.primary.main};
          }
    
          /* Handle on hover */
          ::-webkit-scrollbar-thumb:hover {
            background: ${theme.palette.primary.light};
          }
        `,
      },
      MuiMenu: {
        styleOverrides: {
          list: {
            color: theme.palette.primary.contrastText,
            backgroundColor: theme.palette.secondary.main,
          },
        },
      },
    },
  });
}