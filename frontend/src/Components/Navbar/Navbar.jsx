import {
    Box,
    Container,
    Typography,
    Avatar,
    IconButton,
    MenuItem,
    Divider,
    Button,
} from "@mui/material";
import React, { useState } from "react";

// Custom Components

import NavLink from "../NavLink";
import Dropdown from "../DropDown";

// Icons Import

import logo from "../../Assets/Images/logo.svg";
import cart from "../../Assets/Images/cart.svg";
import profile from "../../Assets/Images/profile.svg";

import {
    AccountAvatar,
    AccountWrapper,
    NavbarList,
    NavbarListItems,
    StyledNavbar,
} from "./NavbarWrapper";
import CustomMenu from "../CustomMenu";
import {
    AccountCircleTwoTone,
    LogoutTwoTone,
    PersonAddTwoTone,
    ShoppingCartTwoTone,
} from "@mui/icons-material";
import { IconWrapper } from "../../Common/Wrapper/IconWrapper";
import { flexBox } from "../../HelperPropFunctions/flexBox";
import { primarySubtitleProps } from "../../HelperPropFunctions/typography";
import { Link } from "react-router-dom";
import { useLogout } from "../../Features/auth/authApiSlice";
import { useDispatch, useSelector } from "react-redux";
import { logOut, selectCurrentToken } from "../../Features/auth/authSlice";
import CustomAlert from "../CustomAlert";

function Navbar({ auth }) {
    const [logout, { isSuccess }] = useLogout();
    const dispatch = useDispatch();
    const token = useSelector(selectCurrentToken);

    const handleLogout = async () => {
        const { data } = await logout();
        if (data.logout) {
            dispatch(logOut());
        }
    };

    const successAlert = (
        <CustomAlert message={"Logout Successful"} severity="success" />
    );

    return (
        <Container>
            {isSuccess && successAlert}
            <StyledNavbar>
                <Link
                    to="/"
                    style={{
                        ...flexBox("", "center", ""),
                    }}
                >
                    <img src={logo} width="80" alt="" />
                </Link>
                <NavbarList>
                    <NavbarListItems>
                        <NavLink href="/">Shop</NavLink>
                    </NavbarListItems>
                    <NavbarListItems>
                        <Dropdown title="For Kindergarten">
                            <NavLink>Hello world</NavLink>
                            <NavLink>Hello world</NavLink>
                            <NavLink>Hello world</NavLink>
                            <NavLink>Hello world</NavLink>
                        </Dropdown>
                    </NavbarListItems>
                    <NavbarListItems>
                        <Dropdown title="For Highschool">
                            <NavLink>Hello world</NavLink>
                            <NavLink>Hello world</NavLink>
                            <NavLink>Hello world</NavLink>
                            <NavLink>Hello world</NavLink>
                        </Dropdown>
                    </NavbarListItems>
                    <NavbarListItems>
                        <Dropdown title="For College">
                            <NavLink>Hello world</NavLink>
                            <NavLink>Hello world</NavLink>
                            <NavLink>Hello world</NavLink>
                            <NavLink>Hello world</NavLink>
                        </Dropdown>
                    </NavbarListItems>
                    <NavbarListItems>
                        <Dropdown title="For Courses">
                            <NavLink>Hello world</NavLink>
                            <NavLink>Hello world</NavLink>
                            <NavLink>Hello world</NavLink>
                            <NavLink>Hello world</NavLink>
                        </Dropdown>
                    </NavbarListItems>
                </NavbarList>
                <NavbarList>
                    <NavbarListItems>
                        <NavLink>Cart(0)</NavLink>
                        <IconWrapper size="20" marginx="5">
                            <img src={cart} alt="" />
                        </IconWrapper>
                    </NavbarListItems>
                    <NavbarListItems>
                        {auth ? (
                            <CustomMenu
                                title={
                                    <IconButton size="small">
                                        <Avatar
                                            sx={(theme) => ({
                                                width: 35,
                                                height: 35,
                                                border: `2px solid ${theme.palette.secondary.light}`,
                                            })}
                                            src="https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZmFjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                                        ></Avatar>
                                    </IconButton>
                                }
                            >
                                <AccountWrapper>
                                    <Box {...flexBox("center", "", "")}>
                                        <AccountAvatar
                                            bgImage={
                                                "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZmFjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                                            }
                                        />
                                        <Box padding={1}>
                                            <NavLink
                                                typographyProps={{
                                                    variant: "subtitle1",
                                                    fontWeight: "bold",
                                                }}
                                            >
                                                {auth.name}
                                            </NavLink>
                                            <Typography
                                                fontWeight="bold"
                                                {...primarySubtitleProps({
                                                    variant: "subtitle2",
                                                    light: "true",
                                                })}
                                            >
                                                {auth.user_type}
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
                                        icon={<ShoppingCartTwoTone />}
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
                                        icon={<AccountCircleTwoTone />}
                                    >
                                        Account
                                    </NavLink>
                                </MenuItem>
                                <MenuItem onClick={handleLogout}>
                                    <Typography
                                        variant="h6"
                                        {...flexBox("", "center")}
                                        fontWeight="bold"
                                    >
                                        {
                                            <LogoutTwoTone
                                                sx={{ marginRight: 1 }}
                                            />
                                        }{" "}
                                        Logout
                                    </Typography>
                                </MenuItem>
                            </CustomMenu>
                        ) : (
                            <CustomMenu
                                tooltip="Account"
                                title={
                                    <Box {...flexBox("", "center", "")}>
                                        <Typography
                                            variant="subtitle2"
                                            color="primary.light"
                                            marginX={1}
                                        >
                                            Account
                                        </Typography>
                                        <img src={profile} alt="" />
                                    </Box>
                                }
                            >
                                <AccountWrapper>
                                    <Box {...flexBox("center", "", "")}>
                                        <Box padding={1}>
                                            <Link to="/login">
                                                <Button
                                                    variant="contained"
                                                    size="small"
                                                    color="primary"
                                                >
                                                    <LogoutTwoTone /> Login
                                                </Button>
                                            </Link>
                                        </Box>
                                    </Box>
                                </AccountWrapper>

                                <MenuItem>
                                    <NavLink
                                        href="/register"
                                        typographyProps={{
                                            variant: "h6",
                                            fontWeight: "bold",
                                        }}
                                        icon={<PersonAddTwoTone />}
                                    >
                                        Register
                                    </NavLink>
                                </MenuItem>
                            </CustomMenu>
                        )}
                    </NavbarListItems>
                </NavbarList>
            </StyledNavbar>
        </Container>
    );
}

export default Navbar;
