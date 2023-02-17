import { styled } from "@mui/material";

export const PrimaryCardWrapper = styled("div", {
    shouldForwardProp: (prop) =>
        prop !== "marginx" &&
        prop !== "marginy" &&
        prop !== "padding" &&
        prop !== "width" &&
        prop !== "height",
})(({ theme, marginx, marginy, padding, width, height }) => ({
    backgroundColor: "#EFEBF5",

    borderRadius: theme.shape.borderRadius,

    width: width ? width : null,
    height: height ? height : null,

    marginLeft: `${marginx}px`,
    marginRight: `${marginx}px`,
    marginTop: `${marginy}px`,
    marginBottom: `${marginy}px`,
    padding: padding ? padding : "1rem",

    [theme.breakpoints.down("md")]: {
        padding: ".5rem" || `calc(${padding}px / 2)`,
    },
}));
