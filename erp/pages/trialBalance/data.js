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

  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);
  // const a='2022-11-08'

  const router = useRouter();
  console.log(router.query);
  const a = router.query.tip;
  const b = router.query.tip1;
  console.log(b);

  useEffect(() => {
    fetch(`http://localhost:5000/api/trialBalance/manage/${a}/${b}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: "Bearer " + sessionStorage.getItem("token"),
      },
    })
      .then((response) => response.json())

      .then((data) => {
        setItem1(data.asset),
          setItem2(data.liability),
          setItem3(data.capital)
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
        Trial Balance
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
        Trial Balance  from {a} to {b}
        </Typography>
  
      </Box>
      <Divider sx={{ padding:2 }}/>
      <Box>
      <Typography sx={{ m: 1 }} variant="h6">
        {item1.account} : {item1.balance}
        </Typography>
      <Typography sx={{ m: 1 }} variant="h6">
        {item2.account} : {item2.balance}
        </Typography>
      <Typography sx={{ m: 1 }} variant="h6">
        {item3.account} : {item3.balance}
        </Typography>
      
      </Box>
    </Card>
  );
};

export default ItemsListResults;
