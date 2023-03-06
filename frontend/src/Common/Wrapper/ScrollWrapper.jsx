import { styled } from "@mui/material";

export const ScrollWrapper = styled("div", {
    shouldForwardProp: (prop) =>
        prop !== "height" && prop !== "padding" && prop !== "margin",
})(({ theme, height, padding, margin }) => ({
    height: height,

    overflowY: "scroll",
    padding: padding ? padding : "0 1rem",
    margin: margin ? margin : "0",

    [theme.breakpoints.down("md")]: {
        padding: "0",
    },

    "::-webkit-scrollbar": {
        width: "5px",
    },
    /* Track */
    "::-webkit-scrollbar-track": {
        boxShadow: "inset 0 0 5px grey",
        borderRadius: "10px",
    },
    /* Handle */
    "::-webkit-scrollbar-thumb": {
        background: theme.palette.primary.main,
        borderRadius: "10px",
    },

    /* Handle on hover */
    "::-webkit-scrollbar-thumb:hover": {
        background: theme.palette.secondary.main,
    },
}));
