import { PaletteMode } from '@mui/material';
import { grey } from '@mui/material/colors';
import { ColorMode } from '../enums/color-mode.enum';

// NOTE: To generate shades, I've used the 'Tailwind Shades' extension. 
// Once installed, find a hex color (i.e. #8c8c8c), highlight it, and run cmd + k followed immediately by cmd + g

// white: {
//     100: "#fbfbfc",
//     200: "",
//     300: "#f2f2f5",
//     400: "#ededf2",
//     500: "#e9e9ef",
//     600: "#bababf",
//     700: "#8c8c8f",
//     800: "#5d5d60",
//     900: "#2f2f30"
// },


export const getDesignTokens = (mode: PaletteMode) => ({
    palette: {
        mode,
        ...(mode === ColorMode.LIGHT
            ? {
                primary: {
                    100: '#dad9f8',
                    200: '#b6b3f1',
                    300: '#918de9',
                    400: '#6d67e2',
                    500: '#5A5EE9',
                    600: '#3a34af',
                    700: '#2b2783',
                    800: '#1d1a58',
                    900: '#0e0d2c'
                },
                grey: {
                    100: '#e0e0e0',
                    200: '#c2c2c2',
                    300: '#a3a3a3',
                    400: '#858585',
                    500: '#666666',
                    600: '#525252',
                    700: '#3d3d3d',
                    800: '#292929',
                    900: '#141414'
                },
                background: {
                    default: '#fff',
                    paper: '#f6f6f9'
                },
                text: {
                    primary: grey[900],
                    secondary: grey[800],
                },
            }
            : {
                primary: {
                    100: '#dad9f8',
                    200: '#b6b3f1',
                    300: '#918de9',
                    400: '#6d67e2',
                    500: '#5A5EE9',
                    600: '#3a34af',
                    700: '#2b2783',
                    800: '#1d1a58',
                    900: '#0e0d2c'
                },
                grey: {
                    100: '#e0e0e0',
                    200: '#c2c2c2',
                    300: '#a3a3a3',
                    400: '#858585',
                    500: '#666666',
                    600: '#525252',
                    700: '#3d3d3d',
                    800: '#292929',
                    900: '#141414'
                },
                background: {
                    default: '#2E2F38',
                    paper: '#383945'
                },
                text: {
                    primary: '#fff',
                    secondary: grey[700],
                }
            }),
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: '5px',
                    textTransform: 'none',
                    fontSize: 14
                }
            }
        }
    },
    typography: {
        fontFamily: ['Roboto', 'sans-serif'].join(','),
        fontSize: 12,
        h1: {
            fontFamily: ['Roboto', 'sans-serif'].join(','),
            fontSize: 40,
            fontWeight: 500,
        },
        h2: {
            fontFamily: ['Roboto', 'sans-serif'].join(','),
            fontSize: 32,
            fontWeight: 500,
        },
        h3: {
            fontFamily: ['Roboto', 'sans-serif'].join(','),
            fontSize: 24,
            fontWeight: 500,
        },
        h4: {
            fontFamily: ['Roboto', 'sans-serif'].join(','),
            fontSize: 20,
            fontWeight: 500,
        },
        h5: {
            fontFamily: ['Roboto', 'sans-serif'].join(','),
            fontSize: 16,
            fontWeight: 500,
        },
        h6: {
            fontFamily: ['Roboto', 'sans-serif'].join(','),
            fontSize: 14,
            fontWeight: 500,
        },
        body1: {
            fontFamily: ['Roboto', 'sans-serif'].join(','),
            fontSize: 16,
        },
        caption: {
            fontFamily: ['Roboto', 'sans-serif'].join(','),
            fontSize: 16,
            color: mode === ColorMode.LIGHT ? grey[800] : grey[200]
        },
        subtitle1: {
            fontFamily: ['Roboto', 'sans-serif'].join(','),
            fontSize: 16,
            color: mode === ColorMode.LIGHT ? grey[800] : grey[200]
        },
        subtitle2: {
            fontFamily: ['Roboto', 'sans-serif'].join(','),
            fontSize: 12,
            color: mode === ColorMode.LIGHT ? grey[800] : grey[200]
        }
    }
});
