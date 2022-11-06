import { Avatar, Box, Card, CardContent, Grid, Typography } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import PeopleIcon from '@mui/icons-material/PeopleOutlined';
import MoneyOffIcon from '@mui/icons-material/MoneyOff';
import { useState, useEffect } from "react";

export const Expenses = (props) => {

  const [item1, setItem1] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/firmDefinition/chartDefinition", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: "Bearer " + sessionStorage.getItem("token"),
      },
    })
      .then((response) => response.json())

     .then((data) => setItem1(data.expense))
    //  .then((data) => console.log(data.product_percentages))
    
  
  }, []);

return(
  <Card {...props}>
    <CardContent>
      <Grid
        container
        spacing={3}
        sx={{ justifyContent: 'space-between' }}
      >
        <Grid item>
          <Typography
            color="textSecondary"
            gutterBottom
            variant="overline"
          >
            Total Expenses
          </Typography>
          <Typography
            color="textPrimary"
            variant="h4"
          >
             {item1}
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: 'error.main',
              height: 56,
              width: 56
            }}
          >
            <MoneyOffIcon />
          </Avatar>
        </Grid>
      </Grid>
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          pt: 2
        }}
      >
        {/* <ArrowUpwardIcon color= "error" /> */}
        <Typography
          variant="body2"
          sx={{
            mr: 1
          }}
        >
          {/* 16% */}
        </Typography>
        <Typography
          color="textSecondary"
          variant="caption"
        >
          {/* Since last month */}
        </Typography>
      </Box>
    </CardContent>
  </Card>
);
        }
