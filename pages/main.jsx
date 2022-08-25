import * as React from "react";
import CategorySection from "../components/CategorySection.jsx";
import Footer from "../components/Footer.jsx";
import Header from "../components/Header.jsx";
import Promotion from "../components/Promotion.jsx";
import styles from "../styles/main.module.scss";

const main = () => {
  return (
    <div className={styles["main-container"]}>
      <Header />

      <Promotion />

      <CategorySection/>

      <Footer/>
    </div>
  );
};

export default main;
