import { secondaryboxShadowColors } from "../customColors";
import { fontFamilies } from "./typography";
export const muiButton = {
    styleOverrides: {
        containedPrimary: {
            color: "white",
        },
        containedSecondary: {
            color: "white",
            boxShadow: `0px 0px 40px 5px ${secondaryboxShadowColors.light}`,
        },
        textSecondary: {},
        fullWidth: {
            maxWidth: "100%",
        },
        sizeSmall: {
            padding: ".6rem 1rem",
            fontSize: ".8rem",
        },
        sizeMedium: {
            padding: ".9rem 2rem",
            fontSize: ".8rem",
        },
        sizeLarge: {
            padding: "1.3rem 2rem",
            fontSize: ".8rem",
        },
        root: {
            fontFamily: fontFamilies.Metrophobic,
            whiteSpace: "nowrap",
            textTransform: "capitalize",
            fontWeight: "bold",
            lineHeight: 1,
        },
    },
    defaultProps: {
        disableElevation: true,
    },
};
