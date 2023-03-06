import { Box, Container, Grid, Stack, styled, Typography } from "@mui/material";
import React from "react";
import logo from "../../Assets/Images/logo.svg";
import FooterList from "./FooterList";
import footerData from "./footerlist.json";
import { primarySubtitleProps } from "../../HelperPropFunctions/typography";
import { CustomIcon } from "../Wrapper/IconWrapper";

const Icons = {
    options: {
        width: "25",
        color: "#0A033C",
    },
    icons: ["ri:facebook-fill", "mdi:instagram", "mdi:twitter", "mdi:linkedin"],
};

function Footer() {
    return (
        <Container>
            <Grid container p={2} py={4} columnSpacing={4}>
                <Grid item lg={2} md={4} xs={12} padding={2}>
                    <img src={logo} alt="" />
                    <Stack direction="row" spacing={0.5} marginTop={2}>
                        {Icons.icons.map((el, i) => (
                            <CustomIcon
                                key={i}
                                icon={el}
                                width={Icons.options.width}
                            />
                        ))}
                    </Stack>
                    <Box paddingY={2}>
                        <Typography
                            {...primarySubtitleProps({
                                marginBottom: 2,
                                color: "grey",
                            })}
                        >
                            © 2021 Eduvi.co
                        </Typography>
                        <Typography
                            {...primarySubtitleProps({
                                color: "grey",
                            })}
                        >
                            Eduvi is a registered trademark of Eduvi.co
                        </Typography>
                    </Box>
                </Grid>
                {footerData.map((el, i) => (
                    <Grid
                        item
                        key={i}
                        padding={2}
                        lg={footerData.length == i + 1 ? 1 : 3}
                        md={4}
                        xs={12}
                    >
                        <FooterList title={el.title} list={el.list} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default Footer;
