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


export const AccountProfileDetails = (props) => {
  const [values, setValues] = useState({
    fullname: '',
    salary: '',
    email: '',
    phone: ''
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  return (
    <form
      autoComplete="off"
      noValidate
      {...props}
    >
      <Card>
        <CardHeader
          subheader="The information can be edited"
          title="Employees"
        />
        <Divider />
        <CardContent>
          <Grid
            container
            spacing={1}
          >
            <Grid
              item
              md={3}
              xs={6}
            >
              <TextField
                fullWidth
                helperText="Please specify the fullname"
                label="ERP"
                name="fullname"
                onChange={handleChange}
                required
                value={values.fullname}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={3}
              xs={6}
            >
              <TextField
                fullWidth
                label="Salary"
                name="salary"
                onChange={handleChange}
                required
                type="number"
                value={values.salary}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={3}
              xs={6}
            >
              <TextField
                fullWidth
                label="Email Address"
                name="email"
                onChange={handleChange}
                required
                value={values.email}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={3}
              xs={6}
            >
              <TextField
                fullWidth
                label="Phone Number"
                name="phone"
                onChange={handleChange}
                type="number"
                value={values.phone}
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
          >
            Add
          </Button>
        </Box>
      </Card>
    </form>
  );
};
