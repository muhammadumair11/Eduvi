import React from "react";
import Typography from "@mui/material/Typography";
import {
    primaryHeadingBoldProps,
    primarySubtitleProps,
    secondarySubtitleProps,
} from "../../../HelperPropFunctions/typography";
import { Box, Stack } from "@mui/material";

function AboutTab() {
    return (
        <>
            <Stack spacing={3}>
                <Box>
                    <Typography {...primaryHeadingBoldProps({})}>
                        About Kristin
                    </Typography>
                    <Typography
                        {...primarySubtitleProps({
                            light: "true",
                        })}
                    >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Provident, minus nihil. Magni, quasi, placeat possimus
                        unde eum non in necessitatibus fugit perferendis ut sed
                        consequuntur quibusdam velit cumque. Quisquam,
                        exercitationem.
                    </Typography>
                </Box>
                <Box>
                    <Typography {...primaryHeadingBoldProps({})}>
                        Certifications
                    </Typography>
                    <Typography
                        {...primarySubtitleProps({
                            light: "true",
                        })}
                    >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Provident, minus nihil. Magni, quasi, placeat possimus
                        unde eum non in necessitatibus fugit perferendis ut sed
                        consequuntur quibusdam velit cumque. Quisquam,
                        exercitationem.
                    </Typography>
                </Box>
            </Stack>
        </>
    );
}

export default AboutTab;
