import * as React from "react";
import CategorySection from "../components/CategorySection.jsx";
import Footer from "../components/Footer.jsx";
import Header from "../components/Header.jsx";
import PopularSection from "../components/PopularSection.jsx";
import Promotion from "../components/Promotion.jsx";
import styles from "../styles/main.module.scss";

const main = () => {
  return (
    <div className={styles["main-container"]}>
      <Header />

      <Promotion />

      <CategorySection/>

      <PopularSection/>

      <Footer/>
    </div>
  );
};

export default main;
