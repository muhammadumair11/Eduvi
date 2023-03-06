import { Grid } from "@mui/material";
import React from "react";

import class1 from "../../Assets/Images/class-icons/1.svg";
import class2 from "../../Assets/Images/class-icons/2.svg";
import class3 from "../../Assets/Images/class-icons/3.svg";
import class4 from "../../Assets/Images/class-icons/4.svg";
import class5 from "../../Assets/Images/class-icons/5.svg";
import class6 from "../../Assets/Images/class-icons/6.svg";
import class7 from "../../Assets/Images/class-icons/7.svg";
import class8 from "../../Assets/Images/class-icons/8.svg";
import SchoolCard from "../Cards/SchoolCard/SchoolCard";

function HighSchoolCardList() {
    return CardDetails.map((el, i) => {
        return (
            <Grid key={i} item lg={3}>
                <SchoolCard
                    logo={el.logo}
                    title={el.title}
                    description={el.description}
                />
            </Grid>
        );
    });
}

const CardDetails = [
    {
        logo: class1,
        title: "Standard 1",
        description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae quae quo, quibusdam veniam, commodi animi debitis provident officiis fugiat voluptatum obcaecati hic esse maxime id. Aspernatur incidunt eos possimus dolorem?",
    },
    {
        logo: class2,
        title: "Standard 2",
        description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae quae quo, quibusdam veniam, commodi animi debitis provident officiis fugiat voluptatum obcaecati hic esse maxime id. Aspernatur incidunt eos possimus dolorem?",
    },
    {
        logo: class3,
        title: "Standard 3",
        description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae quae quo, quibusdam veniam, commodi animi debitis provident officiis fugiat voluptatum obcaecati hic esse maxime id. Aspernatur incidunt eos possimus dolorem?",
    },
    {
        logo: class4,
        title: "Standard 4",
        description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae quae quo, quibusdam veniam, commodi animi debitis provident officiis fugiat voluptatum obcaecati hic esse maxime id. Aspernatur incidunt eos possimus dolorem?",
    },
    {
        logo: class5,
        title: "Standard 5",
        description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae quae quo, quibusdam veniam, commodi animi debitis provident officiis fugiat voluptatum obcaecati hic esse maxime id. Aspernatur incidunt eos possimus dolorem?",
    },
    {
        logo: class6,
        title: "Standard 6",
        description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae quae quo, quibusdam veniam, commodi animi debitis provident officiis fugiat voluptatum obcaecati hic esse maxime id. Aspernatur incidunt eos possimus dolorem?",
    },
    {
        logo: class7,
        title: "Standard 7",
        description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae quae quo, quibusdam veniam, commodi animi debitis provident officiis fugiat voluptatum obcaecati hic esse maxime id. Aspernatur incidunt eos possimus dolorem?",
    },
    {
        logo: class8,
        title: "Standard 8",
        description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae quae quo, quibusdam veniam, commodi animi debitis provident officiis fugiat voluptatum obcaecati hic esse maxime id. Aspernatur incidunt eos possimus dolorem?",
    },
];

export default HighSchoolCardList;
