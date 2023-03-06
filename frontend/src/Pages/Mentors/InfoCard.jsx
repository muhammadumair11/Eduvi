import { Box, Paper, Stack, Typography } from "@mui/material";
import React from "react";
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

function InfoCard() {
    return (
        <Paper elevation={0}>
            <Stack padding={2} spacing={1}>
                <ListItem title="Total Course">
                    <Typography
                        {...secondarySubtitleProps({
                            fontWeight: "bold",
                        })}
                    >
                        30
                    </Typography>
                </ListItem>
                <ListItem title="Rating">
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
                </ListItem>
                <ListItem title="Experience">
                    <Typography
                        {...primarySubtitleProps({
                            light: "true",
                            fontWeight: "bold",
                        })}
                    >
                        10 Years
                    </Typography>
                </ListItem>
                <ListItem title="Graduated">
                    <Typography
                        {...primarySubtitleProps({
                            light: "true",
                            fontWeight: "bold",
                        })}
                    >
                        Yes
                    </Typography>
                </ListItem>
                <ListItem title="Language">
                    <Typography
                        {...primarySubtitleProps({
                            light: "true",
                            fontWeight: "bold",
                        })}
                    >
                        English, French
                    </Typography>
                </ListItem>
                <ListItem title="Social">
                    <div>
                        {Icons.icons.map((el, i) => (
                            <CustomIcon
                                key={i}
                                icon={el}
                                width={Icons.options.width}
                            />
                        ))}
                    </div>
                </ListItem>
            </Stack>
        </Paper>
    );
}

export default InfoCard;
