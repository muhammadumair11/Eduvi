import { styled } from "@mui/material";

export const WebContainer = styled("div")(({ theme }) => ({
    width: "100%",
    [theme.breakpoints.up("md")]: {
        display: "block",
    },
    [theme.breakpoints.down("md")]: {
        display: "none",
    },
}));
export const MobileContainer = styled("div")(({ theme }) => ({
    width: "100%",
    [theme.breakpoints.up("md")]: {
        display: "none",
    },
    [theme.breakpoints.down("md")]: {
        display: "block",
    },
}));
