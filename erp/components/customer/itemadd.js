import { useState } from 'react';
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

const states = [
  {
    value: 'alabama',
    label: 'Alabama'
  },
  {
    value: 'new-york',
    label: 'New York'
  },
  {
    value: 'san-francisco',
    label: 'San Francisco'
  }
];

export const AccountProfileDetails = (props) => {
  const [values, setValues] = useState({
    inventory_name: '',
    inventory_price: '',
    least_critical_amount: '',
    inventory_quantity: '',
    inventory_expense: ''
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
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
            // Router.push("/profile");
          } else alert("Incorrect Data");
        })
        .catch((error) => {
          //handle error
        });
    // if (values.inventory_name && values.inventory_price && values.least_critical_amount && values.inventory_quantity ) {
    //   const newUser = { ...values, id:user.email };//this is created to assign the id of the new added user to the data
    //   setEmployee([...employee, newUser]);
    //   setUser({  email: '',firstName: '', lastName: '',gender:'', dateOfBirth:'',phoneNumber:'',address:''});
    // }
  };

  return (
    <form
      autoComplete="off"
      noValidate
      {...props}
    >
      <Card>
        <CardHeader
          subheader="The information is very critical while working your so mind it"
          title="Add Item"
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
                helperText="Please specify the inventory_name"
                label="inventory_name"
                name="inventory_name"
                onChange={handleChange}
                required
                value={values.inventory_name}
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
                label="inventory_price"
                name="inventory_price"
                onChange={handleChange}
                required
                type="number"
                value={values.inventory_price}
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
                label="least_critical_amount"
                name="least_critical_amount"
                onChange={handleChange}
                required
                type="number"
                value={values.least_critical_amount}
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
                label="inventory_quantity"
                name="inventory_quantity"
                onChange={handleChange}
                required
                type="number"
                value={values.inventory_quantity}
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
                label="inventory_expense"
                name="inventory_expense"
                onChange={handleChange}
                type="number"
                value={values.inventory_expense}
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
            variant="contained"
            type='submit' 
            onClick={handleSubmit}
          >
            Add
          </Button>
        </Box>
      </Card>
    </form>
  );
};
