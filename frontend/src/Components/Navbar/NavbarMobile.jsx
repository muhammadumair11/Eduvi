import {
    Box,
    Container,
    IconButton,
    Stack,
    styled,
    Button,
    Grid,
    Paper,
    MenuItem,
    Divider,
    Typography,
} from "@mui/material";
import React, { useState } from "react";

// Custom Components

// Icons Import

import logo from "../../Assets/Images/logo.svg";
import cart from "../../Assets/Images/cart.svg";
import profile from "../../Assets/Images/profile.svg";

import {
    AccountCircleTwoTone,
    LoginTwoTone,
    LogoutTwoTone,
    MenuTwoTone,
    PersonAddTwoTone,
    ShoppingCartTwoTone,
} from "@mui/icons-material";
import { useSpring, animated } from "@react-spring/web";
import NavLink from "../NavLink";
import {
    AccountAvatar,
    AccountWrapper,
    NavbarMenu,
    NavbarMenuWrapper,
    SidebarItems,
    StyledNavbar,
} from "./NavbarWrapper";
import NavbarAccordion from "../../Common/NavbarAccordion/NavbarAccordion";
import { flexBox } from "../../HelperPropFunctions/flexBox";
import { Link } from "react-router-dom";

function NavbarMobile() {
    const [open, setNavbarState] = useState(false);
    const [auth, setAuth] = useState(false);

    const props = useSpring({
        x: open ? 0 : -300,
        opacity: open ? 1 : 0,

        onChange: () => ({
            zIndex: open ? 5 : -100,
        }),
    });

    return (
        <>
            <Container>
                <StyledNavbar>
                    <Link
                        to="/"
                        style={{
                            ...flexBox("", "center", ""),
                        }}
                    >
                        <img src={logo} width="80" alt="" />
                    </Link>
                    <IconButton onClick={() => setNavbarState(!open)}>
                        <MenuTwoTone />
                    </IconButton>
                </StyledNavbar>
            </Container>
            <NavbarMenuWrapper as={animated.div} style={props}>
                <Grid container>
                    <Grid item xs={10}>
                        <NavbarMenu>
                            <Box paddingY={3} paddingX={1}>
                                <Link
                                    href="/"
                                    onClick={() => setNavbarState(false)}
                                    style={{
                                        ...flexBox("", "center", ""),
                                    }}
                                >
                                    <img src={logo} width="80" alt="" />
                                </Link>
                                <SidebarItems>
                                    {auth ? (
                                        <Box paddingTop={4}>
                                            <Paper variant="outlined">
                                                <AccountWrapper>
                                                    <Box
                                                        {...flexBox(
                                                            "center",
                                                            "",
                                                            ""
                                                        )}
                                                    >
                                                        <AccountAvatar
                                                            bgImage={
                                                                "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZmFjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                                                            }
                                                        />
                                                        <Box paddingX={1}>
                                                            <NavLink
                                                                typographyProps={{
                                                                    variant:
                                                                        "subtitle1",
                                                                    fontWeight:
                                                                        "bold",
                                                                }}
                                                            >
                                                                Muhammad Umair
                                                            </NavLink>
                                                            <Typography
                                                                variant="subtitle2"
                                                                fontWeight="bold"
                                                                color="primary.light"
                                                            >
                                                                Student
                                                            </Typography>
                                                        </Box>
                                                    </Box>
                                                </AccountWrapper>

                                                <MenuItem>
                                                    <NavLink
                                                        typographyProps={{
                                                            variant: "h6",
                                                            fontWeight: "bold",
                                                        }}
                                                        icon={
                                                            <ShoppingCartTwoTone />
                                                        }
                                                    >
                                                        Cart
                                                    </NavLink>
                                                </MenuItem>
                                                <Divider textAlign="left">
                                                    User Settings
                                                </Divider>
                                                <MenuItem>
                                                    <NavLink
                                                        typographyProps={{
                                                            variant: "h6",
                                                            fontWeight: "bold",
                                                        }}
                                                        icon={
                                                            <AccountCircleTwoTone />
                                                        }
                                                    >
                                                        Account
                                                    </NavLink>
                                                </MenuItem>
                                                <MenuItem>
                                                    <NavLink
                                                        typographyProps={{
                                                            variant: "h6",
                                                            fontWeight: "bold",
                                                        }}
                                                        icon={<LogoutTwoTone />}
                                                    >
                                                        Logout
                                                    </NavLink>
                                                </MenuItem>
                                            </Paper>
                                        </Box>
                                    ) : null}
                                    <Stack
                                        marginTop={2}
                                        marginBottom={3}
                                        spacing={0}
                                    >
                                        <NavbarAccordion title="For Kindergarten">
                                            <NavLink>Hello world</NavLink>
                                            <NavLink>Hello world</NavLink>
                                            <NavLink>Hello world</NavLink>
                                        </NavbarAccordion>
                                        <NavbarAccordion title="For High School">
                                            <NavLink>Hello world</NavLink>
                                            <NavLink>Hello world</NavLink>
                                            <NavLink>Hello world</NavLink>
                                        </NavbarAccordion>
                                        <NavbarAccordion title="For College">
                                            <NavLink>Hello world</NavLink>
                                            <NavLink>Hello world</NavLink>
                                            <NavLink>Hello world</NavLink>
                                        </NavbarAccordion>
                                        <NavbarAccordion title="Courses">
                                            <NavLink>Hello world</NavLink>
                                            <NavLink>Hello world</NavLink>
                                            <NavLink>Hello world</NavLink>
                                        </NavbarAccordion>
                                    </Stack>
                                    {!auth ? (
                                        <Stack
                                            direction="column"
                                            spacing={1}
                                            paddingX={1}
                                        >
                                            <NavLink
                                                onClick={() =>
                                                    setNavbarState(false)
                                                }
                                                href="/login"
                                                icon={
                                                    <LoginTwoTone fontSize="1rem" />
                                                }
                                            >
                                                Login
                                            </NavLink>
                                            <NavLink
                                                onClick={() =>
                                                    setNavbarState(false)
                                                }
                                                href="/register"
                                                icon={
                                                    <PersonAddTwoTone fontSize="1rem" />
                                                }
                                            >
                                                Sign up
                                            </NavLink>
                                        </Stack>
                                    ) : null}
                                </SidebarItems>
                            </Box>
                        </NavbarMenu>
                    </Grid>
                    <Grid
                        item
                        xs={2}
                        onClick={() => setNavbarState(false)}
                    ></Grid>
                </Grid>
            </NavbarMenuWrapper>
        </>
    );
}

export default NavbarMobile;
