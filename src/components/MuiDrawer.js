import React, { useState } from 'react'
import MenuIcon from "@mui/icons-material/Menu"
import { Drawer, Box, Typography, IconButton } from "@mui/material"
import '../css/Navbar.css'
import CloseIcon from '@mui/icons-material/Close';

import HouseRoundedIcon from '@mui/icons-material/HouseRounded';
import AccountBoxRoundedIcon from '@mui/icons-material/AccountBoxRounded';
import RestaurantRoundedIcon from '@mui/icons-material/RestaurantRounded';
import IcecreamRoundedIcon from '@mui/icons-material/IcecreamRounded';
import MonetizationOnRoundedIcon from '@mui/icons-material/MonetizationOnRounded';
import TextsmsRoundedIcon from '@mui/icons-material/TextsmsRounded';
import AddIcCallRoundedIcon from '@mui/icons-material/AddIcCallRounded';

const MuiDrawer = () => {
  const [ openDrawer, setOpenDrawer ] = useState(false)
  return (
    <>
        <IconButton size="large" edge="start" color="inherit" aria-label='logo' onClick={()=> setOpenDrawer(true)}>
            <MenuIcon style={{color: 'black', fontSize:'30px'}}/>
        </IconButton>
        <Drawer anchor="bottom" open={openDrawer} onClose={()=> setOpenDrawer(false)} >
            <div className='close-icon'>
                <CloseIcon onClick={()=> setOpenDrawer(false)}/>
            </div>
            <Box p={1} width='100%' textAlign='left'>
                <Typography variant='h6' component='div'>
                    <li><a href="#home" onClick={()=> setOpenDrawer(false)}><HouseRoundedIcon style={{marginRight: '10px'}}/>Home</a></li>
                    <li><a href="#about" onClick={()=> setOpenDrawer(false)}><AccountBoxRoundedIcon style={{marginRight: '10px'}}/>About</a></li>
                    <li><a href="#kitchen" onClick={()=> setOpenDrawer(false)}><RestaurantRoundedIcon style={{marginRight: '10px'}}/>Kitchen</a></li>
                    <li><a href="#others" onClick={()=> setOpenDrawer(false)}><IcecreamRoundedIcon style={{marginRight: '10px'}}/>Others</a></li>
                    <li><a href="#price-list" onClick={()=> setOpenDrawer(false)}><MonetizationOnRoundedIcon style={{marginRight: '10px'}}/>Price List</a></li>
                    <li><a href="#make-list" onClick={()=> setOpenDrawer(false)}><TextsmsRoundedIcon style={{marginRight: '10px'}}/>Make a List</a></li>
                    <li><a href="#contact" onClick={()=> setOpenDrawer(false)}><AddIcCallRoundedIcon style={{marginRight: '10px'}}/>Contact</a></li>
                </Typography>
            </Box>
        </Drawer>
    </>
  )
}

export default MuiDrawer