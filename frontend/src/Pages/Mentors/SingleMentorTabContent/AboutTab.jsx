import React from "react";
import Typography from "@mui/material/Typography";
import {
    primaryHeadingBoldProps,
    primarySubtitleProps,
    secondarySubtitleProps,
} from "../../../HelperPropFunctions/typography";
import { Box, Stack } from "@mui/material";

function AboutTab({ mentor }) {
    return (
        <>
            <Stack spacing={3}>
                <Box>
                    <Typography {...primaryHeadingBoldProps({})}>
                        About {mentor.users.name}
                    </Typography>
                    {mentor.about_id ? (
                        <span
                            dangerouslySetInnerHTML={{
                                __html: mentor.about_id,
                            }}
                        ></span>
                    ) : (
                        "No Information about the mentor here so far"
                    )}
                </Box>
                <Box>
                    <Typography {...primaryHeadingBoldProps({})}>
                        Certifications
                    </Typography>
                    {mentor.certifications ? (
                        <span
                            dangerouslySetInnerHTML={{
                                __html: mentor.certifications,
                            }}
                        ></span>
                    ) : (
                        "No Information about the mentor here so far"
                    )}
                </Box>
            </Stack>
        </>
    );
}

export default AboutTab;
