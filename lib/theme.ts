import { createTheme } from '@mui/material/styles'

export const themeColors = {
  primary: 'rgba(51, 51, 255, 1)',
  light: 'rgba(51, 51, 255, 0.5)',
  gray: 'rgba(0, 0, 0, 0.12)',
  'primary-contrast': '#FFFFFF',
  text: {
    primary: 'rgba(0, 0, 0, 0.87)',
    secondary: 'rgba(0, 0, 0, 0.60)',
  },
  alert: {
    errorContent: '#5F2120',
  },
  info: {
    main: '#0288D1',
  },
}

type MediaQuery = {
  '@media (max-width: 1439px)'?: {
    [key: string]: string
  }
  '@media (max-width: 767px)'?: {
    [key: string]: string
  }
}

declare module '@mui/material/styles' {
  interface TypographyVariants {
    'body1-light': React.CSSProperties
    'body2-light': React.CSSProperties
    'button-medium': React.CSSProperties
    'button-small': React.CSSProperties
    subtitle3: React.CSSProperties
    'menu-item': React.CSSProperties
    subtitle4: React.CSSProperties & MediaQuery
    subtitle5: React.CSSProperties & MediaQuery
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    'body1-light'?: React.CSSProperties
    'button-small'?: React.CSSProperties
    'body2-light'?: React.CSSProperties
    'button-medium'?: React.CSSProperties
    subtitle3?: React.CSSProperties
    'menu-item'?: React.CSSProperties
    subtitle4?: React.CSSProperties & MediaQuery
    subtitle5?: React.CSSProperties & MediaQuery
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    'body1-light': true
    'body2-light': true
    'button-medium': true
    subtitle3: true
    'menu-item': true
    'button-small': true
    subtitle4: true
    subtitle5: true
  }
}

