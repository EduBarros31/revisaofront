import React from "react";

import Aside from "../../components/Aside/Aside";

import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";


function Home() {
    return (
        <div >
            <Header />
            <Main />
            <Aside />
            <Footer />
        </div>
    );
}

export default Home;