import { Dialog } from "@mui/material";

export default function CustomDialog(props) {
    const { onClose, open } = props;

    const handleClose = () => {
        onClose();
    };

    return (
        <Dialog
            PaperProps={{
                sx: (theme) => ({
                    border: `5px solid ${theme.palette.secondary.dark}`,
                }),
            }}
            onClose={handleClose}
            {...props}
            open={open}
        >
            {props.children}
        </Dialog>
    );
}
