import { ExpandMoreTwoTone, SearchTwoTone } from "@mui/icons-material";
import CustomMenu from "../../../Components/CustomMenu";
import { flexBox } from "../../../HelperPropFunctions/flexBox";
import { useFormik } from "formik";
import {
    Box,
    Button,
    Divider,
    Grid,
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
import CustomDialog from "../../../Components/CustomDialog";
import CourseCard from "../../../Common/Cards/CourseCard/CourseCard";

function SearchFilter() {
    const { data, isLoading } = useAllSubCategoriesQuery();
    const [searchFilter, searchResponse] = useSearchCoursesMutation();

    // Dialog
    const [open, setOpen] = useState(false);
    const [searchedData, setSearchedData] = useState([]);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (value) => {
        setOpen(false);
    };

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            sub_category: !isLoading && data[0]?.id,
            name_sub_category: !isLoading && data[0]?.name_sub_category,
            search: "",
        },
        onSubmit: async (values) => {
            const responseData = await searchFilter(values).unwrap();
            handleClickOpen();

            setSearchedData(responseData);

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
            <CustomDialog maxWidth={"md"} open={open} onClose={handleClose}>
                <Box padding={3}>
                    <Typography
                        variant="h1"
                        color="inherit"
                        fontWeight={"bold"}
                        marginBottom={5}
                    >
                        Searched Results
                    </Typography>
                    <Grid container>
                        {searchedData.length == 0 ? (
                            <Grid item lg={12}>
                                <Typography
                                    variant="h4"
                                    color="secondary"
                                    fontWeight={"bold"}
                                >
                                    No Courses with this search results
                                </Typography>
                            </Grid>
                        ) : (
                            searchedData.map((item, index) => (
                                <Grid item lg={5} key={index}>
                                    <CourseCard courseData={item} />
                                </Grid>
                            ))
                        )}
                    </Grid>
                </Box>
            </CustomDialog>
        </Paper>
    ) : (
        <Loader />
    );
}

export default SearchFilter;
