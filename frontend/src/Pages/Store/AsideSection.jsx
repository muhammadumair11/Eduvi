import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import HorizontalShopCard from "../../Common/Cards/ShopCard/HorizontalShopCard";
import {
    primaryHeadingBoldProps,
    primarySubtitleProps,
} from "../../HelperPropFunctions/typography";

function AsideSection({ title, moreLink }) {
    return (
        <Box>
            <Typography
                marginBottom={2}
                {...primaryHeadingBoldProps({
                    variant: "h3",
                })}
            >
                {title}
            </Typography>
            <Stack direction="column" spacing={1}>
                {[...Array(3)].map((item) => (
                    <HorizontalShopCard key={item} />
                ))}
                <Link to={moreLink}>
                    <Typography
                        {...primarySubtitleProps({ fontWeight: "bold" })}
                    >
                        See more
                    </Typography>
                </Link>
            </Stack>
        </Box>
    );
}

export default AsideSection;
