import React, { useContext, useState } from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { TextField } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from 'yup';
import axios from "axios";
import { API } from "../global";
import UserContext from '../context/UserContext';


const formvali=Yup.object({
    email:Yup.string().email("Enter correct email"),
    password:Yup.string().min(5).max(15).required("Enter password")   
})



export default function Login() {
  const [loading, setLoading] = useState(false);
  const [done,setDone]=useState("");
  const auth = useContext(UserContext);
  
 
  const navi= useNavigate();
    const {values,errors,handleBlur,handleChange,handleSubmit}= useFormik({
        initialValues:{email:"", password:""},
        validationSchema:formvali,
        onSubmit:async(values)=>{
          setLoading(true);
            console.log(values.email);
            const userdetail={
                "email":values.email,
                "password":values.password
            };
            console.log(userdetail);

            try {
                const res= await axios.post(`${API}/users/login`,userdetail, {
                    headers: {
                        // 'authorization': your_token,
                        'Accept' : 'application/json',
                        'Content-Type': 'application/json'
                    }
                })
                .then(response => {    
                    // console.log(response);
                   //setting state (Redux's Style)
                  sessionStorage.setItem('jwttoken', response.data.jwttoken); //saving token
                  console.log(response.data.jwttoken)//pushes back the user after storing token
                  setDone(response.data.message);
                  console.log(response.data);
                  auth.handleLogin(response.data.username,response.data.email);

                  navi("/afterlogin");

                  
              })
            } 
            catch (error) {
              console.log("this is error section of login page")
              console.log(error.response.data.message)
              setDone(error.response.data.message);
              
            }


        }
    })

  // const navigate = useNavigate();
  return (
    <div>
{/* <AuthProvider> */}
      <h1>User Login</h1>
      {loading?<h1>Please wait...</h1>:
       <div> <form onSubmit={handleSubmit}>
       <div>
         <TextField
           type="email"
           id="email"
           name="email"
           placeholder="Enter your email:"
           value={values.email}
           onChange={handleChange}
           onBlur={handleBlur}
         />
         <p>{errors.email}</p>
       </div>

       <div>
         <TextField
           type="password"
           id="password"
           name="password"
           placeholder="Password:"
           value={values.password}
           onChange={handleChange}
           onBlur={handleBlur}
         />
         <p className="error_message">{errors.password}</p>
       </div>
       <div>
         <Button type="submit" variant="contained">
           {" "}
           Submit
         </Button>
       </div>
     </form>
     <p><a href="/forgot_password">Forgot password?</a></p>
     <p><a href="/register">Do you want to Register?</a></p>
     <h1>{done}</h1></div>
      }
      {/* </AuthProvider> */}
      
      
      
    </div>
  );
}
