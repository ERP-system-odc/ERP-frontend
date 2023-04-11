import { Avatar, Box, Card, CardContent, Grid, LinearProgress, Typography } from '@mui/material';
import InsertChartIcon from '@mui/icons-material/InsertChartOutlined';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';

import { useState, useEffect } from "react";

export const DailySale = (props) => {

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
            {props?.data ?.name}
          </Typography>
          <Typography
          color="textSecondary"
          variant="caption"
        >
          {props?.data ?.count}
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