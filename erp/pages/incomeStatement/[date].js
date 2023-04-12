import { useState, useEffect } from "react";
import { Button, Box, Card, Typography, Divider } from "@mui/material";

import { useRouter } from "next/router";
import Router from "next/router";
import { incomeStatementAPI } from "../../utils/apiUtils";

const ItemsListResults = () => {
  const [item1, setItem1] = useState([]);
  const [item2, setItem2] = useState([]);
  const [item3, setItem3] = useState([]);
  const [item4, setItem4] = useState([]);

  const router = useRouter();
  const a = router.query.date;
  const b = router.query.to;

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    async function fetchData() {
      try {
        const response = await incomeStatementAPI(a, b, token);
        setItem1(response.data.revenue),
          setItem2(response.data.inventory_expense),
          setItem3(response.data.other_expense);
        setItem4(response.data);
      } catch (error) {
        console.log(error);
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
      <Divider sx={{ padding: 2 }} />
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
