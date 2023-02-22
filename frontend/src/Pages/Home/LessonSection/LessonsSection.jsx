import {
    Box,
    Button,
    Grid,
    Stack,
    Typography,
    useMediaQuery,
} from "@mui/material";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
    primaryHeadingBoldProps,
    primarySubtitleProps,
} from "../../../HelperPropFunctions/typography";

function LessonsSection({ children }) {
    let { pathname: url } = useLocation();
    const isSmallScreen = useMediaQuery((theme) =>
        theme.breakpoints.down("md")
    );

    const secondaryButtonProps = (prop) => ({
        size: "large",
        color: "secondary",
        variant: prop || "text",
        fullWidth: isSmallScreen ? true : false,
    });

    return (
        <Grid container spacing={2} marginY={4} paddingY={4}>
            <Grid item lg={2}></Grid>
            <Grid item lg={8}>
                <Box textAlign="center">
                    <Typography
                        {...primaryHeadingBoldProps({
                            marginBottom: 2,
                        })}
                    >
                        Qualified lessons for students
                    </Typography>
                    <Typography
                        {...primarySubtitleProps({
                            variant: "subtitle2",
                            marginBottom: 2,
                            light: "true",
                        })}
                    >
                        A lesson or class is a structured period of time where
                        learning is intended to occur. It involves one or more
                        students being taught by a teacher or instructor.
                    </Typography>
                </Box>
                <Stack
                    paddingY={3}
                    direction={{ lg: "row", sm: "column" }}
                    justifyContent="center"
                    spacing={1.5}
                >
                    <Link to="/kindergarten">
                        <Button
                            {...secondaryButtonProps(
                                url.includes("/kindergarten") ? "contained" : ""
                            )}
                        >
                            Kindergarten
                        </Button>
                    </Link>
                    <Link to="/">
                        <Button
                            {...secondaryButtonProps(
                                url == "/" ? "contained" : ""
                            )}
                        >
                            High School
                        </Button>
                    </Link>
                    <Link to="/college">
                        <Button
                            {...secondaryButtonProps(
                                url.includes("/college") ? "contained" : ""
                            )}
                        >
                            College
                        </Button>
                    </Link>
                </Stack>
            </Grid>
            <Grid item lg={2}></Grid>
            {children}
        </Grid>
    );
}

export default LessonsSection;
