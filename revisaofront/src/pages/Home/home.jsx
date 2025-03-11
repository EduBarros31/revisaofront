import React from "react";
import styles from "./Home.module.css";
import Aside from "../../components/Aside/Aside";
import Band from "../../components/Band/Band";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";

function Home() {
    return (
        <div className={styles.home}>
            <Header />
            <Aside />
            <Band />
            <Main />
            <Footer />
        </div>
    );
}

export default Home;