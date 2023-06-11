import {
    Box,
    Container,
    Grid,
    Stack,
    styled,
    Typography,
    Button,
    Paper,
    Skeleton,
} from "@mui/material";
import React, { useEffect, useState } from "react";
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
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { selectMentors } from "../../Features/Mentors/mentorSlice";
import Loader from "../../Components/Loader";
import CoursesTab from "./SingleMentorTabContent/CoursesTab";
import mentorBgImaage from "../../Assets/Images/mentor-images/mentor-bg-pattern.jpg";
import { ASSET_URL } from "../../Services/apiSlice";

const SingleMentorImage = styled("img")(({ theme }) => ({
    borderRadius: theme.shape.borderRadius,

    width: "80%",
    height: "150px",
    objectFit: "cover",

    border: `5px solid ${theme.palette.secondary.light}`,

    [theme.breakpoints.down("sm")]: {
        width: "40%",
    },

    position: "absolute",
    bottom: "0px",
    left: "55%",
    transform: "translate(-50%, -0%)",
}));

const BackgroundImage = styled("div")(({ theme }) => ({
    height: "100%",
    width: "100%",

    backgroundPosition: "center",
    backgroundSize: "100%",
    backgroundRepeat: "no-repeat",

    borderRadius: theme.shape.borderRadius,
}));

function SingleMentor() {
    const navigate = useNavigate();
    const { id } = useParams();
    const mentors = useSelector(selectMentors);
    const [mentor, setMentor] = useState(null);

    function singleMentor() {
        if (mentors) {
            mentors.forEach((item) => {
                if (item.id == id) {
                    setMentor(item);
                    return;
                } else {
                    // navigate("/mentors");
                }
            });
        }
    }

    useEffect(() => {
        singleMentor();
    }, [mentors]);

    return mentor ? (
        <Container>
            <Grid container>
                <Grid item xs={12}>
                    <PrimaryCard height={"200px"}>
                        <BackgroundImage
                            style={{
                                backgroundImage: `url(${mentorBgImaage})`,
                            }}
                        />
                    </PrimaryCard>
                </Grid>
                <Grid item lg={8} xs={12} paddingY={2}>
                    <Grid container>
                        <Grid
                            item
                            sm={3}
                            xs={12}
                            position="relative"
                            paddingX={2}
                        >
                            {mentor.image ? (
                                <SingleMentorImage
                                    src={`${ASSET_URL}${mentor.image}`}
                                />
                            ) : (
                                <Skeleton width="100%" height={100} />
                            )}
                        </Grid>
                        <Grid item sm={9} xs={12}>
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
                                        {mentor?.users?.name}
                                    </Typography>
                                    <Typography
                                        {...primarySubtitleProps({
                                            light: "true",
                                        })}
                                    >
                                        {mentor?.users?.user_type}
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
                        <Grid item xs={12}>
                            <CustomTabs
                                tabs={["About", "Courses"]}
                                tabContent={[
                                    <AboutTab mentor={mentor} />,
                                    <CoursesTab mentorId={mentor.id} />,
                                ]}
                            />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item lg={4} padding={2}>
                    <InfoCard info={mentor} />
                </Grid>

                <Grid item xs={12} paddingY={4}>
                    <NewsLetter />
                </Grid>
            </Grid>
        </Container>
    ) : (
        <Loader />
    );
}

export default SingleMentor;
