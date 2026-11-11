import { createTheme } from '@mui/material/styles';

// Theme aligned with Caring Hands (caringhands.org.in)
export const theme = createTheme({
  palette: {
    primary: {
      main: '#02476c', // Caring Hands signature deep ocean blue
      light: '#297fb0',
      dark: '#01324d',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#F6D469', // Caring Hands signature warm golden yellow
      light: '#fde047',
      dark: '#FCB720',
      contrastText: '#24102F',
    },
    success: {
      main: '#59C36A', // Caring Hands green
      light: '#86efac',
      dark: '#22c55e',
    },
    warning: {
      main: '#E76100', // Caring Hands warm orange
      light: '#fb923c',
      dark: '#c2410c',
    },
    info: {
      main: '#297fb0',
      light: '#60a5fa',
      dark: '#02476c',
    },
    error: {
      main: '#FF1C74', // Caring Hands heart fuchsia/rose
      light: '#f43f5e',
      dark: '#be123c',
    },
    background: {
      default: '#FDFBF7', // warm soft off-white canvas
      paper: '#ffffff',
    },
    text: {
      primary: '#24102F', // Caring Hands deep dark text
      secondary: '#757277', // Caring Hands subtitle grey
    },
    divider: '#EFECE7',
  },
  typography: {
    fontFamily: '"DM Sans", "Plus Jakarta Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    h1: {
      fontFamily: '"Quicksand", "DM Sans", sans-serif',
      fontWeight: 700,
      letterSpacing: '-0.02em',
      lineHeight: 1.18,
      color: '#24102F',
    },
    h2: {
      fontFamily: '"Quicksand", "DM Sans", sans-serif',
      fontWeight: 700,
      letterSpacing: '-0.015em',
      lineHeight: 1.22,
      color: '#24102F',
    },
    h3: {
      fontFamily: '"Quicksand", "DM Sans", sans-serif',
      fontWeight: 700,
      letterSpacing: '-0.01em',
      lineHeight: 1.25,
      color: '#24102F',
    },
    h4: {
      fontFamily: '"Quicksand", "DM Sans", sans-serif',
      fontWeight: 700,
      lineHeight: 1.3,
      color: '#24102F',
    },
    h5: {
      fontFamily: '"Quicksand", "DM Sans", sans-serif',
      fontWeight: 700,
      lineHeight: 1.35,
      color: '#24102F',
    },
    h6: {
      fontFamily: '"Quicksand", "DM Sans", sans-serif',
      fontWeight: 600,
      lineHeight: 1.4,
      color: '#24102F',
    },
    body1: {
      lineHeight: 1.68,
      color: '#757277',
      fontSize: '0.97rem',
    },
    body2: {
      lineHeight: 1.62,
      color: '#757277',
      fontSize: '0.9rem',
    },
    button: {
      textTransform: 'none',
      fontWeight: 700,
      fontFamily: '"DM Sans", sans-serif',
      letterSpacing: '0.01em',
    },
  },
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 100, // signature cleenhearts pill button
          padding: '11px 26px',
          boxShadow: 'none',
          fontSize: '0.92rem',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            transform: 'translateY(-2px)',
          },
        },
        containedPrimary: {
          backgroundColor: '#02476c',
          color: '#ffffff',
          boxShadow: '0 4px 14px rgba(2, 71, 108, 0.25)',
          '&:hover': {
            backgroundColor: '#01324d',
            boxShadow: '0 6px 20px rgba(2, 71, 108, 0.35)',
          },
        },
        containedSecondary: {
          backgroundColor: '#F6D469',
          color: '#24102F',
          boxShadow: '0 4px 14px rgba(246, 212, 105, 0.35)',
          '&:hover': {
            backgroundColor: '#FCB720',
            boxShadow: '0 6px 20px rgba(252, 183, 32, 0.45)',
          },
        },
        outlined: {
          borderWidth: '1.5px',
          borderColor: '#02476c',
          color: '#02476c',
          '&:hover': {
            borderWidth: '1.5px',
            borderColor: '#01324d',
            backgroundColor: 'rgba(2, 71, 108, 0.04)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          boxShadow: '0 4px 20px rgba(36, 16, 47, 0.05)',
          border: '1px solid #EFECE7',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 100,
          fontWeight: 700,
          fontFamily: '"DM Sans", sans-serif',
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 14,
          backgroundColor: '#ffffff',
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#02476c',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#02476c',
            borderWidth: '2px',
          },
        },
      },
    },
  },
});
