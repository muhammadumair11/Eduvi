import {
    Box,
    Button,
    Container,
    Divider,
    Grid,
    Paper,
    Stack,
    Typography,
} from "@mui/material";
import React from "react";
import NewsLetter from "../../Common/Newsletter/NewsLetter";
import PageHeader from "../../Common/PageHeader/PageHeader";

import cardImage from "../../Assets/Images/pricingprimarycard.png";
import {
    primaryHeadingBoldProps,
    primarySubtitleProps,
} from "../../HelperPropFunctions/typography";

import { priceData } from "./pricingStaticContent";
import tick from "../../Assets/Images/pricing-images/available.svg";
import cross from "../../Assets/Images/pricing-images/notavailable.svg";
import { flexBox } from "../../HelperPropFunctions/flexBox";

function Pricing() {
    return (
        <Container>
            <Grid container>
                <Grid item xs={12}>
                    <PageHeader
                        titleText="Our Pre-Ready Pricing Packages"
                        mobileTitle="Our Pricing"
                        image={cardImage}
                    />
                </Grid>

                <Grid item lg={2} md={2} xs={12}></Grid>
                <Grid item lg={8} md={8} xs={12} marginY={6}>
                    <Box textAlign={"center"}>
                        <Typography
                            {...primaryHeadingBoldProps({
                                variant: "h2",
                            })}
                            marginBottom={2}
                        >
                            We create a monthly pricing package <br /> for all
                            standard students
                        </Typography>
                        <Typography
                            {...primarySubtitleProps({
                                color: "gray",
                            })}
                        >
                            Basically we create this package for those who are
                            really interested and get benifited from our courses
                            or books. We want to make a low cost package for
                            them. So that they can purchase any courses with the
                            package they buy from us. Also will get free books
                            from every packages.
                        </Typography>
                    </Box>
                </Grid>
                <Grid item lg={2} md={2} xs={12}></Grid>
                <Grid item xs={12}>
                    <Grid container spacing={2}>
                        {priceData.map((item, index) => (
                            <Grid item lg={4} md={4} xs={12} key={index}>
                                <Paper variant="outlined">
                                    <Box padding={3}>
                                        <img src={item.logo} alt="" />
                                        <Typography
                                            {...primaryHeadingBoldProps({
                                                variant: "h3",
                                                marginBottom: 2,
                                            })}
                                        >
                                            {item.title}
                                        </Typography>
                                        <Divider />
                                        <Stack marginTop={3} spacing={2.3}>
                                            {item.list.map((el, i) => (
                                                <Box
                                                    {...flexBox(
                                                        "flex-start",
                                                        "center"
                                                    )}
                                                >
                                                    {el.available ? (
                                                        <img
                                                            src={tick}
                                                            alt=""
                                                        />
                                                    ) : (
                                                        <img
                                                            src={cross}
                                                            alt=""
                                                        />
                                                    )}
                                                    <Typography
                                                        {...primarySubtitleProps(
                                                            {
                                                                paddingX: 2,
                                                                color: "gray",
                                                            }
                                                        )}
                                                    >
                                                        {el.content}
                                                    </Typography>
                                                </Box>
                                            ))}
                                        </Stack>
                                        <Box paddingY={3}>
                                            <Typography
                                                {...primaryHeadingBoldProps({
                                                    variant: "h3",
                                                    marginBottom: 2,
                                                })}
                                            >
                                                <small>$</small>
                                                {item.price}
                                            </Typography>
                                            <Button
                                                sx={{
                                                    borderRadius: "5px",
                                                }}
                                                variant="outlined"
                                                color="primary"
                                                fullWidth
                                            >
                                                Class Details
                                            </Button>
                                        </Box>
                                    </Box>
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
                <Grid item xs={12} paddingY={4}>
                    <NewsLetter />
                </Grid>
            </Grid>
        </Container>
    );
}

export default Pricing;
