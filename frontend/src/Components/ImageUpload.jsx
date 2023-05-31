import { styled, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { useDropzone } from "react-dropzone";
import { ASSET_URL } from "../Services/apiSlice";

const CustomImage = styled("img")(({ theme }) => ({
    width: "100%",
    height: "200px",

    borderRadius: theme.shape.borderRadius,

    background: "gray",

    cursor: "pointer",

    objectFit: "cover",

    border: "1px solid black",
}));

function PreviewImage(props) {
    return <CustomImage alt="" {...props} />;
}

function ImageUpload({ value, onChange }) {
    const fileRef = useRef();

    function handleImageLink(file) {
        if (file != null && typeof file != "string") {
            return URL.createObjectURL(file);
        } else if (typeof file == "string") {
            return `${ASSET_URL}${file}`;
        } else {
            return file;
        }
    }
    return (
        <section className="container">
            <div>
                <PreviewImage
                    src={handleImageLink(value)}
                    onClick={() => {
                        fileRef.current.click();
                    }}
                />
                <input
                    hidden
                    ref={fileRef}
                    type="file"
                    // value={file}
                    onChange={(e) => {
                        onChange(e.target.files[0]);
                    }}
                />
            </div>
            {/* <aside style={thumbsContainer}>{thumbs}</aside> */}
        </section>
    );
}

export default ImageUpload;
