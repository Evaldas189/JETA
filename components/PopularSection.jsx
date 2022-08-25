import { Box, Typography } from "@mui/material";
import React from "react";
import styles from "../styles/popularSection.module.scss";
import PopularCard from "./PopularCard";
import Grid from "@mui/material/Grid";

const data = [
  {
    title: "JETA coffee + spice candle",
    price: 15.99,
    oldPrice: 20.99,
    image:
      "https://royalapi-api-prod.azurewebsites.net/api/products/image/11/design-letters-scented-candle-large-1",
  },
  {
    title: "JETA smiley pillow",
    price: 9.99,
    oldPrice: 19.99,
    image:
      "https://i.collage.com/products/pillows/2020/EnvironmentalMicroFiber-2880x1800-2020.jpg",
  },
  {
    title: "JETA bomber jacket",
    price: 24.99,
    oldPrice: 25.99,
    image:
      "https://media.boohoo.com/i/boohoo/mzz79591_navy_xl?w=900&qlt=default&fmt=auto&sm=fit",
  },
  {
    title: "JETA graffiti print jeans",
    price: 32.99,
    oldPrice: 49.99,
    image:
      "https://media.boohoo.com/i/boohoo/bmm06884_ice%20blue_xl_3/male-ice%20blue-relaxed-fit-graffiti-print-jeans--",
  },
];

const PopularSection = () => {
  return (
    <Box className={styles["popular-container"]}>
      <Typography variant="h4" sx={{ textAlign: "center" }}>
        Popular Now
      </Typography>
        <Grid className={styles["cards-box"]} container spacing={3}>
          {data.map(({ title, price, oldPrice, image }, index) => (
            <Grid key={index} item xs>
              <PopularCard title={title} oldPrice={oldPrice} price={price} image={image}/>
            </Grid>
          ))}
        </Grid>
    </Box>
  );
};

export default PopularSection;
