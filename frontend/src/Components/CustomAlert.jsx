import { Alert, Snackbar } from "@mui/material";
import React from "react";

function TransitionUp(props) {
    return <Slide {...props} direction="left" />;
}

function CustomAlert({ message, severity }) {
    const [open, setOpen] = React.useState(true);
    const [transition, setTransition] = React.useState(undefined);

    return (
        <Snackbar
            open={open}
            TransitionComponent={transition}
            autoHideDuration={3000}
            onClose={() => setOpen(false)}
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
        >
            <Alert severity={severity} fontWeight="bold">
                {message}
            </Alert>
        </Snackbar>
    );
}

export default CustomAlert;
