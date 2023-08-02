import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from 'yup';
import axios from "axios";
import { API } from "../global";

//This module will add page 
export function AddFBPage() {
  const [done, setDone] = useState("");
  const [loding, setLoding] = useState(false);

  const formvali = Yup.object({
    userID: Yup.string("Enter your Name"),
    pageID: Yup.string().required("Enter userID"),
    userFBAccessToken: Yup.string("Enter the Access token given by facebook")
  });

  const { values, errors, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: { userID: "", pageID: "", pageFBAccessToken: "" },
    validationSchema: formvali,
    onSubmit: async (values) => {
      setLoding(true);
      console.log(values.name);
      const pageFBdetail = {
        "userID": values.userID,
        "pageID": values.pageID,
        "pageAccess_token": values.pageFBAccessToken
      };
      try {
        const res = await axios.post(`${API}/fb/addfbpage`, pageFBdetail, {
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
      <h2>Enter your Facebook Page Details</h2>
      {loding ? <h3>Please wait...</h3> :
        <><form onSubmit={handleSubmit}>
          <div className="rowflex">
            <div>
              <TextField type="text" placeholder="Enter UserID:" id="userID"
                name="userID" value={values.userID}
                onChange={handleChange}
                onBlur={handleBlur} />
              <p className="error_message">{errors.userID}</p>
            </div>
            <div>
              <TextField type="text" placeholder="Enter PageID:" id="pageID"
                name="pageID" value={values.pageID}
                onChange={handleChange}
                onBlur={handleBlur} />
              <p className="error_message">{errors.pageID}</p>
            </div>
            <div>
              <TextField type="text" placeholder="Enter Page Acess Token:" id="pageFBAccessToken"
                name="pageFBAccessToken" value={values.pageFBAccessToken}
                onChange={handleChange}
                onBlur={handleBlur} />
              <p className="error_message">{errors.pageFBAccessToken}</p>
            </div>
            <div>
              <Button type="submit" variant="contained">
                Submit
              </Button>
            </div>{" "}
          </div>
        </form>
          {done !== "" ? <h3>{done}</h3> : ""}
        </>}



    </div>
  );
}
