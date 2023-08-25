import NightModeToggle from './ColorModeSwitch';
import EmailIcon from '@mui/icons-material/Email';
import RedditIcon from '@mui/icons-material/Reddit';
import TwitterIcon from '@mui/icons-material/Twitter';

import { useNavigate } from 'react-router-dom';
import { Box, Button, Fab, IconButton, Typography, useTheme } from '@mui/material';

const Topbar = () => {
    const theme = useTheme();
    const navigate = useNavigate();

    return (
        <Box
            sx={{
                p: 1,
                top: '0',
                zIndex: 1000,
                boxShadow: 1,
                display: 'flex',
                position: 'sticky',
                alignItems: 'center',
                justifyContent: 'space-between',
                backgroundColor: theme.palette.background.paper,
            }}
        >
            <Fab color='primary' size='small' onClick={() => navigate('/ai-ui-template')}>
                <Typography variant='h6'>🚢</Typography>
            </Fab>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography sx={{ mr: '1rem', userSelect: 'none' }} variant='body1'>onboard your friends 🚢</Typography>
                <IconButton size='small' sx={{ mr: '0.5rem', backgroundColor: '#3879EF', ':hover': { backgroundColor: '#2d61bf' } }}>
                    <TwitterIcon sx={{ color: '#fff', fontSize: '1.25rem' }} />
                </IconButton>
                <IconButton size='small' sx={{ mr: '0.5rem', backgroundColor: '#EB3A41', ':hover': { backgroundColor: '#8D2327' } }}>
                    <RedditIcon sx={{ color: '#fff', fontSize: '1.25rem' }} />
                </IconButton>
                <IconButton
                    size='small'
                    sx={{ 
                        mr: '0rem',
                        backgroundColor: theme.palette.primary.main,
                        ':hover': {
                            backgroundColor: theme.palette.primary.dark
                        }
                    }}
                >
                    <EmailIcon sx={{ color: '#fff', fontSize: '1.25rem' }} />
                </IconButton>
                <NightModeToggle></NightModeToggle>
                <Button variant='contained'>Login</Button>
            </Box>
        </Box>
    );
};

export default Topbar;
