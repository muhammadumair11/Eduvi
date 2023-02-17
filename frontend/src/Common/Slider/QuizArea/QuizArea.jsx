import { Box, Button, Paper, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";
import Question from "./Question";
import { flexBox } from '../../../HelperPropFunctions/flexBox';

function QuizArea() {
    const [submited, setSubmited] = useState(false);
    return (
        <Paper variant="outlined">
            <Box padding={2}>
                <Typography
                    variant="h1"
                    fontWeight="bold"
                    marginBottom={4}
                    color="primary.light"
                >
                    Quiz Questions
                </Typography>
                {[1, 2].map((i) => (
                    <Question key={i} submited={submited} />
                ))}
                <Box {...flexBox("flex-end", "", "")}>
                    <Button variant="contained" color="primary" fullWidth>
                        Submit
                    </Button>
                </Box>
            </Box>
        </Paper>
    );
}

export default QuizArea;
