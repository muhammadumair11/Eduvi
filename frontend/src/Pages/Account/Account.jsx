import { Box, Container, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import ImageUpload from "../../Components/ImageUpload";
import OutlinedInput from "../../Components/OutlinedInput";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../Features/auth/authSlice";
import Loader from "../../Components/Loader";
import LoadingButton from "@mui/lab/LoadingButton/LoadingButton";

import { useFormik } from "formik";
import CustomAlert from "../../Components/CustomAlert";
import axios from "axios";

function Account() {
    const data = useSelector(selectCurrentUser);

    // const [update, { isLoading, isError, isSuccess, error }] =
    //     useUpdateMutation();
    const [isError, setError] = useState(false);
    const [isSuccess, setSuccess] = useState(false);

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            ...data,
        },
        onSubmit: async (values) => {
            const formData = new FormData();

            formData.append("username", values.username);
            formData.append("name", values.name);
            formData.append("email", values.email);
            formData.append("file", values.student.image);

            // const data = await update(formData);

            const { data } = await axios.post(
                "http://127.0.0.1:8000/api/update",
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                        Authorization: `Bearer ${localStorage.getItem(
                            "token"
                        )}`,
                    },
                }
            );
            setSuccess(true);
        },
    });

    return (
        <Container>
            {formik.values != undefined ? (
                <form
                    onSubmit={formik.handleSubmit}
                    encType="multipart/form-data"
                >
                    <Grid container spacing={0}>
                        <Grid item lg={2} md={4} sm={6} xs={12}>
                            <ImageUpload
                                value={formik.values.student?.image}
                                onChange={(e) =>
                                    formik.setFieldValue("student.image", e)
                                }
                            />
                        </Grid>
                        <Grid item lg={10} md={8} sm={6} xs={12}>
                            <Box padding={"2rem"}>
                                <Grid container spacing={{ lg: 2, xs: 0 }}>
                                    <Grid item lg={6} xs={12}>
                                        <OutlinedInput
                                            type="text"
                                            label="Username"
                                            helperText={
                                                isError
                                                    ? error.data.errors.username
                                                    : ""
                                            }
                                            value={formik.values.username || ""}
                                            onChange={formik.handleChange(
                                                "username"
                                            )}
                                            placeholder="Your name"
                                        />
                                    </Grid>
                                    <Grid item lg={6} xs={12}>
                                        <OutlinedInput
                                            type="text"
                                            label="Name"
                                            value={formik.values.name || ""}
                                            onChange={formik.handleChange(
                                                "name"
                                            )}
                                            placeholder="Your name"
                                        />
                                    </Grid>
                                    <Grid item lg={6} xs={12}>
                                        <OutlinedInput
                                            type="email"
                                            label="Email"
                                            helperText={
                                                isError
                                                    ? error.data.errors.email
                                                    : ""
                                            }
                                            value={formik.values.email || ""}
                                            onChange={formik.handleChange(
                                                "email"
                                            )}
                                            placeholder="Your Email"
                                        />
                                    </Grid>
                                    <Grid item lg={6} xs={12}>
                                        <OutlinedInput
                                            disabled={true}
                                            type="text"
                                            label="User type"
                                            value={
                                                formik.values.user_type || ""
                                            }
                                        />
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid>
                        <Grid item xs={8}></Grid>
                        <Grid item lg={4} xs={12}>
                            <LoadingButton
                                fullWidth
                                sx={{ marginY: 2 }}
                                variant="contained"
                                // loading={isLoading}
                                size="medium"
                                color="primary"
                                type="submit"
                            >
                                <Typography
                                    fontWeight="bold"
                                    lineHeight={1}
                                    variant="subtitle1"
                                    color="inherit"
                                >
                                    Update profile
                                </Typography>
                            </LoadingButton>
                        </Grid>
                    </Grid>
                    {isSuccess && (
                        <CustomAlert
                            message={"Profile updated"}
                            severity="success"
                        />
                    )}
                </form>
            ) : (
                <Loader />
            )}
        </Container>
    );
}

export default Account;
