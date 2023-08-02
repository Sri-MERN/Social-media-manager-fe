import "./App.css";
import Resetpass from "./components/Resetpass";
import { Route, Link, Routes } from "react-router-dom";
import Home from "./components/Home";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import Register from "./components/Register";
import Login from "./components/Login";
import Checkmail from "./components/Checkmail";
import Forgot_password from "./components/Forgot_password";
import Notfound from "./components/Notfound";


import { useState , useContext} from "react";
import ProtectedRoute from "./components/ProtectedRoute"
import UserProvider from "./context/UserProvider";
import Userbar from "./components/Userbar";





function App() {
  

  return (
    
    <div className="App">
      <UserProvider>
      <Box md={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
      <AppBar position="static">
        <Toolbar  disableGutters>
          <Typography variant="h6" color="inherit" component="div" className='toolbar' >
          <a className='toolbar' href="/home">Home</a>  
          </Typography>
          <Typography variant="h6" color="inherit" component="div" className='toolbar'>
          <a className='toolbar'href="/login">Login</a>  
          </Typography>
          <Typography variant="h6" color="inherit" component="div" className='toolbar'>
          <a className='toolbar'href="/register">Register</a>  
          </Typography>
          
        </Toolbar>

      </AppBar>
      <Userbar/>
    </Box>
    
  

  

      <Routes>
        <Route path="/" element= {<Home/>} />
        <Route path="/home" element= {<Home />} />
        <Route path="/register" element= {<Register />} />
        <Route path="/forgot_password" element={<Forgot_password />} />
        <Route path="/resetpassword" element={<Resetpass />} />
        <Route path="/login" element={<Login />} />
        <Route path="/checkmail" element={<Checkmail />} />
        
{/* This is protected route link */}
        {/* <Route path="/dashboard" element={<ProtectedRoute cmp="Dashboard" />} /> */}
       
        {/* <Route path="/shorturl" element={<ProtectedRoute cmp="Shorturl" />}  /> */}
        <Route path="/afterlogin" element={<ProtectedRoute cmp="Afterlogin" />} />
        <Route path="/profile" element={<ProtectedRoute cmp= "Profile" />} />
        <Route path="/myacccount" element={<ProtectedRoute cmp= "MyAccount" />} />
        <Route path="/myaccount/addfbuser" element={<ProtectedRoute cmp= "AddFBUser" />} />
        <Route path="/myaccount/addfbpage" element={<ProtectedRoute cmp= "AddFBPage" />} />
         <Route path="*" element={<Notfound />} />
      </Routes>


      </UserProvider>
    </div>
    
  );
}

export default App;
