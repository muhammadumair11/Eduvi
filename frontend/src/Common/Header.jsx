import React, { useState } from "react";
import { MobileContainer, WebContainer } from "./Wrapper/ResponsiveContainers";
import Navbar from "../Components/Navbar/Navbar";
import NavbarMobile from "../Components/Navbar/NavbarMobile";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../Features/auth/authSlice";

function Header() {
    const [auth, setAuth] = useState(false);
    const data = useSelector(selectCurrentUser);
    return (
        <>
            <WebContainer>
                <Navbar auth={data} />
            </WebContainer>
            <MobileContainer>
                <NavbarMobile />
            </MobileContainer>
        </>
    );
}

export default Header;
