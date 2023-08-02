import React, { useState } from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import Userbar from "./Userbar";

export default function Home() {
  return (
    <div
      style={{
        backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_Xr1_mh0n8OutIZDjY5ve4oC-7P8_TexI-Jk3m4T8gg&usqp=CAU&ec=48600113")`,
        height: "100vh",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div>
        <h1> Welcome to soial media management app</h1>
      </div>
    </div>
  );
}
