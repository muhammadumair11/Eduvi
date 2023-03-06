import { Box, Paper, Rating, Stack, styled, Typography } from "@mui/material";
import React from "react";
import ClampLines from "react-clamp-lines";

import image from "../../../Assets/Images/mentor-images/1.png";
import {
    primaryHeadingBoldProps,
    primarySubtitleProps,
    secondaryHeadingBoldProps,
} from "../../../HelperPropFunctions/typography";

const BackgroundImage = styled("div")(({ theme }) => ({
    height: "auto",
    width: "300px",

    backgroundPosition: "center",
    backgroundSize: "100%",
    backgroundRepeat: "no-repeat",

    borderRadius: theme.shape.borderRadius,
}));

function HorizontalShopCard() {
    return (
        <Paper variant="outlined">
            <Stack direction="row" padding={1}>
                <BackgroundImage style={{ backgroundImage: `url(${image})` }} />
                <Box paddingY={1} paddingX={2} width="100%">
                    <Rating value={4} />
                    <Box marginBottom={1}>
                        <Typography
                            {...primaryHeadingBoldProps({
                                variant: "body2",
                            })}
                        >
                            New Course Html
                        </Typography>
                        <Typography
                            {...primarySubtitleProps({
                                variant: "subtitle2",
                                light: "true",
                            })}
                        >
                            <ClampLines
                                text="Lorem ipsum dolor sit amet"
                                lines={1}
                                buttons={false}
                                ellipsis="....."
                            />
                        </Typography>
                    </Box>
                    <Typography
                        {...secondaryHeadingBoldProps({
                            variant: "h6",
                            fontWeight: "bold",
                        })}
                    >
                        $ 40.00
                    </Typography>
                </Box>
            </Stack>
        </Paper>
    );
}

export default HorizontalShopCard;
