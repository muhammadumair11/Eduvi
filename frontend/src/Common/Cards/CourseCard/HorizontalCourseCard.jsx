import { ShoppingBagTwoTone } from "@mui/icons-material";
import {
    Box,
    Paper,
    Rating,
    Stack,
    styled,
    Typography,
    IconButton,
    Skeleton,
} from "@mui/material";
import React from "react";
import ClampLines from "react-clamp-lines";

import { flexBox } from "../../../HelperPropFunctions/flexBox";
import {
    primaryHeadingBoldProps,
    primarySubtitleProps,
    secondaryHeadingBoldProps,
} from "../../../HelperPropFunctions/typography";
import { ASSET_URL } from "../../../Services/apiSlice";

const BackgroundImage = styled("div")(({ theme }) => ({
    height: "auto",
    width: "400px",

    backgroundPosition: "center",
    backgroundSize: "100%",
    backgroundRepeat: "no-repeat",

    borderRadius: theme.shape.borderRadius,
}));

function HorizontalCourseCard({ courseData }) {
    console.log(courseData);
    return (
        <Paper variant="outlined">
            <Stack direction="row" padding={1}>
                {courseData.thumbnail ? (
                    <BackgroundImage
                        style={{
                            backgroundImage: `url(${ASSET_URL}${courseData.thumbnail})`,
                        }}
                    />
                ) : (
                    <Skeleton width="100%" height={100} />
                )}
                <Box padding={2} width="100%">
                    <Box marginBottom={2}>
                        <Typography
                            {...primaryHeadingBoldProps({
                                variant: "body1",
                            })}
                        >
                            {courseData.name}
                        </Typography>
                        <Typography {...primarySubtitleProps({})}>
                            <ClampLines
                                text={courseData.description}
                                lines={1}
                                buttons={false}
                                ellipsis="  ......"
                            />
                        </Typography>
                    </Box>

                    <Rating value={4} />
                    <Box {...flexBox("space-between", "center")}>
                        <Typography
                            {...secondaryHeadingBoldProps({
                                variant: "h4",
                                fontWeight: "bold",
                            })}
                        >
                            $ {courseData.price}
                        </Typography>
                        <IconButton color="secondary">
                            <ShoppingBagTwoTone />
                        </IconButton>
                    </Box>
                </Box>
            </Stack>
        </Paper>
    );
}

export default HorizontalCourseCard;
