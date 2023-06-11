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
import { useAddPurchasedCoursesMutation } from "../../Features/PurchasedCourses/purchasedCoursesApiSlice";
import { setPurchasedCourses } from "../../Features/PurchasedCourses/purchasedCoursesSlice";
function SearchCourses() {
    const cartData = useSelector(selectCart);
    const dispatch = useDispatch();

    const [removeItem, cartItem] = useRemoveCourseCartItemsMutation();
    const [addToPurchasedList, purchasedResponses] =
        useAddPurchasedCoursesMutation();

    async function handleCartItem(id) {
        const data = await removeItem({
            items: [...id],
        }).unwrap();

        dispatch(setCourseCart(data));
    }

    async function handlePurchasedItems(id) {
        const data = await addToPurchasedList({
            items: [...id],
        }).unwrap();

        dispatch(setPurchasedCourses(data.purchased_courses));
        dispatch(setCourseCart(data.cart));
    }

    return (
        <Container>
            {cartData ? (
                <Grid container rowSpacing={2}>
                    {/* Primary Card */}

                    <Grid item xs={12}>
                        <PageHeader
                            titleText={"Cart"}
                            mobileTitle={"Cart"}
                            image={cardImage}
                        />
                    </Grid>
                    <Grid item xs={12} paddingY={2}>
                        <Grid container spacing={cartData.length != 0 ? 2 : 0}>
                            <Grid item xs={12}></Grid>
                            <Grid item lg={5} md={2} xs={12}></Grid>
                            <Grid item lg={5} md={2} xs={12}></Grid>
                            <Grid item lg={2} md={8} xs={12}>
                                {cartData.length != 0 ? (
                                    <LoadingButton
                                        fullWidth
                                        sx={{ marginY: 2 }}
                                        variant="contained"
                                        // loading={isLoading}
                                        onClick={() => {
                                            const itemInArray = new Array();
                                            cartData.forEach((element) => {
                                                itemInArray.push(element.id);
                                            });
                                            return handleCartItem(itemInArray);
                                        }}
                                        size="medium"
                                        color="error"
                                    >
                                        <Typography
                                            fontWeight="bold"
                                            lineHeight={1}
                                            variant="subtitle1"
                                            color="inherit"
                                        >
                                            Remove All
                                        </Typography>
                                    </LoadingButton>
                                ) : (
                                    ""
                                )}
                            </Grid>

                            {cartData.length != 0 ? (
                                <>
                                    {cartData.map((item, index) => (
                                        <>
                                            <Grid
                                                key={index}
                                                item
                                                lg={3}
                                                md={6}
                                                sm={6}
                                                xs={12}
                                                style={{
                                                    position: "relative",
                                                }}
                                            >
                                                <div
                                                    style={{
                                                        position: "absolute",
                                                        top: "-5px",
                                                        right: "-20px",
                                                    }}
                                                >
                                                    <Tooltip title="Remove Item">
                                                        <IconButton
                                                            onClick={() =>
                                                                handleCartItem([
                                                                    item.id,
                                                                ])
                                                            }
                                                            color="secondary"
                                                            size="large"
                                                        >
                                                            <HighlightOffTwoToneIcon />
                                                        </IconButton>
                                                    </Tooltip>
                                                </div>
                                                <CourseCard
                                                    courseData={item.course}
                                                />
                                                <LoadingButton
                                                    fullWidth
                                                    sx={{ marginY: 2 }}
                                                    variant="contained"
                                                    size="medium"
                                                    onClick={() =>
                                                        handlePurchasedItems([
                                                            item.course.id,
                                                        ])
                                                    }
                                                    color="primary"
                                                >
                                                    <Typography
                                                        fontWeight="bold"
                                                        lineHeight={1}
                                                        variant="subtitle1"
                                                        color="inherit"
                                                    >
                                                        Purchase now
                                                    </Typography>
                                                </LoadingButton>
                                            </Grid>
                                        </>
                                    ))}

                                    <Grid item xs={12}></Grid>
                                    <Grid item lg={3} md={2} xs={12}></Grid>
                                    <Grid item lg={6} md={8} xs={12}>
                                        <LoadingButton
                                            fullWidth
                                            sx={{ marginY: 2 }}
                                            variant="contained"
                                            // loading={isLoading}
                                            size="medium"
                                            color="primary"
                                            onClick={() => {
                                                const itemInArray = new Array();
                                                cartData.forEach((element) => {
                                                    itemInArray.push(
                                                        element.course.id
                                                    );
                                                });
                                                return handlePurchasedItems(
                                                    itemInArray
                                                );
                                            }}
                                        >
                                            <Typography
                                                fontWeight="bold"
                                                lineHeight={1}
                                                variant="subtitle1"
                                                color="inherit"
                                            >
                                                Purchase All
                                            </Typography>
                                        </LoadingButton>
                                    </Grid>
                                    <Grid item lg={3} md={2} xs={12}></Grid>
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
                    {cartItem.isSuccess && (
                        <CustomAlert
                            message={"Item(s) removed"}
                            severity="success"
                        />
                    )}
                    {purchasedResponses.isSuccess && (
                        <CustomAlert
                            message={"Item Purchased Successfully"}
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

export default SearchCourses;