const theme = createTheme({
  typography: {
    h1: {
      color: 'rgba(0, 0, 0, 0.87)',
      fontFamily: 'Roboto',
      fontSize: '48px',
      fontWeight: 700,
      lineHeight: '52px',
      '@media (max-width:1023px)': {
        fontSize: '32px',
        fontWeight: 600,
        lineHeight: '36px',
      },
      '@media (max-width:767px)': {
        fontSize: '28px',
        lineHeight: '32px',
      },
    },
    h2: {
      color: 'rgba(0, 0, 0, 0.87)',
      fontFamily: 'Roboto',
      fontSize: '40px',
      fontWeight: 700,
      lineHeight: '44px',
      letterSpacing: '-0.5px',
      '@media (max-width:1023px)': {
        fontSize: '28px',
        fontWeight: 600,
        lineHeight: '32px',
        letterSpacing: '0.25px',
      },
      '@media (max-width:767px)': {
        fontSize: '24px',
        lineHeight: '28px',
      },
    },
    h3: {
      fontFamily: 'Roboto',
      fontSize: '32px',
      fontStyle: 'normal',
      fontWeight: 600,
      lineHeight: '36px',
      '@media (max-width:1023px)': {
        fontSize: '24px',
        lineHeight: '28px',
      },
      '@media (max-width:767px)': {
        fontSize: '20px',
        lineHeight: '24px',
        letterSpacing: '0.15px',
      },
    },
    h4: {
      fontSize: '28px',
      fontWeight: '600',
      lineHeight: '32px',
      letterSpacing: '0.25px',
      '@media (max-width:767px)': {
        fontSize: '20px',
        lineHeight: '24px',
        letterSpacing: '0.15px',
      },
    },
    h5: {
      fontSize: '24px',
      fontWeight: '600',
      lineHeight: '32.02px',
    },
    h6: {
      fontSize: '20px',
      fontWeight: '600',
      lineHeight: '28.02px',
      '@media (max-width: 1439px)': {
        fontSize: '16px',
        fontWeight: '600',
        lineHeight: '22px',
        letterSpacing: '0.15px',
      },
    },
    body1: {
      fontSize: '16px',
      fontWeight: '400',
      lineHeight: '22px',
      letterSpacing: '0.15px',
      '@media (max-width:767px)': {
        fontSize: '14px',
        fontWeight: 400,
        lineHeight: '20px',
        letterSpacing: '0.17px',
      },
    },
    'body1-light': {
      color: 'rgba(0, 0, 0, 0.6)',
      fontSize: '16px',
      fontWeight: '400',
      lineHeight: '22px',
      letterSpacing: '0.15px',
    },
    body2: {
      fontSize: '14px',
      fontWeight: '400',
      lineHeight: '20px',
      letterSpacing: '0.17px',
    },
    'body2-light': {
      color: 'rgba(0, 0, 0, 0.6)',
      fontSize: '14px',
      fontWeight: '400',
      lineHeight: '20px',
      letterSpacing: '0.17px',
    },
    subtitle1: {
      textAlign: 'center',
      fontSize: '16px',
      fontWeight: '600',
      lineHeight: '22px',
      letterSpacing: '0.15px',
      '@media (max-width:767px)': {
        fontSize: '14px',
        fontWeight: 600,
        lineHeight: '20px',
        letterSpacing: '0.1px',
      },
    },
    subtitle2: {
      fontSize: 14,
      fontWeight: 600,
      lineHeight: '20px',
      letterSpacing: '0.1px',
    },
    // created to replace h6 with span
    subtitle4: {
      fontSize: '20px',
      fontWeight: '600',
      lineHeight: '28.02px',
      '@media (max-width: 1439px)': {
        fontSize: '16px',
        fontWeight: '600',
        lineHeight: '22px',
        letterSpacing: '0.15px',
      },
    },
    // created to replace h5 with span
    subtitle5: {
      fontSize: '24px',
      fontWeight: '600',
      lineHeight: '32.02px',
    },
    subtitle3: {
      fontSize: 7,
      fontWeight: 600,
      lineHeight: '10px',
      letterSpacing: '0.1px',
    },
    caption: {
      fontSize: 12,
      fontWeight: 400,
      lineHeight: '16px',
      letterSpacing: '0.4px',
    },
    overline: {
      fontFamily: 'Roboto',
      fontSize: 12,
      fontStyle: 'normal',
      fontWeight: 400,
      lineHeight: '24px',
      letterSpacing: '1px',
    },
    'button-medium': {
      fontFamily: 'Roboto',
      fontSize: '14px',
      fontWeight: 500,
      lineHeight: '24px',
      letterSpacing: '0.4px',
    },
    'button-small': {
      fontFamily: 'Roboto',
      fontSize: '13px',
      fontWeight: 500,
      lineHeight: '20px',
      letterSpacing: '0.3px',
    },
    'menu-item': {
      fontFamily: 'Roboto',
      fontSize: 16,
      fontStyle: 'normal',
      fontWeight: 400,
      lineHeight: '24px',
      letterSpacing: '0.15px',
    },
  },
  components: {
    MuiAlertTitle: {
      styleOverrides: {
        root: {
          fontFamily: 'Roboto',
          fontSize: 16,
          fontStyle: 'normal',
          fontWeight: 500,
          lineHeight: '24px',
          letterSpacing: '0.15px',
          marginBottom: '4px',
        },
      },
    },
    MuiSnackbarContent: {
      styleOverrides: {
        root: {
          minHeight: '20px',
          minWidth: '135px !important',
          padding: '4px 8px',
          backgroundColor: 'rgba(97, 97, 97, 0.90)',
          borderRadius: '4px',
        },
        message: {
          fontSize: '10px',
          padding: 0,
        },
      },
    },
    MuiButton: {
      variants: [
        {
          props: { variant: 'text' },
          style: {
            '&:hover': {
              opacity: '0.9',
            },
          },
        },
        {
          props: { variant: 'contained' },
          style: {
            border: 'none',
          },
        },
      ],
      styleOverrides: {
        root: {
          fontFamily: 'Roboto, sans-serif',
          transition: 'all 0.3s ease',
          textTransform: 'none',
          borderRadius: '999px',
        },
        textPrimary: {
          color: themeColors.primary,
        },
        textSecondary: {
          color: 'green',
        },
        sizeLarge: {
          fontFamily: 'Roboto',
          fontSize: '15px',
          fontWeight: 500,
          lineHeight: '26px',
          letterSpacing: '0.46px',
        },
        containedSecondary: {
          border: '3px solid white',
          color: 'pink',
        },
        textInfo: {
          color: '#0288D1',
          background: 'transparent',
          textTransform: 'none',
          '&:hover': {
            backgroundColor: '#0288D10A',
          },
          '&:focused': {
            backgroundColor: '#0288D1',
          },
        },
        containedPrimary: {
          background: themeColors.primary,
          boxShadow:
            '0px 3px 1px -2px rgba(0, 0, 0, 0.20), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)',

          '&:hover': {
            backgroundColor: '#005BAB',
          },
          '&:focused': {
            backgroundColor: '#FFFFFF',
          },
        },
        outlinedPrimary: {
          color: themeColors.primary,
          borderColor: themeColors.primary,
        },
      },
    },
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          subtitle1: 'p',
          subtitle2: 'p',
        },
      },
    },
  },
  palette: {
    primary: {
      main: themeColors.primary,
      light: themeColors.light,
    },
  },
})

export default theme
