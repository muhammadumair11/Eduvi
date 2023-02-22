import React, { useState } from "react";
import { Box, Paper, Typography, Button } from "@mui/material";
import ClampLines from "react-clamp-lines";
import { primaryHeadingBoldProps } from "../../HelperPropFunctions/typography";
import { flexBox } from "../../HelperPropFunctions/flexBox";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

function SchoolCard({ title, link, description, logo }) {
    return (
        <Paper variant="outlined">
            <Link to={link}>
                <Box padding={3} {...flexBox("center", "center", "column")}>
                    {/* <img src={logo} width="80" alt="" /> */}
                    <LazyLoadImage src={logo} />
                    <Typography
                        {...primaryHeadingBoldProps({
                            variant: "h2",
                            marginY: 2,
                        })}
                    >
                        {title}
                    </Typography>
                    <Typography
                        variant="subtitle2"
                        textAlign="center"
                        marginBottom={2}
                        lineHeight={2}
                        color="grey"
                    >
                        <ClampLines
                            id={title}
                            text={description}
                            lines={1}
                            buttons={false}
                            ellipsis="  Read more......"
                        />
                    </Typography>

                    <Button
                        sx={{
                            borderRadius: "5px",
                        }}
                        variant="outlined"
                        color="primary"
                    >
                        Class Details
                    </Button>
                </Box>
            </Link>
        </Paper>
    );
}

export default SchoolCard;
