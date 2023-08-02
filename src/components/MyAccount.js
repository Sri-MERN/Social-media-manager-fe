import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

export default function MyAccount() {
  const navi= useNavigate();
const handleaddinsta=()=>{
    console.log("This is add insta")
}
const handleAddFBuser=()=>{
  console.log("handle Add FB")
  navi("/myaccount/addfbuser")
}
const handleAddFBPage=()=>{
  console.log("handle Add FB page")
  navi("/myaccount/addfbpage")
}

  return (
    <div>
      <h1> This is my Accounts page</h1>
      <div className="flex">
        {/* .............Facebook................. */}
        <div>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="Facebook"
              height="140"
              image="https://i.pcmag.com/imagery/articles/04HUXgEu0I3mdCOejOjQpNE-5.fit_lim.v1620748900.jpg"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Facebook
              </Typography>
              <Typography variant="body2" color="text.secondary">
                You can add and update your Facebook account details and the
                notification
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small"  onClick={handleAddFBuser}>ADD User</Button>
              <Button size="small" onClick={handleAddFBPage}>ADD Page</Button>
            </CardActions>
          </Card>
        </div>
        {/*................ Twitter.............. */}
        <div>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="Twitter"
              height="140"
              image="https://images.unsplash.com/photo-1611605698335-8b1569810432?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dHdpdHRlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Twitter
              </Typography>
              <Typography variant="body2" color="text.secondary">
                You can add and update your Facebook account details and the
                notification
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">ADD</Button>
              <Button size="small">UPDATE</Button>
            </CardActions>
          </Card>
        </div>
        {/*.................. Instagram............ */}
        <div>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="Instagram"
              height="140"
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6Xr3RnQa0RBaWt5TSliqxDL7NWW5ANppkd96Vk14-KEZMBUUbTNVPfilsTSXl69MoU0f93PljpMQ&usqp=CAU&ec=48600113"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Instagram
              </Typography>
              <Typography variant="body2" color="text.secondary">
                You can add and update your Facebook account details and the
                notification
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" onClick={handleaddinsta}>ADD</Button>
              <Button size="small">UPDATE</Button>
            </CardActions>
          </Card>
        </div>
      </div>
    </div>
  );
}
