import { Stack, styled } from "@mui/material";
import React from "react";
import CustomTabs from "../../Components/CustomTabs";

const TabList = styled("div")(({ theme }) => ({
    position: "relative",
    padding: "0 1.4rem",

    "::before": {
        content: "''",
        position: "absolute",
        top: "50%",
        left: "0",
        transform: "translate(-50%, -50%)",

        width: "12px",
        height: "12px",
        borderRadius: "100px",

        backgroundColor: theme.palette.secondary.main,
    },
}));

function MentorTabs() {
    const itemOne = () => {
        return (
            <>
                <Stack spacing={2}>
                    {[
                        "An undergraduate degree",
                        "Participate in supervised teaching",
                        "State teaching license",
                        "Purse graduate studies",
                    ].map((item, index) => (
                        <TabList key={index}>{item}</TabList>
                    ))}
                </Stack>
            </>
        );
    };

    return (
        <CustomTabs
            tabs={["Instructor Requirements", "Instructor Rules"]}
            tabContent={[
                itemOne(),
                <>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Iure blanditiis ea harum debitis laborum illum modi vel
                    consequuntur, voluptatem tempora aspernatur quibusdam vero
                    quo dolorem quaerat eos veniam culpa. In.
                </>,
            ]}
        />
    );
}

export default MentorTabs;
