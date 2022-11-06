import { Avatar, Box, Card, CardContent, Grid, LinearProgress, Typography } from '@mui/material';
import InsertChartIcon from '@mui/icons-material/InsertChartOutlined';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';

import { useState, useEffect } from "react";

export const DailySale = (props) => {

  const [item1, setItem1] = useState([]);
  const [item2, setItem2] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/firmDefinition/chartDefinition", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: "Bearer " + sessionStorage.getItem("token"),
      },
    })
      .then((response) => response.json())

    .then((data) => {
      setItem1(data.max_sold_product.name); 
      setItem2(data.max_sold_product.count)})
     //.then((data) => console.log(data.max_sold_product.name))
    
  
  }, []);
return(
  <Card
    sx={{ height: '100%' }}
    {...props}
  >
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
            Most Sold Product
          </Typography>
          <Typography
            color="textPrimary"
            variant="h4"
          >
            {item1}
          </Typography>
          <Typography
          color="textSecondary"
          variant="caption"
        >
          {item2}
        </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: 'warning.main',
              height: 56,
              width: 56
            }}
          >
            <CurrencyExchangeIcon />
          </Avatar>
        </Grid>
      </Grid>
      <Box sx={{ pt: 3 }}>
     
        <LinearProgress
          value={75.5}
          variant="determinate"
        />
      </Box>
    </CardContent>
  </Card>
);
          }