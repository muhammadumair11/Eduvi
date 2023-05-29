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
import SubCategoryCard from "../Cards/SubCategoryCard/SubCategoryCard";
import { useSubcategoriesQuery } from "../../Features/Categories/categoriesApiSlice";
import Loader from "../../Components/Loader";

function SubCategoryCardList({ categoryId }) {
    const { data, isLoading } = useSubcategoriesQuery(categoryId);

    return !isLoading ? (
        data.map((item) => {
            return (
                <Grid key={item.id} item lg={3}>
                    <SubCategoryCard
                        // logo={el.logo}
                        title={item.name_sub_category}
                        description={item.name_sub_category}
                    />
                </Grid>
            );
        })
    ) : (
        <Loader />
    );
}

export default SubCategoryCardList;
