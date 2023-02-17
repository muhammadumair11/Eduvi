import { Grid } from "@mui/material";
import React from "react";
import ProductCard from "../ProductCard/ProductCard";

function HighSchoolCardList() {
    return CardDetails.map((el, i) => {
        return (
            <Grid
                padding={1.3}
                paddingX={{ lg: 1.3, xs: 0 }}
                key={i}
                item
                lg={3}
            >
                <ProductCard
                    logo={`Images/class-icons/1.svg`}
                    title={el.title}
                    description={el.description}
                />
            </Grid>
        );
    });
}

const CardDetails = [
    {
        logo: import("../../Assets/Images/class-icons/1.svg"),
        title: "Standard 1",
        description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae quae quo, quibusdam veniam, commodi animi debitis provident officiis fugiat voluptatum obcaecati hic esse maxime id. Aspernatur incidunt eos possimus dolorem?",
    },
    {
        logo: import("../../Assets/Images/class-icons/2.svg"),
        title: "Standard 2",
        description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae quae quo, quibusdam veniam, commodi animi debitis provident officiis fugiat voluptatum obcaecati hic esse maxime id. Aspernatur incidunt eos possimus dolorem?",
    },
    {
        logo: import("../../Assets/Images/class-icons/3.svg"),
        title: "Standard 3",
        description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae quae quo, quibusdam veniam, commodi animi debitis provident officiis fugiat voluptatum obcaecati hic esse maxime id. Aspernatur incidunt eos possimus dolorem?",
    },
    {
        logo: import("../../Assets/Images/class-icons/4.svg"),
        title: "Standard 4",
        description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae quae quo, quibusdam veniam, commodi animi debitis provident officiis fugiat voluptatum obcaecati hic esse maxime id. Aspernatur incidunt eos possimus dolorem?",
    },
    {
        logo: import("../../Assets/Images/class-icons/5.svg"),
        title: "Standard 5",
        description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae quae quo, quibusdam veniam, commodi animi debitis provident officiis fugiat voluptatum obcaecati hic esse maxime id. Aspernatur incidunt eos possimus dolorem?",
    },
    {
        logo: import("../../Assets/Images/class-icons/6.svg"),
        title: "Standard 6",
        description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae quae quo, quibusdam veniam, commodi animi debitis provident officiis fugiat voluptatum obcaecati hic esse maxime id. Aspernatur incidunt eos possimus dolorem?",
    },
    {
        logo: import("../../Assets/Images/class-icons/7.svg"),
        title: "Standard 7",
        description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae quae quo, quibusdam veniam, commodi animi debitis provident officiis fugiat voluptatum obcaecati hic esse maxime id. Aspernatur incidunt eos possimus dolorem?",
    },
    {
        logo: import("../../Assets/Images/class-icons/8.svg"),
        title: "Standard 8",
        description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae quae quo, quibusdam veniam, commodi animi debitis provident officiis fugiat voluptatum obcaecati hic esse maxime id. Aspernatur incidunt eos possimus dolorem?",
    },
];

export default HighSchoolCardList;
