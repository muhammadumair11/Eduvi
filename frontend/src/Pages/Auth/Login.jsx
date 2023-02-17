
import {
    EmailTwoTone,
    PasswordTwoTone,
    VisibilityOffTwoTone,
    VisibilityTwoTone,
} from "@mui/icons-material";
import {
    Box,
    Button,
    Container,
    Grid,
    Typography,
    Stack,
} from "@mui/material";

import logo from "../../Assets/Images/logo.svg";
import loginSvg from "../../Assets/Images/login-images/login.svg";

import React, { useState } from "react";
import NavLink from '../../Components/NavLink';
import OutlinedInput from '../../Components/OutlinedInput';
import { WebContainer } from '../../Common/Wrapper/ResponsiveContainers';
import CustomCheckbox from '../../Components/CustomCheckbox';

function Login() {
    const [passVisibility, setPassVisibility] = useState(false);
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
                            placeholder="Enter your email address"
                        />
                        <OutlinedInput
                            startIcon={<PasswordTwoTone />}
                            type={passVisibility ? "text" : "password"}
                            label="Password"
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
        </Container>
    );
}

export default Login;
