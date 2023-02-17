import { styled } from "@mui/material";
import { flexBox } from '../../HelperPropFunctions/flexBox';

export const NavbarList = styled("ul")({
    display: "flex",
    alignItems: "center",
    margin: "10px 15px",
});

export const NavbarListItems = styled("li")({
    listStyle: "none",
    padding: "0 .5rem",

    display: "flex",
    alignItems: "center",
});

export const StyledNavbar = styled("div")(({ theme }) => ({
    padding: ".5rem 0",
    display: "flex",

    [theme.breakpoints.up("sm")]: {
        justifyContent: "space-between",
    },
    [theme.breakpoints.down("sm")]: {
        justifyContent: "space-between",
    },
}));

// Navbar Mobile

export const NavbarMenuWrapper = styled("div")(({ theme }) => ({
    position: "fixed",
    top: "0",
    left: "-100",
    zIndex: 1,

    height: "100vh",
    width: "100%",
}));

export const NavbarMenu = styled("div")(({ theme }) => ({
    height: "100vh",
    overflowY: "auto",
    background: theme.palette.secondary.dark,

    borderRight: `2px solid ${theme.palette.primary.light}`,

    "::-webkit-scrollbar": {
        width: "5px",
    },
    "::-webkit-scrollbar-track": {
        background: "#f1f1f1",
    },
    "::-webkit-scrollbar-thumb": {
        background: theme.palette.primary.light,
        "&:hover": {
            background: theme.palette.secondary.light,
        },
    },
}));

export const SidebarItems = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
}));

// Account Card

export const AccountWrapper = styled("div")(({ theme }) => {
    const borderShape = theme.shape.borderRadius;

    return {
        background: ` linear-gradient(25deg, #84238f, #88768f, #77b98c, #29fc84)`,

        ...flexBox("flex-start", "flex-start", "column"),

        padding: "3rem 2rem 1rem",

        borderRadius: `${borderShape}px ${borderShape}px 0 0`,
    };
});
export const AccountAvatar = styled("div", {
    shouldForwardProp: (prop) => prop !== "bgImage",
})(({ theme, bgImage }) => ({
    width: "60px",
    height: "60px",

    [theme.breakpoints.down("sm")]: {
        width: "40px",
        height: "40px",
    },

    borderRadius: "100px",
    border: `2px solid ${theme.palette.secondary.light}`,

    background: `url(${bgImage}) no-repeat`,
    backgroundSize: "cover",
    backgroundPosition: "center",
}));
