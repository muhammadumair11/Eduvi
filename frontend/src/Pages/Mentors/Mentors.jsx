import {
    Container,
    Grid,
    Stack,
    Typography,
    Button,
    MenuItem,
    ListItemText,
} from "@mui/material";
import React from "react";

import cardImage from "../../Assets/Images/mentorsprimarycard.png";
import { Link, Outlet } from "react-router-dom";
import NewsLetter from "../../Common/Newsletter/NewsLetter";
import {
    MobileContainer,
    WebContainer,
} from "../../Common/Wrapper/ResponsiveContainers";
import CustomMenu from "../../Components/CustomMenu";
import { primarySubtitleProps } from "../../HelperPropFunctions/typography";
import { ArrowDownward } from "@mui/icons-material";
import PageHeader from "../../Common/PageHeader/PageHeader";

function Mentors() {
    return (
        <Container>
            <Grid container>
                <Grid item xs={12}>
                    <PageHeader
                        titleText={
                            <div>
                                Eduvi has the <br /> qualified mentor
                            </div>
                        }
                        mobileTitle="All Mentors"
                        image={cardImage}
                    />
                </Grid>

                {/* Mentors Buttons List */}
                <Grid item xs={12} paddingY={2}>
                    <WebContainer>
                        {/* Going through an array of Button's list */}
                        {/* <Stack direction="row" flexWrap="wrap" spacing={2}>
                            {MentorsLinks.map((item, index) => (
                                <Link key={index} to={item.link}>
                                    <Button
                                        variant={
                                            index == 3
                                                ? "contained"
                                                : "outlined"
                                        }
                                        size="medium"
                                        color="secondary"
                                    >
                                        {item.text}
                                    </Button>
                                </Link>
                            ))}
                        </Stack> */}
                    </WebContainer>

                    <MobileContainer>
                        {/* <CustomMenu
                            id="Mentors-list"
                            title={
                                <Button
                                    variant="contained"
                                    color="primary"
                                    endIcon={<ArrowDownward />}
                                    fullWidth
                                >
                                    Choose List
                                </Button>
                            }
                            position={{
                                anchorOrigin: {
                                    vertical: "bottom",
                                    horizontal: "left",
                                },
                                transformOrigin: {
                                    vertical: "top",
                                    horizontal: "left",
                                },
                            }}
                        >
                            {MentorsLinks.map((el, i) => (
                                <MenuItem
                                    key={i}
                                    onClick={() =>
                                        setFilter((prevState) => ({
                                            ...prevState,
                                            category: el,
                                        }))
                                    }
                                    sx={{
                                        minWidth: "200px",
                                    }}
                                >
                                    <ListItemText>
                                        <Link to={el.link}>
                                            <Typography
                                                {...primarySubtitleProps({
                                                    light: "true",
                                                    fontWeight: "bold",
                                                })}
                                            >
                                                {el.text}
                                            </Typography>
                                        </Link>
                                    </ListItemText>
                                </MenuItem>
                            ))}
                        </CustomMenu> */}
                    </MobileContainer>
                </Grid>

                {/* Mentors List */}
                <Grid item xs={12}>
                    <Grid container spacing={2}>
                        <Outlet />
                    </Grid>
                </Grid>
                <Grid item xs={12} paddingY={4}>
                    <NewsLetter />
                </Grid>
            </Grid>
        </Container>
    );
}

const MentorsLinks = [
    {
        text: "All Mentors",
        link: "/Mentors",
    },
    {
        text: "For Kindergarten",
        link: "/Mentors",
    },
    {
        text: "For High School",
        link: "/Mentors",
    },
    {
        text: "For College",
        link: "/Mentors",
    },
    {
        text: "For Technology",
        link: "/Mentors",
    },
];

export default Mentors;
