import * as React from "react";
import Menu from "@mui/material/Menu";
import Tooltip from "@mui/material/Tooltip";

export default function CustomMenu({ id, title, children, position, tooltip }) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <React.Fragment>
            {tooltip ? (
                <Tooltip
                    style={{
                        cursor: "pointer",
                    }}
                    title={tooltip}
                >
                    <div onClick={handleClick}>{title}</div>
                </Tooltip>
            ) : (
                <div
                    style={{
                        cursor: "pointer",
                    }}
                    onClick={handleClick}
                    className={id}
                >
                    {title}
                </div>
            )}
            <Menu
                anchorEl={anchorEl}
                id={id}
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    elevation: 1,
                    sx: {
                        overflow: "visible",
                        filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                        mt: 1.5,
                        padding: 0.4,
                        "& .MuiMenu-list": {
                            padding: 0,
                        },
                    },
                }}
                anchorOrigin={
                    position
                        ? { ...position.anchorOrigin }
                        : { horizontal: "right", vertical: "bottom" }
                }
                transformOrigin={
                    position
                        ? { ...position.transformOrigin }
                        : { horizontal: "right", vertical: "top" }
                }
            >
                {children}
            </Menu>
        </React.Fragment>
    );
}
