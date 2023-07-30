import { Paper, Rating, Stack, Typography, Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { CustomIcon } from "../../Common/Wrapper/IconWrapper";
import { stackBox } from "../../HelperPropFunctions/flexBox";
import {
    primarySubtitleProps,
    secondarySubtitleProps,
} from "../../HelperPropFunctions/typography";

const Icons = {
    options: {
        width: "25",
        color: "#0A033C",
    },
    icons: ["ri:facebook-fill", "mdi:instagram", "mdi:twitter", "mdi:linkedin"],
};

function ListItem({ title, children }) {
    return (
        <Stack {...stackBox("", "space-between")}>
            <Typography
                {...primarySubtitleProps({
                    color: "gray",
                    fontWeight: "bold",
                })}
            >
                {title}
            </Typography>
            {children}
        </Stack>
    );
}

function CourseInfoCard({ courseInfo }) {
    return (
        <Paper elevation={0}>
            <Stack padding={2} spacing={1}>
                <ListItem title="Price">
                    <Typography
                        {...secondarySubtitleProps({
                            fontWeight: "bold",
                        })}
                    >
                        $ 49.00
                    </Typography>
                </ListItem>
                {/* <ListItem title="Instructor">
                    <Typography
                        {...primarySubtitleProps({
                            fontWeight: "bold",
                            light: "true",
                        })}
                    >
                        <Link to="#">Wade Warren</Link>
                    </Typography>
                </ListItem> */}
                {/* <ListItem title="Rating">
                    <Typography
                        {...primarySubtitleProps({
                            light: "true",
                            fontWeight: "bold",
                        })}
                    >
                        <Rating value={4} />
                    </Typography>
                </ListItem>
                <ListItem title="Duration">
                    <Typography
                        {...primarySubtitleProps({
                            light: "true",
                            fontWeight: "bold",
                        })}
                    >
                        30 hours
                    </Typography>
                </ListItem> */}
                <ListItem title="Lessons">
                    <Typography
                        {...primarySubtitleProps({
                            light: "true",
                            fontWeight: "bold",
                        })}
                    >
                        {courseInfo.data.length}
                    </Typography>
                </ListItem>
                <ListItem title="Access">
                    <Typography
                        {...primarySubtitleProps({
                            light: "true",
                            fontWeight: "bold",
                        })}
                    >
                        Lifetime
                    </Typography>
                </ListItem>
                <Button variant="contained" fullWidth color="primary">
                    Purchase More Course
                </Button>
            </Stack>
        </Paper>
    );
}

export default CourseInfoCard;
