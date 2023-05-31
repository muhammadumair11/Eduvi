import { Container, Grid } from "@mui/material";
import React from "react";
import PageHeader from "../../Common/PageHeader/PageHeader";
import NewsLetter from "../../Common/Newsletter/NewsLetter";

import cardImage from "../../Assets/Images/subjects.png";

function Cart() {
    return (
        <Container>
            {true ? (
                <Grid container rowSpacing={2}>
                    {/* Primary Card */}

                    <Grid item xs={12}>
                        <PageHeader
                            titleText={"Cart"}
                            mobileTitle={"Cart"}
                            image={cardImage}
                        />
                    </Grid>
                    <Grid item xs={12} paddingY={2}></Grid>
                    <Grid item xs={12}>
                        <NewsLetter />
                    </Grid>
                </Grid>
            ) : (
                <Loader />
            )}
        </Container>
    );
}

export default Cart;
