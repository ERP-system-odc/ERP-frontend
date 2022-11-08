import { useState, useEffect } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import PropTypes from "prop-types";
import { format } from "date-fns";
import {
  Avatar,
  Box,
  Card,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from "@mui/material";

import { useRouter } from 'next/router'


const ItemsListResults = () => {
  const [item1, setItem1] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);
    const a='2022-11-08'

    const router = useRouter()
  console.log(router.query);
  const b=router.query.tip
  console.log(b)
  
  useEffect(() => {
    fetch(`http://localhost:5000/api/journalEntry/manage/${b}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: "Bearer " + sessionStorage.getItem("token"),
      },
     
    })
    .then(response => response.json())
        
    .then(data =>{ setItem1(data.data), console.log(item1)})
   
  },[])


  return (
    <Card>
    
        <Box sx={{ minWidth: 1050 }}>
          <Table>
            <TableHead>
              <TableRow>
              <TableCell>Date</TableCell>
                <TableCell>Account</TableCell>
                <TableCell>Debit</TableCell>
                <TableCell>Credit</TableCell>
           
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
                      {val.created_at}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>{val.account}</TableCell>

                  <TableCell>{val.debit}</TableCell>
                  <TableCell>{val.credit}</TableCell>
                  
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      
    </Card>
  );
};


export default ItemsListResults;