import {
    FormControl,
    FormGroup,
    FormHelperText,
    FormLabel,
    TextField,
} from "@mui/material";
import React from "react";

export default function OutlinedInput({
    label,
    placeholder,
    startIcon,
    endIcon,
    type,
    onChange,
    value,
    disabled = false,
    ...props
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
                    disabled={disabled}
                    {...props}
                    value={value}
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
