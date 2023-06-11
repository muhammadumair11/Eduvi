import { ExpandMoreTwoTone, SearchTwoTone } from "@mui/icons-material";
import {
    Button,
    MenuItem,
    Typography,
    TextField,
    Stack,
    ListItemText,
} from "@mui/material";
import React, { useState } from "react";
import CustomMenu from "../../../Components/CustomMenu";
import { flexBox } from "../../../HelperPropFunctions/flexBox";
import { primarySubtitleProps } from "../../../HelperPropFunctions/typography";
import { useAllSubCategoriesQuery } from "../../../Features/Categories/categoriesApiSlice";
import Loader from "../../../Components/Loader";
import { useSearchCoursesMutation } from "../../../Features/Courses/coursesApiSlice";
import { useFormik } from "formik";

function SearchFilterMobile() {
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
        <Stack padding={0} spacing={1}>
            <CustomMenu
                id="search-filter-mobile"
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
                        variant="contained"
                        color="secondary"
                        sx={{
                            ...flexBox("space-between", "center", ""),
                        }}
                        fullWidth
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
            <TextField
                variant="outlined"
                size="small"
                placeholder="Class/Course"
                value={formik.values.search}
                onChange={formik.handleChange("search")}
                fullWidth
                color="secondary"
            />
            <Button
                variant="contained"
                size="small"
                color="secondary"
                fullWidth
            >
                <SearchTwoTone /> Search
            </Button>
        </Stack>
    ) : (
        <Loader />
    );
}

export default SearchFilterMobile;
