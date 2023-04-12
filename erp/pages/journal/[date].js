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
} from "@mui/material";

import { useRouter } from "next/router";
import Router from "next/router";
import { journalEntryAPI } from "../../utils/apiUtils";

const ItemsListResults = () => {
  const [item1, setItem1] = useState([]);

  const router = useRouter();
  const b = router.query.date;

  useEffect(() => {
    const token =  sessionStorage.getItem("token")
    async function fetchData() {
      try{
        const response = await journalEntryAPI(b, token)
        setItem1(response.data.data)
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
          Jornal Entry
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
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Account</TableCell>
              <TableCell>Debit</TableCell>
              <TableCell>Credit</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {item1?.map((val) => (
              <TableRow hover key={val.id}>
                <TableCell>
                  <Box
                    sx={{
                      alignItems: "center",
                      display: "flex",
                    }}
                  >
                    <Typography color="textPrimary" variant="body1">
                      {val.created_at}
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell>{val.account}</TableCell>
                <TableCell>{val.debit}</TableCell>
                <TableCell>{val.credit}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </Card>
  );
};

export default ItemsListResults;
