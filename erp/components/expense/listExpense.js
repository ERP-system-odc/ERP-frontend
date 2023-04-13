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

import { expenseAPI } from "../../utils/apiUtils";


export const ListExpense = () => {
  const [item1, setItem1] = useState([]);

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    async function fetchData() {
      try {
        const response = await expenseAPI(token);
        setItem1(response.data.foundExpense);
      } catch (error) {
        console.log(error);
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
                <TableCell>expense_name</TableCell>
                <TableCell>expense_amount</TableCell>
                <TableCell>created_at</TableCell>
                <TableCell>updated_at</TableCell>
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
