import { Box, Typography } from "@mui/material";
import React from "react";
import styles from "../styles/footer.module.scss";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import IconButton from "@mui/material/IconButton";

const Footer = () => {
  return (
    <Box className={styles["footer-container"]}>
      <Grid className={styles["grid-container"]} container>
        <Grid item container xs={12} md={6}>
          <Grid item xs={12}>
            <Box className={styles["info-box"]}>
              <Typography variant="h6" sx={{ fontWeight: "600" }}>
                Informacija
              </Typography>
              <List>
                <ListItem>
                  <ListItemText primary="Privatumo politika" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Veikla" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Pirkimo - pardavimo taisykles" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Kontaktai" />
                </ListItem>
              </List>
            </Box>
          </Grid>
          <Grid item xs={12}></Grid>
        </Grid>
        <Grid item container xs={12} md={6}>
          <Grid item xs={12}>
            <Typography
              variant="h6"
              sx={{
                padding: "20px",
                paddingBottom: "0px",
                fontWeight: "600",
              }}
            >
              Subscribe for JETA news!
            </Typography>
            <Box className={styles["subscribe-box"]}>
              <input
                type="text"
                placeholder="Email address"
                name="mail"
                required
              />
              <Box>
                <input type="submit" value="Subscribe" />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="h6"
              sx={{
                padding: "20px",
                paddingBottom: "0px",
                fontWeight: "600",
              }}
            >
              Follow us on:
            </Typography>
            <Box sx={{ pl: "5px" }}>
              <IconButton size="large" color="inherit">
                <FacebookIcon sx={{ color: "#385898", fontSize: 34 }} />
              </IconButton>
              <IconButton size="large" color="inherit">
                <InstagramIcon sx={{ color: "#E1306C", fontSize: 34 }} />
              </IconButton>
              <IconButton size="large" color="inherit">
                <LinkedInIcon sx={{ color: "#0a66c2", fontSize: 34 }} />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
      </Grid>
      <Grid sx={{flexGrow: 1}} container className={styles["footer-end"]}>
        <Grid item xs={12}>
          <Typography>© 2022 JETA</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
