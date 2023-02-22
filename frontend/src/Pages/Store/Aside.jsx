import { Box, Typography } from "@mui/material";
import React from "react";
import HorizontalShopCard from "../../Common/ShopCards/HorizontalShopCard";
import { primaryHeadingBoldProps } from "../../HelperPropFunctions/typography";

function Aside() {
    return (
        <Box>
            <Typography
                {...primaryHeadingBoldProps({
                    variant: "h3",
                })}
            >
                Popular Books
            </Typography>
            <HorizontalShopCard />
        </Box>
    );
}

export default Aside;
