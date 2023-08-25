import { Box, Typography, useTheme } from "@mui/material";
import { ChatBubbleAuthor } from "../enums/chat-bubble-author.enum";


const ChatBubble = ({ content, author }: { content: string, author: ChatBubbleAuthor }) => {
    const theme = useTheme();

    return (
        <Box
            sx={{
                width: '55vw',
                color: '#fff',
                m: '0 0 1rem 0',
                padding: '1rem',
                borderRadius: '5px',
                backgroundColor: theme.palette.primary.main
            }}
        >
            <Typography variant='body1'>
                {author === ChatBubbleAuthor.PROGRAM ? '🤖' : '🫵'}
                &nbsp;&nbsp;
                {content}
            </Typography>
        </Box>
    );
};

export default ChatBubble;
