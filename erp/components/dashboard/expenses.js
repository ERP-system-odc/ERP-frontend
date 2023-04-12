import { Avatar, Box, Card, CardContent, Grid, Typography } from '@mui/material';
import MoneyOffIcon from '@mui/icons-material/MoneyOff';
import { useSelector } from 'react-redux';

export const Expenses = (props) => {
  const { data, loading, error } = useSelector((state) => state.data);
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
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
             {data ?.expense}
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
    </CardContent>
  </Card>
);
        }
