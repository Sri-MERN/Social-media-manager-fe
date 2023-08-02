
import React, { useContext, useState } from "react";
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
// import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AccountCircle from '@mui/icons-material/AccountCircle';
import UserContext from '../context/UserContext';
import { useNavigate } from "react-router-dom";


// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export default function Userbar(props){
   
  const [anchorEl, setAnchorEl] = React.useState(null);
  const uauth= useContext(UserContext)
  const navigate= useNavigate();

  // const handleChange = (event) => {
  //   setAuth(event.target.checked);
  //   console.log("This is handleChange",event);
  // };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
    console.log(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleProfile = () => {
    console.log("This is a handle profile event")
    navigate("/profile")
  };

  const handleAccount = () => {
    console.log("This is a handle Account event")
    navigate("/myacccount")

  };
  const handlesignout = () => {
    console.log("This is a handle signout event")
    uauth.handleLogout(); // user context set to null
    navigate("/home")  //redirect to home page

  }
    return(
        <div >
           {uauth.user!=null?
           <><p className="userbar"><h4> Hi,Welcome {uauth.user}  
           
           <IconButton
             size="large"
             aria-label="account of current user"
             aria-controls="menu-appbar"
             aria-haspopup="true"
             onClick={handleMenu}
             color="inherit"
           >
             <AccountCircle />
           </IconButton>
           <Menu
             id="menu-appbar"
             anchorEl={anchorEl}
             anchorOrigin={{
               vertical: 'top',
               horizontal: 'right',
             }}
             keepMounted
             transformOrigin={{
               vertical: 'top',
               horizontal: 'right',
             }}
             open={Boolean(anchorEl)}
             onClose={handleClose}
           >
             <MenuItem onClick={()=>{handleClose();
             handleProfile()}}>Profile</MenuItem>
             <MenuItem onClick={()=>{handleClose(); handleAccount()}}>My account</MenuItem>
             <MenuItem onClick={()=>{handleClose(); handlesignout()}}>Logout</MenuItem>
           </Menu>
         </h4> </p> 
           </>:
           <></>}
        </div>
    )
}
