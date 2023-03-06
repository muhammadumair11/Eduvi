import React from "react";
import StoreFilter from "./StoreFilter";
import Grid from "@mui/material/Grid";
import ShopCardList from "../../../Common/ShopCardList/ShopCardList";

function MainSection() {
    return (
        <Grid container>
            <Grid item xs={12} paddingX={2}>
                <StoreFilter />
            </Grid>
            <Grid item xs={12} paddingX={2}>
                <Grid container spacing={1.5}>
                    <ShopCardList />
                </Grid>
            </Grid>
        </Grid>
    );
}

export default MainSection;
