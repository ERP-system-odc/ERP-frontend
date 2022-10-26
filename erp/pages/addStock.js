import Head from "next/head";
import NextLink from "next/link";
import Router, { useRouter } from "next/router";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormHelperText,
  Link,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
// import MuiPhoneInput from 'material-ui-phone-number';
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useState } from "react";



const addStock = () => {
  const [items, addItems]=useState([])
  const [num1, addNum]=useState([1])

  const [temp,setTemp]=useState(1)
  const handleSubmit = (e) => {
    e.preventDefault();
    setTemp(1+temp);
    console.log(temp)
    addNum([...num1, temp])
  }
  const formik = useFormik({
    initialValues: {
   
          inventory_name:"",
          inventory_quantity:"",
      
    },

    validationSchema: Yup.object({  
      inventory_name: Yup.string().max(255).required("inventory_name is required"),
      inventory_quantity: Yup.string().max(255).required("inventory_quantity is required"),
    }),
   
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
      
      addItems([...items, values])
      console.log(values)
      console.log(items)
    },
  });


  return (
    <>
      <Head>
        <title>Add Standard | ERP</title>
      </Head>
      <>
      <CardHeader
          subheader="Add the neccessary inventories to build the Product"
          title="Add Product"
        />
    {num1.map(val =>(
     
    
      <form onSubmit={formik.handleSubmit} key={val}>
      <Card>
        
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
                formik.touched.inventory_name && formik.errors.inventory_name
              )}
                fullWidth
                helperText="Please specify the inventory_name"
                label="inventory_name"
                name="inventory_name"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.inventory_name}
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
                  formik.touched.inventory_quantity && formik.errors.inventory_quantity
                )}
                fullWidth
                label="inventory_quantity"
                name="inventory_quantity"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.inventory_quantity}
              
                type="number"
                variant="outlined"
              />
            </Grid>
            <Grid 
               item
               md={1}
               xs={2}
            >
            <Button
                color="primary"
                disabled={formik.isSubmitting}
               
                size="small"
                type="submit"
                variant="contained"
              >
            Add
          </Button>
          </Grid>
          </Grid>
        </CardContent>
        <Divider />
        
      </Card>
    </form>
    ))}
    <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            p: 2
          }}
        >
         <Button
                color="primary"
                // disabled={formik.isSubmitting}
               onClick={temp++ &&  handleSubmit}
                size="large"
                type="submit"
                variant="contained"
              >
            Add More Item
          </Button>
        </Box>
    </>
    </>
  );
};

export default addStock;
