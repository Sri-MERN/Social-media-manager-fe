import React, { useState, useContext  } from "react";
import { Button, TextField } from "@mui/material";
import Box from '@mui/material/Box';
import Stack from "@mui/material/Stack";
import { useFormik } from "formik";
import * as Yup from 'yup';
import axios from "axios";
import { API } from "../global";
import { AddFBUser } from "./AddFBUser";
import { AddFBPage } from "./AddFBPage";
import UserContext from "../context/UserContext";


 function GetFBdetails() {
  const auth = useContext(UserContext);
  const [choice, setchoice] = useState(1);
  return (
    <div>
      <div> This is {auth.email}</div>
      <Stack spacing={2} direction="row">
        <Button
          variant="contained"
          className="left"
          onClick={() => {
            setchoice(1);
          }}
        >
          GET FACEBOOK USER deatils
        </Button>
        <Button
          variant="contained"
          className="left"
          onClick={() => {
            setchoice(2);
          }}
        >
          ADD FACEBOOK PAGE
        </Button>
        <Button
          variant="contained"
          className="left"
          onClick={() => {
            setchoice(3);
          }}
        >
          FACEBOOK OPERATION{" "}
        </Button>
      </Stack>
      <div>
        {choice==1?<h1>getuserdetails</h1>:<h1>get Page deatils</h1>}
        {/* {choice === 1 ? (
          <h1>getuserdetails</h1>
        ) : (
          <h1>get Page deatils</h1>
        )
        )} */}
      </div>
    </div>
  );
}



export function Fboperation() {
  const [done, setDone] = useState("");
  const [loding,setLoding]=useState(false)

  const formvali=Yup.object({
    userID:Yup.string("Enter UserID").required("This field is required"),
   userPost: Yup.string("Maximum length is 500 charaters ").required("This field is required")
  })

  const {values,errors,handleBlur,handleChange,handleSubmit}=useFormik({
    initialValues:{userID:"", userPost:""},
    validationSchema:formvali,
    onSubmit:async(values)=>{
      setLoding(true);
      console.log(values.name);
      const postFBdetail={
            "userID":values.userID,
            "userPost":values.userPost
        };
      try {
        const res= await axios.post(`${API}/fb/fbpage/feed`,postFBdetail, {
                headers: {
                    // 'authorization': your_token,
                    'Accept' : 'application/json',
                    'Content-Type': 'application/json'
                }
            }).then(response=>{
              console.log(response.data.message)
              setDone(response.data.message)
              setLoding(false)
            })

        
      } catch (error) {
        console.log(error)
        setDone(error)
      }
    }
      
  })
  return (
    <div>
      <h2>Enter your Facebook operation</h2>
      {loding?<h3>Please wait...</h3>:
      <><form onSubmit={handleSubmit}>
      <div className="rowflex">
        <div>
          <TextField type="text" placeholder="Enter UserID:" id="userID"
         name="userID" value={values.userID}
         onChange={handleChange}
         onBlur={handleBlur}/>
         <p className="error_message">{errors.userID}</p>
        </div>
        <div>
          <TextField type="text" placeholder="Enter message to be posted:" id="userPost"
         name="userPost" value={values.userPost}
         onChange={handleChange}
         onBlur={handleBlur}/>
         <p className="error_message">{errors.userPost}</p>
        </div>
        <div>
          <Button type="submit" variant="contained">
            post
          </Button>
        </div>{" "}
      </div>
    </form>
    {done!=="" ? <h3>{done}</h3> : ""}
      </>}

      <GetFBdetails/>
      
    </div>
  );
}
