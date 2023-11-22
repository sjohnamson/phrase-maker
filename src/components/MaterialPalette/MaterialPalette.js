import { createTheme } from "@mui/material";

function materialPalette() {
    let theme = createTheme({
      palette: {
        primary: {
          main: '#d5a021'
        },
        secondary: {
          main: '#ceeada',
        },
        error: {
          main: '#ff312e',
        },
        warning: {
          main: '#d81e5b',
        },
        info: {
          main: '#2D3047',
        },
        success: {
          main: '#566e3d'
        },
        contrastThreshold: 4.5,
        tonalOffset: 0.5,
      },
    });
  
    theme = createTheme(theme, {
      // Custom colors created with augmentColor 
      palette: {
        pink: theme.palette.augmentColor({
          color: {
            main: '#F8c7cc',
          },
          name: 'pink',
        }),
      },
    });
    return theme;
  }

  export default materialPalette