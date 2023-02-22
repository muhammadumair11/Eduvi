import { SearchTwoTone } from "@mui/icons-material";
import {
    FormControl,
    FormGroup,
    FormHelperText,
    FormLabel,
    TextField,
    Button,
} from "@mui/material";
import React from "react";

function OutlinedInputBtn({ label, placeholder, buttonText, type }) {
    return (
        <FormControl fullWidth component="fieldset" margin="normal">
            <FormGroup>
                <TextField
                    type={type || "text"}
                    sx={{
                        fontSize: "1.2rem !important",
                    }}
                    InputProps={{
                        sx: {
                            fontSize: "1.2rem !important",
                        },
                        endAdornment: (
                            <Button
                                variant="contained"
                                color="primary"
                                size="small"
                                sx={{
                                    paddingX: 7,
                                }}
                            >
                                <SearchTwoTone /> {buttonText}
                            </Button>
                        ),
                    }}
                    placeholder={placeholder}
                    variant="outlined"
                    size="small"
                />
            </FormGroup>
        </FormControl>
    );
}

export default OutlinedInputBtn;
