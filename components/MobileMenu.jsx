import { Box, Typography } from '@mui/material';
import React from 'react'
import styles from "../styles/mobileMenu.module.scss";


const MobileMenu = () => {
  return (
    <Box className={styles["menu-container"]}>
        <Box sx={{mt: 4}}>
        <Typography>
            kalba
        </Typography>
        <Typography>
            Lietuviu
        </Typography>
        <Typography>
            Anglu
        </Typography>
        </Box>
    </Box>
  )
}

export default MobileMenu