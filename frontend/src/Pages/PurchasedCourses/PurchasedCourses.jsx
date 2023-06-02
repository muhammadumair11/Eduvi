import {
    Container,
    Grid,
    IconButton,
    Tooltip,
    Typography,
} from "@mui/material";
import React from "react";
import PageHeader from "../../Common/PageHeader/PageHeader";
import NewsLetter from "../../Common/Newsletter/NewsLetter";

import cardImage from "../../Assets/Images/subjects.png";
import { useDispatch, useSelector } from "react-redux";
import {
    selectCart,
    setCourseCart,
} from "../../Features/CourseCart/courseCartSlice";
import Loader from "../../Components/Loader";
import HorizontalCourseCard from "../../Common/Cards/CourseCard/HorizontalCourseCard";

import HighlightOffTwoToneIcon from "@mui/icons-material/HighlightOffTwoTone";
import CourseCard from "../../Common/Cards/CourseCard/CourseCard";
import LoadingButton from "@mui/lab/LoadingButton/LoadingButton";
import { useRemoveCourseCartItemsMutation } from "../../Features/CourseCart/courseCartApiSlice";
import CustomAlert from "../../Components/CustomAlert";
import { selectPurchasedCourses } from "../../Features/PurchasedCourses/purchasedCoursesSlice";
import { Link } from "react-router-dom";

function PurchasedCourses() {
    const purchasedCourses = useSelector(selectPurchasedCourses);

    const dispatch = useDispatch();

    const [removeItem, carItem] = useRemoveCourseCartItemsMutation();

    async function handleCartItem(id) {
        const data = await removeItem({
            items: [...id],
        }).unwrap();

        dispatch(setCourseCart(data));
    }

    return (
        <Container>
            {purchasedCourses ? (
                <Grid container rowSpacing={2}>
                    {/* Primary Card */}

                    <Grid item xs={12}>
                        <PageHeader
                            titleText={"Your Courses"}
                            mobileTitle={"Your Courses"}
                            image={cardImage}
                        />
                    </Grid>
                    <Grid item xs={12} paddingY={2}>
                        <Grid
                            container
                            spacing={purchasedCourses.length != 0 ? 2 : 0}
                        >
                            {purchasedCourses.length != 0 ? (
                                <>
                                    {purchasedCourses.map((item, index) => (
                                        <>
                                            <Grid
                                                key={index}
                                                item
                                                lg={3}
                                                md={6}
                                                sm={6}
                                                xs={12}
                                            >
                                                <CourseCard
                                                    courseData={item.course}
                                                />
                                                <Link
                                                    to={`/courses/${item.course.id}`}
                                                >
                                                    <LoadingButton
                                                        fullWidth
                                                        sx={{ marginY: 2 }}
                                                        variant="contained"
                                                        size="medium"
                                                        color="primary"
                                                    >
                                                        <Typography
                                                            fontWeight="bold"
                                                            lineHeight={1}
                                                            variant="subtitle1"
                                                            color="inherit"
                                                        >
                                                            Start now
                                                        </Typography>
                                                    </LoadingButton>
                                                </Link>
                                            </Grid>
                                        </>
                                    ))}
                                </>
                            ) : (
                                <Grid lg={12}>
                                    <Typography
                                        variant="h1"
                                        marginY={3}
                                        fontWeight={"bold"}
                                        color="initial"
                                    >
                                        Cart is empty
                                    </Typography>
                                </Grid>
                            )}
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <NewsLetter />
                    </Grid>
                    {carItem.isSuccess && (
                        <CustomAlert
                            message={"Item(s) removed"}
                            severity="success"
                        />
                    )}
                </Grid>
            ) : (
                <Loader />
            )}
        </Container>
    );
}

export default PurchasedCourses;
