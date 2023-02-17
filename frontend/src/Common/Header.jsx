import React from "react";
import { MobileContainer, WebContainer } from "./Wrapper/ResponsiveContainers";
import Navbar from '../Components/Navbar/Navbar';
import NavbarMobile from '../Components/Navbar/NavbarMobile';

function Header() {
    return (
        <>
            <WebContainer>
                <Navbar />
            </WebContainer>
            <MobileContainer>
                <NavbarMobile />
            </MobileContainer>
        </>
    );
}

export default Header;
