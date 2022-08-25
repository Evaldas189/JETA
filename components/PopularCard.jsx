import React from "react";
import styles from "../styles/popularCard.module.scss";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea } from "@mui/material";

const PopularCard = ({ title, price, oldPrice, image }) => {
  return (
    <Card className={styles["card-container"]}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="170"
          width={"100%"}
          image={image}
          alt={title}
        />
        <CardContent sx={{height: "fit-content"}}>
          <Typography gutterBottom sx={{ textAlign: "center", textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: 'hidden' }} component="div">
            {title}
          </Typography>
          <Box className={styles["prices-box"]}>
            <Typography variant="body2" color="text.secondary">
            €{oldPrice}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            €{price}
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default PopularCard;
