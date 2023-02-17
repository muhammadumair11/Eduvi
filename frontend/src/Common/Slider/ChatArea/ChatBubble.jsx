import React from 'react';
import { ChatBubbleWrapper } from '../StyledComponents/SliderCustomComponents';
import Typography from '@mui/material/Typography';

function ChatBubble({ message, ...props }) {
    return (
        <ChatBubbleWrapper {...props}>
            <Typography variant="subtitle1" color="primary.light" lineHeight={1.3} fontWeight="bold">
                {message}
            </Typography>
        </ChatBubbleWrapper>
    );
}

export default ChatBubble;
