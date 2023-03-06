import { ShoppingBagTwoTone } from "@mui/icons-material";
import {
    Box,
    Paper,
    Rating,
    Stack,
    styled,
    Typography,
    IconButton,
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

const BackgroundImage = styled("div")(({ theme }) => ({
    height: "auto",
    width: "400px",

    backgroundPosition: "center",
    backgroundSize: "100%",
    backgroundRepeat: "no-repeat",

    borderRadius: theme.shape.borderRadius,
}));

function HorizontalCourseCard() {
    return (
        <Paper variant="outlined">
            <Stack direction="row" padding={1}>
                <BackgroundImage style={{ backgroundImage: `url(${image})` }} />
                <Box padding={2} width="100%">
                    <Box marginBottom={2}>
                        <Typography
                            {...primaryHeadingBoldProps({
                                variant: "body1",
                            })}
                        >
                            New Course Html
                        </Typography>
                        <Typography {...primarySubtitleProps({})}>
                            <ClampLines
                                text="new course with fwe things fjdkasl fjd kasjfkd ajsk lfdja aksljf dklaasj fkldsja kld jfkdlaj kflsj klas j"
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
                            $ 40.00
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
