import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { WebContainer } from "../../Common/Wrapper/ResponsiveContainers";
import OutlinedInput from "../../Components/OutlinedInput";
import {
    CreditCardTwoTone,
    EmailTwoTone,
    PasswordTwoTone,
    Person2TwoTone,
    VisibilityOffTwoTone,
} from "@mui/icons-material";

import logo from "../../Assets/Images/logo.svg";
import loginSvg from "../../Assets/Images/login-images/login.svg";
import NavLink from "../../Components/NavLink";
import CustomCheckbox from "../../Components/CustomCheckbox";
import LoadingButton from "@mui/lab/LoadingButton/LoadingButton";
import HorizontalCourseCard from "../../Common/Cards/CourseCard/HorizontalCourseCard";
import { useDispatch, useSelector } from "react-redux";
import {
    selectCart,
    setCourseCart,
} from "../../Features/CourseCart/courseCartSlice";
import Loader from "../../Components/Loader";
import { setPurchasedCourses } from "../../Features/PurchasedCourses/purchasedCoursesSlice";
import { useAddPurchasedCoursesMutation } from "../../Features/PurchasedCourses/purchasedCoursesApiSlice";
import CustomAlert from "../../Components/CustomAlert";

function Checkout() {
    const cartData = useSelector(selectCart);

    const dispatch = useDispatch();

    const [addToPurchasedList, purchasedResponses] =
        useAddPurchasedCoursesMutation();

    async function handlePurchasedItems(id) {
        const data = await addToPurchasedList({
            items: [...id],
        }).unwrap();

        dispatch(setPurchasedCourses(data.purchased_courses));
        dispatch(setCourseCart(data.cart));
    }
    return (
        <>
            <Container>
                {cartData ? (
                    <Grid container>
                        <Grid item xs={6}>
                            <Typography
                                variant="h2"
                                color="initial"
                                fontWeight={"bold"}
                            >
                                Checkout
                            </Typography>

                            <Grid container marginY={3}>
                                <Grid item xs={12}>
                                    <>
                                        {cartData.map((item, index) => (
                                            <HorizontalCourseCard
                                                key={index}
                                                courseData={item.course}
                                            />
                                        ))}
                                    </>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={6}>
                            <Box padding={{ lg: "2rem 4rem" }}>
                                <Grid container spacing={1}>
                                    <Grid item xs={6}>
                                        <OutlinedInput
                                            startIcon={<Person2TwoTone />}
                                            type="text"
                                            label="First Name"
                                            placeholder="First Name"
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <OutlinedInput
                                            startIcon={<Person2TwoTone />}
                                            type="text"
                                            label="Last Name"
                                            placeholder="Last Name"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <OutlinedInput
                                            startIcon={<EmailTwoTone />}
                                            type="email"
                                            label="Email"
                                            placeholder="Email"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <OutlinedInput
                                            startIcon={<CreditCardTwoTone />}
                                            type="text"
                                            label="Credit Card"
                                            placeholder="*** **** **** ***"
                                        />
                                    </Grid>
                                </Grid>
                                <LoadingButton
                                    fullWidth
                                    sx={{ marginY: 2 }}
                                    variant="contained"
                                    size="medium"
                                    color="success"
                                >
                                    <Typography
                                        fontWeight="bold"
                                        lineHeight={1}
                                        variant="subtitle1"
                                        color="inherit"
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
                                        Purchase
                                    </Typography>
                                </LoadingButton>
                            </Box>
                        </Grid>
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
        </>
    );
}

export default Checkout;
