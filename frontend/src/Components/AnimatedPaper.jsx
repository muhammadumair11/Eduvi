import { Paper } from "@mui/material";
import { animated, useSpring } from "@react-spring/web";
import React, { useState } from "react";
import theme from "../Theme/theme";

function AnimatedPaper({ children, variant, elevation }) {
    const [isHovered, setIsHovered] = useState(false);
    const styles = useSpring({
        backgroundColor: isHovered ? theme.palette.secondary.dark : "#ffffff",
        transform: isHovered ? "scale(1.1)" : "scale(1)",
        config: { tension: 300, friction: 40 },
    });

    return (
        <Paper
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            component={animated.div}
            style={styles}
            variant={variant}
            elevation={elevation}
        >
            {children}
        </Paper>
    );
}

export default AnimatedPaper;
