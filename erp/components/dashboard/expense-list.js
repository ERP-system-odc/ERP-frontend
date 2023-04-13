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
  Typography
} from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { useState, useEffect } from 'react';
import { expenseAPI } from '../../utils/apiUtils';


export const ExpenseList = () => {

  const [item1, setItem1] = useState([]);
  
  useEffect(() => {
    const token =  sessionStorage.getItem("token")
    async function fetchData() {
      try{
        const response = await expenseAPI(token)
        setItem1(response.data.foundExpense)
      }catch(error){
        console.log(error)
      }
    }
    fetchData();
  }, []);

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
