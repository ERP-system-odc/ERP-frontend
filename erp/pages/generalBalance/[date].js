import { useState, useEffect } from "react";
import {
  Button,
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
import { balanceSheetAPI } from "../../utils/apiUtils";

const ItemsListResults = () => {
  const [item1, setItem1] = useState([]);
  const [item2, setItem2] = useState([]);
  const [item3, setItem3] = useState([]);
  const [item4, setItem4] = useState([]);
  const [item5, setItem5] = useState([]);
  const [item6, setItem6] = useState([]);

  const router = useRouter();
  const a = router.query.date;
  const b = router.query.to;

  useEffect(() => {
    const token =  sessionStorage.getItem("token")
    async function fetchData() {
      try{
        const response = await balanceSheetAPI(a,b, token)
        setItem1(response.data.cash);
        setItem2(response.data.inventory);
        setItem3(response.data.assetSum);
        setItem4(response.data.stock);
        setItem5(response.data.earning_or_loss);
        setItem6(response.data.net_stock);
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
          Balance Sheet
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
          Balance Sheet from {a} to {b}
        </Typography>
      </Box>
      <Divider sx={{ padding: 2 }} />
      <Box>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Account</TableCell>
              <TableCell></TableCell>
              <TableCell>Balance</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          <TableRow>
              <TableCell><h3>Asset</h3></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{item1?.account_name}</TableCell>
              <TableCell></TableCell>
              <TableCell>{item1?.account_balance}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{item2?.account_name}</TableCell>
              <TableCell></TableCell>
              <TableCell>{item2?.account_balance}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell></TableCell>
              <TableCell><h3>Asset Sum</h3></TableCell>
              <TableCell><h3>{item3}</h3></TableCell>
            </TableRow>
            <TableRow>
              <TableCell><h3>Owners Equity</h3></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{item4?.account_name}</TableCell>
              <TableCell></TableCell>
              <TableCell>{item4?.account_balance}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{item5?.account_name}</TableCell>
              <TableCell></TableCell>
              <TableCell>{item5?.account_balance}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell></TableCell>
              <TableCell><h3>Net Stock</h3></TableCell>
              <TableCell><h3>{item6}</h3></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Box>
    </Card>
  );
};

export default ItemsListResults;
