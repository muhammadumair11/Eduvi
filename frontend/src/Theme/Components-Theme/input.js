import {
    customPrimaryColors,
    customSecondaryColors,
    textColors,
} from "../customColors";
import theme from "../theme";

export const inputTextField = {
    defaultProps: {},
    styleOverrides: {},
};

export const input = {
    defaultProps: {
        disableUnderline: true,
    },
    styleOverrides: {
        root: {},
        input: {
            padding: "0 1rem",
            margin: "0",
            fontSize: ".8rem",
            "&::placeholder": {
                fontWeight: "bold",
                fontSize: ".8rem",
                lineHeight: "0",
            },
        },
        colorSecondary: {
            color: customSecondaryColors.light,
            fontWeight: "bold",
        },
    },
};

export const formLabel = {
    styleOverrides: {
        root: {
            margin: "5px 0",
            fontSize: ".9rem !important",
            color: customPrimaryColors.light,
            fontWeight: "bold",
        },
        colorSecondary: {
            color: customSecondaryColors.light,
        },
    },
};

export const inputTextOutlinedInput = {
    defaultProps: {},
    styleOverrides: {
        colorSecondary: {
            color: customPrimaryColors.light,
        },
        sizeSmall: {
            padding: ".3rem",
        },
        inputSizeSmall: {
            "&::placeholder": {
                fontSize: ".8rem",
            },
        },
        input: {
            fontWeight: "bold",
            lineHeight: "0",
            margin: "0",
            padding: "0 1rem",
            fontSize: ".8rem",
            "&::placeholder": {
                fontWeight: "bold",
                fontSize: ".8rem",
            },
        },
        root: {
            borderRadius: "10px",
            padding: ".8rem 1rem",
        },
    },
};
export const inputTextFilledInput = {
    defaultProps: {
        disableUnderline: true,
        hiddenLabel: true,
    },
    styleOverrides: {
        colorSecondary: {
            backgroundColor: customSecondaryColors.white,
            color: customSecondaryColors.white,
        },
        sizeSmall: {
            padding: "1rem 1rem",
        },
        inputSizeSmall: {
            fontSize: ".8rem",
            "&::placeholder": {
                fontSize: ".8rem",
            },
        },
        input: {
            fontWeight: "bold",
            lineHeight: "0",
            padding: "0",
            "&::placeholder": {
                fontWeight: "bold",
                fontSize: "1rem",
                color: textColors.primary,
            },
        },
        root: {
            borderRadius: "10px",
            padding: "1rem 1.5rem",
        },
    },
};
