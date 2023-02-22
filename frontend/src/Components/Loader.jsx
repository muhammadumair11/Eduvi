import React from "react";
import { MutatingDots } from "react-loader-spinner";
import theme from "../Theme/theme";

function Loader() {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",

                width: "100%",
                height: "100vh",
            }}
        >
            <MutatingDots
                height="100"
                width="100"
                color={theme.palette.primary.light}
                secondaryColor={theme.palette.secondary.light}
                radius="12.5"
                ariaLabel="mutating-dots-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
        </div>
    );
}

export default Loader;
