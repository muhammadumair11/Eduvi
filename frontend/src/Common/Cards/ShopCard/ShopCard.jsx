import { Box, Paper, Rating, Stack, styled, Typography } from "@mui/material";
import React from "react";
import ClampLines from "react-clamp-lines";

import {
    primaryHeadingBoldProps,
    primarySubtitleProps,
    secondaryHeadingBoldProps,
} from "../../../HelperPropFunctions/typography";

const BackgroundImage = styled("div")(({ theme }) => ({
    height: "200px",
    width: "100%",

    backgroundPosition: "center",
    backgroundSize: "100%",
    backgroundRepeat: "no-repeat",

    borderRadius: theme.shape.borderRadius,
}));
function ShopCard({ image }) {
    return (
        <Paper variant="outlined">
            <Stack direction="column" padding={1}>
                <BackgroundImage style={{ backgroundImage: `url(${image})` }} />
                <Box width="100%">
                    <Box marginY={1}>
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
                    <Rating value={4} />
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

export default ShopCard;
