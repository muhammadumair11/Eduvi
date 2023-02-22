import { styled, useMediaQuery } from "@mui/material";

const WebContainerWrapper = styled("div")(({ theme }) => ({
    width: "100%",
    // [theme.breakpoints.up("md")]: {
    //     display: "block",
    // },
    // [theme.breakpoints.down("md")]: {
    //     display: "none",
    // },
}));
const MobileContainerWrapper = styled("div")(({ theme }) => ({
    width: "100%",
    // [theme.breakpoints.up("md")]: {
    //     display: "none",
    // },
    // [theme.breakpoints.down("md")]: {
    //     display: "block",
    // },
}));

export function WebContainer({ children }) {
    const isLargeScreen = useMediaQuery((theme) => theme.breakpoints.up("md"));
    return isLargeScreen ? (
        <WebContainerWrapper>{children}</WebContainerWrapper>
    ) : null;
}
export function MobileContainer({ children }) {
    const isSmallScreen = useMediaQuery((theme) =>
        theme.breakpoints.down("md")
    );
    return isSmallScreen ? (
        <MobileContainerWrapper>{children}</MobileContainerWrapper>
    ) : null;
}
