import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import { useState } from 'react';
import { Box, Drawer, IconButton, Typography, styled, useTheme } from '@mui/material';

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

const Sidebar = ({ open, setOpen }: { open: boolean, setOpen: React.Dispatch<boolean> }) => {
    const theme = useTheme();

    return (
        <Box sx={{ display: 'flex', justifyContent: 'left' }}>
            
            <Drawer
                sx={{
                    zIndex: 999,
                    width: 240,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: 240,
                        boxSizing: 'border-box',
                    },
                }}
                variant='persistent'
                anchor="left"
                open={open}
                PaperProps={{ elevation: 5 }}
            >
                <DrawerHeader sx={{ display: 'flex', justifyContent: 'space-between', p: '0 0.5rem 0 0.5rem', position: 'relative', top: '3.5rem' }}>
                    <Typography variant='body1'>Chat Session History</Typography>
                    <IconButton onClick={() => setOpen(false)}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </DrawerHeader>
            </Drawer>
        </Box>
        
    );
};

export default Sidebar;
