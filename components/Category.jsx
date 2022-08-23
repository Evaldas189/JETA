import { Typography } from "@mui/material";
import React from "react";
import Box from "@mui/material/Box";
import styles from "../styles/category.module.scss";

const Category = ({ title, image }) => {
  return (
    <Box className={styles["category-box"]}>
      <img src={image} alt={title} className={styles["category-image"]} />
      <Typography className={styles["category-title"]}>{title}</Typography>
    </Box>
  );
};

export default Category;
