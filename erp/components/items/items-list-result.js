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

export const ItemsListResults = ({ items }) => {
  const [item1, setItem1] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);

  useEffect(() => {
    fetch("http://localhost:5000/api/inventory/manage", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: "Bearer " + sessionStorage.getItem("token"),
      },
     
    })
    .then(response => response.json())
        
    .then(data => setItem1(data.data), console.log(data.data))
   
  },[])



  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };





  const data = [
    {
      inv_id: 1,
      inventory_name: "shoe",
      inventory_price: "2500",
      least_critical_amount: "2",
      inventory_quantity: "10",
      inventory_expense: "100",
    },
    {
      inv_id: 2,
      inventory_name: "Tshirt",
      inventory_price: "500",
      least_critical_amount: "4",
      inventory_quantity: "20",
      inventory_expense: "70",
    },
    {
      inv_id: 3,
      inventory_name: "Humain Hair",
      inventory_price: "5000",
      least_critical_amount: "2",
      inventory_quantity: "6",
      inventory_expense: "200",
    },
    {
      inv_id: 4,
      inventory_name: "Lip stick",
      inventory_price: "50",
      least_critical_amount: "10",
      inventory_quantity: "100",
      inventory_expense: "50",
    },
    {
      inv_id: 5,
      inventory_name: "Make Up",
      inventory_price: "1000",
      least_critical_amount: "3",
      inventory_quantity: "8",
      inventory_expense: "80",
    },
    {
      inv_id: 6,
      inventory_name: "Hoodie",
      inventory_price: "800",
      least_critical_amount: "4",
      inventory_quantity: "15",
      inventory_expense: "120",
    },
  ];

  return (
    <Card>
      <PerfectScrollbar>
        <Box sx={{ minWidth: 1050 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Inventory Name</TableCell>
                <TableCell>inventory_price</TableCell>
                <TableCell>Minimum No. to get Notified</TableCell>
                <TableCell>inventory_quantity</TableCell>
           
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
                        {val.inventory_name}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>{val.inventory_price}</TableCell>

                  <TableCell>{val.least_critical_amount}</TableCell>
                  <TableCell>{val.total_amount}</TableCell>
                  
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      {/* <TablePagination
        component="div"
        // count={items.length}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      /> */}
    </Card>
  );
};
