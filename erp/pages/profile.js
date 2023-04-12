import Head from "next/head";
import { useState, useEffect } from "react";
import { Box, Container, Grid } from "@mui/material";
import { Budget } from "../components/dashboard/budget";
import { ExpenseList } from "../components/dashboard/expense-list";
import { StocksList } from "../components/dashboard/stocks-list";
import { Sales } from "../components/dashboard/sales";
import { MostSold } from "../components/dashboard/most-sold";
import { Expenses } from "../components/dashboard/expenses";
import { TotalProfit } from "../components/dashboard/total-profit";
import { PieChartSells } from "../components/dashboard/pie-chart-sells";
import { DashboardLayout } from "../components/dashboard-layout";

import { useDispatch, useSelector } from 'react-redux';
import { setData, setLoading, setError } from "../store/reducers/data";

import { dashboardAPI } from "../utils/apiUtils";

const Page = () => {
  const [data1, setData1] = useState(null);
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.data);

  useEffect(() => {
    const token =  sessionStorage.getItem("token")
    async function fetchData() {
      try{
        const response = await dashboardAPI(token)
        setData1(response.data)
        dispatch(setData(response.data))
      }catch(error){
        console.log(error)
        dispatch(setError(error))
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <Head>
        <title>Dashboard | ERP</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth={false}>
          <Grid container spacing={3}>
            <Grid item lg={3} sm={6} xl={3} xs={12}>
              <Budget />
            </Grid>
            <Grid item xl={3} lg={3} sm={6} xs={12}>
              <TotalProfit sx={{ height: "100%" }}/>
            </Grid>
            <Grid item xl={3} lg={3} sm={6} xs={12}>
              <Expenses data={data1?.expense}/>
            </Grid>
            <Grid item xl={3} lg={3} sm={6} xs={12}>
              <MostSold />
            </Grid>

            <Grid item lg={8} md={12} xl={9} xs={12}>
              <Sales />
            </Grid>
            <Grid item lg={4} md={6} xl={3} xs={12}>
              <PieChartSells sx={{ height: "100%" }}  />
            </Grid>
            <Grid item lg={4} md={6} xl={3} xs={12}>
              <StocksList sx={{ height: "100%" }} />
            </Grid>
            <Grid item lg={8} md={12} xl={9} xs={12}>
              <ExpenseList />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
