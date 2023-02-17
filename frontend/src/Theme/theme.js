import { createTheme } from "@mui/material";

import { typography, fontFamilies } from "./Components-Theme/typography";
import { muiButton } from "./Components-Theme/muiButton";

import {
    customPrimaryColors,
    customSecondaryColors,
    textColors,
} from "./customColors";
import {
    formLabel,
    input,
    inputTextField,
    inputTextFilledInput,
    inputTextOutlinedInput,
} from "./Components-Theme/input";
import { themeBreakPoints } from "./Components-Theme/breakPoints";
import shadows from "@mui/material/styles/shadows";

const theme = createTheme({
    breakpoints: {
        values: {
            ...themeBreakPoints.values,
        },
    },
    shadows: [...shadows],
    palette: {
        mode: "light",
        primary: {
            ...customPrimaryColors,
        },
        secondary: {
            ...customSecondaryColors,
        },
        text: {
            ...textColors,
        },
        action: {
            disabledBackground: "#EFEBF5",
        },
    },
    typography: typography(),

    shape: {
        borderRadius: 10,
    },
    components: {
        MuiButton: {
            ...muiButton,
        },
        MuiFormLabel: {
            ...formLabel,
        },
        MuiTextField: {
            ...inputTextField,
        },
        MuiInput: {
            ...input,
        },
        MuiOutlinedInput: {
            ...inputTextOutlinedInput,
        },
        MuiFilledInput: {
            ...inputTextFilledInput,
        },
        MuiTooltip: {
            defaultProps: {
                placement: "bottom",
            },
        },
        MuiPopover: {
            styleOverrides: {},
        },
        MuiTypography: {
            styleOverrides: {
                root: {},
            },
        },
        MuiPaper: {},
        MuiDivider: {
            styleOverrides: {
                root: {
                    fontFamily: fontFamilies.Metrophobic,
                    fontSize: ".8rem",
                    margin: 0,
                },
            },
        },
    },
});
export default theme;
