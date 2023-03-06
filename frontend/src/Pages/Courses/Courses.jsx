import {
    Container,
    Grid,
    Stack,
    Typography,
    Button,
    MenuItem,
    ListItemText,
} from "@mui/material";
import React, { Suspense } from "react";
import PrimaryCard from "../../Components/PrimaryCard";
import { flexBox } from "../../HelperPropFunctions/flexBox";

import cardImage from "../../Assets/Images/subjects.png";
import { Link, Outlet } from "react-router-dom";
import NewsLetter from "../../Common/Newsletter/NewsLetter";
import {
    MobileContainer,
    WebContainer,
} from "../../Common/Wrapper/ResponsiveContainers";
import CustomMenu from "../../Components/CustomMenu";
import {
    primarySubtitleProps,
    primaryHeadingBoldProps,
} from "../../HelperPropFunctions/typography";
import { ArrowDownward } from "@mui/icons-material";
const FeaturedCourses = React.lazy(() =>
    import("../../Common/FeaturedCourses/FeaturedCourses")
);
import Loader from "../../Components/Loader";
import PageHeader from "../../Common/PageHeader/PageHeader";

function Courses() {
    return (
        <Container>
            <Grid container>
                {/* Primary Card */}

                <Grid item xs={12}>
                    <PageHeader
                        titleText="All Courses"
                        mobileTitle="All Courses"
                        image={cardImage}
                    />
                </Grid>

                {/* Courses Buttons List */}
                <Grid item xs={12} paddingY={2}>
                    <WebContainer>
                        <Stack direction="row" flexWrap="wrap" spacing={2}>
                            {/* Going through an array of Button's list */}
                            {coursesLinks.map((item, index) => (
                                <Link key={index} to={item.link}>
                                    <Button
                                        variant={
                                            index == 3
                                                ? "contained"
                                                : "outlined"
                                        }
                                        size="medium"
                                        color="secondary"
                                    >
                                        {item.text}
                                    </Button>
                                </Link>
                            ))}
                        </Stack>
                    </WebContainer>

                    <MobileContainer>
                        <CustomMenu
                            id="courses-list"
                            title={
                                <Button
                                    variant="contained"
                                    color="primary"
                                    endIcon={<ArrowDownward />}
                                    fullWidth
                                >
                                    Choose List
                                </Button>
                            }
                            position={{
                                anchorOrigin: {
                                    vertical: "bottom",
                                    horizontal: "left",
                                },
                                transformOrigin: {
                                    vertical: "top",
                                    horizontal: "left",
                                },
                            }}
                        >
                            {coursesLinks.map((el, i) => (
                                <MenuItem
                                    key={i}
                                    onClick={() =>
                                        setFilter((prevState) => ({
                                            ...prevState,
                                            category: el,
                                        }))
                                    }
                                    sx={{
                                        minWidth: "200px",
                                    }}
                                >
                                    <ListItemText>
                                        <Link to={el.link}>
                                            <Typography
                                                {...primarySubtitleProps({
                                                    light: "true",
                                                    fontWeight: "bold",
                                                })}
                                            >
                                                {el.text}
                                            </Typography>
                                        </Link>
                                    </ListItemText>
                                </MenuItem>
                            ))}
                        </CustomMenu>
                    </MobileContainer>
                </Grid>

                {/* Courses List */}
                <Grid item xs={12}>
                    <Grid container spacing={2}>
                        <Outlet />
                    </Grid>
                </Grid>
                <Grid item xs={12} marginY={2}>
                    <Suspense fallback={<Loader />}>
                        <FeaturedCourses />
                    </Suspense>
                </Grid>
                <Grid item xs={12}>
                    <NewsLetter />
                </Grid>
            </Grid>
        </Container>
    );
}

const coursesLinks = [
    {
        text: "All Courses",
        link: "/courses",
    },
    {
        text: "Kindergarten",
        link: "/courses",
    },
    {
        text: "High School",
        link: "/courses",
    },
    {
        text: "College",
        link: "/courses",
    },
    {
        text: "Computer",
        link: "/courses",
    },
    {
        text: "Science",
        link: "/courses",
    },
    {
        text: "Engineering",
        link: "/courses",
    },
];

export default Courses;
