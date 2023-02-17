import React from 'react';
import Typography from '@mui/material/Typography';
import { Box, TextareaAutosize } from '@mui/material';
import theme from '../../../Theme/theme';

function Question({ submited }) {
    return (
        <Box marginY={3}>
            <Typography variant="h3" fontWeight="semibold" marginY={1} color="primary.light">
                Write a brief note on this topic ?
            </Typography>
            <TextareaAutosize
                minLength={4}
                minRows={5}
                placeholder="Your Answer"
                disabled={submited}
                style={{
                    width: '60%',
                    padding: '.8rem 1rem',
                    borderRadius: theme.shape.borderRadius,
                    border: `2px solid ${theme.palette.primary.light}`,
                }}
            />
        </Box>
    );
}

export default Question;
