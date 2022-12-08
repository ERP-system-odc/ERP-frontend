import { useState, useEffect } from 'react';
import { useFormik } from "formik";
import * as Yup from "yup";

import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField
} from '@mui/material';

const Popup = props => {

    const formik = useFormik({
        initialValues: {
            "product_quantity":'',
            "product_standard":`${props.name}`,
            "product_selling_price":'',
            "product_expense":'',},

            onSubmit: (values) => {
                console.log(JSON.stringify(values, null, 2));
               
                fetch(
                  "http://localhost:5000/api/inventory/manage",
                  {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                      "authorization": "Bearer "+sessionStorage.getItem("token"),
                    },
                    body: JSON.stringify(values, null, 2),
                  }
                )
                  .then((response) => response.json())
                  .then((data) => {
                    //handle data
                    console.log(data);
          
                    if (data.status == 200) {
                      console.log("yaay")
                      location.reload()
                      // Router.push("/customers");
                    } else alert("Incorrect Data");
                  })
                  .catch((error) => {
                    //handle error
                  });
              
                
              },
          });
    return (
        <>
        <h1>{props.name}</h1>
        <form onSubmit={formik.handleSubmit}>
          <Card>
            <CardHeader
              subheader="The information is very critical while working your so mind it"
              title="Add Product"
            />
            <Divider />
            <CardContent>
              <Grid
                container
                spacing={1}
              >
                <Grid
                  item
                  md={2.5}
                  xs={5}
                >
                  <TextField
                 
                    fullWidth
                    helperText="Please specify the product_quantity"
                    label="product_quantity"
                    name="product_quantity"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.product_quantity}
                    required
                    variant="outlined"
                  />
                </Grid>
                <Grid
                  item
                  md={2}
                  xs={4}
                >
                  <TextField
                  
                    fullWidth
                    label="product_selling_price"
                    name="product_selling_price"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.product_selling_price}
                    type="number"
                    variant="outlined"
                  />
                </Grid>
                <Grid
                  item
                  md={2}
                  xs={4}
                >
                  <TextField
                    
                    fullWidth
                    label="product_expense"
                    name="product_expense"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.product_expense}
                    
                    type="number"
                    variant="outlined"
                  />
                </Grid>
              </Grid>
            </CardContent>
            <Divider />
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'flex-end',
                p: 2
              }}
            >
             <Button
                    color="primary"
                    disabled={formik.isSubmitting}
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                  >
                Add
              </Button>
            </Box>
          </Card>
        </form>
        </>
    );
  };
   
  export default Popup;