import { useState, useEffect } from "react";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

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
import { useFormik } from "formik";

import { stockAPI, soldStockAPI } from "../../utils/apiUtils";

export const AvailableStock = () => {
  const [item1, setItem1] = useState([]);
  const [on, setOn] = useState(false);

  const [open, setOpen] = useState(false);
  const [product_selling_price1, setProduct_selling_price1] = useState({
    product_selling_price: "",
  });

  const [variable, setVariable] = useState("");
  /////////////////////////////////////
  //////update selling price
  //////////////////////////////////////

  const handleClickOpen = ({ x }) => {
    setVariable(x);
    setOpen(true);
    console.log("the var is" + variable);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setProduct_selling_price1({ [name]: value });
  };

  const updateClickOpen = (e, { b }) => {
    e.preventDefault();
    console.log(b);
    // console.log(`http://localhost:5000/api/product/manage/${b}`)
    fetch(`http://localhost:5000/api/product/manage/${b}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: "Bearer " + sessionStorage.getItem("token"),
      },
      body: JSON.stringify(product_selling_price1, null, 2),
    })
      .then((response) => response.json())

      .then((data) => {
        if (data.status == 200) {
          console.log("yaay");
          setOn(true);
          // location.reload()
          // Router.push("/customers");
        } else alert("Incorrect Data");
      });
  };
  // const onSubmit=(e)=>{
  //   e.preventDefault();
  //   updateClickOpen()
  // }

  const handleClickSell = ({ a }) => {
    // alert(`http://localhost:5000/api/product/manage/${a}`)
    fetch(`http://localhost:5000/api/product/manage/${a}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: "Bearer " + sessionStorage.getItem("token"),
      },
    })
      .then((response) => response.json())

      .then((data) => {
        if (data.status == 200) {
          console.log("yaay");
          setOn(true);
          //location.reload()
          // Router.push("/customers");
        } else alert("Incorrect Data");
      });
  };

  useEffect(() => {
    const token =  sessionStorage.getItem("token")
    async function fetchData() {
      try{
        const response = await stockAPI(token)
        setItem1(response.data.foundProduct)
        setOn(false);
      }catch(error){
        console.log(error)
      }
    }
    fetchData();
  }, [on]);

  console.log(item1);

  return (
    <div>
      {item1?.map((val) => (
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
            <Button
              variant="outlined"
              onClick={(sold) => handleClickSell({ a: val.id })}
            >
              Sold
            </Button>
            <Button
              variant="outlined"
              onClick={() => {
                handleClickOpen({ x: val.id });
              }}
            >
              Update Price
            </Button>
            <Dialog open={open} onClose={handleClose}>
              <DialogTitle>Update Selling Price</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  Please specify the New Price
                </DialogContentText>
                <Box
                  noValidate
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    m: "auto",
                    width: "fit-content",
                  }}
                >
                  <form onSubmit={console.log(val.id)}>
                    <TextField
                      name="product_selling_price"
                      margin="normal"
                      label="product_selling_price"
                      onChange={handleChange}
                      fullWidth
                      type="number"
                      value={product_selling_price1.product_selling_price}
                      variant="outlined"
                    />
                    <Box sx={{ py: 2 }}>
                      <Button
                        color="primary"
                        fullWidth
                        size="large"
                        type="submit"
                        variant="contained"
                      >
                        Produced
                      </Button>
                    </Box>
                  </form>
                </Box>
              </DialogContent>
            </Dialog>
          </CardActions>
        </Grid>
      ))}
    </div>
  );
};
