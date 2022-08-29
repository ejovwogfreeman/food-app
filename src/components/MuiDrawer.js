import React, { useState } from 'react'
import MenuIcon from "@mui/icons-material/Menu"
import { Drawer, Box, Typography, IconButton } from "@mui/material"
import '../css/Navbar.css'
import CloseIcon from '@mui/icons-material/Close';

import { FaSignInAlt } from 'react-icons/fa'
import { MdCreateNewFolder } from 'react-icons/md'

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
                    <li><a href="/signin" onClick={()=> setOpenDrawer(false)}><FaSignInAlt style={{marginRight: '10px'}}/>Login</a></li>
                    <li><a href="/signup" onClick={()=> setOpenDrawer(false)}><MdCreateNewFolder style={{marginRight: '10px'}}/>Sign Up</a></li>
                </Typography>
            </Box>
        </Drawer>
    </>
  )
}

export default MuiDrawer