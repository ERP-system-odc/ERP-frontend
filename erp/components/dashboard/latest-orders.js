import { format } from 'date-fns';
import { v4 as uuid } from 'uuid';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Box,
  Button,
  Card,
  CardHeader,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Tooltip,
  Typography
} from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { SeverityPill } from '../severity-pill';
import { useState, useEffect } from 'react';
const orders = [
  {
    id: uuid(),
    ref: 'CDD1049',
    amount: 30.5,
    customer: {
      name: 'shoe'
    },
    createdAt: 1555016400000,
    status: 'Low'
  },
  {
    id: uuid(),
    ref: 'CDD1048',
    amount: 25.1,
    customer: {
      name: 'Tshirt'
    },
    createdAt: 1555016400000,
    status: 'Good'
  },
  {
    id: uuid(),
    ref: 'CDD1047',
    amount: 10.99,
    customer: {
      name: 'Pants'
    },
    createdAt: 1554930000000,
    status: 'Sold out'
  },
  {
    id: uuid(),
    ref: 'CDD1046',
    amount: 96.43,
    customer: {
      name: 'Humain Hair'
    },
    createdAt: 1554757200000,
    status: 'Low'
  },
  {
    id: uuid(),
    ref: 'CDD1045',
    amount: 32.54,
    customer: {
      name: 'Lip stick'
    },
    createdAt: 1554670800000,
    status: 'Good'
  },
  {
    id: uuid(),
    ref: 'CDD1044',
    amount: 16.76,
    customer: {
      name: 'Make Up'
    },
    createdAt: 1554670800000,
    status: 'Good'
  }
];

export const LatestOrders = () => {

  const [item1, setItem1] = useState([]);
  

  useEffect(() => {
    fetch("http://localhost:5000/api/expense/manage", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: "Bearer " + sessionStorage.getItem("token"),
      },
     
    })
    .then(response => response.json())
        
    .then(data => setItem1(data.foundExpense))
    
  },[])


return(
  <Card>
    <CardHeader title="Transactions" />
    <PerfectScrollbar>
      <Box sx={{ minWidth: 800 }}>
      <Table>
            <TableHead>
              <TableRow>
                <TableCell>expense_name</TableCell>
                <TableCell>expense_amount</TableCell>
                <TableCell>created_at</TableCell>
                <TableCell>updated_at</TableCell>
           
              </TableRow>
            </TableHead>
            <TableBody>
              {
              
              item1.map(val => (
                <TableRow
                  hover
                  key={val.id}
                 
                >
                  <TableCell>
                    <Box
                      sx={{
                        alignItems: "center",
                        display: "flex",
                      }}
                    >
                      <Typography color="textPrimary" variant="body1">
                        {val.expense_name}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>{val.expense_amount}</TableCell>

                  <TableCell>{val.created_at}</TableCell>
                  <TableCell>{val.updated_at}</TableCell>
                  
                </TableRow>
              ))}
            </TableBody>
          </Table>
      </Box>
    </PerfectScrollbar>
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-end',
        p: 2
      }}
    >
      <Button
        color="primary"
        endIcon={<ArrowRightIcon fontSize="small" />}
        size="small"
        variant="text"
      >
        View all
      </Button>
    </Box>
  </Card>
)};
