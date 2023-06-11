import { ExpandMoreTwoTone, SearchTwoTone } from "@mui/icons-material";
import CustomMenu from "../../../Components/CustomMenu";
import { flexBox } from "../../../HelperPropFunctions/flexBox";
import { useFormik } from "formik";
import {
    Button,
    Divider,
    ListItemText,
    MenuItem,
    Paper,
    Stack,
    TextField,
    Typography,
} from "@mui/material";
import React, { useState } from "react";
import { primarySubtitleProps } from "../../../HelperPropFunctions/typography";
import { useAllSubCategoriesQuery } from "../../../Features/Categories/categoriesApiSlice";
import Loader from "../../../Components/Loader";
import { useSearchCoursesMutation } from "../../../Features/Courses/coursesApiSlice";

function SearchFilter() {
    const { data, isLoading } = useAllSubCategoriesQuery();
    const [searchFilter, searchResponse] = useSearchCoursesMutation();

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            sub_category: !isLoading && data[0]?.id,
            name_sub_category: !isLoading && data[0]?.name_sub_category,
            search: "",
        },
        onSubmit: async (values) => {
            const responseData = await searchFilter(values).unwrap();
            console.log(responseData);
        },
    });

    return !isLoading ? (
        <Paper variant="outlined">
            <form onSubmit={formik.handleSubmit} method="POST">
                <Stack {...flexBox("space-between", "center", "")} spacing={1}>
                    <CustomMenu
                        id="search-filter"
                        onChange={(e) => console.log(e)}
                        position={{
                            anchorOrigin: {
                                vertical: "bottom",
                                horizontal: "left",
                            },
                            transformOrigin: {
                                vertical: "top",
                                horizontal: "left",
                            },
                        }}
                        title={
                            <Button
                                variant="text"
                                color="primary"
                                disableRipple
                                endIcon={<ExpandMoreTwoTone />}
                            >
                                <Typography variant="subtitle2">
                                    {formik.values.name_sub_category}
                                </Typography>
                            </Button>
                        }
                    >
                        {data.map((el, i) => (
                            <MenuItem
                                key={el.id}
                                onClick={() => {
                                    formik.setFieldValue("sub_category", el.id);
                                    formik.setFieldValue(
                                        "name_sub_category",
                                        el.name_sub_category
                                    );
                                }}
                                sx={{
                                    minWidth: "200px",
                                }}
                            >
                                <ListItemText>
                                    <Typography
                                        {...primarySubtitleProps({
                                            light: "true",
                                            fontWeight: "bold",
                                        })}
                                    >
                                        {el.name_sub_category}
                                    </Typography>
                                </ListItemText>
                            </MenuItem>
                        ))}
                    </CustomMenu>
                    <Divider
                        orientation="vertical"
                        variant="fullWidth"
                        flexItem
                    />
                    <TextField
                        variant="standard"
                        required
                        placeholder="Class/Course"
                        value={formik.values.search}
                        onChange={formik.handleChange("search")}
                        sx={{
                            padding: 0.5,
                            marginTop: "0px !important",
                        }}
                        InputProps={{
                            endAdornment: (
                                <Button
                                    variant="contained"
                                    color="primary"
                                    size="small"
                                    type="submit"
                                    sx={{
                                        paddingX: 7,
                                    }}
                                >
                                    <SearchTwoTone /> Search
                                </Button>
                            ),
                        }}
                    />
                </Stack>
            </form>
        </Paper>
    ) : (
        <Loader />
    );
}

export default SearchFilter;
