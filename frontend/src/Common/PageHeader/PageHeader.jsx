import React from "react";
import PrimaryCard from "../../Components/PrimaryCard";
import { MobileContainer, WebContainer } from "../Wrapper/ResponsiveContainers";
import { Grid, Typography } from "@mui/material";
import { primaryHeadingBoldProps } from "../../HelperPropFunctions/typography";
import { flexBox } from "../../HelperPropFunctions/flexBox";

function PageHeader({ titleText, image, mobileTitle }) {
    return (
        <>
            <WebContainer>
                <PrimaryCard>
                    <Grid container>
                        <Grid item xs={6} {...flexBox("center", "center")}>
                            <Typography
                                variant="h1"
                                fontWeight="bold"
                                color="primary.light"
                            >
                                {titleText}
                            </Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <img
                                src={image}
                                width="100%"
                                height={"230px"}
                                alt=""
                            />
                        </Grid>
                        <Grid item xs={2}></Grid>
                    </Grid>
                </PrimaryCard>
            </WebContainer>
            <MobileContainer>
                <Typography
                    {...primaryHeadingBoldProps({
                        marginY: 4,
                    })}
                >
                    {mobileTitle}
                </Typography>
            </MobileContainer>
        </>
    );
}

export default PageHeader;
