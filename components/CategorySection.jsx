import React from "react";
import Box from "@mui/material/Box";
import styles from "../styles/categorySection.module.scss";
import Typography from "@mui/material/Typography";
import Category from "./Category";

const CategorySection = () => {
  return (
    <Box className={styles["section-container"]}>
      <Box className={styles["title-box"]}>
        <Typography variant="h4">Shop by Category</Typography>
      </Box>
      <Box className={styles["categories-container"]}>
      <Category title="Clothing" image="https://cdn-bnokj.nitrocdn.com/XJfHLzIzjkIRlzKcaFkLXnbughtbQcLX/assets/static/optimized/rev-9289692/wp-content/uploads/2021/01/L199-1.jpg"/>
      <Category title="Electronics" image={"https://target.scene7.com/is/image/Target/Electronics219475-200305_1583423525490-210803-1628013505239"}/>
      <Category title="Candies" image={"https://img.freepik.com/free-vector/sweet-candies-flat-elements-set_1284-34170.jpg"}/>
      <Category title="Sex Toys" image={"https://media.wired.com/photos/5ed089d29948303154121fd1/master/w_2400,h_1602,c_limit/Gear-Sex-Toys-1133376597.jpg"}/>
      </Box>
    </Box>
  );
};

export default CategorySection;
