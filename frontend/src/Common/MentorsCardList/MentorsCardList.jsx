import React from "react";
import { Grid } from "@mui/material";
import MentorCard from "../Cards/MentorCard/MentorCard";

import { useSelector } from "react-redux";
import { selectMentors } from "../../Features/Mentors/mentorSlice";
import Loader from "../../Components/Loader";
import { ASSET_URL } from "../../Services/apiSlice";

function MentorsCardList() {
    const MentorsList = useSelector(selectMentors);

    console.log(MentorsList);
    return MentorsList ? (
        MentorsList.map((item, index) => (
            <Grid key={index} item lg={3} md={3} sm={6} xs={12}>
                <MentorCard
                    image={item.image ? `${ASSET_URL}${item.image}` : null}
                    title={item.users.name}
                    link={`/mentor/${item.id}`}
                    role={item.users.user_type}
                />
            </Grid>
        ))
    ) : (
        <Loader />
    );
}
export default MentorsCardList;
