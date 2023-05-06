import {
    FormControl,
    FormGroup,
    FormHelperText,
    FormLabel,
    IconButton,
    TextField,
} from "@mui/material";
import React from "react";

function OutlinedInput({
    label,
    placeholder,
    startIcon,
    endIcon,
    type,
    onChange,
}) {
    return (
        <FormControl fullWidth component="fieldset" margin="normal">
            <FormLabel component="legend" color="primary">
                {label}
            </FormLabel>
            <FormGroup>
                <TextField
                    type={type || "text"}
                    onChange={onChange}
                    InputProps={{
                        startAdornment: startIcon || null,
                        sx: {
                            paddingX: 2,
                        },
                        endAdornment: endIcon ? endIcon : null,
                    }}
                    placeholder={placeholder}
                    variant="outlined"
                    size="medium"
                />
            </FormGroup>
            <FormHelperText></FormHelperText>
        </FormControl>
    );
}

export default OutlinedInput;
