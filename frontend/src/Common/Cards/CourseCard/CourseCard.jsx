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
import { useAddCourseCartItemsMutation } from "../../../Features/CourseCart/courseCartApiSlice";
import { useDispatch } from "react-redux";
import { setCourseCart } from "../../../Features/CourseCart/courseCartSlice";
import CustomAlert from "../../../Components/CustomAlert";
import { useNavigate } from "react-router-dom";
import { useCourseRatingMutation } from "../../../Features/Courses/coursesApiSlice";
import { setCourses } from "../../../Features/Courses/coursesSlice";

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
    const navigate = useNavigate();

    const [addItem, cartData] = useAddCourseCartItemsMutation();
    const [rating, ratingResponses] = useCourseRatingMutation();

    async function handleCartItem(id) {
        const data = await addItem(id).unwrap();
        dispatch(setCourseCart(data));
        navigate("/cart");
    }
    async function handleRating(ratingValue) {
        const { data } = await rating({
            courseID: courseData.id,
            rating: ratingValue,
        });
        dispatch(setCourses(data));
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
                            {courseData.name.slice(0, 20)}
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

                    <Rating
                        value={
                            courseData.courseratings_avg_rating
                                ? courseData.courseratings_avg_rating
                                : 1
                        }
                        onChange={(e, value) => handleRating(value)}
                    />
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
            {ratingResponses.isSuccess && (
                <CustomAlert
                    message={"Thank you for your feedback"}
                    severity="success"
                />
            )}
            {ratingResponses.isError && (
                <CustomAlert
                    message={"You have to login first"}
                    severity="error"
                />
            )}
        </Paper>
    );
}

export default CourseCard;
