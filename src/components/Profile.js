import React, { useContext,useState } from "react";
import UserContext from "../context/UserContext";

import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { TextField } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from 'yup';
import axios from "axios";
import { API } from "../global";


const formvali = Yup.object({
    fname: Yup.string("Enter Only string").min(3).max(30).required("Enter First name"),
    lname: Yup.string("Enter Only string").min(3).max(30),
    email: Yup.string().email("Enter correct email"),
    password: Yup.string().min(5).max(15).required("Enter password"),
    confirmpassword: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Password must match"
    ),
  });

export default function Profile(){
const auth = useContext(UserContext)

const navigate = useNavigate();
const [done,setDone]= useState();
// const [email, setEmail]=useState("");
// const [fname,setFname]=useState("");
// const [lname,setLname]=useState("");
// const [password, setPassword]= useState("");
const { values, errors, handleBlur, handleChange, handleSubmit } = useFormik({
  initialValues: {
    fname: "",
    lname: "",
    email: "",
    password: "",
    confirmpassword: "",
  },
  validationSchema: formvali,
  onSubmit:async (values) => {
    console.log(values.fname);
    const userdetail = {
      username: values.fname,
      email: auth.user,
      password: values.password,
    };
    console.log(userdetail);

    try {
      //to change the API----------------------->
      const res= await axios.post(`${API}/users/register`, userdetail, {
        headers: {
          // 'authorization': your_token,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }).then((response)=>{
        console.log("registration section");
        navigate("/checkmail")
      })
    } catch (error) {
      setDone("Something went wrong. Please try again!!!")

    }
  },
});

    return(
        <div>
            <h1>This is Profile page. Welcome {auth.user} </h1>
            <div>
     <h1>Update your profile yourself</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <TextField
            required
            type="text"
            id="fname"
            name="fname"
            placeholder="First Name:"
            value={values.fname}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <p className="error_message">{errors.fname}</p>
        </div>

        <div>
          <TextField
            required
            type="text"
            id="lname"
            name="lname"
            placeholder="Last Name:"
            value={values.lname}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <p className="error_message">{errors.lname}</p>
        </div>

        {/* <div>
          <TextField
            type="email"
            id="email"
            name="email"
            placeholder="Email:"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <p>{errors.email}</p>
        </div> */}
        

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
          <TextField
            type="password"
            id="confirmpassword"
            name="confirmpassword"
            placeholder="confirm Password:"
            value={values.confirmpassword}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <p className="error_message">{errors.confirmpassword}</p>
        </div>
        <div>
          <Button type="submit" variant="contained">
            Update
          </Button>
        </div>
      </form>
      
    </div>
        </div>
    )
}