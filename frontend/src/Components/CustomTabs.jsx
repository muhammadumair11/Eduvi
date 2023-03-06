import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { styled } from "@mui/material";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        "aria-controls": `simple-tabpanel-${index}`,
    };
}

const StyledTabs = styled(Tabs)(({ theme }) => ({
    "& .MuiTabs-indicator": {
        display: "none",
    },
    "& .MuiTabs-flexContainer": {
        gap: "10px",
    },
}));
const StyledTab = styled(Tab)(({ theme }) => ({
    "&.MuiTab-root": {
        "&.Mui-selected": {
            backgroundColor: theme.palette.primary.dark,
            color: "white !important",
            fontWeight: "bold",
            borderRadius: theme.shape.borderRadius,
        },
        "&.MuiTab-textColorPrimary": {
            borderRadius: theme.shape.borderRadius,
            color: theme.palette.text.primary,
        },
    },
}));

export default function CustomTabs({ tabs, tabContent }) {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: "100%" }}>
            <Box padding={2}>
                <StyledTabs
                    variant="scrollable"
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                >
                    {tabs.map((item, index) => (
                        <StyledTab label={item} {...a11yProps(index)} />
                    ))}
                </StyledTabs>
            </Box>
            {tabContent.map((item, index) => (
                <TabPanel value={value} index={index}>
                    {item}
                </TabPanel>
            ))}
        </Box>
    );
}
