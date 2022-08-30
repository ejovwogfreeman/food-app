import React, { useState } from 'react'
import MenuIcon from "@mui/icons-material/Menu"
import { Drawer, Box, Typography, IconButton } from "@mui/material"
import '../css/Navbar.css'
import CloseIcon from '@mui/icons-material/Close';
import { FaSignInAlt } from 'react-icons/fa'
import { MdCreateNewFolder } from 'react-icons/md'
import { Link } from 'react-router-dom'

const MuiDrawer = () => {
  const [ openDrawer, setOpenDrawer ] = useState(false)
  return (
    <>
        <IconButton size="large" edge="start" color="inherit" aria-label='logo' onClick={()=> setOpenDrawer(true)} style={{marginTop: '22px'}}>
            <MenuIcon style={{color: 'white', fontSize:'35px'}}/>
        </IconButton>
        <Drawer anchor="bottom" open={openDrawer} onClose={()=> setOpenDrawer(false)} >
            <div className='close-icon'>
                <CloseIcon onClick={()=> setOpenDrawer(false)}/>
            </div>
            <Box p={1} width='100%' textAlign='left'>
                <Typography variant='h6' component='div'>                   
                    <li><Link to="/signin" onClick={()=> setOpenDrawer(false)}><FaSignInAlt style={{marginRight: '10px'}}/>Login</Link></li>
                    <li><Link to="/signup"  onClick={()=> setOpenDrawer(false)}><MdCreateNewFolder style={{marginRight: '10px'}}/>Sign Up</Link></li>
                </Typography>
            </Box>
        </Drawer>
    </>
  )
}

export default MuiDrawer