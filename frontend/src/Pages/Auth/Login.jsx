import {
    EmailTwoTone,
    PasswordTwoTone,
    VisibilityOffTwoTone,
    VisibilityTwoTone,
} from "@mui/icons-material";
import { Box, Container, Grid, Typography, Stack } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";

import logo from "../../Assets/Images/logo.svg";
import loginSvg from "../../Assets/Images/login-images/login.svg";

import React, { useState } from "react";
import NavLink from "../../Components/NavLink";
import OutlinedInput from "../../Components/OutlinedInput";
import { WebContainer } from "../../Common/Wrapper/ResponsiveContainers";
import CustomCheckbox from "../../Components/CustomCheckbox";
import CustomAlert from "../../Components/CustomAlert";
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../Features/auth/authApiSlice";
import { useDispatch } from "react-redux";
import { setCredentials } from "../../Features/auth/authSlice";

function Login() {
    const [passVisibility, setPassVisibility] = useState(false);
    const [loginDetails, setLoginDetails] = useState({
        email: "",
        password: "",
    });
    const [login, { isLoading, isError, isSuccess }] = useLoginMutation();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const userData = await login(loginDetails).unwrap();
        dispatch(setCredentials({ ...userData }));
    };

    return (
        <Container>
            <Grid container>
                <Grid
                    item
                    lg={6}
                    sx={(theme) => ({
                        backgroundColor: theme.palette.secondary.dark,
                    })}
                >
                    <WebContainer>
                        <Box padding={{ xs: "2rem 3rem" }}>
                            <img src={logo} width="60" alt="" />
                            <Typography
                                variant="h1"
                                paddingY={2}
                                fontWeight="bold"
                                color="primary.light"
                            >
                                Welcome to Eduvi Online Learning Platform
                            </Typography>
                            <img src={loginSvg} alt="" />
                        </Box>
                    </WebContainer>
                </Grid>
                <Grid item lg={6} xs={12}>
                    <Box padding={{ lg: "2rem 4rem" }}>
                        <Typography
                            variant="h1"
                            fontWeight={"bold"}
                            marginBottom={3}
                            marginTop={{ lg: 0, xs: 2 }}
                            color="primary.light"
                        >
                            Log in
                        </Typography>
                        <OutlinedInput
                            startIcon={<EmailTwoTone />}
                            type="email"
                            label="Email"
                            value={loginDetails.email}
                            onChange={(e) =>
                                setLoginDetails({
                                    ...loginDetails,
                                    email: e.target.value,
                                })
                            }
                            placeholder="Enter your email address"
                        />
                        <OutlinedInput
                            startIcon={<PasswordTwoTone />}
                            type={passVisibility ? "text" : "password"}
                            label="Password"
                            value={loginDetails.password}
                            onChange={(e) =>
                                setLoginDetails({
                                    ...loginDetails,
                                    password: e.target.value,
                                })
                            }
                            placeholder={
                                passVisibility
                                    ? "Enter your password"
                                    : "**********"
                            }
                            endIcon={
                                passVisibility ? (
                                    <VisibilityOffTwoTone
                                        onClick={() => setPassVisibility(false)}
                                    />
                                ) : (
                                    <VisibilityTwoTone
                                        onClick={() => setPassVisibility(true)}
                                    />
                                )
                            }
                        />
                        <LoadingButton
                            fullWidth
                            sx={{ marginY: 2 }}
                            variant="contained"
                            loading={isLoading}
                            size="medium"
                            color="primary"
                            onClick={handleSubmit}
                        >
                            <Typography
                                fontWeight="bold"
                                lineHeight={1}
                                variant="subtitle1"
                                color="inherit"
                            >
                                Sign in
                            </Typography>
                        </LoadingButton>
                        <Stack
                            direction="row"
                            justifyContent="space-between"
                            alignItems="center"
                        >
                            <CustomCheckbox
                                label={
                                    <Typography
                                        variant="subtitle1"
                                        color="primary.light"
                                    >
                                        Keep me signed in
                                    </Typography>
                                }
                            />
                            <NavLink
                                typographyProps={{
                                    fontWeight: "bold",
                                    component: "span",
                                }}
                            >
                                Forgot password?
                            </NavLink>
                        </Stack>
                    </Box>
                </Grid>
            </Grid>
            {isError && (
                <CustomAlert
                    message={
                        "Sign in Failed, Please Check your email and password"
                    }
                    severity="error"
                />
            )}
            {isSuccess && (
                <CustomAlert
                    message={"Sign in Successful"}
                    severity="success"
                />
            )}
        </Container>
    );
}

export default Login;
