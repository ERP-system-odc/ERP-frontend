import { useState, useEffect } from "react";
import {
  Button,
  Avatar,
  Box,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  Divider,
} from "@mui/material";

import { useRouter } from "next/router";
import Router from "next/router";
import { generalLedgerAPI } from "../../utils/apiUtils";

const ItemsListResults = () => {
  const [item1, setItem1] = useState([]);
  const [item2, setItem2] = useState([]);

  const router = useRouter();
  const a = router.query.date;
  const b = router.query.to;

  useEffect(() => {
    const token =  sessionStorage.getItem("token")
    async function fetchData() {
      try{
        const response = await generalLedgerAPI(a,b, token)
        setItem1(response.data.asset_general_ledger)
        setItem2(response.data.expense_general_ledger)
      }catch(error){
        console.log(error)
      }
    }
    fetchData();
  }, []);

  return (
    <Card sm={{ padding: 3 }}>
      <Box
        sx={{
          alignItems: "center",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          m: -1,
          padding: 3,
        }}
      >
        <Typography sx={{ m: 1 }} variant="h4">
          General Ledger
        </Typography>
        <Box sx={{ m: 1 }}>
          <Button
            color="primary"
            variant="contained"
            onClick={() => Router.push({ pathname: "../journalEntry" })}
          >
            Go Back
          </Button>
        </Box>
      </Box>
      <Box sx={{ minWidth: 1050 }}>
        <Typography sx={{ m: 1 }} variant="h5">
          Asset Final Balance
        </Typography>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Debit</TableCell>
              <TableCell>Credit</TableCell>
              <TableCell>Balanace Debit</TableCell>
              <TableCell>Balanace Credit</TableCell>
              <TableCell>Description</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {item1.map((val, index) => (
              <TableRow hover key={index}>
                <TableCell>
                  <Box
                    sx={{
                      alignItems: "center",
                      display: "flex",
                    }}
                  >
                    <Typography color="textPrimary" variant="body1">
                      {val.transaction_date}
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell>{val.debit}</TableCell>
                <TableCell>{val.credit}</TableCell>
                <TableCell>{val.balance_debit}</TableCell>
                <TableCell>{val.balance_credit}</TableCell>
                <TableCell>{val.description}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
      <Divider sx={{ padding: 2 }} />
      <Box sx={{ minWidth: 1050 }}>
        <Typography sx={{ m: 1 }} variant="h5">
          Expense Final Balance
        </Typography>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Debit</TableCell>
              <TableCell>Credit</TableCell>
              <TableCell>Balanace Debit</TableCell>
              <TableCell>Balanace Credit</TableCell>
              <TableCell>Description</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {item2.map((val, index) => (
              <TableRow hover key={index}>
                <TableCell>
                  <Box
                    sx={{
                      alignItems: "center",
                      display: "flex",
                    }}
                  >
                    <Typography color="textPrimary" variant="body1">
                      {val.transaction_date}
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell>{val.debit}</TableCell>
                <TableCell>{val.credit}</TableCell>
                <TableCell>{val.balance_debit}</TableCell>
                <TableCell>{val.balance_credit}</TableCell>
                <TableCell>{val.description}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </Card>
  );
};

export default ItemsListResults;
