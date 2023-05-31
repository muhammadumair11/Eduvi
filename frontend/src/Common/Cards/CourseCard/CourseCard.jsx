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

import image from "../../../Assets/Images/mentor-images/1.png";
import { flexBox } from "../../../HelperPropFunctions/flexBox";
import {
    primaryHeadingBoldProps,
    primarySubtitleProps,
    secondaryHeadingBoldProps,
} from "../../../HelperPropFunctions/typography";
import { ASSET_URL } from "../../../Services/apiSlice";

const BackgroundImage = styled("div")(({ theme }) => ({
    height: "200px",
    width: "100%",

    backgroundPosition: "center",
    backgroundSize: "100%",
    backgroundRepeat: "no-repeat",

    borderRadius: theme.shape.borderRadius,
}));

function CourseCard({ courseData }) {
    return (
        <Paper variant="outlined">
            <Stack direction="column" padding={1}>
                {courseData.image ? (
                    <BackgroundImage
                        style={{
                            backgroundImage: `url(${ASSET_URL}${courseData.image})`,
                        }}
                    />
                ) : (
                    <Skeleton width="100%" height={100} />
                )}
                <Box padding={2}>
                    <Box marginBottom={2}>
                        <Typography
                            {...primaryHeadingBoldProps({
                                variant: "h3",
                            })}
                            marginBottom={1}
                        >
                            {courseData.name}
                        </Typography>
                        <Typography
                            {...primarySubtitleProps({
                                light: "true",
                            })}
                        >
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

export default CourseCard;
