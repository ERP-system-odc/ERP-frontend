import { useState, useEffect } from "react";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import MenuItem from "@mui/material/MenuItem";

import { useFormik } from "formik";
import * as Yup from "yup";
import { standardAPI, producedItemAPI } from "../../utils/apiUtils";

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

export const ShowStandard = ({ items }) => {
  const [item1, setItem1] = useState([]);

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const formik = useFormik({
    initialValues: {
      product_quantity: "",
      product_selling_price: "",
      product_standard: "",
      product_expense: "",
    },

    onSubmit: (values) => {
      const token = sessionStorage.getItem("token");
      try {
        const response = producedItemAPI(values, token);
        console.log("the response is ", response);
      } catch (error) {
        console.log(error);
      }
    },
  });

  useEffect(() => {
    const token =  sessionStorage.getItem("token")
    async function fetchData() {
      try{
        const response = await  standardAPI(token)
        setItem1(response.data.standard)
      }catch(error){
        console.log(error)
      }
    }
    fetchData();
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
              {val.standard_name}
            </Typography>
            <Typography component="p">This is the product Standard.</Typography>
          </CardContent>
          <CardActions>
            <Button variant="outlined" onClick={handleClickOpen}>
              Produced
            </Button>
            <Dialog open={open} onClose={handleClose}>
              <DialogTitle>Product</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  Please specify the quantity and prices{val.standard_name}
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
                  <form onSubmit={formik.handleSubmit}>
                    <TextField
                      select
                      fullWidth
                      label="product_standard"
                      name="product_standard"
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      value={formik.values.product_standard}
                      variant="outlined"
                    >
                      <MenuItem value={val.standard_name}>
                        {val.standard_name}
                      </MenuItem>
                    </TextField>

                    <TextField
                      name="product_selling_price"
                      margin="normal"
                      label="product_selling_price"
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      fullWidth
                      type="number"
                      value={formik.values.product_selling_price}
                      variant="outlined"
                    />
                    <TextField
                      name="product_quantity"
                      margin="normal"
                      label="product_quantity"
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      fullWidth
                      type="number"
                      value={formik.values.product_quantity}
                      variant="outlined"
                    />
                    <TextField
                      name="product_expense"
                      margin="normal"
                      label="product_expense"
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      fullWidth
                      type="number"
                      value={formik.values.product_expense}
                      variant="outlined"
                    />

                    <Box sx={{ py: 2 }}>
                      <Button
                        color="primary"
                        disabled={formik.isSubmitting}
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
              <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
              </DialogActions>
            </Dialog>
          </CardActions>
        </Grid>
      ))}
    </div>
  );
};

// export default ShowStandard;
