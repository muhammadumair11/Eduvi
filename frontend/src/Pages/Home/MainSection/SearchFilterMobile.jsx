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

function SearchFilterMobile() {
    const [filter, setFilter] = useState({
        category: "",
        course: "",
    });

    const { data, isLoading } = useAllSubCategoriesQuery();
    return (
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
            <TextField
                variant="outlined"
                size="small"
                placeholder="Class/Course"
                value={filter.course}
                onChange={(e) =>
                    setFilter((prevState) => ({
                        ...prevState,
                        course: e.target.value,
                    }))
                }
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
    );
}

export default SearchFilterMobile;
