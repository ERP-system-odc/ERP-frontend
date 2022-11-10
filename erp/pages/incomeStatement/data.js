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

  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);
  // const a='2022-11-08'

  const router = useRouter();
  console.log(router.query);
  const a = router.query.tip;
  const b = router.query.tip1;
  console.log(b);

  useEffect(() => {
    fetch(`http://localhost:5000/api/incomeStatement/manage/${a}/${b}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: "Bearer " + sessionStorage.getItem("token"),
      },
    })
      .then((response) => response.json())

      .then((data) => {
        setItem1(data.revenue),
          setItem2(data.inventory_expense),
          setItem3(data.other_expense)
          setItem4(data)
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
        Income Statement
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
        Income Statement from {a} to {b}
        </Typography>
  
      </Box>
      <Divider sx={{ padding:2 }}/>
      <Box>
      <Typography sx={{ m: 1 }} variant="h6">
        {item1.transaction_name} : {item1.balance}
        </Typography>
      <Typography sx={{ m: 1 }} variant="h6">
        {item2.transaction_name} : {item2.balance}
        </Typography>
      <Typography sx={{ m: 1 }} variant="h6">
        {item3.transaction_name} : {item3.balance}
        </Typography>
      <Typography sx={{ m: 1 }} variant="h6">
        Expense Sum : {item4.expense_sum}
        </Typography>
      <Typography sx={{ m: 1 }} variant="h6">
        Net Income : {item4.net_income}
        </Typography>
      
      </Box>
    </Card>
  );
};

export default ItemsListResults;
