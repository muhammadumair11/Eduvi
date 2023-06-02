import { Grid } from "@mui/material";
import React from "react";

import SubCategoryCard from "../Cards/SubCategoryCard/SubCategoryCard";
import { useSubcategoriesQuery } from "../../Features/Categories/categoriesApiSlice";
import Loader from "../../Components/Loader";
import { useSelector } from "react-redux";
import { selectCategory } from "../../Features/Categories/categoriesSlice";

function SubCategoryCardList() {
    const id = useSelector(selectCategory);
    const { data, isLoading } = useSubcategoriesQuery(id);

    return !isLoading ? (
        <Grid container spacing={2}>
            {data.map((item) => {
                return (
                    <Grid key={item.id} item lg={3}>
                        <SubCategoryCard
                            // logo={el.logo}
                            link={`/courses/${item.name_sub_category}/${item.id}`}
                            title={item.name_sub_category}
                            description={item.name_sub_category}
                        />
                    </Grid>
                );
            })}
        </Grid>
    ) : (
        <Loader />
    );
}

export default SubCategoryCardList;
