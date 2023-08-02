import React, { useContext } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import UserContext from "../context/UserContext";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Fboperation } from "./FBpage";

export default function AfterLogin() {
  const auth = useContext(UserContext);

  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      {/* <h1>This is after login page user is{auth.user} </h1> */}
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Facebook" value="1" />
              <Tab label="Twitter" value="2" />
              <Tab label="Instagram" value="3" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <Fboperation />
          </TabPanel>
          <TabPanel value="2"><h2>Developer Not recievd Access Token</h2></TabPanel>
          <TabPanel value="3"><h2>Site under progress</h2></TabPanel>
        </TabContext>
      </Box>
    </div>
  );
}


