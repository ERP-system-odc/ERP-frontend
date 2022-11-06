import { Avatar, Box, Card, CardContent, Grid, Typography } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import MoneyIcon from '@mui/icons-material/Money';
import { useState, useEffect } from 'react';

export const Budget = (props) => {
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

      .then((data) => setItem1(data.income));
    console.log(item1);
   
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
            Asset in Cash
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
              backgroundColor: 'primary.main',
              height: 56,
              width: 56
            }}
          >
            <MoneyIcon />
          </Avatar>
        </Grid>
      </Grid>
      <Box
        sx={{
          pt: 2,
          display: 'flex',
          alignItems: 'center'
        }}
      >
        {/* <ArrowDownwardIcon color= "primary" /> */}
        <Typography
          color= "primary"
          sx={{
            mr: 1
          }}
          variant="body2"
        >
          {/* 12% */}
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
