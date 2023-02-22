import React from "react";
import MentorCard from "../MentorCard/MentorCard";
import { Grid } from "@mui/material";

import image1 from "../../Assets/Images/mentor-images/1.png";
import image2 from "../../Assets/Images/mentor-images/2.png";
import image3 from "../../Assets/Images/mentor-images/3.png";
import image4 from "../../Assets/Images/mentor-images/4.png";
import image5 from "../../Assets/Images/mentor-images/5.png";
import image6 from "../../Assets/Images/mentor-images/6.png";
import image7 from "../../Assets/Images/mentor-images/7.png";
import image8 from "../../Assets/Images/mentor-images/8.png";
import image9 from "../../Assets/Images/mentor-images/9.png";
import image10 from "../../Assets/Images/mentor-images/10.png";
import image11 from "../../Assets/Images/mentor-images/11.png";
import image12 from "../../Assets/Images/mentor-images/12.png";

function MentorsCardList() {
    return MentorsList.map((item, index) => (
        <Grid key={index} item lg={3} xs={12}>
            <MentorCard
                image={item.image}
                title={item.title}
                link="/something"
                role={item.role}
            />
        </Grid>
    ));
}

const MentorsList = [
    {
        image: image1,
        title: "Some Name",
        role: "Teachers",
    },
    {
        image: image2,
        title: "Some Name",
        role: "Teachers",
    },
    {
        image: image3,
        title: "Some Name",
        role: "Teachers",
    },
    {
        image: image4,
        title: "Some Name",
        role: "Teachers",
    },
    {
        image: image5,
        title: "Some Name",
        role: "Teachers",
    },
    {
        image: image6,
        title: "Some Name",
        role: "Teachers",
    },
    {
        image: image7,
        title: "Some Name",
        role: "Teachers",
    },
    {
        image: image8,
        title: "Some Name",
        role: "Teachers",
    },
    {
        image: image9,
        title: "Some Name",
        role: "Teachers",
    },
    {
        image: image10,
        title: "Some Name",
        role: "Teachers",
    },
    {
        image: image11,
        title: "Some Name",
        role: "Teachers",
    },
    {
        image: image12,
        title: "Some Name",
        role: "Teachers",
    },
];

export default MentorsCardList;
