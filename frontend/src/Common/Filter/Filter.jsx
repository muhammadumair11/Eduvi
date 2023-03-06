import React from "react";
import { ArrowDownwardTwoTone } from "@mui/icons-material";
import {
    Box,
    Button,
    Grid,
    ListItemText,
    MenuItem,
    Paper,
    Typography,
} from "@mui/material";

import CustomMenu from "../../Components/CustomMenu";
import OutlinedInputBtn from "../../Components/OutlinedInputBtn";
import { primarySubtitleProps } from "../../HelperPropFunctions/typography";
import { flexBox } from "../../HelperPropFunctions/flexBox";

function Filter() {
    return (
        <Grid container spacing={1}>
            <Grid item md={8} xs={12}>
                <OutlinedInputBtn
                    label="Search Courses"
                    type="text"
                    buttonText="Search"
                    placeholder="Search Course"
                />
            </Grid>
            <Grid item md={4} xs={12}>
                <br></br>
                <CustomMenu
                    id="search-filter"
                    position={{
                        anchorOrigin: {
                            vertical: "bottom",
                            horizontal: "left",
                        },
                        transformOrigin: {
                            vertical: "top",
                            horizontal: "left",
                        },
                    }}
                    title={
                        <Paper elevation={0}>
                            <Box
                                {...flexBox("", "center")}
                                paddingLeft={2}
                                paddingY={0}
                            >
                                <Typography
                                    {...primarySubtitleProps({
                                        fontWeight: "normal",
                                    })}
                                    whiteSpace="nowrap"
                                >
                                    Sort by:
                                </Typography>
                                <Button
                                    variant="text"
                                    fullWidth
                                    color="primary"
                                    size="medium"
                                    disableRipple
                                >
                                    <Box
                                        width="100%"
                                        {...flexBox("space-between", "center")}
                                    >
                                        Filter
                                        <ArrowDownwardTwoTone />
                                    </Box>
                                </Button>
                            </Box>
                        </Paper>
                    }
                >
                    {["KinderGarten", "School", "College"].map((el, i) => (
                        <MenuItem
                            key={i}
                            sx={{
                                minWidth: "300px",
                            }}
                        >
                            <ListItemText>
                                <Typography
                                    {...primarySubtitleProps({
                                        light: "true",
                                        fontWeight: "bold",
                                    })}
                                >
                                    {el}
                                </Typography>
                            </ListItemText>
                        </MenuItem>
                    ))}
                </CustomMenu>
            </Grid>
        </Grid>
    );
}

export default Filter;
