import { ExpandMore } from "@mui/icons-material";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Typography,
} from "@mui/material";
import React from "react";
import { primarySubtitleProps } from "../../HelperPropFunctions/typography";

function NavbarAccordion({ children, title }) {
    return (
        <>
            <Accordion variant="outlined">
                <AccordionSummary
                    expandIcon={<ExpandMore />}
                    aria-label="Expand"
                    aria-controls="-content"
                    id="-header"
                >
                    <Typography
                        {...primarySubtitleProps({
                            variant: "subtitle2",
                            fontWeight: "bold",
                            whiteSpace: "nowrap",
                            light: "true",
                        })}
                    >
                        {title}
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>{children}</AccordionDetails>
            </Accordion>
        </>
    );
}

export default NavbarAccordion;
