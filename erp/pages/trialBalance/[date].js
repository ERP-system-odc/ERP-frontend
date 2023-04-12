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
import { trialBalanceAPI } from "../../utils/apiUtils";

const ItemsListResults = () => {
  const [item1, setItem1] = useState([]);
  const [item2, setItem2] = useState([]);
  const [item3, setItem3] = useState([]);
  const [item4, setItem4] = useState([]);
  const [item5, setItem5] = useState([]);
  const [item6, setItem6] = useState([]);
  const [item7, setItem7] = useState([]);

  const router = useRouter();
  const a = router.query.date;
  const b = router.query.to;

  useEffect(() => {
    const token =  sessionStorage.getItem("token")
    async function fetchData() {
      try{
        const response = await trialBalanceAPI(a,b, token)
        setItem1(response.data.asset);
        setItem2(response.data.liability);
        setItem3(response.data.capital);
        setItem4(response.data.expense);
        setItem5(response.data.revenue);
        setItem6(response.data.debit_sum);
        setItem7(response.data.credit_sum);
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
          Trial Balance from {a} to {b}
        </Typography>
      </Box>
      <Divider sx={{ padding: 2 }} />
      <Box>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Account</TableCell>
              <TableCell>Debit</TableCell>
              <TableCell>Credit</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>{item1.account}</TableCell>
              <TableCell>{item1.debit}</TableCell>
              <TableCell>{item1.credit}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{item2.account}</TableCell>
              <TableCell>{item2.debit}</TableCell>
              <TableCell>{item2.credit}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{item3.account}</TableCell>
              <TableCell>{item3.debit}</TableCell>
              <TableCell>{item3.credit}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{item4.account}</TableCell>
              <TableCell>{item4.debit}</TableCell>
              <TableCell>{item4.credit}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{item5.account}</TableCell>
              <TableCell>{item5.debit}</TableCell>
              <TableCell>{item5.credit}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell></TableCell>
              <TableCell><h3>{item6}</h3></TableCell>
              <TableCell><h3>{item7}</h3></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Box>
    </Card>
  );
};

export default ItemsListResults;
