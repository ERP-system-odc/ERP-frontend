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
import { getInitials } from "../../utils/get-initials";

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:5000/api/inventory/manage", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: "Bearer " + sessionStorage.getItem("token"),
    }
  });
  const data = await res.json();

  return {
    props: { items: data },
  };
};

export const ListExpense = () => {
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



  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <Card>
      <PerfectScrollbar>
        <Box sx={{ minWidth: 1050 }}>
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
    </Card>
  );
};
