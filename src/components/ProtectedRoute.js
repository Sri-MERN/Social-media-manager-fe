import React, { useState } from "react";
import { AddFBPage } from "./AddFBPage";
import { AddFBUser } from "./AddFBUser";
import AfterLogin from "./AfterLogin";
import MyAccount from "./MyAccount";
import Profile from "./Profile";

export default function ProtectedRoute(probs) {
  return (
    <div>
      {/* <User.Provider value={"sangi"}>
        <Loggedin.Provider value={"yes"}> */}
          {probs.cmp === "Afterlogin" ? <AfterLogin/> :
           probs.cmp === "Profile"? <Profile/> :
           probs.cmp === "MyAccount"?<MyAccount/> :
           probs.cmp === "AddFBUser"?<AddFBUser/>:
           probs.cmp === "AddFBPage"?<AddFBPage/>:
           <h1>Still to be constructed</h1>
           }
        {/* </Loggedin.Provider>
      </User.Provider> */}

    
    </div>
  );
}
