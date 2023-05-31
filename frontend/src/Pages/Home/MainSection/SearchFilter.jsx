import { ExpandMoreTwoTone, SearchTwoTone } from "@mui/icons-material";
import CustomMenu from "../../../Components/CustomMenu";
import { flexBox } from "../../../HelperPropFunctions/flexBox";
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

function SearchFilter() {
    const [filter, setFilter] = useState({
        category: "",
        course: "",
    });

    const { data, isLoading } = useAllSubCategoriesQuery();

    return !isLoading ? (
        <Paper variant="outlined">
            <Stack {...flexBox("space-between", "center", "")} spacing={1}>
                <CustomMenu
                    id="search-filter"
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
                                {filter.category || data[0].name_sub_category}
                            </Typography>
                        </Button>
                    }
                >
                    {data.map((el, i) => (
                        <MenuItem
                            key={el.id}
                            onClick={() =>
                                setFilter((prevState) => ({
                                    ...prevState,
                                    category: el.name_sub_category,
                                }))
                            }
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
                <Divider orientation="vertical" variant="fullWidth" flexItem />
                <TextField
                    variant="standard"
                    placeholder="Class/Course"
                    value={filter.course}
                    onChange={(e) =>
                        setFilter((prevState) => ({
                            ...prevState,
                            course: e.target.value,
                        }))
                    }
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
        </Paper>
    ) : (
        <Loader />
    );
}

export default SearchFilter;
