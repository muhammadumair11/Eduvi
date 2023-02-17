
import React from "react";
import Header from '../Common/Header';
import Footer from '../Common/Footer/Footer';
import { Outlet } from "react-router-dom";

function DefaultLayout() {
    return (
        <>
            <Header />
            <section>
                <Outlet/>
            </section>
            <Footer />
        </>
    );
}

export default DefaultLayout;
