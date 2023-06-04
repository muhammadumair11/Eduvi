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
import { useAddCourseCartItemsMutation } from "../../../Features/CourseCart/courseCartApiSlice";
import { useDispatch } from "react-redux";
import { setCourseCart } from "../../../Features/CourseCart/courseCartSlice";
import CustomAlert from "../../../Components/CustomAlert";

const BackgroundImage = styled("div")(({ theme }) => ({
    height: "200px",
    width: "100%",

    backgroundPosition: "center",
    backgroundSize: "100%",
    backgroundRepeat: "no-repeat",

    borderRadius: theme.shape.borderRadius,
}));

function CourseCard({ courseData, purchased }) {
    const dispatch = useDispatch();

    const [addItem, cartData] = useAddCourseCartItemsMutation();

    async function handleCartItem(id) {
        const data = await addItem(id).unwrap();
        dispatch(setCourseCart(data));
    }

    return (
        <Paper variant="outlined">
            <Stack direction="column" padding={1}>
                {courseData.thumbnail ? (
                    <BackgroundImage
                        style={{
                            backgroundImage: `url(${ASSET_URL}${courseData.thumbnail})`,
                        }}
                    />
                ) : (
                    <>
                        <Skeleton width="100%" height={100} />
                        <Skeleton width="100%" height={100} />
                    </>
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
                                lines={2}
                                buttons={false}
                                ellipsis="  ..."
                            />
                        </Typography>
                    </Box>

                    <Rating value={4} />
                    {!purchased && (
                        <Box {...flexBox("space-between", "center")}>
                            <Typography
                                {...secondaryHeadingBoldProps({
                                    variant: "h4",
                                    fontWeight: "bold",
                                })}
                            >
                                $ {courseData.price}
                            </Typography>
                            <IconButton
                                color="secondary"
                                onClick={() => handleCartItem(courseData.id)}
                            >
                                <ShoppingBagTwoTone />
                            </IconButton>
                        </Box>
                    )}
                </Box>
            </Stack>
            {cartData.isSuccess && (
                <CustomAlert message={"Item added"} severity="success" />
            )}
            {cartData.isError && (
                <CustomAlert
                    message={
                        cartData.error.error
                            ? "You have to login first"
                            : cartData.error.data
                    }
                    severity="error"
                />
            )}
        </Paper>
    );
}

export default CourseCard;
