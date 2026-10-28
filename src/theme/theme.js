import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#0284c7', // vibrant pediatric blue
      light: '#38bdf8',
      dark: '#0369a1',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#f43f5e', // warm heart pink / rose
      light: '#fb7185',
      dark: '#e11d48',
      contrastText: '#ffffff',
    },
    success: {
      main: '#10b981',
      light: '#34d399',
      dark: '#059669',
    },
    warning: {
      main: '#f59e0b',
      light: '#fbbf24',
      dark: '#d97706',
    },
    info: {
      main: '#6366f1',
    },
    background: {
      default: '#f8fafc',
      paper: '#ffffff',
    },
    text: {
      primary: '#0f172a',
      secondary: '#475569',
    },
  },
  typography: {
    fontFamily: '"Outfit", "Quicksand", -apple-system, BlinkMacSystemFont, sans-serif',
    h1: {
      fontFamily: '"Outfit", sans-serif',
      fontWeight: 800,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontFamily: '"Outfit", sans-serif',
      fontWeight: 800,
      letterSpacing: '-0.01em',
    },
    h3: {
      fontFamily: '"Outfit", sans-serif',
      fontWeight: 700,
    },
    h4: {
      fontFamily: '"Outfit", sans-serif',
      fontWeight: 700,
    },
    h5: {
      fontFamily: '"Outfit", sans-serif',
      fontWeight: 600,
    },
    h6: {
      fontFamily: '"Outfit", sans-serif',
      fontWeight: 600,
    },
    button: {
      textTransform: 'none',
      fontWeight: 700,
      fontFamily: '"Outfit", sans-serif',
    },
  },
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 30,
          padding: '10px 24px',
          boxShadow: 'none',
          transition: 'all 0.25s ease-in-out',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 8px 20px rgba(2, 132, 199, 0.2)',
          },
        },
        containedPrimary: {
          background: 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)',
          '&:hover': {
            background: 'linear-gradient(135deg, #0369a1 0%, #075985 100%)',
          },
        },
        containedSecondary: {
          background: 'linear-gradient(135deg, #f43f5e 0%, #e11d48 100%)',
          boxShadow: '0 4px 14px rgba(244, 63, 94, 0.3)',
          '&:hover': {
            boxShadow: '0 6px 20px rgba(244, 63, 94, 0.4)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          boxShadow: '0 4px 20px rgba(15, 23, 42, 0.06)',
          border: '1px solid rgba(226, 232, 240, 0.8)',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        },
      },
    },
  },
});
