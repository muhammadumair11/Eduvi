import { Box, Typography } from "@mui/material";
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import AnimatedPaper from "../../../Components/AnimatedPaper";
import { flexBox } from "../../../HelperPropFunctions/flexBox";
import { primarySubtitleProps } from "../../../HelperPropFunctions/typography";

function MentorCard({ image, link, title, role }) {
    return (
        <AnimatedPaper variant="elevation" elevation={0}>
            <Link to={link}>
                <Box padding={1} {...flexBox("center", "flex-start", "column")}>
                    <LazyLoadImage src={image} width="100%" />
                    <Typography
                        {...primarySubtitleProps({
                            light: "true",
                            fontWeight: "bold",
                            marginTop: 1,
                        })}
                    >
                        {title}
                    </Typography>
                    <Typography
                        {...primarySubtitleProps({
                            variant: "subtitle2",
                            color: "grey",
                        })}
                    >
                        {role}
                    </Typography>
                </Box>
            </Link>
        </AnimatedPaper>
    );
}

export default MentorCard;
