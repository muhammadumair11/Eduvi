import { Box, Button, Stack } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Filter from "../../../Common/Filter/Filter";

function StoreFilter() {
    return (
        <Box>
            <Stack direction="row" spacing={2}>
                {[...Array(3)].map((item, index) => (
                    <Link key={index} to={item}>
                        <Button
                            variant={index == 2 ? "contained" : "outlined"}
                            size="medium"
                            color="secondary"
                        >
                            Books
                        </Button>
                    </Link>
                ))}
            </Stack>
            <Filter />
        </Box>
    );
}

export default StoreFilter;
