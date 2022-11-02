import { useState, useEffect } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import PropTypes from "prop-types";
import { format } from "date-fns";
import { Clock as ClockIcon } from "../icons/clock";
import { Download as DownloadIcon } from "../icons/download";
import Popup from "./popUp";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Switch from "@mui/material/Switch";

import { useFormik } from "formik";
import * as Yup from "yup";

import {
  Avatar,
  Box,
  Card,
  CardContent,
  Divider,
  Grid,
  Typography,
  Button,
  CardActions,
  TextField,
} from "@mui/material";

export const AvailableStock=()=> {
  const [item1, setItem1] = useState([]);

  const [open, setOpen] = useState(false);

  const updateClickOpen = (e) => {
    fetch(`http://localhost:5000/api/product/manage/${val.id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: "Bearer " + sessionStorage.getItem("token"),
      },
    })
      .then((response) => response.json())

      .then((data) => {
        
        if (data.status == 200) {
          console.log("yaay")
          //location.reload()
          // Router.push("/customers");
        } else alert("Incorrect Data");
      });
  };
  const handleClickOpen = (e) => {
    fetch(`http://localhost:5000/api/product/manage/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: "Bearer " + sessionStorage.getItem("token"),
      },
    })
      .then((response) => response.json())

      .then((data) => {
        
        if (data.status == 200) {
          console.log("yaay")
          //location.reload()
          // Router.push("/customers");
        } else alert("Incorrect Data");
      });
  };

 
 
  useEffect(() => {
    fetch("http://localhost:5000/api/product/manage", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: "Bearer " + sessionStorage.getItem("token"),
      },
    })
      .then((response) => response.json())

      .then((data) => setItem1(data.foundProduct));
    console.log(item1);
  }, []);

  console.log(item1);

  return (
    <div>
      {item1.map((val) => (
        <Grid
          key={val.id}
          item
          lg={3}
          md={6}
          xs={12}
          display="inline-block"
          mx="10px"
          transform="scale(0.8)"
          backgroundColor="white"
        >
          <CardContent>
            <Typography
              align="center"
              color="textPrimary"
              gutterBottom
              variant="h5"
            >
              {val.product_name}
            </Typography>
            <Typography component="p">
              {val.product_selling_price}
              <br />
              {val.product_quantity}
            </Typography>
          </CardContent>
          <CardActions>
            <Button variant="outlined" onClick={handleClickOpen(val.id)}>
              Sold
            </Button>
            <Button variant="outlined" onClick={updateClickOpen}>
              Update Price
            </Button>
           
          </CardActions>
        </Grid>
      ))}
    </div>
  );
}

// export default ShowStandard;
