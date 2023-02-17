import {
    Box,
    Paper,
    styled,
    Typography,
    Button,
    TextField,
    Stack,
    Grid,
} from "@mui/material";
import React from "react";

import newsletterbg from "../../Assets/Images/newsletterbg.png";
import { primaryHeadingBoldProps } from "../../HelperPropFunctions/typography";
import { MobileContainer, WebContainer } from "../Wrapper/ResponsiveContainers";
import { flexBox } from '../../HelperPropFunctions/flexBox';

const NewsLetterWrapper = styled(Paper)(({ theme }) => ({
    padding: "3rem 2rem",

    background: `url(${newsletterbg}) no-repeat`,
    backgroundColor: theme.palette.primary.light,
    backgroundSize: "100%",
    backgroundPosition: "center",
}));

function NewsLetter() {
    return (
        <NewsLetterWrapper>
            <Box {...flexBox("", "center", "column")}>
                <>
                    <Typography
                        {...primaryHeadingBoldProps({
                            color: "secondary.white",
                        })}
                    >
                        Subscribe For Get Update
                    </Typography>
                    <Typography
                        {...primaryHeadingBoldProps({
                            color: "secondary.white",
                        })}
                    >
                        Every New Courses
                    </Typography>
                </>

                <Typography marginY={3} variant="subtitle2" color="grey">
                    20k+ students daily learn with Eduvi. Subscribe for new
                    courses.
                </Typography>
            </Box>
            <Grid container>
                <Grid item lg={3}></Grid>
                <Grid item lg={6} xs={12}>
                    <WebContainer>
                        <Box
                            sx={(theme) => ({
                                backgroundColor: theme.palette.grey.A400,
                                borderRadius: "10px",
                            })}
                        >
                            <Stack {...flexBox("space-between", "center", "")}>
                                <TextField
                                    variant="standard"
                                    placeholder="Enter your email"
                                    fullWidth
                                    InputProps={{
                                        sx: {
                                            padding: "0rem 2rem",
                                        },
                                    }}
                                />

                                <Button
                                    size="large"
                                    variant="contained"
                                    color="primary"
                                    sx={{
                                        paddingX: 4,
                                        borderRadius: "0 10px 10px 0",
                                    }}
                                >
                                    Subscribe
                                </Button>
                            </Stack>
                        </Box>
                    </WebContainer>
                    <MobileContainer>
                        <Stack justifyContent="center" spacing={1} width="100%">
                            <TextField
                                variant="filled"
                                placeholder="Enter your email"
                                color="secondary"
                                size="small"
                            />
                            <Button
                                variant="contained"
                                size="small"
                                fullWidth
                                color="primary"
                            >
                                Subscribe
                            </Button>
                        </Stack>
                    </MobileContainer>
                </Grid>
                <Grid item lg={3}></Grid>
            </Grid>
        </NewsLetterWrapper>
    );
}

export default NewsLetter;
