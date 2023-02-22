import { ExpandMoreTwoTone, SearchTwoTone } from "@mui/icons-material";
import {
    Button,
    MenuItem,
    Typography,
    TextField,
    Stack,
    ListItemText,
} from "@mui/material";
import React from "react";
import CustomMenu from "../../../Components/CustomMenu";
import { flexBox } from "../../../HelperPropFunctions/flexBox";
import { primarySubtitleProps } from "../../../HelperPropFunctions/typography";

function SearchFilterMobile() {
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
                            KinderGarten
                        </Typography>
                    </Button>
                }
            >
                {["KinderGarten", "School", "College"].map((el, i) => (
                    <MenuItem
                        key={i}
                        onClick={() =>
                            setFilter((prevState) => ({
                                ...prevState,
                                category: el,
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
                                {el}
                            </Typography>
                        </ListItemText>
                    </MenuItem>
                ))}
            </CustomMenu>
            <TextField
                variant="outlined"
                size="small"
                placeholder="Class/Course"
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
