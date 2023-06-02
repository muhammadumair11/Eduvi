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
    CategoryTwoTone,
    LogoutTwoTone,
    PersonAddTwoTone,
    ShoppingCartTwoTone,
} from "@mui/icons-material";
import { IconWrapper } from "../../Common/Wrapper/IconWrapper";
import { flexBox } from "../../HelperPropFunctions/flexBox";
import { primarySubtitleProps } from "../../HelperPropFunctions/typography";
import { Link, useNavigate } from "react-router-dom";
import { useLogout } from "../../Features/auth/authApiSlice";
import { useDispatch, useSelector } from "react-redux";
import { logOut, selectCurrentToken } from "../../Features/auth/authSlice";
import CustomAlert from "../CustomAlert";
import { ASSET_URL } from "../../Services/apiSlice";
import {
    clearCourseCart,
    selectCart,
} from "../../Features/CourseCart/courseCartSlice";

function Navbar({ auth }) {
    const [logout, { isSuccess }] = useLogout();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const token = useSelector(selectCurrentToken);
    const cartItems = useSelector(selectCart);

    const handleLogout = async () => {
        const { data } = await logout();
        if (data.logout) {
            dispatch(logOut());
            dispatch(clearCourseCart());
            navigate("/login");
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
                        <NavLink href="/">Home</NavLink>
                    </NavbarListItems>
                    <NavbarListItems>
                        <NavLink href="/mentors">Mentors</NavLink>
                    </NavbarListItems>
                    <NavbarListItems>
                        <NavLink href="/courses">Courses</NavLink>
                    </NavbarListItems>

                    {/* <NavbarListItems>
                        <Dropdown title="For Kindergarten">
                            <NavLink>Hello world</NavLink>
                            <NavLink>Hello world</NavLink>
                            <NavLink>Hello world</NavLink>
                            <NavLink>Hello world</NavLink>
                        </Dropdown>
                    </NavbarListItems>
                     */}
                </NavbarList>
                <NavbarList>
                    <NavbarListItems>
                        <NavLink href={"/cart"}>
                            Cart({cartItems ? cartItems.length : 0})
                        </NavLink>
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
                                            src={
                                                auth.student.image
                                                    ? `${ASSET_URL}${auth.student.image}`
                                                    : ""
                                            }
                                        ></Avatar>
                                    </IconButton>
                                }
                            >
                                <AccountWrapper>
                                    <Box {...flexBox("center", "", "")}>
                                        <AccountAvatar
                                            bgImage={`${ASSET_URL}${auth.student.image}`}
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
                                        href="/cart"
                                        typographyProps={{
                                            variant: "h6",
                                            fontWeight: "bold",
                                        }}
                                        icon={<ShoppingCartTwoTone />}
                                    >
                                        Cart
                                    </NavLink>
                                </MenuItem>
                                <MenuItem>
                                    <NavLink
                                        href="/purchasedcourses"
                                        typographyProps={{
                                            variant: "h6",
                                            fontWeight: "bold",
                                        }}
                                        icon={<CategoryTwoTone />}
                                    >
                                        Your Courses
                                    </NavLink>
                                </MenuItem>
                                <Divider textAlign="left">
                                    User Settings
                                </Divider>
                                <MenuItem>
                                    <NavLink
                                        href="/account"
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
