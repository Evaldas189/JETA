import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SearchInput, { createFilter } from "react-search-input";
import styles from "../styles/header.module.scss";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import LanguageIcon from "@mui/icons-material/Language";
import MenuIcon from "@mui/icons-material/Menu";
import ButtonBase from "@mui/material/ButtonBase";

const Header = () => {
  return (
    <Box className={styles["header-container"]} sx={{ flexGrow: 1 }}>
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
              <ButtonBase>
                <Typography
                  sx={{
                    display: {
                      xs: "none",
                      md: "block",
                    },
                  }}
                  className={styles["signIn-text"]}
                >
                  Sign in
                </Typography>
              </ButtonBase>
              <IconButton
                size="large"
                aria-label="show 4 new mails"
                color="inherit"
              >
                <LocalFireDepartmentIcon
                  sx={{ color: "black", fontSize: 30 }}
                />
              </IconButton>
              <IconButton
                size="large"
                aria-label="show 4 new mails"
                color="inherit"
              >
                <ShoppingCartCheckoutIcon
                  sx={{ color: "black", fontSize: 30 }}
                />
              </IconButton>
              <IconButton
                size="large"
                aria-label="show 4 new mails"
                color="inherit"
              >
                <LanguageIcon sx={{ color: "black", fontSize: 30, mr: { xs: 2, md: 0 } }} />
              </IconButton>
            </Box>
          </Box>
          <IconButton
            size="large"
            edge="end"
            color="inherit"
            aria-label="open drawer"
            sx={{ color: "black", display: { xs: "flex", md: "none" } }}
          >
            <MenuIcon sx={{ fontSize: 32 }} />
          </IconButton>
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
