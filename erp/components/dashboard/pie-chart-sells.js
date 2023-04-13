import { useState, useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Box, Card, CardContent, CardHeader, Divider, Typography, useTheme } from '@mui/material';
import IceSkatingIcon from '@mui/icons-material/IceSkating';
import WatchIcon from '@mui/icons-material/Watch';
import CheckroomIcon from '@mui/icons-material/Checkroom';

import { dashboardAPI } from '../../utils/apiUtils';

export const PieChartSells = (props) => {

  const [item1, setItem1] = useState([]);
  const val=[];
  const Name=[];

  useEffect(() => {
    const token =  sessionStorage.getItem("token")
    async function fetchData() {
      try{
        const response = await dashboardAPI(token)
        setItem1(response.data.product_percentages)
      }catch(error){
        console.log(error)
      }
    }
    fetchData();
  }, []);

  for(let x=0;x<item1.length;x++){
    val.push(item1[x].percentage)
  }
  for(let x=0;x<item1.length;x++){
    Name.push(item1[x].product_name)
  }

  // console.log(item1)
  const theme = useTheme();

  const data = {
    datasets: [
      {
        data: val,
        backgroundColor: ['#3F51B5', '#e53935', '#FB8C00','#004800'],
        borderWidth: 8,
        borderColor: '#FFFFFF',
        hoverBorderColor: '#FFFFFF'
      }
    ],
    labels: Name
  };

  const options = {
    animation: false,
    cutoutPercentage: 80,
    layout: { padding: 0 },
    legend: {
      display: false
    },
    maintainAspectRatio: false,
    responsive: true,
    tooltips: {
      backgroundColor: theme.palette.background.paper,
      bodyFontColor: theme.palette.text.secondary,
      borderColor: theme.palette.divider,
      borderWidth: 1,
      enabled: true,
      footerFontColor: theme.palette.text.secondary,
      intersect: false,
      mode: 'index',
      titleFontColor: theme.palette.text.primary
    }
  };

  const devices = [
    {
      title: 'Shoes',
      value: 53,
      icon: IceSkatingIcon,
      color: '#3F51B5'
    },
    {
      title: 'Watch',
      value: 27,
      icon: WatchIcon,
      color: '#E53935'
    },
    {
      title: 'Hoodie',
      value: 17,
      icon: CheckroomIcon,
      color: '#FB8C00'
    },
    {
      title: 'Other',
      value: 3,
      icon: CheckroomIcon,
      color: '#FB8C00'
    }
  ];

  return (
    <Card {...props}>
      <CardHeader title="Products that are sold" />
      <Divider />
      <CardContent>
        <Box
          sx={{
            height: 300,
            position: 'relative'
          }}
        >
          <Doughnut
            data={data}
            options={options}
          />
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            pt: 2
          }}
        >
          {item1.map((a) => (
            <Box
              key={a.product_name}
              sx={{
                p: 1,
                textAlign: 'center'
              }}
            >
             {/* <Icon color="action" /> */}
              <Typography
                color="textPrimary"
                variant="body1"
              >
                {a.product_name}
              </Typography>
              <Typography
               // style={{ color }}
                variant="h4"
              >
                {Math.round(a.percentage)}
                %
              </Typography>
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};
