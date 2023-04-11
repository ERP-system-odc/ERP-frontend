import { useState, useEffect } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
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
import { itemAPI } from "../../utils/apiUtils";

export const ItemsListResults = () => {
  const [item1, setItem1] = useState([]);

  useEffect(() => {
    const token =  sessionStorage.getItem("token")
    async function fetchData() {
      try{
        const response = await itemAPI(token)
        setItem1(response.data.data)
      }catch(error){
        console.log(error)
      }
    }
    fetchData();
  }, []);

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
              {item1.map((val) => (
                <TableRow hover key={val.id}>
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
    </Card>
  );
};
