import React from "react";
import Box from "@mui/material/Box";
import styles from "../styles/categorySection.module.scss";
import Typography from "@mui/material/Typography";
import Category from "./Category";
import Grid from "@mui/material/Grid";
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { useState, useEffect } from "react";

const categories = [
  {
    title: "Clothing",
    image:
      "https://cdn-bnokj.nitrocdn.com/XJfHLzIzjkIRlzKcaFkLXnbughtbQcLX/assets/static/optimized/rev-9289692/wp-content/uploads/2021/01/L199-1.jpg",
  },
  {
    title: "Electronics",
    image:
      "https://target.scene7.com/is/image/Target/Electronics219475-200305_1583423525490-210803-1628013505239",
  },
  {
    title: "Candies",
    image:
      "https://img.freepik.com/free-vector/sweet-candies-flat-elements-set_1284-34170.jpg",
  },
  {
    title: "Sex Toys",
    image:
      "https://media.wired.com/photos/5ed089d29948303154121fd1/master/w_2400,h_1602,c_limit/Gear-Sex-Toys-1133376597.jpg",
  },
  {
    title: "Home decor",
    image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/home-decor-1591127768.jpg?crop=0.502xw:1.00xh;0.498xw,0&resize=640:*",
  },
  {
    title: "Jewelry",
    image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/valentinesday-jewelleryedit-1-1612817752.jpg?crop=0.334xw:0.668xh;0,0.173xh&resize=640:*",
  },
];

const CategorySection = () => {
  const [expanded, setExpanded] = useState(false);
  const [categoriesLength, setCategoriesLength] = useState(4)

  useEffect(() => {
    if(expanded) {
      setCategoriesLength(categories.length)
    }
    else setCategoriesLength(4)
  }, [expanded])
  

  return (
    <Box className={styles["section-container"]}>
      <Box className={styles["title-box"]}>
        <Typography variant="h4">Find things you want!</Typography>
      </Box>
      <Box sx={{ width: "90%", mt: 4 }}>
        <Grid container spacing={3}>
          {categories.slice(0, categoriesLength).map(({ title, image }) => (
            <Grid
              item
              xs
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Category title={title} image={image} />
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box sx={{ ml: "auto", mt: 3 }}>
        <Box onClick={()=> setExpanded(!expanded)} sx={{display: "flex", alignItems: "center", mr: "24px", cursor: "pointer"}}>
          {!expanded ? "View all" : "View less"} <ArrowCircleRightIcon sx={{ml: 1}} />
        </Box>
      </Box>
    </Box>
  );
};

export default CategorySection;
