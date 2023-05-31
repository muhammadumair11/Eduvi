import {
    Container,
    Grid,
    Stack,
    Typography,
    Button,
    MenuItem,
    ListItemText,
} from "@mui/material";
import React, { Suspense, useState } from "react";

import cardImage from "../../Assets/Images/subjects.png";
import { Outlet, useParams } from "react-router-dom";
import NewsLetter from "../../Common/Newsletter/NewsLetter";
import {
    MobileContainer,
    WebContainer,
} from "../../Common/Wrapper/ResponsiveContainers";
import CustomMenu from "../../Components/CustomMenu";
import { primarySubtitleProps } from "../../HelperPropFunctions/typography";
import { ArrowDownward } from "@mui/icons-material";
const FeaturedCourses = React.lazy(() =>
    import("../../Common/FeaturedCourses/FeaturedCourses")
);
import Loader from "../../Components/Loader";
import PageHeader from "../../Common/PageHeader/PageHeader";
import { useCategoriesQuery } from "../../Features/Categories/categoriesApiSlice";
import { useDispatch, useSelector } from "react-redux";
import {
    selectCategory,
    setCategory,
} from "../../Features/Categories/categoriesSlice";

function Courses() {
    const { name: category } = useParams();
    const selected = useSelector(selectCategory);
    const dispatch = useDispatch();

    const categories = useCategoriesQuery();
    return (
        <Container>
            {categories.isSuccess ? (
                <Grid container rowSpacing={2}>
                    {/* Primary Card */}

                    <Grid item xs={12}>
                        <PageHeader
                            titleText={
                                category ? `${category} Courses` : `All Courses`
                            }
                            mobileTitle={
                                category ? `${category} Courses` : `All Courses`
                            }
                            image={cardImage}
                        />
                    </Grid>

                    {/* Courses Buttons List */}
                    {!category && (
                        <Grid item xs={12} paddingY={2}>
                            <WebContainer>
                                <Stack
                                    direction="row"
                                    flexWrap="wrap"
                                    spacing={2}
                                >
                                    {/* Going through an array of Button's list */}
                                    {categories.data.map((item) => (
                                        <Button
                                            key={item.id}
                                            onClick={() =>
                                                dispatch(setCategory(item.id))
                                            }
                                            variant={
                                                item.id == selected
                                                    ? "contained"
                                                    : "outlined"
                                            }
                                            size="medium"
                                            color="secondary"
                                        >
                                            {item.name_category}
                                        </Button>
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
                                    {categories.data.map((item, i) => (
                                        <MenuItem
                                            key={i}
                                            onClick={() =>
                                                dispatch(setCategory(item.id))
                                            }
                                            sx={{
                                                minWidth: "200px",
                                            }}
                                        >
                                            <ListItemText>
                                                <Typography
                                                    {...primarySubtitleProps({
                                                        light: "true",
                                                        fontWeight: "bold",
                                                    })}
                                                >
                                                    {item.name_category}
                                                </Typography>
                                            </ListItemText>
                                        </MenuItem>
                                    ))}
                                </CustomMenu>
                            </MobileContainer>
                        </Grid>
                    )}

                    {/* Courses List */}
                    <Grid item xs={12}>
                        <Outlet />
                    </Grid>
                    <Grid item xs={12} marginY={2}>
                        <Suspense fallback={<Loader />}>
                            {/* <FeaturedCourses /> */}
                        </Suspense>
                    </Grid>
                    <Grid item xs={12}>
                        <NewsLetter />
                    </Grid>
                </Grid>
            ) : (
                <Loader />
            )}
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
