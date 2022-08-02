import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MoreIcon from "@mui/icons-material/MoreVert";
import SearchInput, { createFilter } from "react-search-input";
import styles from "../styles/header.module.scss";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import LanguageIcon from "@mui/icons-material/Language";

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{ backgroundColor: "white", height: "80px", boxShadow: "none" }}
      >
        <Toolbar sx={{ height: "100%" }}>
          <Typography
            noWrap
            component="div"
            sx={{ ml: 4, fontSize: 48, overflow: "unset" }}
            color={"#C057F1"}
          >
            JETA
          </Typography>
          <SearchInput
            className={styles["search-input"]}
            placeholder="Search..."
          />
          {/* {filteredEmails.map(email => {
          return (
            <div className="mail" key={email.id}>
              <div className="from">{email.user.name}</div>
              <div className="subject">{email.subject}</div>
            </div>
          )
        })} */}
          <Box sx={{ flexGrow: 1 }} />
          <Box
            sx={{
              display: {
                xs: "none",
                md: "flex",
                flexGrow: 10,
                justifyContent: "end",
              },
            }}
          >
            <Typography className={styles["signIn-text"]}>Sign in</Typography>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <LocalFireDepartmentIcon sx={{ color: "black", fontSize: 30 }} />
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <ShoppingCartCheckoutIcon sx={{ color: "black", fontSize: 30 }} />
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <LanguageIcon sx={{ color: "black", fontSize: 30 }} />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
