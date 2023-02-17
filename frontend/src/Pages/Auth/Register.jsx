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
import OutlinedInput from '../../Components/OutlinedInput';
import CustomCheckbox from '../../Components/CustomCheckbox';
import { WebContainer } from '../../Common/Wrapper/ResponsiveContainers';
import NavLink from '../../Components/NavLink';

export default function Signup({ status, canResetPassword }) {
    const [passVisibility, setPassVisibility] = useState(false);

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
                            label="Full name"
                            placeholder="Enter your full name"
                            startIcon={<PersonTwoTone />}
                        />
                        <OutlinedInput
                            type="email"
                            label="Email"
                            placeholder="Enter your email address"
                            startIcon={<EmailTwoTone />}
                        />
                        <OutlinedInput
                            type={passVisibility ? "text" : "password"}
                            label="Password"
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
                        <Button
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
                                Sign up
                            </Typography>
                        </Button>
                        <Typography
                            variant="subtitle2"
                            textAlign="center"
                            color="primary.light"
                        >
                            Already have an account?{" "}
                            <NavLink
                                href={"/login"}
                                typographyProps={{
                                    fontWeight: "bold",
                                    component: "span",
                                }}
                            >
                                Sign in
                            </NavLink>
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
        </Container>
    );
}
