import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SearchInput, { createFilter } from "react-search-input";
import styles from "../styles/header.module.scss";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LanguageIcon from "@mui/icons-material/Language";
import { useState } from "react";
import Hamburger from 'hamburger-react'
import MobileMenu from "./MobileMenu";

const Header = () => {

  const [hambOpen, setHambOpen] = useState(false)
  return (
    <Box className={styles["header-container"]} sx={{ flexGrow: 1 }}>
      {hambOpen ? <MobileMenu/> : null}
      <AppBar
        position="static"
        sx={{ backgroundColor: "white", height: "80px", boxShadow: "none" }}
      >
        <Toolbar sx={{ height: "100%" }}>
          <Typography
            noWrap
            component="div"
            className={styles["header-logo"]}
            color={"#C057F1"}
          >
            JETA
          </Typography>
          <Box
            className={styles["header-actions"]}
            sx={{ display: { xs: "flex" } }}
          >
            <SearchInput
              className={styles["search-input"]}
              placeholder="Search..."
            />
            <Box sx={{ flexGrow: 1 }} />
            <Box
              sx={{
                display: {
                  xs: "flex",
                  flexGrow: 10,
                  justifyContent: "end",
                },
              }}
            >
              <IconButton
                size="large"
                aria-label="show 4 new mails"
                color="inherit"
              >
                <LanguageIcon
                  sx={{
                    color: "black",
                    fontSize: 30,
                    display: { xs: "none", md: "flex" },
                  }}
                />
              </IconButton>
              <IconButton
                size="large"
                aria-label="show 4 new mails"
                color="inherit"
              >
                <FavoriteBorderIcon
                  sx={{ color: "black", fontSize: 30 }}
                />
              </IconButton>
              <IconButton
                size="large"
                aria-label="show 4 new mails"
                color="inherit"
                sx={{mr: { xs: 2, md: 0 }}}
              >
                <ShoppingCartCheckoutIcon
                  sx={{ color: "black", fontSize: 30 }}
                />
              </IconButton>
            </Box>
          </Box>
          <Box sx={{zIndex: 2, display: {xs: "flex", md: "none"}}}>
          <Hamburger
            toggled={hambOpen}
            distance="lg"
            easing="ease-in"
            rounded
            hideOutline={false}
            toggle={() => setHambOpen(!hambOpen)}
            size={24}
            direction="left"
            duration={0.2}
            color="black"
          />
          </Box>
        </Toolbar>
      </AppBar>
      <Box className={styles["header-navbar"]}>
        <Box>
          <Typography>Jewelry & Accessories</Typography>
        </Box>
        <Box>
          <Typography>Clothing & Shoes</Typography>
        </Box>
        <Box>
          <Typography>Home & Living</Typography>
        </Box>
        <Box>
          <Typography>Wedding & Party</Typography>
        </Box>
        <Box>
          <Typography>Toys & Entertainment</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
