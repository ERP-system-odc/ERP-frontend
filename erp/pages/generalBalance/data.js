import { useState, useEffect } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import PropTypes from "prop-types";
import { format } from "date-fns";
import {
  Button,
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
  Divider,
} from "@mui/material";

import { useRouter } from "next/router";
import Router from "next/router";

const ItemsListResults = () => {
  const [item1, setItem1] = useState([]);
  const [item2, setItem2] = useState([]);
  const [item3, setItem3] = useState([]);
  const [item4, setItem4] = useState([]);
  const [item5, setItem5] = useState([]);
  const [item6, setItem6] = useState([]);

  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);
  // const a='2022-11-08'

  const router = useRouter();
  console.log(router.query);
  const a = router.query.tip;
  const b = router.query.tip1;
  console.log(a);
  console.log(b);

  useEffect(() => {
    fetch(`http://localhost:5000/api/balanceSheet/manage/${a}/${b}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: "Bearer " + sessionStorage.getItem("token"),
      },
    })
      .then((response) => response.json())

      .then((data) => {
        console.log(data);
        setItem1(data.cash);
        setItem2(data.inventory);
        setItem3(data.assetSum);
        setItem4(data.stock);
        setItem5(data.earning_or_loss);
        setItem6(data.net_stock);
      });
  }, []);

  console.log(item1);
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
              <TableCell>{item1.account_name}</TableCell>
              <TableCell></TableCell>
              <TableCell>{item1.account_balance}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{item2.account_name}</TableCell>
              <TableCell></TableCell>
              <TableCell>{item2.account_balance}</TableCell>
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
              <TableCell>{item4.account_name}</TableCell>
              <TableCell></TableCell>
              <TableCell>{item4.account_balance}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{item5.account_name}</TableCell>
              <TableCell></TableCell>
              <TableCell>{item5.account_balance}</TableCell>
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
