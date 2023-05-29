import React, { useEffect } from "react";
import { Box, Container, Grid, Typography, Button } from "@mui/material";

import logo from "../../Assets/Images/logo.svg";
import loginSvg from "../../Assets/Images/login-images/login.svg";
import {
    EmailTwoTone,
    PasswordTwoTone,
    PersonTwoTone,
    VisibilityOffTwoTone,
    VisibilityTwoTone,
} from "@mui/icons-material";
import { useState } from "react";
import OutlinedInput from "../../Components/OutlinedInput";
import CustomCheckbox from "../../Components/CustomCheckbox";
import { WebContainer } from "../../Common/Wrapper/ResponsiveContainers";
import { Link, useNavigate } from "react-router-dom";
import LoadingButton from "@mui/lab/LoadingButton";
import { useRegisterMutation } from "../../Features/auth/authApiSlice";
import { setCredentials } from "../../Features/auth/authSlice";
import CustomAlert from "../../Components/CustomAlert";
import { useDispatch } from "react-redux";

export default function Signup({ status, canResetPassword }) {
    const [register, { isLoading, isSuccess, isError }] = useRegisterMutation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [registerDetail, setRegisterDetails] = useState({
        username: "",
        name: "",
        email: "",
        password: "",
    });
    const [acceptTerms, setAcceptTerms] = useState(false);
    const [passVisibility, setPassVisibility] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const userData = await register(registerDetail).unwrap();
        dispatch(setCredentials({ ...userData }));
        navigate("/");
    };

    return (
        <Container>
            <Grid container>
                <Grid item lg={6}>
                    <Box padding={{ lg: "2rem 4rem" }}>
                        <Typography
                            variant="h1"
                            fontWeight={"bold"}
                            marginBottom={3}
                            marginTop={{ lg: 0, xs: 3 }}
                            color="primary.light"
                        >
                            Sign up
                        </Typography>
                        <OutlinedInput
                            label="Username"
                            placeholder="Enter your username"
                            value={registerDetail.username}
                            onChange={(e) =>
                                setRegisterDetails({
                                    ...registerDetail,
                                    username: e.target.value,
                                })
                            }
                            startIcon={<PersonTwoTone />}
                        />
                        <OutlinedInput
                            label="Full name"
                            placeholder="Enter your full name"
                            value={registerDetail.name}
                            onChange={(e) =>
                                setRegisterDetails({
                                    ...registerDetail,
                                    name: e.target.value,
                                })
                            }
                            startIcon={<PersonTwoTone />}
                        />
                        <OutlinedInput
                            type="email"
                            label="Email"
                            value={registerDetail.email}
                            onChange={(e) =>
                                setRegisterDetails({
                                    ...registerDetail,
                                    email: e.target.value,
                                })
                            }
                            placeholder="Enter your email address"
                            startIcon={<EmailTwoTone />}
                        />
                        <OutlinedInput
                            type={passVisibility ? "text" : "password"}
                            label="Password"
                            value={registerDetail.password}
                            onChange={(e) =>
                                setRegisterDetails({
                                    ...registerDetail,
                                    password: e.target.value,
                                })
                            }
                            placeholder={
                                passVisibility
                                    ? "Enter your password"
                                    : "**********"
                            }
                            startIcon={<PasswordTwoTone />}
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
                        <CustomCheckbox
                            value={acceptTerms}
                            onChange={() => setAcceptTerms(!acceptTerms)}
                            label={
                                <Typography
                                    variant="subtitle1"
                                    color="primary.light"
                                >
                                    I agreed to the{" "}
                                    <Typography
                                        variant="subtitle1"
                                        component="span"
                                        color="inherit"
                                        fontWeight="bold"
                                    >
                                        Terms & Conditions
                                    </Typography>
                                </Typography>
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
                            disabled={!acceptTerms}
                        >
                            <Typography
                                fontWeight="bold"
                                lineHeight={1}
                                variant="subtitle1"
                                color="inherit"
                            >
                                Sign up
                            </Typography>
                        </LoadingButton>
                        <Typography
                            variant="subtitle2"
                            textAlign="center"
                            color="primary.light"
                        >
                            Already have an account? <Link to="/">Sign in</Link>
                        </Typography>
                    </Box>
                </Grid>
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
            </Grid>
            {isError && (
                <CustomAlert
                    message={
                        "Sign up Failed, Please Check your email and passport"
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
