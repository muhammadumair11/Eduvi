
import { Send } from '@mui/icons-material';
import { Box, TextField } from '@mui/material';
import React from 'react';
import ChatBubble from './ChatBubble';
import { ChatPaper, ChatWrapper } from '../StyledComponents/SliderCustomComponents';
import { ScrollWrapper } from '../../Wrapper/ScrollWrapper';

function ChatArea() {
    return (
        <ChatPaper variant="outlined">
            <Box padding={1}>
                <ScrollWrapper height="400px" padding="0 10px 0 0">
                    <ChatWrapper>
                        <ChatBubble sender message={"Discuss slide's end-conclusion"} />
                        <ChatBubble
                            message={
                                "Discuss slide's end-conclusion, conclusion hfdhsjf ksakl dfj aslkd jfklasd jfklas jdklf jas"
                            }
                        />
                        <ChatBubble sender message={"Discuss slide's end-conclusion"} />
                        <ChatBubble message={"Discuss slide's end-conclusion"} />
                        <ChatBubble sender message={"Discuss slide's end-conclusion"} />
                        <ChatBubble sender message={"Discuss slide's end-conclusion"} />
                        <ChatBubble sender message={"Discuss slide's end-conclusion"} />
                        <ChatBubble sender message={"Discuss slide's end-conclusion"} />
                        <ChatBubble message={"Discuss slide's end-conclusion"} />
                        <ChatBubble sender message={"Discuss slide's end-conclusion"} />
                        <ChatBubble message={"Discuss slide's end-conclusion"} />
                        <ChatBubble sender message={"Discuss slide's end-conclusion"} />
                        <ChatBubble sender message={"Discuss slide's end-conclusion"} />
                        <ChatBubble sender message={"Discuss slide's end-conclusion"} />
                        <ChatBubble message={"Discuss slide's end-conclusion"} />
                        <ChatBubble sender message={"Discuss slide's end-conclusion"} />
                    </ChatWrapper>
                </ScrollWrapper>
                <Box
                    sx={(theme) => ({
                        display: 'flex',
                        alignItems: 'center',

                        margin: '.5rem 0 0 0',
                        padding: '.8rem 1rem',

                        border: `2px solid ${theme.palette.secondary.dark}`,
                        borderRadius: `${theme.shape.borderRadius}px`,
                    })}
                >
                    <TextField
                        size="small"
                        InputProps={{
                            size: 'small',
                        }}
                        variant="standard"
                        color="secondary"
                        placeholder="Type your answer here"
                    />
                    <Send color="secondary" sx={{ mr: 1 }} />
                </Box>
            </Box>
        </ChatPaper>
    );
}

export default ChatArea;
