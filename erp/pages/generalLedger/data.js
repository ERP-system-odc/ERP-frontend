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
    fetch(`http://localhost:5000/api/generalLedger/manage/${a}/${b}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: "Bearer " + sessionStorage.getItem("token"),
      },
    })
      .then((response) => response.json())

      .then((data) => {
        setItem1(data.asset_general_ledger),
          setItem2(data.liability_general_ledger),
          setItem3(data.assetFinalBalance),
          setItem4(data.liabilityFinalBalance);
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
              <TableCell>Balanace</TableCell>
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
                <TableCell>{val.balance}</TableCell>
                <TableCell>{val.description}</TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell />
              <TableCell />
              <TableCell>
                <Typography>Asset Final Balance :</Typography>
              </TableCell>
              <TableCell>
                <Typography>{item3}</Typography>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Box>
      <Divider sx={{ padding: 2 }} />
      <Box sx={{ minWidth: 1050 }}>
        <Typography sx={{ m: 1 }} variant="h5">
          Liability Final Balance
        </Typography>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Debit</TableCell>
              <TableCell>Credit</TableCell>
              <TableCell>Balanace</TableCell>
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
                <TableCell>{val.balance}</TableCell>
                <TableCell>{val.description}</TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell />
              <TableCell />
              <TableCell>
                <Typography>Liability Final Balance :</Typography>
              </TableCell>
              <TableCell>
                <Typography>{item4}</Typography>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Box>
    </Card>
  );
};

export default ItemsListResults;
