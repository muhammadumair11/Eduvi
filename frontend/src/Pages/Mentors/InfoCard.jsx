import { Box, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import { CustomIcon } from "../../Common/Wrapper/IconWrapper";
import { stackBox } from "../../HelperPropFunctions/flexBox";
import { useMentorCoursesQuery } from "../../Features/Courses/coursesApiSlice";
import {
    primarySubtitleProps,
    secondarySubtitleProps,
} from "../../HelperPropFunctions/typography";

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

function InfoCard({ info }) {
    const { data, isLoading } = useMentorCoursesQuery(info.id);

    const Icons = {
        options: {
            width: "25",
            color: "#0A033C",
        },
        icons: [
            {
                icon: "ri:facebook-fill",
                link: `https://www.facebook.com/${info.users.facebook}`,
            },
            {
                icon: "mdi:linkedin",
                link: `https://www.linkedin.com/in/${info.users.linkedin}`,
            },
            {
                icon: "mdi:twitter",
                link: `https://twitter.com/${info.users.twitter}`,
            },
        ],
    };
    return (
        <Paper elevation={0}>
            <Stack padding={2} spacing={1}>
                <ListItem title="Total Course">
                    <Typography
                        {...secondarySubtitleProps({
                            fontWeight: "bold",
                        })}
                    >
                        {data ? data.length : "Loading"}
                    </Typography>
                </ListItem>
                {/* <ListItem title="Rating">
                    <div>
                        <Typography
                            {...primarySubtitleProps({
                                fontWeight: "bold",
                                light: "true",
                            })}
                        >
                            4.9 (
                            <Typography
                                component="span"
                                {...secondarySubtitleProps({
                                    fontWeight: "bold",
                                })}
                            >
                                153
                            </Typography>
                            )
                        </Typography>
                    </div>
                </ListItem> */}
                <ListItem title="Experience">
                    <Typography
                        {...primarySubtitleProps({
                            light: "true",
                            fontWeight: "bold",
                        })}
                    >
                        {info.experience
                            ? `${info.experience} Years`
                            : "No Experience"}
                    </Typography>
                </ListItem>
                <ListItem title="Graduated">
                    <Typography
                        {...primarySubtitleProps({
                            light: "true",
                            fontWeight: "bold",
                        })}
                    >
                        {info.graduated ? "Yes" : "No"}
                    </Typography>
                </ListItem>
                <ListItem title="Language">
                    <Typography
                        {...primarySubtitleProps({
                            light: "true",
                            fontWeight: "bold",
                        })}
                    >
                        {info.languages}
                    </Typography>
                </ListItem>
                <ListItem title="Social">
                    <div>
                        {Icons.icons.map((el, i) => {
                            return !el.link.endsWith("null") ? (
                                <a href={el.link} key={i} target="_blank">
                                    <CustomIcon
                                        icon={el.icon}
                                        width={Icons.options.width}
                                    />
                                </a>
                            ) : (
                                ""
                            );
                        })}
                    </div>
                </ListItem>
            </Stack>
        </Paper>
    );
}

export default InfoCard;
