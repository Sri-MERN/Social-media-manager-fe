import React, { useState, useContext } from "react";
import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from 'yup';
import axios from "axios";
import { API } from "../global";
import UserContext from "../context/UserContext"; 

export function AddFBUser() {

  const [done, setDone] = useState("");
  const [loding, setLoding] = useState(false);
  const auth = useContext(UserContext);

  const formvali = Yup.object({
    name: Yup.string("Enter your Name"),
    userFBID: Yup.string().required("Enter userID"),
    userFBAccessToken: Yup.string("Enter the Access token given by facebook")
  });

  const { values, errors, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: { name: "", userFBID: "", userFBAccessToken: "" },
    validationSchema: formvali,
    onSubmit: async (values) => {
      setLoding(true);
      console.log(values.name);
      const userFBdetail = {
        "username": values.name,
        "useremail":auth.email,
        "userID": values.userFBID,
        "userAccess_token": values.userFBAccessToken
      };
      try {
        const res = await axios.post(`${API}/fb/addfbuser`, userFBdetail, {
          headers: {
            // 'authorization': your_token,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        }).then(response => {
          console.log(response.data.message);
          setDone(response.data.message);
          setLoding(false);
        });


      } catch (error) {
        console.log(error);
        setDone(error);
      }
    }
  });


  return (
    <div>
      <h2>Enter your Facebook account details</h2>
      {loding ? <h3>Please wait...</h3> :
        <><form onSubmit={handleSubmit}>
          <div className="rowflex">
            <div>
              <TextField type="text" placeholder="Enter Name:" id="name"
                name="name" value={values.name}
                onChange={handleChange}
                onBlur={handleBlur} />
              <p className="error_message">{errors.name}</p>
            </div>
            <div>
              <TextField type="text" placeholder="Enter UserID:" id="userFBID"
                name="userFBID" value={values.userFBID}
                onChange={handleChange}
                onBlur={handleBlur} />
              <p className="error_message">{errors.userFBID}</p>
            </div>
            <div>
              <TextField type="text" placeholder="Enter User Acess Token:" id="userFBAccessToken"
                name="userFBAccessToken" value={values.userFBAccessToken}
                onChange={handleChange}
                onBlur={handleBlur} />
              <p className="error_message">{errors.userFBAccessToken}</p>
            </div>
            <div>
              <Button type="submit" variant="contained">
                Submit
              </Button>
            </div>{" "}
          </div>
        </form>
          {done !== "" ? <h1>user added to database</h1> : ""}
        </>}



    </div>
  );
}
