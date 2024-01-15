import React from "react";
import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#cbab89',
      dark: '#9e8479',
      light: '#e9e0dc'
    },
    secondary: {
      main: '#edf2ff',
    },
  },
  typography : {
    fontFamily:"Saira"
  },
  breakpoints: {
    values: {
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
    },
  },
});


