import * as React from "react";
import Header from '../components/Header.jsx';
import styles from '../styles/main.module.scss';

const main = () => {
  return (
    <div className={styles["main-container"]}>
        <Header/>
    </div>
  );
};

export default main;
