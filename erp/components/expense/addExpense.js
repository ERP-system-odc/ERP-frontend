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


export const AddExpense = () => {

  const formik = useFormik({
    initialValues: {
        expense_name:"",
        expense_amount:""
    },
    validationSchema: Yup.object({
        expense_name: Yup.string()
        .max(255)
        .required("expense_name is required"),
        expense_amount: Yup.string()
        .max(255)
        .required("expense_amount is required"),
    }),


    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
     
      fetch(
        "http://localhost:5000/api/expense/manage",
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
  
    
    <form onSubmit={formik.handleSubmit}>
      <Card>
        <CardHeader
          subheader="The information is very critical so mind it"
          title="Add Expense"
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
              error={Boolean(
                formik.touched.expense_name && formik.errors.expense_name
              )}
                fullWidth
                helperText="Please specify the expense_name"
                label="expense_name"
                name="expense_name"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.expense_name}
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
                error={Boolean(
                  formik.touched.expense_amount && formik.errors.expense_amount
                )}
                fullWidth
                label="expense_amount"
                name="expense_amount"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.expense_amount}
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
            Add Expense
          </Button>
        </Box>
      </Card>
    </form>
    </>
  );
};


