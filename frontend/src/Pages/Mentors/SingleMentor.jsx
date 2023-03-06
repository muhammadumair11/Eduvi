import {
    Box,
    Container,
    Grid,
    Stack,
    styled,
    Typography,
    Button,
    Paper,
} from "@mui/material";
import React from "react";
import NewsLetter from "../../Common/Newsletter/NewsLetter";
import PrimaryCard from "../../Components/PrimaryCard";

import image from "../../Assets/Images/mentor-images/1.png";
import {
    primaryHeadingBoldProps,
    primarySubtitleProps,
} from "../../HelperPropFunctions/typography";
import { flexBox } from "../../HelperPropFunctions/flexBox";
import InfoCard from "./InfoCard";
import CustomTabs from "../../Components/CustomTabs";
import AboutTab from "./SingleMentorTabContent/AboutTab";

const SingleMentorImage = styled("img")(({ theme }) => ({
    borderRadius: theme.shape.borderRadius,

    width: "80%",
    [theme.breakpoints.down("sm")]: {
        width: "40%",
    },

    position: "absolute",
    bottom: "0px",
    left: "50%",
    transform: "translate(-50%, -0%)",
}));

function SingleMentor() {
    return (
        <Container>
            <Grid container>
                <Grid item xs={12}>
                    <PrimaryCard height={"200px"}></PrimaryCard>
                </Grid>
                <Grid lg={8} xs={12} paddingY={2}>
                    <Grid container>
                        <Grid sm={3} xs={12} position="relative" paddingX={2}>
                            <SingleMentorImage src={image} />
                        </Grid>
                        <Grid sm={9} xs={12}>
                            <Box
                                {...flexBox("space-between", "center")}
                                flexWrap="wrap"
                                padding={2}
                            >
                                <Box>
                                    <Typography
                                        {...primaryHeadingBoldProps({
                                            variant: "h4",
                                        })}
                                    >
                                        Kritsin Watson
                                    </Typography>
                                    <Typography
                                        {...primarySubtitleProps({
                                            light: "true",
                                        })}
                                    >
                                        Founder & Mentor
                                    </Typography>
                                </Box>
                                <Button
                                    variant="contained"
                                    size="medium"
                                    color="primary"
                                >
                                    Contact us
                                </Button>
                            </Box>
                        </Grid>
                        <Grid xs={12}>
                            <CustomTabs
                                tabs={["About", "Courses", "Reviews"]}
                                tabContent={[
                                    <AboutTab />,
                                    "something",
                                    "something",
                                ]}
                            />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid lg={4} padding={2}>
                    <InfoCard />
                </Grid>

                <Grid item xs={12} paddingY={4}>
                    <NewsLetter />
                </Grid>
            </Grid>
        </Container>
    );
}

export default SingleMentor;
