import MenuIcon from '@mui/icons-material/Menu';
import SendIcon from '@mui/icons-material/Send';
import CachedIcon from '@mui/icons-material/Cached';
import ChatBubble from '../../components/ChatBubble';
import LinearProgress from '@mui/material/LinearProgress';

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import { ChatBubbleAuthor } from '../../enums/chat-bubble-author.enum';
import { Box, Button, CircularProgress, Divider, Drawer, Grid, IconButton, InputBase, List, ListItem, ListItemButton, Paper, Typography, styled, useTheme } from "@mui/material"
import { Message } from './models/message.interface';
import { ColorMode } from '../../enums/color-mode.enum';
import { grey } from '@mui/material/colors';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean;
}>(({ theme, open }) => ({
    transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: 0,
    ...(open && {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: drawerWidth,
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

const BorderLinearProgress = styled(LinearProgress)(() => ({
    height: 10,
    borderRadius: 5
  }));

const Chat = () => {

    const theme = useTheme();

    const [open, setOpen] = useState<boolean>(false);
    const [userInput, setUserInput] = useState<string>('')
    const [messages, setMessages] = useState<Message[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [isLoadingResponse, setIsLoadingResponse] = useState<boolean>(false);

    const suggestedPrompts = [
        'What files and directories are ignored in the Git repository?',
        'What is the purpose of the `main.ts` file in the Nest.js application?',
        'What configuration options are specified in the TypeScript `tsconfig.json` file?'
    ];

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const handleUserInput = (e: any) => {
        setUserInput(e.target.value);
    };

    const handleGenerateResponse = (message: string) => {
        setIsLoadingResponse(true);
        console.log()
    };

    const handleClickSuggestedPrompt = (e: any) => {
        const newMessage: Message = {
            id: '2',
            content: e.target.outerText,
            author: ChatBubbleAuthor.USER
        };
        const newMessages = [...messages, newMessage];
        setMessages(newMessages);
        handleGenerateResponse(e.target.outerText);
    }

    const handleSubmitMessage = (e: any) => {
        e.preventDefault();
        if (userInput.length === 0) return;
        const newMessage: Message = {
            id: '2',
            content: userInput,
            author: ChatBubbleAuthor.USER
        };
        const newMessages = [...messages, newMessage];
        setMessages(newMessages);
        handleGenerateResponse(userInput);
        setUserInput('');
    };

    useEffect(() => {
        const welcomeMessageObject: Message = {
            id: '1',
            content: 'Hi! I am an expert on the microsoft/vscode repo. Ask me anything!',
            author: ChatBubbleAuthor.PROGRAM
        }
        setMessages([welcomeMessageObject]);
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2500);
        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return (
            <Box
                sx={{
                    width: '100%',
                    height: '80vh',
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'column',
                    justifyContent: 'center'
                }}
            >
                <Typography variant='h3' sx={{ width: '25%', textAlign: 'center' }}>Processing your repository...</Typography>
                <Box sx={{ width: '23%' }}>
                    <BorderLinearProgress
                        color='primary'
                        sx={{
                            height: '3px',
                            m: '0.5rem 0 0.5rem 0',
                        }}
                    />
                </Box>
                <Typography variant='h6'>This may take a few minutes.</Typography>
                
            </Box>
        );
    }

    return (
        <Box
            sx={{
                p: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'left',
            }}
        >
            <IconButton
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                sx={{ width: '2.5rem', ml: '0rem' }}
            >
                <MenuIcon />
            </IconButton>
            <Drawer
                sx={{
                    zIndex: 1,
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <Box sx={{ position: 'relative', top: '3.5rem' }}>
                    <DrawerHeader>
                        <Box sx={{ display: 'flex', alignItems: 'center', ml: 0 }}>
                            <Typography variant='body1' sx={{ mr: '2rem' }}><strong>Chat Session History</strong></Typography>
                            <IconButton onClick={handleDrawerClose}>
                                {theme.direction === 'ltr' ? <ChevronLeft /> : <ChevronRight />}
                            </IconButton>
                        </Box>
                    </DrawerHeader>
                    <Divider />
                    <List>
                        <ListItem disablePadding>
                            <ListItemButton>microsoft/vscode</ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton>pallets/flask</ListItemButton>
                        </ListItem>
                    </List>
                </Box>
            </Drawer>
            <Main open={open}>
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '80vh' }}>
                    <Box
                        sx={{
                            maxHeight: 'calc(100vh - 100px)',
                            overflowY: 'auto',
                            paddingBottom: '20px',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center'
                        }}
                    >
                        {messages.map(message => (
                            <ChatBubble
                                content={message.content}
                                author={message.author}
                                key={messages.indexOf(message)}
                            />
                        ))}
                        {messages.length === 1
                            ? <Grid container sx={{ width: '55vw', m: '0 0 2 0' }} columns={15} spacing={2}>
                                {suggestedPrompts.map((suggestedPrompt) => {
                                    return (
                                        <Grid
                                            item
                                            xs={5}
                                            key={suggestedPrompts.indexOf(suggestedPrompt)}
                                        >
                                            <Paper
                                                sx={{
                                                    display: 'flex',
                                                    overflow: 'hidden',
                                                    textOverflow: 'ellipsis',
                                                    height: '6rem',
                                                    alignItems: 'center',
                                                    textAlign: 'center',
                                                    userSelect: 'none',
                                                    ':hover': {
                                                        cursor: 'pointer',
                                                        backgroundColor: theme.palette.mode === ColorMode.LIGHT ? grey[200] : grey[700]
                                                    }
                                                }}
                                                onClick={handleClickSuggestedPrompt}
                                            >
                                                <Typography variant='body1'>
                                                    {suggestedPrompt}
                                                </Typography>
                                            </Paper>
                                        </Grid>
                                    )
                                })}
                            </Grid>
                            : ''
                        }
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <Box sx={{ width: '55vw', display: 'flex', justifyContent: 'right', m: '0 0 1rem 0' }}>
                                <Button variant='contained' startIcon={<CachedIcon />}>Regenerate</Button>
                            </Box>
                            <Paper
                                component='form'
                                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '55vw' }}
                            >
                                <InputBase
                                    multiline
                                    sx={{ ml: 1, flex: 1 }}
                                    placeholder="Send a message"
                                    inputProps={{ 'aria-label': 'search google maps' }}
                                    value={userInput}
                                    onChange={handleUserInput}
                                />
                                <Divider sx={{ height: '80%', m: 0.5 }} orientation="vertical" />
                                <IconButton sx={{ p: '10px' }} onClick={handleSubmitMessage} aria-label='submit-message' type='submit'>
                                    <SendIcon />
                                </IconButton>
                            </Paper>
                    </Box>
                </Box>
                
            </Main>
        </Box>
    );
};
export default Chat;
