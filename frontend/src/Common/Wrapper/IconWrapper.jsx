import { Icon } from "@iconify/react";
import { styled } from "@mui/material";

export const IconWrapper = styled("div", {
    shouldForwardProp: (prop) =>
        prop !== "size" &&
        prop !== "marginx" &&
        prop !== "marginy" &&
        prop !== "padding",
})(({ theme, size, marginx, marginy, padding }) => ({
    width: `${size}px`,
    marginLeft: `${marginx}px`,
    marginRight: `${marginx}px`,
    marginTop: `${marginy}px`,
    marginBottom: `${marginy}px`,
    padding: `${padding}px`,
}));

export const CustomIcon = styled(Icon)(({ theme }) => ({
    padding: "3px",
    borderRadius: 100,

    color: theme.palette.primary.light,

    transition: theme.transitions.create(
        ["background-color", "color", "transform"],
        {
            duration: theme.transitions.duration.complex,
        }
    ),

    ":hover": {
        color: "white",
        transform: "scale(1.2)",
        background: theme.palette.secondary.main,
    },
}));
