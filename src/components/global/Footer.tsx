import { grey } from '@mui/material/colors';
import { ColorMode } from '../../enums/color-mode.enum';
import { Box, Typography, useTheme } from '@mui/material';

const Footer = () => {
    const theme = useTheme();

    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                p: '0.5rem 1rem 0.5rem 1rem',
                justifyContent: 'space-between',
                backgroundColor: theme.palette.mode === ColorMode.LIGHT ? grey[100] : grey[900],
            }}
        >
            <Typography variant='body1'>v0.1.1 | made with ❤️</Typography>
            <Typography variant='body1' sx={{ ':hover': { textDecoration: 'underline', cursor: 'pointer' } }}>terms of service</Typography>
            <Box sx={{ display: 'inline-flex', alignItems: 'center' }}>
                <Typography variant='body1' sx={{ mr: '0.5rem' }}>Join our discord</Typography>
                <Box sx={{ display: 'flex', ':hover': { cursor: 'pointer' } }}>
                    <img
                        src='https://cdn3.iconfinder.com/data/icons/popular-services-brands-vol-2/512/discord-512.png'
                        alt='Discord Logo'
                        style={{ height: '35px' }}
                    />
                </Box>
            </Box>
        </Box>
    );
};

export default Footer;
