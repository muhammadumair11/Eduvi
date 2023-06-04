import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import NewsLetter from "../../Common/Newsletter/NewsLetter";
import PageHeader from "../../Common/PageHeader/PageHeader";

import cardImage from "../../Assets/Images/joinasmentor-images/primary-card.png";
import subjectImage from "../../Assets/Images/joinasmentor-images/subjectImage.png";
import { flexBox } from "../../HelperPropFunctions/flexBox";
import {
    primaryHeadingBoldProps,
    primarySubtitleProps,
} from "../../HelperPropFunctions/typography";
import MentorTabs from "./MentorTabs";
import LoadingButton from "@mui/lab/LoadingButton/LoadingButton";
import {
    useMentorRequestMutation,
    useMentorRequestStatusQuery,
} from "../../Features/Mentors/mentorsApiSlice";
import CustomAlert from "../../Components/CustomAlert";

function JoinAsMentor() {
    const status = useMentorRequestStatusQuery();
    const [sendRequest, resquestResponse] = useMentorRequestMutation();

    const handleMentorRequest = async () => {
        const data = await sendRequest();
        status.refetch();
    };

    console.log(status);

    return (
        <Container>
            <Grid container>
                <Grid item xs={12}>
                    <PageHeader
                        titleText={
                            <div>
                                Join Eduvi as <br /> a Mentor
                            </div>
                        }
                        mobileTitle="All Mentors"
                        image={cardImage}
                    />
                </Grid>
                <Grid item xs={12} paddingY={5}>
                    <Grid container spacing={0}>
                        <Grid item lg={5}>
                            <Paper
                                elevation={0}
                                sx={(theme) => ({
                                    backgroundColor:
                                        theme.palette.secondary.dark,
                                })}
                            >
                                <Box
                                    padding="3rem 3rem 0 3rem"
                                    {...flexBox("center", "center")}
                                >
                                    <img src={subjectImage} alt="" />
                                </Box>
                            </Paper>
                        </Grid>
                        <Grid item lg={7} padding={4}>
                            <Box>
                                <Typography
                                    {...primaryHeadingBoldProps({
                                        variant: "h1",
                                        marginBottom: 2,
                                    })}
                                >
                                    Apply As Instructor
                                </Typography>
                                <Typography
                                    {...primarySubtitleProps({
                                        color: "gray",
                                    })}
                                >
                                    Teaching is a vital and admirable career. As
                                    such, it comes with quite a bit of
                                    responsibility, both in practice and in
                                    preparation with many skills required to be
                                    a teacher. The following steps provide a
                                    general breakdown of the requirements for
                                    teachers:
                                </Typography>
                            </Box>
                            <Box paddingY={3}>
                                <MentorTabs />
                                <LoadingButton
                                    sx={{ marginY: 2 }}
                                    variant="contained"
                                    size="large"
                                    color="primary"
                                    loading={
                                        resquestResponse.isLoading ||
                                        status.isLoading
                                    }
                                    onClick={handleMentorRequest}
                                    disabled={
                                        status.data ||
                                        status.data?.status == "pending" ||
                                        status.data?.status == "Rejected"
                                            ? true
                                            : false
                                    }
                                >
                                    <Typography
                                        fontWeight="bold"
                                        lineHeight={1}
                                        variant="subtitle1"
                                        color="inherit"
                                    >
                                        {status.data
                                            ? status.data.status
                                            : "Apply now"}
                                    </Typography>
                                </LoadingButton>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid xs={12}>
                    <Box paddingY={4}>
                        <Typography
                            {...primaryHeadingBoldProps({
                                textAlign: "center",
                            })}
                        >
                            How to apply to join as instructor
                        </Typography>

                        <Box></Box>
                    </Box>
                </Grid>
                <Grid item xs={12} paddingY={4}>
                    <NewsLetter />
                </Grid>
                {resquestResponse.isError && (
                    <CustomAlert
                        message={"Sign in as a student required"}
                        severity="error"
                    />
                )}
                {resquestResponse.isSuccess && (
                    <CustomAlert
                        message={"Request successfully sent, Congrats!!"}
                        severity="success"
                    />
                )}
            </Grid>
        </Container>
    );
}

export default JoinAsMentor;
